import "./index-e12b288f.js";
import { defineComponent, useSSRContext, computed, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, toHandlers, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useHead, d as defineStore, a as useDisplay, _ as _export_sfc } from "../server.mjs";
import "hookable";
import "destr";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
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
          title: "Back End Engineer",
          roles: [
            {
              jobTitle: "Back End Engineer",
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
    const timelineTitle = computed(() => {
      if (props.content == "experience") {
        return "Experience";
      } else if (props.content == "education") {
        return "Education";
      }
      return "My Story";
    });
    const timelineItems = computed(() => {
      if (props.content === "experience") {
        const { jobs } = useJobsStore();
        return jobs;
      } else if (props.content === "education") {
        const { studies } = useStudiesStore();
        return studies;
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
                        _push4(`<h1 data-v-60d8256d${_scopeId3}>${ssrInterpolate(unref(timelineTitle))}</h1>`);
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
                                            _push7(`<span data-v-60d8256d${_scopeId6}>${ssrInterpolate(item.avatar.label.text)}</span>`);
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
                                                  _push8(`<strong class="timeline-item-title" data-v-60d8256d${_scopeId7}>${ssrInterpolate(item.card.title)}</strong>`);
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
                                                  _push8(`<p class="mb-0" data-v-60d8256d${_scopeId7}>`);
                                                  if (item.avatar.label.link) {
                                                    _push8(`<a${ssrRenderAttr("href", item.avatar.label.link)} target="_blank" rel="noopener noreferrer" class="firm-link" data-v-60d8256d${_scopeId7}>${ssrInterpolate(item.avatar.label.text)}</a>`);
                                                  } else {
                                                    _push8(`<span data-v-60d8256d${_scopeId7}>${ssrInterpolate(item.avatar.label.text)}</span>`);
                                                  }
                                                  _push8(`</p><p class="ma-0" data-v-60d8256d${_scopeId7}>${ssrInterpolate(item.card.description)}</p><ul class="ma-2" data-v-60d8256d${_scopeId7}><!--[-->`);
                                                  ssrRenderList(item.card.tools, (tool, j) => {
                                                    _push8(`<li data-v-60d8256d${_scopeId7}><span data-v-60d8256d${_scopeId7}>${ssrInterpolate(tool)}</span></li>`);
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
});
const Timeline_vue_vue_type_style_index_0_scoped_60d8256d_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Timeline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-60d8256d"]]);
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
    const aboutMe = [
      `As a kid I was thinking that sooner or later I will find which is my dream job, in which direction I'm was born to shine having a unique and enviable talent. The mission was clear, to find my specialty!
My studies (BSc, MSc, Erasmus periods) in Information Systems and Human-Computer Interaction at Computer Science Department of University of Crete seemed to offer me an appropriate opportunity to achieve my mission. And I was close, so close; Finally, I only had to choose between Web Development and User Experience Design fields.`,
      `
Well, for more than 5 years (since 2016 when AngularJS was the king) I focus, utilizing the JavaScript ecosystem, on building software platforms for the web. The last 2 years I have worked both as a professional Front and Back End developer, transforming design mockups into usable pages and designing, developing and testing RESTful APIs and robust databases.`,
      `
As a member of a team, I seek honest and trustworthy connections. In such environments, I feel secure, efficient and funny ツ. I'm not a fan of life hack "Fake it until you make it" and also I'm trying to be social without having presence on most social networking platforms.
`,
      `When I'm away from keyboard I like joining local meetups (DevStaff, Open Coffee Heraklion) as well as dance communities, learning and dancing mostly Argentinian Tango and Lindy Hop. Moreover, I love cycling around the seaside part of Heraklion and playing football with good friends in 8x8 fields weekly.`
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_SocialHead = _sfc_main$2;
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_timeline = __nuxt_component_1;
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
                                          _push7(`<p class="text-center text-h6 text-sm-h5 text-md-h4" data-v-82c43878${_scopeId6}> What You <span class="text-primary" data-v-82c43878${_scopeId6}>Read</span> is What you Get </p>`);
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
                    class: "section px-4 py-10 mx-0"
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
                                            _push7(`<p class="text-left text-body-1 mb-6" white data-v-82c43878${_scopeId6}>${ssrInterpolate(paragraph)}</p>`);
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
                    class: "section px-4 py-10 mx-0"
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
                                    _push6(ssrRenderComponent(_component_timeline, { content: "experience" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_timeline, { content: "experience" })
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
                                    createVNode(_component_timeline, { content: "experience" })
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "section px-4 py-10 mx-0"
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
                                    _push6(ssrRenderComponent(_component_timeline, { content: "education" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_timeline, { content: "education" })
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
                                    createVNode(_component_timeline, { content: "education" })
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
                      class: "section px-4 py-10 mx-0"
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
                      class: "section px-4 py-10 mx-0"
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
                      class: "section px-4 py-10 mx-0"
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
                    class: "section px-4 py-10 mx-0"
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
                    class: "section px-4 py-10 mx-0"
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
                    class: "section px-4 py-10 mx-0"
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
const about_vue_vue_type_style_index_0_scoped_82c43878_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82c43878"]]);
export {
  about as default
};
//# sourceMappingURL=about-fffe1ad2.js.map
