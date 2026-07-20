import {
  ProgressSpinnerModule
} from "./chunk-AVKKUKZN.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-7XDVSYGC.js";
import {
  CardModule
} from "./chunk-P6YI4ZT2.js";
import {
  AuthService
} from "./chunk-66EMLGYO.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-Y5BHUAGJ.js";
import {
  Tag,
  TagModule
} from "./chunk-47QHBKBD.js";
import {
  apiappointmentgetall,
  apicustomergetall,
  apiservicegetall,
  apiusergetall
} from "./chunk-U4NY7MLH.js";
import {
  Api,
  RequestBuilder
} from "./chunk-LXYPTV7U.js";
import "./chunk-KUUI72I7.js";
import {
  ButtonModule,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DecimalPipe,
  HttpResponse,
  MessageService,
  TitleCasePipe,
  filter,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵinterpolate2,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JJSRJYGA.js";

// src/app/page/dashboard/dashboard.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.idAppointment;
function Dashboard_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "p-skeleton", 29);
    \u0275\u0275elementStart(2, "div", 30);
    \u0275\u0275element(3, "p-skeleton", 31)(4, "p-skeleton", 32);
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_8_For_2_Template, 5, 0, "div", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function Dashboard_Conditional_9_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r1.suffix);
  }
}
function Dashboard_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "span", 33);
    \u0275\u0275conditionalCreate(5, Dashboard_Conditional_9_For_2_Conditional_5_Template, 2, 1, "small", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("stat-icon ", stat_r1.bg));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate2("pi ", stat_r1.icon, " ", stat_r1.color));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(stat_r1.suffix ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stat_r1.value, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.title);
  }
}
function Dashboard_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_9_For_2_Template, 9, 10, "div", 28, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.stats);
  }
}
function Dashboard_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 36);
  }
}
function Dashboard_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_17_For_2_Template, 1, 0, "p-skeleton", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function Dashboard_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3, "No hay reservas registradas a\xFAn.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_19_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40)(1, "span", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", apt_r3.parentCustomer.firstName == null ? null : apt_r3.parentCustomer.firstName.charAt(0), "", apt_r3.parentCustomer.surName == null ? null : apt_r3.parentCustomer.surName.charAt(0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", apt_r3.parentCustomer.firstName, " ", apt_r3.parentCustomer.surName, " ");
  }
}
function Dashboard_Conditional_19_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_19_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, Dashboard_Conditional_19_For_18_Conditional_2_Template, 4, 4, "span", 40)(3, Dashboard_Conditional_19_For_18_Conditional_3_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 44);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "p-tag", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const apt_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(apt_r3.parentCustomer ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", apt_r3.parentUser ? apt_r3.parentUser.firstName + " " + apt_r3.parentUser.surName : "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(apt_r3.appointmentDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", apt_r3.startHour, " \u2013 ", apt_r3.endHour);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(13, 8, apt_r3.total, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", apt_r3.status)("severity", ctx_r1.getStatusSeverity(apt_r3.status));
  }
}
function Dashboard_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 39)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Barbero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, Dashboard_Conditional_19_For_18_Template, 16, 11, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.recentAppointments);
  }
}
function apiappointmentgetbybarber(http, rootUrl, params, context) {
  const rb = new RequestBuilder(rootUrl, `/appointment/getbybarber/${params.idUser}`, "get");
  return http.request(rb.build({ responseType: "json", accept: "application/json", context })).pipe(filter((r) => r instanceof HttpResponse), map((r) => r));
}
var Dashboard = class _Dashboard {
  api = inject(Api);
  authService = inject(AuthService);
  messageService = inject(MessageService);
  cdr = inject(ChangeDetectorRef);
  user = this.authService.getUser();
  stats = [
    { title: "Barberos", value: 0, icon: "pi-user", color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Clientes", value: 0, icon: "pi-users", color: "text-green-600", bg: "bg-green-50" },
    { title: "Servicios", value: 0, icon: "pi-tag", color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Reservas hoy", value: 0, icon: "pi-calendar", color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Ingresos hoy", value: 0, icon: "pi-money-bill", color: "text-emerald-600", bg: "bg-emerald-50", suffix: "S/" }
  ];
  loadingStats = true;
  recentAppointments = [];
  todayStr = (/* @__PURE__ */ new Date()).toLocaleDateString("es-PE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  ngOnInit() {
    this.loadStats();
  }
  loadStats() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const isBarber = this.user?.role === "BARBER";
    let requests;
    if (isBarber) {
      requests = [
        Promise.resolve({ listUser: [] }),
        Promise.resolve({ listCustomer: [] }),
        Promise.resolve({ listService: [] }),
        this.api.invoke(apiappointmentgetbybarber, { idUser: this.user?.idUser ?? "" })
      ];
    } else {
      requests = [
        this.api.invoke(apiusergetall),
        this.api.invoke(apicustomergetall),
        this.api.invoke(apiservicegetall),
        this.api.invoke(apiappointmentgetall)
      ];
    }
    Promise.all(requests).then(([users, customers, services, appointments]) => {
      const parse = (r, key) => {
        const d = typeof r === "string" ? JSON.parse(r) : r;
        return d?.[key] ?? [];
      };
      const userList = parse(users, "listUser");
      const customerList = parse(customers, "listCustomer");
      const serviceList = parse(services, "listService");
      const appointmentList = parse(appointments, "listAppointment");
      const barbers = userList.filter((u) => u.role === "BARBER" && u.status === 1);
      const todayAppointments = appointmentList.filter((a) => a.appointmentDate === today);
      const todayRevenue = todayAppointments.filter((a) => a.status === "Finalizada").reduce((sum, a) => sum + Number(a.total ?? 0), 0);
      this.stats[0].value = isBarber ? "-" : barbers.length;
      this.stats[1].value = isBarber ? "-" : customerList.filter((c) => c.status === 1).length;
      this.stats[2].value = isBarber ? "-" : serviceList.filter((s) => s.status === 1).length;
      this.stats[3].value = todayAppointments.length;
      this.stats[4].value = todayRevenue.toFixed(2);
      this.recentAppointments = [...appointmentList].sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()).slice(0, 6);
      this.loadingStats = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loadingStats = false;
      this.messageService.add({ severity: "warn", summary: "Aviso", detail: "No se pudieron cargar todas las estad\xEDsticas." });
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
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 45, vars: 5, consts: [[1, "dashboard-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "stats-grid"], [1, "section-card"], [1, "section-header"], [1, "section-title"], [1, "pi", "pi-calendar-clock", "mr-2", "text-amber-500"], ["routerLink", "/appointments", 1, "section-link"], [1, "flex", "flex-col", "gap-3", "p-4"], [1, "empty-state"], [1, "table-wrapper"], [1, "section-title", "mb-4"], [1, "pi", "pi-bolt", "mr-2", "text-amber-500"], [1, "quick-grid"], ["routerLink", "/users", 1, "quick-card"], [1, "quick-icon", "bg-blue-50"], [1, "pi", "pi-user-plus", "text-blue-500"], ["routerLink", "/customers", 1, "quick-card"], [1, "quick-icon", "bg-green-50"], [1, "pi", "pi-users", "text-green-500"], ["routerLink", "/appointments", 1, "quick-card"], [1, "quick-icon", "bg-amber-50"], [1, "pi", "pi-calendar-plus", "text-amber-500"], ["routerLink", "/services", 1, "quick-card"], [1, "quick-icon", "bg-purple-50"], [1, "pi", "pi-tag", "text-purple-500"], [1, "stat-card"], ["shape", "circle", "size", "3.5rem"], [1, "stat-info"], ["width", "3rem", "height", "2rem"], ["width", "5rem", "height", "0.8rem", "styleClass", "mt-1"], [1, "stat-value"], [1, "stat-suffix"], [1, "stat-title"], ["height", "3rem"], [1, "pi", "pi-calendar-times", "text-5xl", "text-slate-200", "mb-3"], [1, "text-slate-400"], [1, "data-table"], [1, "person-cell"], [1, "text-slate-600"], [1, "date-chip"], [1, "text-slate-500", "text-sm"], [1, "font-semibold"], [3, "value", "severity"], [1, "mini-avatar"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "titlecase");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(8, Dashboard_Conditional_8_Template, 3, 1, "div", 4)(9, Dashboard_Conditional_9_Template, 3, 0, "div", 4);
      \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "h2", 7);
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275text(14, " Reservas recientes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16, "Ver todas");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(17, Dashboard_Conditional_17_Template, 3, 1, "div", 10)(18, Dashboard_Conditional_18_Template, 4, 0, "div", 11)(19, Dashboard_Conditional_19_Template, 19, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 5)(21, "h2", 13);
      \u0275\u0275element(22, "i", 14);
      \u0275\u0275text(23, " Acceso r\xE1pido ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15)(25, "a", 16)(26, "div", 17);
      \u0275\u0275element(27, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Usuarios");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "a", 19)(31, "div", 20);
      \u0275\u0275element(32, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34, "Clientes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "a", 22)(36, "div", 23);
      \u0275\u0275element(37, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39, "Reservas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "a", 25)(41, "div", 26);
      \u0275\u0275element(42, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44, "Servicios");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, ctx.todayStr));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loadingStats ? 8 : 9);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.loadingStats ? 17 : ctx.recentAppointments.length === 0 ? 18 : 19);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    ButtonModule,
    CardModule,
    TagModule,
    Tag,
    ProgressSpinnerModule,
    SkeletonModule,
    Skeleton,
    DecimalPipe,
    TitleCasePipe
  ], styles: ["\n.dashboard-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0.2rem 0 0;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: transform .2s, box-shadow .2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.07);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.4rem;\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1;\n}\n.stat-suffix[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-right: 2px;\n}\n.stat-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  margin-top: .3rem;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 1.25rem 1.5rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.section-link[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #f59e0b;\n  font-weight: 600;\n  text-decoration: none;\n}\n.section-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: .875rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: .6rem 1rem;\n  color: #64748b;\n  font-weight: 600;\n  font-size: .72rem;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  border-bottom: 2px solid #f1f5f9;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: .75rem 1rem;\n  color: #374151;\n  border-bottom: 1px solid #f8fafc;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.person-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n  font-weight: 500;\n}\n.mini-avatar[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #475569;\n  font-size: .6rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.date-chip[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: .15rem .5rem;\n  font-size: .8rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n}\n.quick-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 1rem;\n}\n.quick-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .6rem;\n  padding: 1.25rem 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  cursor: pointer;\n  text-decoration: none;\n  color: #475569;\n  font-size: .85rem;\n  font-weight: 600;\n  transition: all .2s;\n  text-align: center;\n}\n.quick-card[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-2px);\n  color: #0f172a;\n}\n.quick-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n@media (max-width: 640px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .quick-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      CardModule,
      TagModule,
      ProgressSpinnerModule,
      SkeletonModule
    ], template: `<div class="dashboard-page">

  <!-- Page Header -->
  <div class="page-header">
    <div>
      <h1 class="page-title">Dashboard</h1>
      <p class="page-subtitle">{{ todayStr | titlecase }}</p>
    </div>
  </div>

  <!-- \u2500\u2500 STAT CARDS \u2500\u2500 -->
  @if(loadingStats) {
    <div class="stats-grid">
      @for(i of [1,2,3,4,5]; track i) {
        <div class="stat-card">
          <p-skeleton shape="circle" size="3.5rem" />
          <div class="stat-info">
            <p-skeleton width="3rem" height="2rem" />
            <p-skeleton width="5rem" height="0.8rem" styleClass="mt-1" />
          </div>
        </div>
      }
    </div>
  } @else {
    <div class="stats-grid">
      @for(stat of stats; track stat.title) {
        <div class="stat-card">
          <div class="stat-icon {{ stat.bg }}">
            <i class="pi {{ stat.icon }} {{ stat.color }}"></i>
          </div>
          <div class="stat-info">
            <span class="stat-value">
              @if(stat.suffix) { <small class="stat-suffix">{{ stat.suffix }}</small> }
              {{ stat.value }}
            </span>
            <span class="stat-title">{{ stat.title }}</span>
          </div>
        </div>
      }
    </div>
  }

  <!-- \u2500\u2500 \xDALTIMAS RESERVAS \u2500\u2500 -->
  <div class="section-card">
    <div class="section-header">
      <h2 class="section-title">
        <i class="pi pi-calendar-clock mr-2 text-amber-500"></i>
        Reservas recientes
      </h2>
      <a routerLink="/appointments" class="section-link">Ver todas</a>
    </div>

    @if(loadingStats) {
      <div class="flex flex-col gap-3 p-4">
        @for(i of [1,2,3,4]; track i) {
          <p-skeleton height="3rem" />
        }
      </div>
    } @else if(recentAppointments.length === 0) {
      <div class="empty-state">
        <i class="pi pi-calendar-times text-5xl text-slate-200 mb-3"></i>
        <p class="text-slate-400">No hay reservas registradas a\xFAn.</p>
      </div>
    } @else {
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Barbero</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            @for(apt of recentAppointments; track apt.idAppointment) {
              <tr>
                <td>
                  @if(apt.parentCustomer) {
                    <span class="person-cell">
                      <span class="mini-avatar">{{ apt.parentCustomer.firstName?.charAt(0) }}{{ apt.parentCustomer.surName?.charAt(0) }}</span>
                      {{ apt.parentCustomer.firstName }} {{ apt.parentCustomer.surName }}
                    </span>
                  } @else { <span class="text-slate-400">\u2014</span> }
                </td>
                <td class="text-slate-600">
                  {{ apt.parentUser ? apt.parentUser.firstName + ' ' + apt.parentUser.surName : '\u2014' }}
                </td>
                <td><span class="date-chip">{{ apt.appointmentDate }}</span></td>
                <td class="text-slate-500 text-sm">{{ apt.startHour }} \u2013 {{ apt.endHour }}</td>
                <td class="font-semibold">S/ {{ apt.total | number:'1.2-2' }}</td>
                <td>
                  <p-tag [value]="apt.status" [severity]="getStatusSeverity(apt.status)" />
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>

  <!-- \u2500\u2500 ACCESO R\xC1PIDO \u2500\u2500 -->
  <div class="section-card">
    <h2 class="section-title mb-4">
      <i class="pi pi-bolt mr-2 text-amber-500"></i>
      Acceso r\xE1pido
    </h2>
    <div class="quick-grid">
      <a routerLink="/users" class="quick-card">
        <div class="quick-icon bg-blue-50"><i class="pi pi-user-plus text-blue-500"></i></div>
        <span>Usuarios</span>
      </a>
      <a routerLink="/customers" class="quick-card">
        <div class="quick-icon bg-green-50"><i class="pi pi-users text-green-500"></i></div>
        <span>Clientes</span>
      </a>
      <a routerLink="/appointments" class="quick-card">
        <div class="quick-icon bg-amber-50"><i class="pi pi-calendar-plus text-amber-500"></i></div>
        <span>Reservas</span>
      </a>
      <a routerLink="/services" class="quick-card">
        <div class="quick-icon bg-purple-50"><i class="pi pi-tag text-purple-500"></i></div>
        <span>Servicios</span>
      </a>
    </div>
  </div>

</div>
`, styles: ["/* src/app/page/dashboard/dashboard.css */\n.dashboard-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.page-title {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.page-subtitle {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0.2rem 0 0;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n}\n.stat-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: transform .2s, box-shadow .2s;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.07);\n}\n.stat-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.4rem;\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.stat-value {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0f172a;\n  line-height: 1;\n}\n.stat-suffix {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-right: 2px;\n}\n.stat-title {\n  font-size: 0.72rem;\n  color: #64748b;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  margin-top: .3rem;\n}\n.section-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 1.25rem 1.5rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.section-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.section-link {\n  font-size: 0.8rem;\n  color: #f59e0b;\n  font-weight: 600;\n  text-decoration: none;\n}\n.section-link:hover {\n  text-decoration: underline;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: .875rem;\n}\n.data-table th {\n  text-align: left;\n  padding: .6rem 1rem;\n  color: #64748b;\n  font-weight: 600;\n  font-size: .72rem;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  border-bottom: 2px solid #f1f5f9;\n  white-space: nowrap;\n}\n.data-table td {\n  padding: .75rem 1rem;\n  color: #374151;\n  border-bottom: 1px solid #f8fafc;\n}\n.data-table tr:last-child td {\n  border-bottom: none;\n}\n.data-table tr:hover td {\n  background: #fafafa;\n}\n.person-cell {\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n  font-weight: 500;\n}\n.mini-avatar {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #475569;\n  font-size: .6rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.date-chip {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n  padding: .15rem .5rem;\n  font-size: .8rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n}\n.quick-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 1rem;\n}\n.quick-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: .6rem;\n  padding: 1.25rem 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  cursor: pointer;\n  text-decoration: none;\n  color: #475569;\n  font-size: .85rem;\n  font-weight: 600;\n  transition: all .2s;\n  text-align: center;\n}\n.quick-card:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  transform: translateY(-2px);\n  color: #0f172a;\n}\n.quick-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n@media (max-width: 640px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .quick-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/page/dashboard/dashboard.ts", lineNumber: 59 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-KCVKW23I.js.map
