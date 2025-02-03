// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductDetail from '../components/ProductDetail.vue';
import CategoryView from '../views/CategoryView.vue';

// Create a router instance with history mode
const router = createRouter({
  mode: 'hash',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:category', 
      name: 'category-view',
      component: CategoryView,
    },
    // Dynamic route for each product
    {
      path: '/:category/:id',
      name: 'product-detail',
      component: ProductDetail,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;