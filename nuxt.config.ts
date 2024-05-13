// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/cloudinary", "@nuxtjs/tailwindcss"],

  cloudinary: {
    cloudName: "dxer2vood",
  },

  runtimeConfig: {
    cloudKey: process.env.CLOUDINARY_CLOUD_KEY,
    cloudSecret: process.env.CLOUDINARY_CLOUD_SECRET,
  },
});
