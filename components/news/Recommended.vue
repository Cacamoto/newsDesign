<script setup>
const rngArticle = useRandomArticle();

const goToArticle = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <div class="article-image-wrapper">
    <nuxt-img
      :src="rngArticle.multimedia[0].url"
      fit="cover"
      class="nuxt-img-style"
    />
    <div class="absolute">
      <Icon name="ion:load-a" class="article-loading-icon" /> Loading...
    </div>
  </div>
  <span class="article-title">{{ rngArticle.title }}</span>

  <span class="article-abstract">
    {{ rngArticle.abstract }}
  </span>
  <span class="article-read-more" @click="goToArticle(rngArticle.url)"
    >Read More</span
  >
</template>
