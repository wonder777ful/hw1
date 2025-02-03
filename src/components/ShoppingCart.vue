<!-- components/ShoppingCart.vue -->
<template>
  <div>
    <h3 class="cart-title">Your Cart</h3>
    <template v-if="cartItems.length > 0">
      <a-list item-layout="horizontal" :data-source="cartItems">
        <template #renderItem="{ item }">
          <a-list-item>
            <div class="cart-item">
              <!-- 使用 getImageUrl 方法动态加载图片 -->
              <img :src="getImageUrl(item.image)" :alt="item.name" class="item-image" />
              <span class="item-name">{{ item.name }} - ${{ item.price }}</span>
              <a-input-number v-model:value="item.quantity" :min="1" class="item-quantity" />
            </div>
          </a-list-item>
        </template>
      </a-list>
    </template>
    <p v-else class="empty-cart">Your cart is empty.</p>
    <div v-if="cartItems.length > 0" class="checkout-section">
      <a-button type="primary" class="checkout-btn">
        Checkout
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {
      cartItems: [
        { name: 'Food 1', price: 10, quantity: 1, image: 'food1.jpg' },
        { name: 'Drink 2', price: 5, quantity: 2, image: 'drink2.jpg' },
      ],
    };
  },
  methods: {
    // 动态加载图片
    getImageUrl(imageName) {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.cart-title {
  font-weight: 600;
  margin-bottom: 16px; /* 标题与内容之间的间距 */
  padding: 0 16px; /* 标题的内边距 */
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 12px 16px; /* 内边距 */
  border-bottom: 1px solid #f0f0f0;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 48px;
  height: 48px;
  object-fit: cover;
  margin-right: 12px; 
}

.item-name {
  flex: 1;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px; /* 字体大小 */
}

.item-quantity {
  margin-left: 12px; /* 数量输入框与文字之间的间距 */
  width: 80px; /* 数量输入框的宽度 */
}

.empty-cart {
  color: rgba(0, 0, 0, 0.45);
  padding: 16px; /* 空购物车提示的内边距 */
  text-align: center; /* 居中显示 */
}

.checkout-section {
  margin-top: 16px;
  padding: 16px; /* 结账部分的内边距 */
  border-top: 1px solid #f0f0f0; /* 增加顶部边框 */
}

.checkout-btn {
  width: 100%;
}

/* 购物车容器的宽度和边距 */
.cart-dropdown-container {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1002;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  min-width: 350px; /* 购物车宽度 */
  margin-top: 8px;
  margin-right: 16px; /* 右边距 */
  border-radius: 8px; /* 圆角 */
}
</style>