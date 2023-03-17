<script setup>
const isCategoryMenuOpen = useCategoryMenu();
const isDarkTheme = useTheme();

const handleCategoryMenu = () => {
  if (isCategoryMenuOpen.value) {
    isCategoryMenuOpen.value = false;
  } else {
    isCategoryMenuOpen.value = true;
  }
};

const categories = [
  {
    name: "Politics",
    link: "/news/politics",
  },
  {
    name: "Fashion",
    link: "/news/fashion",
  },
  {
    name: "Tech",
    link: "/news/technology",
  },
  {
    name: "Art",
    link: "/news/arts",
  },
  {
    name: "Opinions",
    link: "/news/opinion",
  },
  {
    name: "Movie",
    link: "/news/movies",
  },
  {
    name: "Sport",
    link: "/news/sports",
  },
];
</script>

<template>
  <!-- Mobile -->
  <div
    class="flex md:hidden flex-row items-center gap-4 text-xl my-6 cursor-pointer scale-100 hover:scale-105 transition-all duration-200 ease"
    @click="handleCategoryMenu"
  >
    <span>Categories</span>
    <Icon
      name="ion:caret-down-circle-outline"
      class="w-6 h-6 transition-all duration-200 ease"
      :class="isCategoryMenuOpen ? 'rotate-0' : 'rotate-90'"
    />
  </div>
  <div
    v-if="isCategoryMenuOpen"
    class="flex md:hidden flex-row items-start jusitify-start flex-wrap gap-4 mb-6 z-[3]"
  >
    <TransitionGroup name="dropIn" appear>
      <NuxtLink
        v-for="category in categories"
        :key="category.name"
        :to="category.link"
        class="border p-1 px-2 rounded-xl scale-100 hover:scale-105 hover:text-[#af695c] transition-all duration-200 ease"
      >
        <span>{{ category.name }}</span>
      </NuxtLink>
    </TransitionGroup>
  </div>

  <!-- Desktop -->
  <Transition name="subMenuSlide" appear>
    <div
      class="relative hidden md:flex flex-row items-center justify-start gap-6 w-full my-16 z-[3]"
    >
      <NuxtLink
        v-for="category in categories"
        :key="category.name"
        :to="category.link"
        class="border p-1 px-2 rounded-xl scale-100 hover:scale-105 hover:text-[#af695c] transition-all duration-200 ease"
        :class="isDarkTheme ? 'border-[#ededea]' : 'border-[#2a2a2a]'"
      >
        <span>{{ category.name }}</span>
      </NuxtLink>
    </div>
  </Transition>
</template>

<style scoped>
.router-link-active {
  color: #af695c;
  transition: all 0.2s ease;
}
</style>
