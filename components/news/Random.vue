<script setup>
const isDarkTheme = useTheme();
</script>

<template>
  <div class="flex flex-col items-start justify-start bg-[#af695c] p-2">
    <div class="flex flex-row items-center w-full gap-6">
      <span>Number of the day</span>
      <div
        class="flex-1 border"
        :class="isDarkTheme ? 'border-[#ededea]' : 'border-[#2a2a2a]'"
      />
    </div>
    <span class="my-4 text-3xl">80.000$</span>
    <span class="text-sm"
      >was earned at a charity auction in Paris. The money raised goes to
      children's hospitals.</span
    >
  </div>
  <div
    class="flex-1 border my-4 max-h-0"
    :class="isDarkTheme ? 'border-[#ededea]' : 'border-[#2a2a2a]'"
  />
  <div
    class="w-full aspect-square bg-[#af695c] flex items-center justify-center"
  >
    <div class="absolute">
      <Icon name="ion:load-a" class="w-6 h-6 animate-spin" /> Loading...
    </div>
    <nuxt-img
      src="https://picsum.photos/200?grayscale"
      fit="cover"
      class="w-full aspect-square z-[2]"
    />
  </div>
  <span class="text-2xl">Installation per million</span>
  <div class="text-sm mb-8">
    During the first two days of the exhibition, Pierre was visited by more than
    30,000 people. The artist did not expect that his installation would arouse
    such interest. In two days, he managed to break the record for the number of
    visitors to the exhibition among all artists of our time.
    <span class="ml-2 opacity-70">10h ago</span>
  </div>
</template>
