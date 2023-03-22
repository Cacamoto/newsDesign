<script setup>
const isDarkTheme = useTheme();
const darkCookie = useCookie("isDarkTheme");

if (darkCookie.value === undefined) {
  isDarkTheme.value = false;
  darkCookie.value = false;
}

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  darkCookie.value = !darkCookie.value;
};
</script>
<template>
  <div
    class="toggle-wrapper"
    :class="isDarkTheme ? 'bg-dark' : 'bg-light'"
    @click="toggleTheme()"
  >
    <div class="circle" :class="isDarkTheme ? 'circle-dark' : 'circle-light'" />
  </div>
</template>

<style scoped>
.toggle-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 2.5rem;
  padding: 2px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.bg-light {
  background-color: var(--dark);
}
.bg-dark {
  background-color: var(--light);
}
.circle {
  position: relative;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  transition: all 0.5s ease;
}
.circle-light {
  background-color: var(--light);
  transform: translateX(-8px);
}
.circle-dark {
  background-color: var(--dark);
  transform: translateX(8px);
}
</style>
