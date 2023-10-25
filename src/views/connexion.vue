<template>
    <div class="login-container flex flex-col items-center justify-center mt-16 mb-24">
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
    </div>
  </template>

  