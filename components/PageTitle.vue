<script setup>
defineProps({
  pageTitle: String,
});
</script>

<template>
  <Transition name="tilteOpc" appear mode="out-in">
    <div>
      {{ pageTitle }}
    </div>
  </Transition>
</template>

<style scoped>
div {
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-transform: capitalize;
}
</style>
