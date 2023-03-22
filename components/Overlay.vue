<script setup>
const isOverlayOpen = useOverlay();
const isMenuOpen = useMenu();

const handleClose = () => {
  isOverlayOpen.value = false;
  isMenuOpen.value = false;
};
</script>

<template>
  <div @click="handleClose" />
</template>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  z-index: 20;
}
</style>
