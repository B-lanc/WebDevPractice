// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],
  runtimeConfig: {
    public: {
      domain: process.env.DOMAIN ? process.env.DOMAIN : "localhost"
    }
  }
})