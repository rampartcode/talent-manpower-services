// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Talent Manpower Services",
    },
  },
  css: ["@/styles/tailwind.css"],
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "nuxt-security"
  ],
});