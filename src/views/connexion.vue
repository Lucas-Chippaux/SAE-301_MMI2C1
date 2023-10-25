<template>
    <form class="login-container flex flex-col items-center justify-center mt-16 mb-24" @submit.prevent="connect()">
      <!-- Icône -->
      <img src="@/assets/icone/icone-connexion.svg" alt="Icône de connexion" class="w-16 h-16 mb-4" />
  
      <!-- Section E-mail -->
        <input type="email" id="email" placeholder="E-Mail" class="rounded-full px-10 py-2 border-2 mb-5 text-xl mt-5"/>
  
      <!-- Section Mot de passe -->
        <input type="password" id="password" placeholder="Mot de passe"  class="rounded-full px-10 py-2 border-2 text-xl mt-5"/>
  
      <!-- Bouton "Se connecter" -->
      <RouterLink to="/" ><button class="bg-[#3C6FAB] text-white font-montserrat login-button mt-6 rounded-full px-20 py-2 border-2 mt-5">Se connecter</button></RouterLink>
  
      <!-- Bouton "Se connecter avec Google" -->
      <RouterLink to="/connexion-google" class="font-montserrat flex google-login-button mt-6 rounded-full px-6 py-2 border-2 mt-5">
        <img class="w-4 h-4 mr-2 -ml-1 mt-1" src="../assets/icone/google-icon.svg" alt="icone google">
        Se connecter avec Google
      </RouterLink>

      <!-- Bouton "Se connecter avec Github" -->
      <RouterLink to="/connexion-google" class="font-montserrat flex google-login-button mt-6 rounded-full px-6 py-2 border-2 mt-5">
        <img class="w-4 h-4 mr-2 -ml-1 mt-1" src="../assets/icone/github-icone.svg" alt="icone github">
        Se connecter avec Github
      </RouterLink>
  
      <!-- Texte "Vous n'avez pas de compte ?" -->
      <p class="font-nunito text-gray-700 mt-6">Vous n'avez pas de compte ?</p>
  
      <!-- Texte "S'inscrire" -->
      <RouterLink to="/inscription" class="font-nunito text-bleu register-link">S'inscrire</RouterLink>
    </form>
  </template>

<script setup>
import { ref, onMounted } from 'vue';
import PocketBase from 'pocketbase';
    // PocketBase vps connexion
      var pocketbase_ip=''
        if(import.meta.env.MODE === 'production')
      pocketbase_ip='https://TaVue.lucaschippaux.fr/'
        else
      pocketbase_ip='http://127.0.0.1:8090/'

    const pb = new PocketBase(pocketbase_ip)
    // Elt de connexion
    let isConnected = ref(false)
    let user =  ref('')
    let password = ref('')
    // User connecté
    let currentUser = ref(null)
    let avatar = ref(null)

    var showInscription = ref(false)

    // Fonction de rafraichissement des données sur la page
    const refresh = () => {
        if(pb.authStore.isValid){
        currentUser.value = pb.authStore.model
        isConnected.value = true

        avatar.value = pocketbase_ip+"/api/files" //adresse serveur et du repertoire des fichiers img
            +currentUser.value.collectionId
            +"/"
            +currentUser.value.id //Id de l'utilisateur connecté
            +"/"
            +currentUser.value.avatar //Nom du fichier avatar de l'utilisateur
            +"?thumb=100x100"
        }
    }

  onMounted(async () => {
      refresh()
  })

  // Fonction connexion
  const connect = async() => {
    try{
      const authData = await pb.collection('users').authWithPassword(user.value, password.value)
      refresh()
    }catch(error){
      alert("Erreur de connexion : mauvais login et/ou mot de passe")
      user.value = ''
      password.value = ''
    }
  }
  // Fonction déconnexion
  const deconnect = ()=>{
    pb.authStore.clear()
    isConnected.value = false
    avatar.value = null
    // Retour à la page d'accueil -> Redirection
    window.location.href = "/"
  }
  // Fonction connexion avec Google
  const googleLogin = async() => {
    const authData = await pb.collection("users").authWithOAuth2({ provider: "google" });
    if (pb.authStore.isValid) {
      isConnected.value = true;
      currentUser.value = pb.authStore.model;
    }
  }
  // Fonction inscription
  const register = async() => {
    try {
      currentUser = {
        email:            document.getElementById("email").value,
        password:         document.getElementById("password").value,
        passwordConfirm:  document.getElementById("password").value,
        username:         document.getElementById("nom").value,
        name:             document.getElementById("prenom").value,
      };
      const records = await pb.collection("users").create(currentUser);
      
      await pb.collection("users").requestVerification(document.getElementById("email").value);
      alert("Inscription réussie ! Un mail de vérification vous a été envoyé");
      // Changement de page
      showInscription.value = false;
      // Actualisation des données et connexion
      refresh()
      isConnected.value = true;
    }catch(error){
      alert("Erreur lors de l'inscription. Vérifiez que votre adresse mail et votre mot de passe soient valides");
    }
  }
</script>

  