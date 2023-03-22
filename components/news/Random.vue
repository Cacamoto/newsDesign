<script setup>
const isDarkTheme = useTheme();
</script>

<template>
  <div class="top-wrapper">
    <div class="top-wrapper-title">
      <span>Number of the day</span>
      <div class="line" :class="isDarkTheme ? 'line-dark' : 'line-light'" />
    </div>
    <span class="number">80.000$</span>
    <span class="article-abstract"
      >was earned at a charity auction in Paris. The money raised goes to
      children's hospitals.</span
    >
  </div>
  <div
    class="separator"
    :class="isDarkTheme ? 'separator-dark' : 'separator-light'"
  />
  <div class="article-image-wrapper">
    <div class="absolute">
      <Icon name="ion:load-a" class="article-loading-icon" /> Loading...
    </div>
    <nuxt-img
      src="https://picsum.photos/200?grayscale"
      fit="cover"
      class="nuxt-img-style"
    />
  </div>
  <span class="article-title">Installation per million</span>
  <div class="article-abstract bottom">
    During the first two days of the exhibition, Pierre was visited by more than
    30,000 people. The artist did not expect that his installation would arouse
    such interest. In two days, he managed to break the record for the number of
    visitors to the exhibition among all artists of our time.
    <span class="time">10h ago</span>
  </div>
</template>

<style scoped>
.top-wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: var(--brownie);
  padding: 0.5rem;
}
.top-wrapper-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
}
.line {
  display: flex;
  flex: 1;
  border: 1px solid transparent;
}
.line-light {
  border: 1px solid var(--dark);
}
.line-dark {
  border: 1px solid var(--light);
}
.number {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.separator {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  width: 100%;
  border: 1px solid transparent;
  max-height: 0;
}
.separator-light {
  border: 1px solid var(--dark);
}
.separator-dark {
  border: 1px solid var(--light);
}
.bottom {
  margin-bottom: 2rem;
}
.time {
  opacity: 0.7;
  margin-left: 0.5rem;
}
</style>
