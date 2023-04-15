export interface Project {
  src: string;
  imageDescription: string;
  title: string;
  description: string;
  demo: string;
  code: string;
}

export interface Meetup {
  src: string;
  title: string;
  link: string;
  description: string;
}

interface Technology {
  desc: string;
  key: string;
  title: string;
}

export interface Skill {
  icon: string;
  title: string;
  desc: string;
  heading: string;
  technologies: Technology[];
}
