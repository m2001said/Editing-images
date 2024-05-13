<script setup lang="ts">
const attributes = defineModel<{ effect: {} }>();
defineProps<{ effect: string }>();
</script>

<template>
  <button
    v-if="attributes?.effect"
    class="bg-red-950 hover:bg-red-900 text-white p-4 font-semibold"
    @click="
      attributes.effect = {
        ...attributes.effect,
        [effect]: true,
      }
    "
  >
    <slot />
  </button>
</template>

<style scoped></style>
