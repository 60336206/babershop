import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JJSRJYGA.js";

// src/app/api/api-configuration.ts
function provideApiConfiguration(rootUrl) {
  const config = new ApiConfiguration();
  config.rootUrl = rootUrl;
  return {
    provide: ApiConfiguration,
    useValue: config
  };
}
var ApiConfiguration = class _ApiConfiguration {
  rootUrl = "{{urlBase}}";
  static \u0275fac = function ApiConfiguration_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiConfiguration)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiConfiguration, factory: _ApiConfiguration.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiConfiguration, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  provideApiConfiguration,
  ApiConfiguration
};
//# sourceMappingURL=chunk-KUUI72I7.js.map
