const nuxtGoogleFonts = '@font-face{font-display:swap;font-family:Josefin Sans;font-style:normal;font-weight:400;src:url("data:font/woff2;base64,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") format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:Josefin Sans;font-style:normal;font-weight:400;src:url(' + __buildAssetsURL("Josefin_Sans-400-2.2009861a.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Josefin Sans;font-style:normal;font-weight:400;src:url(' + __buildAssetsURL("Josefin_Sans-400-3.4a79b18e.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Lato;font-style:normal;font-weight:100;src:url(' + __buildAssetsURL("Lato-100-4.63aee53d.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Lato;font-style:normal;font-weight:100;src:url(' + __buildAssetsURL("Lato-100-5.a79b4c65.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Lato;font-style:normal;font-weight:300;src:url(' + __buildAssetsURL("Lato-300-6.c9455def.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Lato;font-style:normal;font-weight:300;src:url(' + __buildAssetsURL("Lato-300-7.115f6a62.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Raleway;font-style:italic;font-weight:100;src:url(' + __buildAssetsURL("Raleway-100-8.b6348bb3.woff2") + ') format("woff2");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:Raleway;font-style:italic;font-weight:100;src:url(' + __buildAssetsURL("Raleway-100-9.819cc5ab.woff2") + ') format("woff2");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:Raleway;font-style:italic;font-weight:100;src:url(' + __buildAssetsURL("Raleway-100-10.cf9f94ea.woff2") + ') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:Raleway;font-style:italic;font-weight:100;src:url(' + __buildAssetsURL("Raleway-100-11.7e77e4c1.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Raleway;font-style:italic;font-weight:100;src:url(' + __buildAssetsURL("Raleway-100-12.acba3759.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Raleway;font-style:normal;font-weight:100;src:url(' + __buildAssetsURL("Raleway-100-13.fab646c7.woff2") + ') format("woff2");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:Raleway;font-style:normal;font-weight:100;src:url(' + __buildAssetsURL("Raleway-100-14.3aaa08d1.woff2") + ') format("woff2");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:Raleway;font-style:normal;font-weight:100;src:url(' + __buildAssetsURL("Raleway-100-15.72a61684.woff2") + ') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:Raleway;font-style:normal;font-weight:100;src:url(' + __buildAssetsURL("Raleway-100-16.ab47b8f5.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Raleway;font-style:normal;font-weight:100;src:url(' + __buildAssetsURL("Raleway-100-17.405ceee1.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:Raleway;font-style:normal;font-weight:400;src:url(' + __buildAssetsURL("Raleway-100-13.fab646c7.woff2") + ') format("woff2");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:Raleway;font-style:normal;font-weight:400;src:url(' + __buildAssetsURL("Raleway-100-14.3aaa08d1.woff2") + ') format("woff2");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:Raleway;font-style:normal;font-weight:400;src:url(' + __buildAssetsURL("Raleway-100-15.72a61684.woff2") + ') format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:Raleway;font-style:normal;font-weight:400;src:url(' + __buildAssetsURL("Raleway-100-16.ab47b8f5.woff2") + ') format("woff2");unicode-range:u+0100-02af,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Raleway;font-style:normal;font-weight:400;src:url(' + __buildAssetsURL("Raleway-100-17.405ceee1.woff2") + ') format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0300-0301,u+0303-0304,u+0308-0309,u+0323,u+0329,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}';
export {
  nuxtGoogleFonts as default
};
//# sourceMappingURL=css-styles-3.mjs-f41f4597.js.map
