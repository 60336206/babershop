import {
  ApiConfiguration
} from "./chunk-KUUI72I7.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest,
  HttpResponse,
  Injectable,
  filter,
  firstValueFrom,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JJSRJYGA.js";

// src/app/api/api.ts
var Api = class _Api {
  config;
  http;
  constructor(config, http) {
    this.config = config;
    this.http = http;
  }
  _rootUrl;
  /**
   * Returns the root url for API operations. If not set directly here,
   * will fallback to `ApiConfiguration.rootUrl`.
   */
  get rootUrl() {
    return this._rootUrl || this.config.rootUrl;
  }
  /**
   * Sets the root URL for API operations
   */
  set rootUrl(rootUrl) {
    this._rootUrl = rootUrl;
  }
  async invoke(fn, params, context) {
    const resp = this.invoke$Response(fn, params, context);
    return (await resp).body;
  }
  invoke$Response(fn, params, context) {
    const obs = fn(this.http, this.rootUrl, params, context).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
    return firstValueFrom(obs);
  }
  static \u0275fac = function Api_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Api)(\u0275\u0275inject(ApiConfiguration), \u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Api, factory: _Api.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Api, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiConfiguration }, { type: HttpClient }], null);
})();

// src/app/api/request-builder.ts
var ParameterCodec = class {
  encodeKey(key) {
    return encodeURIComponent(key);
  }
  encodeValue(value) {
    return encodeURIComponent(value);
  }
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  decodeValue(value) {
    return decodeURIComponent(value);
  }
};
var ParameterCodecInstance = new ParameterCodec();
var Parameter = class {
  name;
  value;
  options;
  constructor(name, value, options, defaultStyle, defaultExplode) {
    this.name = name;
    this.value = value;
    this.options = options;
    this.options = options || {};
    if (this.options.style === null || this.options.style === void 0) {
      this.options.style = defaultStyle;
    }
    if (this.options.explode === null || this.options.explode === void 0) {
      this.options.explode = defaultExplode;
    }
  }
  serializeValue(value, separator = ",") {
    if (value === null || value === void 0) {
      return "";
    } else if (value instanceof Array) {
      return value.map((v) => this.serializeValue(v).split(separator).join(encodeURIComponent(separator))).join(separator);
    } else if (typeof value === "object") {
      const array = [];
      for (const key of Object.keys(value)) {
        let propVal = value[key];
        if (propVal !== null && propVal !== void 0) {
          propVal = this.serializeValue(propVal).split(separator).join(encodeURIComponent(separator));
          if (this.options.explode) {
            array.push(`${key}=${propVal}`);
          } else {
            array.push(key);
            array.push(propVal);
          }
        }
      }
      return array.join(separator);
    } else {
      return String(value);
    }
  }
};
var PathParameter = class extends Parameter {
  constructor(name, value, options) {
    super(name, value, options, "simple", false);
  }
  append(path) {
    let value = this.value;
    if (value === null || value === void 0) {
      value = "";
    }
    let prefix = this.options.style === "label" ? "." : "";
    let separator = this.options.explode ? prefix === "" ? "," : prefix : ",";
    let alreadySerialized = false;
    if (this.options.style === "matrix") {
      prefix = `;${this.name}=`;
      if (this.options.explode && typeof value === "object") {
        prefix = ";";
        if (value instanceof Array) {
          value = value.map((v) => `${this.name}=${this.serializeValue(v, ";")}`);
          value = value.join(";");
          alreadySerialized = true;
        } else {
          value = this.serializeValue(value, ";");
          alreadySerialized = true;
        }
      }
    }
    value = prefix + (alreadySerialized ? value : this.serializeValue(value, separator));
    path = path.replace(`{${this.name}}`, value);
    path = path.replace(`{${prefix}${this.name}${this.options.explode ? "*" : ""}}`, value);
    return path;
  }
  // @ts-ignore
  serializeValue(value, separator = ",") {
    var result = typeof value === "string" ? encodeURIComponent(value) : super.serializeValue(value, separator);
    result = result.replace(/%3D/g, "=");
    result = result.replace(/%3B/g, ";");
    result = result.replace(/%2C/g, ",");
    return result;
  }
};
var QueryParameter = class extends Parameter {
  constructor(name, value, options) {
    super(name, value, options, "form", true);
  }
  append(params) {
    if (this.value instanceof Array) {
      if (this.options.explode) {
        for (const v of this.value) {
          params = params.append(this.name, this.serializeValue(v));
        }
      } else {
        const separator = this.options.style === "spaceDelimited" ? " " : this.options.style === "pipeDelimited" ? "|" : ",";
        return params.append(this.name, this.serializeValue(this.value, separator));
      }
    } else if (this.value !== null && typeof this.value === "object") {
      if (this.options.style === "deepObject") {
        for (const key of Object.keys(this.value)) {
          const propVal = this.value[key];
          if (propVal !== null && propVal !== void 0) {
            params = params.append(`${this.name}[${key}]`, this.serializeValue(propVal));
          }
        }
      } else if (this.options.explode) {
        for (const key of Object.keys(this.value)) {
          const propVal = this.value[key];
          if (propVal !== null && propVal !== void 0) {
            params = params.append(key, this.serializeValue(propVal));
          }
        }
      } else {
        const array = [];
        for (const key of Object.keys(this.value)) {
          const propVal = this.value[key];
          if (propVal !== null && propVal !== void 0) {
            array.push(key);
            array.push(propVal);
          }
        }
        params = params.append(this.name, this.serializeValue(array));
      }
    } else if (this.value !== null && this.value !== void 0) {
      params = params.append(this.name, this.serializeValue(this.value));
    }
    return params;
  }
};
var HeaderParameter = class extends Parameter {
  constructor(name, value, options) {
    super(name, value, options, "simple", false);
  }
  append(headers) {
    if (this.value !== null && this.value !== void 0) {
      if (this.value instanceof Array) {
        for (const v of this.value) {
          headers = headers.append(this.name, this.serializeValue(v));
        }
      } else {
        headers = headers.append(this.name, this.serializeValue(this.value));
      }
    }
    return headers;
  }
};
var RequestBuilder = class {
  rootUrl;
  operationPath;
  method;
  _path = /* @__PURE__ */ new Map();
  _query = /* @__PURE__ */ new Map();
  _header = /* @__PURE__ */ new Map();
  _bodyContent;
  _bodyContentType;
  constructor(rootUrl, operationPath, method) {
    this.rootUrl = rootUrl;
    this.operationPath = operationPath;
    this.method = method;
  }
  /**
   * Sets a path parameter
   */
  path(name, value, options) {
    this._path.set(name, new PathParameter(name, value, options || {}));
  }
  /**
   * Sets a query parameter
   */
  query(name, value, options) {
    this._query.set(name, new QueryParameter(name, value, options || {}));
  }
  /**
   * Sets a header parameter
   */
  header(name, value, options) {
    this._header.set(name, new HeaderParameter(name, value, options || {}));
  }
  /**
   * Sets the body content, along with the content type
   */
  body(value, contentType = "application/json") {
    if (value instanceof Blob) {
      this._bodyContentType = value.type;
    } else {
      this._bodyContentType = contentType;
    }
    if (this._bodyContentType === "application/x-www-form-urlencoded" && value !== null && typeof value === "object") {
      const pairs = [];
      for (const key of Object.keys(value)) {
        let val = value[key];
        if (!(val instanceof Array)) {
          val = [val];
        }
        for (const v of val) {
          const formValue = this.formDataValue(v);
          if (formValue !== null) {
            pairs.push([key, formValue]);
          }
        }
      }
      this._bodyContent = pairs.map((p) => `${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`).join("&");
    } else if (this._bodyContentType === "multipart/form-data") {
      const formData = new FormData();
      if (value !== null && value !== void 0) {
        for (const key of Object.keys(value)) {
          const val = value[key];
          if (val instanceof Array) {
            for (const v of val) {
              const toAppend = this.formDataValue(v);
              if (toAppend !== null) {
                formData.append(key, toAppend);
              }
            }
          } else {
            const toAppend = this.formDataValue(val);
            if (toAppend !== null) {
              formData.set(key, toAppend);
            }
          }
        }
      }
      this._bodyContent = formData;
    } else {
      this._bodyContent = value;
    }
  }
  formDataValue(value) {
    if (value === null || value === void 0) {
      return null;
    }
    if (value instanceof Blob) {
      return value;
    }
    if (typeof value === "object") {
      return new Blob([JSON.stringify(value)], { type: "application/json" });
    }
    return String(value);
  }
  /**
   * Builds the request with the current set parameters
   */
  build(options) {
    options = options || {};
    let path = this.operationPath;
    for (const pathParam of this._path.values()) {
      path = pathParam.append(path);
    }
    const url = this.rootUrl + path;
    let httpParams = new HttpParams({
      encoder: ParameterCodecInstance
    });
    for (const queryParam of this._query.values()) {
      httpParams = queryParam.append(httpParams);
    }
    let httpHeaders = new HttpHeaders();
    if (options.accept) {
      httpHeaders = httpHeaders.append("Accept", options.accept);
    }
    for (const headerParam of this._header.values()) {
      httpHeaders = headerParam.append(httpHeaders);
    }
    if (this._bodyContentType && !(this._bodyContent instanceof FormData)) {
      httpHeaders = httpHeaders.set("Content-Type", this._bodyContentType);
    }
    return new HttpRequest(this.method.toUpperCase(), url, this._bodyContent, {
      params: httpParams,
      headers: httpHeaders,
      responseType: options.responseType,
      reportProgress: options.reportProgress,
      context: options.context
    });
  }
};

export {
  Api,
  RequestBuilder
};
//# sourceMappingURL=chunk-LXYPTV7U.js.map
