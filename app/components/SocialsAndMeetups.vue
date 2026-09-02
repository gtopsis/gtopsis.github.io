<script setup lang="ts">
import type { IContactItem } from "~/types/interfaces";

interface Props {
  meetups: IContactItem[];
}

defineProps<Props>();

const socials: IContactItem[] = [
  {
    icon: ["fab", "github"],
    url: "https://github.com/",
    title: "GitHub",
  },
];

function buildUrl(contactItem: IContactItem) {
  const socialItem = socials.find(({ title }) => title === contactItem.title);
  if (!socialItem) return contactItem.url;

  return socialItem.url + useSocialUsername();
}

// Real profile links (LinkedIn/GitHub) aren't written into the DOM until a
// genuine user interaction happens (focus, hover, touch). This keeps the
// link fully native and accessible for real visitors -- the href is
// resolved well before a keyboard/mouse/touch user could actually activate
// it -- while bots that just render a page and scrape every `<a href>` out
// of the resulting DOM (the common approach for bulk contact/profile
// harvesting) see an inert "#" placeholder instead of a usable destination.
const resolvedHrefs = ref<Record<number, string>>({});

function resolveHref(item: IContactItem, index: number) {
  if (resolvedHrefs.value[index]) return;
  resolvedHrefs.value[index] = buildUrl(item);
}

function onActivate(item: IContactItem, index: number, event: MouseEvent) {
  if (resolvedHrefs.value[index]) return;

  // Fallback for activation paths that skip focus/hover/touchstart (e.g.
  // some assistive tech or programmatic clicks): resolve and navigate
  // manually instead of following the still-unresolved "#" href.
  event.preventDefault();
  const url = buildUrl(item);
  resolvedHrefs.value[index] = url;
  window.open(url, "_blank", "noopener,noreferrer");
}
</script>

<template>
  <section>
    <v-card class="pa-2 contact-card">
      <v-card-text>
        <ul class="socials-list ma-0 pa-0">
          <li
            v-for="(social, index) in [...socials, ...meetups]"
            :key="index"
            class="pa-1"
          >
            <a
              :href="resolvedHrefs[index] || '#'"
              :aria-label="social.title"
              target="_blank"
              rel="nofollow noopener noreferrer"
              class="d-flex align-center text-decoration-none"
              @focus="resolveHref(social, index)"
              @pointerenter="resolveHref(social, index)"
              @touchstart="resolveHref(social, index)"
              @click="onActivate(social, index, $event)"
            >
              <font-awesome-icon
                class="text-secondary me-2"
                :icon="social.icon"
                size="2xl"
                aria-hidden="true"
              />
              <span class="text-secondary">{{ social.title }}</span>
            </a>
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </section>
</template>

<style scoped>
.contact-card {
  max-width: 400px;
  min-width: 300px;
  margin: 0 auto;
  border: none;
  box-shadow: none;
  background-color: transparent;
}

.socials-list {
  list-style-type: none;
  text-align: center;
}
</style>
