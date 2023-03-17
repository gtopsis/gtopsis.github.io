import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode } from "vue";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import "./index-e12b288f.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
const _sfc_main$2 = {
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
  head() {
    return {
      meta: [
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.title
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.image
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  {
    _push(`<!---->`);
  }
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialHead.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const Meetups_vue_vue_type_style_index_0_scoped_db188f2c_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      title: "Proud member of Meetups",
      meetups: [
        {
          src: "/images/devstaff-meetup.jpg",
          title: "DevStaff: A developer community in Crete",
          link: "https://www.meetup.com/devstaff/"
        },
        {
          src: "/images/opencoffe-meetup.jpg",
          title: "Open Coffee Heraklion",
          link: "https://www.meetup.com/opencoffeeher/"
        },
        {
          src: "/images/gdg-meetup.jpg",
          title: "Google Developers Group Heraklion",
          link: "https://www.meetup.com/GDG-Heraklion/"
        }
      ]
    };
  },
  methods: {
    navigateToMeetup(meetup) {
      window.open(meetup.link);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
                    _push4(`<h1 data-v-db188f2c${_scopeId3}>${ssrInterpolate($data.title)}</h1>`);
                  } else {
                    return [
                      createVNode("h1", null, toDisplayString($data.title), 1)
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
                    createVNode("h1", null, toDisplayString($data.title), 1)
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
              ssrRenderList($data.meetups, (meetup, index) => {
                _push3(ssrRenderComponent(_component_v_col, {
                  key: index,
                  cols: "12",
                  md: "4",
                  lg: "3"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_card, {
                        class: "meetup-card",
                        onClick: ($event) => $options.navigateToMeetup(meetup)
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
                          onClick: ($event) => $options.navigateToMeetup(meetup)
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
                (openBlock(true), createBlock(Fragment, null, renderList($data.meetups, (meetup, index) => {
                  return openBlock(), createBlock(_component_v_col, {
                    key: index,
                    cols: "12",
                    md: "4",
                    lg: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, {
                        class: "meetup-card",
                        onClick: ($event) => $options.navigateToMeetup(meetup)
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
                }), 128))
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
                  createVNode("h1", null, toDisplayString($data.title), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList($data.meetups, (meetup, index) => {
                return openBlock(), createBlock(_component_v_col, {
                  key: index,
                  cols: "12",
                  md: "4",
                  lg: "3"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, {
                      class: "meetup-card",
                      onClick: ($event) => $options.navigateToMeetup(meetup)
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
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Meetups.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-db188f2c"]]);
const about_vue_vue_type_style_index_0_scoped_67452d88_lang = "";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
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
      const _component_SocialHead = __nuxt_component_0;
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_container = resolveComponent("v-container");
      const _component_meetups = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-layout page-container" }, _attrs))} data-v-67452d88>`);
      _push(ssrRenderComponent(_component_SocialHead, {
        title: head.title,
        description: head.description,
        image: head.image
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_row, {
        "no-gutters": "",
        "justify-center": "",
        class: "page-container"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "section px-4 py-0 mx-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, {
                    class: "headline-container d-flex align-center",
                    fluid: "",
                    "full-width": "",
                    "fill-height": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          class: "no-gutters",
                          "full-width": "",
                          "fill-height": "",
                          "justify-center": "",
                          "align-center": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1 class="text-center text-h5 text-sm-h2 text-md-h4 mb-3" white data-v-67452d88${_scopeId5}> Giorgos Topsis </h1>`);
                                  } else {
                                    return [
                                      createVNode("h1", {
                                        class: "text-center text-h5 text-sm-h2 text-md-h4 mb-3",
                                        white: ""
                                      }, " Giorgos Topsis ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p class="text-center text-sm-h4 text-md-h6" data-v-67452d88${_scopeId5}> What You <span class="text-primary" data-v-67452d88${_scopeId5}>Read</span> is What you Get </p>`);
                                  } else {
                                    return [
                                      createVNode("p", { class: "text-center text-sm-h4 text-md-h6" }, [
                                        createTextVNode(" What You "),
                                        createVNode("span", { class: "text-primary" }, "Read"),
                                        createTextVNode(" is What you Get ")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("h1", {
                                      class: "text-center text-h5 text-sm-h2 text-md-h4 mb-3",
                                      white: ""
                                    }, " Giorgos Topsis ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-center text-sm-h4 text-md-h6" }, [
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, {
                            class: "no-gutters",
                            "full-width": "",
                            "fill-height": "",
                            "justify-center": "",
                            "align-center": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("h1", {
                                    class: "text-center text-h5 text-sm-h2 text-md-h4 mb-3",
                                    white: ""
                                  }, " Giorgos Topsis ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-center text-sm-h4 text-md-h6" }, [
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, {
                      class: "headline-container d-flex align-center",
                      fluid: "",
                      "full-width": "",
                      "fill-height": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          class: "no-gutters",
                          "full-width": "",
                          "fill-height": "",
                          "justify-center": "",
                          "align-center": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode("h1", {
                                  class: "text-center text-h5 text-sm-h2 text-md-h4 mb-3",
                                  white: ""
                                }, " Giorgos Topsis ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-center text-sm-h4 text-md-h6" }, [
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "section px-4 py-0 mx-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, {
                    class: "about-me-container",
                    fluid: "",
                    "full-width": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          "full-width": "",
                          justify: "center",
                          align: "center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "10",
                                lg: "9",
                                class: "px-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(aboutMe, (paragraph, i) => {
                                      _push6(`<p class="text-left" white data-v-67452d88${_scopeId5}>${ssrInterpolate(paragraph)}</p>`);
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList(aboutMe, (paragraph, i) => {
                                        return createVNode("p", {
                                          key: i,
                                          class: "text-left",
                                          white: ""
                                        }, toDisplayString(paragraph), 1);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, { cols: "12" }, null, _parent5, _scopeId4));
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
                                        class: "text-left",
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
                        }, _parent4, _scopeId3));
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
                                      class: "text-left",
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
                  }, _parent3, _scopeId2));
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
                                    class: "text-left",
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "section px-4 py-0 mx-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_meetups, { class: "" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_meetups, { class: "" })
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
                  createVNode(_component_v_container, {
                    class: "headline-container d-flex align-center",
                    fluid: "",
                    "full-width": "",
                    "fill-height": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        class: "no-gutters",
                        "full-width": "",
                        "fill-height": "",
                        "justify-center": "",
                        "align-center": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("h1", {
                                class: "text-center text-h5 text-sm-h2 text-md-h4 mb-3",
                                white: ""
                              }, " Giorgos Topsis ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-center text-sm-h4 text-md-h6" }, [
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
                class: "section px-4 py-0 mx-0"
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
                                  class: "text-left",
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
                class: "section px-4 py-0 mx-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_meetups, { class: "" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-67452d88"]]);
export {
  about as default
};
//# sourceMappingURL=about-1c37f8dd.js.map
