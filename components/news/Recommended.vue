<script setup>
const rngArticle = useRandomArticle();

const goToArticle = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <div
    class="relative w-full aspect-square bg-[#af695c] flex items-center justify-center"
  >
    <nuxt-img
      :src="rngArticle.multimedia[0].url"
      fit="cover"
      class="w-full aspect-square z-[2]"
    />
    <div class="absolute">
      <Icon name="ion:load-a" class="w-6 h-6 animate-spin" /> Loading...
    </div>
  </div>
  <span class="text-2xl">{{ rngArticle.title }}</span>

  <span class="text-sm">
    {{ rngArticle.abstract }}
  </span>
  <span
    class="opacity-70 mb-8 cursor-pointer hover:opacity-100 transition-all duration-200 ease"
    @click="goToArticle(rngArticle.url)"
    >Read More</span
  >
</template>
