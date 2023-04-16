<script setup lang="ts">
useHead({
  title: "About",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "About me page contains details about my personal hobbies, projects and goals.",
    },
  ],
});

const head = {
  title: "About - Giorgos Topsis",
  description: "Learn more about me!",
  image: "./images/Twitter-card.png",
};

const webDevelopmentExperienceInYears = new Date().getFullYear() - 2017;

const aboutMe = [
  `As a kid I was thinking that sooner or later I will find which is my dream job, in which direction I'm was born to shine having a unique and enviable talent. The mission was clear, to find my specialty!
My studies (BSc, MSc, Erasmus periods) in Information Systems and Human-Computer Interaction at Computer Science Department of University of Crete seemed to offer me an appropriate opportunity to achieve my mission. And I was close, so close; Finally, I only had to choose between Web Development and User Experience Design fields.`,
  `
Well, for more than ${webDevelopmentExperienceInYears} years (since 2016 when AngularJS was the king) I focus, utilizing the JavaScript ecosystem, on building software platforms for the web. The last 3 years I have worked both as a professional Front and Back End developer, transforming design mockups into usable pages and designing, developing and testing RESTful APIs as well as developing third-party intefrations utilizing several AWS services.`,
  `
As a partner, I seek trustworthy connections and I enjoy being in work environments where meritocracy prevails. In such conditions, I feel a secure, productive, and funny teammate ツ.
`,
  `When I'm away from keyboard I like joining local meetups (DevStaff, Open Coffee Heraklion) as well as dance communities, learning and dancing mostly Argentinian Tango and Lindy Hop.`,
];
</script>

<template>
  <v-container class="d-flex pa-0" fluid full-width fill-height align="center">
    <SocialHead
      :title="head.title"
      :description="head.description"
      :image="head.image"
    />

    <v-row class="page-container" no-gutters justify="center">
      <!-- hero section -->
      <v-col cols="12" class="section pa-0 mx-0">
        <v-container class="hero-container ma-0 pa-0" fill-height>
          <v-row no-gutters justify="center" align="center">
            <v-col cols="auto" align-self="center">
              <p class="text-center text-h6 text-sm-h5 text-md-h4">
                What You <span class="text-primary">Read</span> is What you Get
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <!-- about me section -->
      <v-col cols="12" class="section px-0 mb-16 mx-0">
        <v-container class="about-me-container" fluid full-width>
          <v-row full-width justify="center" align="center">
            <v-col cols="12" md="10" lg="9" class="px-4">
              <p
                v-for="(paragraph, i) in aboutMe"
                :key="i"
                class="text-left text-body-1 mb-6"
                white
              >
                {{ paragraph }}
              </p>
            </v-col>
            <v-col cols="12"> </v-col>
          </v-row>
        </v-container>
      </v-col>

      <!-- timeline section -->
      <v-col cols="12" class="section px-0 mb-16 mx-0">
        <v-row class="justify-space-between no-gutters">
          <v-col cols="12" mb="2">
            <TimelineSection content="experience" />
          </v-col>
        </v-row>
      </v-col>

      <!-- timeline section -->
      <v-col cols="12" class="section px-0 mb-16 mx-0">
        <v-row class="justify-space-between no-gutters">
          <v-col cols="12" mb="2">
            <TimelineSection content="education" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-container {
  height: 70vh;
}

.hero-container .v-row {
  height: 100%;
}
</style>
