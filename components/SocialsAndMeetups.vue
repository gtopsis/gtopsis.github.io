<script setup lang="ts">
import type { IContactItem } from "~/types/interfaces";

interface Props {
  meetups: IContactItem[];
}

defineProps<Props>();

const runtimeConfig = useRuntimeConfig();

const getFullUrl = (contactItem: IContactItem) => {
  const socialItem = socials.find(({ title }) => title === contactItem.title);

  return socialItem
    ? socialItem.url + runtimeConfig.public.SOCIAL_NETWORKS_USERNAME
    : contactItem.url;
};

const socials: IContactItem[] = [
  {
    icon: ["fab", "linkedin"],
    url: "https://www.linkedin.com/in/",
    title: "LinkedIn",
  },
  {
    icon: ["fab", "github"],
    url: "https://github.com/",
    title: "GitHub",
  },
];
</script>

<template>
  <section>
    <v-card class="pa-2 contact-card">
      <v-card-text>
        <v-row class="socials-list ma-0" justify="center">
          <v-col
            v-for="(social, index) in [...socials, ...meetups]"
            :key="index"
            cols="12"
            class="pa-1"
          >
            <a
              :href="getFullUrl(social)"
              :aria-label="social.title"
              target="_blank"
              class="d-flex align-center text-decoration-none"
            >
              <font-awesome-icon
                class="text-secondary me-2"
                :icon="social.icon"
                size="2xl"
                aria-hidden="true"
              />
              <span class="text-secondary">{{ social.title }}</span>
            </a>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </section>
</template>

<style scoped>
.contact-card {
  max-width: 400px;
  min-width: 300px;
  border: none;
  box-shadow: none;
  background-color: transparent;
}
</style>
