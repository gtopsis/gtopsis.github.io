import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMeetup,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMoon,
  faSun,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGithub,
  faLinkedin,
  faMoon,
  faSun,
  faArrowUpRightFromSquare,
  faMeetup,
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
