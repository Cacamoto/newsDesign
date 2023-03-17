<script setup>
const isOverlayOpen = useOverlay();
const isMenuOpen = useMenu();

const handleClose = () => {
  isOverlayOpen.value = false;
  isMenuOpen.value = false;
};
</script>

<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.2)] z-[5] backdrop-blur-sm z-20"
    @click="handleClose"
  />
</template>
