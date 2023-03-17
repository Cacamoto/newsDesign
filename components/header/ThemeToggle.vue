<script setup>
const isDarkTheme = useTheme();
const darkCookie = useCookie("isDarkTheme");
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  darkCookie.value = !darkCookie.value;
};
</script>
<template>
  <div
    class="bg-[#2a2a2a] flex items-center justify-center rounded-[16px] w-10 p-[2px] transition-all duration-500 ease cursor-pointer"
    :class="isDarkTheme ? 'bg-[#ededea]' : 'bg-[#2a2a2a]'"
    @click="toggleTheme()"
  >
    <div
      class="relative h-4 w-4 rounded-full transition-all duration-500 ease"
      :class="
        isDarkTheme
          ? 'translate-x-2 bg-[#2a2a2a]'
          : '-translate-x-2 bg-[#ededea]'
      "
    />
  </div>
</template>
