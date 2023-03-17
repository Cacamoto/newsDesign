<script setup>
defineProps({
  pageTitle: String,
});
</script>

<template>
  <Transition name="tilteOpc" appear mode="out-in">
    <div class="text-4xl capitalize">
      {{ pageTitle }}
    </div>
  </Transition>
</template>
