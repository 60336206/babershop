import {
  Textarea,
  TextareaModule
} from "./chunk-LF77IHSS.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-7XDVSYGC.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-MD7MSBDY.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-RS4TRJF4.js";
import {
  Dialog,
  DialogModule
} from "./chunk-G44MOSI6.js";
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
import {
  Tooltip,
  TooltipModule
} from "./chunk-JOO3LIF4.js";
import "./chunk-ITVICGZ6.js";
import {
  Tag,
  TagModule
} from "./chunk-47QHBKBD.js";
import {
  apiservicegetall
} from "./chunk-U4NY7MLH.js";
import {
  Api,
  RequestBuilder
} from "./chunk-LXYPTV7U.js";
import "./chunk-KUUI72I7.js";
import {
  Button,
  ButtonModule,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ConfirmationService,
  DecimalPipe,
  HttpResponse,
  MessageService,
  filter,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JJSRJYGA.js";

// src/app/page/services/services.ts
var _c0 = () => ({ width: "520px" });
var _c1 = () => [1, 2, 3, 4, 5, 6];
var _forTrack0 = ($index, $item) => $item.idService;
function Services_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "h2", 23);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275text(3, " Gesti\xF3n de Servicios ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5, "Cat\xE1logo de servicios de la barber\xEDa");
    \u0275\u0275elementEnd()();
  }
}
function Services_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 26);
    \u0275\u0275listener("click", function Services_ng_template_3_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
  }
}
function Services_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "p-skeleton", 28);
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275element(3, "p-skeleton", 30)(4, "p-skeleton", 31)(5, "p-skeleton", 32);
    \u0275\u0275elementEnd()();
  }
}
function Services_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, Services_Conditional_5_For_2_Template, 6, 0, "div", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function Services_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementStart(2, "h3", 34);
    \u0275\u0275text(3, "Sin servicios registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5, "Agrega el primer servicio para comenzar.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 26);
    \u0275\u0275listener("click", function Services_Conditional_6_Template_p_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd()();
  }
}
function Services_Conditional_7_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
  }
  if (rf & 2) {
    const service_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", service_r6.image, \u0275\u0275sanitizeUrl)("alt", service_r6.name);
  }
}
function Services_Conditional_7_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementEnd();
  }
}
function Services_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275conditionalCreate(1, Services_Conditional_7_For_2_Conditional_1_Template, 1, 2, "img", 37)(2, Services_Conditional_7_For_2_Conditional_2_Template, 2, 0, "div", 38);
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275element(4, "p-tag", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29)(6, "h3", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 42);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 43)(11, "div", 44)(12, "span", 45);
    \u0275\u0275text(13, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 46);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 47);
    \u0275\u0275element(18, "i", 48);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 49)(22, "p-button", 50);
    \u0275\u0275listener("onClick", function Services_Conditional_7_For_2_Template_p_button_onClick_22_listener() {
      const service_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(service_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p-button", 51);
    \u0275\u0275listener("onClick", function Services_Conditional_7_For_2_Template_p_button_onClick_23_listener($event) {
      const service_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmDelete($event, service_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const service_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(service_r6.image ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", service_r6.status === 1 ? "Activo" : "Inactivo")("severity", ctx_r2.getStatusSeverity(service_r6.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r6.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(16, 9, service_r6.price, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", service_r6.durationMinutes, " min");
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
  }
}
function Services_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, Services_Conditional_7_For_2_Template, 24, 12, "div", 36, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.listService);
  }
}
function Services_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Services_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Services_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Services_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1, "El precio debe ser mayor a 0.");
    \u0275\u0275elementEnd();
  }
}
function Services_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Services_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1, "La duraci\xF3n debe ser mayor a 0.");
    \u0275\u0275elementEnd();
  }
}
function Services_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "img", 53);
    \u0275\u0275elementStart(2, "button", 54);
    \u0275\u0275listener("click", function Services_Conditional_39_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage());
    });
    \u0275\u0275element(3, "i", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function Services_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 19);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Haz clic para seleccionar una imagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 57);
    \u0275\u0275text(5, "JPG, PNG o WEBP \xB7 m\xE1x. 3 MB");
    \u0275\u0275elementEnd()();
  }
}
function Services_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 21);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2, " Cambiar imagen ");
    \u0275\u0275elementEnd();
  }
}
function Services_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.imageError);
  }
}
function Services_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label");
    \u0275\u0275text(2, "Estado *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-select", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r2.statusOptions);
  }
}
function Services_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 60);
    \u0275\u0275listener("onClick", function Services_ng_template_45_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 61);
    \u0275\u0275listener("onClick", function Services_ng_template_45_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveService());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r2.isEditing ? "Guardar cambios" : "Registrar")("loading", ctx_r2.saving);
  }
}
function apiserviceinsert(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, "/service/insert", "post");
  rb.body(params.body, "application/json");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apiserviceupdate(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, "/service/update", "put");
  rb.body(params.body, "application/json");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apiservicedelete(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/service/delete/${params.idService}`, "delete");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
var Services = class _Services {
  api = inject(Api);
  formBuilder = inject(FormBuilder);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  cdr = inject(ChangeDetectorRef);
  listService = [];
  loading = false;
  statusOptions = [
    { label: "Activo", value: 1 },
    { label: "Inactivo", value: 0 }
  ];
  dialogVisible = false;
  isEditing = false;
  saving = false;
  imagePreview = null;
  imageError = null;
  frmService;
  get nameFb() {
    return this.frmService.controls["name"];
  }
  get descriptionFb() {
    return this.frmService.controls["description"];
  }
  get priceFb() {
    return this.frmService.controls["price"];
  }
  get durationMinutesFb() {
    return this.frmService.controls["durationMinutes"];
  }
  constructor() {
    this.frmService = this.formBuilder.group({
      idService: [""],
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      price: [null, [Validators.required, Validators.min(0.01)]],
      durationMinutes: [null, [Validators.required, Validators.min(1)]],
      image: [""],
      status: [1]
    });
  }
  ngOnInit() {
    this.loadServices();
  }
  loadServices() {
    this.loading = true;
    this.api.invoke(apiservicegetall).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      this.listService = data?.listService ?? [];
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo cargar los servicios." });
    });
  }
  openNew() {
    this.isEditing = false;
    this.frmService.reset();
    this.imagePreview = null;
    this.imageError = null;
    this.dialogVisible = true;
  }
  openEdit(service) {
    this.isEditing = true;
    this.frmService.patchValue(service);
    this.imagePreview = service.image || null;
    this.imageError = null;
    this.dialogVisible = true;
  }
  onImageSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    this.imageError = null;
    if (!file) {
      return;
    }
    if (!file.type.startsWith("image/")) {
      this.imageError = "El archivo debe ser una imagen.";
      input.value = "";
      return;
    }
    const maxSizeBytes = 3 * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      this.imageError = "La imagen no debe superar 3 MB.";
      input.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      this.imagePreview = base64;
      this.frmService.patchValue({ image: base64 });
      this.cdr.detectChanges();
    };
    reader.onerror = () => {
      this.imageError = "No se pudo leer la imagen seleccionada.";
    };
    reader.readAsDataURL(file);
  }
  removeImage() {
    this.imagePreview = null;
    this.imageError = null;
    this.frmService.patchValue({ image: "" });
  }
  saveService() {
    if (!this.frmService.valid) {
      this.frmService.markAllAsTouched();
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "Complete todos los campos." });
      return;
    }
    this.saving = true;
    const v = this.frmService.value;
    const fn = this.isEditing ? apiserviceupdate : apiserviceinsert;
    const body = this.isEditing ? { idService: v.idService, name: v.name, description: v.description, price: v.price, durationMinutes: v.durationMinutes, image: v.image ?? "", status: v.status } : { name: v.name, description: v.description, price: v.price, durationMinutes: v.durationMinutes, image: v.image ?? "", status: v.status };
    this.api.invoke(fn, { body }).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      if (data?.type === "success") {
        this.messageService.add({ severity: "success", summary: "Correcto", detail: data.listMessage?.[0] ?? "Servicio guardado." });
        this.dialogVisible = false;
        this.loadServices();
      } else {
        this.messageService.add({ severity: "error", summary: "Error", detail: data.listMessage?.[0] ?? "Error al guardar." });
      }
    }).catch(() => {
      this.messageService.add({ severity: "error", summary: "Error", detail: "Error de conexi\xF3n." });
    }).finally(() => {
      this.saving = false;
      this.cdr.detectChanges();
    });
  }
  confirmDelete(event, service) {
    this.confirmationService.confirm({
      target: event.target,
      message: `\xBFEliminar el servicio "${service.name}"?`,
      header: "Confirmar eliminaci\xF3n",
      icon: "pi pi-exclamation-triangle",
      rejectButtonProps: { label: "Cancelar", severity: "secondary", outlined: true },
      acceptButtonProps: { label: "S\xED, eliminar", severity: "danger" },
      accept: () => {
        this.api.invoke(apiservicedelete, { idService: service.idService }).then((response) => {
          const data = typeof response === "string" ? JSON.parse(response) : response;
          if (data?.type === "success") {
            this.listService = this.listService.filter((s) => s.idService !== service.idService);
            this.messageService.add({ severity: "success", summary: "Correcto", detail: "Servicio eliminado." });
            this.cdr.detectChanges();
          } else {
            this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo eliminar." });
          }
        }).catch(() => {
          this.messageService.add({ severity: "error", summary: "Error", detail: "Error al eliminar." });
        });
      }
    });
  }
  getStatusSeverity(status) {
    return status === 1 ? "success" : "danger";
  }
  static \u0275fac = function Services_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Services)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Services, selectors: [["app-services"]], decls: 47, vars: 26, consts: [["start", ""], ["end", ""], ["footer", ""], ["styleClass", "mb-4 toolbar-custom"], [1, "services-grid"], [1, "empty-state"], [3, "visibleChange", "visible", "modal", "draggable", "resizable", "header"], [3, "formGroup"], [1, "form-grid"], [1, "form-field", "form-field--full"], ["pInputText", "", "formControlName", "name", "placeholder", "Ej: Corte cl\xE1sico", 1, "w-full"], [1, "errorMessage"], ["pTextarea", "", "formControlName", "description", "rows", "3", "placeholder", "Describe el servicio...", 1, "w-full"], [1, "form-field"], ["formControlName", "price", "placeholder", "0.00", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "min", "minFractionDigits", "maxFractionDigits"], ["formControlName", "durationMinutes", "placeholder", "30", "suffix", " min", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "min", "max"], [1, "optional-label"], [1, "image-upload"], [1, "image-upload-preview"], ["for", "serviceImageInput", 1, "image-upload-dropzone"], ["id", "serviceImageInput", "type", "file", "accept", "image/*", 3, "change", "hidden"], ["for", "serviceImageInput", 1, "image-upload-change"], [1, "page-header"], [1, "page-title"], [1, "pi", "pi-tag", "mr-2"], [1, "page-subtitle"], ["label", "Nuevo Servicio", "icon", "pi pi-plus", 3, "click"], [1, "service-card", "service-card--skeleton"], ["height", "160px"], [1, "service-card-body"], ["width", "70%", "height", "1.1rem", 1, "mb-2"], ["width", "100%", "height", "0.8rem", 1, "mb-1"], ["width", "80%", "height", "0.8rem"], [1, "pi", "pi-tag", "text-5xl", "text-slate-200", "mb-4"], [1, "text-slate-500", "font-semibold"], [1, "text-slate-400", "text-sm", "mb-4"], [1, "service-card"], [1, "service-card-img", 3, "src", "alt"], [1, "service-card-img-placeholder"], [1, "service-card-status"], [3, "value", "severity"], [1, "service-name"], [1, "service-desc"], [1, "service-meta"], [1, "service-price"], [1, "price-label"], [1, "price-value"], [1, "service-duration"], [1, "pi", "pi-clock"], [1, "service-actions"], ["label", "Editar", "icon", "pi pi-pencil", "severity", "secondary", "size", "small", "styleClass", "flex-1", 3, "onClick", "outlined"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Eliminar", 3, "onClick", "outlined"], [1, "pi", "pi-scissors", "text-4xl", "text-slate-300"], ["alt", "Vista previa", 3, "src"], ["type", "button", "pTooltip", "Quitar imagen", 1, "image-upload-remove", 3, "click"], [1, "pi", "pi-times"], [1, "pi", "pi-image", "text-3xl", "text-slate-300"], [1, "image-upload-hint"], [1, "pi", "pi-refresh", "mr-1"], ["formControlName", "status", "optionLabel", "label", "optionValue", "value", "placeholder", "Seleccione el estado", 1, "w-full", 3, "options"], ["label", "Cancelar", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-check", 3, "onClick", "label", "loading"]], template: function Services_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-toolbar", 3);
      \u0275\u0275template(1, Services_ng_template_1_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, Services_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, Services_Conditional_5_Template, 3, 1, "div", 4)(6, Services_Conditional_6_Template, 7, 0, "div", 5)(7, Services_Conditional_7_Template, 3, 0, "div", 4);
      \u0275\u0275elementStart(8, "p-dialog", 6);
      \u0275\u0275twoWayListener("visibleChange", function Services_Template_p_dialog_visibleChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(9, "form", 7)(10, "div", 8)(11, "div", 9)(12, "label");
      \u0275\u0275text(13, "Nombre del servicio *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 10);
      \u0275\u0275conditionalCreate(15, Services_Conditional_15_Template, 2, 0, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "label");
      \u0275\u0275text(18, "Descripci\xF3n *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "textarea", 12);
      \u0275\u0275conditionalCreate(20, Services_Conditional_20_Template, 2, 0, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 13)(22, "label");
      \u0275\u0275text(23, "Precio (S/) *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "p-inputNumber", 14);
      \u0275\u0275conditionalCreate(25, Services_Conditional_25_Template, 2, 0, "small", 11);
      \u0275\u0275conditionalCreate(26, Services_Conditional_26_Template, 2, 0, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 13)(28, "label");
      \u0275\u0275text(29, "Duraci\xF3n (minutos) *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "p-inputNumber", 15);
      \u0275\u0275conditionalCreate(31, Services_Conditional_31_Template, 2, 0, "small", 11);
      \u0275\u0275conditionalCreate(32, Services_Conditional_32_Template, 2, 0, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9)(34, "label");
      \u0275\u0275text(35, "Imagen del servicio ");
      \u0275\u0275elementStart(36, "span", 16);
      \u0275\u0275text(37, "(opcional)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 17);
      \u0275\u0275conditionalCreate(39, Services_Conditional_39_Template, 4, 1, "div", 18)(40, Services_Conditional_40_Template, 6, 0, "label", 19);
      \u0275\u0275elementStart(41, "input", 20);
      \u0275\u0275listener("change", function Services_Template_input_change_41_listener($event) {
        return ctx.onImageSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(42, Services_Conditional_42_Template, 3, 0, "label", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(43, Services_Conditional_43_Template, 2, 1, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(44, Services_Conditional_44_Template, 4, 1, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(45, Services_ng_template_45_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading ? 5 : ctx.listService.length === 0 ? 6 : 7);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("modal", true)("draggable", false)("resizable", false)("header", ctx.isEditing ? "Editar Servicio" : "Nuevo Servicio");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.frmService);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.nameFb.touched && ctx.nameFb.hasError("required") ? 15 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.descriptionFb.touched && ctx.descriptionFb.hasError("required") ? 20 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("min", 0)("minFractionDigits", 2)("maxFractionDigits", 2);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.priceFb.touched && ctx.priceFb.hasError("required") ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.priceFb.touched && ctx.priceFb.hasError("min") ? 26 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("min", 1)("max", 240);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.durationMinutesFb.touched && ctx.durationMinutesFb.hasError("required") ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.durationMinutesFb.touched && ctx.durationMinutesFb.hasError("min") ? 32 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.imagePreview ? 39 : 40);
      \u0275\u0275advance(2);
      \u0275\u0275property("hidden", !!ctx.imagePreview);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.imagePreview ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.imageError ? 43 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEditing ? 44 : -1);
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
    DialogModule,
    Dialog,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    InputNumberModule,
    InputNumber,
    TagModule,
    Tag,
    ToolbarModule,
    Toolbar,
    TooltipModule,
    Tooltip,
    SkeletonModule,
    Skeleton,
    SelectModule,
    Select,
    DecimalPipe
  ], styles: ["\n.toolbar-custom[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.25rem;\n}\n.service-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s, box-shadow 0.2s;\n  position: relative;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.09);\n}\n.service-card--skeleton[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.service-card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  display: block;\n}\n.service-card-img-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  background: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #f1f5f9;\n}\n.service-card-status[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n}\n.service-card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.service-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.4rem;\n}\n.service-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin: 0 0 1rem;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.service-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.service-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.price-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.price-value[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.service-duration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.82rem;\n  color: #64748b;\n  background: #f8fafc;\n  padding: 0.3rem 0.6rem;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n}\n.service-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  padding: 0.5rem 0;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field--full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.errorMessage[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n}\n.image-upload[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.image-upload-dropzone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  padding: 1.5rem 1rem;\n  border: 1.5px dashed #cbd5e1;\n  border-radius: 12px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.image-upload-dropzone[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n  background: #f1f5f9;\n}\n.image-upload-hint[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.image-upload-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 160px;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.image-upload-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.image-upload-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 50%;\n  background: rgba(15, 23, 42, 0.65);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.image-upload-remove[_ngcontent-%COMP%]:hover {\n  background: rgba(15, 23, 42, 0.85);\n}\n.image-upload-change[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-size: 0.8rem;\n  color: #3730a3;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n}\n.image-upload-change[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 640px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-field--full[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n}\n/*# sourceMappingURL=services.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Services, [{
    type: Component,
    args: [{ selector: "app-services", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      ButtonModule,
      DialogModule,
      InputTextModule,
      TextareaModule,
      InputNumberModule,
      TagModule,
      ToolbarModule,
      TooltipModule,
      SkeletonModule,
      SelectModule
    ], template: `<!-- \u2550\u2550 TOOLBAR \u2550\u2550 -->\r
<p-toolbar styleClass="mb-4 toolbar-custom">\r
  <ng-template #start>\r
    <div class="page-header">\r
      <h2 class="page-title">\r
        <i class="pi pi-tag mr-2"></i> Gesti\xF3n de Servicios\r
      </h2>\r
      <span class="page-subtitle">Cat\xE1logo de servicios de la barber\xEDa</span>\r
    </div>\r
  </ng-template>\r
  <ng-template #end>\r
    <p-button label="Nuevo Servicio" icon="pi pi-plus" (click)="openNew()" />\r
  </ng-template>\r
</p-toolbar>\r
\r
<!-- \u2550\u2550 VISTA CARDS \u2550\u2550 -->\r
@if(loading) {\r
  <div class="services-grid">\r
    @for(i of [1,2,3,4,5,6]; track i) {\r
      <div class="service-card service-card--skeleton">\r
        <p-skeleton height="160px" />\r
        <div class="service-card-body">\r
          <p-skeleton width="70%" height="1.1rem" class="mb-2" />\r
          <p-skeleton width="100%" height="0.8rem" class="mb-1" />\r
          <p-skeleton width="80%" height="0.8rem" />\r
        </div>\r
      </div>\r
    }\r
  </div>\r
\r
} @else if(listService.length === 0) {\r
  <div class="empty-state">\r
    <i class="pi pi-tag text-5xl text-slate-200 mb-4"></i>\r
    <h3 class="text-slate-500 font-semibold">Sin servicios registrados</h3>\r
    <p class="text-slate-400 text-sm mb-4">Agrega el primer servicio para comenzar.</p>\r
    <p-button label="Nuevo Servicio" icon="pi pi-plus" (click)="openNew()" />\r
  </div>\r
\r
} @else {\r
  <div class="services-grid">\r
    @for(service of listService; track service.idService) {\r
      <div class="service-card">\r
\r
        <!-- Imagen -->\r
        @if(service.image) {\r
          <img [src]="service.image" [alt]="service.name" class="service-card-img" />\r
        } @else {\r
          <div class="service-card-img-placeholder">\r
            <i class="pi pi-scissors text-4xl text-slate-300"></i>\r
          </div>\r
        }\r
\r
        <!-- Badge estado -->\r
        <div class="service-card-status">\r
          <p-tag\r
            [value]="service.status === 1 ? 'Activo' : 'Inactivo'"\r
            [severity]="getStatusSeverity(service.status)"\r
          />\r
        </div>\r
\r
        <!-- Cuerpo -->\r
        <div class="service-card-body">\r
          <h3 class="service-name">{{ service.name }}</h3>\r
          <p class="service-desc">{{ service.description }}</p>\r
\r
          <div class="service-meta">\r
            <div class="service-price">\r
              <span class="price-label">Precio</span>\r
              <span class="price-value">S/ {{ service.price | number:'1.2-2' }}</span>\r
            </div>\r
            <div class="service-duration">\r
              <i class="pi pi-clock"></i>\r
              <span>{{ service.durationMinutes }} min</span>\r
            </div>\r
          </div>\r
\r
          <div class="service-actions">\r
            <p-button\r
              label="Editar"\r
              icon="pi pi-pencil"\r
              severity="secondary"\r
              [outlined]="true"\r
              size="small"\r
              (onClick)="openEdit(service)"\r
              styleClass="flex-1"\r
            />\r
            <p-button\r
              icon="pi pi-trash"\r
              severity="danger"\r
              [outlined]="true"\r
              size="small"\r
              pTooltip="Eliminar"\r
              (onClick)="confirmDelete($event, service)"\r
            />\r
          </div>\r
        </div>\r
\r
      </div>\r
    }\r
  </div>\r
}\r
\r
<!-- \u2550\u2550 DIALOG \u2550\u2550 -->\r
<p-dialog\r
  [(visible)]="dialogVisible"\r
  [modal]="true"\r
  [style]="{ width: '520px' }"\r
  [draggable]="false"\r
  [resizable]="false"\r
  [header]="isEditing ? 'Editar Servicio' : 'Nuevo Servicio'"\r
>\r
  <form [formGroup]="frmService">\r
    <div class="form-grid">\r
\r
      <div class="form-field form-field--full">\r
        <label>Nombre del servicio *</label>\r
        <input pInputText formControlName="name" placeholder="Ej: Corte cl\xE1sico" class="w-full" />\r
        @if(nameFb.touched && nameFb.hasError('required')) {\r
          <small class="errorMessage">Campo requerido.</small>\r
        }\r
      </div>\r
\r
      <div class="form-field form-field--full">\r
        <label>Descripci\xF3n *</label>\r
        <textarea\r
          pTextarea\r
          formControlName="description"\r
          rows="3"\r
          placeholder="Describe el servicio..."\r
          class="w-full"\r
        ></textarea>\r
        @if(descriptionFb.touched && descriptionFb.hasError('required')) {\r
          <small class="errorMessage">Campo requerido.</small>\r
        }\r
      </div>\r
\r
      <div class="form-field">\r
        <label>Precio (S/) *</label>\r
        <p-inputNumber\r
          formControlName="price"\r
          [min]="0"\r
          [minFractionDigits]="2"\r
          [maxFractionDigits]="2"\r
          placeholder="0.00"\r
          styleClass="w-full"\r
          inputStyleClass="w-full"\r
        />\r
        @if(priceFb.touched && priceFb.hasError('required')) {\r
          <small class="errorMessage">Campo requerido.</small>\r
        }\r
        @if(priceFb.touched && priceFb.hasError('min')) {\r
          <small class="errorMessage">El precio debe ser mayor a 0.</small>\r
        }\r
      </div>\r
\r
      <div class="form-field">\r
        <label>Duraci\xF3n (minutos) *</label>\r
        <p-inputNumber\r
          formControlName="durationMinutes"\r
          [min]="1"\r
          [max]="240"\r
          placeholder="30"\r
          suffix=" min"\r
          styleClass="w-full"\r
          inputStyleClass="w-full"\r
        />\r
        @if(durationMinutesFb.touched && durationMinutesFb.hasError('required')) {\r
          <small class="errorMessage">Campo requerido.</small>\r
        }\r
        @if(durationMinutesFb.touched && durationMinutesFb.hasError('min')) {\r
          <small class="errorMessage">La duraci\xF3n debe ser mayor a 0.</small>\r
        }\r
      </div>\r
\r
      <div class="form-field form-field--full">\r
        <label>Imagen del servicio <span class="optional-label">(opcional)</span></label>\r
\r
        <div class="image-upload">\r
          @if(imagePreview) {\r
            <div class="image-upload-preview">\r
              <img [src]="imagePreview" alt="Vista previa" />\r
              <button type="button" class="image-upload-remove" (click)="removeImage()" pTooltip="Quitar imagen">\r
                <i class="pi pi-times"></i>\r
              </button>\r
            </div>\r
          } @else {\r
            <label class="image-upload-dropzone" for="serviceImageInput">\r
              <i class="pi pi-image text-3xl text-slate-300"></i>\r
              <span>Haz clic para seleccionar una imagen</span>\r
              <span class="image-upload-hint">JPG, PNG o WEBP \xB7 m\xE1x. 3 MB</span>\r
            </label>\r
          }\r
\r
          <input\r
            id="serviceImageInput"\r
            type="file"\r
            accept="image/*"\r
            (change)="onImageSelected($event)"\r
            [hidden]="!!imagePreview"\r
          />\r
\r
          @if(imagePreview) {\r
            <label for="serviceImageInput" class="image-upload-change">\r
              <i class="pi pi-refresh mr-1"></i> Cambiar imagen\r
            </label>\r
          }\r
        </div>\r
\r
        @if(imageError) {\r
          <small class="errorMessage">{{ imageError }}</small>\r
        }\r
      </div>\r
\r
      @if(isEditing) {\r
        <div class="form-field form-field--full">\r
          <label>Estado *</label>\r
          <p-select\r
            [options]="statusOptions"\r
            formControlName="status"\r
            optionLabel="label"\r
            optionValue="value"\r
            placeholder="Seleccione el estado"\r
            class="w-full"\r
          />\r
        </div>\r
      }\r
\r
    </div>\r
  </form>\r
\r
  <ng-template #footer>\r
    <p-button label="Cancelar" icon="pi pi-times" severity="secondary" [outlined]="true" (onClick)="dialogVisible = false" />\r
    <p-button [label]="isEditing ? 'Guardar cambios' : 'Registrar'" icon="pi pi-check" [loading]="saving" (onClick)="saveService()" />\r
  </ng-template>\r
</p-dialog>`, styles: ["/* src/app/page/services/services.css */\n.toolbar-custom {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.page-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.services-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.25rem;\n}\n.service-card {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s, box-shadow 0.2s;\n  position: relative;\n}\n.service-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.09);\n}\n.service-card--skeleton {\n  pointer-events: none;\n}\n.service-card-img {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  display: block;\n}\n.service-card-img-placeholder {\n  width: 100%;\n  height: 160px;\n  background: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #f1f5f9;\n}\n.service-card-status {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n}\n.service-card-body {\n  padding: 1.25rem;\n}\n.service-name {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.4rem;\n}\n.service-desc {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin: 0 0 1rem;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.service-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.service-price {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.price-label {\n  font-size: 0.7rem;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.price-value {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.service-duration {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.82rem;\n  color: #64748b;\n  background: #f8fafc;\n  padding: 0.3rem 0.6rem;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n}\n.service-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  padding: 0.5rem 0;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field--full {\n  grid-column: 1 / -1;\n}\n.form-field label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-label {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.errorMessage {\n  color: #ef4444;\n  font-size: 0.75rem;\n}\n.image-upload {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.image-upload-dropzone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  padding: 1.5rem 1rem;\n  border: 1.5px dashed #cbd5e1;\n  border-radius: 12px;\n  background: #f8fafc;\n  color: #64748b;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.image-upload-dropzone:hover {\n  border-color: #94a3b8;\n  background: #f1f5f9;\n}\n.image-upload-hint {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.image-upload-preview {\n  position: relative;\n  width: 100%;\n  height: 160px;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.image-upload-preview img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.image-upload-remove {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 50%;\n  background: rgba(15, 23, 42, 0.65);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.image-upload-remove:hover {\n  background: rgba(15, 23, 42, 0.85);\n}\n.image-upload-change {\n  align-self: flex-start;\n  font-size: 0.8rem;\n  color: #3730a3;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n}\n.image-upload-change:hover {\n  text-decoration: underline;\n}\n@media (max-width: 640px) {\n  .services-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-field--full {\n    grid-column: 1;\n  }\n}\n/*# sourceMappingURL=services.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Services, { className: "Services", filePath: "src/app/page/services/services.ts", lineNumber: 72 });
})();
export {
  Services
};
//# sourceMappingURL=chunk-CEW5ROLY.js.map
