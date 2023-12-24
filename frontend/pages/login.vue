<script setup lang="ts">
const pb = usePB()
const isValid = pb.authStore.isValid
const username = ref('')
const password = ref('')

const login = async () => {
  await pb.collection('users').authWithPassword(username.value, password.value)
  return
}
</script>

<template>
  <h1>login</h1>
  <h2>Username</h2>
  <input v-model="username" placeholder="username" type="text" />
  <input v-model="password" placeholder="password" type="password" />
  <button @click="login()">login</button>
  <div>{{ isValid }}</div>
  <div>{{ username }}</div>
  <div>{{ password }}</div>
</template>
