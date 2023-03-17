<script setup>
const isDarkTheme = useTheme();
const isOverlayOpen = useOverlay();
const isMenuOpen = useMenu();
const handleMenu = () => {
  isMenuOpen.value = true;
  isOverlayOpen.value = true;
};

const router = useRouter();
const routeCheck = (index, link) => {
  if (router.currentRoute.value.path.includes("news") && index === 1) {
    return true;
  } else if (index !== 1 && router.currentRoute.value.path === link) {
    return true;
  } else {
    return false;
  }
};

const links = [
  { name: "Home", link: "/" },
  { name: "News", link: "/news" },
  { name: "Reviews", link: "/reviews" },
];
</script>

<template>
  <div class="flex flex-row items-center justify-start gap-6">
    <button>
      <Icon
        name="ion:menu-outline"
        class="w-6 h-6 scale-100 hover:scale-110 transition-all duration-200 ease"
        @click="handleMenu"
      />
    </button>
    <ul class="hidden sm:flex flex-row items-start gap-6">
      <li v-for="(link, index) in links" :key="index" @click="routeCheck">
        <router-link :to="link.link">
          <div
            class="p-1 rounded-xl border border-[transparent] scale-100 hover:text-[#af695c] transition-all duration-200 ease"
            :class="
              routeCheck(index, link.link)
                ? 'text-[#af695c] hover:scale-105'
                : isDarkTheme
                ? 'text-[#ededea] hover:border-[#ededea] hover:scale-105'
                : 'text-[#2a2a2a] hover:border-[#2a2a2a] hover:scale-105'
            "
          >
            {{ link.name }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.router-link-active {
  color: #af695c;
  transition: all 0.2s ease;
}
</style>
