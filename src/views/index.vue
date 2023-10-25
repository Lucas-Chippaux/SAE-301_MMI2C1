<template>
  <div class="home-container relative">
    <div class="text-center">
      <h1 class="text-3xl font-bold font-montserrat mt-10">
        Découvrez <span class="font-mitr text-bleufonce">TaVue</span>
      </h1>
      <p class="font-montserrat text-lg mt-10">
        Chez TaVue, nous nous engageons à vous offrir des lunettes qui allient élégance et artisanat français, pour une vision claire et stylée.
      </p>
    </div>
  </div>

    <div class="relative">
      <img src="@/assets/img/lunette-presentation.jpg" class="w-screen h-screen object-cover" alt="Image de présentation">
      <div class="absolute top-0 left-0 w-screen h-screen flex flex-col justify-start items-start p-10">
        <p class="text-3xl font-bold font-palanquin text-bleufonce mb-2 mt-10">Personnaliser facilement vos lunettes !</p>
        <router-link class="font-montserrat bg-bleufonce text-white px-10 py-3 rounded-md" to="/personnalisation">Découvrir</router-link>
      </div>
    </div>

    <div class="products-container mt-10">
      <div class="products-title">
        <h2 class="text-3xl font-palanquin font-bold text-bleufonce ml-10">Nos produits</h2>
      </div>
    </div>

    <!-- card produits -->
    <div class="flex justify-center">
    <div class="flex flex-wrap overflow-hidden md:px-5 mt-12 mx-32">
      <RouterLink to="/lunettes" class="font-montserrat font-medium bg-blanc p-12 w-60 text-center space-y-4">
        <img class="w-60 h-30" src="@/assets/img/lunette_lumiere.png" alt="image de lunette">
        <p>Lyon Lumière</p>
        <p>80 €</p>
      </RouterLink>

      <RouterLink to="/lunettes" class="font-montserrat font-medium bg-blanc p-12 w-60 text-center space-y-4">
        <img class="w-60 h-30" src="@/assets/img/parisian_chic.png" alt="image de lunette">
        <p>Parisian Chic</p>
        <p>95 €</p>
      </RouterLink>

      <RouterLink to="/lunettes" class="font-montserrat font-medium bg-blanc p-12 w-60 text-center space-y-4">
        <img class="w-60 h-30" src="@/assets/img/lunette_orsay.png" alt="image de lunette">
        <p>Lunettes d'Orsay</p>
        <p>85 €</p>
      </RouterLink>

      <RouterLink to="/lunettes" class="font-montserrat font-medium bg-blanc p-12 w-60 text-center space-y-4">
        <img class="w-60 h-30" src="@/assets/img/bordeaux_vision.png" alt="image de lunette">
        <p>Bordeaux Vision</p>
        <p>105 €</p>
      </RouterLink>
    </div>
  </div>


    <div class="products-container mt-10">
      <div class="products-title">
        <h2 class="text-3xl font-palanquin font-bold text-bleufonce ml-10">Votre historique de personnalisation</h2>
      </div>
    </div>

    <!-- card historique -->
    <div class="flex flex-wrap overflow-hidden md:px-5 mt-12 justify-between mx-32">
      <div class="font-montserrat bg-blanc p-12 w-60 text-center space-y-4">
        <img class="w-60 h-30" src="../assets/img/lunette_commande-rouge.png" alt="image de lunette">
        <RouterLink to="/personnalisation"><button class="font-montserrat bg-bleufonce text-white px-3 py-1 rounded-md">Personnaliser</button></RouterLink>
      </div>

      <div class="font-montserrat bg-blanc p-12 w-60 text-center space-y-4">
        <img class="w-60 h-30" src="../assets/img/lunette_commande-bleu.png" alt="image de lunette">
        <RouterLink to="/personnalisation"><button class="font-montserrat bg-bleufonce text-white px-3 py-1 rounded-md">Personnaliser</button></RouterLink>
      </div>

      <div class="font-montserrat bg-blanc p-12 w-60 text-center space-y-4">
        <img class="w-60 h-30" src="../assets/img/lunette_commande-marron.png" alt="image de lunette">
        <RouterLink to="/personnalisation"><button class="font-montserrat bg-bleufonce text-white px-3 py-1 rounded-md">Personnaliser</button></RouterLink>
      </div>
    </div>

    <div class="couverture">
      <img src="../assets/img/couverture.png" alt="Couverture accueil" />
    </div>

    <div class="map-container">
      <MapView />
    </div>

</template>

<style scoped>
.full-screen {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>

<script setup>
import MapView from '../components/MapView.vue';
</script>

