export const useAboutMeStore = defineStore("AboutMeStore", () => {
  const webDevelopmentExperienceInYears = new Date().getFullYear() - 2017;

  const intro =
    "As a kid, I was thinking that sooner or later I would find my dream job, the direction in which I was born to shine, having a unique and enviable talent. The mission was clear: find my specialty! My studies (BSc, MSc, and Erasmus periods) in Information Systems and Human-Computer Interaction at the Computer Science Department of the University of Crete seemed to offer me an appropriate opportunity to achieve my mission. And I was close, so close; finally, I only had to choose between the Web Development and User Experience Design fields.";
  const workExperience = `Well, for more than ${webDevelopmentExperienceInYears} years (since 2016 when AngularJS was king), I have focused on utilizing the JavaScript ecosystem to build software platforms for the web. The last 3 years I have worked both as a professional Front and Back-End developer, transforming design mockups into usable pages and designing, developing, and testing RESTful APIs, as well as developing third-party integrations utilizing several AWS services.`;
  const personal1 =
    "As a partner, I seek trustworthy connections, and I enjoy being in work environments where meritocracy prevails. In such conditions, I feel like a productive and funny teammate ツ.";
  const personal2 =
    "When I'm away from the keyboard, I like joining local meetups (DevStaff, Open Coffee Heraklion) as well as dance communities, learning and dancing mostly Argentinian Tango and Lindy Hop.";

  const aboutMe = reactive([intro, workExperience, personal1, personal2]);

  return { aboutMe };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAboutMeStore, import.meta.hot));
}
