<script setup lang="ts">
import PocketBase from "pocketbase"

const config = useRuntimeConfig()
const domain = config.public.domain
const port = domain === "localhost" ? 8080 : 8443
const pb = new PocketBase(`http://${domain}:${port}`)

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <div>{{ domain }}</div>
  <div>{{ port }}</div>
</template>
