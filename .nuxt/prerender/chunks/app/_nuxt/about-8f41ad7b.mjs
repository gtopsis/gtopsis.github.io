import { useSSRContext, reactive, computed, defineComponent, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode } from 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue/server-renderer/index.mjs';
import { d as defineStore, _ as _export_sfc, u as useHead, a as useDisplay, s as storeToRefs } from '../server.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/ofetch/dist/node.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/unhead/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/h3/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/destr/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/scule/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/ohash/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/unstorage/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/radix3/dist/index.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SocialHead",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: "./images/Twitter-card.png"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      meta: [
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: props.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: props.description
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: props.image
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: props.title
        },
        {
          hid: "og:title",
          property: "og:title",
          content: props.title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: props.description
        },
        {
          hid: "og:image",
          property: "og:image",
          content: props.image
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialHead.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const useStudiesStore = defineStore("StudiesStore", () => {
  const studies = reactive([
    {
      id: 1,
      avatar: {
        img: "/images/uoc_logo.png",
        alt: "Logo of University of Crete",
        bgColor: "#000",
        label: {
          text: "University of Crete",
          link: "https://www.uoc.gr/"
        }
      },
      title: "MSc in Computer Science - Human Computer Interaction, Information Systems",
      roles: [
        {
          jobTitle: "Back End Web Developer",
          period: {
            start: "September 2016",
            end: "November 2019"
          }
        }
      ],
      period: {
        start: "September 2016",
        end: "November 2019"
      },
      description: "",
      tools: [],
      readMore: ""
    },
    {
      id: 2,
      avatar: {
        img: "/images/chalmers_logo.png",
        alt: "Logo of Chalmers University of Technology",
        bgColor: "#fff",
        label: {
          text: "Chalmers University of Technology",
          link: "https://www.chalmers.se/"
        }
      },
      title: "ERASMUS+ for Postgraduate studies - Interaction Design and Technologies",
      roles: [],
      period: {
        start: "August 2017",
        end: "January 2018"
      },
      description: "",
      tools: [],
      readMore: ""
    },
    {
      id: 3,
      avatar: {
        img: "/images/uoc_logo.png",
        alt: "Logo of University of Crete",
        bgColor: "#000",
        label: {
          text: "University of Crete",
          link: "https://www.uoc.gr/"
        }
      },
      title: "BSc in Computer Science",
      roles: [],
      period: {
        start: "September 2011",
        end: "March 2015"
      },
      description: "",
      tools: [],
      readMore: ""
    },
    {
      id: 4,
      avatar: {
        img: "/images/uoc_cyprus_logo.png",
        alt: "Logo of University of Cyprus",
        bgColor: "#fff",
        label: {
          text: "University of Cyprus",
          link: "https://www.uoc.gr/"
        }
      },
      title: "ERASMUS+ for Undergraduate studies",
      roles: [],
      period: {
        start: "September 2014",
        end: "January 2015"
      },
      description: "",
      tools: [],
      readMore: ""
    }
  ]);
  const studiesList = computed(() => studies);
  return { studiesList };
});
const useJobsStore = defineStore("JobsStore", () => {
  const jobs = reactive([
    {
      id: 1,
      avatar: {
        img: "/images/fairlo_logo.png",
        alt: "Logo of software agency Fairlo",
        bgColor: "#fff",
        label: {
          text: "Fairlo",
          link: "https://fairlo.se"
        }
      },
      title: "Back-End Engineer",
      roles: [
        {
          jobTitle: "Back-End Engineer",
          period: {
            start: "September 2021",
            end: "February 2023"
          }
        }
      ],
      period: {
        start: "September 2021",
        end: "February 2023"
      },
      description: "",
      tools: [
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Jest",
        "AWS ",
        "Document RESTful APIs (OpenAPI specification)"
      ],
      readMore: ""
    },
    {
      id: 2,
      avatar: {
        img: "/images/conveos_logo.png",
        alt: "Logo of software agency Conveos",
        bgColor: "#000",
        label: {
          text: "Conveos",
          link: "https://conveos.com"
        }
      },
      title: "Back-End Web Developer",
      roles: [
        {
          jobTitle: "Back-End Web Developer",
          period: {
            start: "January 2021",
            end: "June 2021"
          }
        }
      ],
      period: {
        start: "January 2021",
        end: "June 2021"
      },
      description: "",
      tools: [
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Jest",
        "Document RESTful APIs (OpenAPI specification)"
      ],
      readMore: ""
    },
    {
      id: 3,
      avatar: {
        img: "/images/conveos_logo.png",
        alt: "Logo of software agency Conveos",
        bgColor: "#000",
        label: {
          text: "Conveos",
          link: "https://conveos.com"
        }
      },
      title: "Back-End Web Developer",
      roles: [
        {
          jobTitle: "Back-End Web Developer",
          period: {
            start: "July 2019",
            end: "July 2020"
          }
        },
        {
          jobTitle: "Front-End Web Developer",
          period: {
            start: "July 2019",
            end: "July 2020"
          }
        }
      ],
      period: {
        start: "July 2019",
        end: "July 2020"
      },
      description: "",
      tools: [
        "JavaScript",
        "Vue.js",
        "Vuetify",
        "Node.js",
        "MongoDB",
        "Document RESTful APIs (OpenAPI specification)"
      ],
      readMore: ""
    },
    {
      id: 4,
      avatar: {
        img: "/images/forth_logo.png",
        alt: "Logo of FORTH in Greece",
        bgColor: "#fff",
        label: {
          text: "Laboratory HCI of ICS-FORTH",
          link: "https://www.ics.forth.gr/"
        }
      },
      title: "Graduate R&D assistant at Human-Computer Interaction Lab (HCI)",
      roles: [
        {
          jobTitle: "Back-End Web Developer",
          period: {
            start: "Jun 2016",
            end: "Jun 2019"
          }
        }
      ],
      period: {
        start: "Jun 2016",
        end: "Jun 2019"
      },
      description: "",
      tools: [
        "JavaScript",
        "AngularJS (v1.6)",
        "Foundation for Sites",
        "Node.js",
        "MongoDB",
        "SocketIO",
        "Invision",
        "Gravid Designer",
        "Presentator.io"
      ],
      readMore: ""
    }
  ]);
  const jobsList = computed(() => jobs);
  return { jobsList };
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TimelineSection",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: "experience",
      validator: (v) => ["experience", "education"].includes(v)
    }
  },
  setup(__props) {
    const props = __props;
    const { mobile } = useDisplay();
    const timelineDirection = computed(
      () => mobile.value ? "vertical" : "horizontal"
    );
    const avatarSize = 44;
    const truncateLines = props.content === "education" ? "start" : "both";
    const timelineTitle = computed(() => {
      if (props.content === "experience") {
        return "Experience";
      } else if (props.content === "education") {
        return "Education";
      }
      return "My Story";
    });
    const timelineItems = computed(() => {
      if (props.content === "experience") {
        const { jobsList } = storeToRefs(useJobsStore());
        return jobsList.value;
      } else if (props.content === "education") {
        const { studiesList } = storeToRefs(useStudiesStore());
        return studiesList.value;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_timeline = resolveComponent("v-timeline");
      const _component_v_timeline_item = resolveComponent("v-timeline-item");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "pa-0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, {
              align: "center",
              class: "justify-md-center justify-sm-left"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "auto",
                    class: "mb-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 data-v-c56ceaab${_scopeId3}>${ssrInterpolate(unref(timelineTitle))}</h1>`);
                      } else {
                        return [
                          createVNode("h1", null, toDisplayString(unref(timelineTitle)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "auto",
                      class: "mb-3"
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", null, toDisplayString(unref(timelineTitle)), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "px-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_timeline, {
                          align: "center",
                          direction: unref(timelineDirection),
                          side: "end",
                          "truncate-line": unref(truncateLines)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(timelineItems), (item, i) => {
                                _push5(ssrRenderComponent(_component_v_timeline_item, {
                                  key: i,
                                  "fill-dot": "",
                                  "dot-color": item.avatar.bgColor,
                                  elevation: "2",
                                  style: { "align-self": "flex-start" }
                                }, {
                                  icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_tooltip, {
                                        location: "bottom",
                                        "aria-labelledby": "timelineItemTooltipText"
                                      }, {
                                        activator: withCtx(({ props: props2 }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_avatar, mergeProps({
                                              size: avatarSize,
                                              class: "timeline-avatar"
                                            }, props2), {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_img, {
                                                    contain: "",
                                                    src: item.avatar.img,
                                                    alt: item.avatar.alt,
                                                    class: "firm-logo",
                                                    width: "32",
                                                    height: "32"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_img, {
                                                      contain: "",
                                                      src: item.avatar.img,
                                                      alt: item.avatar.alt,
                                                      class: "firm-logo",
                                                      width: "32",
                                                      height: "32"
                                                    }, null, 8, ["src", "alt"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_avatar, mergeProps({
                                                size: avatarSize,
                                                class: "timeline-avatar"
                                              }, props2), {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    contain: "",
                                                    src: item.avatar.img,
                                                    alt: item.avatar.alt,
                                                    class: "firm-logo",
                                                    width: "32",
                                                    height: "32"
                                                  }, null, 8, ["src", "alt"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span id="timelineItemTooltipText" data-v-c56ceaab${_scopeId6}>${ssrInterpolate(item.avatar.label.text)}</span>`);
                                          } else {
                                            return [
                                              createVNode("span", { id: "timelineItemTooltipText" }, toDisplayString(item.avatar.label.text), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_tooltip, {
                                          location: "bottom",
                                          "aria-labelledby": "timelineItemTooltipText"
                                        }, {
                                          activator: withCtx(({ props: props2 }) => [
                                            createVNode(_component_v_avatar, mergeProps({
                                              size: avatarSize,
                                              class: "timeline-avatar"
                                            }, props2), {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  contain: "",
                                                  src: item.avatar.img,
                                                  alt: item.avatar.alt,
                                                  class: "firm-logo",
                                                  width: "32",
                                                  height: "32"
                                                }, null, 8, ["src", "alt"])
                                              ]),
                                              _: 2
                                            }, 1040)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("span", { id: "timelineItemTooltipText" }, toDisplayString(item.avatar.label.text), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, { class: "timeline-item-card" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_card_title, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold" data-v-c56ceaab${_scopeId7}>${ssrInterpolate(item.title)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold" }, toDisplayString(item.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_card_subtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span data-v-c56ceaab${_scopeId7}>${ssrInterpolate(item.period.start)} - ${ssrInterpolate(item.period.end)}</span><p class="mb-0" data-v-c56ceaab${_scopeId7}>`);
                                                  if (item.avatar.label.link) {
                                                    _push8(`<a class="text-secondary font-weight-bold"${ssrRenderAttr("href", item.avatar.label.link)} target="_blank" rel="noopener noreferrer" data-v-c56ceaab${_scopeId7}>${ssrInterpolate(item.avatar.label.text)}</a>`);
                                                  } else {
                                                    _push8(`<span class="text-secondary font-weight-bold" data-v-c56ceaab${_scopeId7}>${ssrInterpolate(item.avatar.label.text)}</span>`);
                                                  }
                                                  _push8(`</p>`);
                                                } else {
                                                  return [
                                                    createVNode("span", null, toDisplayString(item.period.start) + " - " + toDisplayString(item.period.end), 1),
                                                    createVNode("p", { class: "mb-0" }, [
                                                      item.avatar.label.link ? (openBlock(), createBlock("a", {
                                                        key: 0,
                                                        class: "text-secondary font-weight-bold",
                                                        href: item.avatar.label.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer"
                                                      }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", {
                                                        key: 1,
                                                        class: "text-secondary font-weight-bold"
                                                      }, toDisplayString(item.avatar.label.text), 1))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_card_text, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<p class="ma-0" data-v-c56ceaab${_scopeId7}>${ssrInterpolate(item.description)}</p><ul class="ma-2" data-v-c56ceaab${_scopeId7}><!--[-->`);
                                                  ssrRenderList(item.tools, (tool, j) => {
                                                    _push8(`<li class="text-left" data-v-c56ceaab${_scopeId7}><span data-v-c56ceaab${_scopeId7}>${ssrInterpolate(tool)}</span></li>`);
                                                  });
                                                  _push8(`<!--]--></ul>`);
                                                } else {
                                                  return [
                                                    createVNode("p", { class: "ma-0" }, toDisplayString(item.description), 1),
                                                    createVNode("ul", { class: "ma-2" }, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(item.tools, (tool, j) => {
                                                        return openBlock(), createBlock("li", {
                                                          key: j,
                                                          class: "text-left"
                                                        }, [
                                                          createVNode("span", null, toDisplayString(tool), 1)
                                                        ]);
                                                      }), 128))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            if (item.readMore != "") {
                                              _push7(ssrRenderComponent(_component_v_card_actions, null, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` Read more `);
                                                  } else {
                                                    return [
                                                      createTextVNode(" Read more ")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold" }, toDisplayString(item.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_card_subtitle, null, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, toDisplayString(item.period.start) + " - " + toDisplayString(item.period.end), 1),
                                                  createVNode("p", { class: "mb-0" }, [
                                                    item.avatar.label.link ? (openBlock(), createBlock("a", {
                                                      key: 0,
                                                      class: "text-secondary font-weight-bold",
                                                      href: item.avatar.label.link,
                                                      target: "_blank",
                                                      rel: "noopener noreferrer"
                                                    }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", {
                                                      key: 1,
                                                      class: "text-secondary font-weight-bold"
                                                    }, toDisplayString(item.avatar.label.text), 1))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createVNode("p", { class: "ma-0" }, toDisplayString(item.description), 1),
                                                  createVNode("ul", { class: "ma-2" }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(item.tools, (tool, j) => {
                                                      return openBlock(), createBlock("li", {
                                                        key: j,
                                                        class: "text-left"
                                                      }, [
                                                        createVNode("span", null, toDisplayString(tool), 1)
                                                      ]);
                                                    }), 128))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              item.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Read more ")
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_card, { class: "timeline-item-card" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold" }, toDisplayString(item.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_card_subtitle, null, {
                                              default: withCtx(() => [
                                                createVNode("span", null, toDisplayString(item.period.start) + " - " + toDisplayString(item.period.end), 1),
                                                createVNode("p", { class: "mb-0" }, [
                                                  item.avatar.label.link ? (openBlock(), createBlock("a", {
                                                    key: 0,
                                                    class: "text-secondary font-weight-bold",
                                                    href: item.avatar.label.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                  }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", {
                                                    key: 1,
                                                    class: "text-secondary font-weight-bold"
                                                  }, toDisplayString(item.avatar.label.text), 1))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createVNode("p", { class: "ma-0" }, toDisplayString(item.description), 1),
                                                createVNode("ul", { class: "ma-2" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(item.tools, (tool, j) => {
                                                    return openBlock(), createBlock("li", {
                                                      key: j,
                                                      class: "text-left"
                                                    }, [
                                                      createVNode("span", null, toDisplayString(tool), 1)
                                                    ]);
                                                  }), 128))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            item.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Read more ")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(timelineItems), (item, i) => {
                                  return openBlock(), createBlock(_component_v_timeline_item, {
                                    key: i,
                                    "fill-dot": "",
                                    "dot-color": item.avatar.bgColor,
                                    elevation: "2",
                                    style: { "align-self": "flex-start" }
                                  }, {
                                    icon: withCtx(() => [
                                      createVNode(_component_v_tooltip, {
                                        location: "bottom",
                                        "aria-labelledby": "timelineItemTooltipText"
                                      }, {
                                        activator: withCtx(({ props: props2 }) => [
                                          createVNode(_component_v_avatar, mergeProps({
                                            size: avatarSize,
                                            class: "timeline-avatar"
                                          }, props2), {
                                            default: withCtx(() => [
                                              createVNode(_component_v_img, {
                                                contain: "",
                                                src: item.avatar.img,
                                                alt: item.avatar.alt,
                                                class: "firm-logo",
                                                width: "32",
                                                height: "32"
                                              }, null, 8, ["src", "alt"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ]),
                                        default: withCtx(() => [
                                          createVNode("span", { id: "timelineItemTooltipText" }, toDisplayString(item.avatar.label.text), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, { class: "timeline-item-card" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold" }, toDisplayString(item.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_card_subtitle, null, {
                                            default: withCtx(() => [
                                              createVNode("span", null, toDisplayString(item.period.start) + " - " + toDisplayString(item.period.end), 1),
                                              createVNode("p", { class: "mb-0" }, [
                                                item.avatar.label.link ? (openBlock(), createBlock("a", {
                                                  key: 0,
                                                  class: "text-secondary font-weight-bold",
                                                  href: item.avatar.label.link,
                                                  target: "_blank",
                                                  rel: "noopener noreferrer"
                                                }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", {
                                                  key: 1,
                                                  class: "text-secondary font-weight-bold"
                                                }, toDisplayString(item.avatar.label.text), 1))
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createVNode("p", { class: "ma-0" }, toDisplayString(item.description), 1),
                                              createVNode("ul", { class: "ma-2" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(item.tools, (tool, j) => {
                                                  return openBlock(), createBlock("li", {
                                                    key: j,
                                                    class: "text-left"
                                                  }, [
                                                    createVNode("span", null, toDisplayString(tool), 1)
                                                  ]);
                                                }), 128))
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          item.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Read more ")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["dot-color"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_timeline, {
                            align: "center",
                            direction: unref(timelineDirection),
                            side: "end",
                            "truncate-line": unref(truncateLines)
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(timelineItems), (item, i) => {
                                return openBlock(), createBlock(_component_v_timeline_item, {
                                  key: i,
                                  "fill-dot": "",
                                  "dot-color": item.avatar.bgColor,
                                  elevation: "2",
                                  style: { "align-self": "flex-start" }
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_component_v_tooltip, {
                                      location: "bottom",
                                      "aria-labelledby": "timelineItemTooltipText"
                                    }, {
                                      activator: withCtx(({ props: props2 }) => [
                                        createVNode(_component_v_avatar, mergeProps({
                                          size: avatarSize,
                                          class: "timeline-avatar"
                                        }, props2), {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              contain: "",
                                              src: item.avatar.img,
                                              alt: item.avatar.alt,
                                              class: "firm-logo",
                                              width: "32",
                                              height: "32"
                                            }, null, 8, ["src", "alt"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ]),
                                      default: withCtx(() => [
                                        createVNode("span", { id: "timelineItemTooltipText" }, toDisplayString(item.avatar.label.text), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, { class: "timeline-item-card" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold" }, toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_card_subtitle, null, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(item.period.start) + " - " + toDisplayString(item.period.end), 1),
                                            createVNode("p", { class: "mb-0" }, [
                                              item.avatar.label.link ? (openBlock(), createBlock("a", {
                                                key: 0,
                                                class: "text-secondary font-weight-bold",
                                                href: item.avatar.label.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer"
                                              }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", {
                                                key: 1,
                                                class: "text-secondary font-weight-bold"
                                              }, toDisplayString(item.avatar.label.text), 1))
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "ma-0" }, toDisplayString(item.description), 1),
                                            createVNode("ul", { class: "ma-2" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.tools, (tool, j) => {
                                                return openBlock(), createBlock("li", {
                                                  key: j,
                                                  class: "text-left"
                                                }, [
                                                  createVNode("span", null, toDisplayString(tool), 1)
                                                ]);
                                              }), 128))
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        item.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Read more ")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["dot-color"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["direction", "truncate-line"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      class: "px-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_timeline, {
                          align: "center",
                          direction: unref(timelineDirection),
                          side: "end",
                          "truncate-line": unref(truncateLines)
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(timelineItems), (item, i) => {
                              return openBlock(), createBlock(_component_v_timeline_item, {
                                key: i,
                                "fill-dot": "",
                                "dot-color": item.avatar.bgColor,
                                elevation: "2",
                                style: { "align-self": "flex-start" }
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_component_v_tooltip, {
                                    location: "bottom",
                                    "aria-labelledby": "timelineItemTooltipText"
                                  }, {
                                    activator: withCtx(({ props: props2 }) => [
                                      createVNode(_component_v_avatar, mergeProps({
                                        size: avatarSize,
                                        class: "timeline-avatar"
                                      }, props2), {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            contain: "",
                                            src: item.avatar.img,
                                            alt: item.avatar.alt,
                                            class: "firm-logo",
                                            width: "32",
                                            height: "32"
                                          }, null, 8, ["src", "alt"])
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("span", { id: "timelineItemTooltipText" }, toDisplayString(item.avatar.label.text), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_card, { class: "timeline-item-card" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold" }, toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_subtitle, null, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(item.period.start) + " - " + toDisplayString(item.period.end), 1),
                                          createVNode("p", { class: "mb-0" }, [
                                            item.avatar.label.link ? (openBlock(), createBlock("a", {
                                              key: 0,
                                              class: "text-secondary font-weight-bold",
                                              href: item.avatar.label.link,
                                              target: "_blank",
                                              rel: "noopener noreferrer"
                                            }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "text-secondary font-weight-bold"
                                            }, toDisplayString(item.avatar.label.text), 1))
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "ma-0" }, toDisplayString(item.description), 1),
                                          createVNode("ul", { class: "ma-2" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.tools, (tool, j) => {
                                              return openBlock(), createBlock("li", {
                                                key: j,
                                                class: "text-left"
                                              }, [
                                                createVNode("span", null, toDisplayString(tool), 1)
                                              ]);
                                            }), 128))
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      item.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Read more ")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["dot-color"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["direction", "truncate-line"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, {
                align: "center",
                class: "justify-md-center justify-sm-left"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "auto",
                    class: "mb-3"
                  }, {
                    default: withCtx(() => [
                      createVNode("h1", null, toDisplayString(unref(timelineTitle)), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "px-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_timeline, {
                        align: "center",
                        direction: unref(timelineDirection),
                        side: "end",
                        "truncate-line": unref(truncateLines)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(timelineItems), (item, i) => {
                            return openBlock(), createBlock(_component_v_timeline_item, {
                              key: i,
                              "fill-dot": "",
                              "dot-color": item.avatar.bgColor,
                              elevation: "2",
                              style: { "align-self": "flex-start" }
                            }, {
                              icon: withCtx(() => [
                                createVNode(_component_v_tooltip, {
                                  location: "bottom",
                                  "aria-labelledby": "timelineItemTooltipText"
                                }, {
                                  activator: withCtx(({ props: props2 }) => [
                                    createVNode(_component_v_avatar, mergeProps({
                                      size: avatarSize,
                                      class: "timeline-avatar"
                                    }, props2), {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          contain: "",
                                          src: item.avatar.img,
                                          alt: item.avatar.alt,
                                          class: "firm-logo",
                                          width: "32",
                                          height: "32"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode("span", { id: "timelineItemTooltipText" }, toDisplayString(item.avatar.label.text), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_card, { class: "timeline-item-card" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold" }, toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_subtitle, null, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(item.period.start) + " - " + toDisplayString(item.period.end), 1),
                                        createVNode("p", { class: "mb-0" }, [
                                          item.avatar.label.link ? (openBlock(), createBlock("a", {
                                            key: 0,
                                            class: "text-secondary font-weight-bold",
                                            href: item.avatar.label.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                          }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "text-secondary font-weight-bold"
                                          }, toDisplayString(item.avatar.label.text), 1))
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "ma-0" }, toDisplayString(item.description), 1),
                                        createVNode("ul", { class: "ma-2" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.tools, (tool, j) => {
                                            return openBlock(), createBlock("li", {
                                              key: j,
                                              class: "text-left"
                                            }, [
                                              createVNode("span", null, toDisplayString(tool), 1)
                                            ]);
                                          }), 128))
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    item.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Read more ")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["dot-color"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["direction", "truncate-line"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TimelineSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c56ceaab"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About me page contains details about my personal hobbies, projects and goals."
        }
      ]
    });
    const head = {
      title: "About - Giorgos Topsis",
      description: "Learn more about me!",
      image: "./images/Twitter-card.png"
    };
    const webDevelopmentExperienceInYears = (/* @__PURE__ */ new Date()).getFullYear() - 2017;
    const aboutMe = [
      `As a kid I was thinking that sooner or later I will find which is my dream job, in which direction I'm was born to shine having a unique and enviable talent. The mission was clear, to find my specialty!
My studies (BSc, MSc, Erasmus periods) in Information Systems and Human-Computer Interaction at Computer Science Department of University of Crete seemed to offer me an appropriate opportunity to achieve my mission. And I was close, so close; Finally, I only had to choose between Web Development and User Experience Design fields.`,
      `
Well, for more than ${webDevelopmentExperienceInYears} years (since 2016 when AngularJS was the king) I focus, utilizing the JavaScript ecosystem, on building software platforms for the web. The last 3 years I have worked both as a professional Front and Back End developer, transforming design mockups into usable pages and designing, developing and testing RESTful APIs as well as developing third-party intefrations utilizing several AWS services.`,
      `
As a partner, I seek trustworthy connections and I enjoy being in work environments where meritocracy prevails. In such conditions, I feel a secure, productive, and funny teammate \u30C4.
`,
      `When I'm away from keyboard I like joining local meetups (DevStaff, Open Coffee Heraklion) as well as dance communities, learning and dancing mostly Argentinian Tango and Lindy Hop.`
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_SocialHead = _sfc_main$2;
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_TimelineSection = __nuxt_component_1;
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        class: "d-flex pa-0",
        fluid: "",
        "full-width": "",
        "fill-height": "",
        align: "center"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SocialHead, {
              title: head.title,
              description: head.description,
              image: head.image
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              class: "page-container",
              "no-gutters": "",
              justify: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "section pa-0 mx-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_container, {
                          class: "hero-container ma-0 pa-0",
                          "fill-height": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, {
                                "no-gutters": "",
                                justify: "center",
                                align: "center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "auto",
                                      "align-self": "center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<p class="text-center text-h6 text-sm-h5 text-md-h4" data-v-421706b1${_scopeId6}> What You <span class="text-primary" data-v-421706b1${_scopeId6}>Read</span> is What you Get </p>`);
                                        } else {
                                          return [
                                            createVNode("p", { class: "text-center text-h6 text-sm-h5 text-md-h4" }, [
                                              createTextVNode(" What You "),
                                              createVNode("span", { class: "text-primary" }, "Read"),
                                              createTextVNode(" is What you Get ")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "auto",
                                        "align-self": "center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-center text-h6 text-sm-h5 text-md-h4" }, [
                                            createTextVNode(" What You "),
                                            createVNode("span", { class: "text-primary" }, "Read"),
                                            createTextVNode(" is What you Get ")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, {
                                  "no-gutters": "",
                                  justify: "center",
                                  align: "center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "auto",
                                      "align-self": "center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-center text-h6 text-sm-h5 text-md-h4" }, [
                                          createTextVNode(" What You "),
                                          createVNode("span", { class: "text-primary" }, "Read"),
                                          createTextVNode(" is What you Get ")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_container, {
                            class: "hero-container ma-0 pa-0",
                            "fill-height": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, {
                                "no-gutters": "",
                                justify: "center",
                                align: "center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "auto",
                                    "align-self": "center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-center text-h6 text-sm-h5 text-md-h4" }, [
                                        createTextVNode(" What You "),
                                        createVNode("span", { class: "text-primary" }, "Read"),
                                        createTextVNode(" is What you Get ")
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "section px-0 py-10 mx-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_container, {
                          class: "about-me-container",
                          fluid: "",
                          "full-width": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, {
                                "full-width": "",
                                justify: "center",
                                align: "center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "10",
                                      lg: "9",
                                      class: "px-4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(aboutMe, (paragraph, i) => {
                                            _push7(`<p class="text-left text-body-1 mb-6" white data-v-421706b1${_scopeId6}>${ssrInterpolate(paragraph)}</p>`);
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(aboutMe, (paragraph, i) => {
                                              return createVNode("p", {
                                                key: i,
                                                class: "text-left text-body-1 mb-6",
                                                white: ""
                                              }, toDisplayString(paragraph), 1);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "10",
                                        lg: "9",
                                        class: "px-4"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(aboutMe, (paragraph, i) => {
                                            return createVNode("p", {
                                              key: i,
                                              class: "text-left text-body-1 mb-6",
                                              white: ""
                                            }, toDisplayString(paragraph), 1);
                                          }), 64))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, {
                                  "full-width": "",
                                  justify: "center",
                                  align: "center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "10",
                                      lg: "9",
                                      class: "px-4"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(aboutMe, (paragraph, i) => {
                                          return createVNode("p", {
                                            key: i,
                                            class: "text-left text-body-1 mb-6",
                                            white: ""
                                          }, toDisplayString(paragraph), 1);
                                        }), 64))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_container, {
                            class: "about-me-container",
                            fluid: "",
                            "full-width": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, {
                                "full-width": "",
                                justify: "center",
                                align: "center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "10",
                                    lg: "9",
                                    class: "px-4"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(aboutMe, (paragraph, i) => {
                                        return createVNode("p", {
                                          key: i,
                                          class: "text-left text-body-1 mb-6",
                                          white: ""
                                        }, toDisplayString(paragraph), 1);
                                      }), 64))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "section px-0 py-10 mx-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, { class: "justify-space-between no-gutters" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                mb: "2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_TimelineSection, { content: "experience" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_TimelineSection, { content: "experience" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  mb: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TimelineSection, { content: "experience" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, { class: "justify-space-between no-gutters" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                mb: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_TimelineSection, { content: "experience" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "section px-0 py-10 mx-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, { class: "justify-space-between no-gutters" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                mb: "2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_TimelineSection, { content: "education" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_TimelineSection, { content: "education" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  mb: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TimelineSection, { content: "education" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, { class: "justify-space-between no-gutters" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                mb: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_TimelineSection, { content: "education" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      class: "section pa-0 mx-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, {
                          class: "hero-container ma-0 pa-0",
                          "fill-height": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, {
                              "no-gutters": "",
                              justify: "center",
                              align: "center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "auto",
                                  "align-self": "center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-center text-h6 text-sm-h5 text-md-h4" }, [
                                      createTextVNode(" What You "),
                                      createVNode("span", { class: "text-primary" }, "Read"),
                                      createTextVNode(" is What you Get ")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      class: "section px-0 py-10 mx-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, {
                          class: "about-me-container",
                          fluid: "",
                          "full-width": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, {
                              "full-width": "",
                              justify: "center",
                              align: "center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "10",
                                  lg: "9",
                                  class: "px-4"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(aboutMe, (paragraph, i) => {
                                      return createVNode("p", {
                                        key: i,
                                        class: "text-left text-body-1 mb-6",
                                        white: ""
                                      }, toDisplayString(paragraph), 1);
                                    }), 64))
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      class: "section px-0 py-10 mx-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, { class: "justify-space-between no-gutters" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              mb: "2"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_TimelineSection, { content: "experience" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      class: "section px-0 py-10 mx-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, { class: "justify-space-between no-gutters" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              mb: "2"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_TimelineSection, { content: "education" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SocialHead, {
                title: head.title,
                description: head.description,
                image: head.image
              }, null, 8, ["title", "description", "image"]),
              createVNode(_component_v_row, {
                class: "page-container",
                "no-gutters": "",
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "section pa-0 mx-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, {
                        class: "hero-container ma-0 pa-0",
                        "fill-height": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, {
                            "no-gutters": "",
                            justify: "center",
                            align: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "auto",
                                "align-self": "center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-center text-h6 text-sm-h5 text-md-h4" }, [
                                    createTextVNode(" What You "),
                                    createVNode("span", { class: "text-primary" }, "Read"),
                                    createTextVNode(" is What you Get ")
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "section px-0 py-10 mx-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, {
                        class: "about-me-container",
                        fluid: "",
                        "full-width": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, {
                            "full-width": "",
                            justify: "center",
                            align: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "10",
                                lg: "9",
                                class: "px-4"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(aboutMe, (paragraph, i) => {
                                    return createVNode("p", {
                                      key: i,
                                      class: "text-left text-body-1 mb-6",
                                      white: ""
                                    }, toDisplayString(paragraph), 1);
                                  }), 64))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "section px-0 py-10 mx-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, { class: "justify-space-between no-gutters" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            mb: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_TimelineSection, { content: "experience" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "section px-0 py-10 mx-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, { class: "justify-space-between no-gutters" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            mb: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_TimelineSection, { content: "education" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-421706b1"]]);

export { about as default };
//# sourceMappingURL=about-8f41ad7b.mjs.map
