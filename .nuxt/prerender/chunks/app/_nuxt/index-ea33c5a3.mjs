import { _ as __nuxt_component_0$1 } from './nuxt-link-343a4f5f.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, computed, unref, toHandlers, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue/server-renderer/index.mjs';
import { d as defineStore, _ as _export_sfc, u as useHead, a as useDisplay } from '../server.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/ofetch/dist/node.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/unhead/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/h3/dist/index.mjs';
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

const _sfc_main$3 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const headline = {
      pre: "I'm ",
      name: {
        text: "Giorgos",
        pronunciation: "(/\u0261i.\u0254\u030C\u02D0r.\u0261.os/)",
        route: "about"
      },
      post: "a Full Stack Web Developer based in Heraklion of Crete."
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        fluid: "",
        "fill-height": "",
        class: "hero-container px-0 d-flex align-center justify-center"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, {
              "no-gutters": "",
              class: "align-center justify-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { class: "px-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headline text-h5 text-sm-h3 text-md-h4" data-v-a2e1ae29${_scopeId3}>${ssrInterpolate(headline.pre)} `);
                        _push4(ssrRenderComponent(_component_nuxt_link, {
                          to: headline.name.route,
                          class: "first-name"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(headline.name.text)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(headline.name.text), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` ${ssrInterpolate(headline.name.pronunciation)},<br data-v-a2e1ae29${_scopeId3}> ${ssrInterpolate(headline.post)}</h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headline text-h5 text-sm-h3 text-md-h4" }, [
                            createTextVNode(toDisplayString(headline.pre) + " ", 1),
                            createVNode(_component_nuxt_link, {
                              to: headline.name.route,
                              class: "first-name"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(headline.name.text), 1)
                              ]),
                              _: 1
                            }, 8, ["to"]),
                            createTextVNode(" " + toDisplayString(headline.name.pronunciation) + ",", 1),
                            createVNode("br"),
                            createTextVNode(" " + toDisplayString(headline.post), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { class: "px-0" }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "headline text-h5 text-sm-h3 text-md-h4" }, [
                          createTextVNode(toDisplayString(headline.pre) + " ", 1),
                          createVNode(_component_nuxt_link, {
                            to: headline.name.route,
                            class: "first-name"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(headline.name.text), 1)
                            ]),
                            _: 1
                          }, 8, ["to"]),
                          createTextVNode(" " + toDisplayString(headline.name.pronunciation) + ",", 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(headline.post), 1)
                        ])
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
                "no-gutters": "",
                class: "align-center justify-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { class: "px-0" }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "headline text-h5 text-sm-h3 text-md-h4" }, [
                        createTextVNode(toDisplayString(headline.pre) + " ", 1),
                        createVNode(_component_nuxt_link, {
                          to: headline.name.route,
                          class: "first-name"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(headline.name.text), 1)
                          ]),
                          _: 1
                        }, 8, ["to"]),
                        createTextVNode(" " + toDisplayString(headline.name.pronunciation) + ",", 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(headline.post), 1)
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
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a2e1ae29"]]);
const useJobsStore = defineStore("JobsStore", {
  state: () => ({
    jobs: [
      {
        id: 1,
        avatar: {
          img: `/images/fairlo_logo.png`,
          alt: "Logo of software agency Fairlo",
          bgColor: "#000",
          label: {
            text: "Fairlo",
            link: "https://fairlo.se"
          }
        },
        card: {
          title: "Back End Web Developer",
          roles: [
            {
              jobTitle: "Back End Web Developer",
              period: {
                start: "September 2021",
                end: "February 2023"
              }
            }
          ],
          period: {
            start: "September 2021",
            end: "Present"
          },
          description: "",
          tools: [
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Jest",
            "Document RESTful APIs (OpenAPI specification)"
          ],
          readMore: ""
        }
      },
      {
        id: 2,
        avatar: {
          img: `/images/conveos_logo.png`,
          alt: "Logo of software agency Conveos",
          bgColor: "#000",
          label: {
            text: "Conveos",
            link: "https://conveos.com"
          }
        },
        card: {
          title: "Back End Web Developer",
          roles: [
            {
              jobTitle: "Back End Web Developer",
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
        }
      },
      {
        id: 3,
        avatar: {
          img: `/images/conveos_logo.png`,
          alt: "Logo of software agency Conveos",
          bgColor: "#000",
          label: {
            text: "Conveos",
            link: "https://conveos.com"
          }
        },
        card: {
          title: "Front & Back End Web Developer",
          roles: [
            {
              jobTitle: "Back End Web Developer",
              period: {
                start: "July 2019",
                end: "July 2020"
              }
            },
            {
              jobTitle: "Front End Web Developer",
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
        }
      },
      {
        id: 4,
        avatar: {
          img: `/images/forth_logo.png`,
          alt: "Logo of FORTH in Greece",
          bgColor: "#fff",
          label: {
            text: "Laboratory HCI of ICS-FORTH",
            link: "https://www.ics.forth.gr/"
          }
        },
        card: {
          title: "Graduate R&D assistant at Human-Computer Interaction Lab (HCI)",
          roles: [
            {
              jobTitle: "Back End Web Developer",
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
      }
    ]
  }),
  getters: {
    jobsList: (state) => state.jobs
  }
});
const useStudiesStore = defineStore("StudiesStore", {
  state: () => ({
    studies: [
      {
        id: 1,
        avatar: {
          img: `/images/uoc_logo.png`,
          alt: "Logo of University of Crete",
          bgColor: "#000",
          label: {
            text: "University of Crete",
            link: "https://www.uoc.gr/"
          }
        },
        card: {
          title: "MSc in Computer Science - Human Computer Interaction, Information Systems",
          roles: [
            {
              jobTitle: "Back End Web Developer",
              period: {
                start: "2016",
                end: "2019"
              }
            }
          ],
          period: {
            start: "2016",
            end: "2019"
          },
          description: "",
          tools: [],
          readMore: ""
        }
      },
      {
        id: 2,
        avatar: {
          img: `/images/chalmers_logo.png`,
          alt: "Logo of Chalmers University of Technology",
          bgColor: "#fff",
          label: {
            text: "Chalmers University of Technology",
            link: "https://www.chalmers.se/"
          }
        },
        card: {
          title: "ERASMUS+ for Postgraduate studies - Interaction Design and Technologies",
          roles: [],
          period: {
            start: "August 2017",
            end: "January 2018"
          },
          description: "",
          tools: [],
          readMore: ""
        }
      },
      {
        id: 3,
        avatar: {
          img: `/images/uoc_logo.png`,
          alt: "Logo of University of Crete",
          bgColor: "#000",
          label: {
            text: "University of Crete",
            link: "https://www.uoc.gr/"
          }
        },
        card: {
          title: "BSc in Computer Science",
          roles: [],
          period: {
            start: "September 2011",
            end: "March 2015"
          },
          description: "",
          tools: [],
          readMore: ""
        }
      },
      {
        id: 4,
        avatar: {
          img: `/images/uoc_cyprus_logo.png`,
          alt: "Logo of University of Cyprus",
          bgColor: "#fff",
          label: {
            text: "University of Cyprus",
            link: "https://www.uoc.gr/"
          }
        },
        card: {
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
      }
    ]
  }),
  getters: {
    studiesList: (state) => state.studies
  }
});
const _sfc_main$2 = {
  __name: "Timeline",
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
    const timelineDirection = computed(() => {
      switch (mobile.value) {
        case true:
          return "vertical";
        case false:
          return "horizontal";
      }
    });
    const avatarSize = 40;
    const truncateLines = props.content == "education" ? "start" : "both";
    const timelineTitle = computed({
      get() {
        if (props.content == "experience") {
          return "Experience";
        } else if (props.content == "education") {
          return "Education";
        }
        return "My Story";
      }
    });
    const timelineItems = computed({
      get() {
        if (props.content === "experience") {
          const { jobs } = useJobsStore();
          return jobs;
        } else if (props.content === "education") {
          const { studies } = useStudiesStore();
          return studies;
        }
        return [];
      }
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
                        _push4(`<h1 data-v-12ef6c1c${_scopeId3}>${ssrInterpolate(unref(timelineTitle))}</h1>`);
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
            _push2(ssrRenderComponent(_component_v_row, {
              align: "center",
              justify: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "px-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_timeline, {
                          align: "start",
                          direction: unref(timelineDirection),
                          side: "end",
                          "truncate-line": unref(truncateLines)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(timelineItems), (item, i) => {
                                _push5(ssrRenderComponent(_component_v_timeline_item, { key: i }, {
                                  icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        activator: withCtx(({ on, attrs }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_avatar, mergeProps({
                                              size: avatarSize,
                                              color: item.avatar.bgColor,
                                              class: "timeline-avatar",
                                              "align-center": "",
                                              "justify-center": ""
                                            }, attrs, toHandlers(on)), {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_img, {
                                                    contain: "",
                                                    src: item.avatar.img,
                                                    alt: item.avatar.alt,
                                                    class: "firm-logo",
                                                    width: "26",
                                                    height: "26"
                                                  }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_img, {
                                                      contain: "",
                                                      src: item.avatar.img,
                                                      alt: item.avatar.alt,
                                                      class: "firm-logo",
                                                      width: "26",
                                                      height: "26"
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
                                                color: item.avatar.bgColor,
                                                class: "timeline-avatar",
                                                "align-center": "",
                                                "justify-center": ""
                                              }, attrs, toHandlers(on)), {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    contain: "",
                                                    src: item.avatar.img,
                                                    alt: item.avatar.alt,
                                                    class: "firm-logo",
                                                    width: "26",
                                                    height: "26"
                                                  }, null, 8, ["src", "alt"])
                                                ]),
                                                _: 2
                                              }, 1040, ["color"])
                                            ];
                                          }
                                        }),
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span data-v-12ef6c1c${_scopeId6}>${ssrInterpolate(item.avatar.label.text)}</span>`);
                                          } else {
                                            return [
                                              createVNode("span", null, toDisplayString(item.avatar.label.text), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "bottom"
                                        }, {
                                          activator: withCtx(({ on, attrs }) => [
                                            createVNode(_component_v_avatar, mergeProps({
                                              size: avatarSize,
                                              color: item.avatar.bgColor,
                                              class: "timeline-avatar",
                                              "align-center": "",
                                              "justify-center": ""
                                            }, attrs, toHandlers(on)), {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  contain: "",
                                                  src: item.avatar.img,
                                                  alt: item.avatar.alt,
                                                  class: "firm-logo",
                                                  width: "26",
                                                  height: "26"
                                                }, null, 8, ["src", "alt"])
                                              ]),
                                              _: 2
                                            }, 1040, ["color"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(item.avatar.label.text), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, { class: "elevation-2 timeline-item" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_card_title, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<strong class="timeline-item-title" data-v-12ef6c1c${_scopeId7}>${ssrInterpolate(item.card.title)}</strong>`);
                                                } else {
                                                  return [
                                                    createVNode("strong", { class: "timeline-item-title" }, toDisplayString(item.card.title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_card_subtitle, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.card.period.start)} - ${ssrInterpolate(item.card.period.end)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(item.card.period.start) + " - " + toDisplayString(item.card.period.end), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_v_card_text, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<p class="mb-0" data-v-12ef6c1c${_scopeId7}>`);
                                                  if (item.avatar.label.link) {
                                                    _push8(`<a${ssrRenderAttr("href", item.avatar.label.link)} target="_blank" rel="noopener noreferrer" class="firm-link" data-v-12ef6c1c${_scopeId7}>${ssrInterpolate(item.avatar.label.text)}</a>`);
                                                  } else {
                                                    _push8(`<span data-v-12ef6c1c${_scopeId7}>${ssrInterpolate(item.avatar.label.text)}</span>`);
                                                  }
                                                  _push8(`</p><p class="ma-0" data-v-12ef6c1c${_scopeId7}>${ssrInterpolate(item.card.description)}</p><ul class="ma-2" data-v-12ef6c1c${_scopeId7}><!--[-->`);
                                                  ssrRenderList(item.card.tools, (tool, j) => {
                                                    _push8(`<li data-v-12ef6c1c${_scopeId7}><span data-v-12ef6c1c${_scopeId7}>${ssrInterpolate(tool)}</span></li>`);
                                                  });
                                                  _push8(`<!--]--></ul>`);
                                                } else {
                                                  return [
                                                    createVNode("p", { class: "mb-0" }, [
                                                      item.avatar.label.link ? (openBlock(), createBlock("a", {
                                                        key: 0,
                                                        href: item.avatar.label.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        class: "firm-link"
                                                      }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.avatar.label.text), 1))
                                                    ]),
                                                    createVNode("p", { class: "ma-0" }, toDisplayString(item.card.description), 1),
                                                    createVNode("ul", { class: "ma-2" }, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(item.card.tools, (tool, j) => {
                                                        return openBlock(), createBlock("li", { key: j }, [
                                                          createVNode("span", null, toDisplayString(tool), 1)
                                                        ]);
                                                      }), 128))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            if (item.card.readMore != "") {
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
                                                  createVNode("strong", { class: "timeline-item-title" }, toDisplayString(item.card.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_card_subtitle, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.card.period.start) + " - " + toDisplayString(item.card.period.end), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createVNode("p", { class: "mb-0" }, [
                                                    item.avatar.label.link ? (openBlock(), createBlock("a", {
                                                      key: 0,
                                                      href: item.avatar.label.link,
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      class: "firm-link"
                                                    }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.avatar.label.text), 1))
                                                  ]),
                                                  createVNode("p", { class: "ma-0" }, toDisplayString(item.card.description), 1),
                                                  createVNode("ul", { class: "ma-2" }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(item.card.tools, (tool, j) => {
                                                      return openBlock(), createBlock("li", { key: j }, [
                                                        createVNode("span", null, toDisplayString(tool), 1)
                                                      ]);
                                                    }), 128))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              item.card.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
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
                                        createVNode(_component_v_card, { class: "elevation-2 timeline-item" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createVNode("strong", { class: "timeline-item-title" }, toDisplayString(item.card.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_card_subtitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.card.period.start) + " - " + toDisplayString(item.card.period.end), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createVNode("p", { class: "mb-0" }, [
                                                  item.avatar.label.link ? (openBlock(), createBlock("a", {
                                                    key: 0,
                                                    href: item.avatar.label.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    class: "firm-link"
                                                  }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.avatar.label.text), 1))
                                                ]),
                                                createVNode("p", { class: "ma-0" }, toDisplayString(item.card.description), 1),
                                                createVNode("ul", { class: "ma-2" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(item.card.tools, (tool, j) => {
                                                    return openBlock(), createBlock("li", { key: j }, [
                                                      createVNode("span", null, toDisplayString(tool), 1)
                                                    ]);
                                                  }), 128))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            item.card.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
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
                                  return openBlock(), createBlock(_component_v_timeline_item, { key: i }, {
                                    icon: withCtx(() => [
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "bottom"
                                      }, {
                                        activator: withCtx(({ on, attrs }) => [
                                          createVNode(_component_v_avatar, mergeProps({
                                            size: avatarSize,
                                            color: item.avatar.bgColor,
                                            class: "timeline-avatar",
                                            "align-center": "",
                                            "justify-center": ""
                                          }, attrs, toHandlers(on)), {
                                            default: withCtx(() => [
                                              createVNode(_component_v_img, {
                                                contain: "",
                                                src: item.avatar.img,
                                                alt: item.avatar.alt,
                                                class: "firm-logo",
                                                width: "26",
                                                height: "26"
                                              }, null, 8, ["src", "alt"])
                                            ]),
                                            _: 2
                                          }, 1040, ["color"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(item.avatar.label.text), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, { class: "elevation-2 timeline-item" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createVNode("strong", { class: "timeline-item-title" }, toDisplayString(item.card.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_card_subtitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.card.period.start) + " - " + toDisplayString(item.card.period.end), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createVNode("p", { class: "mb-0" }, [
                                                item.avatar.label.link ? (openBlock(), createBlock("a", {
                                                  key: 0,
                                                  href: item.avatar.label.link,
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                  class: "firm-link"
                                                }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.avatar.label.text), 1))
                                              ]),
                                              createVNode("p", { class: "ma-0" }, toDisplayString(item.card.description), 1),
                                              createVNode("ul", { class: "ma-2" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(item.card.tools, (tool, j) => {
                                                  return openBlock(), createBlock("li", { key: j }, [
                                                    createVNode("span", null, toDisplayString(tool), 1)
                                                  ]);
                                                }), 128))
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          item.card.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
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
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_timeline, {
                            align: "start",
                            direction: unref(timelineDirection),
                            side: "end",
                            "truncate-line": unref(truncateLines)
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(timelineItems), (item, i) => {
                                return openBlock(), createBlock(_component_v_timeline_item, { key: i }, {
                                  icon: withCtx(() => [
                                    createVNode(_component_v_tooltip, {
                                      activator: "parent",
                                      location: "bottom"
                                    }, {
                                      activator: withCtx(({ on, attrs }) => [
                                        createVNode(_component_v_avatar, mergeProps({
                                          size: avatarSize,
                                          color: item.avatar.bgColor,
                                          class: "timeline-avatar",
                                          "align-center": "",
                                          "justify-center": ""
                                        }, attrs, toHandlers(on)), {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              contain: "",
                                              src: item.avatar.img,
                                              alt: item.avatar.alt,
                                              class: "firm-logo",
                                              width: "26",
                                              height: "26"
                                            }, null, 8, ["src", "alt"])
                                          ]),
                                          _: 2
                                        }, 1040, ["color"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(item.avatar.label.text), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, { class: "elevation-2 timeline-item" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createVNode("strong", { class: "timeline-item-title" }, toDisplayString(item.card.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_card_subtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.card.period.start) + " - " + toDisplayString(item.card.period.end), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "mb-0" }, [
                                              item.avatar.label.link ? (openBlock(), createBlock("a", {
                                                key: 0,
                                                href: item.avatar.label.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                class: "firm-link"
                                              }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.avatar.label.text), 1))
                                            ]),
                                            createVNode("p", { class: "ma-0" }, toDisplayString(item.card.description), 1),
                                            createVNode("ul", { class: "ma-2" }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.card.tools, (tool, j) => {
                                                return openBlock(), createBlock("li", { key: j }, [
                                                  createVNode("span", null, toDisplayString(tool), 1)
                                                ]);
                                              }), 128))
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        item.card.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
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
                                }, 1024);
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
                          align: "start",
                          direction: unref(timelineDirection),
                          side: "end",
                          "truncate-line": unref(truncateLines)
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(timelineItems), (item, i) => {
                              return openBlock(), createBlock(_component_v_timeline_item, { key: i }, {
                                icon: withCtx(() => [
                                  createVNode(_component_v_tooltip, {
                                    activator: "parent",
                                    location: "bottom"
                                  }, {
                                    activator: withCtx(({ on, attrs }) => [
                                      createVNode(_component_v_avatar, mergeProps({
                                        size: avatarSize,
                                        color: item.avatar.bgColor,
                                        class: "timeline-avatar",
                                        "align-center": "",
                                        "justify-center": ""
                                      }, attrs, toHandlers(on)), {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            contain: "",
                                            src: item.avatar.img,
                                            alt: item.avatar.alt,
                                            class: "firm-logo",
                                            width: "26",
                                            height: "26"
                                          }, null, 8, ["src", "alt"])
                                        ]),
                                        _: 2
                                      }, 1040, ["color"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(item.avatar.label.text), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_card, { class: "elevation-2 timeline-item" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createVNode("strong", { class: "timeline-item-title" }, toDisplayString(item.card.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.card.period.start) + " - " + toDisplayString(item.card.period.end), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "mb-0" }, [
                                            item.avatar.label.link ? (openBlock(), createBlock("a", {
                                              key: 0,
                                              href: item.avatar.label.link,
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              class: "firm-link"
                                            }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.avatar.label.text), 1))
                                          ]),
                                          createVNode("p", { class: "ma-0" }, toDisplayString(item.card.description), 1),
                                          createVNode("ul", { class: "ma-2" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.card.tools, (tool, j) => {
                                              return openBlock(), createBlock("li", { key: j }, [
                                                createVNode("span", null, toDisplayString(tool), 1)
                                              ]);
                                            }), 128))
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      item.card.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
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
                              }, 1024);
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
              createVNode(_component_v_row, {
                align: "center",
                justify: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "px-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_timeline, {
                        align: "start",
                        direction: unref(timelineDirection),
                        side: "end",
                        "truncate-line": unref(truncateLines)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(timelineItems), (item, i) => {
                            return openBlock(), createBlock(_component_v_timeline_item, { key: i }, {
                              icon: withCtx(() => [
                                createVNode(_component_v_tooltip, {
                                  activator: "parent",
                                  location: "bottom"
                                }, {
                                  activator: withCtx(({ on, attrs }) => [
                                    createVNode(_component_v_avatar, mergeProps({
                                      size: avatarSize,
                                      color: item.avatar.bgColor,
                                      class: "timeline-avatar",
                                      "align-center": "",
                                      "justify-center": ""
                                    }, attrs, toHandlers(on)), {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          contain: "",
                                          src: item.avatar.img,
                                          alt: item.avatar.alt,
                                          class: "firm-logo",
                                          width: "26",
                                          height: "26"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1040, ["color"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode("span", null, toDisplayString(item.avatar.label.text), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_card, { class: "elevation-2 timeline-item" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        createVNode("strong", { class: "timeline-item-title" }, toDisplayString(item.card.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_subtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.card.period.start) + " - " + toDisplayString(item.card.period.end), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "mb-0" }, [
                                          item.avatar.label.link ? (openBlock(), createBlock("a", {
                                            key: 0,
                                            href: item.avatar.label.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            class: "firm-link"
                                          }, toDisplayString(item.avatar.label.text), 9, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.avatar.label.text), 1))
                                        ]),
                                        createVNode("p", { class: "ma-0" }, toDisplayString(item.card.description), 1),
                                        createVNode("ul", { class: "ma-2" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.card.tools, (tool, j) => {
                                            return openBlock(), createBlock("li", { key: j }, [
                                              createVNode("span", null, toDisplayString(tool), 1)
                                            ]);
                                          }), 128))
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    item.card.readMore != "" ? (openBlock(), createBlock(_component_v_card_actions, { key: 0 }, {
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
                            }, 1024);
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
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Timeline.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-12ef6c1c"]]);
const _sfc_main$1 = {
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const title = "Personal Projects";
    const meetups = [
      {
        src: "/images/portfolio.png",
        title: "Personal website",
        link: "https://gtopsis.github.io/"
      },
      {
        src: "/images/uoc-radio.png",
        title: "Uoc radio",
        link: "https://gtopsis.github.io/Uoc-radio-website/index.html"
      },
      {
        src: "/images/cs-352.png",
        title: "Website for course cs-352",
        link: "#"
      }
    ];
    function navigateToMeetup(meetup) {
      window.open(meetup.link);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        fluid: "",
        "full-width": ""
      }, _attrs), {
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
                        _push4(`<h1 data-v-00fbe0f5${_scopeId3}>${ssrInterpolate(title)}</h1>`);
                      } else {
                        return [
                          createVNode("h1", null, toDisplayString(title))
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
                        createVNode("h1", null, toDisplayString(title))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              dense: "",
              justify: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(meetups, (meetup, index2) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      key: index2,
                      cols: "12",
                      md: "4",
                      lg: "3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, {
                            class: "meetup-card",
                            onClick: ($event) => navigateToMeetup(meetup)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_img, {
                                  src: meetup.src,
                                  class: "white--text align-end",
                                  gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                  height: "200px"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card_title, null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_card_title, {
                                          textContent: toDisplayString(meetup.title)
                                        }, null, 8, ["textContent"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_img, {
                                    src: meetup.src,
                                    class: "white--text align-end",
                                    gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                    height: "200px"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, {
                                        textContent: toDisplayString(meetup.title)
                                      }, null, 8, ["textContent"])
                                    ]),
                                    _: 2
                                  }, 1032, ["src"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card, {
                              class: "meetup-card",
                              onClick: ($event) => navigateToMeetup(meetup)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: meetup.src,
                                  class: "white--text align-end",
                                  gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                  height: "200px"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, {
                                      textContent: toDisplayString(meetup.title)
                                    }, null, 8, ["textContent"])
                                  ]),
                                  _: 2
                                }, 1032, ["src"])
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(meetups, (meetup, index2) => {
                      return createVNode(_component_v_col, {
                        key: index2,
                        cols: "12",
                        md: "4",
                        lg: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: "meetup-card",
                            onClick: ($event) => navigateToMeetup(meetup)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                src: meetup.src,
                                class: "white--text align-end",
                                gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                height: "200px"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, {
                                    textContent: toDisplayString(meetup.title)
                                  }, null, 8, ["textContent"])
                                ]),
                                _: 2
                              }, 1032, ["src"])
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
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
                      createVNode("h1", null, toDisplayString(title))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                dense: "",
                justify: "center"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(meetups, (meetup, index2) => {
                    return createVNode(_component_v_col, {
                      key: index2,
                      cols: "12",
                      md: "4",
                      lg: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "meetup-card",
                          onClick: ($event) => navigateToMeetup(meetup)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_img, {
                              src: meetup.src,
                              class: "white--text align-end",
                              gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                              height: "200px"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, {
                                  textContent: toDisplayString(meetup.title)
                                }, null, 8, ["textContent"])
                              ]),
                              _: 2
                            }, 1032, ["src"])
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
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
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-00fbe0f5"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Home page of personal website. It contains details about my work experience and my education background."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_hero = __nuxt_component_0;
      const _component_timeline = __nuxt_component_1;
      const _component_projects = __nuxt_component_2;
      _push(ssrRenderComponent(_component_v_row, mergeProps({
        "no-gutters": "",
        "justify-center": "",
        class: "page-container"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "section px-4 py-0 mx-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_hero, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_hero)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "section px-4 py-0 mx-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, { class: "justify-space-between no-gutters" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          mb: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_timeline, { content: "experience" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_timeline, { content: "experience" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            mb: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_timeline, { content: "experience" })
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
                    createVNode(_component_v_row, { class: "justify-space-between no-gutters" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          mb: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_timeline, { content: "experience" })
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
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "section px-4 py-0 mx-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_projects, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_projects)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "section px-4 py-0 mx-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, { class: "justify-space-between no-gutters" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          mb: "2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_timeline, { content: "education" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_timeline, { content: "education" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            mb: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_timeline, { content: "education" })
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
                    createVNode(_component_v_row, { class: "justify-space-between no-gutters" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          mb: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_timeline, { content: "education" })
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
              createVNode(_component_v_col, {
                cols: "12",
                class: "section px-4 py-0 mx-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_hero)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                class: "section px-4 py-0 mx-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { class: "justify-space-between no-gutters" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        mb: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_timeline, { content: "experience" })
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
                class: "section px-4 py-0 mx-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_projects)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                class: "section px-4 py-0 mx-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { class: "justify-space-between no-gutters" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        mb: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_timeline, { content: "education" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-490e31a1"]]);

export { index as default };
//# sourceMappingURL=index-ea33c5a3.mjs.map
