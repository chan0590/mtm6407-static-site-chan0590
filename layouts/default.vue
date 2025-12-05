<script setup>
import NavBar from '~/components/NavBar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
  </div>
</template>

