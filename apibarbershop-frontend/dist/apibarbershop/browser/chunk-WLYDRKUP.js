import {
  Skeleton,
  SkeletonModule
} from "./chunk-7XDVSYGC.js";
import {
  CardModule
} from "./chunk-P6YI4ZT2.js";
import {
  Router
} from "./chunk-Y5BHUAGJ.js";
import {
  TagModule
} from "./chunk-47QHBKBD.js";
import {
  apigallerygetall,
  apiservicegetall,
  apisettinggetone,
  apiusergetall
} from "./chunk-U4NY7MLH.js";
import {
  Api
} from "./chunk-LXYPTV7U.js";
import "./chunk-KUUI72I7.js";
import {
  Button,
  ButtonModule,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  inject,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JJSRJYGA.js";

// src/app/page/web/home/home.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.idService;
var _forTrack1 = ($index, $item) => $item.idUser;
var _forTrack2 = ($index, $item) => $item.idGallery;
function Home_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "p-skeleton", 41)(2, "p-skeleton", 42)(3, "p-skeleton", 43);
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1, "Bienvenido a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 46);
    \u0275\u0275text(5, "Tu estilo, nuestra pasi\xF3n. Reserva tu cita en minutos.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 47)(7, "p-button", 48);
    \u0275\u0275listener("click", function Home_Conditional_22_Template_p_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToBooking());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 49);
    \u0275\u0275element(9, "i", 50);
    \u0275\u0275text(10, " Ver servicios ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.setting == null ? null : ctx_r1.setting.businessName) ?? "BarberShop");
  }
}
function Home_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "p-skeleton", 52);
    \u0275\u0275elementStart(2, "div", 53);
    \u0275\u0275element(3, "p-skeleton", 54)(4, "p-skeleton", 55);
    \u0275\u0275elementEnd()();
  }
}
function Home_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, Home_Conditional_30_For_2_Template, 5, 0, "div", 51, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function Home_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "No hay servicios disponibles por el momento.");
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_32_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const service_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", service_r3.image, \u0275\u0275sanitizeUrl)("alt", service_r3.name);
  }
}
function Home_Conditional_32_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_32_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275conditionalCreate(1, Home_Conditional_32_For_2_Conditional_1_Template, 1, 2, "img", 57)(2, Home_Conditional_32_For_2_Conditional_2_Template, 2, 0, "div", 58);
    \u0275\u0275elementStart(3, "div", 59)(4, "h3", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 62)(9, "span", 63);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 64);
    \u0275\u0275element(13, "i", 65);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const service_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(service_r3.image ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(service_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(11, 5, service_r3.price, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", service_r3.durationMinutes, " min ");
  }
}
function Home_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, Home_Conditional_32_For_2_Template, 15, 8, "div", 56, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.services);
  }
}
function Home_Conditional_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "p-skeleton", 68)(2, "p-skeleton", 69);
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, Home_Conditional_40_For_2_Template, 3, 0, "div", 67, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function Home_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "No hay barberos disponibles.");
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_42_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 71);
  }
  if (rf & 2) {
    const barber_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", barber_r4.photo, \u0275\u0275sanitizeUrl)("alt", barber_r4.firstName);
  }
}
function Home_Conditional_42_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275elementEnd();
  }
}
function Home_Conditional_42_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275conditionalCreate(1, Home_Conditional_42_For_2_Conditional_1_Template, 1, 2, "img", 71)(2, Home_Conditional_42_For_2_Conditional_2_Template, 2, 0, "div", 72);
    \u0275\u0275elementStart(3, "h3", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 74);
    \u0275\u0275text(6, "Barbero profesional");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const barber_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(barber_r4.photo ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", barber_r4.firstName, " ", barber_r4.surName);
  }
}
function Home_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, Home_Conditional_42_For_2_Template, 7, 3, "div", 70, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.barbers);
  }
}
function Home_Conditional_43_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "img", 78);
    \u0275\u0275elementStart(2, "div", 79)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r5.image, \u0275\u0275sanitizeUrl)("alt", item_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.title);
  }
}
function Home_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 28)(1, "div", 17)(2, "div", 18)(3, "h2", 19);
    \u0275\u0275text(4, "Galer\xEDa de Trabajos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6, "Resultados que hablan por s\xED solos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 76);
    \u0275\u0275repeaterCreate(8, Home_Conditional_43_For_9_Template, 5, 3, "div", 77, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.gallery);
  }
}
function Home_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.setting.address);
  }
}
function Home_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.setting.phone);
  }
}
function Home_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.setting.email);
  }
}
function Home_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.setting.openHour, " \u2014 ", ctx_r1.setting.closeHour);
  }
}
var Home = class _Home {
  api = inject(Api);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);
  setting = null;
  services = [];
  gallery = [];
  barbers = [];
  loading = true;
  today = /* @__PURE__ */ new Date();
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    Promise.all([
      this.api.invoke(apisettinggetone),
      this.api.invoke(apiservicegetall),
      this.api.invoke(apigallerygetall),
      this.api.invoke(apiusergetall)
    ]).then(([setting, services, gallery, users]) => {
      const parse = (r) => typeof r === "string" ? JSON.parse(r) : r;
      const s = parse(setting);
      const sv = parse(services);
      const g = parse(gallery);
      const u = parse(users);
      this.setting = s?.setting ?? null;
      this.services = (sv?.listService ?? []).filter((x) => x.status === 1);
      this.gallery = g?.listGallery ?? [];
      this.barbers = (u?.listUser ?? []).filter((x) => x.role === "BARBER" && x.status === 1);
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
  goToBooking() {
    this.router.navigate(["/booking"]);
  }
  goToAdmin() {
    this.router.navigate(["/auth/login"]);
  }
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 65, vars: 16, consts: [[1, "navbar"], [1, "navbar-inner"], [1, "navbar-logo"], [1, "pi", "pi-scissors"], [1, "navbar-links"], ["href", "#servicios"], ["href", "#barberos"], ["href", "#galeria"], ["href", "#contacto"], [1, "navbar-actions"], ["label", "Reservar Cita", "icon", "pi pi-calendar-plus", 3, "click"], ["label", "Admin", "icon", "pi pi-lock", "severity", "secondary", 3, "click", "text"], [1, "hero"], [1, "hero-overlay"], [1, "hero-content"], [1, "flex", "flex-col", "items-center", "gap-4"], ["id", "servicios", 1, "web-section"], [1, "section-inner"], [1, "section-head"], [1, "section-title"], [1, "section-sub"], [1, "services-grid"], [1, "empty-msg"], ["id", "barberos", 1, "web-section", "web-section--dark"], [1, "section-title", "text-white"], [1, "section-sub", "text-slate-400"], [1, "barbers-grid"], [1, "empty-msg", "text-slate-400"], ["id", "galeria", 1, "web-section"], [1, "cta-section"], [1, "cta-inner"], [1, "cta-title"], [1, "cta-sub"], ["label", "Reservar mi cita ahora", "icon", "pi pi-calendar-plus", "size", "large", 3, "click"], ["id", "contacto", 1, "web-footer"], [1, "footer-inner"], [1, "footer-brand"], [1, "pi", "pi-scissors", "text-2xl"], [1, "footer-name"], [1, "footer-info"], [1, "footer-copy"], ["width", "20rem", "height", "3rem"], ["width", "28rem", "height", "1.5rem"], ["width", "12rem", "height", "3rem"], [1, "hero-tagline"], [1, "hero-title"], [1, "hero-sub"], [1, "hero-btns"], ["label", "Reservar mi cita", "icon", "pi pi-calendar-plus", "size", "large", 3, "click"], ["href", "#servicios", 1, "hero-link"], [1, "pi", "pi-arrow-down"], [1, "service-card-skeleton"], ["height", "200px"], [1, "p-3"], ["width", "60%", "height", "1.2rem", 1, "mb-2"], ["width", "100%", "height", "1rem"], [1, "service-card"], [1, "service-img", 3, "src", "alt"], [1, "service-img-placeholder"], [1, "service-body"], [1, "service-name"], [1, "service-desc"], [1, "service-footer"], [1, "service-price"], [1, "service-duration"], [1, "pi", "pi-clock"], [1, "pi", "pi-scissors", "text-4xl", "text-slate-300"], [1, "barber-card-skeleton"], ["shape", "circle", "size", "96px"], ["width", "8rem", "height", "1rem", 1, "mt-3"], [1, "barber-card"], [1, "barber-avatar", 3, "src", "alt"], [1, "barber-avatar-placeholder"], [1, "barber-name"], [1, "barber-role"], [1, "pi", "pi-user", "text-3xl", "text-slate-400"], [1, "gallery-grid"], [1, "gallery-item"], [3, "src", "alt"], [1, "gallery-overlay"], [1, "pi", "pi-map-marker"], [1, "pi", "pi-phone"], [1, "pi", "pi-envelope"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "nav", 4)(7, "a", 5);
      \u0275\u0275text(8, "Servicios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275text(10, "Barberos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 7);
      \u0275\u0275text(12, "Galer\xEDa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 8);
      \u0275\u0275text(14, "Contacto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "p-button", 10);
      \u0275\u0275listener("click", function Home_Template_p_button_click_16_listener() {
        return ctx.goToBooking();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p-button", 11);
      \u0275\u0275listener("click", function Home_Template_p_button_click_17_listener() {
        return ctx.goToAdmin();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "section", 12);
      \u0275\u0275element(19, "div", 13);
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275conditionalCreate(21, Home_Conditional_21_Template, 4, 0, "div", 15)(22, Home_Conditional_22_Template, 11, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "section", 16)(24, "div", 17)(25, "div", 18)(26, "h2", 19);
      \u0275\u0275text(27, "Nuestros Servicios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 20);
      \u0275\u0275text(29, "Ofrecemos la mejor experiencia en cuidado personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(30, Home_Conditional_30_Template, 3, 1, "div", 21)(31, Home_Conditional_31_Template, 2, 0, "p", 22)(32, Home_Conditional_32_Template, 3, 0, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "section", 23)(34, "div", 17)(35, "div", 18)(36, "h2", 24);
      \u0275\u0275text(37, "Nuestros Barberos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 25);
      \u0275\u0275text(39, "Profesionales apasionados por su trabajo");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(40, Home_Conditional_40_Template, 3, 1, "div", 26)(41, Home_Conditional_41_Template, 2, 0, "p", 27)(42, Home_Conditional_42_Template, 3, 0, "div", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(43, Home_Conditional_43_Template, 10, 0, "section", 28);
      \u0275\u0275elementStart(44, "section", 29)(45, "div", 30)(46, "h2", 31);
      \u0275\u0275text(47, "\xBFListo para verte incre\xEDble?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 32);
      \u0275\u0275text(49, "Reserva tu cita ahora y garantiza tu lugar con tu barbero favorito.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p-button", 33);
      \u0275\u0275listener("click", function Home_Template_p_button_click_50_listener() {
        return ctx.goToBooking();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "footer", 34)(52, "div", 35)(53, "div", 36);
      \u0275\u0275element(54, "i", 37);
      \u0275\u0275elementStart(55, "span", 38);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 39);
      \u0275\u0275conditionalCreate(58, Home_Conditional_58_Template, 3, 1, "span");
      \u0275\u0275conditionalCreate(59, Home_Conditional_59_Template, 3, 1, "span");
      \u0275\u0275conditionalCreate(60, Home_Conditional_60_Template, 3, 1, "span");
      \u0275\u0275conditionalCreate(61, Home_Conditional_61_Template, 3, 2, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p", 40);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "date");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.setting == null ? null : ctx.setting.businessName) ?? "BarberShop");
      \u0275\u0275advance(12);
      \u0275\u0275property("text", true);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading ? 21 : 22);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.loading ? 30 : ctx.services.length === 0 ? 31 : 32);
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading ? 40 : ctx.barbers.length === 0 ? 41 : 42);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.gallery.length > 0 ? 43 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate((ctx.setting == null ? null : ctx.setting.businessName) ?? "BarberShop");
      \u0275\u0275advance(2);
      \u0275\u0275conditional((ctx.setting == null ? null : ctx.setting.address) ? 58 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.setting == null ? null : ctx.setting.phone) ? 59 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.setting == null ? null : ctx.setting.email) ? 60 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.setting == null ? null : ctx.setting.openHour) && (ctx.setting == null ? null : ctx.setting.closeHour) ? 61 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("\xA9 ", (ctx.setting == null ? null : ctx.setting.businessName) ?? "BarberShop", " ", \u0275\u0275pipeBind2(64, 13, ctx.today, "yyyy"), ". Todos los derechos reservados.");
    }
  }, dependencies: [CommonModule, ButtonModule, Button, CardModule, SkeletonModule, Skeleton, TagModule, DecimalPipe, DatePipe], styles: [`
.navbar[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.95);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.navbar-inner[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 68px;
  display: flex;
  align-items: center;
  gap: 2rem;
}
.navbar-logo[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  flex-shrink: 0;
}
.navbar-logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #f59e0b;
}
.navbar-links[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  margin-left: 1rem;
}
.navbar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  padding: 0.5rem 0.9rem;
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 8px;
  transition: color 0.2s, background-color 0.2s;
}
.navbar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.08);
}
.navbar-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}
.hero[_ngcontent-%COMP%] {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(
      135deg,
      #0f172a 0%,
      #1e293b 50%,
      #0f172a 100%);
  overflow: hidden;
  padding-top: 68px;
}
.hero[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 20% 50%,
      rgba(251, 191, 36, 0.08) 0%,
      transparent 60%),
    radial-gradient(
      ellipse at 80% 20%,
      rgba(139, 92, 246, 0.06) 0%,
      transparent 50%);
}
.hero-overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-content[_ngcontent-%COMP%] {
  position: relative;
  text-align: center;
  padding: 2rem 1.5rem;
  max-width: 700px;
}
.hero-tagline[_ngcontent-%COMP%] {
  font-size: 1rem;
  color: #f59e0b;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}
.hero-title[_ngcontent-%COMP%] {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
}
.hero-sub[_ngcontent-%COMP%] {
  font-size: 1.15rem;
  color: #94a3b8;
  margin-bottom: 2.5rem;
}
.hero-btns[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.hero-link[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}
.hero-link[_ngcontent-%COMP%]:hover {
  color: #ffffff;
}
.web-section[_ngcontent-%COMP%] {
  padding: 5rem 1.5rem;
  background: #ffffff;
}
.web-section--dark[_ngcontent-%COMP%] {
  background: #0f172a;
}
.section-inner[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
}
.section-head[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 3rem;
}
.section-title[_ngcontent-%COMP%] {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.75rem;
}
.section-sub[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 1rem;
  margin: 0;
}
.empty-msg[_ngcontent-%COMP%] {
  text-align: center;
  color: #94a3b8;
  padding: 3rem;
}
.services-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}
.service-card[_ngcontent-%COMP%] {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
  transition: transform 0.25s, box-shadow 0.25s;
}
.service-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
.service-img[_ngcontent-%COMP%] {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.service-img-placeholder[_ngcontent-%COMP%] {
  width: 100%;
  height: 180px;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e2e8f0;
}
.service-body[_ngcontent-%COMP%] {
  padding: 1.25rem;
}
.service-name[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem;
}
.service-desc[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 0 1rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.service-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.service-price[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
}
.service-duration[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.service-card-skeleton[_ngcontent-%COMP%] {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #f1f5f9;
}
.barbers-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}
.barber-card[_ngcontent-%COMP%] {
  text-align: center;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  width: 100%;
  transition: background 0.2s, transform 0.2s;
}
.barber-card[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
}
.barber-avatar[_ngcontent-%COMP%] {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f59e0b;
  margin: 0 auto 1rem;
  display: block;
}
.barber-avatar-placeholder[_ngcontent-%COMP%] {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #1e293b;
  border: 3px solid #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}
.barber-card-skeleton[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
.barber-name[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.25rem;
}
.barber-role[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
}
.gallery-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
.gallery-item[_ngcontent-%COMP%] {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
}
.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.gallery-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {
  transform: scale(1.05);
}
.gallery-overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
}
.gallery-item[_ngcontent-%COMP%]:hover   .gallery-overlay[_ngcontent-%COMP%] {
  opacity: 1;
}
.gallery-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
}
.cta-section[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #f59e0b 0%,
      #d97706 100%);
  padding: 5rem 1.5rem;
}
.cta-inner[_ngcontent-%COMP%] {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
.cta-title[_ngcontent-%COMP%] {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 1rem;
}
.cta-sub[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 2rem;
}
.web-footer[_ngcontent-%COMP%] {
  background: #0f172a;
  padding: 3rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.footer-inner[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}
.footer-brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #ffffff;
}
.footer-brand[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #f59e0b;
}
.footer-name[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 700;
}
.footer-info[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 2rem;
}
.footer-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.875rem;
}
.footer-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #f59e0b;
}
.footer-copy[_ngcontent-%COMP%] {
  color: #475569;
  font-size: 0.8rem;
  margin: 0;
}
@media (max-width: 768px) {
  .navbar-links[_ngcontent-%COMP%] {
    display: none;
  }
  .hero-btns[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1rem;
  }
  .services-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
  .barbers-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
  .gallery-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
/*# sourceMappingURL=home.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, ButtonModule, CardModule, SkeletonModule, TagModule], template: `<!-- \u2550\u2550 NAVBAR \u2550\u2550 -->\r
<header class="navbar">\r
  <div class="navbar-inner">\r
    <div class="navbar-logo">\r
      <i class="pi pi-scissors"></i>\r
      <span>{{ setting?.businessName ?? 'BarberShop' }}</span>\r
    </div>\r
    <nav class="navbar-links">\r
      <a href="#servicios">Servicios</a>\r
      <a href="#barberos">Barberos</a>\r
      <a href="#galeria">Galer\xEDa</a>\r
      <a href="#contacto">Contacto</a>\r
    </nav>\r
    <div class="navbar-actions">\r
      <p-button label="Reservar Cita" icon="pi pi-calendar-plus" (click)="goToBooking()" />\r
      <p-button label="Admin" icon="pi pi-lock" [text]="true" severity="secondary" (click)="goToAdmin()" />\r
    </div>\r
  </div>\r
</header>\r
\r
<!-- \u2550\u2550 HERO \u2550\u2550 -->\r
<section class="hero">\r
  <div class="hero-overlay"></div>\r
  <div class="hero-content">\r
    @if(loading) {\r
      <div class="flex flex-col items-center gap-4">\r
        <p-skeleton width="20rem" height="3rem" />\r
        <p-skeleton width="28rem" height="1.5rem" />\r
        <p-skeleton width="12rem" height="3rem" />\r
      </div>\r
    } @else {\r
      <p class="hero-tagline">Bienvenido a</p>\r
      <h1 class="hero-title">{{ setting?.businessName ?? 'BarberShop' }}</h1>\r
      <p class="hero-sub">Tu estilo, nuestra pasi\xF3n. Reserva tu cita en minutos.</p>\r
      <div class="hero-btns">\r
        <p-button\r
          label="Reservar mi cita"\r
          icon="pi pi-calendar-plus"\r
          size="large"\r
          (click)="goToBooking()"\r
        />\r
        <a href="#servicios" class="hero-link">\r
          <i class="pi pi-arrow-down"></i> Ver servicios\r
        </a>\r
      </div>\r
    }\r
  </div>\r
</section>\r
\r
<!-- \u2550\u2550 SERVICIOS \u2550\u2550 -->\r
<section class="web-section" id="servicios">\r
  <div class="section-inner">\r
    <div class="section-head">\r
      <h2 class="section-title">Nuestros Servicios</h2>\r
      <p class="section-sub">Ofrecemos la mejor experiencia en cuidado personal</p>\r
    </div>\r
\r
    @if(loading) {\r
      <div class="services-grid">\r
        @for(i of [1,2,3,4]; track i) {\r
          <div class="service-card-skeleton">\r
            <p-skeleton height="200px" />\r
            <div class="p-3">\r
              <p-skeleton width="60%" height="1.2rem" class="mb-2" />\r
              <p-skeleton width="100%" height="1rem" />\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    } @else if(services.length === 0) {\r
      <p class="empty-msg">No hay servicios disponibles por el momento.</p>\r
    } @else {\r
      <div class="services-grid">\r
        @for(service of services; track service.idService) {\r
          <div class="service-card">\r
            @if(service.image) {\r
              <img [src]="service.image" [alt]="service.name" class="service-img" />\r
            } @else {\r
              <div class="service-img-placeholder">\r
                <i class="pi pi-scissors text-4xl text-slate-300"></i>\r
              </div>\r
            }\r
            <div class="service-body">\r
              <h3 class="service-name">{{ service.name }}</h3>\r
              <p class="service-desc">{{ service.description }}</p>\r
              <div class="service-footer">\r
                <span class="service-price">S/ {{ service.price | number:'1.2-2' }}</span>\r
                <span class="service-duration">\r
                  <i class="pi pi-clock"></i> {{ service.durationMinutes }} min\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    }\r
  </div>\r
</section>\r
\r
<!-- \u2550\u2550 BARBEROS \u2550\u2550 -->\r
<section class="web-section web-section--dark" id="barberos">\r
  <div class="section-inner">\r
    <div class="section-head">\r
      <h2 class="section-title text-white">Nuestros Barberos</h2>\r
      <p class="section-sub text-slate-400">Profesionales apasionados por su trabajo</p>\r
    </div>\r
\r
    @if(loading) {\r
      <div class="barbers-grid">\r
        @for(i of [1,2,3]; track i) {\r
          <div class="barber-card-skeleton">\r
            <p-skeleton shape="circle" size="96px" />\r
            <p-skeleton width="8rem" height="1rem" class="mt-3" />\r
          </div>\r
        }\r
      </div>\r
    } @else if(barbers.length === 0) {\r
      <p class="empty-msg text-slate-400">No hay barberos disponibles.</p>\r
    } @else {\r
      <div class="barbers-grid">\r
        @for(barber of barbers; track barber.idUser) {\r
          <div class="barber-card">\r
            @if(barber.photo) {\r
              <img [src]="barber.photo" [alt]="barber.firstName" class="barber-avatar" />\r
            } @else {\r
              <div class="barber-avatar-placeholder">\r
                <i class="pi pi-user text-3xl text-slate-400"></i>\r
              </div>\r
            }\r
            <h3 class="barber-name">{{ barber.firstName }} {{ barber.surName }}</h3>\r
            <p class="barber-role">Barbero profesional</p>\r
          </div>\r
        }\r
      </div>\r
    }\r
  </div>\r
</section>\r
\r
<!-- \u2550\u2550 GALER\xCDA \u2550\u2550 -->\r
@if(gallery.length > 0) {\r
  <section class="web-section" id="galeria">\r
    <div class="section-inner">\r
      <div class="section-head">\r
        <h2 class="section-title">Galer\xEDa de Trabajos</h2>\r
        <p class="section-sub">Resultados que hablan por s\xED solos</p>\r
      </div>\r
      <div class="gallery-grid">\r
        @for(item of gallery; track item.idGallery) {\r
          <div class="gallery-item">\r
            <img [src]="item.image" [alt]="item.title" />\r
            <div class="gallery-overlay">\r
              <span>{{ item.title }}</span>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  </section>\r
}\r
\r
<!-- \u2550\u2550 CTA RESERVA \u2550\u2550 -->\r
<section class="cta-section">\r
  <div class="cta-inner">\r
    <h2 class="cta-title">\xBFListo para verte incre\xEDble?</h2>\r
    <p class="cta-sub">Reserva tu cita ahora y garantiza tu lugar con tu barbero favorito.</p>\r
    <p-button\r
      label="Reservar mi cita ahora"\r
      icon="pi pi-calendar-plus"\r
      size="large"\r
      (click)="goToBooking()"\r
    />\r
  </div>\r
</section>\r
\r
<!-- \u2550\u2550 CONTACTO / FOOTER \u2550\u2550 -->\r
<footer class="web-footer" id="contacto">\r
  <div class="footer-inner">\r
    <div class="footer-brand">\r
      <i class="pi pi-scissors text-2xl"></i>\r
      <span class="footer-name">{{ setting?.businessName ?? 'BarberShop' }}</span>\r
    </div>\r
    <div class="footer-info">\r
      @if(setting?.address) {\r
        <span><i class="pi pi-map-marker"></i> {{ setting.address }}</span>\r
      }\r
      @if(setting?.phone) {\r
        <span><i class="pi pi-phone"></i> {{ setting.phone }}</span>\r
      }\r
      @if(setting?.email) {\r
        <span><i class="pi pi-envelope"></i> {{ setting.email }}</span>\r
      }\r
      @if(setting?.openHour && setting?.closeHour) {\r
        <span><i class="pi pi-clock"></i> {{ setting.openHour }} \u2014 {{ setting.closeHour }}</span>\r
      }\r
    </div>\r
    <p class="footer-copy">\xA9 {{ setting?.businessName ?? 'BarberShop' }} {{ today | date:'yyyy' }}. Todos los derechos reservados.</p>\r
  </div>\r
</footer>`, styles: [`/* src/app/page/web/home/home.css */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.95);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 68px;
  display: flex;
  align-items: center;
  gap: 2rem;
}
.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  flex-shrink: 0;
}
.navbar-logo i {
  color: #f59e0b;
}
.navbar-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  margin-left: 1rem;
}
.navbar-links a {
  padding: 0.5rem 0.9rem;
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 8px;
  transition: color 0.2s, background-color 0.2s;
}
.navbar-links a:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.08);
}
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(
      135deg,
      #0f172a 0%,
      #1e293b 50%,
      #0f172a 100%);
  overflow: hidden;
  padding-top: 68px;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 20% 50%,
      rgba(251, 191, 36, 0.08) 0%,
      transparent 60%),
    radial-gradient(
      ellipse at 80% 20%,
      rgba(139, 92, 246, 0.06) 0%,
      transparent 50%);
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-content {
  position: relative;
  text-align: center;
  padding: 2rem 1.5rem;
  max-width: 700px;
}
.hero-tagline {
  font-size: 1rem;
  color: #f59e0b;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}
.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
}
.hero-sub {
  font-size: 1.15rem;
  color: #94a3b8;
  margin-bottom: 2.5rem;
}
.hero-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.hero-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}
.hero-link:hover {
  color: #ffffff;
}
.web-section {
  padding: 5rem 1.5rem;
  background: #ffffff;
}
.web-section--dark {
  background: #0f172a;
}
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.section-head {
  text-align: center;
  margin-bottom: 3rem;
}
.section-title {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.75rem;
}
.section-sub {
  color: #64748b;
  font-size: 1rem;
  margin: 0;
}
.empty-msg {
  text-align: center;
  color: #94a3b8;
  padding: 3rem;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}
.service-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
  transition: transform 0.25s, box-shadow 0.25s;
}
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
.service-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.service-img-placeholder {
  width: 100%;
  height: 180px;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e2e8f0;
}
.service-body {
  padding: 1.25rem;
}
.service-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem;
}
.service-desc {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 0 1rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.service-price {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
}
.service-duration {
  font-size: 0.8rem;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.service-card-skeleton {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #f1f5f9;
}
.barbers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}
.barber-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  width: 100%;
  transition: background 0.2s, transform 0.2s;
}
.barber-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
}
.barber-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f59e0b;
  margin: 0 auto 1rem;
  display: block;
}
.barber-avatar-placeholder {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #1e293b;
  border: 3px solid #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}
.barber-card-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
.barber-name {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.25rem;
}
.barber-role {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.gallery-item:hover img {
  transform: scale(1.05);
}
.gallery-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
}
.gallery-item:hover .gallery-overlay {
  opacity: 1;
}
.gallery-overlay span {
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
}
.cta-section {
  background:
    linear-gradient(
      135deg,
      #f59e0b 0%,
      #d97706 100%);
  padding: 5rem 1.5rem;
}
.cta-inner {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
.cta-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 1rem;
}
.cta-sub {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 2rem;
}
.web-footer {
  background: #0f172a;
  padding: 3rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #ffffff;
}
.footer-brand i {
  color: #f59e0b;
}
.footer-name {
  font-size: 1.25rem;
  font-weight: 700;
}
.footer-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 2rem;
}
.footer-info span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.875rem;
}
.footer-info i {
  color: #f59e0b;
}
.footer-copy {
  color: #475569;
  font-size: 0.8rem;
  margin: 0;
}
@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }
  .hero-btns {
    flex-direction: column;
    gap: 1rem;
  }
  .services-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
  .barbers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
/*# sourceMappingURL=home.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/page/web/home/home.ts", lineNumber: 20 });
})();
export {
  Home
};
//# sourceMappingURL=chunk-WLYDRKUP.js.map
