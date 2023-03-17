<script setup>
const pageTitle = defineProps({
  pageTitle: {
    type: String,
  },
});
</script>

<template>
  <div>
    <PageTitle pageTitle="Reviews" />
  </div>
</template>
