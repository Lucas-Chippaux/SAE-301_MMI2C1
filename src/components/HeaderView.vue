<template>
  <div class="header-container bg-gris shadow-md p-4 flex items-center justify-between z-50" style="position: sticky; top: 0;">
    <!-- Logo -->
    <RouterLink to="/">
      <img src="@/assets/icone/logo_tavue.svg" alt="Logo" class="header-logo w-16" />
    </RouterLink>
    <!-- Liens navigation, separateur, et icone profil -->
    <div class="flex items-center">
      <!-- Lien de navigation -->
      <div class="nav-links flex space-x-4">
        <a href="/lunettes" class="nav-link font-montserrat text-bleufonce hover:text-bleuclair">Nos lunettes</a>
        <a href="/personnalisation" class="nav-link font-montserrat text-bleufonce hover:text-bleuclair">Personnalisation</a>
        <!-- ... Ajoutez d'autres liens au besoin -->
      </div>

      <!-- Séparateur -->
      <div class="separator h-5 border-l-2 mx-4"></div>

      <!-- Icône Personnage -->
      <a href="/connexion" class="profile-icon">
        <img src="@/assets/icone/Icone-compte.svg" alt="Profile Icon" class="w-8 h-8" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderView'
}
</script>
