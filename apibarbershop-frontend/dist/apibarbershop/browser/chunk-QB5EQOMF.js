import {
  Password,
  PasswordModule
} from "./chunk-LRBJ4IJB.js";
import {
  Avatar,
  AvatarModule
} from "./chunk-3IHVDVZN.js";
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
  apiusergetall
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

// src/app/page/users/users.ts
var _c0 = () => [5, 10, 25];
var _c1 = () => ["firstName", "surName", "email", "role"];
var _c2 = () => ({ width: "600px", minHeight: "600px" });
var _c3 = () => ({ "background-color": "#e2e8f0", "color": "#64748b" });
function Users_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "h2", 23);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275text(3, " Gesti\xF3n de Usuarios ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5, "Administradores y Barberos del sistema");
    \u0275\u0275elementEnd()();
  }
}
function Users_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 26);
    \u0275\u0275listener("click", function Users_ng_template_3_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
  }
}
function Users_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275element(4, "i", 30);
    \u0275\u0275elementStart(5, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function Users_ng_template_8_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function Users_ng_template_8_Template_input_input_5_listener() {
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
    \u0275\u0275textInterpolate1(" ", ctx_r2.listUser.length, " usuario(s) en total ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function Users_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "th", 32);
    \u0275\u0275elementStart(2, "th", 33);
    \u0275\u0275text(3, " Nombre ");
    \u0275\u0275element(4, "p-sortIcon", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 35);
    \u0275\u0275text(6, " Correo ");
    \u0275\u0275element(7, "p-sortIcon", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 37);
    \u0275\u0275text(9, " Tel\xE9fono ");
    \u0275\u0275element(10, "p-sortIcon", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 39);
    \u0275\u0275text(12, " Rol ");
    \u0275\u0275element(13, "p-sortIcon", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 41);
    \u0275\u0275text(17, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function Users_ng_template_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-avatar", 42);
  }
  if (rf & 2) {
    const user_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("image", user_r7.photo);
  }
}
function Users_ng_template_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-avatar", 51);
  }
  if (rf & 2) {
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(2, _c3));
  }
}
function Users_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, Users_ng_template_12_Conditional_2_Template, 1, 1, "p-avatar", 42)(3, Users_ng_template_12_Conditional_3_Template, 1, 3, "p-avatar", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "div", 44)(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "p-tag", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "p-tag", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 48)(18, "p-button", 49);
    \u0275\u0275listener("onClick", function Users_ng_template_12_Template_p_button_onClick_18_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEdit(user_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-button", 50);
    \u0275\u0275listener("onClick", function Users_ng_template_12_Template_p_button_onClick_19_listener($event) {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete($event, user_r7));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(user_r7.photo ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", user_r7.firstName, " ", user_r7.surName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.phone);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", user_r7.role)("severity", ctx_r2.getRoleSeverity(user_r7.role));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", user_r7.status === 1 ? "Activo" : "Inactivo")("severity", ctx_r2.getStatusSeverity(user_r7.status));
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function Users_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275elementStart(3, "p", 54);
    \u0275\u0275text(4, "No hay usuarios registrados.");
    \u0275\u0275elementEnd()()();
  }
}
function Users_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Users_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Users_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Users_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Ingrese un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function Users_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Users_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Solo se permiten n\xFAmeros y el s\xEDmbolo +.");
    \u0275\u0275elementEnd();
  }
}
function Users_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "M\xEDnimo 7 d\xEDgitos.");
    \u0275\u0275elementEnd();
  }
}
function Users_Conditional_42_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Campo requerido.");
    \u0275\u0275elementEnd();
  }
}
function Users_Conditional_42_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "M\xEDnimo 6 caracteres.");
    \u0275\u0275elementEnd();
  }
}
function Users_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "Contrase\xF1a *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-password", 55);
    \u0275\u0275conditionalCreate(4, Users_Conditional_42_Conditional_4_Template, 2, 0, "small", 16);
    \u0275\u0275conditionalCreate(5, Users_Conditional_42_Conditional_5_Template, 2, 0, "small", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("feedback", true)("toggleMask", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.passwordFb.touched && ctx_r2.passwordFb.hasError("required") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.passwordFb.touched && ctx_r2.passwordFb.hasError("minlength") ? 5 : -1);
  }
}
function Users_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 16);
    \u0275\u0275text(1, "Seleccione un rol.");
    \u0275\u0275elementEnd();
  }
}
function Users_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2, "Estado *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-select", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r2.statusOptions);
  }
}
function Users_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 57);
    \u0275\u0275listener("onClick", function Users_ng_template_49_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 58);
    \u0275\u0275listener("onClick", function Users_ng_template_49_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveUser());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r2.isEditing ? "Guardar cambios" : "Registrar")("loading", ctx_r2.savingUser);
  }
}
function apiuserinsert(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, "/user/insert", "post");
  rb.body(params.body, "application/json");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apiuserupdate(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, "/user/update", "put");
  rb.body(params.body, "application/json");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apiuserdelete(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/user/delete/${params.idUser}`, "delete");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
var Users = class _Users {
  api = inject(Api);
  formBuilder = inject(FormBuilder);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  cdr = inject(ChangeDetectorRef);
  listUser = [];
  loading = false;
  dialogVisible = false;
  isEditing = false;
  savingUser = false;
  searchValue = "";
  frmUser;
  roleOptions = [
    { label: "Administrador", value: "ADMIN" },
    { label: "Barbero", value: "BARBER" }
  ];
  statusOptions = [
    { label: "Activo", value: 1 },
    { label: "Inactivo", value: 0 }
  ];
  get firstNameFb() {
    return this.frmUser.controls["firstName"];
  }
  get surNameFb() {
    return this.frmUser.controls["surName"];
  }
  get emailFb() {
    return this.frmUser.controls["email"];
  }
  get phoneFb() {
    return this.frmUser.controls["phone"];
  }
  get passwordFb() {
    return this.frmUser.controls["password"];
  }
  get roleFb() {
    return this.frmUser.controls["role"];
  }
  constructor() {
    this.frmUser = this.formBuilder.group({
      idUser: [""],
      firstName: ["", [Validators.required]],
      surName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9+]*$"), Validators.minLength(7)]],
      password: ["", [Validators.minLength(6)]],
      role: ["", [Validators.required]],
      status: [1]
    });
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.loading = true;
    this.api.invoke(apiusergetall).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      this.listUser = data?.listUser ?? [];
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo cargar el listado de usuarios." });
    });
  }
  openNew() {
    this.isEditing = false;
    this.frmUser.reset();
    this.passwordFb.setValidators([Validators.required, Validators.minLength(6)]);
    this.passwordFb.updateValueAndValidity();
    this.dialogVisible = true;
  }
  openEdit(user) {
    this.isEditing = true;
    this.frmUser.patchValue({
      idUser: user.idUser,
      firstName: user.firstName,
      surName: user.surName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      password: "",
      status: user.status
    });
    this.passwordFb.clearValidators();
    this.passwordFb.updateValueAndValidity();
    this.dialogVisible = true;
  }
  saveUser() {
    if (!this.frmUser.valid) {
      this.frmUser.markAllAsTouched();
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "Complete todos los campos correctamente." });
      return;
    }
    this.savingUser = true;
    if (this.isEditing) {
      const body = {
        idUser: this.frmUser.value.idUser,
        firstName: this.frmUser.value.firstName,
        surName: this.frmUser.value.surName,
        email: this.frmUser.value.email,
        role: this.frmUser.value.role,
        photo: "",
        status: this.frmUser.value.status
      };
      this.api.invoke(apiuserupdate, { body }).then((response) => {
        const data = typeof response === "string" ? JSON.parse(response) : response;
        if (data?.type === "success") {
          this.messageService.add({ severity: "success", summary: "Correcto", detail: data.listMessage?.[0] ?? "Usuario actualizado." });
          this.dialogVisible = false;
          this.loadUsers();
        } else {
          this.messageService.add({ severity: "error", summary: "Error", detail: data.listMessage?.[0] ?? "No se pudo actualizar." });
        }
      }).catch(() => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error al actualizar el usuario." });
      }).finally(() => {
        this.savingUser = false;
        this.cdr.detectChanges();
      });
    } else {
      const body = {
        firstName: this.frmUser.value.firstName,
        surName: this.frmUser.value.surName,
        email: this.frmUser.value.email,
        password: this.frmUser.value.password,
        role: this.frmUser.value.role,
        photo: ""
      };
      this.api.invoke(apiuserinsert, { body }).then((response) => {
        const data = typeof response === "string" ? JSON.parse(response) : response;
        if (data?.type === "success") {
          this.messageService.add({ severity: "success", summary: "Correcto", detail: data.listMessage?.[0] ?? "Usuario registrado." });
          this.dialogVisible = false;
          this.loadUsers();
        } else {
          this.messageService.add({ severity: "error", summary: "Error", detail: data.listMessage?.[0] ?? "No se pudo registrar." });
        }
      }).catch(() => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error al registrar el usuario." });
      }).finally(() => {
        this.savingUser = false;
        this.cdr.detectChanges();
      });
    }
  }
  confirmDelete(event, user) {
    this.confirmationService.confirm({
      target: event.target,
      message: `\xBFEliminar al usuario "${user.firstName} ${user.surName}"?`,
      header: "Confirmar eliminaci\xF3n",
      icon: "pi pi-exclamation-triangle",
      rejectButtonProps: { label: "Cancelar", severity: "secondary", outlined: true },
      acceptButtonProps: { label: "S\xED, eliminar", severity: "danger" },
      accept: () => this.deleteUser(user.idUser)
    });
  }
  deleteUser(idUser) {
    this.api.invoke(apiuserdelete, { idUser }).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      if (data?.type === "success") {
        this.listUser = this.listUser.filter((u) => u.idUser !== idUser);
        this.messageService.add({ severity: "success", summary: "Correcto", detail: "Usuario eliminado." });
        this.cdr.detectChanges();
      } else {
        this.messageService.add({ severity: "error", summary: "Error", detail: data.listMessage?.[0] ?? "No se pudo eliminar." });
      }
    }).catch(() => {
      this.messageService.add({ severity: "error", summary: "Error", detail: "Error al eliminar el usuario." });
    });
  }
  getRoleSeverity(role) {
    switch (role) {
      case "ADMIN":
        return "warn";
      case "BARBER":
        return "info";
      default:
        return "secondary";
    }
  }
  getStatusSeverity(status) {
    return status === 1 ? "success" : "danger";
  }
  static \u0275fac = function Users_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Users)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Users, selectors: [["app-users"]], decls: 51, vars: 28, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], ["styleClass", "mb-4 toolbar-custom"], [1, "section-card"], ["stripedRows", "", "dataKey", "idUser", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "globalFilterFields"], [3, "visibleChange", "visible", "modal", "draggable", "resizable", "header"], [3, "formGroup"], [1, "form-grid"], [1, "form-field"], ["pInputText", "", "formControlName", "firstName", "placeholder", "Ej: Carlos", 1, "w-full"], [1, "errorMessage"], ["pInputText", "", "formControlName", "surName", "placeholder", "Ej: Quispe", 1, "w-full"], [1, "form-field", "form-field--full"], ["pInputText", "", "formControlName", "email", "type", "email", "placeholder", "Ej: carlos@barbershop.com", 1, "w-full"], ["pInputText", "", "formControlName", "phone", "type", "tel", "placeholder", "Ej: 987654321", 1, "w-full"], ["formControlName", "role", "optionLabel", "label", "optionValue", "value", "placeholder", "Seleccione un rol", "appendTo", "body", 1, "w-full", 3, "options"], [1, "page-header"], [1, "page-title"], [1, "pi", "pi-users", "mr-2"], [1, "page-subtitle"], ["label", "Nuevo Usuario", "icon", "pi pi-user-plus", 3, "click"], [1, "table-caption"], [1, "results-count"], [1, "search-box"], [1, "pi", "pi-search", "search-icon"], ["pInputText", "", "type", "text", "placeholder", "Buscar usuario...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [2, "width", "56px"], ["pSortableColumn", "firstName"], ["field", "firstName"], ["pSortableColumn", "email"], ["field", "email"], ["pSortableColumn", "phone"], ["field", "phone"], ["pSortableColumn", "role"], ["field", "role"], [1, "text-center", 2, "width", "130px"], ["shape", "circle", "size", "large", 3, "image"], ["icon", "pi pi-user", "shape", "circle", "size", "large", 3, "style"], [1, "user-name-cell"], [1, "user-fullname"], [1, "text-slate-500"], [3, "value", "severity"], [1, "flex", "gap-2", "justify-center"], ["icon", "pi pi-pencil", "severity", "info", "pTooltip", "Editar", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", "pTooltip", "Eliminar", 3, "onClick", "rounded", "text"], ["icon", "pi pi-user", "shape", "circle", "size", "large"], ["colspan", "7", 1, "empty-row"], [1, "pi", "pi-users", "text-4xl", "text-slate-200", "mb-3"], [1, "text-slate-400"], ["formControlName", "password", "styleClass", "w-full", "inputStyleClass", "w-full", "placeholder", "M\xEDnimo 6 caracteres", 3, "feedback", "toggleMask"], ["formControlName", "status", "optionLabel", "label", "optionValue", "value", "placeholder", "Seleccione el estado", "appendTo", "body", 1, "w-full", 3, "options"], ["label", "Cancelar", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-check", 3, "onClick", "label", "loading"]], template: function Users_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-toolbar", 8);
      \u0275\u0275template(1, Users_ng_template_1_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, Users_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 9)(6, "p-table", 10, 2);
      \u0275\u0275template(8, Users_ng_template_8_Template, 6, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(10, Users_ng_template_10_Template, 18, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(12, Users_ng_template_12_Template, 20, 13, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(14, Users_ng_template_14_Template, 5, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p-dialog", 11);
      \u0275\u0275twoWayListener("visibleChange", function Users_Template_p_dialog_visibleChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(17, "form", 12)(18, "div", 13)(19, "div", 14)(20, "label");
      \u0275\u0275text(21, "Nombres *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 15);
      \u0275\u0275conditionalCreate(23, Users_Conditional_23_Template, 2, 0, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 14)(25, "label");
      \u0275\u0275text(26, "Apellidos *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 17);
      \u0275\u0275conditionalCreate(28, Users_Conditional_28_Template, 2, 0, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 18)(30, "label");
      \u0275\u0275text(31, "Correo electr\xF3nico *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 19);
      \u0275\u0275conditionalCreate(33, Users_Conditional_33_Template, 2, 0, "small", 16);
      \u0275\u0275conditionalCreate(34, Users_Conditional_34_Template, 2, 0, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 18)(36, "label");
      \u0275\u0275text(37, "Tel\xE9fono *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 20);
      \u0275\u0275conditionalCreate(39, Users_Conditional_39_Template, 2, 0, "small", 16);
      \u0275\u0275conditionalCreate(40, Users_Conditional_40_Template, 2, 0, "small", 16);
      \u0275\u0275conditionalCreate(41, Users_Conditional_41_Template, 2, 0, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(42, Users_Conditional_42_Template, 6, 4, "div", 18);
      \u0275\u0275elementStart(43, "div", 18)(44, "label");
      \u0275\u0275text(45, "Rol *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "p-select", 21);
      \u0275\u0275conditionalCreate(47, Users_Conditional_47_Template, 2, 0, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(48, Users_Conditional_48_Template, 4, 1, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, Users_ng_template_49_Template, 2, 3, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.listUser)("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(25, _c0))("globalFilterFields", \u0275\u0275pureFunction0(26, _c1));
      \u0275\u0275advance(10);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c2));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("modal", true)("draggable", false)("resizable", false)("header", ctx.isEditing ? "Editar Usuario" : "Nuevo Usuario");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.frmUser);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.firstNameFb.touched && ctx.firstNameFb.hasError("required") ? 23 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.surNameFb.touched && ctx.surNameFb.hasError("required") ? 28 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.emailFb.touched && ctx.emailFb.hasError("required") ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.emailFb.touched && ctx.emailFb.hasError("email") ? 34 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.phoneFb.touched && ctx.phoneFb.hasError("required") ? 39 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.phoneFb.touched && ctx.phoneFb.hasError("pattern") ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.phoneFb.touched && ctx.phoneFb.hasError("minlength") ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isEditing ? 42 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.roleOptions);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.roleFb.touched && ctx.roleFb.hasError("required") ? 47 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEditing ? 48 : -1);
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
    FormsModule,
    NgModel,
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
    PasswordModule,
    Password,
    SelectModule,
    Select,
    TagModule,
    Tag,
    ToolbarModule,
    Toolbar,
    TooltipModule,
    Tooltip,
    AvatarModule,
    Avatar
  ], styles: ["\n.toolbar-custom[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.table-caption[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  gap: 1rem;\n}\n.results-count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  color: #94a3b8;\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding-left: 2.25rem !important;\n  height: 36px;\n  font-size: 0.875rem;\n  width: 220px;\n  border-radius: 8px;\n}\n.user-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-fullname[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem !important;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  padding: 0.5rem 0;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field--full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.errorMessage[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-field--full[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    width: 160px;\n  }\n  .table-caption[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=users.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Users, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      ButtonModule,
      TableModule,
      DialogModule,
      InputTextModule,
      PasswordModule,
      SelectModule,
      TagModule,
      ToolbarModule,
      TooltipModule,
      AvatarModule
    ], template: `<!-- \u2550\u2550 TOOLBAR \u2550\u2550 -->\r
<p-toolbar styleClass="mb-4 toolbar-custom">\r
  <ng-template #start>\r
    <div class="page-header">\r
      <h2 class="page-title">\r
        <i class="pi pi-users mr-2"></i> Gesti\xF3n de Usuarios\r
      </h2>\r
      <span class="page-subtitle">Administradores y Barberos del sistema</span>\r
    </div>\r
  </ng-template>\r
  <ng-template #end>\r
    <p-button\r
      label="Nuevo Usuario"\r
      icon="pi pi-user-plus"\r
      (click)="openNew()"\r
    />\r
  </ng-template>\r
</p-toolbar>\r
\r
<!-- \u2550\u2550 TABLA \u2550\u2550 -->\r
<div class="section-card">\r
  <p-table\r
    [value]="listUser"\r
    [loading]="loading"\r
    [paginator]="true"\r
    [rows]="10"\r
    [rowsPerPageOptions]="[5, 10, 25]"\r
    [globalFilterFields]="['firstName','surName','email','role']"\r
    #dt\r
    stripedRows\r
    dataKey="idUser"\r
  >\r
    <ng-template #caption>\r
      <div class="table-caption">\r
        <span class="results-count">\r
          {{ listUser.length }} usuario(s) en total\r
        </span>\r
        <div class="search-box">\r
          <i class="pi pi-search search-icon"></i>\r
          <input\r
            pInputText\r
            type="text"\r
            [(ngModel)]="searchValue"\r
            (input)="dt.filterGlobal(searchValue, 'contains')"\r
            placeholder="Buscar usuario..."\r
            class="search-input"\r
          />\r
        </div>\r
      </div>\r
    </ng-template>\r
\r
    <ng-template #header>\r
      <tr>\r
        <th style="width:56px"></th>\r
        <th pSortableColumn="firstName">\r
          Nombre <p-sortIcon field="firstName" />\r
        </th>\r
        <th pSortableColumn="email">\r
          Correo <p-sortIcon field="email" />\r
        </th>\r
        <th pSortableColumn="phone">\r
          Tel\xE9fono <p-sortIcon field="phone" />\r
        </th>\r
        <th pSortableColumn="role">\r
          Rol <p-sortIcon field="role" />\r
        </th>\r
        <th>Estado</th>\r
        <th class="text-center" style="width:130px">Acciones</th>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template #body let-user>\r
      <tr>\r
        <td>\r
          @if(user.photo) {\r
            <p-avatar [image]="user.photo" shape="circle" size="large" />\r
          } @else {\r
            <p-avatar icon="pi pi-user" shape="circle" size="large"\r
              [style]="{ 'background-color': '#e2e8f0', 'color': '#64748b' }"\r
            />\r
          }\r
        </td>\r
        <td>\r
          <div class="user-name-cell">\r
            <span class="user-fullname">{{ user.firstName }} {{ user.surName }}</span>\r
          </div>\r
        </td>\r
        <td class="text-slate-500">{{ user.email }}</td>\r
        <td class="text-slate-500">{{ user.phone }}</td>\r
        <td>\r
          <p-tag [value]="user.role" [severity]="getRoleSeverity(user.role)" />\r
        </td>\r
        <td>\r
          <p-tag\r
            [value]="user.status === 1 ? 'Activo' : 'Inactivo'"\r
            [severity]="getStatusSeverity(user.status)"\r
          />\r
        </td>\r
        <td>\r
          <div class="flex gap-2 justify-center">\r
            <p-button\r
              icon="pi pi-pencil"\r
              [rounded]="true"\r
              [text]="true"\r
              severity="info"\r
              pTooltip="Editar"\r
              (onClick)="openEdit(user)"\r
            />\r
            <p-button\r
              icon="pi pi-trash"\r
              [rounded]="true"\r
              [text]="true"\r
              severity="danger"\r
              pTooltip="Eliminar"\r
              (onClick)="confirmDelete($event, user)"\r
            />\r
          </div>\r
        </td>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template #emptymessage>\r
      <tr>\r
        <td colspan="7" class="empty-row">\r
          <i class="pi pi-users text-4xl text-slate-200 mb-3"></i>\r
          <p class="text-slate-400">No hay usuarios registrados.</p>\r
        </td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
</div>\r
\r
<!-- \u2550\u2550 DIALOG FORMULARIO \u2550\u2550 -->\r
<p-dialog\r
  [(visible)]="dialogVisible"\r
  [modal]="true"\r
  [style]="{ width: '600px', minHeight: '600px' }"\r
  [draggable]="false"\r
  [resizable]="false"\r
  [header]="isEditing ? 'Editar Usuario' : 'Nuevo Usuario'"\r
>\r
  <form [formGroup]="frmUser">\r
    <div class="form-grid">\r
\r
      <div class="form-field">\r
        <label>Nombres *</label>\r
        <input pInputText formControlName="firstName" placeholder="Ej: Carlos" class="w-full" />\r
        @if(firstNameFb.touched && firstNameFb.hasError('required')) {\r
          <small class="errorMessage">Campo requerido.</small>\r
        }\r
      </div>\r
\r
      <div class="form-field">\r
        <label>Apellidos *</label>\r
        <input pInputText formControlName="surName" placeholder="Ej: Quispe" class="w-full" />\r
        @if(surNameFb.touched && surNameFb.hasError('required')) {\r
          <small class="errorMessage">Campo requerido.</small>\r
        }\r
      </div>\r
\r
      <div class="form-field form-field--full">\r
        <label>Correo electr\xF3nico *</label>\r
        <input pInputText formControlName="email" type="email" placeholder="Ej: carlos@barbershop.com" class="w-full" />\r
        @if(emailFb.touched && emailFb.hasError('required')) {\r
          <small class="errorMessage">Campo requerido.</small>\r
        }\r
        @if(emailFb.touched && emailFb.hasError('email')) {\r
          <small class="errorMessage">Ingrese un correo v\xE1lido.</small>\r
        }\r
      </div>\r
\r
      <div class="form-field form-field--full">\r
        <label>Tel\xE9fono *</label>\r
        <input pInputText formControlName="phone" type="tel" placeholder="Ej: 987654321" class="w-full" />\r
        @if(phoneFb.touched && phoneFb.hasError('required')) {\r
          <small class="errorMessage">Campo requerido.</small>\r
        }\r
        @if(phoneFb.touched && phoneFb.hasError('pattern')) {\r
          <small class="errorMessage">Solo se permiten n\xFAmeros y el s\xEDmbolo +.</small>\r
        }\r
        @if(phoneFb.touched && phoneFb.hasError('minlength')) {\r
          <small class="errorMessage">M\xEDnimo 7 d\xEDgitos.</small>\r
        }\r
      </div>\r
\r
      @if(!isEditing) {\r
        <div class="form-field form-field--full">\r
          <label>Contrase\xF1a *</label>\r
          <p-password\r
            formControlName="password"\r
            [feedback]="true"\r
            [toggleMask]="true"\r
            styleClass="w-full"\r
            inputStyleClass="w-full"\r
            placeholder="M\xEDnimo 6 caracteres"\r
          />\r
          @if(passwordFb.touched && passwordFb.hasError('required')) {\r
            <small class="errorMessage">Campo requerido.</small>\r
          }\r
          @if(passwordFb.touched && passwordFb.hasError('minlength')) {\r
            <small class="errorMessage">M\xEDnimo 6 caracteres.</small>\r
          }\r
        </div>\r
      }\r
\r
      <div class="form-field form-field--full">\r
        <label>Rol *</label>\r
        <p-select\r
          [options]="roleOptions"\r
          formControlName="role"\r
          optionLabel="label"\r
          optionValue="value"\r
          placeholder="Seleccione un rol"\r
          appendTo="body"\r
          class="w-full"\r
        />\r
        @if(roleFb.touched && roleFb.hasError('required')) {\r
          <small class="errorMessage">Seleccione un rol.</small>\r
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
            appendTo="body"\r
            class="w-full"\r
          />\r
        </div>\r
      }\r
\r
    </div>\r
  </form>\r
\r
  <ng-template #footer>\r
    <p-button\r
      label="Cancelar"\r
      icon="pi pi-times"\r
      severity="secondary"\r
      [outlined]="true"\r
      (onClick)="dialogVisible = false"\r
    />\r
    <p-button\r
      [label]="isEditing ? 'Guardar cambios' : 'Registrar'"\r
      icon="pi pi-check"\r
      [loading]="savingUser"\r
      (onClick)="saveUser()"\r
    />\r
  </ng-template>\r
</p-dialog>`, styles: ["/* src/app/page/users/users.css */\n.toolbar-custom {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.page-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.section-card {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.table-caption {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  gap: 1rem;\n}\n.results-count {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.search-box {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-icon {\n  position: absolute;\n  left: 0.75rem;\n  color: #94a3b8;\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.search-input {\n  padding-left: 2.25rem !important;\n  height: 36px;\n  font-size: 0.875rem;\n  width: 220px;\n  border-radius: 8px;\n}\n.user-name-cell {\n  display: flex;\n  flex-direction: column;\n}\n.user-fullname {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.empty-row {\n  text-align: center;\n  padding: 4rem !important;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  padding: 0.5rem 0;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field--full {\n  grid-column: 1 / -1;\n}\n.form-field label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.errorMessage {\n  color: #ef4444;\n  font-size: 0.75rem;\n}\n@media (max-width: 640px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-field--full {\n    grid-column: 1;\n  }\n  .search-input {\n    width: 160px;\n  }\n  .table-caption {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=users.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Users, { className: "Users", filePath: "src/app/page/users/users.ts", lineNumber: 74 });
})();
export {
  Users
};
//# sourceMappingURL=chunk-QB5EQOMF.js.map
