<template>
    <div class="footer-container bg-bleufonce text-blanc p-8 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="footer-logo">
        <img src="@/assets/icone/logo_tavue_blanc.svg" alt="Footer Logo" class="w-32 h-auto" />
      </a>

      <!-- Liens cliquables au milieu à gauche -->
      <div class="footer-links-left flex flex-col space-y-8">
        <a href="/" class="font-montserrat text-center text-blanc">NOS PRODUITS</a>
        <a href="/lunettes" class="nav-link font-nunito text-center text-blanc hover:text-gray-300">Nos lunettes</a>
        <a href="/personnalisation" class=" nav-link font-nunito text-center text-blanc hover:text-gray-300">Personnalisation</a>
      </div>

      <!-- Liens cliquables au milieu à droite -->
      <div class="footer-links-right flex flex-col space-y-8">
        <a href="/" class="font-montserrat text-center text-blanc">AIDE & INFORMATION</a>
        <a href="/connexion" class="nav-link font-nunito text-center text-blanc hover:text-gray-300">Mon compte</a>
        <a href="/" class="nav-link font-nunito text-center text-blanc hover:text-gray-300">Conditions d'utilisation</a>
      </div>

      <!-- Espace vide pour respecter la mise en forme -->
      <div></div>
    </div>
</template>

<script>
export default {
  name: 'FooterView'
  // Vous pouvez ajouter des méthodes, des données, etc. ici si nécessaire.
}
</script>

<style scoped>
/* Vous pouvez ajouter des styles CSS supplémentaires ici si nécessaire. */
</style>