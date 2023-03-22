<script setup>
const isDarkTheme = useTheme();
const isOverlayOpen = useOverlay();
const isMenuOpen = useMenu();
</script>

<template>
  <main :class="isDarkTheme ? 'darkT' : 'lightT'">
    <!-- Overlay n Menu -->
    <Overlay v-if="isOverlayOpen" />
    <Transition name="slide">
      <LeftMenu v-if="isMenuOpen" />
    </Transition>
    <!-- Background -->
    <div class="blob1" :class="isDarkTheme ? 'blob1Dark' : 'blob1Light'" />
    <div class="blob2" :class="isDarkTheme ? 'blob2Dark' : 'blob2Light'" />
    <div />
    <!-- Header -->
    <header>
      <HeaderMenuToggle />
      <div class="header-right">
        <button :class="isDarkTheme ? 'button-dark' : 'button-light'">
          Contact Us
        </button>
        <HeaderThemeToggle />
      </div>
    </header>
    <!-- Content -->
    <div class="wrapper">
      <slot />
    </div>
  </main>
</template>
<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
}
main {
  --light: #f9f4ed;
  --dark: #2a2a2a;
  --brownie: #af695c;
  font-family: Poppins, sans-serif;
  position: relative;
  width: 100wv;
  min-height: 100vh;
  overflow-x: hidden;
  transition: all 0.5s ease;

  z-index: 2;
}
.lightT {
  color: var(--dark);
  background: var(--light);
}
.darkT {
  color: var(--light);
  background: var(--dark);
}
a {
  text-decoration: none;
  color: inherit;
}
</style>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5rem;
  padding-top: 8rem;
  z-index: 3;
}

button {
  padding: 4px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-size: 1rem;
  transform: scale(1);
  transition: all 0.2s ease;
  cursor: pointer;
}
button:hover {
  transform: scale(1.05);
}
.button-light {
  color: var(--dark);
  background: transparent;
}
.button-dark {
  color: var(--light);
  background: transparent;
}
.button-light:hover {
  border: 1px solid var(--dark);
}
.button-dark:hover {
  border: 1px solid var(--light);
}
.header-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 4;
  backdrop-filter: blur(12px);
}
.blob2 {
  position: absolute;
  bottom: 10%;
  left: -12rem;
  height: 24rem;
  width: 24rem;
  border-radius: 50%;
  opacity: 0.1;
  filter: blur(40px);
  z-index: 1;
}
@media (min-width: 640px) {
  .blob2 {
    height: 40rem;
    width: 40rem;
  }
}
.blob2Light {
  background: rgb(48, 0, 255);
  background: radial-gradient(
    circle,
    rgba(48, 0, 255, 1) 0%,
    rgba(255, 34, 106, 1) 100%
  );
}
.blob2Dark {
  background: rgb(0, 255, 221);
  background: radial-gradient(
    circle,
    rgb(249, 162, 32) 0%,
    rgb(255, 71, 138) 100%
  );
}
.blob1 {
  position: fixed;
  top: -14rem;
  right: -14rem;
  height: 28rem;
  width: 28rem;
  border-radius: 50%;
  opacity: 0.1;
  filter: blur(2rem);
  z-index: 1;
}
@media (min-width: 640px) {
  .blob1 {
    top: -20rem;
    right: -20rem;
    height: 40rem;
    width: 40rem;
  }
}
.blob1Dark {
  background: rgb(255, 152, 0);
  background: radial-gradient(
    circle,
    rgba(255, 152, 0, 1) 0%,
    rgba(255, 87, 34, 1) 100%
  );
}
.blob1Light {
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgb(232, 31, 195) 0%,
    rgba(252, 70, 107, 1) 100%
  );
}
</style>
