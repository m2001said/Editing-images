<script setup lang="ts">
const route = useRoute();
const photo = ref(route.query.photo as string);
const imageText = ref("Hello world");
const opacitySlider = ref(100);
const fontSlider = ref(100);
const blurSlider = ref(0);

const blurSliderComputed = computed(() => blurSlider.value * 15);

const attributes = reactive({
  effect: {
    alt: "test",
    src: photo,
    width: "500",
    height: "500",
    opacity: opacitySlider,
    blur: blurSliderComputed,
    overlays: [
      {
        position: {
          gravity: "center",
          y: 60,
        },
        text: {
          color: "rgb:52a4ff80",
          fontFamily: "Source Sans Pro",
          fontSize: fontSlider,
          fontWeight: "black",
          text: imageText || " ",
          lineSpacing: -100,
          stroke: true,
          border: "10px_solid_rgb:2d0eff99",
        },
      },
    ],
  },
});
</script>

<template>
  <section class="flex flex-col items-center">
    <h1 class="text-4xl py-6">Select Customizations</h1>

    <div class="grid grid-cols-2 gap-8">
      <div class="flex flex-col gap-2">
        <div class="border-2 border-blue-300 p-4 flex flex-col gap-3 rounded">
          <h2>Enter text to add to image</h2>
          <input class="bg-gray-200 rounded p-3" placeholder="Enter text" type="text" v-model="imageText" />
        </div>
        <ImageSlider v-model="opacitySlider"> Opacity</ImageSlider>
        <ImageSlider v-model="fontSlider"> Font size</ImageSlider>
        <ImageSlider v-model="blurSlider"> Blur</ImageSlider>

        <div class="flex items-center justify-center gap-4">
          <AttributeButton v-model="attributes" effect="remove-background">Remove Background</AttributeButton>
          <AttributeButton v-model="attributes" effect="grayscale">GrayScale</AttributeButton>
          <AttributeButton v-model="attributes" effect="pixelate">pixelate</AttributeButton>
        </div>
      </div>

      <div>
        <CldImage v-bind="attributes.effect" />
      </div>
    </div>

    <nuxt-link to="/" class="bg-green-500 hover:bg-green-400 p-4 w-96 rounded text-center text-xl m-4">Back</nuxt-link>
  </section>
</template>

<style scoped></style>
