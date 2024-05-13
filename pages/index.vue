<script setup lang="ts">
const { data, refresh } = useFetch("/api/cloud");
const imageInfo = ref<Result | null>(null);

interface Result {
  info: {
    public_id: string;
    context: {
      alt: string;
    };
  };
}

const onUpload = (result: Ref<Result>) => {
  imageInfo.value = result.value;
};
const refreshPics = () => {
  refresh();
};
const goToEdit = (public_id: string) => {
  useRouter().push(`edit?photo=${encodeURIComponent(public_id)}`);
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-4xl p-6 text-center">Select image to edit</h1>
    <CldUploadWidget v-slot="{ open }" :onUpload="onUpload" :onClose="refreshPics" uploadPreset="xlidz9ie">
      <button class="bg-red-950 text-white p-3 m-4 rounded" type="button" @click="open">Upload an Image</button>
    </CldUploadWidget>

    <div v-if="imageInfo?.info.public_id" class="image mb-4" @click="goToEdit(imageInfo?.info.public_id || '')">
      <CldImage alt="test" :src="imageInfo?.info.public_id || ''" width="500" height="500" />
    </div>

    <div class="flex items-center flex-wrap justify-center gap-4 p-4 border-2 border-red-800 rounded">
      <div class="image" v-for="image in data?.resources" @click="goToEdit(image.public_id)">
        <CldImage :src="image.public_id" width="300" height="300" :alt="image.context?.alt || ''" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  @apply border-2 border-red-800 rounded cursor-pointer;
}
</style>
