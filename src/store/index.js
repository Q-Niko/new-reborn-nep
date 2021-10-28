import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    cart:[],
    newProduct:6,

    products: [
      {
        id: 1,
        name: "Lampada",
        nameImage: "./img_product/lampada_reborn.jpg",
        shortInfo:"Una bellissima lampada Vintage adatta ad arredare la tua scrivania e le tue serate in studio.",
        description: "Con questa bella lampada da terra, ad esempio, si può progettare con stile l'area di seduta di un salotto arredato in stile antico e, inoltre, si può creare una confortevole illuminazione ambientale. Telaio e base di Lincolndale convincono con una lavorazione dettagliata e brillano in tonalità bronzo scuro. La tonalità di lino di colore naturale è leggermente strutturata e non solo emette luce verso l'alto e verso il basso, ma la lascia anche brillare delicatamente attraverso il lino.",
        alt:"alt_prodotto_lampada_reborn",
        comments:["Ottima!","Bellissima!"],
        seller: {
          idUser:1,
          name: "Luca",
          surname:"Bianchi",
          role: "Antiquario",
          rating: "5",
        },
        price:1000,
        facilities:"Rateizzabile",
        location: {
          nation: "Italia",
          city: "Novara",
        },
        available: "true",
        inventory: 10,
        published: true,
      },
      {
        id: 2,
        name: "Poltrona",
        nameImage: "./img_product/poltrona_reborn.jpg",
        shortInfo:"Bellissima Poltrona da sera.",
        description: "descrizione-prodotto-poltrona-reborn",
        alt:"alt_prodotto_poltrona_reborn",
        comments:["Suplime!", "Stilosa!", "Fantastica!"],
        seller: {
          idUser:2, 
          name: "Andrea",
          surname:"Verdi",
          role: "Artigiana",
          rating: "4",
        },
        price: 500,
        facilities:"Rateizzabile",
        location: {
          nation: "Italia",
          city: "Nuoro",
        },
        available: "true",
        inventory: 10,
        published: true,
      },

      {
        id: 3,
        name: "Tavolo",
        nameImage: "./img_product/tavolo_reborn.jpg",
        shortInfo:"Bellissimo tavolo dper cene rustiche.",
        description: "descrizione-prodotto-tavolo-reborn",
        alt:"alt_prodotto_tavolo_reborn",
        comments:["T-Suplime!", "T-Stilosa!", "T.Santastica!"],
        seller: {
          idUser:3, 
          name: "Silvio",
          surname:"Grigis",
          role: "Commerciante",
          rating: "2",
        },
        price: 100,
        facilities:"Rateizzabile",
        location: {
          nation: "Italia",
          city: "Varese",
        },
        available: "true",
        inventory: 100,
        published: true,
      },
      {
        id: 4,
        name: "Candelabro",
        nameImage: "./img_product/candelabro_reborn.jpg",
        shortInfo:"Candelabro per nottate spaventose.",
        description: "descrizione-prodotto-candelabro-reborn",
        alt:"alt_prodotto_poltrona_reborn",
        comments:["C-Suplime!", "C-Stilosa!", "C-Fantastica!"],
        seller: {
          idUser:4, 
          name: "Francesco",
          surname:"Lanza",
          role: "Amatore",
          rating: "5",
        },
        price: 700,
        facilities:"Nessuna",
        location: {
          nation: "Italia",
          city: "Ancona",
        },
        available: "true",
        inventory: 0,
        published: true,
      },

      {
        id: 5,
        name: "Sgabello",
        nameImage: "./img_product/placeholder_reborn.jpg",
        shortInfo:"Sgabello da per il vostro bar casalingo.",
        description: "descrizione-prodotto-sgabello-reborn",
        alt:"alt_prodotto_sgabello_reborn",
        comments:["Suplime!", "Stilosa!", "Fantastica!"],
        seller: {
          idUser:5, 
          name: "Giulia",
          surname:"Biondi",
          role: "Collezionista",
          rating: "2",
        },
        price: 200,
        Facilities:"Spedizione Gratuita",
        location: {
          nation: "Italia",
          city: "Milano",
        },
        available: "true",
        inventory: 1000,
        published: true,
      },


    ],

    users: [ {
     
     idUser:1,
     name:"Alessandro",
     surname:"Rossi",
     email:"ale.rossi@email.com",
     role:"shopper",
     rating:2,
  
    },
    {
     
      idUser:2,
      name:"Mauro",
      surname:"Neri",
      email:"mauro.neri@email.com",
      role:"shopper",
      rating:4,
   
     },
    
    ],


    listNewletters: ["mail@reborn.it"],

    teamReborn:  [{

    idTeam:1,
    name:"Nicola",
    surname:"Quadrelli",
    img:"./img_product/nicola_reborn.jpg",
    email:"nicola@mymail.me",
    biography:"La storia di Nicola....",
    city:"Novara",
    role:"Admin"
    },

    { 
    idTeam:2,
    name:"Paola",
    surname:"Fois",
    img:"./img_product/paola_reborn.jpg",
    email:"paola@mymail.me",
    biography:"La storia di Paola....",
    city:"Nuoro",
    role:"Admin"
    },
    
    {
    idTeam:3,
    name:"Elena",
    img:"./img_product/elena_reborn.jpg",
    surname:"Gorini",
    email:"elena@mymail.me",
    biography:"La storia di Elena....",
    city:"Torino",
    role:"Admin"
    }
  ],


  },
  mutations: {

    /* Aggiunge Prodotto */

    addNewProduct: function (state, product) {
      product.id = state.newProduct;
      state.newProduct++;
      state.products.push(product);
    },

    /* fine */

    reduceInventory: function (state, index) {  
    state.products[index].inventory = state.products[index].inventory -1


    },

    
  },
  actions: {
  },
  modules: {
  },
  getters: {

    /*Prendo l'array di "products" da usare all'interno dei componenti [getters] */ 
    getProducts: function(state) { return state.products;},

    /*Prendo l'array di "cart" da usare all'interno dei componenti [getters]*/ 
    getCart: function(state) { return state.cart;},

    /*Prendo l'array di "user" da usare all'interno dei componenti/view [getters] */ 
    getUser: function(state) { return state.users;},
    
    /*Prendo "allImgReborn" da usare all'interno di tutto il sito [getters] */ 
    getAllImg: function(state) { return state.allImgReborn;},

    /*Prendo "teamReborn" da usare per simulare il log in e i cambi di stato relativi */ 
    getLogged: function(state) { return state.teamReborn;},


    




  },

});
