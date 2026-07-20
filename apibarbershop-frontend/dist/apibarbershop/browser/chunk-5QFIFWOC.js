import {
  Textarea,
  TextareaModule
} from "./chunk-LF77IHSS.js";
import {
  ProgressSpinnerModule
} from "./chunk-AVKKUKZN.js";
import {
  SkeletonModule
} from "./chunk-7XDVSYGC.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-RS4TRJF4.js";
import {
  Dialog,
  DialogModule
} from "./chunk-G44MOSI6.js";
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
  TooltipModule
} from "./chunk-JOO3LIF4.js";
import "./chunk-ITVICGZ6.js";
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JJSRJYGA.js";

// src/app/page/gallery/gallery.ts
var _c0 = () => ({ width: "500px" });
var _forTrack0 = ($index, $item) => $item.idGallery;
function Gallery_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h2", 19);
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275text(3, " Galer\xEDa de Trabajos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5, "Administra las fotos de los cortes realizados");
    \u0275\u0275elementEnd()();
  }
}
function Gallery_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 22);
    \u0275\u0275listener("onClick", function Gallery_ng_template_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
  }
}
function Gallery_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementStart(2, "p", 24);
    \u0275\u0275text(3, "Cargando galer\xEDa...");
    \u0275\u0275elementEnd()();
  }
}
function Gallery_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementStart(2, "h3", 26);
    \u0275\u0275text(3, "Sin im\xE1genes en la galer\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 27);
    \u0275\u0275text(5, "Sube las mejores fotos de tus trabajos.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 28);
    \u0275\u0275listener("onClick", function Gallery_Conditional_6_Template_p_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd()();
  }
}
function Gallery_Conditional_7_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.description);
  }
}
function Gallery_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "div", 31)(3, "div", 32)(4, "h3", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, Gallery_Conditional_7_For_2_Conditional_6_Template, 2, 1, "p", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "button", 36);
    \u0275\u0275listener("click", function Gallery_Conditional_7_For_2_Template_button_click_8_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(item_r6));
    });
    \u0275\u0275element(9, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 38);
    \u0275\u0275listener("click", function Gallery_Conditional_7_For_2_Template_button_click_10_listener($event) {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmDelete($event, item_r6));
    });
    \u0275\u0275element(11, "i", 39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r6.image, \u0275\u0275sanitizeUrl)("alt", item_r6.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r6.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r6.description ? 6 : -1);
  }
}
function Gallery_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, Gallery_Conditional_7_For_2_Template, 12, 4, "div", 29, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.listGallery);
  }
}
function Gallery_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "img", 41);
    \u0275\u0275elementStart(2, "button", 42);
    \u0275\u0275listener("click", function Gallery_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage());
    });
    \u0275\u0275element(3, "i", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "label", 44);
    \u0275\u0275element(5, "i", 45);
    \u0275\u0275text(6, " Cambiar imagen ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.uploadedImageBase64, \u0275\u0275sanitizeUrl);
  }
}
function Gallery_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 9);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275elementStart(2, "span", 47);
    \u0275\u0275text(3, "Clic para seleccionar imagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5, "JPG, PNG, WEBP \xB7 m\xE1x. 3 MB");
    \u0275\u0275elementEnd()();
  }
}
function Gallery_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Gallery_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 48);
    \u0275\u0275listener("onClick", function Gallery_ng_template_26_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 49);
    \u0275\u0275listener("onClick", function Gallery_ng_template_26_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveGallery());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r2.isEditing ? "Guardar Cambios" : "Subir Imagen")("loading", ctx_r2.saving);
  }
}
function apigallerygetall(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, "/gallery/getall", "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apigalleryinsert(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, "/gallery/insert", "post");
  rb.body(params.body, "application/json");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apigalleryupdate(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, "/gallery/update", "put");
  rb.body(params.body, "application/json");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apigallerydelete(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/gallery/delete/${params.idGallery}`, "delete");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
var Gallery = class _Gallery {
  api = inject(Api);
  formBuilder = inject(FormBuilder);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  cdr = inject(ChangeDetectorRef);
  listGallery = [];
  loading = false;
  saving = false;
  dialogVisible = false;
  isEditing = false;
  uploadedImageBase64 = null;
  imageError = null;
  frmGallery;
  get titleFb() {
    return this.frmGallery.controls["title"];
  }
  get descriptionFb() {
    return this.frmGallery.controls["description"];
  }
  constructor() {
    this.frmGallery = this.formBuilder.group({
      idGallery: [""],
      title: ["", [Validators.required]],
      description: [""]
    });
  }
  ngOnInit() {
    this.loadGallery();
  }
  loadGallery() {
    this.loading = true;
    this.api.invoke(apigallerygetall).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      this.listGallery = data?.listGallery ?? [];
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo cargar la galer\xEDa." });
    });
  }
  openNew() {
    this.isEditing = false;
    this.uploadedImageBase64 = null;
    this.imageError = null;
    this.frmGallery.reset({ idGallery: "", title: "", description: "" });
    this.dialogVisible = true;
  }
  openEdit(item) {
    this.isEditing = true;
    this.uploadedImageBase64 = item.image ?? null;
    this.imageError = null;
    this.frmGallery.patchValue({ idGallery: item.idGallery, title: item.title, description: item.description ?? "" });
    this.dialogVisible = true;
  }
  // Maneja input nativo type="file"
  onImageSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    this.imageError = null;
    if (!file)
      return;
    if (!file.type.startsWith("image/")) {
      this.imageError = "El archivo debe ser una imagen.";
      input.value = "";
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      this.imageError = "La imagen no debe superar 3 MB.";
      input.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.uploadedImageBase64 = reader.result;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }
  removeImage() {
    this.uploadedImageBase64 = null;
    this.imageError = null;
  }
  saveGallery() {
    if (!this.frmGallery.valid) {
      this.frmGallery.markAllAsTouched();
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "Complete los campos requeridos." });
      return;
    }
    if (!this.uploadedImageBase64) {
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "Debe subir una imagen." });
      return;
    }
    this.saving = true;
    const val = this.frmGallery.value;
    const body = { idGallery: val.idGallery, title: val.title, description: val.description ?? "", image: this.uploadedImageBase64 };
    const fn = this.isEditing ? apigalleryupdate : apigalleryinsert;
    this.api.invoke(fn, { body }).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      if (data?.type === "success") {
        this.messageService.add({ severity: "success", summary: "Correcto", detail: data.listMessage?.[0] ?? "Guardado." });
        this.dialogVisible = false;
        this.loadGallery();
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
  confirmDelete(event, item) {
    this.confirmationService.confirm({
      target: event.target,
      message: `\xBFEliminar la imagen "${item.title}"?`,
      header: "Confirmar eliminaci\xF3n",
      icon: "pi pi-exclamation-triangle",
      rejectButtonProps: { label: "Cancelar", severity: "secondary", outlined: true },
      acceptButtonProps: { label: "S\xED, eliminar", severity: "danger" },
      accept: () => {
        this.api.invoke(apigallerydelete, { idGallery: item.idGallery }).then((response) => {
          const data = typeof response === "string" ? JSON.parse(response) : response;
          if (data?.type === "success") {
            this.listGallery = this.listGallery.filter((g) => g.idGallery !== item.idGallery);
            this.messageService.add({ severity: "success", summary: "Correcto", detail: "Imagen eliminada." });
            this.cdr.detectChanges();
          } else {
            this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo eliminar." });
          }
        }).catch(() => {
          this.messageService.add({ severity: "error", summary: "Error", detail: "Error de red." });
        });
      }
    });
  }
  static \u0275fac = function Gallery_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Gallery)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Gallery, selectors: [["app-gallery"]], decls: 28, vars: 13, consts: [["start", ""], ["end", ""], ["footer", ""], ["styleClass", "mb-4 toolbar-custom"], [1, "loading-state"], [1, "empty-state"], [1, "masonry-grid"], [3, "visibleChange", "visible", "modal", "draggable", "resizable", "header"], [1, "upload-zone", "mb-4"], ["for", "galleryImg", 1, "upload-dropzone"], ["id", "galleryImg", "type", "file", "accept", "image/*", 3, "change", "hidden"], [3, "formGroup"], [1, "form-grid"], [1, "form-field", "form-field--full"], ["pInputText", "", "formControlName", "title", "placeholder", "Ej: Fade Cl\xE1sico", 1, "w-full"], [1, "errorMessage"], [1, "text-slate-400", "text-xs"], ["pTextarea", "", "formControlName", "description", "rows", "2", "placeholder", "Detalles del corte...", 1, "w-full"], [1, "page-header"], [1, "page-title"], [1, "pi", "pi-images", "mr-2"], [1, "page-subtitle"], ["label", "Nueva Imagen", "icon", "pi pi-plus", 3, "onClick"], [1, "pi", "pi-spin", "pi-spinner", "text-3xl", "text-slate-400"], [1, "text-slate-400", "mt-2"], [1, "pi", "pi-images", "text-5xl", "text-slate-200", "mb-4"], [1, "text-slate-500", "font-semibold"], [1, "text-slate-400", "text-sm", "mb-4"], ["label", "Subir primera imagen", "icon", "pi pi-upload", 3, "onClick"], [1, "gallery-card"], [1, "gallery-img", 3, "src", "alt"], [1, "gallery-overlay"], [1, "gallery-info"], [1, "gallery-title"], [1, "gallery-desc"], [1, "gallery-actions"], ["title", "Editar", 1, "gal-btn", "gal-btn--edit", 3, "click"], [1, "pi", "pi-pencil"], ["title", "Eliminar", 1, "gal-btn", "gal-btn--del", 3, "click"], [1, "pi", "pi-trash"], [1, "preview-wrap"], ["alt", "Preview", 1, "preview-img", 3, "src"], ["title", "Quitar", 1, "preview-remove", 3, "click"], [1, "pi", "pi-times"], ["for", "galleryImg", 1, "change-img-btn"], [1, "pi", "pi-refresh", "mr-1"], [1, "pi", "pi-image", "text-3xl", "text-slate-300"], [1, "text-slate-500", "font-medium", "text-sm"], ["label", "Cancelar", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-check", 3, "onClick", "label", "loading"]], template: function Gallery_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-toolbar", 3);
      \u0275\u0275template(1, Gallery_ng_template_1_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, Gallery_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, Gallery_Conditional_5_Template, 4, 0, "div", 4)(6, Gallery_Conditional_6_Template, 7, 0, "div", 5)(7, Gallery_Conditional_7_Template, 3, 0, "div", 6);
      \u0275\u0275elementStart(8, "p-dialog", 7);
      \u0275\u0275twoWayListener("visibleChange", function Gallery_Template_p_dialog_visibleChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275conditionalCreate(10, Gallery_Conditional_10_Template, 7, 1)(11, Gallery_Conditional_11_Template, 6, 0, "label", 9);
      \u0275\u0275elementStart(12, "input", 10);
      \u0275\u0275listener("change", function Gallery_Template_input_change_12_listener($event) {
        return ctx.onImageSelect($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "form", 11)(14, "div", 12)(15, "div", 13)(16, "label");
      \u0275\u0275text(17, "T\xEDtulo *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 14);
      \u0275\u0275conditionalCreate(19, Gallery_Conditional_19_Template, 2, 0, "small", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 13)(21, "label");
      \u0275\u0275text(22, "Descripci\xF3n ");
      \u0275\u0275elementStart(23, "span", 16);
      \u0275\u0275text(24, "(opcional)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(25, "textarea", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(26, Gallery_ng_template_26_Template, 2, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading ? 5 : ctx.listGallery.length === 0 ? 6 : 7);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(12, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("modal", true)("draggable", false)("resizable", false)("header", ctx.isEditing ? "Editar Imagen" : "Nueva Imagen");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.uploadedImageBase64 ? 10 : 11);
      \u0275\u0275advance(2);
      \u0275\u0275property("hidden", true);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.frmGallery);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.titleFb.touched && ctx.titleFb.hasError("required") ? 19 : -1);
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
    ToolbarModule,
    Toolbar,
    TooltipModule,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    SkeletonModule,
    ProgressSpinnerModule
  ], styles: ["\n.toolbar-custom[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .15rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  color: #64748b;\n  margin: 0;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem;\n  text-align: center;\n}\n.masonry-grid[_ngcontent-%COMP%] {\n  columns: 4;\n  column-gap: .875rem;\n}\n.gallery-card[_ngcontent-%COMP%] {\n  break-inside: avoid;\n  margin-bottom: .875rem;\n  border-radius: 12px;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n}\n.gallery-img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  transition: transform .35s ease;\n}\n.gallery-card[_ngcontent-%COMP%]:hover   .gallery-img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.gallery-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, .75) 0%,\n      transparent 55%);\n  opacity: 0;\n  transition: opacity .25s;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: .875rem;\n}\n.gallery-card[_ngcontent-%COMP%]:hover   .gallery-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.gallery-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: .9rem;\n  font-weight: 600;\n  margin: 0;\n}\n.gallery-desc[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .75);\n  font-size: .75rem;\n  margin: .2rem 0 0;\n}\n.gallery-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .4rem;\n  margin-top: .5rem;\n}\n.gal-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .85rem;\n  transition: all .15s;\n}\n.gal-btn--edit[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, .5);\n  color: #ffffff;\n}\n.gal-btn--edit[_ngcontent-%COMP%]:hover {\n  background: #3b82f6;\n}\n.gal-btn--del[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, .5);\n  color: #ffffff;\n}\n.gal-btn--del[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n}\n.upload-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .5rem;\n}\n.upload-dropzone[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 140px;\n  border: 2px dashed #e2e8f0;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: .5rem;\n  cursor: pointer;\n  transition: border-color .2s, background .2s;\n  padding: 1.5rem;\n}\n.upload-dropzone[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n  background: #f8fafc;\n}\n.preview-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.preview-img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 200px;\n  object-fit: cover;\n  display: block;\n}\n.preview-remove[_ngcontent-%COMP%] {\n  position: absolute;\n  top: .5rem;\n  right: .5rem;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, .5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .75rem;\n  transition: background .15s;\n}\n.preview-remove[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n}\n.change-img-btn[_ngcontent-%COMP%] {\n  font-size: .78rem;\n  font-weight: 600;\n  color: #3b82f6;\n  cursor: pointer;\n  text-decoration: none;\n}\n.change-img-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n}\n.form-field--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: .85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.errorMessage[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: .75rem;\n}\n@media (max-width: 1280px) {\n  .masonry-grid[_ngcontent-%COMP%] {\n    columns: 3;\n  }\n}\n@media (max-width: 900px) {\n  .masonry-grid[_ngcontent-%COMP%] {\n    columns: 2;\n  }\n}\n@media (max-width: 480px) {\n  .masonry-grid[_ngcontent-%COMP%] {\n    columns: 1;\n  }\n}\n/*# sourceMappingURL=gallery.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Gallery, [{
    type: Component,
    args: [{ selector: "app-gallery", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      ButtonModule,
      DialogModule,
      ToolbarModule,
      TooltipModule,
      InputTextModule,
      TextareaModule,
      SkeletonModule,
      ProgressSpinnerModule
    ], template: `<p-toolbar styleClass="mb-4 toolbar-custom">
  <ng-template #start>
    <div class="page-header">
      <h2 class="page-title"><i class="pi pi-images mr-2"></i> Galer\xEDa de Trabajos</h2>
      <span class="page-subtitle">Administra las fotos de los cortes realizados</span>
    </div>
  </ng-template>
  <ng-template #end>
    <p-button label="Nueva Imagen" icon="pi pi-plus" (onClick)="openNew()" />
  </ng-template>
</p-toolbar>

@if(loading) {
  <div class="loading-state">
    <i class="pi pi-spin pi-spinner text-3xl text-slate-400"></i>
    <p class="text-slate-400 mt-2">Cargando galer\xEDa...</p>
  </div>
} @else if(listGallery.length === 0) {
  <div class="empty-state">
    <i class="pi pi-images text-5xl text-slate-200 mb-4"></i>
    <h3 class="text-slate-500 font-semibold">Sin im\xE1genes en la galer\xEDa</h3>
    <p class="text-slate-400 text-sm mb-4">Sube las mejores fotos de tus trabajos.</p>
    <p-button label="Subir primera imagen" icon="pi pi-upload" (onClick)="openNew()" />
  </div>
} @else {
  <div class="masonry-grid">
    @for(item of listGallery; track item.idGallery) {
      <div class="gallery-card">
        <img [src]="item.image" [alt]="item.title" class="gallery-img" />
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3 class="gallery-title">{{ item.title }}</h3>
            @if(item.description) {
              <p class="gallery-desc">{{ item.description }}</p>
            }
          </div>
          <div class="gallery-actions">
            <button class="gal-btn gal-btn--edit" (click)="openEdit(item)" title="Editar">
              <i class="pi pi-pencil"></i>
            </button>
            <button class="gal-btn gal-btn--del" (click)="confirmDelete($event, item)" title="Eliminar">
              <i class="pi pi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    }
  </div>
}

<!-- Dialog -->
<p-dialog
  [(visible)]="dialogVisible"
  [modal]="true"
  [style]="{ width: '500px' }"
  [draggable]="false"
  [resizable]="false"
  [header]="isEditing ? 'Editar Imagen' : 'Nueva Imagen'"
>
  <!-- Upload area -->
  <div class="upload-zone mb-4">
    @if(uploadedImageBase64) {
      <div class="preview-wrap">
        <img [src]="uploadedImageBase64" alt="Preview" class="preview-img" />
        <button class="preview-remove" (click)="removeImage()" title="Quitar">
          <i class="pi pi-times"></i>
        </button>
      </div>
      <label for="galleryImg" class="change-img-btn">
        <i class="pi pi-refresh mr-1"></i> Cambiar imagen
      </label>
    } @else {
      <label for="galleryImg" class="upload-dropzone">
        <i class="pi pi-image text-3xl text-slate-300"></i>
        <span class="text-slate-500 font-medium text-sm">Clic para seleccionar imagen</span>
        <span class="text-slate-400 text-xs">JPG, PNG, WEBP \xB7 m\xE1x. 3 MB</span>
      </label>
    }
    <input id="galleryImg" type="file" accept="image/*" [hidden]="true" (change)="onImageSelect($event)" />
  </div>

  <form [formGroup]="frmGallery">
    <div class="form-grid">
      <div class="form-field form-field--full">
        <label>T\xEDtulo *</label>
        <input pInputText formControlName="title" placeholder="Ej: Fade Cl\xE1sico" class="w-full" />
        @if(titleFb.touched && titleFb.hasError('required')) {
          <small class="errorMessage">Campo requerido.</small>
        }
      </div>
      <div class="form-field form-field--full">
        <label>Descripci\xF3n <span class="text-slate-400 text-xs">(opcional)</span></label>
        <textarea pTextarea formControlName="description" rows="2" placeholder="Detalles del corte..." class="w-full"></textarea>
      </div>
    </div>
  </form>

  <ng-template #footer>
    <p-button label="Cancelar" severity="secondary" [outlined]="true" (onClick)="dialogVisible = false" />
    <p-button [label]="isEditing ? 'Guardar Cambios' : 'Subir Imagen'" icon="pi pi-check" [loading]="saving" (onClick)="saveGallery()" />
  </ng-template>
</p-dialog>
`, styles: ["/* src/app/page/gallery/gallery.css */\n.toolbar-custom {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header {\n  display: flex;\n  flex-direction: column;\n  gap: .15rem;\n}\n.page-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle {\n  font-size: .8rem;\n  color: #64748b;\n  margin: 0;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem;\n  text-align: center;\n}\n.masonry-grid {\n  columns: 4;\n  column-gap: .875rem;\n}\n.gallery-card {\n  break-inside: avoid;\n  margin-bottom: .875rem;\n  border-radius: 12px;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n}\n.gallery-img {\n  width: 100%;\n  display: block;\n  transition: transform .35s ease;\n}\n.gallery-card:hover .gallery-img {\n  transform: scale(1.04);\n}\n.gallery-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, .75) 0%,\n      transparent 55%);\n  opacity: 0;\n  transition: opacity .25s;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: .875rem;\n}\n.gallery-card:hover .gallery-overlay {\n  opacity: 1;\n}\n.gallery-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.gallery-title {\n  color: #fff;\n  font-size: .9rem;\n  font-weight: 600;\n  margin: 0;\n}\n.gallery-desc {\n  color: rgba(255, 255, 255, .75);\n  font-size: .75rem;\n  margin: .2rem 0 0;\n}\n.gallery-actions {\n  display: flex;\n  gap: .4rem;\n  margin-top: .5rem;\n}\n.gal-btn {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .85rem;\n  transition: all .15s;\n}\n.gal-btn--edit {\n  background: rgba(0, 0, 0, .5);\n  color: #ffffff;\n}\n.gal-btn--edit:hover {\n  background: #3b82f6;\n}\n.gal-btn--del {\n  background: rgba(0, 0, 0, .5);\n  color: #ffffff;\n}\n.gal-btn--del:hover {\n  background: #ef4444;\n}\n.upload-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .5rem;\n}\n.upload-dropzone {\n  width: 100%;\n  min-height: 140px;\n  border: 2px dashed #e2e8f0;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: .5rem;\n  cursor: pointer;\n  transition: border-color .2s, background .2s;\n  padding: 1.5rem;\n}\n.upload-dropzone:hover {\n  border-color: #94a3b8;\n  background: #f8fafc;\n}\n.preview-wrap {\n  position: relative;\n  width: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.preview-img {\n  width: 100%;\n  max-height: 200px;\n  object-fit: cover;\n  display: block;\n}\n.preview-remove {\n  position: absolute;\n  top: .5rem;\n  right: .5rem;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, .5);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .75rem;\n  transition: background .15s;\n}\n.preview-remove:hover {\n  background: #ef4444;\n}\n.change-img-btn {\n  font-size: .78rem;\n  font-weight: 600;\n  color: #3b82f6;\n  cursor: pointer;\n  text-decoration: none;\n}\n.change-img-btn:hover {\n  text-decoration: underline;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n}\n.form-field--full {\n  grid-column: 1/-1;\n}\n.form-field label {\n  font-size: .85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.errorMessage {\n  color: #ef4444;\n  font-size: .75rem;\n}\n@media (max-width: 1280px) {\n  .masonry-grid {\n    columns: 3;\n  }\n}\n@media (max-width: 900px) {\n  .masonry-grid {\n    columns: 2;\n  }\n}\n@media (max-width: 480px) {\n  .masonry-grid {\n    columns: 1;\n  }\n}\n/*# sourceMappingURL=gallery.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Gallery, { className: "Gallery", filePath: "src/app/page/gallery/gallery.ts", lineNumber: 67 });
})();
export {
  Gallery
};
//# sourceMappingURL=chunk-5QFIFWOC.js.map
