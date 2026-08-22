<script setup lang="ts">
import { useDisplay } from "vuetify";
import type { IAvatarDetails } from "~/types/interfaces";

const props = defineProps<{
  avatar: IAvatarDetails;
}>();

const { mobile } = useDisplay();
const avatarSize = mobile.value ? 38 : 44;

// TODO: improve intelligence of the retrieval by passing the whole item
const tooltipId = computed(
  () => `tooltip${props.avatar.label.text.split(" ").join()}`,
);
</script>

<template>
  <v-tooltip :text="avatar.alt" location="bottom">
    <template #activator="{ props: tooltipProps }">
      <v-avatar
        :size="avatarSize"
        class="timeline-avatar"
        v-bind="tooltipProps"
        :aria-describedby="tooltipId"
      >
        <v-img
          :src="avatar.img"
          :alt="avatar.alt"
          fit="fill"
          width="30"
          height="30"
        />
      </v-avatar>
    </template>
  </v-tooltip>

  <!-- Dummy span used for accessibility: gives the tooltip's
       aria-describedby a real, always-present text node. -->
  <span :id="tooltipId" class="d-none">{{ avatar.alt }}</span>
</template>

<style scoped>
.timeline-avatar {
  border: 1px solid grey;
}
</style>
