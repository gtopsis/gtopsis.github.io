const tools = {
  vuejs:
    "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
  vuex: "Vuex is a state management pattern + library for Vue.js applications.",
  mongoDB:
    "MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.",
  jest: "Jest is a delightful JavaScript Testing Framework with a focus on simplicity.",
  supertest:
    "Super-agent driven library for testing node.js HTTP servers using a fluent API. ",
  vuetify: "Vuetify is a Material Design component framework for Vue.js.",
  nodejs:
    "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
  socketio:
    "Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server.",
  express: "Fast, unopinionated, minimalist web framework for node.",
  angularjs:
    "AngularJS is a JavaScript-based open-source front-end web framework for developing single-page applications.",
  foundationsites: "Foundation is a responsive front-end framework.",
  bootstrap:
    "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
  openapi:
    "The OpenAPI Specification defines a standard interface to RESTful APIs which allows both humans and computers to understand service capabilities without access to source code, documentation, or network traffic inspection.",
  invision:
    "InVision is the digital product design platform used to make the world’s best customer experiences.",
  presentator: "Design presentation and collaboration platform.",
  heuristicevaluation:
    "Heuristic evaluation is a process where experts use rules of thumb to measure the usability of user interfaces in independent walkthroughs and report issues.",
  userCentredDesign:
    "User-centered design (UCD) is an iterative design process in which designers focus on the users and their needs in each phase of the design process.",
};

const getToolDescription = (toolName: string) => {
  if (!toolName || !tools[toolName]) return "";

  return tools[toolName] || toolName;
};

export { getToolDescription };
