globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"8be-HOE0fkNnhKw5ZnXtNkA7Kv2gEvs\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 2238,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/Manrope-Regular.271d8910.woff": {
    "type": "font/woff",
    "etag": "\"f590-rnDGoXLLC/0JTSdpvcrqZCf6yoE\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 62864,
    "path": "../public/_nuxt/Manrope-Regular.271d8910.woff"
  },
  "/_nuxt/Manrope-Regular.70fe057f.otf": {
    "type": "font/otf",
    "etag": "\"1343c-zE59cnRCx8cvlWw2cyKH6gTlcyM\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 78908,
    "path": "../public/_nuxt/Manrope-Regular.70fe057f.otf"
  },
  "/_nuxt/Manrope-Regular.7926e1db.ttf": {
    "type": "font/ttf",
    "etag": "\"232fc-5btDYlnULSBfqOd2QqYhRqKTY3M\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 144124,
    "path": "../public/_nuxt/Manrope-Regular.7926e1db.ttf"
  },
  "/_nuxt/Manrope-Regular.cb2441ad.woff2": {
    "type": "font/woff2",
    "etag": "\"bf94-ZFNmqvVDCWdUKX5tuXWiC8qce20\"",
    "mtime": "2023-01-08T18:33:06.273Z",
    "size": 49044,
    "path": "../public/_nuxt/Manrope-Regular.cb2441ad.woff2"
  },
  "/_nuxt/about.5b06aaf7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13c-pNJDs7/DOhzyBLtB5XOioYODZVI\"",
    "mtime": "2023-01-08T18:33:06.273Z",
    "size": 316,
    "path": "../public/_nuxt/about.5b06aaf7.css"
  },
  "/_nuxt/about.af6015e4.js": {
    "type": "application/javascript",
    "etag": "\"15d2-4q2XJstZEcm3n/gg+JSBoE6/q4Q\"",
    "mtime": "2023-01-08T18:33:06.273Z",
    "size": 5586,
    "path": "../public/_nuxt/about.af6015e4.js"
  },
  "/_nuxt/composables.0739d303.js": {
    "type": "application/javascript",
    "etag": "\"61-XBcjWvFtBJy1ib1fmdkGYvfYx3Q\"",
    "mtime": "2023-01-08T18:33:06.273Z",
    "size": 97,
    "path": "../public/_nuxt/composables.0739d303.js"
  },
  "/_nuxt/default.1c150a40.js": {
    "type": "application/javascript",
    "etag": "\"c5a-TUxuFsOn1HVeu4kEyQ77PwJeovU\"",
    "mtime": "2023-01-08T18:33:06.273Z",
    "size": 3162,
    "path": "../public/_nuxt/default.1c150a40.js"
  },
  "/_nuxt/default.5bef64a5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36f-GQlycrPFVPeI0dIPGS1Mb4LbUic\"",
    "mtime": "2023-01-08T18:33:06.273Z",
    "size": 879,
    "path": "../public/_nuxt/default.5bef64a5.css"
  },
  "/_nuxt/entry.5a4f623e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"cc92c-DuG6SFxIbcFPA0zRHBbPTBHo0gc\"",
    "mtime": "2023-01-08T18:33:06.273Z",
    "size": 837932,
    "path": "../public/_nuxt/entry.5a4f623e.css"
  },
  "/_nuxt/entry.e3b340de.js": {
    "type": "application/javascript",
    "etag": "\"64040-Uy18BrZ5lnSsik0ULwkMDyxHO7k\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 409664,
    "path": "../public/_nuxt/entry.e3b340de.js"
  },
  "/_nuxt/error-404.116f13b7.js": {
    "type": "application/javascript",
    "etag": "\"8cf-hDfuS3swhzfYlc9U6p1de4v5h3U\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 2255,
    "path": "../public/_nuxt/error-404.116f13b7.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-500.87dc8083.js": {
    "type": "application/javascript",
    "etag": "\"778-l4pDCaXfgLfkZtWWa3rsr9wXarY\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 1912,
    "path": "../public/_nuxt/error-500.87dc8083.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.3728c3e5.js": {
    "type": "application/javascript",
    "etag": "\"4ad-2jMvBUeFwDsnLz9kTARV3cBOfiY\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 1197,
    "path": "../public/_nuxt/error-component.3728c3e5.js"
  },
  "/_nuxt/fa-brands-400.b1d1c1b0.ttf": {
    "type": "font/ttf",
    "etag": "\"2d70c-oUqR2MFw/J4VkED2eUNp2CnghZ4\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 186124,
    "path": "../public/_nuxt/fa-brands-400.b1d1c1b0.ttf"
  },
  "/_nuxt/fa-brands-400.c61287c2.woff2": {
    "type": "font/woff2",
    "etag": "\"1a488-uZgTs8Ux2P6QrtO3XS7XH44Mh/Q\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 107656,
    "path": "../public/_nuxt/fa-brands-400.c61287c2.woff2"
  },
  "/_nuxt/fa-regular-400.5da313b0.woff2": {
    "type": "font/woff2",
    "etag": "\"6294-MRlnZ1CvDgvDOMxKrSIL3HLFbMU\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 25236,
    "path": "../public/_nuxt/fa-regular-400.5da313b0.woff2"
  },
  "/_nuxt/fa-regular-400.d7b19fe2.ttf": {
    "type": "font/ttf",
    "etag": "\"f370-2tOtcbODeJu2LCSXQu9Z40aF59A\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 62320,
    "path": "../public/_nuxt/fa-regular-400.d7b19fe2.ttf"
  },
  "/_nuxt/fa-solid-900.8f06540f.woff2": {
    "type": "font/woff2",
    "etag": "\"24bf4-wObna0oCw0ZW/ypBtnHgLyghgps\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 150516,
    "path": "../public/_nuxt/fa-solid-900.8f06540f.woff2"
  },
  "/_nuxt/fa-solid-900.e4f6a7e9.ttf": {
    "type": "font/ttf",
    "etag": "\"6106c-Prm0suoicRuW47NWGW/SC08X+w4\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 397420,
    "path": "../public/_nuxt/fa-solid-900.e4f6a7e9.ttf"
  },
  "/_nuxt/fa-v4compatibility.2ddb3b41.ttf": {
    "type": "font/ttf",
    "etag": "\"279c-UqhKZJXif0Ppdi8sKpUx2f4V6e4\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 10140,
    "path": "../public/_nuxt/fa-v4compatibility.2ddb3b41.ttf"
  },
  "/_nuxt/fa-v4compatibility.f46715c9.woff2": {
    "type": "font/woff2",
    "etag": "\"11d8-3X5Kdt4m6eORaN+sP7uKNKh7drw\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 4568,
    "path": "../public/_nuxt/fa-v4compatibility.f46715c9.woff2"
  },
  "/_nuxt/index.5358486f.js": {
    "type": "application/javascript",
    "etag": "\"24e0-TaIFeTG5cD7y2jl5yK1DCXvUgfc\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 9440,
    "path": "../public/_nuxt/index.5358486f.js"
  },
  "/_nuxt/index.bcd6c028.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"31f-Q4LQjDMQHqtV7/m5oSIIAk3eIjs\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 799,
    "path": "../public/_nuxt/index.bcd6c028.css"
  },
  "/_nuxt/materialdesignicons-webfont.6d5e4be4.woff": {
    "type": "font/woff",
    "etag": "\"8ad48-8fBPxn8AuTHR6aNqnpd7/YZOYX8\"",
    "mtime": "2023-01-08T18:33:06.269Z",
    "size": 568648,
    "path": "../public/_nuxt/materialdesignicons-webfont.6d5e4be4.woff"
  },
  "/_nuxt/materialdesignicons-webfont.739dc70d.woff2": {
    "type": "font/woff2",
    "etag": "\"5fa08-x2c2gG9GszeWFK/zkIHWweCMXSI\"",
    "mtime": "2023-01-08T18:33:06.265Z",
    "size": 391688,
    "path": "../public/_nuxt/materialdesignicons-webfont.739dc70d.woff2"
  },
  "/_nuxt/materialdesignicons-webfont.c02d41ce.ttf": {
    "type": "font/ttf",
    "etag": "\"1340e0-0j+vWGoLzkw+W0jSd4RXTdcjOAI\"",
    "mtime": "2023-01-08T18:33:06.265Z",
    "size": 1261792,
    "path": "../public/_nuxt/materialdesignicons-webfont.c02d41ce.ttf"
  },
  "/_nuxt/materialdesignicons-webfont.f5966bae.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"1341bc-IPFqEZIUYBdgxGkgWDK5VXZOlmw\"",
    "mtime": "2023-01-08T18:33:06.265Z",
    "size": 1262012,
    "path": "../public/_nuxt/materialdesignicons-webfont.f5966bae.eot"
  },
  "/images/Twitter-card.png": {
    "type": "image/png",
    "etag": "\"aa57-VyC4zyJQnurdB6bD2bKE02Z0Q6k\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 43607,
    "path": "../public/images/Twitter-card.png"
  },
  "/images/army_logo.png": {
    "type": "image/png",
    "etag": "\"52ee-mjao9gs+8+THffxO/y7PtwOapms\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 21230,
    "path": "../public/images/army_logo.png"
  },
  "/images/chalmers_logo.png": {
    "type": "image/png",
    "etag": "\"a1a0-mUnkODG+vZo8R7THu0Hh/N249M0\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 41376,
    "path": "../public/images/chalmers_logo.png"
  },
  "/images/conveos_logo.png": {
    "type": "image/png",
    "etag": "\"3985-IxuotrPUT+pawYOgmoU6SJf/VgY\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 14725,
    "path": "../public/images/conveos_logo.png"
  },
  "/images/cs-352.png": {
    "type": "image/png",
    "etag": "\"778eb-RF0tmMqHXI13chVWsAGpyaUpmLM\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 489707,
    "path": "../public/images/cs-352.png"
  },
  "/images/devstaff-meetup.jpg": {
    "type": "image/jpeg",
    "etag": "\"7120-PccHsRe3bs3MJ9IT5+kuHg4Jc5Q\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 28960,
    "path": "../public/images/devstaff-meetup.jpg"
  },
  "/images/fairlo_logo.png": {
    "type": "image/png",
    "etag": "\"47e4-+PcMCEO4Ebd2QLVeW8EwwiqoGTk\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 18404,
    "path": "../public/images/fairlo_logo.png"
  },
  "/images/forth_logo.png": {
    "type": "image/png",
    "etag": "\"7c1c-dfKKjppR93mcuvq2RI7IOEMmSOk\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 31772,
    "path": "../public/images/forth_logo.png"
  },
  "/images/gdg-meetup.jpg": {
    "type": "image/jpeg",
    "etag": "\"37ef-sNW0zj5K95OJiVy3zjLLZ6rQN0s\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 14319,
    "path": "../public/images/gdg-meetup.jpg"
  },
  "/images/opencoffe-meetup.jpg": {
    "type": "image/jpeg",
    "etag": "\"3392-GFzcjLmEgbrSwFU4YbkwFMq8YjI\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 13202,
    "path": "../public/images/opencoffe-meetup.jpg"
  },
  "/images/portfolio.png": {
    "type": "image/png",
    "etag": "\"a07a-LHdtIpRX9VOoM0gk68g4Q2xbsVM\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 41082,
    "path": "../public/images/portfolio.png"
  },
  "/images/uoc-radio.png": {
    "type": "image/png",
    "etag": "\"65f75-Q6cMRa1Rl21MtrDbUXD146TDnK8\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 417653,
    "path": "../public/images/uoc-radio.png"
  },
  "/images/uoc_cyprus_logo.png": {
    "type": "image/png",
    "etag": "\"4780-FYBSye/4Kdpq7yrPSrTeC9LaULw\"",
    "mtime": "2023-01-08T18:33:06.281Z",
    "size": 18304,
    "path": "../public/images/uoc_cyprus_logo.png"
  },
  "/images/uoc_logo.png": {
    "type": "image/png",
    "etag": "\"448ae-qgYlCYUSeg0fUJ8sHPLRNJmZxGg\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 280750,
    "path": "../public/images/uoc_logo.png"
  },
  "/tech_logos/amazon-s3.svg": {
    "type": "image/svg+xml",
    "etag": "\"12a1-K2jbkBFsiqLrp9PFVc8i7k5rsak\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 4769,
    "path": "../public/tech_logos/amazon-s3.svg"
  },
  "/tech_logos/angular.svg": {
    "type": "image/svg+xml",
    "etag": "\"f4a-fINbJ70UTRyc1HqJ2Pl0owgraOQ\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 3914,
    "path": "../public/tech_logos/angular.svg"
  },
  "/tech_logos/invision.svg": {
    "type": "image/svg+xml",
    "etag": "\"510-fYMp2ND0JrrHYGK/7wEROjYM+lg\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 1296,
    "path": "../public/tech_logos/invision.svg"
  },
  "/tech_logos/javascript-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"1cd-RdGUkpwMFwPLR1n6ygDMPbLtJas\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 461,
    "path": "../public/tech_logos/javascript-1.svg"
  },
  "/tech_logos/mongodb-icon-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"4be-knyk8RbkXQDVR+R1mA32Fa57+hI\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 1214,
    "path": "../public/tech_logos/mongodb-icon-1.svg"
  },
  "/tech_logos/nodejs-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ec4-uvKIKr42vAqaTIId9KdXigLRRRs\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 7876,
    "path": "../public/tech_logos/nodejs-1.svg"
  },
  "/tech_logos/openapi-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ad4-cjc7pg46fajBqhiKpGxiIp4eckI\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 6868,
    "path": "../public/tech_logos/openapi-1.svg"
  },
  "/tech_logos/socket-io.svg": {
    "type": "image/svg+xml",
    "etag": "\"384-Zfm7ZBgVxeK4RP8Am6H4JyYpoZI\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 900,
    "path": "../public/tech_logos/socket-io.svg"
  },
  "/tech_logos/vue-js-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"11a-IizDgGFKKTWBkdiltYb1TLzL02Q\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 282,
    "path": "../public/tech_logos/vue-js-1.svg"
  },
  "/tech_logos/vuetify.svg": {
    "type": "image/svg+xml",
    "etag": "\"13f-xPnKmI6nxwPJ/1egJdv1tn4pJCk\"",
    "mtime": "2023-01-08T18:33:06.277Z",
    "size": 319,
    "path": "../public/tech_logos/vuetify.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_zU01ai = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_zU01ai, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_zU01ai, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
