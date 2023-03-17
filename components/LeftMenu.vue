<script setup>
const isMenuOpen = useMenu();
const isOverlayOpen = useOverlay();
const isDarkTheme = useTheme();
const router = useRouter();

const handleClose = () => {
  isMenuOpen.value = false;
  isOverlayOpen.value = false;
};

const links = [
  { name: "Home", link: "/", icon: "ion:home-outline" },
  { name: "News", link: "/news", icon: "ion:newspaper-outline" },
  { name: "Reviews", link: "/reviews", icon: "ion:chatbox-ellipses-outline" },
];
</script>

<template>
  <div
    class="fixed top-0 left-0 h-full w-[18rem] flex flex-col items-center justify-start p-2 bg-black/50 rounded-r z-[21] drop-shadow-2xl"
  >
    <div class="flex items-center justify-end w-full">
      <Icon
        name="ion:md-close-circle-outline"
        class="w-8 h-8 text-red-400 mb-2 cursor-pointer hover:rotate-180 transition-all duration-200 linear"
        @click="handleClose"
      />
    </div>
    <div class="w-full mt-4 p-2 text-lg">
      <ul>
        <li
          v-for="(link, index) in links"
          :key="index"
          class="flex flex-row items-start justify-start border rounded my-2 p-2 bg-black/10 text-neutral-100 transition-all duration-200 linear cursor-pointer"
          :class="isDarkTheme ? 'hover:bg-white/10 ' : 'hover:bg-black/30 '"
          @click="
            router.push(link.link);
            handleClose();
          "
        >
          <Icon :name="link.icon" class="w-6 h-6 mr-2" />
          <span>{{ link.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
