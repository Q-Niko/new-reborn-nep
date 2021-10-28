<template>
  <div class="container" id="area-details">
    <div class="row">
      <div class="col-8" id="section-dx">
        <div class="row">
          <div class="col">
            <h1>{{listProduct[productSelected].name}}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <img
              src="pippo"
              alt="ALT IMAGE"
            />
          </div>
          <div class="col-6">
            <p class="text-description">
              {{ listProduct[productSelected].description }}
            </p>
            <p>
              <button
                type="button"
                class="btn btn-secondary h4"
                data-toggle="tooltip"
                data-placement="top"
                title="Tooltip on top"
              >
                {{ listProduct[productSelected].price }} €</button
              >
              
              
              <!-- trovato modo di applicare due funzioni ad un solo evento VueJs Click  nello specifico pusha index prodotto e riduce l'inventario del prodotto associato a quell'index-->
              <button class="btn h4"  v-on:click="addToCart(); cutInventory()" style="background-color:purple; color:white;">
                Acquista
              </button>

              <button class="btn h4"  v-on:click="cutInventory" style="background-color:purple; color:white;">
                -1
              </button>

              <button class="btn h4"  v-on:click="cutToCart" style="background-color:purple; color:white;">
                Svuota
              </button>

              <span> Pezzi disponibili:
                {{currentInventory}}</span>
            </p>
            <p>
              <span class="h6">
                Agevolazioni:
                {{ listProduct[productSelected].facilities }}</span
              >
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <button type="button" class="btn btn-primary btn-role">
              {{ listProduct[productSelected].seller.role }}
            </button>
          </div>
          <div class="col-3">
            <button type="button" class="btn btn-primary">
              {{ listProduct[productSelected].seller.name }}
              {{ listProduct[productSelected].seller.surname }}
              <span class="badge badge-light"
                >Rating:{{ listProduct[productSelected].seller.rating }}</span
              >
            </button>
          </div>
          <div class="col-3">
            Luogo Oggetto: {{ listProduct[productSelected].location.city }}
          </div>
        </div>
        <div class="row">
          
          <div v-show="currentInventory < 3 && currentInventory != 0" class="col-12">Il prodotto è in esaurimento. Affrettati ad acquistarlo.</div></div>
          <div v-show="currentInventory >= 10" class="col-12">Ci sono molti pezzi: il prodotto è in offerta.</div>
          <div v-show="currentInventory == 0 " class="col-12">Prodotto non disponibile</div>
          
      </div>

      <div class="col-4" id="aside-sx">
        <div class="row">
          <h2>Commenta {{ listProduct[productSelected].name }}</h2>
        </div>
        <div class="row">
          <div class="col-12">
            <form @submit.prevent="loadComment">
              <div class="form-group">
                <label for="name-user">Sei loggato come: </label>
                <input
                  type="text"
                  class="form-control"
                  id="name-user"
                  placeholder="Il tuo Nome"
                />
              </div>

              <div class="form-group">
                <label for="comment-product">Scrivi un Commento</label>
                <textarea
                  class="form-control"
                  id="comment-product"
                  rows="3"
                  v-model="newComment"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="container bg-info" id="list-comments">
            <div class="row">
              <div class="col-12"><h5>Commenti Recenti</h5></div>
            </div>
            <div class="row">
              <div class="col-12">
              {{ listProduct[productSelected].comments[ listProduct[productSelected].comments.length - 1]}}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12"><h5>Tutti i commenti</h5></div>
            <ul style="list-style-type: none">
              <li v-for="comment in listProduct[productSelected].comments" :key="comment.index"> {{ comment }} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "area-details",
  props: ["id"],
  data: function() {
    return {
      newComment: [],
      
      
    };
  },

  methods: {
    loadComment: function() {
      return this.$store.state.products[this.productSelected].comments.push(this.newComment);
      
    },

      /* fine*/ 

    addToCart: function() {
      return this.$store.state.cart.push(this.productSelected);  /* mette il valore dell'indice prodotto nell'array cart */
      
      
    },

    /* fine */
    
    cutToCart: function() { return  this.$store.state.cart = []  },
    
     /* fine */  
     
     cutInventory: function() {this.$store.commit("reduceInventory", this.productSelected);
} 
    /* fine */
    
  },

  computed: {
    /* Si reperisce la path personalizzato che corrisponde all'id del prodotto, associato tramite route. 
        Lo uso per determinare l'indice del prodotto (e di dati) da visualizzare../*/
    productSelected: function() {
      return this.$route.params.id - 1;
    },

    /* Si reperisce la lista prodotti tramite un getters in index.js*/
    listProduct: function() {
      return this.$store.getters.getProducts;
    },

    /* Abbrevio per richiamare il valore corrente */
    currentInventory: function() { 
      return this.listProduct[this.productSelected].inventory },

      /* fine */


      

    

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped"></style>
