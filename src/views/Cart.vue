<template>
  <div class="cart">
      <!-- nel ciclo sotto prendo i valori nel "Cart" e faccio comparire i dati dei prodotti  associati per indice ad essi.-->
      <div class="row"><div class="col-12"><ul ><li v-for="element in inCart" :key="element"><span>{{inProducts[element].nameImage}}</span><span>{{inProducts[element].name}}</span><span>{{inProducts[element].shortInfo}}</span><span>{{inProducts[element].price}} €</span></li></ul></div></div>
      <div class="row"><div class="col-12">Hai {{inCart.length}} prodotti nel carrello - Totale: {{priceTotal}} €</div><span></span></div>
       
    
    
    
  </div>
</template>

<script>
// @ is an alias to /src
/*import NOME from "@/components/NOME.vue";*/

export default {
  name: "Cart",
  components: {
    /* componente, */
    
  },
  data: function() {
    return {
      /*dati*/
    };
    },
  computed: {
     inCart: function () { return this.$store.state.cart;},
     
     inProducts:function () { return this.$store.state.products;},

     priceTotal:function () {

         var totalCart = 0;
         for (let item in this.inCart) {
         totalCart = totalCart + (this.inProducts[this.inCart[item]].price);
      }
      return totalCart;



     },

    
  },

  methods: { 

   

  },
};


    
</script>