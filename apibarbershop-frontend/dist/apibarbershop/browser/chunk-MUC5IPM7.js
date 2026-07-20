import {
  Divider,
  DividerModule
} from "./chunk-CFBUUP6X.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-LF77IHSS.js";
import {
  CardModule
} from "./chunk-P6YI4ZT2.js";
import {
  Router
} from "./chunk-Y5BHUAGJ.js";
import {
  CheckboxModule,
  DatePicker,
  DatePickerModule
} from "./chunk-O7RX2J2V.js";
import {
  Select,
  SelectModule
} from "./chunk-WVYDLWHZ.js";
import "./chunk-S7BWAJXG.js";
import "./chunk-4XYPE22V.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-SDDH54FL.js";
import "./chunk-ZM3B3NVI.js";
import "./chunk-JOO3LIF4.js";
import {
  Motion,
  MotionModule,
  transformToBoolean
} from "./chunk-ITVICGZ6.js";
import {
  Tag,
  TagModule
} from "./chunk-47QHBKBD.js";
import {
  apiappointmentinsert,
  apiappointmentuploadimage,
  apicustomerinsert,
  apiservicegetall,
  apiusergetall
} from "./chunk-U4NY7MLH.js";
import {
  Api,
  RequestBuilder
} from "./chunk-LXYPTV7U.js";
import "./chunk-KUUI72I7.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  Button,
  ButtonModule,
  C,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DecimalPipe,
  HttpResponse,
  Injectable,
  InjectionToken,
  Input,
  MessageService,
  NgModule,
  NgTemplateOutlet,
  Output,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  ViewEncapsulation,
  Y,
  __spreadProps,
  __spreadValues,
  computed,
  contentChild,
  contentChildren,
  effect,
  filter,
  forwardRef,
  inject,
  input,
  map,
  model,
  s2 as s,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JJSRJYGA.js";

// node_modules/@primeuix/styles/dist/stepper/index.mjs
var style = "\n    .p-steplist {\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        overflow-x: auto;\n    }\n\n    .p-step {\n        position: relative;\n        display: flex;\n        flex: 1 1 auto;\n        align-items: center;\n        gap: dt('stepper.step.gap');\n        padding: dt('stepper.step.padding');\n    }\n\n    .p-step:last-of-type {\n        flex: initial;\n    }\n\n    .p-step-header {\n        border: 0 none;\n        display: inline-flex;\n        align-items: center;\n        text-decoration: none;\n        cursor: pointer;\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration');\n        border-radius: dt('stepper.step.header.border.radius');\n        outline-color: transparent;\n        background: transparent;\n        padding: dt('stepper.step.header.padding');\n        gap: dt('stepper.step.header.gap');\n    }\n\n    .p-step-header:focus-visible {\n        box-shadow: dt('stepper.step.header.focus.ring.shadow');\n        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');\n        outline-offset: dt('stepper.step.header.focus.ring.offset');\n    }\n\n    .p-stepper.p-stepper-readonly .p-step {\n        cursor: auto;\n    }\n\n    .p-step-title {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        color: dt('stepper.step.title.color');\n        font-weight: dt('stepper.step.title.font.weight');\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration');\n    }\n\n    .p-step-number {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: dt('stepper.step.number.color');\n        border: 2px solid dt('stepper.step.number.border.color');\n        background: dt('stepper.step.number.background');\n        min-width: dt('stepper.step.number.size');\n        height: dt('stepper.step.number.size');\n        line-height: dt('stepper.step.number.size');\n        font-size: dt('stepper.step.number.font.size');\n        z-index: 1;\n        border-radius: dt('stepper.step.number.border.radius');\n        position: relative;\n        font-weight: dt('stepper.step.number.font.weight');\n    }\n\n    .p-step-number::after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: dt('stepper.step.number.border.radius');\n        box-shadow: dt('stepper.step.number.shadow');\n    }\n\n    .p-step-active .p-step-header {\n        cursor: default;\n    }\n\n    .p-step-active .p-step-number {\n        background: dt('stepper.step.number.active.background');\n        border-color: dt('stepper.step.number.active.border.color');\n        color: dt('stepper.step.number.active.color');\n    }\n\n    .p-step-active .p-step-title {\n        color: dt('stepper.step.title.active.color');\n    }\n\n    .p-step:not(.p-disabled):focus-visible {\n        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-step:has(~ .p-step-active) .p-stepper-separator {\n        background: dt('stepper.separator.active.background');\n    }\n\n    .p-stepper-separator {\n        flex: 1 1 0;\n        background: dt('stepper.separator.background');\n        width: 100%;\n        height: dt('stepper.separator.size');\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration');\n    }\n\n    .p-steppanels {\n        padding: dt('stepper.steppanels.padding');\n    }\n\n    .p-steppanel {\n        background: dt('stepper.steppanel.background');\n        color: dt('stepper.steppanel.color');\n    }\n\n    .p-stepper:has(.p-stepitem) {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-stepitem {\n        display: flex;\n        flex-direction: column;\n        flex: initial;\n    }\n\n    .p-stepitem.p-stepitem-active {\n        flex: 1 1 auto;\n    }\n\n    .p-stepitem .p-step {\n        flex: initial;\n    }\n    \n    .p-stepitem .p-steppanel {\n        display: grid;\n        grid-template-rows: 1fr;\n    }\n\n    .p-stepitem .p-steppanel-content-wrapper {\n        display: flex;\n        flex: 1 1 auto;\n        min-height: 0;\n    }\n    .p-stepitem .p-steppanel-content {\n        width: 100%;\n        padding: dt('stepper.steppanel.padding');\n        margin-inline-start: 1rem;\n    }\n\n    .p-stepitem .p-stepper-separator {\n        flex: 0 0 auto;\n        width: dt('stepper.separator.size');\n        height: auto;\n        margin: dt('stepper.separator.margin');\n        position: relative;\n        left: calc(-1 * dt('stepper.separator.size'));\n    }\n\n    .p-stepitem .p-stepper-separator:dir(rtl) {\n        left: calc(-9 * dt('stepper.separator.size'));\n    }\n\n    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {\n        background: dt('stepper.separator.active.background');\n    }\n\n    .p-stepitem:last-of-type .p-steppanel {\n        padding-inline-start: dt('stepper.step.number.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-stepper.mjs
var _c0 = ["*"];
var _c1 = ["content"];
var _c2 = (a0, a1, a2) => ({
  activateCallback: a0,
  value: a1,
  active: a2
});
function Step_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function Step_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function Step_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepClick());
    });
    \u0275\u0275elementStart(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 1);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, Step_Conditional_0_Conditional_5_Template, 1, 0, "p-stepper-separator");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275property("pBind", ctx_r1.ptm("header"))("tabindex", ctx_r1.isStepDisabled() ? -1 : void 0)("disabled", ctx_r1.isStepDisabled());
    \u0275\u0275attribute("id", ctx_r1.id())("role", "tab")("aria-controls", ctx_r1.ariaControls());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("number"));
    \u0275\u0275property("pBind", ctx_r1.ptm("number"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.value());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("title"));
    \u0275\u0275property("pBind", ctx_r1.ptm("title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isSeparatorVisible() ? 5 : -1);
  }
}
function Step_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Step_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function Step_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Step_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 2);
    \u0275\u0275conditionalCreate(1, Step_Conditional_1_Conditional_1_Template, 1, 0, "p-stepper-separator");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.content || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c2, ctx_r1.onStepClick.bind(ctx_r1), ctx_r1.value(), ctx_r1.active()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSeparatorVisible() ? 1 : -1);
  }
}
function StepPanel_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function StepPanel_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var classes$5 = {
  root: ({
    instance
  }) => ["p-stepitem", {
    "p-stepitem-active": instance.isActive()
  }]
};
var StepItemStyle = class _StepItemStyle extends BaseStyle {
  name = "stepitem";
  classes = classes$5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepItemStyle_BaseFactory;
    return function StepItemStyle_Factory(__ngFactoryType__) {
      return (\u0275StepItemStyle_BaseFactory || (\u0275StepItemStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepItemStyle)))(__ngFactoryType__ || _StepItemStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepItemStyle,
    factory: _StepItemStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepItemStyle, [{
    type: Injectable
  }], null, null);
})();
var StepItemClasses;
(function(StepItemClasses2) {
  StepItemClasses2["root"] = "p-stepitem";
})(StepItemClasses || (StepItemClasses = {}));
var classes$4 = {
  root: "p-steplist"
};
var StepListStyle = class _StepListStyle extends BaseStyle {
  name = "steplist";
  classes = classes$4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepListStyle_BaseFactory;
    return function StepListStyle_Factory(__ngFactoryType__) {
      return (\u0275StepListStyle_BaseFactory || (\u0275StepListStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepListStyle)))(__ngFactoryType__ || _StepListStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepListStyle,
    factory: _StepListStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepListStyle, [{
    type: Injectable
  }], null, null);
})();
var StepListClasses;
(function(StepListClasses2) {
  StepListClasses2["root"] = "p-stepitem";
})(StepListClasses || (StepListClasses = {}));
var classes$3 = {
  root: "p-steppanels"
};
var StepPanelsStyle = class _StepPanelsStyle extends BaseStyle {
  name = "steppanel";
  classes = classes$3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanelsStyle_BaseFactory;
    return function StepPanelsStyle_Factory(__ngFactoryType__) {
      return (\u0275StepPanelsStyle_BaseFactory || (\u0275StepPanelsStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanelsStyle)))(__ngFactoryType__ || _StepPanelsStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepPanelsStyle,
    factory: _StepPanelsStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanelsStyle, [{
    type: Injectable
  }], null, null);
})();
var StepPanelsClasses;
(function(StepPanelsClasses2) {
  StepPanelsClasses2["root"] = "p-steppanels";
})(StepPanelsClasses || (StepPanelsClasses = {}));
var classes$2 = {
  root: ({
    instance
  }) => ["p-steppanel", {
    "p-steppanel-active": instance.isVertical() && instance.active()
  }],
  contentWrapper: "p-steppanel-content-wrapper",
  content: "p-steppanel-content"
};
var StepPanelStyle = class _StepPanelStyle extends BaseStyle {
  name = "steppanel";
  classes = classes$2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanelStyle_BaseFactory;
    return function StepPanelStyle_Factory(__ngFactoryType__) {
      return (\u0275StepPanelStyle_BaseFactory || (\u0275StepPanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanelStyle)))(__ngFactoryType__ || _StepPanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepPanelStyle,
    factory: _StepPanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanelStyle, [{
    type: Injectable
  }], null, null);
})();
var StepPanelClasses;
(function(StepPanelClasses2) {
  StepPanelClasses2["root"] = "p-steppanel";
  StepPanelClasses2["contentWrapper"] = "p-steppanel-content-wrapper";
  StepPanelClasses2["content"] = "p-steppanel-content";
})(StepPanelClasses || (StepPanelClasses = {}));
var style2 = (
  /*css*/
  `
${style}

.p-steppanel .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`
);
var classes$1 = {
  root: ({
    instance
  }) => ["p-stepper p-component", {
    "p-readonly": instance.linear()
  }],
  separator: "p-stepper-separator"
};
var StepperStyle = class _StepperStyle extends BaseStyle {
  name = "stepper";
  style = style2;
  classes = classes$1;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepperStyle_BaseFactory;
    return function StepperStyle_Factory(__ngFactoryType__) {
      return (\u0275StepperStyle_BaseFactory || (\u0275StepperStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepperStyle)))(__ngFactoryType__ || _StepperStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepperStyle,
    factory: _StepperStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperStyle, [{
    type: Injectable
  }], null, null);
})();
var StepperClasses;
(function(StepperClasses2) {
  StepperClasses2["root"] = "p-stepper";
  StepperClasses2["separator"] = "p-stepper-separator";
})(StepperClasses || (StepperClasses = {}));
var classes = {
  root: ({
    instance
  }) => ["p-step", {
    "p-step-active": instance.active(),
    "p-disabled": instance.isStepDisabled()
  }],
  header: "p-step-header",
  number: "p-step-number",
  title: "p-step-title"
};
var StepStyle = class _StepStyle extends BaseStyle {
  name = "step";
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepStyle_BaseFactory;
    return function StepStyle_Factory(__ngFactoryType__) {
      return (\u0275StepStyle_BaseFactory || (\u0275StepStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepStyle)))(__ngFactoryType__ || _StepStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepStyle,
    factory: _StepStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepStyle, [{
    type: Injectable
  }], null, null);
})();
var StepClasses;
(function(StepClasses2) {
  StepClasses2["root"] = "p-step";
  StepClasses2["header"] = "p-step-header";
  StepClasses2["number"] = "p-step-number";
  StepClasses2["title"] = "p-step-title";
})(StepClasses || (StepClasses = {}));
var STEPPER_INSTANCE = new InjectionToken("STEPPER_INSTANCE");
var STEPLIST_INSTANCE = new InjectionToken("STEPLIST_INSTANCE");
var STEPITEM_INSTANCE = new InjectionToken("STEPITEM_INSTANCE");
var STEP_INSTANCE = new InjectionToken("STEP_INSTANCE");
var STEPPANEL_INSTANCE = new InjectionToken("STEPPANEL_INSTANCE");
var STEPPANELS_INSTANCE = new InjectionToken("STEPPANELS_INSTANCE");
var STEPPERSEPARATOR_INSTANCE = new InjectionToken("STEPPERSEPARATOR_INSTANCE");
var StepList = class _StepList extends BaseComponent {
  $pcStepList = inject(STEPLIST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "StepList";
  steps = contentChildren(forwardRef(() => Step), ...ngDevMode ? [{
    debugName: "steps"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _componentStyle = inject(StepListStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepList_BaseFactory;
    return function StepList_Factory(__ngFactoryType__) {
      return (\u0275StepList_BaseFactory || (\u0275StepList_BaseFactory = \u0275\u0275getInheritedFactory(_StepList)))(__ngFactoryType__ || _StepList);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepList,
    selectors: [["p-step-list"]],
    contentQueries: function StepList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.steps, Step, 4);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 2,
    hostBindings: function StepList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepListStyle, {
      provide: STEPLIST_INSTANCE,
      useExisting: _StepList
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepList
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepList, [{
    type: Component,
    args: [{
      selector: "p-step-list",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")'
      },
      providers: [StepListStyle, {
        provide: STEPLIST_INSTANCE,
        useExisting: StepList
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepList
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    steps: [{
      type: ContentChildren,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }]
  });
})();
var StepperSeparator = class _StepperSeparator extends BaseComponent {
  $pcStepperSeparator = inject(STEPPERSEPARATOR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "StepperSeparator";
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(StepperStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepperSeparator_BaseFactory;
    return function StepperSeparator_Factory(__ngFactoryType__) {
      return (\u0275StepperSeparator_BaseFactory || (\u0275StepperSeparator_BaseFactory = \u0275\u0275getInheritedFactory(_StepperSeparator)))(__ngFactoryType__ || _StepperSeparator);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepperSeparator,
    selectors: [["p-stepper-separator"]],
    hostVars: 2,
    hostBindings: function StepperSeparator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("separator"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepperStyle, {
      provide: STEPPERSEPARATOR_INSTANCE,
      useExisting: _StepperSeparator
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepperSeparator
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepperSeparator_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperSeparator, [{
    type: Component,
    args: [{
      selector: "p-stepper-separator",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("separator")'
      },
      providers: [StepperStyle, {
        provide: STEPPERSEPARATOR_INSTANCE,
        useExisting: StepperSeparator
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepperSeparator
      }],
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var StepItem = class _StepItem extends BaseComponent {
  $pcStepItem = inject(STEPITEM_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "StepItem";
  _componentStyle = inject(StepItemStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  pcStepper = inject(forwardRef(() => Stepper));
  /**
   * Value of step.
   * @type {<number | undefined>}
   * @defaultValue undefined
   * @group Props
   */
  value = model(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isActive = computed(() => this.pcStepper.value() === this.value(), ...ngDevMode ? [{
    debugName: "isActive"
  }] : (
    /* istanbul ignore next */
    []
  ));
  step = contentChild(forwardRef(() => Step), ...ngDevMode ? [{
    debugName: "step"
  }] : (
    /* istanbul ignore next */
    []
  ));
  stepPanel = contentChild(forwardRef(() => StepPanel), ...ngDevMode ? [{
    debugName: "stepPanel"
  }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    super();
    effect(() => {
      this.step().value.set(this.value());
    });
    effect(() => {
      this.stepPanel().value.set(this.value());
    });
  }
  static \u0275fac = function StepItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepItem,
    selectors: [["p-step-item"]],
    contentQueries: function StepItem_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.step, Step, 5)(dirIndex, ctx.stepPanel, StepPanel, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostVars: 3,
    hostBindings: function StepItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-active", ctx.isActive());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepItemStyle, {
      provide: STEPITEM_INSTANCE,
      useExisting: _StepItem
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepItem
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepItem, [{
    type: Component,
    args: [{
      selector: "p-step-item",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.data-p-active]": "isActive()"
      },
      providers: [StepItemStyle, {
        provide: STEPITEM_INSTANCE,
        useExisting: StepItem
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepItem
      }],
      hostDirectives: [Bind]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    step: [{
      type: ContentChild,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }],
    stepPanel: [{
      type: ContentChild,
      args: [forwardRef(() => StepPanel), {
        isSignal: true
      }]
    }]
  });
})();
var Step = class _Step extends BaseComponent {
  $pcStep = inject(STEP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "Step";
  pcStepper = inject(forwardRef(() => Stepper));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Active value of stepper.
   * @type {number}
   * @defaultValue undefined
   * @group Props
   */
  value = model(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether the step is disabled.
   * @type {boolean}
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (v) => transformToBoolean(v)
  }));
  active = computed(() => this.pcStepper.isStepActive(this.value()), ...ngDevMode ? [{
    debugName: "active"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isStepDisabled = computed(() => !this.active() && (this.pcStepper.linear() || this.disabled()), ...ngDevMode ? [{
    debugName: "isStepDisabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  id = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaControls = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isSeparatorVisible = computed(() => {
    if (this.pcStepper.stepList()) {
      const steps = this.pcStepper.stepList().steps();
      const index = steps.indexOf(this);
      const stepLen = steps.length;
      return index !== stepLen - 1;
    } else {
      return false;
    }
  }, ...ngDevMode ? [{
    debugName: "isSeparatorVisible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Content template.
   * @type {TemplateRef<StepContentTemplateContext>}
   * @group Templates
   */
  content;
  templates;
  _contentTemplate;
  _componentStyle = inject(StepStyle);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onStepClick() {
    this.pcStepper.updateValue(this.value());
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Step_BaseFactory;
    return function Step_Factory(__ngFactoryType__) {
      return (\u0275Step_BaseFactory || (\u0275Step_BaseFactory = \u0275\u0275getInheritedFactory(_Step)))(__ngFactoryType__ || _Step);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Step,
    selectors: [["p-step"]],
    contentQueries: function Step_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 6,
    hostBindings: function Step_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-current", ctx.active() ? "step" : void 0)("role", "presentation")("data-p-active", ctx.active())("data-p-disabled", ctx.isStepDisabled());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      disabled: [1, "disabled"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepStyle, {
      provide: STEP_INSTANCE,
      useExisting: _Step
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Step
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [["type", "button", 3, "click", "pBind", "tabindex", "disabled"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Step_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, Step_Conditional_0_Template, 6, 16)(1, Step_Conditional_1_Template, 2, 7);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.content && !ctx._contentTemplate ? 0 : 1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, StepperSeparator, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Step, [{
    type: Component,
    args: [{
      selector: "p-step",
      standalone: true,
      imports: [CommonModule, StepperSeparator, SharedModule, BindModule],
      template: `
        @if (!content && !_contentTemplate) {
            <button
                [attr.id]="id()"
                [class]="cx('header')"
                [pBind]="ptm('header')"
                [attr.role]="'tab'"
                [tabindex]="isStepDisabled() ? -1 : undefined"
                [attr.aria-controls]="ariaControls()"
                [disabled]="isStepDisabled()"
                (click)="onStepClick()"
                type="button"
            >
                <span [class]="cx('number')" [pBind]="ptm('number')">{{ value() }}</span>
                <span [class]="cx('title')" [pBind]="ptm('title')">
                    <ng-content></ng-content>
                </span>
            </button>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        } @else {
            <ng-container *ngTemplateOutlet="content || _contentTemplate; context: { activateCallback: onStepClick.bind(this), value: value(), active: active() }"></ng-container>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.aria-current]": 'active() ? "step" : undefined',
        "[attr.role]": '"presentation"',
        "[attr.data-p-active]": "active()",
        "[attr.data-p-disabled]": "isStepDisabled()"
      },
      providers: [StepStyle, {
        provide: STEP_INSTANCE,
        useExisting: Step
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Step
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    content: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var StepPanel = class _StepPanel extends BaseComponent {
  $pcStepPanel = inject(STEPPANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "StepPanel";
  pcStepper = inject(forwardRef(() => Stepper));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Active value of stepper.
   * @type {number}
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  active = computed(() => this.pcStepper.value() === this.value(), ...ngDevMode ? [{
    debugName: "active"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaControls = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : (
    /* istanbul ignore next */
    []
  ));
  id = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isVertical = computed(() => this.pcStepper.stepItems().length > 0, ...ngDevMode ? [{
    debugName: "isVertical"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isSeparatorVisible = computed(() => {
    if (this.pcStepper.stepItems()) {
      const stepLen = this.pcStepper.stepItems().length;
      const stepPanelElements = Y(this.pcStepper.el.nativeElement, '[data-pc-name="steppanel"]');
      const index = C(this.el.nativeElement, stepPanelElements);
      return index !== stepLen - 1;
    }
  }, ...ngDevMode ? [{
    debugName: "isSeparatorVisible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.pcStepper.computedMotionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Content template.
   * @param {StepPanelContentTemplateContext} context - Context of the template
   * @see {@link StepPanelContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  _componentStyle = inject(StepPanelStyle);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  updateValue(value) {
    this.pcStepper.updateValue(value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanel_BaseFactory;
    return function StepPanel_Factory(__ngFactoryType__) {
      return (\u0275StepPanel_BaseFactory || (\u0275StepPanel_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanel)))(__ngFactoryType__ || _StepPanel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepPanel,
    selectors: [["p-step-panel"]],
    contentQueries: function StepPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 5)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 7,
    hostBindings: function StepPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "tabpanel")("aria-controls", ctx.ariaControls())("id", ctx.id())("data-p-active", ctx.active())("data-pc-name", "steppanel");
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepPanelStyle, {
      provide: STEPPANEL_INSTANCE,
      useExisting: _StepPanel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepPanel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 16,
    consts: [["name", "p-collapsible", 3, "visible", "disabled", "options"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function StepPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-motion", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, StepPanel_Conditional_2_Template, 1, 0, "p-stepper-separator");
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275template(4, StepPanel_ng_container_4_Template, 1, 0, "ng-container", 2);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("visible", ctx.active())("disabled", !ctx.isVertical())("options", ctx.computedMotionOptions());
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("contentWrapper"));
        \u0275\u0275property("pBind", ctx.ptm("contentWrapper"));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSeparatorVisible() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(12, _c2, ctx.updateValue.bind(ctx), ctx.value(), ctx.active()));
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, StepperSeparator, SharedModule, BindModule, Bind, MotionModule, Motion],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanel, [{
    type: Component,
    args: [{
      selector: "p-step-panel",
      standalone: true,
      imports: [CommonModule, StepperSeparator, SharedModule, BindModule, MotionModule],
      template: `
        <p-motion [visible]="active()" name="p-collapsible" [disabled]="!isVertical()" [options]="computedMotionOptions()">
            <div [class]="cx('contentWrapper')" [pBind]="ptm('contentWrapper')">
                @if (isSeparatorVisible()) {
                    <p-stepper-separator />
                }
                <div [class]="cx('content')" [pBind]="ptm('content')">
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { activateCallback: updateValue.bind(this), value: value(), active: active() }"></ng-container>
                </div>
            </div>
        </p-motion>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.role]": '"tabpanel"',
        "[attr.aria-controls]": "ariaControls()",
        "[attr.id]": "id()",
        "[attr.data-p-active]": "active()",
        "[attr.data-pc-name]": '"steppanel"'
      },
      providers: [StepPanelStyle, {
        provide: STEPPANEL_INSTANCE,
        useExisting: StepPanel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepPanel
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var StepPanels = class _StepPanels extends BaseComponent {
  $pcStepPanels = inject(STEPPANELS_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "StepPanels";
  _componentStyle = inject(StepPanelsStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanels_BaseFactory;
    return function StepPanels_Factory(__ngFactoryType__) {
      return (\u0275StepPanels_BaseFactory || (\u0275StepPanels_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanels)))(__ngFactoryType__ || _StepPanels);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepPanels,
    selectors: [["p-step-panels"]],
    hostVars: 2,
    hostBindings: function StepPanels_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepPanelsStyle, {
      provide: STEPPANELS_INSTANCE,
      useExisting: _StepPanels
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepPanels
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepPanels_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanels, [{
    type: Component,
    args: [{
      selector: "p-step-panels",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")'
      },
      providers: [StepPanelsStyle, {
        provide: STEPPANELS_INSTANCE,
        useExisting: StepPanels
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepPanels
      }],
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var Stepper = class _Stepper extends BaseComponent {
  componentName = "Stepper";
  $pcStepper = inject(STEPPER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(StepperStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * A model that can hold a numeric value or be undefined.
   * @defaultValue undefined
   * @type {ModelSignal<number | undefined>}
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * A boolean variable that captures user input.
   * @defaultValue false
   * @type {InputSignalWithTransform<any, boolean >}
   * @group Props
   */
  linear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "linear"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (v) => transformToBoolean(v)
  }));
  /**
   * Transition options of the animation.
   * @defaultValue 400ms cubic-bezier(0.86, 0, 0.07, 1)
   * @type {InputSignal<string >}
   * @group Props
   * @deprecated since v21.0.0, use `motionOptions` instead.
   */
  transitionOptions = input("400ms cubic-bezier(0.86, 0, 0.07, 1)", ...ngDevMode ? [{
    debugName: "transitionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  id = signal(s("pn_id_"), ...ngDevMode ? [{
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  stepItems = contentChildren(StepItem, ...ngDevMode ? [{
    debugName: "stepItems"
  }] : (
    /* istanbul ignore next */
    []
  ));
  steps = contentChildren(Step, ...ngDevMode ? [{
    debugName: "steps"
  }] : (
    /* istanbul ignore next */
    []
  ));
  stepList = contentChild(StepList, ...ngDevMode ? [{
    debugName: "stepList"
  }] : (
    /* istanbul ignore next */
    []
  ));
  updateValue(value) {
    this.value.set(value);
  }
  isStepActive(value) {
    return this.value() === value;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Stepper_BaseFactory;
    return function Stepper_Factory(__ngFactoryType__) {
      return (\u0275Stepper_BaseFactory || (\u0275Stepper_BaseFactory = \u0275\u0275getInheritedFactory(_Stepper)))(__ngFactoryType__ || _Stepper);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Stepper,
    selectors: [["p-stepper"]],
    contentQueries: function Stepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.stepItems, StepItem, 4)(dirIndex, ctx.steps, Step, 4)(dirIndex, ctx.stepList, StepList, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(3);
      }
    },
    hostVars: 4,
    hostBindings: function Stepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "tablist")("id", ctx.id());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      linear: [1, "linear"],
      transitionOptions: [1, "transitionOptions"],
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepperStyle, {
      provide: STEPPER_INSTANCE,
      useExisting: _Stepper
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Stepper
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Stepper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Stepper, [{
    type: Component,
    args: [{
      selector: "p-stepper",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [StepperStyle, {
        provide: STEPPER_INSTANCE,
        useExisting: Stepper
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Stepper
      }],
      host: {
        "[class]": 'cx("root")',
        "[attr.role]": '"tablist"',
        "[attr.id]": "id()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    linear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "linear",
        required: false
      }]
    }],
    transitionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "transitionOptions",
        required: false
      }]
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    stepItems: [{
      type: ContentChildren,
      args: [forwardRef(() => StepItem), {
        isSignal: true
      }]
    }],
    steps: [{
      type: ContentChildren,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }],
    stepList: [{
      type: ContentChild,
      args: [forwardRef(() => StepList), {
        isSignal: true
      }]
    }]
  });
})();
var StepperModule = class _StepperModule {
  static \u0275fac = function StepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StepperModule,
    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule],
    exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperModule, [{
    type: NgModule,
    args: [{
      imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule],
      exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule]
    }]
  }], null, null);
})();

// src/app/page/web/appointment-booking/appointment-booking.ts
var _forTrack0 = ($index, $item) => $item.idService;
function AppointmentBooking_ng_template_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentBooking_ng_template_16_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentBooking_ng_template_16_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentBooking_ng_template_16_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1, "Solo n\xFAmeros, m\xEDnimo 7 d\xEDgitos.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentBooking_ng_template_16_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1, "Ingrese un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentBooking_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275text(3, " Ingresa tus datos de contacto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 21)(5, "div", 22)(6, "div", 23)(7, "label");
    \u0275\u0275text(8, "Nombres *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 24);
    \u0275\u0275conditionalCreate(10, AppointmentBooking_ng_template_16_Conditional_10_Template, 2, 0, "small", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23)(12, "label");
    \u0275\u0275text(13, "Apellidos *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 26);
    \u0275\u0275conditionalCreate(15, AppointmentBooking_ng_template_16_Conditional_15_Template, 2, 0, "small", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 23)(17, "label");
    \u0275\u0275text(18, "Tel\xE9fono / Celular *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 27);
    \u0275\u0275conditionalCreate(20, AppointmentBooking_ng_template_16_Conditional_20_Template, 2, 0, "small", 25);
    \u0275\u0275conditionalCreate(21, AppointmentBooking_ng_template_16_Conditional_21_Template, 2, 0, "small", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 23)(23, "label");
    \u0275\u0275text(24, "Correo electr\xF3nico ");
    \u0275\u0275elementStart(25, "span", 28);
    \u0275\u0275text(26, "(opcional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 29);
    \u0275\u0275conditionalCreate(28, AppointmentBooking_ng_template_16_Conditional_28_Template, 2, 0, "small", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 30)(30, "p-button", 31);
    \u0275\u0275listener("click", function AppointmentBooking_ng_template_16_Template_p_button_click_30_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToStep2());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r2.frmCustomer);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.firstNameFb.touched && ctx_r2.firstNameFb.hasError("required") ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.surNameFb.touched && ctx_r2.surNameFb.hasError("required") ? 15 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.phoneFb.touched && ctx_r2.phoneFb.hasError("required") ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.phoneFb.touched && ctx_r2.phoneFb.hasError("pattern") ? 21 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r2.emailFb.touched && ctx_r2.emailFb.hasError("email") ? 28 : -1);
  }
}
function AppointmentBooking_ng_template_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1, "Cargando servicios...");
    \u0275\u0275elementEnd();
  }
}
function AppointmentBooking_ng_template_19_Conditional_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 47);
  }
  if (rf & 2) {
    const service_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", service_r6.image, \u0275\u0275sanitizeUrl)("alt", service_r6.name);
  }
}
function AppointmentBooking_ng_template_19_Conditional_7_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementEnd();
  }
}
function AppointmentBooking_ng_template_19_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function AppointmentBooking_ng_template_19_Conditional_7_For_2_Template_div_click_0_listener() {
      const service_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleService(service_r6));
    });
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275element(2, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AppointmentBooking_ng_template_19_Conditional_7_For_2_Conditional_3_Template, 1, 2, "img", 47)(4, AppointmentBooking_ng_template_19_Conditional_7_For_2_Conditional_4_Template, 2, 0, "div", 48);
    \u0275\u0275elementStart(5, "div", 49)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 50)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275element(15, "i", 51);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const service_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r2.isServiceSelected(service_r6));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pi-check-circle", ctx_r2.isServiceSelected(service_r6))("pi-circle", !ctx_r2.isServiceSelected(service_r6));
    \u0275\u0275advance();
    \u0275\u0275conditional(service_r6.image ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(service_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r6.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(13, 11, service_r6.price, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", service_r6.durationMinutes, " min");
  }
}
function AppointmentBooking_ng_template_19_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 53)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedServices.length, " servicio(s) seleccionado(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Total: S/ ", \u0275\u0275pipeBind2(6, 3, ctx_r2.totalPrice, "1.2-2"), " \xB7 ", ctx_r2.totalMinutes, " min");
  }
}
function AppointmentBooking_ng_template_19_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 55);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Haz clic para elegir una imagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5, "JPG, PNG, WEBP o GIF \xB7 m\xE1x. 5MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "input", 57);
    \u0275\u0275listener("change", function AppointmentBooking_ng_template_19_Conditional_7_Conditional_11_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onReferenceImageSelected($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.selectedServices.length > 0);
  }
}
function AppointmentBooking_ng_template_19_Conditional_7_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "img", 58);
    \u0275\u0275elementStart(2, "button", 59);
    \u0275\u0275listener("click", function AppointmentBooking_ng_template_19_Conditional_7_Conditional_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeReferenceImage());
    });
    \u0275\u0275element(3, "i", 60);
    \u0275\u0275text(4, " Quitar imagen ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.referenceImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function AppointmentBooking_ng_template_19_Conditional_7_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.referenceImageError);
  }
}
function AppointmentBooking_ng_template_19_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275repeaterCreate(1, AppointmentBooking_ng_template_19_Conditional_7_For_2_Template, 17, 14, "div", 37, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AppointmentBooking_ng_template_19_Conditional_7_Conditional_3_Template, 7, 6, "div", 38);
    \u0275\u0275elementStart(4, "div", 39)(5, "span");
    \u0275\u0275text(6, "o");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "div", 41);
    \u0275\u0275element(9, "i", 42);
    \u0275\u0275text(10, " Env\xEDa una imagen de referencia del corte/estilo ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, AppointmentBooking_ng_template_19_Conditional_7_Conditional_11_Template, 7, 1)(12, AppointmentBooking_ng_template_19_Conditional_7_Conditional_12_Template, 5, 1, "div", 43);
    \u0275\u0275conditionalCreate(13, AppointmentBooking_ng_template_19_Conditional_7_Conditional_13_Template, 2, 1, "small", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("disabled-block", ctx_r2.hasReferenceImage);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.services);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedServices.length > 0 ? 3 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("disabled-block", ctx_r2.selectedServices.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r2.referenceImagePreview ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.referenceImageError ? 13 : -1);
  }
}
function AppointmentBooking_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "i", 32);
    \u0275\u0275text(3, " Selecciona los servicios que deseas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 33);
    \u0275\u0275text(5, " \xBFNo sabes exactamente qu\xE9 servicio necesitas? Puedes omitir esta selecci\xF3n y enviarnos una imagen de referencia del corte o estilo que quieres. ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AppointmentBooking_ng_template_19_Conditional_6_Template, 2, 0, "p", 34)(7, AppointmentBooking_ng_template_19_Conditional_7_Template, 14, 7);
    \u0275\u0275elementStart(8, "div", 30)(9, "p-button", 35);
    \u0275\u0275listener("click", function AppointmentBooking_ng_template_19_Template_p_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeStep = 0);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 31);
    \u0275\u0275listener("click", function AppointmentBooking_ng_template_19_Template_p_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToStep3());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.loading ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275property("outlined", true);
  }
}
function AppointmentBooking_ng_template_22_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const barber_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", barber_r10.firstName, " ", barber_r10.surName);
  }
}
function AppointmentBooking_ng_template_22_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const barber_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", barber_r11.firstName, " ", barber_r11.surName);
  }
}
function AppointmentBooking_ng_template_22_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1, "Seleccione un barbero.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentBooking_ng_template_22_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1, "Seleccione una fecha.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentBooking_ng_template_22_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1, "Seleccione una hora disponible.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentBooking_ng_template_22_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1, "No hay horas disponibles en esta fecha.");
    \u0275\u0275elementEnd();
  }
}
function AppointmentBooking_ng_template_22_Conditional_32_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(5, 2, s_r12.price, "1.2-2"));
  }
}
function AppointmentBooking_ng_template_22_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "h4", 69);
    \u0275\u0275text(2, "Resumen de tu reserva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275repeaterCreate(4, AppointmentBooking_ng_template_22_Conditional_32_For_5_Template, 6, 5, "div", 71, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "p-divider");
    \u0275\u0275elementStart(7, "div", 72)(8, "strong");
    \u0275\u0275text(9, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 71)(14, "span", 73);
    \u0275\u0275text(15, "Duraci\xF3n estimada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 73);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.selectedServices);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(12, 2, ctx_r2.totalPrice, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.totalMinutes, " minutos");
  }
}
function AppointmentBooking_ng_template_22_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "h4", 69);
    \u0275\u0275text(2, "Resumen de tu reserva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71)(4, "span");
    \u0275\u0275element(5, "i", 42);
    \u0275\u0275text(6, " Servicio a definir seg\xFAn imagen de referencia");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "img", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx_r2.referenceImagePreview, \u0275\u0275sanitizeUrl);
  }
}
function AppointmentBooking_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275text(3, " Elige tu barbero, fecha y hora ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 21)(5, "div", 22)(6, "div", 62)(7, "label");
    \u0275\u0275text(8, "Barbero *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-select", 63);
    \u0275\u0275template(10, AppointmentBooking_ng_template_22_ng_template_10_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, AppointmentBooking_ng_template_22_ng_template_12_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, AppointmentBooking_ng_template_22_Conditional_14_Template, 2, 0, "small", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 23)(16, "label");
    \u0275\u0275text(17, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "p-datepicker", 64);
    \u0275\u0275conditionalCreate(19, AppointmentBooking_ng_template_22_Conditional_19_Template, 2, 0, "small", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 23)(21, "label");
    \u0275\u0275text(22, "Hora de inicio *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "p-select", 65);
    \u0275\u0275conditionalCreate(24, AppointmentBooking_ng_template_22_Conditional_24_Template, 2, 0, "small", 25);
    \u0275\u0275conditionalCreate(25, AppointmentBooking_ng_template_22_Conditional_25_Template, 2, 0, "small", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 62)(27, "label");
    \u0275\u0275text(28, "Observaciones ");
    \u0275\u0275elementStart(29, "span", 28);
    \u0275\u0275text(30, "(opcional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "textarea", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(32, AppointmentBooking_ng_template_22_Conditional_32_Template, 18, 5, "div", 67)(33, AppointmentBooking_ng_template_22_Conditional_33_Template, 8, 1, "div", 67);
    \u0275\u0275elementStart(34, "div", 30)(35, "p-button", 35);
    \u0275\u0275listener("click", function AppointmentBooking_ng_template_22_Template_p_button_click_35_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeStep = 1);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p-button", 68);
    \u0275\u0275listener("click", function AppointmentBooking_ng_template_22_Template_p_button_click_36_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendBooking());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r2.frmAppointment);
    \u0275\u0275advance(5);
    \u0275\u0275property("options", ctx_r2.barbers);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.barberFb.touched && ctx_r2.barberFb.hasError("required") ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("minDate", ctx_r2.minDate);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.dateFb.touched && ctx_r2.dateFb.hasError("required") ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.availableHours)("loading", ctx_r2.loadingHours)("disabled", !ctx_r2.barberFb.value || !ctx_r2.dateFb.value || ctx_r2.availableHours.length === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.startHourFb.touched && ctx_r2.startHourFb.hasError("required") ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.loadingHours && ctx_r2.barberFb.value && ctx_r2.dateFb.value && ctx_r2.availableHours.length === 0 ? 25 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r2.selectedServices.length > 0 ? 32 : ctx_r2.hasReferenceImage ? 33 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.sendingCustomer || ctx_r2.sendingAppointment || ctx_r2.uploadingImage);
  }
}
function AppointmentBooking_ng_template_25_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 81);
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    \u0275\u0275property("value", s_r14.name);
  }
}
function AppointmentBooking_ng_template_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 82);
  }
}
function AppointmentBooking_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275element(2, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 78);
    \u0275\u0275text(4, "\xA1Reserva realizada!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 79);
    \u0275\u0275text(6, "Tu cita ha sido registrada exitosamente. Te esperamos pronto.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 80);
    \u0275\u0275repeaterCreate(8, AppointmentBooking_ng_template_25_For_9_Template, 1, 1, "p-tag", 81, _forTrack0);
    \u0275\u0275conditionalCreate(10, AppointmentBooking_ng_template_25_Conditional_10_Template, 1, 0, "p-tag", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 83);
    \u0275\u0275element(12, "i", 84);
    \u0275\u0275text(13, " Llega 5 minutos antes de tu cita. Ante cualquier cambio, cont\xE1ctanos. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-button", 85);
    \u0275\u0275listener("click", function AppointmentBooking_ng_template_25_Template_p_button_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goHome());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.selectedServices);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedServices.length === 0 && ctx_r2.hasReferenceImage ? 10 : -1);
  }
}
function apibarberscheduleavailablehours(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/barberschedule/availablehours/${params.idUser}/${params.date}`, "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
var AppointmentBooking = class _AppointmentBooking {
  api = inject(Api);
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  messageService = inject(MessageService);
  cdr = inject(ChangeDetectorRef);
  // ── Datos del backend ──
  services = [];
  barbers = [];
  loading = true;
  availableHours = [];
  loadingHours = false;
  // ── Stepper ──
  activeStep = 0;
  // ── Formulario cliente ──
  frmCustomer;
  get firstNameFb() {
    return this.frmCustomer.controls["firstName"];
  }
  get surNameFb() {
    return this.frmCustomer.controls["surName"];
  }
  get phoneFb() {
    return this.frmCustomer.controls["phone"];
  }
  get emailFb() {
    return this.frmCustomer.controls["email"];
  }
  // ── Selección de servicios ──
  selectedServices = [];
  // ── Alternativa: imagen de referencia (cuando el cliente no sabe qué servicio elegir) ──
  referenceImageFile = null;
  referenceImagePreview = null;
  referenceImageError = "";
  uploadingImage = false;
  // ── Formulario reserva ──
  frmAppointment;
  get barberFb() {
    return this.frmAppointment.controls["barber"];
  }
  get dateFb() {
    return this.frmAppointment.controls["date"];
  }
  get startHourFb() {
    return this.frmAppointment.controls["startHour"];
  }
  get observationFb() {
    return this.frmAppointment.controls["observation"];
  }
  minDate = /* @__PURE__ */ new Date();
  // ── Resultado ──
  sendingCustomer = false;
  sendingAppointment = false;
  createdCustomerId = "";
  bookingSuccess = false;
  constructor() {
    this.frmCustomer = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      surName: ["", [Validators.required]],
      phone: ["", [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
      email: ["", [Validators.email]]
    });
    this.frmAppointment = this.formBuilder.group({
      barber: ["", [Validators.required]],
      date: ["", [Validators.required]],
      startHour: ["", [Validators.required]],
      observation: [""]
    });
    this.barberFb.valueChanges.subscribe(() => this.fetchAvailableHours());
    this.dateFb.valueChanges.subscribe(() => this.fetchAvailableHours());
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    Promise.all([
      this.api.invoke(apiservicegetall),
      this.api.invoke(apiusergetall)
    ]).then(([services, users]) => {
      const parse = (r) => typeof r === "string" ? JSON.parse(r) : r;
      this.services = (parse(services)?.listService ?? []).filter((x) => x.status === 1);
      this.barbers = (parse(users)?.listUser ?? []).filter((x) => x.role === "BARBER" && x.status === 1);
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
    });
  }
  // ── Paso 1: Datos del cliente ──
  goToStep2() {
    if (!this.frmCustomer.valid) {
      this.frmCustomer.markAllAsTouched();
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "Complete sus datos correctamente." });
      return;
    }
    this.activeStep = 1;
  }
  // ── Paso 2: Selección de servicios ──
  toggleService(service) {
    if (this.referenceImageFile)
      return;
    const idx = this.selectedServices.findIndex((s2) => s2.idService === service.idService);
    if (idx >= 0) {
      this.selectedServices.splice(idx, 1);
    } else {
      this.selectedServices.push(service);
    }
  }
  isServiceSelected(service) {
    return this.selectedServices.some((s2) => s2.idService === service.idService);
  }
  get totalPrice() {
    return this.selectedServices.reduce((sum, s2) => sum + Number(s2.price), 0);
  }
  get totalMinutes() {
    return this.selectedServices.reduce((sum, s2) => sum + Number(s2.durationMinutes), 0);
  }
  get hasReferenceImage() {
    return !!this.referenceImageFile;
  }
  // ── Imagen de referencia ──
  onReferenceImageSelected(event) {
    if (this.selectedServices.length > 0)
      return;
    const input2 = event.target;
    const file = input2.files?.[0];
    if (!file)
      return;
    this.referenceImageError = "";
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      this.referenceImageError = "Solo se permiten im\xE1genes (jpg, png, webp, gif).";
      input2.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.referenceImageError = "La imagen no debe superar los 5MB.";
      input2.value = "";
      return;
    }
    this.referenceImageFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.referenceImagePreview = reader.result;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
    input2.value = "";
  }
  removeReferenceImage() {
    this.referenceImageFile = null;
    this.referenceImagePreview = null;
    this.referenceImageError = "";
  }
  goToStep3() {
    if (this.selectedServices.length === 0 && !this.referenceImageFile) {
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "Seleccione al menos un servicio o adjunte una imagen de referencia." });
      return;
    }
    this.activeStep = 2;
  }
  // ── Paso 3: Barbero, fecha, hora ──
  formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  fetchAvailableHours() {
    const barber = this.barberFb.value;
    const date = this.dateFb.value;
    this.availableHours = [];
    this.startHourFb.setValue("");
    if (!barber?.idUser || !date)
      return;
    this.loadingHours = true;
    const dateStr = this.formatDate(date);
    this.api.invoke(apibarberscheduleavailablehours, { idUser: barber.idUser, date: dateStr }).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      if (data?.type === "success") {
        this.availableHours = data.listAvailableHours || [];
      } else {
        this.availableHours = [];
      }
    }).catch(() => {
      this.availableHours = [];
    }).finally(() => {
      this.loadingHours = false;
      this.cdr.detectChanges();
    });
  }
  calcEndHour(startHour, minutes) {
    const [h, m] = startHour.split(":").map(Number);
    const total = h * 60 + m + minutes;
    return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
  }
  sendBooking() {
    if (!this.frmAppointment.valid) {
      this.frmAppointment.markAllAsTouched();
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "Complete todos los datos de la reserva." });
      return;
    }
    this.sendingCustomer = true;
    const customerParams = {
      body: {
        firstName: this.firstNameFb.value,
        surName: this.surNameFb.value,
        phone: this.phoneFb.value,
        email: this.emailFb.value ?? ""
      }
    };
    this.api.invoke(apicustomerinsert, customerParams).then((customerRes) => {
      const cr = typeof customerRes === "string" ? JSON.parse(customerRes) : customerRes;
      if (cr.type !== "success" || !cr.idCustomer) {
        this.messageService.add({ severity: "error", summary: "Error", detail: cr.listMessage?.[0] ?? "No se pudo registrar el cliente." });
        this.sendingCustomer = false;
        return;
      }
      this.createdCustomerId = cr.idCustomer;
      this.sendingCustomer = false;
      this.sendingAppointment = true;
      const startHour = this.startHourFb.value + ":00";
      const estimatedMinutes = this.totalMinutes > 0 ? this.totalMinutes : 30;
      const endHour = this.calcEndHour(this.startHourFb.value, estimatedMinutes) + ":00";
      const dateStr = this.formatDate(this.dateFb.value);
      const observationText = this.hasReferenceImage && this.selectedServices.length === 0 ? `[Servicio a definir seg\xFAn imagen de referencia] ${this.observationFb.value ?? ""}`.trim() : this.observationFb.value ?? "";
      const appointmentParams = {
        body: {
          idCustomer: this.createdCustomerId,
          idUser: this.barberFb.value.idUser,
          appointmentDate: dateStr,
          startHour,
          endHour,
          total: this.totalPrice,
          observation: observationText,
          details: this.selectedServices.map((s2) => ({ idService: s2.idService, price: Number(s2.price) }))
        }
      };
      this.api.invoke(apiappointmentinsert, appointmentParams).then((aptRes) => {
        const ar = typeof aptRes === "string" ? JSON.parse(aptRes) : aptRes;
        if (ar.type !== "success") {
          this.messageService.add({ severity: "error", summary: "Error", detail: ar.listMessage?.[0] ?? "No se pudo crear la reserva." });
          this.sendingAppointment = false;
          this.cdr.detectChanges();
          return;
        }
        if (this.referenceImageFile && ar.idAppointment) {
          this.uploadingImage = true;
          const uploadParams = {
            idAppointment: ar.idAppointment,
            body: { file: this.referenceImageFile }
          };
          this.api.invoke(apiappointmentuploadimage, uploadParams).then(() => {
            this.uploadingImage = false;
          }).catch(() => {
            this.uploadingImage = false;
            this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "La reserva se cre\xF3, pero no se pudo subir la imagen de referencia." });
          }).finally(() => {
            this.bookingSuccess = true;
            this.activeStep = 3;
            this.sendingAppointment = false;
            this.cdr.detectChanges();
          });
        } else {
          this.bookingSuccess = true;
          this.activeStep = 3;
          this.sendingAppointment = false;
          this.cdr.detectChanges();
        }
      }).catch(() => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error al crear la reserva." });
        this.sendingAppointment = false;
      });
    }).catch(() => {
      this.messageService.add({ severity: "error", summary: "Error", detail: "Error al registrar el cliente." });
      this.sendingCustomer = false;
    });
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  static \u0275fac = function AppointmentBooking_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppointmentBooking)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppointmentBooking, selectors: [["app-appointment-booking"]], decls: 27, vars: 7, consts: [["content", ""], ["selectedItem", ""], ["item", ""], [1, "booking-navbar"], [1, "booking-navbar-inner"], [1, "booking-logo", 2, "cursor", "pointer", 3, "click"], [1, "pi", "pi-scissors"], ["label", "Volver al inicio", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "click", "text"], [1, "booking-page"], [1, "booking-container"], [1, "booking-header"], [1, "booking-title"], [1, "booking-sub"], [3, "valueChange", "value", "linear"], ["header", "Tus datos", 3, "value"], ["header", "Servicios", 3, "value"], ["header", "Horario", 3, "value"], ["header", "Confirmaci\xF3n", 3, "value"], [1, "step-content"], [1, "step-section-title"], [1, "pi", "pi-user", "text-blue-500"], [3, "formGroup"], [1, "form-grid"], [1, "form-field"], ["pInputText", "", "formControlName", "firstName", "placeholder", "Ej: Juan", 1, "w-full"], [1, "errorMessage"], ["pInputText", "", "formControlName", "surName", "placeholder", "Ej: Condori", 1, "w-full"], ["pInputText", "", "formControlName", "phone", "placeholder", "Ej: 987654321", 1, "w-full"], [1, "optional-label"], ["pInputText", "", "formControlName", "email", "placeholder", "Ej: juan@gmail.com", 1, "w-full"], [1, "step-footer"], ["label", "Continuar", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "click"], [1, "pi", "pi-tag", "text-purple-500"], [1, "step-section-hint"], [1, "text-center", "text-slate-400", "py-8"], ["label", "Atr\xE1s", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "click", "outlined"], [1, "services-select-grid"], [1, "service-select-card", 3, "selected"], [1, "selection-summary"], [1, "reference-divider"], [1, "reference-image-box"], [1, "reference-image-title"], [1, "pi", "pi-image", "text-blue-500"], [1, "reference-image-preview"], [1, "service-select-card", 3, "click"], [1, "service-select-check"], [1, "pi"], [1, "service-select-img", 3, "src", "alt"], [1, "service-select-img-placeholder"], [1, "service-select-body"], [1, "service-select-meta"], [1, "pi", "pi-clock"], [1, "pi", "pi-scissors", "text-3xl", "text-slate-300"], [1, "summary-row"], [1, "summary-total"], ["for", "referenceImageInput", 1, "reference-image-dropzone"], [1, "pi", "pi-cloud-upload", "text-3xl", "text-slate-400"], ["id", "referenceImageInput", "type", "file", "accept", "image/jpeg,image/png,image/webp,image/gif", 1, "reference-image-input", 3, "change", "disabled"], ["alt", "Referencia seleccionada", 3, "src"], ["type", "button", 1, "reference-image-remove", 3, "click"], [1, "pi", "pi-times"], [1, "pi", "pi-calendar", "text-orange-500"], [1, "form-field", "form-field--full"], ["formControlName", "barber", "optionLabel", "firstName", "placeholder", "Selecciona un barbero", 1, "w-full", 3, "options"], ["formControlName", "date", "dateFormat", "yy-mm-dd", "placeholder", "Selecciona la fecha", 1, "w-full", 3, "minDate"], ["formControlName", "startHour", "placeholder", "Seleccione la hora", 1, "w-full", 3, "options", "loading", "disabled"], ["pTextarea", "", "formControlName", "observation", "rows", "3", "placeholder", "Ej: Quiero degradado alto con dise\xF1o en la sien...", 1, "w-full"], [1, "booking-summary"], ["label", "Confirmar Reserva", "icon", "pi pi-check", 3, "click", "loading"], [1, "summary-title"], [1, "summary-services"], [1, "summary-service-row"], [1, "summary-service-row", "summary-total-row"], [1, "text-slate-400", "text-sm"], ["alt", "Referencia seleccionada", 1, "summary-reference-img", 3, "src"], [1, "step-content", "success-step"], [1, "success-icon"], [1, "pi", "pi-check-circle"], [1, "success-title"], [1, "success-sub"], [1, "success-details"], ["severity", "success", 1, "m-1", 3, "value"], ["value", "Servicio a definir seg\xFAn imagen de referencia", "severity", "info", 1, "m-1"], [1, "success-note"], [1, "pi", "pi-info-circle"], ["label", "Volver al inicio", "icon", "pi pi-home", 3, "click"]], template: function AppointmentBooking_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "header", 3)(1, "div", 4)(2, "div", 5);
      \u0275\u0275listener("click", function AppointmentBooking_Template_div_click_2_listener() {
        return ctx.goHome();
      });
      \u0275\u0275element(3, "i", 6);
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "BarberShop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p-button", 7);
      \u0275\u0275listener("click", function AppointmentBooking_Template_p_button_click_6_listener() {
        return ctx.goHome();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "h1", 11);
      \u0275\u0275text(11, "Reserva tu Cita");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 12);
      \u0275\u0275text(13, "Completa los pasos para asegurar tu lugar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p-stepper", 13);
      \u0275\u0275twoWayListener("valueChange", function AppointmentBooking_Template_p_stepper_valueChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.activeStep, $event) || (ctx.activeStep = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(15, "p-step-panel", 14);
      \u0275\u0275template(16, AppointmentBooking_ng_template_16_Template, 31, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-step-panel", 15);
      \u0275\u0275template(19, AppointmentBooking_ng_template_19_Template, 11, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p-step-panel", 16);
      \u0275\u0275template(22, AppointmentBooking_ng_template_22_Template, 37, 13, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p-step-panel", 17);
      \u0275\u0275template(25, AppointmentBooking_ng_template_25_Template, 15, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("text", true);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("value", ctx.activeStep);
      \u0275\u0275property("linear", true);
      \u0275\u0275advance();
      \u0275\u0275property("value", 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", 1);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", 2);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", 3);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    SelectModule,
    Select,
    DatePickerModule,
    DatePicker,
    CheckboxModule,
    StepperModule,
    Stepper,
    StepPanel,
    CardModule,
    TagModule,
    Tag,
    DividerModule,
    Divider,
    DecimalPipe
  ], styles: ['\n.booking-navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.booking-navbar-inner[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.booking-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #ffffff;\n}\n.booking-logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.booking-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  background: #f8fafc;\n  padding: 2.5rem 1.5rem;\n}\n.booking-container[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0 auto;\n}\n.booking-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n.booking-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 0.5rem;\n}\n.booking-sub[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.step-content[_ngcontent-%COMP%] {\n  padding: 1.5rem 0;\n}\n.step-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 1.5rem;\n}\n.step-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field--full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.services-select-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.service-select-card[_ngcontent-%COMP%] {\n  position: relative;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition:\n    border-color 0.2s,\n    transform 0.2s,\n    box-shadow 0.2s;\n  background: #ffffff;\n}\n.service-select-card[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n  transform: translateY(-2px);\n}\n.service-select-card.selected[_ngcontent-%COMP%] {\n  border-color: #0f172a;\n  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.12);\n}\n.service-select-check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.6rem;\n  right: 0.6rem;\n  font-size: 1.3rem;\n  color: #0f172a;\n  z-index: 2;\n}\n.service-select-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 130px;\n  object-fit: cover;\n}\n.service-select-img-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 130px;\n  background: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.service-select-body[_ngcontent-%COMP%] {\n  padding: 0.875rem;\n}\n.service-select-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.3rem;\n}\n.service-select-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0 0 0.75rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.service-select-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.85rem;\n}\n.service-select-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.service-select-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.selection-summary[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 10px;\n  padding: 0.875rem 1.25rem;\n  margin-top: 1rem;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.875rem;\n  color: #166534;\n  font-weight: 500;\n}\n.summary-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.booking-summary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.25rem;\n  margin-top: 1.5rem;\n}\n.summary-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1rem;\n}\n.summary-services[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.summary-service-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.summary-total-row[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.summary-reference-img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 220px;\n  max-height: 220px;\n  border-radius: 10px;\n  margin-top: 0.75rem;\n  border: 1px solid #e2e8f0;\n  object-fit: cover;\n}\n.step-section-hint[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: -0.5rem 0 1rem;\n}\n.reference-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin: 1.5rem 0;\n}\n.reference-divider[_ngcontent-%COMP%]::before, \n.reference-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid #e2e8f0;\n}\n.reference-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.reference-image-box[_ngcontent-%COMP%] {\n  border: 1px dashed #cbd5e1;\n  border-radius: 12px;\n  padding: 1.25rem;\n  background: #f8fafc;\n  transition: opacity 0.2s ease;\n}\n.reference-image-box.disabled-block[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.services-select-grid.disabled-block[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.reference-image-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0.875rem;\n}\n.reference-image-dropzone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 1.75rem 1rem;\n  border: 1.5px dashed #94a3b8;\n  border-radius: 10px;\n  background: #ffffff;\n  cursor: pointer;\n  color: #475569;\n  font-size: 0.875rem;\n  text-align: center;\n  transition: border-color 0.2s ease, background 0.2s ease;\n}\n.reference-image-dropzone[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.reference-image-dropzone[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.reference-image-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  opacity: 0;\n}\n.reference-image-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.reference-image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 240px;\n  max-height: 240px;\n  border-radius: 10px;\n  object-fit: cover;\n  border: 1px solid #e2e8f0;\n}\n.reference-image-remove[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  border: none;\n  background: #fee2e2;\n  color: #b91c1c;\n  font-size: 0.8rem;\n  font-weight: 600;\n  padding: 0.4rem 0.875rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.reference-image-remove[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n.success-step[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1.5rem;\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #22c55e;\n  margin-bottom: 1rem;\n}\n.success-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.75rem;\n}\n.success-sub[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1rem;\n  margin: 0 0 1.5rem;\n}\n.success-details[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.success-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  color: #64748b;\n  font-size: 0.85rem;\n  margin-bottom: 2rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 0.75rem 1.25rem;\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-field--full[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .services-select-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .step-footer[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .step-footer[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=appointment-booking.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppointmentBooking, [{
    type: Component,
    args: [{ selector: "app-appointment-booking", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      ButtonModule,
      InputTextModule,
      TextareaModule,
      SelectModule,
      DatePickerModule,
      CheckboxModule,
      StepperModule,
      CardModule,
      TagModule,
      DividerModule
    ], template: `<!-- NAVBAR m\xEDnima -->
<header class="booking-navbar">
  <div class="booking-navbar-inner">
    <div class="booking-logo" (click)="goHome()" style="cursor:pointer">
      <i class="pi pi-scissors"></i>
      <span>BarberShop</span>
    </div>
    <p-button label="Volver al inicio" icon="pi pi-arrow-left" [text]="true" severity="secondary" (click)="goHome()" />
  </div>
</header>

<div class="booking-page">
  <div class="booking-container">

    <!-- T\xEDtulo -->
    <div class="booking-header">
      <h1 class="booking-title">Reserva tu Cita</h1>
      <p class="booking-sub">Completa los pasos para asegurar tu lugar</p>
    </div>

    <!-- \u2550\u2550 STEPPER \u2550\u2550 -->
    <p-stepper [(value)]="activeStep" [linear]="true">

      <!-- \u2500\u2500 PASO 1: Tus datos \u2500\u2500 -->
      <p-step-panel header="Tus datos" [value]="0">
        <ng-template #content>
          <div class="step-content">
            <div class="step-section-title">
              <i class="pi pi-user text-blue-500"></i>
              Ingresa tus datos de contacto
            </div>

            <form [formGroup]="frmCustomer">
              <div class="form-grid">

                <div class="form-field">
                  <label>Nombres *</label>
                  <input pInputText formControlName="firstName" placeholder="Ej: Juan" class="w-full" />
                  @if(firstNameFb.touched && firstNameFb.hasError('required')) {
                    <small class="errorMessage">Campo requerido.</small>
                  }
                </div>

                <div class="form-field">
                  <label>Apellidos *</label>
                  <input pInputText formControlName="surName" placeholder="Ej: Condori" class="w-full" />
                  @if(surNameFb.touched && surNameFb.hasError('required')) {
                    <small class="errorMessage">Campo requerido.</small>
                  }
                </div>

                <div class="form-field">
                  <label>Tel\xE9fono / Celular *</label>
                  <input pInputText formControlName="phone" placeholder="Ej: 987654321" class="w-full" />
                  @if(phoneFb.touched && phoneFb.hasError('required')) {
                    <small class="errorMessage">Campo requerido.</small>
                  }
                  @if(phoneFb.touched && phoneFb.hasError('pattern')) {
                    <small class="errorMessage">Solo n\xFAmeros, m\xEDnimo 7 d\xEDgitos.</small>
                  }
                </div>

                <div class="form-field">
                  <label>Correo electr\xF3nico <span class="optional-label">(opcional)</span></label>
                  <input pInputText formControlName="email" placeholder="Ej: juan@gmail.com" class="w-full" />
                  @if(emailFb.touched && emailFb.hasError('email')) {
                    <small class="errorMessage">Ingrese un correo v\xE1lido.</small>
                  }
                </div>

              </div>
            </form>

            <div class="step-footer">
              <p-button label="Continuar" icon="pi pi-arrow-right" iconPos="right" (click)="goToStep2()" />
            </div>
          </div>
        </ng-template>
      </p-step-panel>

      <!-- \u2500\u2500 PASO 2: Servicios \u2500\u2500 -->
      <p-step-panel header="Servicios" [value]="1">
        <ng-template #content>
          <div class="step-content">
            <div class="step-section-title">
              <i class="pi pi-tag text-purple-500"></i>
              Selecciona los servicios que deseas
            </div>
            <p class="step-section-hint">
              \xBFNo sabes exactamente qu\xE9 servicio necesitas? Puedes omitir esta selecci\xF3n y enviarnos una imagen de referencia del corte o estilo que quieres.
            </p>

            @if(loading) {
              <p class="text-center text-slate-400 py-8">Cargando servicios...</p>
            } @else {
              <div class="services-select-grid" [class.disabled-block]="hasReferenceImage">
                @for(service of services; track service.idService) {
                  <div
                    class="service-select-card"
                    [class.selected]="isServiceSelected(service)"
                    (click)="toggleService(service)"
                  >
                    <div class="service-select-check">
                      <i class="pi" [class.pi-check-circle]="isServiceSelected(service)" [class.pi-circle]="!isServiceSelected(service)"></i>
                    </div>
                    @if(service.image) {
                      <img [src]="service.image" [alt]="service.name" class="service-select-img" />
                    } @else {
                      <div class="service-select-img-placeholder">
                        <i class="pi pi-scissors text-3xl text-slate-300"></i>
                      </div>
                    }
                    <div class="service-select-body">
                      <h4>{{ service.name }}</h4>
                      <p>{{ service.description }}</p>
                      <div class="service-select-meta">
                        <strong>S/ {{ service.price | number:'1.2-2' }}</strong>
                        <span><i class="pi pi-clock"></i> {{ service.durationMinutes }} min</span>
                      </div>
                    </div>
                  </div>
                }
              </div>

              <!-- Resumen selecci\xF3n -->
              @if(selectedServices.length > 0) {
                <div class="selection-summary">
                  <div class="summary-row">
                    <span>{{ selectedServices.length }} servicio(s) seleccionado(s)</span>
                    <span class="summary-total">Total: S/ {{ totalPrice | number:'1.2-2' }} \xB7 {{ totalMinutes }} min</span>
                  </div>
                </div>
              }

              <!-- \u2500\u2500 Alternativa: imagen de referencia \u2500\u2500 -->
              <div class="reference-divider">
                <span>o</span>
              </div>

              <div class="reference-image-box" [class.disabled-block]="selectedServices.length > 0">
                <div class="reference-image-title">
                  <i class="pi pi-image text-blue-500"></i>
                  Env\xEDa una imagen de referencia del corte/estilo
                </div>

                @if(!referenceImagePreview) {
                  <label class="reference-image-dropzone" for="referenceImageInput">
                    <i class="pi pi-cloud-upload text-3xl text-slate-400"></i>
                    <span>Haz clic para elegir una imagen</span>
                    <small>JPG, PNG, WEBP o GIF \xB7 m\xE1x. 5MB</small>
                  </label>
                  <input
                    id="referenceImageInput"
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    class="reference-image-input"
                    [disabled]="selectedServices.length > 0"
                    (change)="onReferenceImageSelected($event)"
                  />
                } @else {
                  <div class="reference-image-preview">
                    <img [src]="referenceImagePreview" alt="Referencia seleccionada" />
                    <button type="button" class="reference-image-remove" (click)="removeReferenceImage()">
                      <i class="pi pi-times"></i> Quitar imagen
                    </button>
                  </div>
                }

                @if(referenceImageError) {
                  <small class="errorMessage">{{ referenceImageError }}</small>
                }
              </div>
            }

            <div class="step-footer">
              <p-button label="Atr\xE1s" icon="pi pi-arrow-left" severity="secondary" [outlined]="true" (click)="activeStep = 0" />
              <p-button label="Continuar" icon="pi pi-arrow-right" iconPos="right" (click)="goToStep3()" />
            </div>
          </div>
        </ng-template>
      </p-step-panel>

      <!-- \u2500\u2500 PASO 3: Barbero y horario \u2500\u2500 -->
      <p-step-panel header="Horario" [value]="2">
        <ng-template #content>
          <div class="step-content">
            <div class="step-section-title">
              <i class="pi pi-calendar text-orange-500"></i>
              Elige tu barbero, fecha y hora
            </div>

            <form [formGroup]="frmAppointment">
              <div class="form-grid">

                <div class="form-field form-field--full">
                  <label>Barbero *</label>
                  <p-select
                    [options]="barbers"
                    formControlName="barber"
                    optionLabel="firstName"
                    placeholder="Selecciona un barbero"
                    class="w-full"
                  >
                    <ng-template #selectedItem let-barber>
                      <span>{{ barber.firstName }} {{ barber.surName }}</span>
                    </ng-template>
                    <ng-template #item let-barber>
                      <span>{{ barber.firstName }} {{ barber.surName }}</span>
                    </ng-template>
                  </p-select>
                  @if(barberFb.touched && barberFb.hasError('required')) {
                    <small class="errorMessage">Seleccione un barbero.</small>
                  }
                </div>

                <div class="form-field">
                  <label>Fecha *</label>
                  <p-datepicker
                    formControlName="date"
                    [minDate]="minDate"
                    dateFormat="yy-mm-dd"
                    placeholder="Selecciona la fecha"
                    class="w-full"
                  />
                  @if(dateFb.touched && dateFb.hasError('required')) {
                    <small class="errorMessage">Seleccione una fecha.</small>
                  }
                </div>

                <div class="form-field">
                  <label>Hora de inicio *</label>
                  <p-select
                    [options]="availableHours"
                    formControlName="startHour"
                    placeholder="Seleccione la hora"
                    class="w-full"
                    [loading]="loadingHours"
                    [disabled]="!barberFb.value || !dateFb.value || availableHours.length === 0"
                  >
                  </p-select>
                  @if(startHourFb.touched && startHourFb.hasError('required')) {
                    <small class="errorMessage">Seleccione una hora disponible.</small>
                  }
                  @if(!loadingHours && barberFb.value && dateFb.value && availableHours.length === 0) {
                    <small class="errorMessage">No hay horas disponibles en esta fecha.</small>
                  }
                </div>

                <div class="form-field form-field--full">
                  <label>Observaciones <span class="optional-label">(opcional)</span></label>
                  <textarea pTextarea formControlName="observation" rows="3" placeholder="Ej: Quiero degradado alto con dise\xF1o en la sien..." class="w-full"></textarea>
                </div>

              </div>
            </form>

            <!-- Resumen final -->
            @if(selectedServices.length > 0) {
              <div class="booking-summary">
                <h4 class="summary-title">Resumen de tu reserva</h4>
                <div class="summary-services">
                  @for(s of selectedServices; track s.idService) {
                    <div class="summary-service-row">
                      <span>{{ s.name }}</span>
                      <span>S/ {{ s.price | number:'1.2-2' }}</span>
                    </div>
                  }
                </div>
                <p-divider />
                <div class="summary-service-row summary-total-row">
                  <strong>Total</strong>
                  <strong>S/ {{ totalPrice | number:'1.2-2' }}</strong>
                </div>
                <div class="summary-service-row">
                  <span class="text-slate-400 text-sm">Duraci\xF3n estimada</span>
                  <span class="text-slate-400 text-sm">{{ totalMinutes }} minutos</span>
                </div>
              </div>
            } @else if(hasReferenceImage) {
              <div class="booking-summary">
                <h4 class="summary-title">Resumen de tu reserva</h4>
                <div class="summary-service-row">
                  <span><i class="pi pi-image text-blue-500"></i> Servicio a definir seg\xFAn imagen de referencia</span>
                </div>
                <img [src]="referenceImagePreview" alt="Referencia seleccionada" class="summary-reference-img" />
              </div>
            }

            <div class="step-footer">
              <p-button label="Atr\xE1s" icon="pi pi-arrow-left" severity="secondary" [outlined]="true" (click)="activeStep = 1" />
              <p-button
                label="Confirmar Reserva"
                icon="pi pi-check"
                (click)="sendBooking()"
                [loading]="sendingCustomer || sendingAppointment || uploadingImage"
              />
            </div>
          </div>
        </ng-template>
      </p-step-panel>

      <!-- \u2500\u2500 PASO 4: Confirmaci\xF3n \u2500\u2500 -->
      <p-step-panel header="Confirmaci\xF3n" [value]="3">
        <ng-template #content>
          <div class="step-content success-step">
            <div class="success-icon">
              <i class="pi pi-check-circle"></i>
            </div>
            <h2 class="success-title">\xA1Reserva realizada!</h2>
            <p class="success-sub">Tu cita ha sido registrada exitosamente. Te esperamos pronto.</p>

            <div class="success-details">
              @for(s of selectedServices; track s.idService) {
                <p-tag [value]="s.name" severity="success" class="m-1" />
              }
              @if(selectedServices.length === 0 && hasReferenceImage) {
                <p-tag value="Servicio a definir seg\xFAn imagen de referencia" severity="info" class="m-1" />
              }
            </div>

            <p class="success-note">
              <i class="pi pi-info-circle"></i>
              Llega 5 minutos antes de tu cita. Ante cualquier cambio, cont\xE1ctanos.
            </p>

            <p-button label="Volver al inicio" icon="pi pi-home" (click)="goHome()" />
          </div>
        </ng-template>
      </p-step-panel>

    </p-stepper>

  </div>
</div>
`, styles: ['/* src/app/page/web/appointment-booking/appointment-booking.css */\n.booking-navbar {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: #0f172a;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.booking-navbar-inner {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.booking-logo {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #ffffff;\n}\n.booking-logo i {\n  color: #f59e0b;\n}\n.booking-page {\n  min-height: calc(100vh - 64px);\n  background: #f8fafc;\n  padding: 2.5rem 1.5rem;\n}\n.booking-container {\n  max-width: 820px;\n  margin: 0 auto;\n}\n.booking-header {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n.booking-title {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 0.5rem;\n}\n.booking-sub {\n  color: #64748b;\n  margin: 0;\n}\n.step-content {\n  padding: 1.5rem 0;\n}\n.step-section-title {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 1.5rem;\n}\n.step-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e2e8f0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field--full {\n  grid-column: 1 / -1;\n}\n.form-field label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-label {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.services-select-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.service-select-card {\n  position: relative;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition:\n    border-color 0.2s,\n    transform 0.2s,\n    box-shadow 0.2s;\n  background: #ffffff;\n}\n.service-select-card:hover {\n  border-color: #94a3b8;\n  transform: translateY(-2px);\n}\n.service-select-card.selected {\n  border-color: #0f172a;\n  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.12);\n}\n.service-select-check {\n  position: absolute;\n  top: 0.6rem;\n  right: 0.6rem;\n  font-size: 1.3rem;\n  color: #0f172a;\n  z-index: 2;\n}\n.service-select-img {\n  width: 100%;\n  height: 130px;\n  object-fit: cover;\n}\n.service-select-img-placeholder {\n  width: 100%;\n  height: 130px;\n  background: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.service-select-body {\n  padding: 0.875rem;\n}\n.service-select-body h4 {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.3rem;\n}\n.service-select-body p {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0 0 0.75rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.service-select-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.85rem;\n}\n.service-select-meta strong {\n  color: #0f172a;\n}\n.service-select-meta span {\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.selection-summary {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 10px;\n  padding: 0.875rem 1.25rem;\n  margin-top: 1rem;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.875rem;\n  color: #166534;\n  font-weight: 500;\n}\n.summary-total {\n  font-weight: 700;\n}\n.booking-summary {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1.25rem;\n  margin-top: 1.5rem;\n}\n.summary-title {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 1rem;\n}\n.summary-services {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.summary-service-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.summary-total-row {\n  margin-top: 0.25rem;\n}\n.summary-reference-img {\n  display: block;\n  max-width: 220px;\n  max-height: 220px;\n  border-radius: 10px;\n  margin-top: 0.75rem;\n  border: 1px solid #e2e8f0;\n  object-fit: cover;\n}\n.step-section-hint {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: -0.5rem 0 1rem;\n}\n.reference-divider {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin: 1.5rem 0;\n}\n.reference-divider::before,\n.reference-divider::after {\n  content: "";\n  flex: 1;\n  border-bottom: 1px solid #e2e8f0;\n}\n.reference-divider span {\n  padding: 0 1rem;\n}\n.reference-image-box {\n  border: 1px dashed #cbd5e1;\n  border-radius: 12px;\n  padding: 1.25rem;\n  background: #f8fafc;\n  transition: opacity 0.2s ease;\n}\n.reference-image-box.disabled-block {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.services-select-grid.disabled-block {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.reference-image-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0.875rem;\n}\n.reference-image-dropzone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 1.75rem 1rem;\n  border: 1.5px dashed #94a3b8;\n  border-radius: 10px;\n  background: #ffffff;\n  cursor: pointer;\n  color: #475569;\n  font-size: 0.875rem;\n  text-align: center;\n  transition: border-color 0.2s ease, background 0.2s ease;\n}\n.reference-image-dropzone:hover {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.reference-image-dropzone small {\n  color: #94a3b8;\n}\n.reference-image-input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  opacity: 0;\n}\n.reference-image-preview {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.reference-image-preview img {\n  max-width: 240px;\n  max-height: 240px;\n  border-radius: 10px;\n  object-fit: cover;\n  border: 1px solid #e2e8f0;\n}\n.reference-image-remove {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  border: none;\n  background: #fee2e2;\n  color: #b91c1c;\n  font-size: 0.8rem;\n  font-weight: 600;\n  padding: 0.4rem 0.875rem;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.reference-image-remove:hover {\n  background: #fecaca;\n}\n.success-step {\n  text-align: center;\n  padding: 3rem 1.5rem;\n}\n.success-icon {\n  font-size: 4rem;\n  color: #22c55e;\n  margin-bottom: 1rem;\n}\n.success-title {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.75rem;\n}\n.success-sub {\n  color: #64748b;\n  font-size: 1rem;\n  margin: 0 0 1.5rem;\n}\n.success-details {\n  margin-bottom: 1.5rem;\n}\n.success-note {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  color: #64748b;\n  font-size: 0.85rem;\n  margin-bottom: 2rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 0.75rem 1.25rem;\n}\n@media (max-width: 640px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-field--full {\n    grid-column: 1;\n  }\n  .services-select-grid {\n    grid-template-columns: 1fr;\n  }\n  .step-footer {\n    flex-direction: column-reverse;\n  }\n  .step-footer p-button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=appointment-booking.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppointmentBooking, { className: "AppointmentBooking", filePath: "src/app/page/web/appointment-booking/appointment-booking.ts", lineNumber: 64 });
})();
export {
  AppointmentBooking
};
//# sourceMappingURL=chunk-MUC5IPM7.js.map
