<template>
    <div id="shop">


<div class="container">
  <div class="row">
      <div id="section-top" class="col-xs-12 col-sm-6 col-md-8">
          
          <CardProduct v-for="product in productsIn" :key="product.serial" :productReborn="product"></CardProduct></div>
      <div id="aside-product" class="col-xs-6 col-md-4"></div>
   
    
    
    

  </div>
     
  </div>
  </div>
</template>

<script>

import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Shop",
  components: {
    CardProduct,
  },
  computed: {
    
    productsIn: function () {
      return this.$store.state.products;
    },
  },
};
</script>