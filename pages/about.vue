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

const aboutMe = [
  `As a kid I was thinking that sooner or later I will find which is my dream job, in which direction I'm was born to shine having a unique and enviable talent. The mission was clear, to find my specialty!
My studies (BSc, MSc, Erasmus periods) in Information Systems and Human-Computer Interaction at Computer Science Department of University of Crete seemed to offer me an appropriate opportunity to achieve my mission. And I was close, so close; Finally, I only had to choose between Web Development and User Experience Design fields.`,
  `
Well, for more than 5 years (since 2016 when AngularJS was the king) I focus, utilizing the JavaScript ecosystem, on building software platforms for the web. The last 2 years I have worked both as a professional Front and Back End developer, transforming design mockups into usable pages and designing, developing and testing RESTful APIs and robust databases.`,
  `
As a member of a team, I seek honest and trustworthy connections. In such environments, I feel secure, efficient and funny ツ. I'm not a fan of life hack "Fake it until you make it" and also I'm trying to be social without having presence on most social networking platforms.
`,
  `When I'm away from keyboard I like joining local meetups (DevStaff, Open Coffee Heraklion) as well as dance communities, learning and dancing mostly Argentinian Tango and Lindy Hop. Moreover, I love cycling around the seaside part of Heraklion and playing football with good friends in 8x8 fields weekly.`,
];
</script>

<template>
  <v-container
    class="main-layout page-container d-flex align-center"
    fluid
    full-width
    fill-height
  >
    <SocialHead
      :title="head.title"
      :description="head.description"
      :image="head.image"
    />

    <v-row class="page-container" no-gutters justify="center">
      <!-- hero section -->
      <v-col cols="12" class="section px-4 py-0 mx-0">
        <p class="text-center text-h6 text-md-h4">
          What You <span class="text-primary">Read</span> is What you Get
        </p>
      </v-col>

      <!-- about me section -->
      <v-col cols="12" class="section px-4 py-10 mx-0">
        <v-container class="about-me-container" fluid full-width>
          <v-row full-width justify="center" align="center">
            <v-col cols="12" md="10" lg="9" class="px-4">
              <p
                v-for="(paragraph, i) in aboutMe"
                :key="i"
                class="text-left"
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
      <v-col cols="12" class="section px-4 py-10 mx-0">
        <v-row class="justify-space-between no-gutters">
          <v-col cols="12" mb="2">
            <timeline content="experience"></timeline>
          </v-col>
        </v-row>
      </v-col>

      <!-- timeline section -->
      <v-col cols="12" class="section px-4 py-10 mx-0">
        <v-row class="justify-space-between no-gutters">
          <v-col cols="12" mb="2">
            <timeline content="education"></timeline>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
