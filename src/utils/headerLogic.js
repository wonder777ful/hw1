// src/utils/headerLogic.js
import { ref } from 'vue';
import productsData from '../data/products';

export function useHeaderLogic() {
  const productCategory = ref('');
  const productName = ref('');

  const updateRoute = (newRoute) => {
    if (newRoute.path.startsWith('/category/')) {
      const categoryId = newRoute.params.category;
      const category = productsData.find(p => p.category === categoryId);
      if (category) {
        productCategory.value = category.category;
      }
    } else if (newRoute.path.startsWith('/category/:category/:id')) {
      const productId = newRoute.params.id;
      const product = productsData.find(p => p.id === productId);
      if (product) {
        productCategory.value = product.category;
        productName.value = product.name;
      }
    } else {
      productCategory.value = '';
      productName.value = '';
    }
  };

  return { productCategory, productName, updateRoute };
}