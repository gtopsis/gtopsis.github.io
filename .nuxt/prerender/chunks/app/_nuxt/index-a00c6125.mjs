import { _ as __nuxt_component_0$1 } from './nuxt-link-0d39ff03.mjs';
import { useSSRContext, reactive, computed, defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, openBlock, createBlock, Fragment, renderList } from 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue/server-renderer/index.mjs';
import { d as defineStore, _ as _export_sfc, s as storeToRefs, u as useHead } from '../server.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/ufo/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/ofetch/dist/node.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/hookable/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/unctx/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/unhead/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/gt0p/Personal%20Projects/gtopsis.github.io/node_modules/h3/dist/index.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const headline = {
      pre: "I'm ",
      name: {
        text: "Giorgos",
        pronunciation: "(/\u0261i.\u0254\u030C\u02D0r.\u0261.os/)"
      },
      post: "a Full-Stack Web Developer based in Heraklion of Crete."
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
                        _push4(`<h1 class="headline text-h5 text-md-h5 text-lg-h4" data-v-68c68921${_scopeId3}><span data-v-68c68921${_scopeId3}>${ssrInterpolate(headline.pre)} `);
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
                        _push4(` ${ssrInterpolate(headline.name.pronunciation)},<br data-v-68c68921${_scopeId3}> ${ssrInterpolate(headline.post)}</span></h1>`);
                      } else {
                        return [
                          createVNode("h1", { class: "headline text-h5 text-md-h5 text-lg-h4" }, [
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
                        createVNode("h1", { class: "headline text-h5 text-md-h5 text-lg-h4" }, [
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
                      createVNode("h1", { class: "headline text-h5 text-md-h5 text-lg-h4" }, [
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-68c68921"]]);
const useProjectsStore = defineStore("ProjectsStore", () => {
  const projects = reactive([
    {
      src: "/images/website-cs352-showcase.png",
      imageDescription: "A browser window which contains a part of the website of the course cs352. This part is the the logo, navigation bar and some basic info of the course.",
      title: "Website for course cs-352",
      description: "Static website for the course cs352 (year 2017-2018) in Computer Science department at UOC. It was serving the content (lectures, tutorials, assignments and course project) of the course to the students.",
      demo: "https://gtopsis.github.io/Course-cs352-website/",
      code: "https://github.com/gtopsis/Course-cs352-website"
    },
    {
      src: "/images/loan-calculator-showcase.png",
      title: "Simple loan calculator",
      imageDescription: "A browser window which contains a small modal window with a form. This form represents the calculator of the monthly payment based on a loan's duration and payment-in-advance amount.",
      description: "A simple calculator for the monthly payment of a loan, based on the payment-in-advance and its duration.",
      demo: "https://gtopsis.github.io/loan-calculator/",
      code: "https://github.com/gtopsis/loan-calculator"
    },
    {
      src: "/images/music-app-api-showcase.png",
      title: "Simple music app API",
      imageDescription: "A browser window which contains a subset of the documented API endpoints about Artists, Recordings, etc. of the music app.",
      description: "The backend side of a music app in which albums, artists and tracks are associated properly.",
      demo: "#",
      code: "https://github.com/gtopsis/music-app"
    },
    {
      src: "/images/website-uoc-radio-showcase.png",
      title: "Website for the UoC radio station",
      imageDescription: "A browser window which contains a part of the website for the FM radio of University of Crete. This part is the logo, the navigation menu, a background image and an one-line music player.",
      description: "A responsive and usable website (showcase - not the current one) of RASTAPANK, the team behind the FM radio station of university of Crete.",
      demo: "https://gtopsis.github.io/Uoc-radio-website/index.html",
      code: "https://github.com/gtopsis/Uoc-radio-website"
    }
  ]);
  const projectsList = computed(() => projects);
  return { projectsList };
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsList",
  __ssrInlineRender: true,
  setup(__props) {
    const title = "Personal Projects";
    const { projectsList } = storeToRefs(useProjectsStore());
    const projects = projectsList.value;
    function navigateToProjectAsset(url) {
      window.open(url, "_blank");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
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
                    class: "mb-8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 data-v-fc96023e${_scopeId3}>${ssrInterpolate(title)}</h1>`);
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
                      class: "mb-8"
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
            _push2(ssrRenderComponent(_component_v_row, { dense: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(projects), (project) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      key: project.title,
                      cols: "12",
                      md: "4"
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
                                  gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                  cover: "",
                                  src: project.src,
                                  alt: project.imageDescription
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
                                _push5(ssrRenderComponent(_component_v_card_text, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<p class="project-description" data-v-fc96023e${_scopeId5}>${ssrInterpolate(project.description)}</p>`);
                                    } else {
                                      return [
                                        createVNode("p", { class: "project-description" }, toDisplayString(project.description), 1)
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
                                        onClick: ($event) => navigateToProjectAsset(project.demo)
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
                                        onClick: ($event) => navigateToProjectAsset(project.code)
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
                                          onClick: ($event) => navigateToProjectAsset(project.demo)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Demo ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(_component_v_btn, {
                                          color: "secondary",
                                          onClick: ($event) => navigateToProjectAsset(project.code)
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
                                    gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                    cover: "",
                                    src: project.src,
                                    alt: project.imageDescription
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, {
                                        textContent: toDisplayString(project.title)
                                      }, null, 8, ["textContent"])
                                    ]),
                                    _: 2
                                  }, 1032, ["src", "alt"]),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "project-description" }, toDisplayString(project.description), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        color: "secondary",
                                        onClick: ($event) => navigateToProjectAsset(project.demo)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Demo ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_v_btn, {
                                        color: "secondary",
                                        onClick: ($event) => navigateToProjectAsset(project.code)
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
                                  gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                  cover: "",
                                  src: project.src,
                                  alt: project.imageDescription
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, {
                                      textContent: toDisplayString(project.title)
                                    }, null, 8, ["textContent"])
                                  ]),
                                  _: 2
                                }, 1032, ["src", "alt"]),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "project-description" }, toDisplayString(project.description), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      color: "secondary",
                                      onClick: ($event) => navigateToProjectAsset(project.demo)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Demo ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(_component_v_btn, {
                                      color: "secondary",
                                      onClick: ($event) => navigateToProjectAsset(project.code)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project) => {
                      return openBlock(), createBlock(_component_v_col, {
                        key: project.title,
                        cols: "12",
                        md: "4"
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
                                gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                cover: "",
                                src: project.src,
                                alt: project.imageDescription
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, {
                                    textContent: toDisplayString(project.title)
                                  }, null, 8, ["textContent"])
                                ]),
                                _: 2
                              }, 1032, ["src", "alt"]),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "project-description" }, toDisplayString(project.description), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_card_actions, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    color: "secondary",
                                    onClick: ($event) => navigateToProjectAsset(project.demo)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Demo ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(_component_v_btn, {
                                    color: "secondary",
                                    onClick: ($event) => navigateToProjectAsset(project.code)
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
                    class: "mb-8"
                  }, {
                    default: withCtx(() => [
                      createVNode("h1", null, toDisplayString(title))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, { dense: "" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project) => {
                    return openBlock(), createBlock(_component_v_col, {
                      key: project.title,
                      cols: "12",
                      md: "4"
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
                              gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                              cover: "",
                              src: project.src,
                              alt: project.imageDescription
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, {
                                  textContent: toDisplayString(project.title)
                                }, null, 8, ["textContent"])
                              ]),
                              _: 2
                            }, 1032, ["src", "alt"]),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                createVNode("p", { class: "project-description" }, toDisplayString(project.description), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_card_actions, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  color: "secondary",
                                  onClick: ($event) => navigateToProjectAsset(project.demo)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Demo ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  color: "secondary",
                                  onClick: ($event) => navigateToProjectAsset(project.code)
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
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fc96023e"]]);
const useMeetupsStore = defineStore("MeetupsStore", () => {
  const meetups = reactive([
    {
      src: "/images/devstaff-meetup.jpg",
      title: "DevStaff: A developer community in Crete",
      link: "https://www.meetup.com/devstaff/",
      description: "A meetup which is called DevStaff and it is a developer community in Crete."
    },
    {
      src: "/images/opencoffe-meetup.jpg",
      title: "Open Coffee Heraklion",
      link: "https://www.meetup.com/opencoffeeher/",
      description: "A meetup which is called Open Coffee Heraklion and it gathers motivated youngsters & professionals from Crete, who have as common ground the urge of sharing business ideas"
    },
    {
      src: "/images/vuejs-athens-meetups.jpeg",
      title: "VueJS Athens",
      link: "https://www.meetup.com/vuejsathens/",
      description: "A meetup which is called VueJS Athens and it is a community of people that is eager to learn more about Vue.js"
    }
  ]);
  const meetupsList = computed(() => meetups);
  return { meetupsList };
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MeetupsList",
  __ssrInlineRender: true,
  setup(__props) {
    const title = "Participation on several Meetups";
    const { meetupsList } = storeToRefs(useMeetupsStore());
    const meetups = meetupsList.value;
    function navigateToMeetup(url) {
      window.open(url, "_blank");
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
                    class: "mb-8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 data-v-2fbf0c48${_scopeId3}>${ssrInterpolate(title)}</h1>`);
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
                      class: "mb-8"
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
                  ssrRenderList(unref(meetups), (meetup, index2) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      key: index2,
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_card, {
                            class: "meetup-card mx-auto",
                            "max-width": "400",
                            onClick: ($event) => navigateToMeetup(meetup.link)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_img, {
                                  class: "white--text align-end",
                                  src: meetup.src,
                                  alt: meetup.description,
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
                                    class: "white--text align-end",
                                    src: meetup.src,
                                    alt: meetup.description,
                                    gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                    height: "200px"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, {
                                        textContent: toDisplayString(meetup.title)
                                      }, null, 8, ["textContent"])
                                    ]),
                                    _: 2
                                  }, 1032, ["src", "alt"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_card, {
                              class: "meetup-card mx-auto",
                              "max-width": "400",
                              onClick: ($event) => navigateToMeetup(meetup.link)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  class: "white--text align-end",
                                  src: meetup.src,
                                  alt: meetup.description,
                                  gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                  height: "200px"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, {
                                      textContent: toDisplayString(meetup.title)
                                    }, null, 8, ["textContent"])
                                  ]),
                                  _: 2
                                }, 1032, ["src", "alt"])
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(meetups), (meetup, index2) => {
                      return openBlock(), createBlock(_component_v_col, {
                        key: index2,
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: "meetup-card mx-auto",
                            "max-width": "400",
                            onClick: ($event) => navigateToMeetup(meetup.link)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                class: "white--text align-end",
                                src: meetup.src,
                                alt: meetup.description,
                                gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                height: "200px"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, {
                                    textContent: toDisplayString(meetup.title)
                                  }, null, 8, ["textContent"])
                                ]),
                                _: 2
                              }, 1032, ["src", "alt"])
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
                    class: "mb-8"
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
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(meetups), (meetup, index2) => {
                    return openBlock(), createBlock(_component_v_col, {
                      key: index2,
                      cols: "12",
                      md: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "meetup-card mx-auto",
                          "max-width": "400",
                          onClick: ($event) => navigateToMeetup(meetup.link)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_img, {
                              class: "white--text align-end",
                              src: meetup.src,
                              alt: meetup.description,
                              gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                              height: "200px"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, {
                                  textContent: toDisplayString(meetup.title)
                                }, null, 8, ["textContent"])
                              ]),
                              _: 2
                            }, 1032, ["src", "alt"])
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
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MeetupsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2fbf0c48"]]);
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
      const _component_HeroSection = __nuxt_component_0;
      const _component_ProjectsList = __nuxt_component_1;
      const _component_MeetupsList = __nuxt_component_2;
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
                  _push3(ssrRenderComponent(_component_HeroSection, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_HeroSection)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "section mb-16 mx-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ProjectsList, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ProjectsList)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "section mb-16 mx-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_MeetupsList, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_MeetupsList)
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
                  createVNode(_component_HeroSection)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                class: "section mb-16 mx-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_ProjectsList)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                class: "section mb-16 mx-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_MeetupsList)
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-681c1a58"]]);

export { index as default };
//# sourceMappingURL=index-a00c6125.mjs.map
