import { _ as __nuxt_component_0 } from "./nuxt-link-343a4f5f.js";
import { defineComponent, computed, resolveComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext, openBlock, createBlock, Fragment, renderList, createTextVNode, renderSlot } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { e as useTheme, _ as _export_sfc } from "../server.mjs";
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
import "defu";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useTheme();
    const disabledTheme = computed(
      () => !theme.global.current.value.dark ? "dark" : "light"
    );
    function toggleDarkMode() {
      theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
      localStorage.setItem(
        "dark_theme",
        theme.global.current.value.dark.toString()
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      _push(ssrRenderComponent(_component_v_row, mergeProps({
        class: "theme-toggle-container mx-0",
        align: "center",
        justify: "center"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { class: "px-2 py-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="${ssrRenderClass([{
                    "fa-sun": unref(disabledTheme) === "light",
                    "fa-moon": unref(disabledTheme) === "dark"
                  }, "toggle fa-solid"])}" data-v-3b940a8a${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_tooltip, {
                    activator: "parent",
                    location: "bottom end"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-3b940a8a${_scopeId3}>Enable ${ssrInterpolate(unref(disabledTheme))} mode</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Enable " + toDisplayString(unref(disabledTheme)) + " mode", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</i>`);
                } else {
                  return [
                    createVNode("i", {
                      class: ["toggle fa-solid", {
                        "fa-sun": unref(disabledTheme) === "light",
                        "fa-moon": unref(disabledTheme) === "dark"
                      }],
                      onClick: toggleDarkMode
                    }, [
                      createVNode(_component_v_tooltip, {
                        activator: "parent",
                        location: "bottom end"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Enable " + toDisplayString(unref(disabledTheme)) + " mode", 1)
                        ]),
                        _: 1
                      })
                    ], 2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { class: "px-2 py-1" }, {
                default: withCtx(() => [
                  createVNode("i", {
                    class: ["toggle fa-solid", {
                      "fa-sun": unref(disabledTheme) === "light",
                      "fa-moon": unref(disabledTheme) === "dark"
                    }],
                    onClick: toggleDarkMode
                  }, [
                    createVNode(_component_v_tooltip, {
                      activator: "parent",
                      location: "bottom end"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Enable " + toDisplayString(unref(disabledTheme)) + " mode", 1)
                      ]),
                      _: 1
                    })
                  ], 2)
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
const ThemeToggle_vue_vue_type_style_index_0_scoped_3b940a8a_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3b940a8a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MainFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = [
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/gtopsis"
      },
      {
        icon: "github",
        link: "https://github.com/gtopsis"
      }
    ];
    const personalMessage = "Build playing with Nuxt.js";
    const footerText = computed(() => {
      return `Giorgos Topsis 2022`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_fa = resolveComponent("fa");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ "pa-2": "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "socials-list-container py-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, {
                          class: "socials-list ma-0",
                          justify: "center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(socials, (social, index) => {
                                _push5(ssrRenderComponent(_component_v_col, {
                                  key: index,
                                  cols: "auto",
                                  class: "pa-1"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<a${ssrRenderAttr("href", social.link)} class="social-link" target="_blank" rel="noopener noreferrer" data-v-df6e029b${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_fa, {
                                        class: "social-icon",
                                        icon: ["fab", social.icon]
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</a>`);
                                    } else {
                                      return [
                                        createVNode("a", {
                                          href: social.link,
                                          class: "social-link",
                                          target: "_blank",
                                          rel: "noopener noreferrer"
                                        }, [
                                          createVNode(_component_fa, {
                                            class: "social-icon",
                                            icon: ["fab", social.icon]
                                          }, null, 8, ["icon"])
                                        ], 8, ["href"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(socials, (social, index) => {
                                  return createVNode(_component_v_col, {
                                    key: index,
                                    cols: "auto",
                                    class: "pa-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("a", {
                                        href: social.link,
                                        class: "social-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                      }, [
                                        createVNode(_component_fa, {
                                          class: "social-icon",
                                          icon: ["fab", social.icon]
                                        }, null, 8, ["icon"])
                                      ], 8, ["href"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, {
                            class: "socials-list ma-0",
                            justify: "center"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(socials, (social, index) => {
                                return createVNode(_component_v_col, {
                                  key: index,
                                  cols: "auto",
                                  class: "pa-1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("a", {
                                      href: social.link,
                                      class: "social-link",
                                      target: "_blank",
                                      rel: "noopener noreferrer"
                                    }, [
                                      createVNode(_component_fa, {
                                        class: "social-icon",
                                        icon: ["fab", social.icon]
                                      }, null, 8, ["icon"])
                                    ], 8, ["href"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    class: "py-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-center ma-0" data-v-df6e029b${_scopeId3}>${ssrInterpolate(personalMessage)}</p><p class="text-center ma-0" data-v-df6e029b${_scopeId3}>© ${ssrInterpolate(unref(footerText))}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-center ma-0" }, toDisplayString(personalMessage)),
                          createVNode("p", { class: "text-center ma-0" }, "© " + toDisplayString(unref(footerText)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      class: "socials-list-container py-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, {
                          class: "socials-list ma-0",
                          justify: "center"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(socials, (social, index) => {
                              return createVNode(_component_v_col, {
                                key: index,
                                cols: "auto",
                                class: "pa-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode("a", {
                                    href: social.link,
                                    class: "social-link",
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  }, [
                                    createVNode(_component_fa, {
                                      class: "social-icon",
                                      icon: ["fab", social.icon]
                                    }, null, 8, ["icon"])
                                  ], 8, ["href"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      class: "py-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-center ma-0" }, toDisplayString(personalMessage)),
                        createVNode("p", { class: "text-center ma-0" }, "© " + toDisplayString(unref(footerText)), 1)
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
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "socials-list-container py-1"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, {
                        class: "socials-list ma-0",
                        justify: "center"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(socials, (social, index) => {
                            return createVNode(_component_v_col, {
                              key: index,
                              cols: "auto",
                              class: "pa-1"
                            }, {
                              default: withCtx(() => [
                                createVNode("a", {
                                  href: social.link,
                                  class: "social-link",
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                }, [
                                  createVNode(_component_fa, {
                                    class: "social-icon",
                                    icon: ["fab", social.icon]
                                  }, null, 8, ["icon"])
                                ], 8, ["href"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    class: "py-1"
                  }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-center ma-0" }, toDisplayString(personalMessage)),
                      createVNode("p", { class: "text-center ma-0" }, "© " + toDisplayString(unref(footerText)), 1)
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
const MainFooter_vue_vue_type_style_index_0_scoped_df6e029b_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-df6e029b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const title = "Giorgos Topsis";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_nuxt_link = __nuxt_component_0;
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_theme_toggle = __nuxt_component_1;
      const _component_v_main = resolveComponent("v-main");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_footer = resolveComponent("v-footer");
      const _component_main_footer = __nuxt_component_2;
      _push(ssrRenderComponent(_component_v_app, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar, {
              class: "px-3",
              fixed: "",
              app: "",
              "elevate-on-scroll": ""
            }, {
              append: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<nav role="navigation"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_list, {
                    nav: "",
                    class: "nav d-inline-flex flex-row justify-end",
                    align: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, { class: "nav-item mb-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_nuxt_link, {
                                to: "/",
                                class: "text-subtitle-1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Work`);
                                  } else {
                                    return [
                                      createTextVNode("Work")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_nuxt_link, {
                                  to: "/",
                                  class: "text-subtitle-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Work")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_item, { class: "nav-item mb-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_nuxt_link, {
                                to: "/about",
                                class: "text-subtitle-1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`About`);
                                  } else {
                                    return [
                                      createTextVNode("About")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_nuxt_link, {
                                  to: "/about",
                                  class: "text-subtitle-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("About")
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
                          createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                to: "/",
                                class: "text-subtitle-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Work")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                to: "/about",
                                class: "text-subtitle-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("About")
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
                  _push3(`</nav>`);
                  _push3(ssrRenderComponent(_component_theme_toggle, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("nav", { role: "navigation" }, [
                      createVNode(_component_v_list, {
                        nav: "",
                        class: "nav d-inline-flex flex-row justify-end",
                        align: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                to: "/",
                                class: "text-subtitle-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Work")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                to: "/about",
                                class: "text-subtitle-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("About")
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
                    createVNode(_component_theme_toggle)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar_title, { class: "ml-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 class="logo text-subtitle-1 text-md-h5 text-wrap"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(title))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</h2>`);
                      } else {
                        return [
                          createVNode("h2", { class: "logo text-subtitle-1 text-md-h5 text-wrap" }, [
                            createVNode(_component_nuxt_link, { to: "/" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(title))
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_toolbar_title, { class: "ml-0" }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "logo text-subtitle-1 text-md-h5 text-wrap" }, [
                          createVNode(_component_nuxt_link, { to: "/" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(title))
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_spacer)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_main, { role: "main" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, {
                    fluid: "",
                    "fill-height": "",
                    "pa-0": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, {
                      fluid: "",
                      "fill-height": "",
                      "pa-0": ""
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_footer, { role: "contentinfo" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_main_footer, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_main_footer)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar, {
                class: "px-3",
                fixed: "",
                app: "",
                "elevate-on-scroll": ""
              }, {
                append: withCtx(() => [
                  createVNode("nav", { role: "navigation" }, [
                    createVNode(_component_v_list, {
                      nav: "",
                      class: "nav d-inline-flex flex-row justify-end",
                      align: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_link, {
                              to: "/",
                              class: "text-subtitle-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Work")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_link, {
                              to: "/about",
                              class: "text-subtitle-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("About")
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
                  createVNode(_component_theme_toggle)
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_toolbar_title, { class: "ml-0" }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "logo text-subtitle-1 text-md-h5 text-wrap" }, [
                        createVNode(_component_nuxt_link, { to: "/" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(title))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_spacer)
                ]),
                _: 1
              }),
              createVNode(_component_v_main, { role: "main" }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, {
                    fluid: "",
                    "fill-height": "",
                    "pa-0": ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              }),
              createVNode(_component_v_footer, { role: "contentinfo" }, {
                default: withCtx(() => [
                  createVNode(_component_main_footer)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-76ad7922.js.map
