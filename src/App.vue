<!-- App.vue -->
<template>
  <a-layout>
    <Header />
    <a-layout-content>
      <router-view />
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
.ant-layout {
  min-height: 100vh;
}
.ant-layout-content {
  flex: 1;
  padding: 24px;
}
</style>