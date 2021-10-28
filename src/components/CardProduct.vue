<template >
  <div class="col" id="card-product">

    <div class="card" style="width: 18rem">
      <img class="card-img-top" :src="productReborn.nameImage" :alt="productReborn.alt" />
      <div class="card-body">
        <h5 class="card-title">{{ productReborn.name }}</h5>
        <p class="card-text"><router-link v-bind:to="{ name:'product_details', params: { id:productReborn.id } }">Vai</router-link> | Rimanenti:{{ productReborn.inventory }} Pz</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Venditore: {{ productReborn.seller.name }} | {{ productReborn.seller.rating }} </li>
        <li class="list-group-item">L'oggetto si trova: {{ productReborn.location.city }} | {{ productReborn.location.nation }} </li>
        <li class="list-group-item">Prezzo: {{ productReborn.price }} € </li>
      </ul>
      <div class="card-body">
        {{ productReborn.shortInfo }}  <!-- Test accanto per vedere id-->----> {{productReborn.id}}
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  /* faccio uscire la proprietà "productReborn" | Sarà bindata attraverso la proprietà "computed" -> "productsIn" in "Home.vue" 
  che richiama i dati effettivi del modello "products". */
  props: ["productReborn"],

  data: function() {
    return { 

    


      };
    
    

  },
  methods: {},
  computed:{


  }
};

</script>