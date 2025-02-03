<!-- components/ProductDetail.vue -->
<template>
  <a-layout-content class="container">
    <div v-if="product" class="product-detail">
      <div class="product-image">
        <img :src="getImageUrl(product.image)" :alt="product.name" class="product-image" />
      </div>
      <div class="product-info">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">${{ product.price }}</p>
        <p class="product-description">{{ product.description }}</p>
        <a-button type="primary" class="add-to-cart-btn">
          Add to Cart
        </a-button>
      </div>
    </div>
    <div v-else class="not-found">
      <h2>Product not found.</h2>
      <p>Sorry, the product you are looking for does not exist.</p>
      <router-link to="/">
        <a-button type="primary">Return to homepage</a-button>
      </router-link>
    </div>
  </a-layout-content>
</template>

<script>
import productsData from '../data/products';

export default {
  name: 'ProductDetail',
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      const productId = this.$route.params.id;
      this.product = productsData.find(p => p.id === productId);
      if (!this.product) {
        console.error('Product not found:', productId);
        // this.$router.push('/');
      }
    },
    getImageUrl(imageName) {
      // 使用 import.meta.url 和 new URL() 动态加载图片
      return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    },
  },
  watch: {
    '$route.params.id': 'fetchProduct' // Monitor route changes, retrieve products again, and retrieve products when the ID changes. Otherwise, the information of the previous product may still be displayed
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 24px auto;
  padding: 24px;
}

.product-detail {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (min-width: 768px) {
  .product-detail {
    flex-direction: row;
  }
}

.product-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* height: 600px;  */
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.product-name {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.product-price {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.85);
  margin: 0;
}

.product-description {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  margin: 0;
}

.add-to-cart-btn {
  width: 100%;
}

.not-found {
  text-align: center;
  margin-top: 48px;
}

.not-found h2 {
  font-size: 24px;
  margin-bottom: 16px;
}

.not-found p {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 24px;
}
</style>