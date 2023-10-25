<template>
  <div class="products-container mt-10">
    <div class="products-title">
      <h2 class="text-3xl font-palanquin font-bold text-bleufonce ml-10">Nos lunettes</h2>
    </div>
  </div>

  <div class="md:px-5 mt-12 mx-32 md:flex md:flex-wrap">
    <div class="my-4 mb-20">
      <div class="font-montserrat bg-blanc p-1 w-90 space-x-4 flex">
        <img class="w-60 h-30" src="@/assets/img/lunette_lumiere.png" alt="image de lunette">
        <div class="flex flex-col justify-between">
          <div>
            <h3 class="font-montserrat font-medium">Lyon Lumière - 80 €</h3>
            <p class="font-nunito text-sm mt-5">"Lyon Lumière" est une paire de lunettes qui capture la beauté de la lumière lyonnaise. Ces lunettes unisexes allient un design minimaliste à une touche de sophistication. Fabriquées en France, elles incarnent l'artisanat de qualité et offrent un confort visuel inégalé.</p>
          </div>
          <RouterLink to="/personnalisation" class="font-montserrat bg-bleufonce text-white px-3 py-1 rounded-md self-start mt-5">
            Personnaliser</RouterLink>
        </div>
      </div>
    </div>
  
    <div class="my-4 mb-20"> <!-- Ajout de mb-4 pour espacement -->
  <div class="font-montserrat bg-blanc p-1 w-90 space-x-4 flex">
    <img class="w-60 h-30" src="@/assets/img/parisian_chic.png" alt="image de lunette">
    <div class="flex flex-col justify-between">
      <div>
        <h3 class="font-montserrat font-medium">Parisian Chic - 95 €</h3>
        <p class="font-nunito text-sm mt-5">Les lunettes "Parisian Chic" incarnent l'élégance intemporelle de la mode parisienne. Leur design épuré et raffiné évoque le charme de la capitale française, tandis que la fabrication artisanale en France assure une qualité exceptionnelle. Avec "Parisian Chic", vous porterez l'essence de la mode parisienne à chaque instant.</p>
      </div>
 
      <RouterLink to="/personnalisation" class="font-montserrat bg-bleufonce text-white px-3 py-1 rounded-md self-start mt-5">
        Personnaliser
      </RouterLink>
    </div>
  </div>
</div>

  
<div class="my-4 mb-20"> 
  <div class="font-montserrat bg-blanc p-1 w-90 space-x-4 flex">
    <img class="w-60 h-30" src="@/assets/img/lunette_orsay.png" alt="image de lunette">
    <div class="flex flex-col justify-between">
      <div>
        <h3 class="font-montserrat font-medium">Lunettes d'Orsay - 85 €</h3>
        <p class="font-nunito text-sm mt-5">Les "Lunettes d'Orsay" sont une ode à l'art et à la culture française. Inspirées par le célèbre musée d'Orsay à Paris, ces lunettes unisexes allient une esthétique contemporaine à des détails classiques. Elles sont conçues pour les esprits créatifs qui apprécient l'art de voir et d'être vus.</p>
      </div>
   
      <RouterLink to="/personnalisation" class="font-montserrat bg-bleufonce text-white px-3 py-1 rounded-md self-start mt-5">
        Personnaliser
      </RouterLink>
    </div>
  </div>
</div>

  
      <div class="my-4 mb-20">
        <div class="font-montserrat bg-blanc p-1 w-90 space-x-4 flex">
          <img class="w-60 h-30" src="@/assets/img/bordeaux_vision.png" alt="image de lunette">
          <div class="flex flex-col justify-between">
            <div>
              <h3 class="font-montserrat font-medium">Bordeaux Vision - 105 €</h3>
              <p class="font-nunito text-sm mt-5">"Bordeaux Vision" incarne la sophistication des vins de Bordeaux dans une paire de lunettes. Leur design élégant et épuré reflète le raffinement de la région bordelaise. Fabriquées en France, ces lunettes unisexes vous offrent une vision claire tout en étant un accessoire de style incontournable.</p>
            </div>
            <RouterLink to="/personnalisation" class="font-montserrat bg-bleufonce text-white px-3 py-1 rounded-md self-start mt-5">
            Personnaliser
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  