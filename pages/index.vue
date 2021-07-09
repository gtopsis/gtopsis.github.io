<template>
  <v-row no-gutters justify-center class="page-container">
    <v-col cols="12" class="px-4 py-0 mx-0 my-5">
      <hero></hero>
    </v-col>
    <v-col cols="12" class="px-4 py-0 mx-0 my-5">
      <timeline></timeline>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  head() {
    return {
      title: "Home",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Home page of personal website. It contains details about my work experience and my education background.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.page-container {
  max-width: 1100px !important;
  margin: 0 auto;
}
</style>
