<!-- views/CategoryView.vue -->
<template>
  <a-layout-content class="container">
    <!-- Title of the category -->
    <h2 class="category-title">Category: {{ categoryName }}</h2>
    <!-- Grid layout for displaying products -->
    <a-row :gutter="[16, 16]">
      <a-col :span="6" v-for="product in filteredProducts" :key="product.id">
        <!-- Product card component -->
        <ProductCard :product="product" />
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import productsData from '../data/products';

export default {
  name: 'CategoryView',
  components: {
    ProductCard,
  },
  data() {
    return {
      categoryName: '', // Name of the current category
      filteredProducts: [], // List of products filtered by category
    };
  },
  mounted() {
    // Set the category name from route params
    this.categoryName = this.$route.params.category;
    // Filter products based on the category name
    this.filteredProducts = productsData.filter(product => product.category === this.categoryName);
  },
  watch: {
    // Watch for route changes to update category and products
    $route(to) {
      this.categoryName = to.params.category;
      this.filteredProducts = productsData.filter(product => product.category === this.categoryName);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1600px;
  margin: 15px auto;
  padding: 24px;
}

.category-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}
</style>