import { _ as __nuxt_component_0 } from './nuxt-link-0d39ff03.mjs';
import { useSSRContext, defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, renderSlot, mergeProps, openBlock, createBlock, Fragment, renderList, computed, unref } from 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderAttr } from 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue/server-renderer/index.mjs';
import { e as useTheme, _ as _export_sfc } from '../server.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/ofetch/dist/node.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/defu/dist/defu.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/unhead/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/h3/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
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
  __name: "MainFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = [
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/gtopsis/",
        text: "Go to my LinkedIn profile"
      },
      {
        icon: "github",
        link: "https://github.com/gtopsis",
        text: "Go to my GitHub profile"
      }
    ];
    const personalMessage = "Build playing with Nuxt.js";
    const footerText = "Giorgos Topsis 2022";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "pa-2" }, _attrs), {
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
                                      _push6(`<a${ssrRenderAttr("href", social.link)}${ssrRenderAttr("aria-label", social.text)} target="_blank" data-v-5435578a${_scopeId5}><span class="visually-hidden" data-v-5435578a${_scopeId5}>${ssrInterpolate(social.text)}</span>`);
                                      _push6(ssrRenderComponent(_component_font_awesome_icon, {
                                        class: "social-link text-secondary",
                                        icon: ["fab", social.icon],
                                        "aria-hidden": "true"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</a>`);
                                    } else {
                                      return [
                                        createVNode("a", {
                                          href: social.link,
                                          "aria-label": social.text,
                                          target: "_blank"
                                        }, [
                                          createVNode("span", { class: "visually-hidden" }, toDisplayString(social.text), 1),
                                          createVNode(_component_font_awesome_icon, {
                                            class: "social-link text-secondary",
                                            icon: ["fab", social.icon],
                                            "aria-hidden": "true"
                                          }, null, 8, ["icon"])
                                        ], 8, ["href", "aria-label"])
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
                                        "aria-label": social.text,
                                        target: "_blank"
                                      }, [
                                        createVNode("span", { class: "visually-hidden" }, toDisplayString(social.text), 1),
                                        createVNode(_component_font_awesome_icon, {
                                          class: "social-link text-secondary",
                                          icon: ["fab", social.icon],
                                          "aria-hidden": "true"
                                        }, null, 8, ["icon"])
                                      ], 8, ["href", "aria-label"])
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
                                      "aria-label": social.text,
                                      target: "_blank"
                                    }, [
                                      createVNode("span", { class: "visually-hidden" }, toDisplayString(social.text), 1),
                                      createVNode(_component_font_awesome_icon, {
                                        class: "social-link text-secondary",
                                        icon: ["fab", social.icon],
                                        "aria-hidden": "true"
                                      }, null, 8, ["icon"])
                                    ], 8, ["href", "aria-label"])
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
                        _push4(`<p class="text-center ma-0" data-v-5435578a${_scopeId3}>${ssrInterpolate(personalMessage)}</p><p class="text-center ma-0" data-v-5435578a${_scopeId3}>\xA9 ${ssrInterpolate(footerText)}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "text-center ma-0" }, toDisplayString(personalMessage)),
                          createVNode("p", { class: "text-center ma-0" }, "\xA9 " + toDisplayString(footerText))
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
                                    "aria-label": social.text,
                                    target: "_blank"
                                  }, [
                                    createVNode("span", { class: "visually-hidden" }, toDisplayString(social.text), 1),
                                    createVNode(_component_font_awesome_icon, {
                                      class: "social-link text-secondary",
                                      icon: ["fab", social.icon],
                                      "aria-hidden": "true"
                                    }, null, 8, ["icon"])
                                  ], 8, ["href", "aria-label"])
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
                        createVNode("p", { class: "text-center ma-0" }, "\xA9 " + toDisplayString(footerText))
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
                                  "aria-label": social.text,
                                  target: "_blank"
                                }, [
                                  createVNode("span", { class: "visually-hidden" }, toDisplayString(social.text), 1),
                                  createVNode(_component_font_awesome_icon, {
                                    class: "social-link text-secondary",
                                    icon: ["fab", social.icon],
                                    "aria-hidden": "true"
                                  }, null, 8, ["icon"])
                                ], 8, ["href", "aria-label"])
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
                      createVNode("p", { class: "text-center ma-0" }, "\xA9 " + toDisplayString(footerText))
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5435578a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
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
                  _push3(ssrRenderComponent(_component_v_tooltip, {
                    location: "bottom end",
                    "aria-labelledby": "themeTogglePromptText"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_font_awesome_icon, mergeProps({
                          class: "toggle",
                          icon: ["fas", unref(disabledTheme) === "light" ? "sun" : "moon"],
                          onClick: toggleDarkMode
                        }, props), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_font_awesome_icon, mergeProps({
                            class: "toggle",
                            icon: ["fas", unref(disabledTheme) === "light" ? "sun" : "moon"],
                            onClick: toggleDarkMode
                          }, props), null, 16, ["icon"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span id="themeTogglePromptText" data-v-a94c147b${_scopeId3}>Enable ${ssrInterpolate(unref(disabledTheme))} mode</span>`);
                      } else {
                        return [
                          createVNode("span", { id: "themeTogglePromptText" }, "Enable " + toDisplayString(unref(disabledTheme)) + " mode", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tooltip, {
                      location: "bottom end",
                      "aria-labelledby": "themeTogglePromptText"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(_component_font_awesome_icon, mergeProps({
                          class: "toggle",
                          icon: ["fas", unref(disabledTheme) === "light" ? "sun" : "moon"],
                          onClick: toggleDarkMode
                        }, props), null, 16, ["icon"])
                      ]),
                      default: withCtx(() => [
                        createVNode("span", { id: "themeTogglePromptText" }, "Enable " + toDisplayString(unref(disabledTheme)) + " mode", 1)
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
              createVNode(_component_v_col, { class: "px-2 py-1" }, {
                default: withCtx(() => [
                  createVNode(_component_v_tooltip, {
                    location: "bottom end",
                    "aria-labelledby": "themeTogglePromptText"
                  }, {
                    activator: withCtx(({ props }) => [
                      createVNode(_component_font_awesome_icon, mergeProps({
                        class: "toggle",
                        icon: ["fas", unref(disabledTheme) === "light" ? "sun" : "moon"],
                        onClick: toggleDarkMode
                      }, props), null, 16, ["icon"])
                    ]),
                    default: withCtx(() => [
                      createVNode("span", { id: "themeTogglePromptText" }, "Enable " + toDisplayString(unref(disabledTheme)) + " mode", 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a94c147b"]]);
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
                  _push3(`<nav role="navigation" aria-label="Primary"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_list, {
                    class: "nav d-inline-flex flex-row justify-end",
                    nav: "",
                    align: "center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_item, { class: "nav-item mb-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_nuxt_link, {
                                to: "/",
                                class: "text-subtitle-1 text-secondary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Projects`);
                                  } else {
                                    return [
                                      createTextVNode("Projects")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_nuxt_link, {
                                  to: "/",
                                  class: "text-subtitle-1 text-secondary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Projects")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_list_item, { class: "nav-item mb-0 ml-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_nuxt_link, {
                                to: { name: "AboutPage" },
                                class: "text-subtitle-1 text-secondary"
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
                                  to: { name: "AboutPage" },
                                  class: "text-subtitle-1 text-secondary"
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
                                class: "text-subtitle-1 text-secondary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Projects")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, { class: "nav-item mb-0 ml-1" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                to: { name: "AboutPage" },
                                class: "text-subtitle-1 text-secondary"
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
                  _push3(ssrRenderComponent(_component_theme_toggle, { class: "ml-1" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("nav", {
                      role: "navigation",
                      "aria-label": "Primary"
                    }, [
                      createVNode(_component_v_list, {
                        class: "nav d-inline-flex flex-row justify-end",
                        nav: "",
                        align: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                to: "/",
                                class: "text-subtitle-1 text-secondary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Projects")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, { class: "nav-item mb-0 ml-1" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                to: { name: "AboutPage" },
                                class: "text-subtitle-1 text-secondary"
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
                    createVNode(_component_theme_toggle, { class: "ml-1" })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar_title, { class: "ml-0 logo text-h6 text-md-h5 text-wrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
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
                      } else {
                        return [
                          createVNode(_component_nuxt_link, { to: "/" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(title))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_toolbar_title, { class: "ml-0 logo text-h6 text-md-h5 text-wrap" }, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_link, { to: "/" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(title))
                          ]),
                          _: 1
                        })
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
            _push2(ssrRenderComponent(_component_v_footer, {
              role: "contentinfo",
              class: "mt-16"
            }, {
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
                  createVNode("nav", {
                    role: "navigation",
                    "aria-label": "Primary"
                  }, [
                    createVNode(_component_v_list, {
                      class: "nav d-inline-flex flex-row justify-end",
                      nav: "",
                      align: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item, { class: "nav-item mb-0" }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_link, {
                              to: "/",
                              class: "text-subtitle-1 text-secondary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Projects")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_list_item, { class: "nav-item mb-0 ml-1" }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_link, {
                              to: { name: "AboutPage" },
                              class: "text-subtitle-1 text-secondary"
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
                  createVNode(_component_theme_toggle, { class: "ml-1" })
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_toolbar_title, { class: "ml-0 logo text-h6 text-md-h5 text-wrap" }, {
                    default: withCtx(() => [
                      createVNode(_component_nuxt_link, { to: "/" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(title))
                        ]),
                        _: 1
                      })
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
              createVNode(_component_v_footer, {
                role: "contentinfo",
                class: "mt-16"
              }, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-4009f015.mjs.map
