<template>
    <div class="login-container flex flex-col items-center justify-center mt-16 mb-24">
      <!-- Icône (utilisez votre propre icône) -->
      <img src="@/assets/icone/icone-connexion.svg" alt="Icône de connexion" class="w-16 h-16 mb-4" />
  
      <!-- Section Nom -->
      <input type="text" id="nom" placeholder="Nom" class="rounded-full px-10 py-2 border-2 mb-2 text-xl mt-5" />

      <!-- Section Prénom -->
      <input type="text" id="prenom" placeholder="Prénom" class="rounded-full px-10 py-2 border-2 mb-2 text-xl mt-5" />
  
      <!-- Section E-mail -->
      <input type="email" id="email" placeholder="E-mail" class="rounded-full px-10 py-2 border-2 mb-2 text-xl mt-5" />
  
      <!-- Section Mot de passe -->
      <input type="password" id="password" placeholder="Mot de passe" class="rounded-full px-10 py-2 border-2 mb-2 text-xl mt-5" />
  
      <!-- Bouton "S'inscrire" -->
      <RouterLink to="/">
        <button class="bg-[#3C6FAB] text-white font-montserrat login-button mt-6 rounded-full px-20 py-2 border-2">
          S'inscrire
        </button>
      </RouterLink>
  
      <!-- Texte "Vous avez déjà un compte ?" -->
      <p class="font-nunito text-gray-700 mt-4">Vous avez déjà un compte ?</p>
  
      <!-- Texte "Se connecter" (utilisez RouterLink) -->
      <RouterLink to="/connexion" class="font-nunito text-bleu register-link">Se connecter</RouterLink>
    </div>
  </template>
  