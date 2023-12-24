<script setup lang="ts">
const pb = usePB()
const valid = pb.authStore.isValid
</script>
<template>
  <h1>Testing</h1>
  <h2>{{ valid }}</h2>
  <Testing />
</template>
