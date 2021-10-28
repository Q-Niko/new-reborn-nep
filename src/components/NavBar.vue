<template>
  <div id="reborn-nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Logo</router-link>
        <!--<a class="navbar-brand" href="#">Navbar scroll</a>-->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <router-link class="nav-link active" to="/about"
                >Il Team</router-link
              >

              <!--<a class="nav-link active" aria-current="page" href="#">Home</a>-->
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/shop-products"
                >Vedi Prodotti</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/add-product"
                >Carica Prodotto</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/cart"
                ><button type="button" class="btn btn-primary">
                  Carrello: {{ elementCart.length }}
                </button></router-link
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button> 

            <select
              
              class="form-select"
              aria-label="Default select example"
              v-on:change="changeLogged"
            >
              <option selected>Seleziona l'utenza da loggare</option>
              <option v-for="user in selectLogged " v-bind:key="user.idTeam"  value="">{{user.name}}</option>
            </select>
          </form>
        </div>
      </div>
    </nav>

    <!-- TOAST CARRELLO -->

    <!--<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>-->
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div
        id="liveToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <img src="pippo" class="rounded me-2" alt="pippo" />
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div>
    <!-- FINE TOAST CARRELLO -->
  </div>
</template>

<script>
export default {
  name: "NavBar",
  /* faccio uscire la proprietà "productReborn" | Sarà bindata attraverso la proprietà "computed" -> "productsIn" in "Home.vue" 
  che richiama i dati effettivi del modello "products". */
  props: {
    /* proprietà */
  },

  data: function() {
    return {};
  },
  methods: {},

  computed: {
    /* Prendo l'array cart */
    elementCart: function() {
      return this.$store.getters.getCart;
    },

    selectLogged: function() {
      return this.$store.getters.getLogged;
    },

    changeLogged: function() { return "ciao" },


  },
};
</script>
