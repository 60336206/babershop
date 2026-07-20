import {
  CardModule
} from "./chunk-P6YI4ZT2.js";
import {
  AuthService
} from "./chunk-66EMLGYO.js";
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
  TooltipModule
} from "./chunk-JOO3LIF4.js";
import "./chunk-ITVICGZ6.js";
import {
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
  ɵɵclassProp,
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
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JJSRJYGA.js";

// src/app/page/schedules/schedules.ts
var _c0 = () => ({ width: "420px" });
var _forTrack0 = ($index, $item) => $item.dayName;
function Schedules_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h2", 15);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275text(3, " Horarios de Atenci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5, "Disponibilidad semanal de los barberos");
    \u0275\u0275elementEnd()();
  }
}
function Schedules_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "p-select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function Schedules_ng_template_3_Template_p_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedBarberId, $event) || (ctx_r2.selectedBarberId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function Schedules_ng_template_3_Template_p_select_onChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBarberChange($event.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r2.listBarbers);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedBarberId);
    \u0275\u0275property("loading", ctx_r2.loadingBarbers)("disabled", ctx_r2.listBarbers.length <= 1);
  }
}
function Schedules_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3, "Cargando horarios...");
    \u0275\u0275elementEnd()();
  }
}
function Schedules_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementStart(2, "h3", 23);
    \u0275\u0275text(3, "Sin barberos disponibles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 24);
    \u0275\u0275text(5, "Registre usuarios con el rol Barbero para gestionar horarios.");
    \u0275\u0275elementEnd()();
  }
}
function Schedules_Conditional_7_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Activo");
    \u0275\u0275elementEnd();
  }
}
function Schedules_Conditional_7_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Libre");
    \u0275\u0275elementEnd();
  }
}
function Schedules_Conditional_7_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3, "Entrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 39);
    \u0275\u0275element(7, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36)(9, "span", 37);
    \u0275\u0275text(10, "Salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const day_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatHour12(day_r4.schedule.startHour));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.formatHour12(day_r4.schedule.endHour));
  }
}
function Schedules_Conditional_7_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "span", 42);
    \u0275\u0275text(3, "D\xEDa de descanso");
    \u0275\u0275elementEnd()();
  }
}
function Schedules_Conditional_7_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function Schedules_Conditional_7_For_2_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const day_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(day_r4.schedule));
    });
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2, " Editar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 45);
    \u0275\u0275listener("click", function Schedules_Conditional_7_For_2_Conditional_10_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const day_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmDelete($event, day_r4.schedule));
    });
    \u0275\u0275element(4, "i", 46);
    \u0275\u0275elementEnd();
  }
}
function Schedules_Conditional_7_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function Schedules_Conditional_7_For_2_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const day_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openAdd(day_r4.dayName));
    });
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275text(2, " Agregar ");
    \u0275\u0275elementEnd();
  }
}
function Schedules_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Schedules_Conditional_7_For_2_Conditional_4_Template, 2, 0, "span", 29)(5, Schedules_Conditional_7_For_2_Conditional_5_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275conditionalCreate(7, Schedules_Conditional_7_For_2_Conditional_7_Template, 13, 2, "div", 32)(8, Schedules_Conditional_7_For_2_Conditional_8_Template, 4, 0, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 34);
    \u0275\u0275conditionalCreate(10, Schedules_Conditional_7_For_2_Conditional_10_Template, 5, 0)(11, Schedules_Conditional_7_For_2_Conditional_11_Template, 3, 0, "button", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    \u0275\u0275classProp("day-card--active", day_r4.schedule);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(day_r4.dayName);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r4.schedule ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(day_r4.schedule ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(day_r4.schedule ? 10 : 11);
  }
}
function Schedules_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, Schedules_Conditional_7_For_2_Template, 12, 6, "div", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.weeklySchedule);
  }
}
function Schedules_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1, "Requerido.");
    \u0275\u0275elementEnd();
  }
}
function Schedules_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1, "Requerido.");
    \u0275\u0275elementEnd();
  }
}
function Schedules_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 49);
    \u0275\u0275listener("onClick", function Schedules_ng_template_21_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 50);
    \u0275\u0275listener("onClick", function Schedules_ng_template_21_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveSchedule());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.saving);
  }
}
function apibarberschedulegetbybarber(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/barberschedule/getbybarber/${params.idUser}`, "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apibarberscheduleinsert(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, "/barberschedule/insert", "post");
  rb.body(params.body, "application/json");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apibarberscheduleupdate(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, "/barberschedule/update", "put");
  rb.body(params.body, "application/json");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apibarberscheduledelete(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/barberschedule/delete/${params.idBarberSchedule}`, "delete");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
var Schedules = class _Schedules {
  api = inject(Api);
  formBuilder = inject(FormBuilder);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  cdr = inject(ChangeDetectorRef);
  authService = inject(AuthService);
  user = this.authService.getUser();
  listBarbers = [];
  selectedBarberId = "";
  loadingBarbers = false;
  loadingSchedules = false;
  daysOfWeek = ["Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado", "Domingo"];
  weeklySchedule = [];
  dialogVisible = false;
  isEditing = false;
  saving = false;
  frmSchedule;
  get startHourFb() {
    return this.frmSchedule.controls["startHour"];
  }
  get endHourFb() {
    return this.frmSchedule.controls["endHour"];
  }
  get dayNameFb() {
    return this.frmSchedule.controls["dayName"];
  }
  constructor() {
    this.frmSchedule = this.formBuilder.group({
      idBarberSchedule: [""],
      idUser: [""],
      dayName: ["", [Validators.required]],
      startHour: ["", [Validators.required]],
      endHour: ["", [Validators.required]]
    });
  }
  ngOnInit() {
    this.loadBarbers();
  }
  loadBarbers() {
    if (this.user?.role === "BARBER") {
      this.listBarbers = [this.user];
      this.selectedBarberId = this.user.idUser;
      this.loadSchedulesForBarber(this.selectedBarberId);
      return;
    }
    this.loadingBarbers = true;
    this.api.invoke(apiusergetall).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      const allUsers = data?.listUser ?? [];
      this.listBarbers = allUsers.filter((u) => u.role === "BARBER" || u.role === "ADMIN");
      if (this.listBarbers.length > 0) {
        this.selectedBarberId = this.listBarbers[0].idUser;
        this.loadSchedulesForBarber(this.selectedBarberId);
      }
      this.loadingBarbers = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loadingBarbers = false;
      this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo cargar la lista de barberos." });
    });
  }
  onBarberChange(idUser) {
    this.selectedBarberId = idUser;
    this.loadSchedulesForBarber(idUser);
  }
  loadSchedulesForBarber(idUser) {
    this.loadingSchedules = true;
    this.api.invoke(apibarberschedulegetbybarber, { idUser }).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      const schedules = data?.listBarberSchedule ?? [];
      this.mapWeeklySchedule(schedules);
      this.loadingSchedules = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loadingSchedules = false;
      this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo cargar los horarios del barbero." });
    });
  }
  mapWeeklySchedule(apiSchedules) {
    this.weeklySchedule = this.daysOfWeek.map((day) => {
      const sched = apiSchedules.find((s) => {
        const dayMatch = s.dayName?.trim().toLowerCase() === day.trim().toLowerCase();
        const statusMatch = s.status !== 0;
        return dayMatch && statusMatch;
      });
      return {
        dayName: day,
        schedule: sched || null
      };
    });
  }
  openAdd(dayName) {
    this.isEditing = false;
    this.frmSchedule.reset({
      idBarberSchedule: "",
      idUser: this.selectedBarberId,
      dayName,
      startHour: "09:00",
      endHour: "18:00"
    });
    this.dialogVisible = true;
  }
  openEdit(sched) {
    this.isEditing = true;
    this.frmSchedule.patchValue({
      idBarberSchedule: sched.idBarberSchedule,
      idUser: sched.idUser,
      dayName: sched.dayName,
      startHour: sched.startHour.substring(0, 5),
      // extraer HH:mm
      endHour: sched.endHour.substring(0, 5)
      // extraer HH:mm
    });
    this.dialogVisible = true;
  }
  saveSchedule() {
    if (!this.frmSchedule.valid) {
      this.frmSchedule.markAllAsTouched();
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "Por favor complete todos los campos." });
      return;
    }
    const val = this.frmSchedule.value;
    if (val.startHour >= val.endHour) {
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "La hora de inicio debe ser anterior a la hora de fin." });
      return;
    }
    this.saving = true;
    const startFormatted = val.startHour.length > 5 ? val.startHour.substring(0, 8) : val.startHour + ":00";
    const endFormatted = val.endHour.length > 5 ? val.endHour.substring(0, 8) : val.endHour + ":00";
    const fn = this.isEditing ? apibarberscheduleupdate : apibarberscheduleinsert;
    const body = this.isEditing ? { idBarberSchedule: val.idBarberSchedule, dayName: val.dayName, startHour: startFormatted, endHour: endFormatted } : { idUser: val.idUser || this.selectedBarberId, dayName: val.dayName, startHour: startFormatted, endHour: endFormatted };
    this.api.invoke(fn, { body }).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      if (data?.type === "success") {
        this.messageService.add({ severity: "success", summary: "Correcto", detail: data.listMessage?.[0] ?? "Horario guardado." });
        this.dialogVisible = false;
        this.loadSchedulesForBarber(this.selectedBarberId);
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
  confirmDelete(event, sched) {
    this.confirmationService.confirm({
      target: event.target,
      message: `\xBFDesactivar el horario para el d\xEDa ${sched.dayName}?`,
      header: "Confirmar desactivaci\xF3n",
      icon: "pi pi-exclamation-triangle",
      rejectButtonProps: { label: "Cancelar", severity: "secondary", outlined: true },
      acceptButtonProps: { label: "S\xED, desactivar", severity: "danger" },
      accept: () => {
        this.api.invoke(apibarberscheduledelete, { idBarberSchedule: sched.idBarberSchedule }).then((response) => {
          const data = typeof response === "string" ? JSON.parse(response) : response;
          if (data?.type === "success") {
            this.messageService.add({ severity: "success", summary: "Correcto", detail: "Horario desactivado." });
            this.loadSchedulesForBarber(this.selectedBarberId);
          } else {
            this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo desactivar." });
          }
        }).catch(() => {
          this.messageService.add({ severity: "error", summary: "Error", detail: "Error al desactivar el horario." });
        });
      }
    });
  }
  formatHour12(timeStr) {
    if (!timeStr)
      return "";
    const parts = timeStr.split(":");
    let hours = Number.parseInt(parts[0], 10);
    const minutes = parts[1];
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours || 12;
    return `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;
  }
  static \u0275fac = function Schedules_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Schedules)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Schedules, selectors: [["app-schedules"]], decls: 23, vars: 12, consts: [["start", ""], ["end", ""], ["footer", ""], ["styleClass", "mb-4 toolbar-custom"], [1, "loading-state"], [1, "empty-state"], [1, "week-grid"], [3, "visibleChange", "visible", "modal", "draggable", "resizable", "header"], [3, "formGroup"], [1, "form-grid"], [1, "form-field"], ["type", "time", "pInputText", "", "formControlName", "startHour", 1, "w-full", "font-mono"], [1, "errorMessage"], ["type", "time", "pInputText", "", "formControlName", "endHour", 1, "w-full", "font-mono"], [1, "page-header"], [1, "page-title"], [1, "pi", "pi-clock", "mr-2"], [1, "page-subtitle"], [1, "flex", "items-center", "gap-3"], ["optionLabel", "firstName", "optionValue", "idUser", "placeholder", "Seleccione un barbero", "styleClass", "w-56", 3, "ngModelChange", "onChange", "options", "ngModel", "loading", "disabled"], [1, "pi", "pi-spin", "pi-spinner", "text-3xl", "text-slate-400"], [1, "text-slate-400", "mt-2"], [1, "pi", "pi-users", "text-5xl", "text-slate-200", "mb-3"], [1, "text-slate-500", "font-semibold"], [1, "text-slate-400", "text-sm"], [1, "day-card", 3, "day-card--active"], [1, "day-card"], [1, "day-card-header"], [1, "day-name"], [1, "day-badge", "day-badge--active"], [1, "day-badge", "day-badge--off"], [1, "day-card-body"], [1, "time-block"], [1, "day-off-content"], [1, "day-card-footer"], [1, "day-action-btn", "day-action-btn--add"], [1, "time-item"], [1, "time-label"], [1, "time-value"], [1, "time-divider"], [1, "pi", "pi-arrow-right", "text-slate-300"], [1, "pi", "pi-moon", "text-2xl", "text-slate-200"], [1, "text-slate-300", "text-sm"], [1, "day-action-btn", "day-action-btn--edit", 3, "click"], [1, "pi", "pi-pencil"], [1, "day-action-btn", "day-action-btn--del", 3, "click"], [1, "pi", "pi-trash"], [1, "day-action-btn", "day-action-btn--add", 3, "click"], [1, "pi", "pi-plus"], ["label", "Cancelar", "severity", "secondary", 3, "onClick", "outlined"], ["label", "Guardar", "icon", "pi pi-check", 3, "onClick", "loading"]], template: function Schedules_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-toolbar", 3);
      \u0275\u0275template(1, Schedules_ng_template_1_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, Schedules_ng_template_3_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, Schedules_Conditional_5_Template, 4, 0, "div", 4)(6, Schedules_Conditional_6_Template, 6, 0, "div", 5)(7, Schedules_Conditional_7_Template, 3, 0, "div", 6);
      \u0275\u0275elementStart(8, "p-dialog", 7);
      \u0275\u0275twoWayListener("visibleChange", function Schedules_Template_p_dialog_visibleChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(9, "form", 8)(10, "div", 9)(11, "div", 10)(12, "label");
      \u0275\u0275text(13, "Hora inicio *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 11);
      \u0275\u0275conditionalCreate(15, Schedules_Conditional_15_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "label");
      \u0275\u0275text(18, "Hora fin *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 13);
      \u0275\u0275conditionalCreate(20, Schedules_Conditional_20_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(21, Schedules_ng_template_21_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loadingSchedules ? 5 : ctx.listBarbers.length === 0 ? 6 : 7);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(11, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("modal", true)("draggable", false)("resizable", false)("header", (ctx.isEditing ? "Editar" : "Nuevo") + " Horario \u2014 " + ctx.frmSchedule.value.dayName);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.frmSchedule);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.startHourFb.touched && ctx.startHourFb.hasError("required") ? 15 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.endHourFb.touched && ctx.endHourFb.hasError("required") ? 20 : -1);
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
    DialogModule,
    Dialog,
    ToolbarModule,
    Toolbar,
    TooltipModule,
    SelectModule,
    Select,
    TagModule,
    CardModule,
    InputTextModule,
    InputText
  ], styles: ["\n.toolbar-custom[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .15rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  color: #64748b;\n  margin: 0;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem;\n  text-align: center;\n}\n.week-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: .75rem;\n}\n.day-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow .2s, transform .2s;\n}\n.day-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .07);\n  transform: translateY(-2px);\n}\n.day-card--active[_ngcontent-%COMP%] {\n  border-color: #d1fae5;\n}\n.day-card-header[_ngcontent-%COMP%] {\n  background: #0f172a;\n  padding: .65rem .875rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.day-card--active[_ngcontent-%COMP%]   .day-card-header[_ngcontent-%COMP%] {\n  background: #064e3b;\n}\n.day-name[_ngcontent-%COMP%] {\n  font-size: .78rem;\n  font-weight: 700;\n  color: #f8fafc;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n}\n.day-badge[_ngcontent-%COMP%] {\n  font-size: .62rem;\n  font-weight: 700;\n  padding: .15rem .5rem;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.day-badge--active[_ngcontent-%COMP%] {\n  background: rgba(52, 211, 153, .35);\n  color: #d1fae5;\n}\n.day-badge--off[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .15);\n  color: #e2e8f0;\n}\n.day-card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: .875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 90px;\n}\n.time-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n  width: 100%;\n  justify-content: center;\n}\n.time-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .15rem;\n}\n.time-label[_ngcontent-%COMP%] {\n  font-size: .6rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n}\n.time-value[_ngcontent-%COMP%] {\n  font-size: .85rem;\n  font-weight: 700;\n  color: #1e293b;\n  font-variant-numeric: tabular-nums;\n}\n.day-off-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .5rem;\n}\n.day-card-footer[_ngcontent-%COMP%] {\n  padding: .65rem .75rem;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  gap: .4rem;\n}\n.day-action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: .4rem .5rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: .75rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: .3rem;\n  transition: all .15s;\n}\n.day-action-btn--add[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #fff;\n}\n.day-action-btn--add[_ngcontent-%COMP%]:hover {\n  background: #1e293b;\n}\n.day-action-btn--edit[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.day-action-btn--edit[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n.day-action-btn--del[_ngcontent-%COMP%] {\n  flex: 0;\n  padding: .4rem .6rem;\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.day-action-btn--del[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  padding: .5rem 0;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: .85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.errorMessage[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: .75rem;\n}\n@media (max-width: 1280px) {\n  .week-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .week-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .week-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=schedules.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Schedules, [{
    type: Component,
    args: [{ selector: "app-schedules", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ButtonModule,
      DialogModule,
      ToolbarModule,
      TooltipModule,
      SelectModule,
      TagModule,
      CardModule,
      InputTextModule
    ], template: `<p-toolbar styleClass="mb-4 toolbar-custom">
  <ng-template #start>
    <div class="page-header">
      <h2 class="page-title"><i class="pi pi-clock mr-2"></i> Horarios de Atenci\xF3n</h2>
      <span class="page-subtitle">Disponibilidad semanal de los barberos</span>
    </div>
  </ng-template>
  <ng-template #end>
    <div class="flex items-center gap-3">
      <p-select
        [options]="listBarbers"
        [(ngModel)]="selectedBarberId"
        optionLabel="firstName"
        optionValue="idUser"
        (onChange)="onBarberChange($event.value)"
        placeholder="Seleccione un barbero"
        [loading]="loadingBarbers"
        [disabled]="listBarbers.length <= 1"
        styleClass="w-56"
      />
    </div>
  </ng-template>
</p-toolbar>

@if(loadingSchedules) {
  <div class="loading-state">
    <i class="pi pi-spin pi-spinner text-3xl text-slate-400"></i>
    <p class="text-slate-400 mt-2">Cargando horarios...</p>
  </div>
} @else if(listBarbers.length === 0) {
  <div class="empty-state">
    <i class="pi pi-users text-5xl text-slate-200 mb-3"></i>
    <h3 class="text-slate-500 font-semibold">Sin barberos disponibles</h3>
    <p class="text-slate-400 text-sm">Registre usuarios con el rol Barbero para gestionar horarios.</p>
  </div>
} @else {
  <div class="week-grid">
    @for(day of weeklySchedule; track day.dayName) {
      <div class="day-card" [class.day-card--active]="day.schedule">
        <div class="day-card-header">
          <span class="day-name">{{ day.dayName }}</span>
          @if(day.schedule) {
            <span class="day-badge day-badge--active">Activo</span>
          } @else {
            <span class="day-badge day-badge--off">Libre</span>
          }
        </div>

        <div class="day-card-body">
          @if(day.schedule) {
            <div class="time-block">
              <div class="time-item">
                <span class="time-label">Entrada</span>
                <span class="time-value">{{ formatHour12(day.schedule.startHour) }}</span>
              </div>
              <div class="time-divider">
                <i class="pi pi-arrow-right text-slate-300"></i>
              </div>
              <div class="time-item">
                <span class="time-label">Salida</span>
                <span class="time-value">{{ formatHour12(day.schedule.endHour) }}</span>
              </div>
            </div>
          } @else {
            <div class="day-off-content">
              <i class="pi pi-moon text-2xl text-slate-200"></i>
              <span class="text-slate-300 text-sm">D\xEDa de descanso</span>
            </div>
          }
        </div>

        <div class="day-card-footer">
          @if(day.schedule) {
            <button class="day-action-btn day-action-btn--edit" (click)="openEdit(day.schedule)">
              <i class="pi pi-pencil"></i> Editar
            </button>
            <button class="day-action-btn day-action-btn--del" (click)="confirmDelete($event, day.schedule)">
              <i class="pi pi-trash"></i>
            </button>
          } @else {
            <button class="day-action-btn day-action-btn--add" (click)="openAdd(day.dayName)">
              <i class="pi pi-plus"></i> Agregar
            </button>
          }
        </div>
      </div>
    }
  </div>
}

<!-- Dialog -->
<p-dialog
  [(visible)]="dialogVisible"
  [modal]="true"
  [style]="{width:'420px'}"
  [draggable]="false"
  [resizable]="false"
  [header]="(isEditing ? 'Editar' : 'Nuevo') + ' Horario \u2014 ' + frmSchedule.value.dayName"
>
  <form [formGroup]="frmSchedule">
    <div class="form-grid">
      <div class="form-field">
        <label>Hora inicio *</label>
        <input type="time" pInputText formControlName="startHour" class="w-full font-mono" />
        @if(startHourFb.touched && startHourFb.hasError('required')) {
          <small class="errorMessage">Requerido.</small>
        }
      </div>
      <div class="form-field">
        <label>Hora fin *</label>
        <input type="time" pInputText formControlName="endHour" class="w-full font-mono" />
        @if(endHourFb.touched && endHourFb.hasError('required')) {
          <small class="errorMessage">Requerido.</small>
        }
      </div>
    </div>
  </form>
  <ng-template #footer>
    <p-button label="Cancelar" severity="secondary" [outlined]="true" (onClick)="dialogVisible = false" />
    <p-button label="Guardar" icon="pi pi-check" [loading]="saving" (onClick)="saveSchedule()" />
  </ng-template>
</p-dialog>
`, styles: ["/* src/app/page/schedules/schedules.css */\n.toolbar-custom {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header {\n  display: flex;\n  flex-direction: column;\n  gap: .15rem;\n}\n.page-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle {\n  font-size: .8rem;\n  color: #64748b;\n  margin: 0;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem;\n  text-align: center;\n}\n.week-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: .75rem;\n}\n.day-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow .2s, transform .2s;\n}\n.day-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .07);\n  transform: translateY(-2px);\n}\n.day-card--active {\n  border-color: #d1fae5;\n}\n.day-card-header {\n  background: #0f172a;\n  padding: .65rem .875rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.day-card--active .day-card-header {\n  background: #064e3b;\n}\n.day-name {\n  font-size: .78rem;\n  font-weight: 700;\n  color: #f8fafc;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n}\n.day-badge {\n  font-size: .62rem;\n  font-weight: 700;\n  padding: .15rem .5rem;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.day-badge--active {\n  background: rgba(52, 211, 153, .35);\n  color: #d1fae5;\n}\n.day-badge--off {\n  background: rgba(255, 255, 255, .15);\n  color: #e2e8f0;\n}\n.day-card-body {\n  flex: 1;\n  padding: .875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 90px;\n}\n.time-block {\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n  width: 100%;\n  justify-content: center;\n}\n.time-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .15rem;\n}\n.time-label {\n  font-size: .6rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n}\n.time-value {\n  font-size: .85rem;\n  font-weight: 700;\n  color: #1e293b;\n  font-variant-numeric: tabular-nums;\n}\n.day-off-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .5rem;\n}\n.day-card-footer {\n  padding: .65rem .75rem;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  gap: .4rem;\n}\n.day-action-btn {\n  flex: 1;\n  padding: .4rem .5rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-size: .75rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: .3rem;\n  transition: all .15s;\n}\n.day-action-btn--add {\n  background: #0f172a;\n  color: #fff;\n}\n.day-action-btn--add:hover {\n  background: #1e293b;\n}\n.day-action-btn--edit {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.day-action-btn--edit:hover {\n  background: #dbeafe;\n}\n.day-action-btn--del {\n  flex: 0;\n  padding: .4rem .6rem;\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.day-action-btn--del:hover {\n  background: #fee2e2;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  padding: .5rem 0;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n}\n.form-field label {\n  font-size: .85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.errorMessage {\n  color: #ef4444;\n  font-size: .75rem;\n}\n@media (max-width: 1280px) {\n  .week-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .week-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .week-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=schedules.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Schedules, { className: "Schedules", filePath: "src/app/page/schedules/schedules.ts", lineNumber: 79 });
})();
export {
  Schedules
};
//# sourceMappingURL=chunk-LYBSUKUQ.js.map
