<!-- components/ProductCard.vue -->
<template>
  <a-card class="product-card" hoverable>
    <!-- Router link to navigate to product detail page -->
    <router-link :to="`/${product.category}/${product.id}`">
      <!-- Product image -->
      <img :src="getImageUrl(product.image)" :alt="product.name" class="product-image" />
    </router-link>
    <div class="card-content">
      <!-- Router link for product name -->
      <router-link :to="`/${product.category}/${product.id}`" class="product-name">
        {{ product.name }}
      </router-link>
      <!-- Product price -->
      <p class="product-price">${{ product.price }}</p>
      <!-- Add to cart button -->
      <a-button type="primary" class="add-to-cart-btn">
        Add to Cart
      </a-button>
    </div>
  </a-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // 动态加载图片
    getImageUrl(imageName) {
      // 使用 import.meta.url 和 new URL() 动态加载图片
      return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.product-card {
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0; /* 图片顶部圆角 */
  /* height: 200px;  */
}

.card-content {
  padding: 16px;
}

.product-name {
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 8px;
  text-decoration: none;
}

.product-name:hover {
  color: #1890ff; 
}

.product-price {
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 16px;
}

.add-to-cart-btn {
  width: 100%;
}
</style>