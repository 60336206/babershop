import {
  environment
} from "./chunk-VI5ACERC.js";
import {
  DividerModule
} from "./chunk-CFBUUP6X.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-LF77IHSS.js";
import {
  AuthService
} from "./chunk-66EMLGYO.js";
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
  apiappointmentgetall,
  apiappointmentgetfiles
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
  __spreadProps,
  __spreadValues,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/page/appointments/appointments.ts
var _c0 = () => [5, 10, 25, 50];
var _c1 = () => ["status", "observation"];
var _c2 = () => ({ width: "580px" });
var _c3 = () => ({ width: "440px" });
var _forTrack0 = ($index, $item) => $item.idAppointmentDetail;
var _forTrack1 = ($index, $item) => $item.idAppointmentFile;
function Appointments_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h2", 24);
    \u0275\u0275element(2, "i", 25);
    \u0275\u0275text(3, " Gesti\xF3n de Reservas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5, "Todas las citas registradas en el sistema");
    \u0275\u0275elementEnd()();
  }
}
function Appointments_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 27);
    \u0275\u0275listener("click", function Appointments_ng_template_3_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadAppointments());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true);
  }
}
function Appointments_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275text(2, "Fecha ");
    \u0275\u0275element(3, "p-sortIcon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Barbero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 30);
    \u0275\u0275text(11, "Total ");
    \u0275\u0275element(12, "p-sortIcon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 32);
    \u0275\u0275text(14, "Estado ");
    \u0275\u0275element(15, "p-sortIcon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 34);
    \u0275\u0275text(17, "Acciones");
    \u0275\u0275elementEnd()();
  }
}
function Appointments_ng_template_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apt_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", apt_r5.parentCustomer.firstName == null ? null : apt_r5.parentCustomer.firstName.charAt(0), "", apt_r5.parentCustomer.surName == null ? null : apt_r5.parentCustomer.surName.charAt(0), " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", apt_r5.parentCustomer.firstName, " ", apt_r5.parentCustomer.surName, " ");
  }
}
function Appointments_ng_template_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function Appointments_ng_template_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275element(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apt_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", apt_r5.parentUser.firstName, " ", apt_r5.parentUser.surName, " ");
  }
}
function Appointments_ng_template_10_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function Appointments_ng_template_10_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 43);
  }
}
function Appointments_ng_template_10_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 52);
    \u0275\u0275listener("onClick", function Appointments_ng_template_10_Conditional_25_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const apt_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.quickStatus(apt_r5, "Confirmada"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function Appointments_ng_template_10_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 53);
    \u0275\u0275listener("onClick", function Appointments_ng_template_10_Conditional_26_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const apt_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.quickStatus(apt_r5, "Finalizada"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function Appointments_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 36);
    \u0275\u0275element(6, "i", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, Appointments_ng_template_10_Conditional_9_Template, 4, 4, "span", 38)(10, Appointments_ng_template_10_Conditional_10_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, Appointments_ng_template_10_Conditional_12_Template, 3, 2, "span", 38)(13, Appointments_ng_template_10_Conditional_13_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 40);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 41);
    \u0275\u0275element(19, "p-tag", 42);
    \u0275\u0275conditionalCreate(20, Appointments_ng_template_10_Conditional_20_Template, 1, 0, "i", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "div", 44)(23, "p-button", 45);
    \u0275\u0275listener("onClick", function Appointments_ng_template_10_Template_p_button_onClick_23_listener() {
      const apt_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDetail(apt_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p-button", 46);
    \u0275\u0275listener("onClick", function Appointments_ng_template_10_Template_p_button_onClick_24_listener() {
      const apt_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEdit(apt_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, Appointments_ng_template_10_Conditional_25_Template, 1, 2, "p-button", 47);
    \u0275\u0275conditionalCreate(26, Appointments_ng_template_10_Conditional_26_Template, 1, 2, "p-button", 48);
    \u0275\u0275elementStart(27, "p-button", 49);
    \u0275\u0275listener("onClick", function Appointments_ng_template_10_Template_p_button_onClick_27_listener($event) {
      const apt_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete($event, apt_r5));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const apt_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(apt_r5.appointmentDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", apt_r5.startHour, " \u2013 ", apt_r5.endHour, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(apt_r5.parentCustomer ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(apt_r5.parentUser ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(16, 17, apt_r5.total, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", apt_r5.status)("severity", ctx_r2.getStatusSeverity(apt_r5.status));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasReferenceNote(apt_r5) ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(apt_r5.status === "Pendiente" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(apt_r5.status !== "Finalizada" && apt_r5.status !== "Cancelada" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function Appointments_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275elementStart(3, "p", 56);
    \u0275\u0275text(4, "No hay reservas registradas.");
    \u0275\u0275elementEnd()()();
  }
}
function Appointments_Conditional_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 63);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.selectedAppointment.parentCustomer.firstName, " ", ctx_r2.selectedAppointment.parentCustomer.surName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedAppointment.parentCustomer.phone);
  }
}
function Appointments_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function Appointments_Conditional_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.selectedAppointment.parentUser.firstName, " ", ctx_r2.selectedAppointment.parentUser.surName);
  }
}
function Appointments_Conditional_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function Appointments_Conditional_15_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "h4", 58);
    \u0275\u0275element(2, "i", 70);
    \u0275\u0275text(3, " Observaciones ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedAppointment.observation);
  }
}
function Appointments_Conditional_15_Conditional_34_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 75);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detail_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((detail_r8.parentService == null ? null : detail_r8.parentService.name) ?? detail_r8.idService);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(5, 2, detail_r8.price, "1.2-2"));
  }
}
function Appointments_Conditional_15_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "h4", 58);
    \u0275\u0275element(2, "i", 72);
    \u0275\u0275text(3, " Servicios ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73);
    \u0275\u0275repeaterCreate(5, Appointments_Conditional_15_Conditional_34_For_6_Template, 6, 5, "div", 74, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.selectedAppointment.childAppointmentDetail);
  }
}
function Appointments_Conditional_15_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, "Cargando...");
    \u0275\u0275elementEnd();
  }
}
function Appointments_Conditional_15_Conditional_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 76);
    \u0275\u0275element(1, "img", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r2.getFileUrl(file_r9), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.getFileUrl(file_r9), \u0275\u0275sanitizeUrl);
  }
}
function Appointments_Conditional_15_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275repeaterCreate(1, Appointments_Conditional_15_Conditional_40_For_2_Template, 2, 2, "a", 76, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedAppointmentFiles);
  }
}
function Appointments_Conditional_15_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, "El cliente no adjunt\xF3 ninguna imagen de referencia.");
    \u0275\u0275elementEnd();
  }
}
function Appointments_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 57)(2, "h4", 58);
    \u0275\u0275element(3, "i", 59);
    \u0275\u0275text(4, " Cliente ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, Appointments_Conditional_15_Conditional_5_Template, 4, 3)(6, Appointments_Conditional_15_Conditional_6_Template, 2, 0, "p", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 57)(8, "h4", 58);
    \u0275\u0275element(9, "i", 61);
    \u0275\u0275text(10, " Barbero ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, Appointments_Conditional_15_Conditional_11_Template, 2, 2, "p", 60)(12, Appointments_Conditional_15_Conditional_12_Template, 2, 0, "p", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 57)(14, "h4", 58);
    \u0275\u0275element(15, "i", 62);
    \u0275\u0275text(16, " Fecha y Hora ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 60);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 63);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 57)(22, "h4", 58);
    \u0275\u0275element(23, "i", 64);
    \u0275\u0275text(24, " Total ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 65);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 66)(29, "h4", 58);
    \u0275\u0275element(30, "i", 67);
    \u0275\u0275text(31, " Estado ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "p-tag", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, Appointments_Conditional_15_Conditional_33_Template, 6, 1, "div", 66);
    \u0275\u0275conditionalCreate(34, Appointments_Conditional_15_Conditional_34_Template, 7, 0, "div", 66);
    \u0275\u0275elementStart(35, "div", 66)(36, "h4", 58);
    \u0275\u0275element(37, "i", 68);
    \u0275\u0275text(38, " Imagen de referencia ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, Appointments_Conditional_15_Conditional_39_Template, 2, 0, "p", 63)(40, Appointments_Conditional_15_Conditional_40_Template, 3, 0, "div", 69)(41, Appointments_Conditional_15_Conditional_41_Template, 2, 0, "p", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.selectedAppointment.parentCustomer ? 5 : 6);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.selectedAppointment.parentUser ? 11 : 12);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedAppointment.appointmentDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedAppointment.startHour, " \u2014 ", ctx_r2.selectedAppointment.endHour);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(27, 11, ctx_r2.selectedAppointment.total, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.selectedAppointment.status)("severity", ctx_r2.getStatusSeverity(ctx_r2.selectedAppointment.status));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedAppointment.observation ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.selectedAppointment.childAppointmentDetail == null ? null : ctx_r2.selectedAppointment.childAppointmentDetail.length) > 0 ? 34 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.loadingFiles ? 39 : ctx_r2.selectedAppointmentFiles.length > 0 ? 40 : 41);
  }
}
function Appointments_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 78);
    \u0275\u0275listener("onClick", function Appointments_ng_template_16_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.detailVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 79);
    \u0275\u0275listener("onClick", function Appointments_ng_template_16_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.detailVisible = false;
      return \u0275\u0275resetView(ctx_r2.openEdit(ctx_r2.selectedAppointment));
    });
    \u0275\u0275elementEnd();
  }
}
function Appointments_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1, "Seleccione un estado.");
    \u0275\u0275elementEnd();
  }
}
function Appointments_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 80);
    \u0275\u0275listener("onClick", function Appointments_ng_template_42_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 81);
    \u0275\u0275listener("onClick", function Appointments_ng_template_42_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveEdit());
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
function apiappointmentgetbybarber(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/appointment/getbybarber/${params.idUser}`, "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apiappointmentupdate(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, "/appointment/update", "put");
  rb.body(params.body, "application/json");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
function apiappointmentdelete(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/appointment/delete/${params.idAppointment}`, "delete");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
var Appointments = class _Appointments {
  api = inject(Api);
  formBuilder = inject(FormBuilder);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  cdr = inject(ChangeDetectorRef);
  authService = inject(AuthService);
  user = this.authService.getUser();
  listAppointment = [];
  loading = false;
  // Detail dialog
  detailVisible = false;
  selectedAppointment = null;
  selectedAppointmentFiles = [];
  loadingFiles = false;
  // Edit dialog
  editVisible = false;
  saving = false;
  frmEdit;
  statusOptions = [
    { label: "Pendiente", value: "Pendiente" },
    { label: "Confirmada", value: "Confirmada" },
    { label: "Cancelada", value: "Cancelada" },
    { label: "Finalizada", value: "Finalizada" }
  ];
  get statusFb() {
    return this.frmEdit.controls["status"];
  }
  get observationFb() {
    return this.frmEdit.controls["observation"];
  }
  constructor() {
    this.frmEdit = this.formBuilder.group({
      idAppointment: [""],
      appointmentDate: [""],
      startHour: [""],
      endHour: [""],
      status: ["", [Validators.required]],
      observation: [""]
    });
  }
  ngOnInit() {
    this.loadAppointments();
  }
  loadAppointments() {
    this.loading = true;
    let requestPromise;
    if (this.user?.role === "BARBER") {
      requestPromise = this.api.invoke(apiappointmentgetbybarber, { idUser: this.user.idUser });
    } else {
      requestPromise = this.api.invoke(apiappointmentgetall);
    }
    requestPromise.then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      this.listAppointment = (data?.listAppointment ?? []).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo cargar las reservas." });
    });
  }
  openDetail(appointment) {
    this.selectedAppointment = appointment;
    this.selectedAppointmentFiles = [];
    this.detailVisible = true;
    this.loadingFiles = true;
    this.api.invoke(apiappointmentgetfiles, { idAppointment: appointment.idAppointment }).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      this.selectedAppointmentFiles = data?.listFile ?? [];
      this.loadingFiles = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loadingFiles = false;
    });
  }
  getFileUrl(file) {
    return `${environment.urlBase}/uploads/appointments/${file.fileName}`;
  }
  hasReferenceNote(appointment) {
    return !!appointment.observation && appointment.observation.includes("imagen de referencia");
  }
  openEdit(appointment) {
    this.frmEdit.patchValue({
      idAppointment: appointment.idAppointment,
      appointmentDate: appointment.appointmentDate,
      startHour: appointment.startHour,
      endHour: appointment.endHour,
      status: appointment.status,
      observation: appointment.observation ?? ""
    });
    this.editVisible = true;
  }
  saveEdit() {
    if (!this.frmEdit.valid) {
      this.frmEdit.markAllAsTouched();
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "Seleccione un estado." });
      return;
    }
    this.saving = true;
    const v = this.frmEdit.value;
    this.api.invoke(apiappointmentupdate, {
      body: {
        idAppointment: v.idAppointment,
        appointmentDate: v.appointmentDate,
        startHour: v.startHour,
        endHour: v.endHour,
        status: v.status,
        observation: v.observation ?? ""
      }
    }).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      if (data?.type === "success") {
        this.messageService.add({ severity: "success", summary: "Correcto", detail: "Reserva actualizada." });
        this.editVisible = false;
        this.loadAppointments();
      } else {
        this.messageService.add({ severity: "error", summary: "Error", detail: data.listMessage?.[0] ?? "Error al actualizar." });
      }
    }).catch(() => {
      this.messageService.add({ severity: "error", summary: "Error", detail: "Error de conexi\xF3n." });
    }).finally(() => {
      this.saving = false;
      this.cdr.detectChanges();
    });
  }
  quickStatus(appointment, newStatus) {
    this.api.invoke(apiappointmentupdate, {
      body: {
        idAppointment: appointment.idAppointment,
        appointmentDate: appointment.appointmentDate,
        startHour: appointment.startHour,
        endHour: appointment.endHour,
        status: newStatus,
        observation: appointment.observation ?? ""
      }
    }).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      if (data?.type === "success") {
        const idx = this.listAppointment.findIndex((a) => a.idAppointment === appointment.idAppointment);
        if (idx !== -1) {
          this.listAppointment[idx] = __spreadProps(__spreadValues({}, this.listAppointment[idx]), { status: newStatus });
          this.listAppointment = [...this.listAppointment];
        }
        this.messageService.add({ severity: "success", summary: "Correcto", detail: `Reserva marcada como ${newStatus}.` });
        this.cdr.detectChanges();
      } else {
        this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo actualizar el estado." });
      }
    }).catch(() => {
      this.messageService.add({ severity: "error", summary: "Error", detail: "Error de conexi\xF3n." });
    });
  }
  confirmDelete(event, appointment) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Esta acci\xF3n eliminar\xE1 permanentemente la reserva. \xBFContinuar?",
      header: "Confirmar eliminaci\xF3n",
      icon: "pi pi-exclamation-triangle",
      rejectButtonProps: { label: "Cancelar", severity: "secondary", outlined: true },
      acceptButtonProps: { label: "S\xED, eliminar", severity: "danger" },
      accept: () => {
        this.api.invoke(apiappointmentdelete, { idAppointment: appointment.idAppointment }).then((response) => {
          const data = typeof response === "string" ? JSON.parse(response) : response;
          if (data?.type === "success") {
            this.listAppointment = this.listAppointment.filter((a) => a.idAppointment !== appointment.idAppointment);
            this.messageService.add({ severity: "success", summary: "Correcto", detail: "Reserva eliminada." });
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
    switch (status) {
      case "Confirmada":
        return "success";
      case "Pendiente":
        return "warn";
      case "Cancelada":
        return "danger";
      case "Finalizada":
        return "info";
      default:
        return "secondary";
    }
  }
  static \u0275fac = function Appointments_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Appointments)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Appointments, selectors: [["app-appointments"]], decls: 44, vars: 26, consts: [["start", ""], ["end", ""], ["dt", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], ["styleClass", "mb-4 toolbar-custom"], [1, "section-card"], ["stripedRows", "", "dataKey", "idAppointment", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "globalFilterFields"], ["header", "Detalle de Reserva", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "detail-grid"], ["header", "Editar Reserva", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [3, "formGroup"], [1, "form-grid"], [1, "form-field"], ["pInputText", "", "formControlName", "appointmentDate", "placeholder", "YYYY-MM-DD", 1, "w-full"], ["formControlName", "status", "optionLabel", "label", "optionValue", "value", "placeholder", "Seleccionar estado", 1, "w-full", 3, "options"], [1, "errorMessage"], ["pInputText", "", "formControlName", "startHour", "placeholder", "HH:MM:SS", 1, "w-full"], ["pInputText", "", "formControlName", "endHour", "placeholder", "HH:MM:SS", 1, "w-full"], [1, "form-field", "form-field--full"], ["pTextarea", "", "formControlName", "observation", "rows", "3", "placeholder", "Observaciones adicionales...", 1, "w-full"], [1, "page-header"], [1, "page-title"], [1, "pi", "pi-calendar", "mr-2"], [1, "page-subtitle"], ["label", "Actualizar", "icon", "pi pi-refresh", "severity", "secondary", 3, "click", "outlined"], ["pSortableColumn", "appointmentDate"], ["field", "appointmentDate"], ["pSortableColumn", "total"], ["field", "total"], ["pSortableColumn", "status"], ["field", "status"], [1, "text-center", 2, "width", "200px"], [1, "date-badge"], [1, "time-range"], [1, "pi", "pi-clock", "text-xs", "text-slate-400"], [1, "person-cell"], [1, "text-slate-400", "text-sm"], [1, "font-semibold", "text-slate-800"], [1, "status-cell"], [3, "value", "severity"], ["pTooltip", "Reserva con imagen de referencia", 1, "pi", "pi-image", "text-blue-400"], [1, "actions-cell"], ["icon", "pi pi-eye", "severity", "info", "pTooltip", "Ver detalle", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", "pTooltip", "Editar", 3, "onClick", "rounded", "text"], ["icon", "pi pi-check", "severity", "success", "pTooltip", "Confirmar", 3, "rounded", "text"], ["icon", "pi pi-flag", "pTooltip", "Finalizar", 3, "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", "pTooltip", "Eliminar", 3, "onClick", "rounded", "text"], [1, "person-avatar"], [1, "barber-dot"], ["icon", "pi pi-check", "severity", "success", "pTooltip", "Confirmar", 3, "onClick", "rounded", "text"], ["icon", "pi pi-flag", "pTooltip", "Finalizar", 3, "onClick", "rounded", "text"], ["colspan", "7", 1, "empty-row"], [1, "pi", "pi-calendar-times", "text-4xl", "text-slate-200", "mb-3"], [1, "text-slate-400"], [1, "detail-section"], [1, "detail-section-title"], [1, "pi", "pi-user", "text-blue-500"], [1, "detail-value"], [1, "pi", "pi-star", "text-amber-500"], [1, "pi", "pi-calendar", "text-green-500"], [1, "detail-sub"], [1, "pi", "pi-money-bill", "text-emerald-500"], [1, "detail-value", "price-large"], [1, "detail-section", "detail-section--full"], [1, "pi", "pi-info-circle", "text-slate-400"], [1, "pi", "pi-image", "text-blue-500"], [1, "reference-images-list"], [1, "pi", "pi-comment", "text-slate-400"], [1, "detail-observation"], [1, "pi", "pi-tag", "text-purple-500"], [1, "services-list"], [1, "service-row"], [1, "font-semibold"], ["target", "_blank", "rel", "noopener", 3, "href"], ["alt", "Referencia del cliente", 1, "reference-image-thumb", 3, "src"], ["label", "Cerrar", "icon", "pi pi-times", "severity", "secondary", 3, "onClick"], ["label", "Editar", "icon", "pi pi-pencil", 3, "onClick"], ["label", "Cancelar", "icon", "pi pi-times", "severity", "secondary", 3, "onClick", "outlined"], ["label", "Guardar cambios", "icon", "pi pi-check", 3, "onClick", "loading"]], template: function Appointments_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-toolbar", 7);
      \u0275\u0275template(1, Appointments_ng_template_1_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, Appointments_ng_template_3_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "p-table", 9, 2);
      \u0275\u0275template(8, Appointments_ng_template_8_Template, 18, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(10, Appointments_ng_template_10_Template, 28, 20, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(12, Appointments_ng_template_12_Template, 5, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function Appointments_Template_p_dialog_visibleChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.detailVisible, $event) || (ctx.detailVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(15, Appointments_Conditional_15_Template, 42, 14, "div", 11);
      \u0275\u0275template(16, Appointments_ng_template_16_Template, 2, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-dialog", 12);
      \u0275\u0275twoWayListener("visibleChange", function Appointments_Template_p_dialog_visibleChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.editVisible, $event) || (ctx.editVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(19, "form", 13)(20, "div", 14)(21, "div", 15)(22, "label");
      \u0275\u0275text(23, "Fecha");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 15)(26, "label");
      \u0275\u0275text(27, "Estado *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "p-select", 17);
      \u0275\u0275conditionalCreate(29, Appointments_Conditional_29_Template, 2, 0, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 15)(31, "label");
      \u0275\u0275text(32, "Hora inicio");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 15)(35, "label");
      \u0275\u0275text(36, "Hora fin");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 21)(39, "label");
      \u0275\u0275text(40, "Observaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "textarea", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(42, Appointments_ng_template_42_Template, 2, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.listAppointment)("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(22, _c0))("globalFilterFields", \u0275\u0275pureFunction0(23, _c1));
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c2));
      \u0275\u0275twoWayProperty("visible", ctx.detailVisible);
      \u0275\u0275property("modal", true)("draggable", false)("resizable", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedAppointment ? 15 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c3));
      \u0275\u0275twoWayProperty("visible", ctx.editVisible);
      \u0275\u0275property("modal", true)("draggable", false)("resizable", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.frmEdit);
      \u0275\u0275advance(9);
      \u0275\u0275property("options", ctx.statusOptions);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.statusFb.touched && ctx.statusFb.hasError("required") ? 29 : -1);
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
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    DialogModule,
    Dialog,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    SelectModule,
    Select,
    TagModule,
    Tag,
    ToolbarModule,
    Toolbar,
    TooltipModule,
    Tooltip,
    DividerModule,
    DecimalPipe
  ], styles: ["\n.toolbar-custom[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.date-badge[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1e293b;\n  background: #f8fafc;\n  padding: 0.2rem 0.6rem;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n}\n.time-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  color: #475569;\n}\n.person-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1e293b;\n}\n.person-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #475569;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.barber-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #f59e0b;\n  flex-shrink: 0;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  flex-wrap: wrap;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem !important;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  padding: 0.5rem 0;\n}\n.detail-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.detail-section--full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.detail-section-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin: 0 0 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.detail-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.price-large[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n.detail-observation[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #374151;\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  margin: 0;\n}\n.services-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.service-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.875rem;\n  color: #374151;\n  padding: 0.4rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.service-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.status-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.reference-images-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.reference-image-thumb[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  cursor: pointer;\n  transition: transform 0.15s ease;\n}\n.reference-image-thumb[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  padding: 0.5rem 0;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field--full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.errorMessage[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n}\n@media (max-width: 640px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .detail-section--full[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-field--full[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .actions-cell[_ngcontent-%COMP%] {\n    gap: 1px;\n  }\n}\n/*# sourceMappingURL=appointments.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Appointments, [{
    type: Component,
    args: [{ selector: "app-appointments", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      ButtonModule,
      TableModule,
      DialogModule,
      InputTextModule,
      TextareaModule,
      SelectModule,
      TagModule,
      ToolbarModule,
      TooltipModule,
      DividerModule
    ], template: `<!-- \u2550\u2550 TOOLBAR \u2550\u2550 -->
<p-toolbar styleClass="mb-4 toolbar-custom">
  <ng-template #start>
    <div class="page-header">
      <h2 class="page-title">
        <i class="pi pi-calendar mr-2"></i> Gesti\xF3n de Reservas
      </h2>
      <span class="page-subtitle">Todas las citas registradas en el sistema</span>
    </div>
  </ng-template>
  <ng-template #end>
    <p-button label="Actualizar" icon="pi pi-refresh" severity="secondary" [outlined]="true" (click)="loadAppointments()" />
  </ng-template>
</p-toolbar>

<!-- \u2550\u2550 TABLA \u2550\u2550 -->
<div class="section-card">
  <p-table
    [value]="listAppointment"
    [loading]="loading"
    [paginator]="true"
    [rows]="10"
    [rowsPerPageOptions]="[5,10,25,50]"
    [globalFilterFields]="['status','observation']"
    #dt
    stripedRows
    dataKey="idAppointment"
  >
    <ng-template #header>
      <tr>
        <th pSortableColumn="appointmentDate">Fecha <p-sortIcon field="appointmentDate" /></th>
        <th>Hora</th>
        <th>Cliente</th>
        <th>Barbero</th>
        <th pSortableColumn="total">Total <p-sortIcon field="total" /></th>
        <th pSortableColumn="status">Estado <p-sortIcon field="status" /></th>
        <th class="text-center" style="width:200px">Acciones</th>
      </tr>
    </ng-template>

    <ng-template #body let-apt>
      <tr>
        <td>
          <span class="date-badge">{{ apt.appointmentDate }}</span>
        </td>
        <td>
          <span class="time-range">
            <i class="pi pi-clock text-xs text-slate-400"></i>
            {{ apt.startHour }} \u2013 {{ apt.endHour }}
          </span>
        </td>
        <td>
          @if(apt.parentCustomer) {
            <span class="person-cell">
              <span class="person-avatar">
                {{ apt.parentCustomer.firstName?.charAt(0) }}{{ apt.parentCustomer.surName?.charAt(0) }}
              </span>
              {{ apt.parentCustomer.firstName }} {{ apt.parentCustomer.surName }}
            </span>
          } @else {
            <span class="text-slate-400 text-sm">\u2014</span>
          }
        </td>
        <td>
          @if(apt.parentUser) {
            <span class="person-cell">
              <span class="barber-dot"></span>
              {{ apt.parentUser.firstName }} {{ apt.parentUser.surName }}
            </span>
          } @else {
            <span class="text-slate-400 text-sm">\u2014</span>
          }
        </td>
        <td class="font-semibold text-slate-800">S/ {{ apt.total | number:'1.2-2' }}</td>
        <td>
          <div class="status-cell">
            <p-tag [value]="apt.status" [severity]="getStatusSeverity(apt.status)" />
            @if(hasReferenceNote(apt)) {
              <i class="pi pi-image text-blue-400" pTooltip="Reserva con imagen de referencia"></i>
            }
          </div>
        </td>
        <td>
          <div class="actions-cell">
            <p-button icon="pi pi-eye" [rounded]="true" [text]="true" severity="info" pTooltip="Ver detalle" (onClick)="openDetail(apt)" />
            <p-button icon="pi pi-pencil" [rounded]="true" [text]="true" severity="secondary" pTooltip="Editar" (onClick)="openEdit(apt)" />
            @if(apt.status === 'Pendiente') {
              <p-button icon="pi pi-check" [rounded]="true" [text]="true" severity="success" pTooltip="Confirmar" (onClick)="quickStatus(apt, 'Confirmada')" />
            }
            @if(apt.status !== 'Finalizada' && apt.status !== 'Cancelada') {
              <p-button icon="pi pi-flag" [rounded]="true" [text]="true" pTooltip="Finalizar" (onClick)="quickStatus(apt, 'Finalizada')" />
            }
            <p-button icon="pi pi-trash" [rounded]="true" [text]="true" severity="danger" pTooltip="Eliminar" (onClick)="confirmDelete($event, apt)" />
          </div>
        </td>
      </tr>
    </ng-template>

    <ng-template #emptymessage>
      <tr>
        <td colspan="7" class="empty-row">
          <i class="pi pi-calendar-times text-4xl text-slate-200 mb-3"></i>
          <p class="text-slate-400">No hay reservas registradas.</p>
        </td>
      </tr>
    </ng-template>
  </p-table>
</div>

<!-- \u2550\u2550 DIALOG DETALLE \u2550\u2550 -->
<p-dialog
  [(visible)]="detailVisible"
  [modal]="true"
  [style]="{ width: '580px' }"
  [draggable]="false"
  [resizable]="false"
  header="Detalle de Reserva"
>
  @if(selectedAppointment) {
    <div class="detail-grid">

      <div class="detail-section">
        <h4 class="detail-section-title">
          <i class="pi pi-user text-blue-500"></i> Cliente
        </h4>
        @if(selectedAppointment.parentCustomer) {
          <p class="detail-value">{{ selectedAppointment.parentCustomer.firstName }} {{ selectedAppointment.parentCustomer.surName }}</p>
          <p class="detail-sub">{{ selectedAppointment.parentCustomer.phone }}</p>
        } @else {
          <p class="detail-value">\u2014</p>
        }
      </div>

      <div class="detail-section">
        <h4 class="detail-section-title">
          <i class="pi pi-star text-amber-500"></i> Barbero
        </h4>
        @if(selectedAppointment.parentUser) {
          <p class="detail-value">{{ selectedAppointment.parentUser.firstName }} {{ selectedAppointment.parentUser.surName }}</p>
        } @else {
          <p class="detail-value">\u2014</p>
        }
      </div>

      <div class="detail-section">
        <h4 class="detail-section-title">
          <i class="pi pi-calendar text-green-500"></i> Fecha y Hora
        </h4>
        <p class="detail-value">{{ selectedAppointment.appointmentDate }}</p>
        <p class="detail-sub">{{ selectedAppointment.startHour }} \u2014 {{ selectedAppointment.endHour }}</p>
      </div>

      <div class="detail-section">
        <h4 class="detail-section-title">
          <i class="pi pi-money-bill text-emerald-500"></i> Total
        </h4>
        <p class="detail-value price-large">S/ {{ selectedAppointment.total | number:'1.2-2' }}</p>
      </div>

      <div class="detail-section detail-section--full">
        <h4 class="detail-section-title">
          <i class="pi pi-info-circle text-slate-400"></i> Estado
        </h4>
        <p-tag [value]="selectedAppointment.status" [severity]="getStatusSeverity(selectedAppointment.status)" />
      </div>

      @if(selectedAppointment.observation) {
        <div class="detail-section detail-section--full">
          <h4 class="detail-section-title">
            <i class="pi pi-comment text-slate-400"></i> Observaciones
          </h4>
          <p class="detail-observation">{{ selectedAppointment.observation }}</p>
        </div>
      }

      @if(selectedAppointment.childAppointmentDetail?.length > 0) {
        <div class="detail-section detail-section--full">
          <h4 class="detail-section-title">
            <i class="pi pi-tag text-purple-500"></i> Servicios
          </h4>
          <div class="services-list">
            @for(detail of selectedAppointment.childAppointmentDetail; track detail.idAppointmentDetail) {
              <div class="service-row">
                <span>{{ detail.parentService?.name ?? detail.idService }}</span>
                <span class="font-semibold">S/ {{ detail.price | number:'1.2-2' }}</span>
              </div>
            }
          </div>
        </div>
      }

      <div class="detail-section detail-section--full">
        <h4 class="detail-section-title">
          <i class="pi pi-image text-blue-500"></i> Imagen de referencia
        </h4>
        @if(loadingFiles) {
          <p class="detail-sub">Cargando...</p>
        } @else if(selectedAppointmentFiles.length > 0) {
          <div class="reference-images-list">
            @for(file of selectedAppointmentFiles; track file.idAppointmentFile) {
              <a [href]="getFileUrl(file)" target="_blank" rel="noopener">
                <img [src]="getFileUrl(file)" alt="Referencia del cliente" class="reference-image-thumb" />
              </a>
            }
          </div>
        } @else {
          <p class="detail-sub">El cliente no adjunt\xF3 ninguna imagen de referencia.</p>
        }
      </div>

    </div>
  }

  <ng-template #footer>
    <p-button label="Cerrar" icon="pi pi-times" severity="secondary" (onClick)="detailVisible = false" />
    <p-button label="Editar" icon="pi pi-pencil" (onClick)="detailVisible = false; openEdit(selectedAppointment)" />
  </ng-template>
</p-dialog>

<!-- \u2550\u2550 DIALOG EDITAR \u2550\u2550 -->
<p-dialog
  [(visible)]="editVisible"
  [modal]="true"
  [style]="{ width: '440px' }"
  [draggable]="false"
  [resizable]="false"
  header="Editar Reserva"
>
  <form [formGroup]="frmEdit">
    <div class="form-grid">

      <div class="form-field">
        <label>Fecha</label>
        <input pInputText formControlName="appointmentDate" placeholder="YYYY-MM-DD" class="w-full" />
      </div>

      <div class="form-field">
        <label>Estado *</label>
        <p-select
          [options]="statusOptions"
          formControlName="status"
          optionLabel="label"
          optionValue="value"
          placeholder="Seleccionar estado"
          class="w-full"
        />
        @if(statusFb.touched && statusFb.hasError('required')) {
          <small class="errorMessage">Seleccione un estado.</small>
        }
      </div>

      <div class="form-field">
        <label>Hora inicio</label>
        <input pInputText formControlName="startHour" placeholder="HH:MM:SS" class="w-full" />
      </div>

      <div class="form-field">
        <label>Hora fin</label>
        <input pInputText formControlName="endHour" placeholder="HH:MM:SS" class="w-full" />
      </div>

      <div class="form-field form-field--full">
        <label>Observaciones</label>
        <textarea pTextarea formControlName="observation" rows="3" class="w-full" placeholder="Observaciones adicionales..."></textarea>
      </div>

    </div>
  </form>

  <ng-template #footer>
    <p-button label="Cancelar" icon="pi pi-times" severity="secondary" [outlined]="true" (onClick)="editVisible = false" />
    <p-button label="Guardar cambios" icon="pi pi-check" [loading]="saving" (onClick)="saveEdit()" />
  </ng-template>
</p-dialog>`, styles: ["/* src/app/page/appointments/appointments.css */\n.toolbar-custom {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.page-header {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.page-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.page-subtitle {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.section-card {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.date-badge {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1e293b;\n  background: #f8fafc;\n  padding: 0.2rem 0.6rem;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n}\n.time-range {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  color: #475569;\n}\n.person-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1e293b;\n}\n.person-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #475569;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.barber-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #f59e0b;\n  flex-shrink: 0;\n}\n.actions-cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  flex-wrap: wrap;\n}\n.empty-row {\n  text-align: center;\n  padding: 4rem !important;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  padding: 0.5rem 0;\n}\n.detail-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.detail-section--full {\n  grid-column: 1 / -1;\n}\n.detail-section-title {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin: 0 0 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.detail-value {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #0f172a;\n  margin: 0;\n}\n.detail-sub {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.price-large {\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n.detail-observation {\n  font-size: 0.875rem;\n  color: #374151;\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  margin: 0;\n}\n.services-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.service-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.875rem;\n  color: #374151;\n  padding: 0.4rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.service-row:last-child {\n  border-bottom: none;\n}\n.status-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.reference-images-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.reference-image-thumb {\n  width: 90px;\n  height: 90px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  cursor: pointer;\n  transition: transform 0.15s ease;\n}\n.reference-image-thumb:hover {\n  transform: scale(1.05);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  padding: 0.5rem 0;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-field--full {\n  grid-column: 1 / -1;\n}\n.form-field label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.errorMessage {\n  color: #ef4444;\n  font-size: 0.75rem;\n}\n@media (max-width: 640px) {\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n  .detail-section--full {\n    grid-column: 1;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-field--full {\n    grid-column: 1;\n  }\n  .actions-cell {\n    gap: 1px;\n  }\n}\n/*# sourceMappingURL=appointments.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Appointments, { className: "Appointments", filePath: "src/app/page/appointments/appointments.ts", lineNumber: 74 });
})();
export {
  Appointments
};
//# sourceMappingURL=chunk-ILUUVAUQ.js.map
