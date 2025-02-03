<!-- components/Header.vue -->
<template>
  <a-layout-header class="header">
    <div class="header-container">
      <a-row type="flex" justify="start" align="middle">
        <!-- 品牌名称列 -->
        <a-col :span="6">
          <router-link to="/" class="brand">My Dummy Shop</router-link>
        </a-col>

        <!-- 菜单列 -->
        <a-col :span="12">
          <a-menu mode="horizontal" :selected-keys="selectedKeys" class="menu">
            <a-menu-item key="1">
              <router-link to="/">Home</router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/food">Food</router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <router-link to="/drink">Drink</router-link>
            </a-menu-item>
            <a-menu-item key="4">
              <router-link to="/cloth">Cloth</router-link>
            </a-menu-item>
          </a-menu>
        </a-col>

        <!-- 购物车按钮列 -->
        <a-col :span="6" class="cart-col">
          <div class="cart-container">
      <div 
        class="cart-trigger"
        @mouseenter="showCart = true"
        @mouseleave="handleCartLeave"
      >
        <a-button class="cart-button">
          <template #icon>
            <shopping-cart-outlined />
          </template>
        </a-button>
      </div>
            <div class="dropdown-positioner"></div>
                  <!-- 独立的下拉容器 -->
      <div 
        class="cart-dropdown-container"
        @mouseenter="showCart = true"
        @mouseleave="showCart = false"
        v-show="showCart"
      >
        <ShoppingCart />
      </div>
    </div>
        </a-col>
      </a-row>
    </div>

    <!-- Tabs 导航 -->
    <div class="tabs-container">
    <a-tabs v-model:activeKey="activeKey" @change="handleTabChange">
      <a-tab-pane 
        v-for="item in tabItems" 
        :key="item.path" 
        :tab="item.name" ></a-tab-pane>
    </a-tabs>
  </div>
  </a-layout-header>
</template>

<script>
import { ShoppingCartOutlined } from '@ant-design/icons-vue';
import { useHeaderLogic } from '../utils/headerLogic';
import { watch, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ShoppingCart from './ShoppingCart.vue';

export default {
  name: 'Header',
  components: {
    ShoppingCartOutlined,
    ShoppingCart,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { productCategory, productName, updateRoute } = useHeaderLogic();

    const selectedKeys = ref([]);
    const showCart = ref(false);

    const activeKey = computed(() => {
      const currentPath = route.path;
      const matchedItem = tabItems.value.find(item => item.path === currentPath);
      return matchedItem?.path || '';
    });
    const handleCartLeave = (e) => {
  // 检查是否移动到下拉框
  const dropdown = document.querySelector('.cart-dropdown-container');
  if (!dropdown || !dropdown.contains(e.relatedTarget)) {
    showCart.value = false;
  }
};
    const handleTabChange = (path) => {
      router.push(path);
    };

    const updateSelectedKeys = (route) => {
      if (route.path === '/') {
        selectedKeys.value = ['1']; // Home
      } else if (route.path.startsWith('/food')) {
        selectedKeys.value = ['2']; // Food
      } else if (route.path.startsWith('/drink')) {
        selectedKeys.value = ['3']; // Drink
      } else if (route.path.startsWith('/cloth')) {
        selectedKeys.value = ['4']; // Cloth
      } else {
        selectedKeys.value = []; // 其他路由
      }
    };

    updateSelectedKeys(router.currentRoute.value);

    watch(() => router.currentRoute.value, (to) => {
      updateRoute(to);
      updateSelectedKeys(to);
    });

    // Tabs 导航数据
  const tabItems = computed(() => {
  const items = [{ name: 'Home', path: '/' }];
  const pathArray = route.path.split('/').filter(Boolean);

  let accumulatedPath = '';
  pathArray.forEach((path, index) => {
    accumulatedPath += `/${path}`;
    items.push({ 
      name: path.charAt(0).toUpperCase() + path.slice(1),
      path: accumulatedPath
    });
  });

  return items;
});

  return {
    productCategory,
    productName,
    selectedKeys,
    showCart,
    activeKey,
    tabItems,
    handleTabChange,
    };
  },
};
</script>

<style scoped>

.header {
  background-color: #ffe58f !important; 
  padding: 0 24px;
}
.tabs-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 8px 0;
}

/* Remove Tabs underline */
.tabs-container :deep(.ant-tabs-nav::before) {
  border-bottom: none !important;
}

/* Remove the underline from the activation label */
.tabs-container :deep(.ant-tabs-ink-bar) {
  display: none !important;
}

.tabs-container :deep(.ant-tabs-tab-active) {
  font-weight: 500;
  color: #1890ff !important;
}

.tabs-container :deep(.ant-tabs-tab:hover) {
  color: #40a9ff;
}
.cart-container {
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.cart-trigger {
  position: relative;
  z-index: 1003;
}

.cart-dropdown-container {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1002;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  min-width: 300px;
  margin-top: 8px;
}
.dropdown-positioner {
  position: absolute;
  right: 0;
  top: 100%; /* 显示在购物车按钮下方 */
  z-index: 1001; /* 确保在头部上方 */
}

.tabs-container :deep(.ant-tabs-tab) {
  position: relative;
  margin-right: 24px !important; /* 增加右边距给箭头留空间 */
}

.tabs-container :deep(.ant-tabs-tab)::after {
  content: ">";
  position: absolute;
  right: -16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
}

.tabs-container :deep(.ant-tabs-tab:nth-last-child(2))::after {
  display: none !important;
}
</style>