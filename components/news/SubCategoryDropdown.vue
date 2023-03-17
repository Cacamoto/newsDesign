<script setup>
defineProps(["categories"]);
</script>

<template>
  <NuxtLink
    v-for="category in categories"
    :key="category.name"
    :to="category.link"
    class="border p-1 px-2 rounded-xl scale-100 hover:scale-105 hover:text-[#af695c] transition-all duration-200 ease"
  >
    <span>{{ category.name }}</span>
  </NuxtLink>
</template>
