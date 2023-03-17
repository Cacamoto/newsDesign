<script setup>
const allArticles = useAllArticles();

const goToArticle = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <!-- Mobile -->
  <div class="sm:hidden block overflow-x-scroll w-full pb-4">
    <div class="flex flex-row gap-4 w-[calc((100vw-2rem)*4)]">
      <div
        v-for="(article, index) in allArticles"
        :key="index"
        class="flex flex-col ites-start justify-start gap-4 w-full"
      >
        <div
          class="relative w-[20rem] aspect-square bg-[#af695c] flex items-center justify-center"
        >
          <nuxt-img
            :src="article.multimedia[0].url"
            fit="cover"
            class="w-screen aspect-square z-[2]"
          />
          <div class="absolute">
            <Icon name="ion:load-a" class="w-6 h-6 animate-spin" /> Loading...
          </div>
        </div>

        <span class="text-xl">{{ article.title }}</span>
        <span class="text-sm">{{ article.abstract }}</span>
        <span
          class="opacity-70 cursor-pointer hover:opacity-100 transition-all duration-200 ease"
          @click="goToArticle(article.url)"
          >Read More</span
        >
      </div>
    </div>
  </div>
  <!-- Mid -->

  <div class="hidden sm:block lg:hidden overflow-y-scroll w-full pb-4">
    <div class="flex flex-col gap-4 w-full max-h-[42.5rem]">
      <div
        v-for="(article, index) in allArticles"
        :key="index"
        class="flex flex-col ites-start justify-start gap-4 w-full"
      >
        <div
          class="relative w-full aspect-square bg-[#af695c] flex items-center justify-center"
        >
          <div class="absolute">
            <Icon name="ion:load-a" class="w-6 h-6 animate-spin" /> Loading...
          </div>
          <nuxt-img
            :src="article.multimedia[0].url"
            fit="cover"
            class="w-screen aspect-square z-[2]"
          />
        </div>
        <span class="text-2xl">{{ article.title }}</span>
        <span class="text-sm">{{ article.abstract }}</span>
        <span
          class="opacity-70 cursor-pointer hover:opacity-100 transition-all duration-200 ease"
          @click="goToArticle(article.url)"
          >Read More</span
        >
      </div>
    </div>
  </div>
  <!-- Desktop -->
  <div class="hidden lg:block overflow-y-scroll w-full lg:max-h-max pb-4 mb-4">
    <div
      class="flex flex-col gap-4 w-full lg:max-h-[calc(50vw-5.1rem)] xl:max-h-[calc(50vw-5.3rem)]"
    >
      <div
        v-for="(article, index) in allArticles"
        :key="index"
        class="flex flex-col ites-start justify-start gap-4 w-full"
      >
        <div
          class="relative w-full aspect-square bg-[#af695c] flex items-center justify-center"
        >
          <div class="absolute">
            <Icon name="ion:load-a" class="w-6 h-6 animate-spin" /> Loading...
          </div>
          <nuxt-img
            :src="article.multimedia[0].url"
            fit="cover"
            class="w-screen aspect-square z-[2]"
          />
        </div>
        <span class="text-xl xl:text-2xl">{{ article.title }}</span>
        <span class="text-sm">{{ article.abstract }}</span>
        <span
          class="opacity-70 cursor-pointer hover:opacity-100 transition-all duration-200 ease"
          @click="goToArticle(article.url)"
          >Read More</span
        >
      </div>
    </div>
  </div>
</template>
