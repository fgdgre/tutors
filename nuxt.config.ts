// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false,
  appDir: "/app",
  css: ["/assets/scss/main.scss"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxt/test-utils/module", "@nuxt/eslint"],
  app: {
    head: {
      title: "Tutors App",
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: "https://jsonplaceholder.typicode.com",
    },
  },
});
