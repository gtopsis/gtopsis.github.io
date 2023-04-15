import { getToolDescription } from '~~/utils/tootls-descriptions'

export const useSkillsStore = defineStore('SkillsStore', () => {
  const skills = reactive([
    {
      icon: 'laptop-code',
      title: 'Front End Developer',
      desc: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
      heading: 'Languages and Frameworks',
      technologies: [
        { desc: getToolDescription('vuejs'), key: 'vuejs', title: 'Vue.js' },
        { desc: getToolDescription('vuex'), key: 'vuex', title: 'Vuex' },
        {
          desc: getToolDescription('vuetify'),
          key: 'vuetify',
          title: 'Vuetify'
        },
        {
          desc: getToolDescription('bootstrap'),
          key: 'bootstrap',
          title: 'Bootstrap'
        },
        {
          desc: getToolDescription('foundationSites'),
          key: 'foundationSites',
          title: 'Foundation for sites'
        },
        {
          desc: getToolDescription('javascript'),
          key: 'javascript',
          title: 'JavaScript'
        },
        { desc: getToolDescription('html'), key: 'html', title: 'HTML' },
        { desc: getToolDescription('css'), key: 'css', title: 'CSS' },
        {
          desc: getToolDescription('angularjs'),
          key: 'angularjs',
          title: 'AngularJS (v1.6)'
        }
      ]
    },
    {
      icon: 'server',
      title: 'Back End Developer',
      desc: 'Following the OpenAPI specification and tools I design and document robust web services.',
      heading: 'Languages and Frameworks',
      technologies: [
        {
          desc: getToolDescription('nodejs'),
          key: 'nodejs',
          title: 'Node.js'
        },
        {
          desc: getToolDescription('express'),
          key: 'express',
          title: 'Express'
        },
        {
          desc: getToolDescription('mongodb'),
          key: 'mongodb',
          title: 'MongoDB'
        },
        {
          desc: getToolDescription(''),
          key: 'openapi',
          title: 'OpenAPI specification and Swagger tools'
        },
        {
          desc: getToolDescription('socketio'),
          key: 'socketio',
          title: 'SocketIO'
        },
        { desc: getToolDescription('jest'), key: 'jest', title: 'Jest' },
        {
          desc: getToolDescription('supertest'),
          key: 'supertest',
          title: 'SuperTest'
        }
      ]
    },
    {
      icon: 'pencil-ruler',
      title: 'UX Designer',
      desc: 'I value consistent content structure, clean design patterns, and intuitive graphical interfaces.',
      heading: 'Methods and Tools',
      technologies: [
        {
          desc: getToolDescription('userCentredDesign'),
          key: 'userCentredDesign',
          title: 'User-Centred design'
        },
        {
          desc: getToolDescription('heuristicevaluation'),
          key: 'heuristicevaluation',
          title: 'Heuristic Evaluation'
        },
        { desc: getToolDescription(''), key: '', title: 'Pen and Paper' },
        {
          desc: getToolDescription('invision'),
          key: 'invision',
          title: 'Invision'
        },
        {
          desc: getToolDescription('presentator'),
          key: 'presentator',
          title: 'Presentator.io'
        },
        { desc: getToolDescription(''), key: '', title: 'Gravit Designer' },
        { desc: getToolDescription(''), key: '', title: 'Balsamiq Mockups' }
      ]
    }
  ])

  const skillsList = computed(() => skills)

  return { skillsList }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSkillsStore, import.meta.hot))
}
