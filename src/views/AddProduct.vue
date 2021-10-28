  <template >
  <div id="add-product">

      <p>Ciao, {{newProduct.user}} .Inserisci un prodotto</p>
           
      <form @submit.prevent="loadProduct">

           <div class="form-group col-md-6">
           <label for="product-name">Nome Prodotto</label>
           <input type="text" class="form-control" id="product-name" v-model="newProduct.name" required placeholder="Nome del Prodotto">
           <label for="seller-name">Nome Venditore</label>
           <input type="text" class="form-control" id="seller-name" v-model="newProduct.seller.name" required placeholder="Nome venditore">
           <label for="location-product">Luogo</label>
           <input type="text" class="form-control" id="location-product" v-model="newProduct.location.city" required placeholder="Luogo Prodotto">


          </div>
    
            <button type="submit" class="btn btn-primary">Inserisci</button>
      </form>

  </div>
</template>

<script>
export default {
data: function() {
    return {
    /* ripropongo l'albero degli attributi (destinazioni del form) perché possa essere popolati. */
    newProduct: {
        seller: {},
        location:{},
        comments:[""],  /* necessario per popolare la voce di nuovi commenti "newComment" in --> ProductDetails*/
        
    },
    user: {

      
    }


    };
  },
  methods: {

loadProduct: function() {
      this.$store.commit("addNewProduct", this.newProduct);
      this.$router.push({ name: "Home" });
    }

  },
};

</script>