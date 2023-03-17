<script setup>
const isDarkTheme = useTheme();
const isOverlayOpen = useOverlay();
const isMenuOpen = useMenu();
// const articles = useArticles();
// const rngArticle = useRandomArticle();
// const allArticles = useAllArticles();

// const { data } = await useFetch(
//   "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=uLdJAsHnJIQZiVxdmpg4XWlbbAB1wr6q",
//   {
//     onResponse({ response }) {
//       articles.value = response._data.results;
//     },
//   }
// );
// const filterArticler = () => {
//   const filtered = articles.value.filter((article) => {
//     return article.section !== "";
//   });
//   allArticles.value = filtered;
// };

// const randomArticle = () => {
//   const random = Math.floor(Math.random() * articles.value.length);
//   if (randomArticle.title === "") {
//     randomArticle();
//   } else {
//     return (rngArticle.value = articles.value[random]);
//   }
// };

// onServerPrefetch(() => {
//   randomArticle();
//   filterArticler();
// });
</script>

<template>
  <main
    class="relative w-screen min-h-screen bg-[#f9f4ed] overflow-x-hidden transition-all duration-500 ease z-[2]"
    :class="
      isDarkTheme
        ? 'bg-[rgb(42,42,42)] text-[#eaeaea]'
        : 'bg-[#f9f4ed] text-[#2a2a2a]'
    "
  >
    <!-- Overlay n Menu -->
    <Overlay v-if="isOverlayOpen" />
    <Transition name="slide">
      <LeftMenu v-if="isMenuOpen" />
    </Transition>
    <!-- Background -->
    <div
      class="fixed -top-[14rem] -right-[14rem] h-[28rem] w-[28rem] sm:-top-[20rem] sm:-right-[20rem] sm:h-[40rem] sm:w-[40rem] rounded-full opacity-10 blur-2xl z-[1]"
      :class="
        isDarkTheme
          ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 via-red-600 to-orange-800'
          : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-400 via-pink-400 to-rose-600'
      "
    />
    <div
      class="absolute bottom-[10%] -left-[12rem] h-[24rem] w-[24rem] sm:h-[40rem] sm:w-[40rem] rounded-full opacity-10 blur-2xl z-[1]"
      :class="
        isDarkTheme
          ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400 via-yellow-400 to-orange-400'
          : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600 via-red-800 to-orange-800'
      "
    />
    <div />
    <!-- Header -->
    <header
      class="fixed top-0 left-0 w-screen flex flex-row items-center justify-between py-4 px-6 z-[4] backdrop-filter backdrop-blur-md shadow-md"
    >
      <HeaderMenuToggle />
      <div class="flex flex-row items-center gap-4">
        <button
          class="p-1 rounded-xl border border-[transparent] scale-100 hover:text-[#af695c] transition-all duration-200 ease"
          :class="
            isDarkTheme
              ? 'hover:border-[#ededea] hover:scale-105'
              : 'hover:border-[#2a2a2a] hover:scale-105'
          "
        >
          Contact Us
        </button>
        <HeaderThemeToggle />
      </div>
    </header>
    <!-- Content -->
    <div
      class="w-full h-screen flex flex-col items-start justify-start p-6 pt-32 z-[3]"
    >
      <slot />
    </div>
  </main>
</template>

<style>
main {
  font-family: Poppins, sans-serif;
}
</style>
