import { _ as __nuxt_component_0$1 } from "./nuxt-link-343a4f5f.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, u as useHead } from "../server.mjs";
import "./index-e12b288f.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "defu";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const headline = {
      pre: "I'm ",
      name: {
        text: "Giorgos",
        pronunciation: "(/ɡi.ɔ̌ːr.ɡ.os/)"
      },
      post: "a Full Stack Web Developer based in Heraklion of Crete."
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        class: "hero-container pa-0 d-flex",
        "fill-height": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { "no-gutters": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    class: "px-0",
                    cols: "12",
                    "align-self": "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="headline text-h6 text-md-h5 text-lg-h4" data-v-34067482${_scopeId3}><span data-v-34067482${_scopeId3}>${ssrInterpolate(headline.pre)} `);
                        _push4(ssrRenderComponent(_component_nuxt_link, {
                          to: { name: "about" },
                          class: "first-name text-secondary"
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
                        _push4(` ${ssrInterpolate(headline.name.pronunciation)},<br data-v-34067482${_scopeId3}> ${ssrInterpolate(headline.post)}</span></h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headline text-h6 text-md-h5 text-lg-h4" }, [
                            createVNode("span", null, [
                              createTextVNode(toDisplayString(headline.pre) + " ", 1),
                              createVNode(_component_nuxt_link, {
                                to: { name: "about" },
                                class: "first-name text-secondary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(headline.name.text), 1)
                                ]),
                                _: 1
                              }),
                              createTextVNode(" " + toDisplayString(headline.name.pronunciation) + ",", 1),
                              createVNode("br"),
                              createTextVNode(" " + toDisplayString(headline.post), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      class: "px-0",
                      cols: "12",
                      "align-self": "center"
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "headline text-h6 text-md-h5 text-lg-h4" }, [
                          createVNode("span", null, [
                            createTextVNode(toDisplayString(headline.pre) + " ", 1),
                            createVNode(_component_nuxt_link, {
                              to: { name: "about" },
                              class: "first-name text-secondary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(headline.name.text), 1)
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(headline.name.pronunciation) + ",", 1),
                            createVNode("br"),
                            createTextVNode(" " + toDisplayString(headline.post), 1)
                          ])
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
              createVNode(_component_v_row, { "no-gutters": "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    class: "px-0",
                    cols: "12",
                    "align-self": "center"
                  }, {
                    default: withCtx(() => [
                      createVNode("h1", { class: "headline text-h6 text-md-h5 text-lg-h4" }, [
                        createVNode("span", null, [
                          createTextVNode(toDisplayString(headline.pre) + " ", 1),
                          createVNode(_component_nuxt_link, {
                            to: { name: "about" },
                            class: "first-name text-secondary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(headline.name.text), 1)
                            ]),
                            _: 1
                          }),
                          createTextVNode(" " + toDisplayString(headline.name.pronunciation) + ",", 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(headline.post), 1)
                        ])
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
});
const Hero_vue_vue_type_style_index_0_scoped_34067482_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-34067482"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const title = "Personal Projects";
    const projects = [
      {
        src: "/images/portfolio.png",
        title: "Personal website",
        link: "https://gtopsis.github.io/",
        code: "https://github.com/gtopsis/gtopsis.github.io"
      },
      {
        src: "/images/uoc-radio.png",
        title: "Uoc radio",
        link: "https://gtopsis.github.io/Uoc-radio-website/index.html",
        code: "https://github.com/gtopsis/Uoc-radio-website"
      },
      {
        src: "/images/cs-352.png",
        title: "Website for course cs-352",
        link: "https://gtopsis.github.io/Course-cs352-website/",
        code: "https://github.com/gtopsis/Course-cs352-website"
      }
    ];
    function navigateToProjectDemo(project) {
      window.open(project.link);
    }
    function navigateToProjectCode(project) {
      window.open(project.code);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_btn = resolveComponent("v-btn");
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
                    class: "mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1${_scopeId3}>${ssrInterpolate(title)}</h1>`);
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
                      class: "mb-6"
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
                  ssrRenderList(projects, (project) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      key: project.title,
                      cols: "12",
                      md: "3",
                      lg: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, {
                            class: "mx-auto",
                            "max-width": "400"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_img, {
                                  class: "align-end text-white",
                                  height: "200",
                                  src: project.src,
                                  gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                  cover: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card_title, null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_card_title, {
                                          textContent: toDisplayString(project.title)
                                        }, null, 8, ["textContent"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_v_card_actions, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        color: "secondary",
                                        onClick: ($event) => navigateToProjectDemo(project)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Demo `);
                                          } else {
                                            return [
                                              createTextVNode(" Demo ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        color: "secondary",
                                        onClick: ($event) => navigateToProjectCode(project)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Code `);
                                          } else {
                                            return [
                                              createTextVNode(" Code ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_btn, {
                                          color: "secondary",
                                          onClick: ($event) => navigateToProjectDemo(project)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Demo ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(_component_v_btn, {
                                          color: "secondary",
                                          onClick: ($event) => navigateToProjectCode(project)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Code ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_img, {
                                    class: "align-end text-white",
                                    height: "200",
                                    src: project.src,
                                    gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                    cover: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, {
                                        textContent: toDisplayString(project.title)
                                      }, null, 8, ["textContent"])
                                    ]),
                                    _: 2
                                  }, 1032, ["src"]),
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        color: "secondary",
                                        onClick: ($event) => navigateToProjectDemo(project)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Demo ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_v_btn, {
                                        color: "secondary",
                                        onClick: ($event) => navigateToProjectCode(project)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Code ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card, {
                              class: "mx-auto",
                              "max-width": "400"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  class: "align-end text-white",
                                  height: "200",
                                  src: project.src,
                                  gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                  cover: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, {
                                      textContent: toDisplayString(project.title)
                                    }, null, 8, ["textContent"])
                                  ]),
                                  _: 2
                                }, 1032, ["src"]),
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      color: "secondary",
                                      onClick: ($event) => navigateToProjectDemo(project)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Demo ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(_component_v_btn, {
                                      color: "secondary",
                                      onClick: ($event) => navigateToProjectCode(project)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Code ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(projects, (project) => {
                      return createVNode(_component_v_col, {
                        key: project.title,
                        cols: "12",
                        md: "3",
                        lg: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: "mx-auto",
                            "max-width": "400"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                class: "align-end text-white",
                                height: "200",
                                src: project.src,
                                gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                cover: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, {
                                    textContent: toDisplayString(project.title)
                                  }, null, 8, ["textContent"])
                                ]),
                                _: 2
                              }, 1032, ["src"]),
                              createVNode(_component_v_card_actions, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    color: "secondary",
                                    onClick: ($event) => navigateToProjectDemo(project)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Demo ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(_component_v_btn, {
                                    color: "secondary",
                                    onClick: ($event) => navigateToProjectCode(project)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Code ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
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
                    class: "mb-6"
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
                  (openBlock(), createBlock(Fragment, null, renderList(projects, (project) => {
                    return createVNode(_component_v_col, {
                      key: project.title,
                      cols: "12",
                      md: "3",
                      lg: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "mx-auto",
                          "max-width": "400"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_img, {
                              class: "align-end text-white",
                              height: "200",
                              src: project.src,
                              gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                              cover: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, {
                                  textContent: toDisplayString(project.title)
                                }, null, 8, ["textContent"])
                              ]),
                              _: 2
                            }, 1032, ["src"]),
                            createVNode(_component_v_card_actions, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  color: "secondary",
                                  onClick: ($event) => navigateToProjectDemo(project)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Demo ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  color: "secondary",
                                  onClick: ($event) => navigateToProjectCode(project)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Code ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
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
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Meetups",
  __ssrInlineRender: true,
  setup(__props) {
    const title = "Participation on several Meetups";
    const meetups = [
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
                    class: "mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 data-v-861c5de3${_scopeId3}>${ssrInterpolate(title)}</h1>`);
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
                      class: "mb-6"
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
                    class: "mb-6"
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
});
const Meetups_vue_vue_type_style_index_0_scoped_861c5de3_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Meetups.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-861c5de3"]]);
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
      const _component_projects = _sfc_main$2;
      const _component_meetups = __nuxt_component_2;
      _push(ssrRenderComponent(_component_v_row, mergeProps({
        class: "page-container",
        "no-gutters": "",
        justify: "center"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "section pa-0 mx-0"
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
              class: "section py-10 mx-0"
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
              class: "section py-10 mx-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_meetups, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_meetups)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                class: "section pa-0 mx-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_hero)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                class: "section py-10 mx-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_projects)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                class: "section py-10 mx-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_meetups)
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
const index_vue_vue_type_style_index_0_scoped_de65e9f6_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de65e9f6"]]);
export {
  index as default
};
//# sourceMappingURL=index-d6bdf7d8.js.map
