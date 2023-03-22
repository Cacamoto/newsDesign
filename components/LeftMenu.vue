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
  <div class="menu">
    <div class="exit-wrapper">
      <Icon
        name="ion:md-close-circle-outline"
        class="exit-icon"
        @click="handleClose"
      />
    </div>
    <div class="link-wrapper">
      <ul>
        <li
          v-for="(link, index) in links"
          :key="index"
          class="left-menu-btn"
          :class="isDarkTheme ? 'button-dark' : 'button-light'"
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

<style scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  z-index: 21;
}
.exit-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.exit-icon {
  width: 2rem;
  height: 2rem;
  color: #f87171;
  cursor: pointer;
  transform: rotate(0deg);
  transition: all 0.2s linear;
}
.exit-icon:hover {
  transform: rotate(180deg);
}
.link-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.left-menu-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 12rem;
  gap: 0.5rem;
  border: 1px solid var(--light);
  border-radius: 0.25rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.1);
  color: var(--light);
  cursor: pointer;
  transition: all 0.2s linear;
}
.button-light:hover {
  background: rgba(0, 0, 0, 0.3);
}
.button-dark:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
