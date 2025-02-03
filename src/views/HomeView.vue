<!-- views/HomeView.vue -->
<template>
  <!-- wrap ProductList -->
  <a-card title="Product List">
    <ProductList />
  </a-card>
</template>

<script>
import ProductList from '../components/ProductList.vue';
// Importing Ant Design Vue
import { Card } from 'ant-design-vue';

export default {
  name: 'HomeView',
  components: {
    ProductList,
    ACard: Card,
  },
};
</script>

<style scoped>
.ant-card {
  margin: 30px;
}
</style>