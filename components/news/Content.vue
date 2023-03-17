<script setup>
const articles = useAllArticles();
const allNewsPc = ref(false);
const recNewsPc = ref(false);
const rngNewsPc = ref(false);
const allNewsMob = ref(false);
const recNewsMob = ref(false);
const rngNewsMob = ref(false);

onMounted(() => {
  setTimeout(() => {
    allNewsPc.value = true;
    recNewsMob.value = true;
  }, 200);
  setTimeout(() => {
    recNewsPc.value = true;
    allNewsMob.value = true;
  }, 400);
  setTimeout(() => {
    rngNewsPc.value = true;
    rngNewsMob.value = true;
  }, 600);
});
</script>

<template>
  <div
    class="lg:hidden flex flex-col items-center justify-start w-full gap-6 z-[1]"
  >
    <Transition name="desktopAllArtc">
      <div
        v-if="recNewsMob"
        :key="articles[3].uri"
        class="flex flex-col ites-start justify-start gap-4 w-full"
      >
        <NewsRecommended />
      </div>
    </Transition>
    <div
      :key="articles[4].uri"
      class="flex flex-col w-full sm:flex-row sm:gap-4"
    >
      <Transition v-if="allNewsMob" name="desktopAllArtc">
        <div class="sm:w-1/2 sm:flex sm:flex-1 mb-8">
          <NewsAllArticles />
        </div>
      </Transition>
      <Transition v-if="rngNewsMob" name="desktopAllArtc">
        <div
          :key="articles[5].uri"
          class="flex flex-col ites-start justify-start gap-4 w-full sm:w-1/2"
        >
          <NewsRandom />
        </div>
      </Transition>
    </div>
  </div>
  <div class="hidden lg:flex flex-row w-full gap-10 xl:gap-12 mb-8">
    <Transition name="desktopAllArtc">
      <div v-if="allNewsPc" :key="articles[6].uri" class="w-[25%]">
        <NewsAllArticles />
      </div>
    </Transition>
    <Transition name="desktopAllArtc">
      <div
        v-if="recNewsPc"
        :key="articles[7].uri"
        class="w-[50%] flex flex-col gap-4"
      >
        <NewsRecommended />
      </div>
    </Transition>
    <Transition name="desktopAllArtc">
      <div v-if="rngNewsPc" :key="articles[8].uri" class="w-[25%]">
        <NewsRandom />
      </div>
    </Transition>
  </div>
</template>
