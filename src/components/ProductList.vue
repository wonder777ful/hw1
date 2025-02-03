<!-- components/ProductList.vue -->
<template>
  <a-layout-content class="container">
    <h2 class="title">Our Products</h2>
    <a-row :gutter="[16, 16]">
      <a-col :span="24" :sm="12" :md="8" :lg="6" v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script>
import ProductCard from './ProductCard.vue';
import productsData from '../data/products'; // Import product data

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  data() {
    return {
      products: productsData, // Use imported product data
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 24px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}
</style>