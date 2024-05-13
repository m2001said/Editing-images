<script setup lang="ts">
const slider = defineModel<number>();
</script>

<template>
  <section class="border-2 border-red-300 p-4 flex flex-col gap-3 rounded w-full">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="default-range"><slot /></label>
    <input
      id="default-range"
      type="range"
      v-model.number="slider"
      class="w-full bg-gray-200 rounded appearance-none cursor-pointer"
    />
    {{ slider }}
  </section>
</template>

<style scoped></style>
