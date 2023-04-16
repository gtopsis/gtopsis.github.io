<template>
  <span v-if="false" />
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "./images/Twitter-card.webp",
  },
});

useHead({
  meta: [
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: props.title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: props.description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: props.image,
    },

    {
      hid: "twitter:image:alt",
      name: "twitter:image:alt",
      content: props.title,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: props.title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: props.description,
    },

    {
      hid: "og:image",
      property: "og:image",
      content: props.image,
    },
  ],
});
</script>
