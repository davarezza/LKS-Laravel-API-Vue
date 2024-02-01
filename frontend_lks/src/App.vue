<template>
<div>
  <top-navbar></top-navbar>
  <div class="container">
  <router-view></router-view>
  </div>
  </div>
</template>

<script setup>
  import TopNavbar from './components/TopNavbar.vue'

  import { useRouter } from 'vue-router';

  const router = useRouter();

  if (router.currentRoute.value.path === '/') {
    router.replace('/home');
  }
</script>