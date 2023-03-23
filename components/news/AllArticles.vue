<script setup>
const rngArticle2 = useRandomArticle2();

const goToArticle = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <div class="article-image-wrapper">
    <nuxt-img
      :src="rngArticle2.multimedia[0].url"
      fit="cover"
      class="nuxt-img-style"
    />
    <div class="absolute">
      <Icon name="ion:load-a" class="article-loading-icon" /> Loading...
    </div>
  </div>
  <span class="article-title">{{ rngArticle2.title }}</span>

  <span class="article-abstract">
    {{ rngArticle2.abstract }}
  </span>
  <span class="article-read-more" @click="goToArticle(rngArticle2.url)"
    >Read More</span
  >
</template>

<style>
.article-image-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: var(--brownie);
}
.nuxt-img-style {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  z-index: 2;
}
.absolute {
  position: absolute;
}
.article-loading-icon {
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 1s linear infinite;
}
.article-title {
  font-size: 1.5rem;
  line-height: 2rem;
}
.article-abstract {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.article-read-more {
  opacity: 0.7;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.article-read-more:hover {
  opacity: 1;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
