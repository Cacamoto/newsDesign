<script setup>
const articles = useAllArticles();
const allNews = ref(false);
const recNews = ref(false);
const rngNews = ref(false);

onMounted(() => {
  setTimeout(() => {
    allNews.value = true;
  }, 200);
  setTimeout(() => {
    recNews.value = true;
  }, 400);
  setTimeout(() => {
    rngNews.value = true;
  }, 600);
});
</script>

<template>
  <div class="content-wrapper">
    <Transition name="desktopAllArtc">
      <div v-if="allNews" :key="articles[3].uri" class="content small">
        <NewsAllArticles />
      </div>
    </Transition>

    <Transition name="desktopAllArtc">
      <div v-if="recNews" class="content large">
        <NewsRecommended />
      </div>
    </Transition>
    <Transition name="desktopAllArtc">
      <div v-if="rngNews" :key="articles[5].uri" class="content small">
        <NewsRandom />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% - 3rem);
  gap: 1.5rem;
  z-index: 1;
  margin-bottom: 2rem;
}
@media (min-width: 768px) {
  .content-wrapper {
    display: flex;
    flex-direction: row;
    width: calc(100% - 4rem);
    gap: 2.5rem;
  }
}
@media (min-width: 1024px) {
  .content-wrapper {
    gap: 3rem;
    width: calc(100% - 4rem);
  }
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
}

.small,
.large {
  width: 100%;
}
@media (min-width: 768px) {
  .small {
    width: 25%;
  }
}
@media (min-width: 768px) {
  .large {
    width: 50%;
  }
}
</style>
