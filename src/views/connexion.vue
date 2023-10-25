<template>
  <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8 mb-20 mt-20">
    <div class="w-full max-w-md space-y-8">
      <div v-if="currentUser">
        <div>
          <button type="button" @click="doLogout"
            class="font-montserrat rounded-md bg-bleu px-3 py-2 text-sm font-semibold text-blanc shadow-sm hover:bg-grey-400 hover:bg-bleufonce focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600 mt-4 mb-80">Déconnexion</button>

        </div>
      </div>

      <!-- connexion -->

      <div v-else>
        <img class="mx-auto" src="../assets/icone/icone-connexion.svg" alt="icone profil">
        <div class="sm:col-span-2 sm:col-start-1 mt-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
          <div class="mt-2">
            <input v-model="username" type="text" name="username" id="username" autocomplete="none"
              placeholder="Votre e-mail "
              class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div class="sm:col-span-2 sm:col-start-1 mt-2">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
          <div class="mt-2">
            <input v-model="password" type="password" name="password" id="password" autocomplete="none"
              placeholder="Votre mot de passe"
              class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div v-if="loginMode">
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <button type="button" @click="doLogin"
              class="w-40 font-montserrat mr-3 rounded-md bg-bleu px-3 py-2 text-sm font-semibold text-blanc shadow-sm hover:bg-bleufonce focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4">Se connecter</button>
              <button type="button"  @click="loginMode = false"
              class="w-40 font-montserrat mr-3 rounded-md bg-bleu px-3 py-2 text-sm font-semibold text-blanc shadow-sm hover:bg-bleufonce focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4">S'inscrire</button>
              <button type="button" @click="doLogin"
              class="w-30 font-montserrat mr-3 rounded-md bg-white border border-bleu px-5 py-2 text-sm font-semibold text-bleu shadow-sm hover:bg-bleu hover:text-blanc focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"> <img class="w-6 h-6 mr-2 -ml-1 mt-1" src="../assets/icone/google-icon.svg" alt="icone google"> Se connecter avec Google</button>
              <button type="button" @click="doLogin"
              class="w-30 font-montserrat mr-3 rounded-md bg-white border border-bleu px-5 py-2 text-sm font-semibold text-bleu shadow-sm hover:bg-bleu hover:text-blanc focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"> <img class="w-6 h-6 mr-2 -ml-1 mt-1" src="../assets/icone/github-icone.svg" alt="icone github"> Se connecter avec Github</button>
          </div>
        </div>

        <!-- inscription -->

        <div v-else>
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">Pseudo</label>
            <div class="mt-2">
              <input v-model="fullName" type="text" name="fullName" id="fullName" autocomplete="none"
                placeholder="Votre pseudo"
                class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <button type="button" @click="doCreateAccount"
              class="mr-3 rounded-md bg-bleu px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bleufonce focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Créer un compte</button>

            <button type="button" @click="loginMode = true"
              class="rounded-md bg-bleu px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bleufonce focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bleu">Annuler
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- import vue -->

<script setup>
import { onMounted, ref } from 'vue';
import PocketBase from 'pocketbase';

let pb = null;
const currentUser = ref();
const username = ref("");
const password = ref("");
const fullName = ref("");

const loginMode = ref(true);

onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090');

  pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model
  }, true)

});

const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
}

const doLogin = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(username.value, password.value);

    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);
    // currentUser.value = pb.authStore.model
  } catch (error) {
    alert(error.message)
  }
}

const doCreateAccount = async () => {
  try {
    const data = {
      "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
      "email": username.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value,
      "name": fullName.value
    };

    const record = await pb.collection('users').create(data);

    await doLogin();
  } catch (error) {
    alert(error.message)
  }
}

</script>