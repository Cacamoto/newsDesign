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
  <div class="top-menu-wrapper">
    <Icon name="ion:menu-outline" class="icon" @click="handleMenu" />

    <ul>
      <li v-for="(link, index) in links" :key="index" @click="routeCheck">
        <router-link :to="link.link">
          <div
            class="link"
            :class="
              routeCheck(index, link.link)
                ? 'is-active'
                : isDarkTheme
                ? 'link-dark'
                : 'link-light'
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
.top-menu-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
}
.icon {
  width: 1.5rem;
  height: 1.5rem;
  transform: scale(1);
  transition: all 0.2s ease;
  cursor: pointer;
}
.icon:hover {
  transform: scale(1.1);
}
ul {
  display: none;
}

@media (min-width: 640px) {
  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem;
    list-style-type: none;
  }
}

.link {
  border: 1px solid transparent;
  transform: scale(1);
  transition: all 0.2s ease;
  padding: 0.25rem;
  border-radius: 0.75rem;
}
.link:hover {
  color: var(--brownie);
}
.is-active {
  color: var(--brownie);
  transform: scale(1.05);
}
.link-light:hover {
  color: var(--dark);
  transform: scale(1.05);
  border: 1px solid var(--dark);
}
.link-dark:hover {
  color: var(--light);
  transform: scale(1.05);
  border: 1px solid var(--light);
}
</style>
