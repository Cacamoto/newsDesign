// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-icon", "@nuxtjs/google-fonts", "@nuxt/image-edge"],
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
  image: {
    domains: ["https://picsum.photos", "https://static01.nyt.com"],
  },
  css: ["@/assets/transitions.css"],
});
