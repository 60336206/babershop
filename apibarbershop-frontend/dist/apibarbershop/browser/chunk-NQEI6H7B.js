import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-DQJJIHR5.js";
import "./chunk-MD7MSBDY.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-RS4TRJF4.js";
import {
  Dialog,
  DialogModule
} from "./chunk-G44MOSI6.js";
import "./chunk-O7RX2J2V.js";
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
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
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
  apicustomergetall,
  apicustomerinsert
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
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

// src/app/page/customers/customers.ts
var _c0 = () => [5, 10, 25, 50];
var _c1 = () => ["firstName", "surName", "phone", "email"];
var _c2 = () => ({ width: "480px" });
function Customers_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "h2", 23);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275text(3, " Gesti\xF3n de Clientes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5, "Clientes registrados en el sistema");
    \u0275\u0275elementEnd()();
  }
}
function Customers_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 26);
    \u0275\u0275listener("click", function Customers_ng_template_3_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
  }
}
function Customers_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275element(4, "i", 30);
    \u0275\u0275elementStart(5, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function Customers_ng_template_8_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function Customers_ng_template_8_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt_r5 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(dt_r5.filterGlobal(ctx_r2.searchValue, "contains"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.listCustomer.length, " cliente(s)");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function Customers_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 32);
    \u0275\u0275text(2, "Nombre ");
    \u0275\u0275element(3, "p-sortIcon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 34);
    \u0275\u0275text(5, "Tel\xE9fono ");
    \u0275\u0275element(6, "p-sortIcon", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 36);
    \u0275\u0275text(12, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function Customers_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 37)(3, "div", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "td")(9, "span", 40);
    \u0275\u0275element(10, "i", 41);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 42);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "p-tag", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 44)(18, "p-button", 45);
    \u0275\u0275listener("onClick", function Customers_ng_template_12_Template_p_button_onClick_18_listener() {
      const customer_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEdit(customer_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-button", 46);
    \u0275\u0275listener("onClick", function Customers_ng_template_12_Template_p_button_onClick_19_listener($event) {
      const customer_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete($event, customer_r7));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const customer_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", customer_r7.firstName.charAt(0).toUpperCase(), "", customer_r7.surName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", customer_r7.firstName, " ", customer_r7.surName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", customer_r7.phone, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r7.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", customer_r7.status === 1 ? "Activo" : "Inactivo")("severity", ctx_r2.getStatusSeverity(customer_r7.status));
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function Customers_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275element(2, "i", 48);
    \u0275\u0275elementStart(3, "p", 49);
    \u0275\u0275text(4, "No hay clientes registrados.");
    \u0275\u0275elementEnd()()();
  }
}
function Customers_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Customers_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Customers_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Customers_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Solo n\xFAmeros, m\xEDnimo 7 d\xEDgitos.");
    \u0275\u0275elementEnd();
  }
}
function Customers_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Ingrese un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function Customers_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "Estado *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-select", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r2.statusOptions);
  }
}
function Customers_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 51);
    \u0275\u0275listener("onClick", function Customers_ng_template_43_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 52);
    \u0275\u0275listener("onClick", function Customers_ng_template_43_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveCustomer());
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
function apicustomerupdate(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, "/customer/update", "put");
  rb.body(params.body, "application/json");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apicustomerdelete(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/customer/delete/${params.idCustomer}`, "delete");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
var Customers = class _Customers {
  api = inject(Api);
  formBuilder = inject(FormBuilder);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  cdr = inject(ChangeDetectorRef);
  listCustomer = [];
  loading = false;
  statusOptions = [
    { label: "Activo", value: 1 },
    { label: "Inactivo", value: 0 }
  ];
  dialogVisible = false;
  isEditing = false;
  saving = false;
  searchValue = "";
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
  constructor() {
    this.frmCustomer = this.formBuilder.group({
      idCustomer: [""],
      firstName: ["", [Validators.required]],
      surName: ["", [Validators.required]],
      phone: ["", [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
      email: ["", [Validators.email]],
      status: [1]
    });
  }
  ngOnInit() {
    this.loadCustomers();
  }
  loadCustomers() {
    this.loading = true;
    this.api.invoke(apicustomergetall).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      this.listCustomer = data?.listCustomer ?? [];
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo cargar el listado de clientes." });
    });
  }
  openNew() {
    this.isEditing = false;
    this.frmCustomer.reset();
    this.dialogVisible = true;
  }
  openEdit(customer) {
    this.isEditing = true;
    this.frmCustomer.patchValue(customer);
    this.dialogVisible = true;
  }
  saveCustomer() {
    if (!this.frmCustomer.valid) {
      this.frmCustomer.markAllAsTouched();
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "Complete todos los campos correctamente." });
      return;
    }
    this.saving = true;
    if (this.isEditing) {
      const body = {
        idCustomer: this.frmCustomer.value.idCustomer,
        firstName: this.frmCustomer.value.firstName,
        surName: this.frmCustomer.value.surName,
        phone: this.frmCustomer.value.phone,
        email: this.frmCustomer.value.email ?? "",
        status: this.frmCustomer.value.status
      };
      this.api.invoke(apicustomerupdate, { body }).then((response) => {
        const data = typeof response === "string" ? JSON.parse(response) : response;
        if (data?.type === "success") {
          this.messageService.add({ severity: "success", summary: "Correcto", detail: "Cliente actualizado." });
          this.dialogVisible = false;
          this.loadCustomers();
        } else {
          this.messageService.add({ severity: "error", summary: "Error", detail: data.listMessage?.[0] ?? "Error al actualizar." });
        }
      }).catch(() => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error al actualizar el cliente." });
      }).finally(() => {
        this.saving = false;
        this.cdr.detectChanges();
      });
    } else {
      const params = {
        body: {
          firstName: this.frmCustomer.value.firstName,
          surName: this.frmCustomer.value.surName,
          phone: this.frmCustomer.value.phone,
          email: this.frmCustomer.value.email ?? ""
        }
      };
      this.api.invoke(apicustomerinsert, params).then((response) => {
        const data = typeof response === "string" ? JSON.parse(response) : response;
        if (data?.type === "success") {
          this.messageService.add({ severity: "success", summary: "Correcto", detail: "Cliente registrado." });
          this.dialogVisible = false;
          this.loadCustomers();
        } else {
          this.messageService.add({ severity: "error", summary: "Error", detail: data.listMessage?.[0] ?? "Error al registrar." });
        }
      }).catch(() => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error al registrar el cliente." });
      }).finally(() => {
        this.saving = false;
        this.cdr.detectChanges();
      });
    }
  }
  confirmDelete(event, customer) {
    this.confirmationService.confirm({
      target: event.target,
      message: `\xBFEliminar al cliente "${customer.firstName} ${customer.surName}"?`,
      header: "Confirmar eliminaci\xF3n",
      icon: "pi pi-exclamation-triangle",
      rejectButtonProps: { label: "Cancelar", severity: "secondary", outlined: true },
      acceptButtonProps: { label: "S\xED, eliminar", severity: "danger" },
      accept: () => {
        this.api.invoke(apicustomerdelete, { idCustomer: customer.idCustomer }).then((response) => {
          const data = typeof response === "string" ? JSON.parse(response) : response;
          if (data?.type === "success") {
            this.listCustomer = this.listCustomer.filter((c) => c.idCustomer !== customer.idCustomer);
            this.messageService.add({ severity: "success", summary: "Correcto", detail: "Cliente eliminado." });
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
  static \u0275fac = function Customers_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Customers)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Customers, selectors: [["app-customers"]], decls: 45, vars: 23, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], ["styleClass", "mb-4 toolbar-custom"], [1, "section-card"], ["stripedRows", "", "dataKey", "idCustomer", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "globalFilterFields"], [3, "visibleChange", "visible", "modal", "draggable", "resizable", "header"], [3, "formGroup"], [1, "form-grid"], [1, "form-field"], ["pInputText", "", "formControlName", "firstName", "placeholder", "Ej: Mar\xEDa", 1, "w-full"], [1, "errorMessage"], ["pInputText", "", "formControlName", "surName", "placeholder", "Ej: Mamani", 1, "w-full"], [1, "form-field", "form-field--full"], ["pInputText", "", "formControlName", "phone", "placeholder", "Ej: 987654321", 1, "w-full"], [1, "optional-label"], ["pInputText", "", "formControlName", "email", "type", "email", "placeholder", "Ej: maria@gmail.com", 1, "w-full"], [1, "page-header"], [1, "page-title"], [1, "pi", "pi-id-card", "mr-2"], [1, "page-subtitle"], ["label", "Nuevo Cliente", "icon", "pi pi-user-plus", 3, "click"], [1, "table-caption"], [1, "results-count"], [1, "search-box"], [1, "pi", "pi-search", "search-icon"], ["pInputText", "", "placeholder", "Buscar cliente...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], ["pSortableColumn", "firstName"], ["field", "firstName"], ["pSortableColumn", "phone"], ["field", "phone"], [1, "text-center", 2, "width", "130px"], [1, "customer-name-cell"], [1, "customer-avatar"], [1, "customer-fullname"], [1, "flex", "items-center", "gap-1", "text-slate-600"], [1, "pi", "pi-phone", "text-xs"], [1, "text-slate-500", "text-sm"], [3, "value", "severity"], [1, "flex", "gap-2", "justify-center"], ["icon", "pi pi-pencil", "severity", "info", "pTooltip", "Editar", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", "pTooltip", "Eliminar", 3, "onClick", "rounded", "text"], ["colspan", "5", 1, "empty-row"], [1, "pi", "pi-id-card", "text-4xl", "text-slate-200", "mb-3"], [1, "text-slate-400"], ["formControlName", "status", "optionLabel", "label", "optionValue", "value", "placeholder", "Seleccione el estado", 1, "w-full", 3, "options"], ["label", "Cancelar", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-check", 3, "onClick", "label", "loading"]], template: function Customers_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-toolbar", 8);
      \u0275\u0275template(1, Customers_ng_template_1_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, Customers_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 9)(6, "p-table", 10, 2);
      \u0275\u0275template(8, Customers_ng_template_8_Template, 6, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(10, Customers_ng_template_10_Template, 13, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(12, Customers_ng_template_12_Template, 20, 12, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(14, Customers_ng_template_14_Template, 5, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p-dialog", 11);
      \u0275\u0275twoWayListener("visibleChange", function Customers_Template_p_dialog_visibleChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(17, "form", 12)(18, "div", 13)(19, "div", 14)(20, "label");
      \u0275\u0275text(21, "Nombres *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 15);
      \u0275\u0275conditionalCreate(23, Customers_Conditional_23_Template, 2, 0, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 14)(25, "label");
      \u0275\u0275text(26, "Apellidos *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 17);
      \u0275\u0275conditionalCreate(28, Customers_Conditional_28_Template, 2, 0, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 18)(30, "label");
      \u0275\u0275text(31, "Tel\xE9fono / Celular *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 19);
      \u0275\u0275conditionalCreate(33, Customers_Conditional_33_Template, 2, 0, "small", 16);
      \u0275\u0275conditionalCreate(34, Customers_Conditional_34_Template, 2, 0, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 18)(36, "label");
      \u0275\u0275text(37, "Correo electr\xF3nico ");
      \u0275\u0275elementStart(38, "span", 20);
      \u0275\u0275text(39, "(opcional)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(40, "input", 21);
      \u0275\u0275conditionalCreate(41, Customers_Conditional_41_Template, 2, 0, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(42, Customers_Conditional_42_Template, 4, 1, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(43, Customers_ng_template_43_Template, 2, 3, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.listCustomer)("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(20, _c0))("globalFilterFields", \u0275\u0275pureFunction0(21, _c1));
      \u0275\u0275advance(10);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c2));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("modal", true)("draggable", false)("resizable", false)("header", ctx.isEditing ? "Editar Cliente" : "Nuevo Cliente");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.frmCustomer);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.firstNameFb.touched && ctx.firstNameFb.hasError("required") ? 23 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.surNameFb.touched && ctx.surNameFb.hasError("required") ? 28 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.phoneFb.touched && ctx.phoneFb.hasError("required") ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.phoneFb.touched && ctx.phoneFb.hasError("pattern") ? 34 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.emailFb.touched && ctx.emailFb.hasError("email") ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEditing ? 42 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    ButtonModule,
    Button,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    DialogModule,
    Dialog,
    InputTextModule,
    InputText,
    TagModule,
    Tag,
    ToolbarModule,
    Toolbar,
    TooltipModule,
    Tooltip,
    SelectModule,
    Select
  ], styles: ["\n.toolbar-custom[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.table-caption[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  gap: 1rem;\n}\n.results-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  color: #94a3b8;\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding-left: 2.25rem !important;\n  height: 36px;\n  font-size: 0.875rem;\n  width: 220px;\n  border-radius: 8px;\n}\n.customer-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.customer-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      #334155);\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  letter-spacing: 0.05em;\n}\n.customer-fullname[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem !important;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  padding: 0.5rem 0;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field--full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.errorMessage[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-field--full[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    width: 160px;\n  }\n}\n/*# sourceMappingURL=customers.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Customers, [{
    type: Component,
    args: [{ selector: "app-customers", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ButtonModule,
      TableModule,
      DialogModule,
      InputTextModule,
      TagModule,
      ToolbarModule,
      TooltipModule,
      SelectModule
    ], template: `<!-- \u2550\u2550 TOOLBAR \u2550\u2550 -->\r
<p-toolbar styleClass="mb-4 toolbar-custom">\r
  <ng-template #start>\r
    <div class="page-header">\r
      <h2 class="page-title">\r
        <i class="pi pi-id-card mr-2"></i> Gesti\xF3n de Clientes\r
      </h2>\r
      <span class="page-subtitle">Clientes registrados en el sistema</span>\r
    </div>\r
  </ng-template>\r
  <ng-template #end>\r
    <p-button label="Nuevo Cliente" icon="pi pi-user-plus" (click)="openNew()" />\r
  </ng-template>\r
</p-toolbar>\r
\r
<!-- \u2550\u2550 TABLA \u2550\u2550 -->\r
<div class="section-card">\r
  <p-table\r
    [value]="listCustomer"\r
    [loading]="loading"\r
    [paginator]="true"\r
    [rows]="10"\r
    [rowsPerPageOptions]="[5,10,25,50]"\r
    [globalFilterFields]="['firstName','surName','phone','email']"\r
    #dt\r
    stripedRows\r
    dataKey="idCustomer"\r
  >\r
    <ng-template #caption>\r
      <div class="table-caption">\r
        <span class="results-count">{{ listCustomer.length }} cliente(s)</span>\r
        <div class="search-box">\r
          <i class="pi pi-search search-icon"></i>\r
          <input\r
            pInputText\r
            [(ngModel)]="searchValue"\r
            (input)="dt.filterGlobal(searchValue, 'contains')"\r
            placeholder="Buscar cliente..."\r
            class="search-input"\r
          />\r
        </div>\r
      </div>\r
    </ng-template>\r
\r
    <ng-template #header>\r
      <tr>\r
        <th pSortableColumn="firstName">Nombre <p-sortIcon field="firstName" /></th>\r
        <th pSortableColumn="phone">Tel\xE9fono <p-sortIcon field="phone" /></th>\r
        <th>Correo</th>\r
        <th>Estado</th>\r
        <th class="text-center" style="width:130px">Acciones</th>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template #body let-customer>\r
      <tr>\r
        <td>\r
          <div class="customer-name-cell">\r
            <div class="customer-avatar">\r
              {{ customer.firstName.charAt(0).toUpperCase() }}{{ customer.surName.charAt(0).toUpperCase() }}\r
            </div>\r
            <div>\r
              <span class="customer-fullname">{{ customer.firstName }} {{ customer.surName }}</span>\r
            </div>\r
          </div>\r
        </td>\r
        <td>\r
          <span class="flex items-center gap-1 text-slate-600">\r
            <i class="pi pi-phone text-xs"></i>\r
            {{ customer.phone }}\r
          </span>\r
        </td>\r
        <td class="text-slate-500 text-sm">{{ customer.email || '\u2014' }}</td>\r
        <td>\r
          <p-tag\r
            [value]="customer.status === 1 ? 'Activo' : 'Inactivo'"\r
            [severity]="getStatusSeverity(customer.status)"\r
          />\r
        </td>\r
        <td>\r
          <div class="flex gap-2 justify-center">\r
            <p-button icon="pi pi-pencil" [rounded]="true" [text]="true" severity="info" pTooltip="Editar" (onClick)="openEdit(customer)" />\r
            <p-button icon="pi pi-trash" [rounded]="true" [text]="true" severity="danger" pTooltip="Eliminar" (onClick)="confirmDelete($event, customer)" />\r
          </div>\r
        </td>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template #emptymessage>\r
      <tr>\r
        <td colspan="5" class="empty-row">\r
          <i class="pi pi-id-card text-4xl text-slate-200 mb-3"></i>\r
          <p class="text-slate-400">No hay clientes registrados.</p>\r
        </td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
</div>\r
\r
<!-- \u2550\u2550 DIALOG \u2550\u2550 -->\r
<p-dialog\r
  [(visible)]="dialogVisible"\r
  [modal]="true"\r
  [style]="{ width: '480px' }"\r
  [draggable]="false"\r
  [resizable]="false"\r
  [header]="isEditing ? 'Editar Cliente' : 'Nuevo Cliente'"\r
>\r
  <form [formGroup]="frmCustomer">\r
    <div class="form-grid">\r
\r
      <div class="form-field">\r
        <label>Nombres *</label>\r
        <input pInputText formControlName="firstName" placeholder="Ej: Mar\xEDa" class="w-full" />\r
        @if(firstNameFb.touched && firstNameFb.hasError('required')) {\r
          <small class="errorMessage">Campo requerido.</small>\r
        }\r
      </div>\r
\r
      <div class="form-field">\r
        <label>Apellidos *</label>\r
        <input pInputText formControlName="surName" placeholder="Ej: Mamani" class="w-full" />\r
        @if(surNameFb.touched && surNameFb.hasError('required')) {\r
          <small class="errorMessage">Campo requerido.</small>\r
        }\r
      </div>\r
\r
      <div class="form-field form-field--full">\r
        <label>Tel\xE9fono / Celular *</label>\r
        <input pInputText formControlName="phone" placeholder="Ej: 987654321" class="w-full" />\r
        @if(phoneFb.touched && phoneFb.hasError('required')) {\r
          <small class="errorMessage">Campo requerido.</small>\r
        }\r
        @if(phoneFb.touched && phoneFb.hasError('pattern')) {\r
          <small class="errorMessage">Solo n\xFAmeros, m\xEDnimo 7 d\xEDgitos.</small>\r
        }\r
      </div>\r
\r
      <div class="form-field form-field--full">\r
        <label>Correo electr\xF3nico <span class="optional-label">(opcional)</span></label>\r
        <input pInputText formControlName="email" type="email" placeholder="Ej: maria@gmail.com" class="w-full" />\r
        @if(emailFb.touched && emailFb.hasError('email')) {\r
          <small class="errorMessage">Ingrese un correo v\xE1lido.</small>\r
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
    <p-button [label]="isEditing ? 'Guardar cambios' : 'Registrar'" icon="pi pi-check" [loading]="saving" (onClick)="saveCustomer()" />\r
  </ng-template>\r
</p-dialog>`, styles: ["/* src/app/page/customers/customers.css */\n.toolbar-custom {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.page-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.section-card {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.table-caption {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  gap: 1rem;\n}\n.results-count {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.search-box {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-icon {\n  position: absolute;\n  left: 0.75rem;\n  color: #94a3b8;\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.search-input {\n  padding-left: 2.25rem !important;\n  height: 36px;\n  font-size: 0.875rem;\n  width: 220px;\n  border-radius: 8px;\n}\n.customer-name-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.customer-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      #334155);\n  color: #ffffff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  letter-spacing: 0.05em;\n}\n.customer-fullname {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.empty-row {\n  text-align: center;\n  padding: 4rem !important;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  padding: 0.5rem 0;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field--full {\n  grid-column: 1 / -1;\n}\n.form-field label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.optional-label {\n  color: #94a3b8;\n  font-weight: 400;\n}\n.errorMessage {\n  color: #ef4444;\n  font-size: 0.75rem;\n}\n@media (max-width: 640px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-field--full {\n    grid-column: 1;\n  }\n  .search-input {\n    width: 160px;\n  }\n}\n/*# sourceMappingURL=customers.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Customers, { className: "Customers", filePath: "src/app/page/customers/customers.ts", lineNumber: 60 });
})();
export {
  Customers
};
//# sourceMappingURL=chunk-NQEI6H7B.js.map
