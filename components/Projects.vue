<template>
  <v-container fluid full-width>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-3">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row dense justify="">
      <v-col
        v-for="(meetup, index) in meetups"
        :key="index"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="meetup-card" @click="navigateToMeetup(meetup)">
          <v-img
            :src="meetup.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="meetup.title"></v-card-title>
          </v-img>

          <!-- <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Personal Projects',
      meetups: [
        {
          src: '/images/portfolio.png',
          title: 'Personal website',
          link: 'https://gtopsis.github.io/',
        },
        {
          src: '/images/uoc-radio.png',
          title: 'Uoc radio',
          link: 'https://gtopsis.github.io/Uoc-radio-website/index.html',
        },
        {
          src: '/images/cs-352.png',
          title: 'Website for course cs-352',
          link: '#',
        },
      ],
    };
  },
  methods: {
    navigateToMeetup(meetup) {
      window.open(meetup.link);
    },
  },
};
</script>

<style scoped>
.meetup-card:hover {
  cursor: pointer;
}
</style>
