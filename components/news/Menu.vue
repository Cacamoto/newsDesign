<script setup>
const isCategoryMenuOpen = useCategoryMenu();
const isDarkTheme = useTheme();

const handleCategoryMenu = () => {
  if (isCategoryMenuOpen.value) {
    isCategoryMenuOpen.value = false;
  } else {
    isCategoryMenuOpen.value = true;
  }
};

const categories = [
  {
    name: "Politics",
    link: "/news/politics",
  },
  {
    name: "Fashion",
    link: "/news/fashion",
  },
  {
    name: "Tech",
    link: "/news/technology",
  },
  {
    name: "Art",
    link: "/news/arts",
  },
  {
    name: "Opinions",
    link: "/news/opinion",
  },
  {
    name: "Movie",
    link: "/news/movies",
  },
  {
    name: "Sport",
    link: "/news/sports",
  },
];
</script>

<template>
  <!-- Mobile -->
  <div class="mobile-submenu-btn" @click="handleCategoryMenu">
    <span>Categories</span>
    <Icon
      name="ion:caret-down-circle-outline"
      class="mobile-submenu-icon"
      :class="isCategoryMenuOpen ? 'mobile-submenu-icon-open' : ''"
    />
  </div>
  <div v-if="isCategoryMenuOpen" class="mobile-submenu-open">
    <TransitionGroup name="dropIn" appear>
      <NuxtLink
        v-for="category in categories"
        :key="category.name"
        :to="category.link"
        class="mobile-submenu-link"
        :class="
          isDarkTheme ? 'mobile-submenu-link-dark' : 'mobile-submenu-link-ligth'
        "
      >
        <span>{{ category.name }}</span>
      </NuxtLink>
    </TransitionGroup>
  </div>

  <!-- Desktop -->
  <Transition name="subMenuSlide" appear>
    <div class="desktop-submenu">
      <NuxtLink
        v-for="category in categories"
        :key="category.name"
        :to="category.link"
        class="mobile-submenu-link"
        :class="
          isDarkTheme ? 'mobile-submenu-link-dark' : 'mobile-submenu-link-ligth'
        "
      >
        <span>{{ category.name }}</span>
      </NuxtLink>
    </div>
  </Transition>
</template>

<style scoped>
.router-link-active {
  color: #af695c;
  transition: all 0.2s ease;
}
.mobile-submenu-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s ease;
}
@media (min-width: 640px) {
  .mobile-submenu-btn {
    display: none;
  }
}
.mobile-submenu-btn:hover {
  transform: scale(1.05);
}
.mobile-submenu-icon {
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(90deg);
  transition: all 0.2s ease;
}
.mobile-submenu-icon-open {
  transform: rotate(0deg);
}
.mobile-submenu-open {
  width: calc(100% - 3rem);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  z-index: 3;
}

@media (min-width: 640px) {
  .mobile-submenu-open {
    display: none;
  }
}
.mobile-submenu-link {
  padding: 0.25rem 0.5rem;
  border-radius: 0.75rem;
  border: 1px solid transparent;
  transform: scale(1);
  transition: all 0.2s ease;
}
.mobile-submenu-link-ligth {
  border: 1px solid var(--dark);
}
.mobile-submenu-link-dark {
  border: 1px solid var(--light);
}
.mobile-submenu-link:hover {
  transform: scale(1.05);
  color: var(--brownie);
}

.desktop-submenu {
  position: relative;
  display: none;
}
@media (min-width: 640px) {
  .desktop-submenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 4rem;
    z-index: 3;
  }
}
</style>
