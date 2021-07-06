<template>
  <v-container fluid>
    <v-row align="center" class="justify-center justify-sm-left">
      <v-col cols="auto">
        <h3>Experience</h3>
      </v-col>
    </v-row>
    <v-timeline>
      <v-timeline-item v-for="(element, index) in timelineItems" :key="index">
        <template #icon>
          <v-avatar :color="element.avatar.bgColor">
            <a
              :href="element.avatar.label.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img :src="element.avatar.img" />
            </a>
          </v-avatar>
        </template>
        <template #opposite>
          <a
            :href="element.avatar.label.link"
            class="firm-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{{ element.avatar.label.text }}</span>
          </a>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h6">
            {{ element.card.role }}
          </v-card-title>
          <v-card-subtitle>
            {{ element.card.period.start }} -
            {{ element.card.period.end }}
          </v-card-subtitle>
          <v-card-text>{{ element.card.description }}</v-card-text>
          <v-card-actions>
            <!-- <nuxt-link :to="element.card.action">Read more</nuxt-link> -->
            Read more
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      timelineItems: [
        {
          avatar: {
            img: "@/assets/images/conveos_logo.png",
            bgColor: "#000",
            label: { text: "Conveos", link: "https://conveos.com" },
          },
          card: {
            role: "Back End Web Developer",
            period: { start: "Jan 2015", end: "March 2021" },
            description: "lorem ipsum",
          },
        },
        {
          avatar: {
            img: "/assets/images/conveos_logo.png",
            bgColor: "#000",
            label: { text: "Conveos", link: "https://conveos.com" },
          },
          card: {
            role: "Back End Web Developer",
            period: { start: "Jan 2015", end: "March 2021" },
            description: "lorem ipsum",
            action: "/job",
          },
        },
        {
          avatar: {
            img: "@/assets/images/conveos_logo.png",
            bgColor: "#000",
            label: { text: "Conveos", link: "https://conveos.com" },
          },
          card: {
            role: "Front End Web Developer",
            period: { start: "Jan 2015", end: "March 2021" },
            description: "lorem ipsum",
            action: "/job",
          },
        },
      ],
    };
  },
};
</script>
<style scoped>
.firm-link {
  text-decoration: none;
}
</style>
