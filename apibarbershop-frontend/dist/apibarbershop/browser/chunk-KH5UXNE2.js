import {
  AuthService
} from "./chunk-66EMLGYO.js";
import {
  Router
} from "./chunk-Y5BHUAGJ.js";
import {
  Password,
  PasswordModule
} from "./chunk-LRBJ4IJB.js";
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
import "./chunk-ITVICGZ6.js";
import {
  apiauthlogin
} from "./chunk-U4NY7MLH.js";
import {
  Api
} from "./chunk-LXYPTV7U.js";
import "./chunk-KUUI72I7.js";
import {
  Button,
  ButtonModule,
  CommonModule,
  Component,
  MessageService,
  inject,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-JJSRJYGA.js";

// src/app/page/auth/login/login.ts
function Login_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "El correo es obligatorio.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "Ingrese un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 15);
    \u0275\u0275text(1, "La contrase\xF1a es obligatoria.");
    \u0275\u0275elementEnd();
  }
}
var Login = class _Login {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  api = inject(Api);
  authService = inject(AuthService);
  messageService = inject(MessageService);
  frmLogin;
  loading = false;
  get emailFb() {
    return this.frmLogin.controls["email"];
  }
  get passwordFb() {
    return this.frmLogin.controls["password"];
  }
  constructor() {
    this.frmLogin = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]]
    });
  }
  sendLogin() {
    if (!this.frmLogin.valid) {
      this.frmLogin.markAllAsTouched();
      this.messageService.add({ severity: "warn", summary: "Atenci\xF3n", detail: "Complete todos los campos correctamente." });
      return;
    }
    this.loading = true;
    const params = {
      body: {
        email: this.emailFb.value,
        password: this.passwordFb.value
      }
    };
    this.api.invoke(apiauthlogin, params).then((response) => {
      const data = typeof response === "string" ? JSON.parse(response) : response;
      if (data.token) {
        this.authService.setUser({
          token: data.token,
          firstName: data.firstName,
          surName: data.surName,
          email: data.email,
          role: data.role,
          photo: data.photo ?? "",
          idUser: data.idUser
        });
        this.messageService.add({ severity: "success", summary: "\xA1Bienvenido!", detail: data.message ?? "Sesi\xF3n iniciada." });
        setTimeout(() => this.router.navigate(["/dashboard"]), 800);
      } else {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Credenciales incorrectas." });
      }
    }).catch(() => {
      this.messageService.add({ severity: "error", summary: "Error", detail: "No se pudo conectar con el servidor." });
    }).finally(() => {
      this.loading = false;
    });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 27, vars: 9, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-slate-900", "via-slate-800", "to-slate-900", "flex", "items-center", "justify-center", "p-4"], [1, "w-full", "max-w-md"], [1, "text-center", "mb-8"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "rounded-2xl", "bg-white/10", "mb-4"], [1, "pi", "pi-scissors", "text-white", "text-3xl"], [1, "text-3xl", "font-bold", "text-white", "tracking-tight"], [1, "text-slate-400", "text-sm", "mt-1"], [1, "bg-white", "rounded-2xl", "shadow-2xl", "p-8"], [1, "text-xl", "font-semibold", "text-slate-800", "mb-6"], [3, "ngSubmit", "formGroup"], [1, "flex", "flex-col", "gap-2", "mb-4"], ["for", "txtEmail", 1, "text-sm", "font-medium", "text-slate-700"], [1, "relative"], [1, "pi", "pi-envelope", "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-slate-400", "text-sm", "z-10"], ["pInputText", "", "id", "txtEmail", "formControlName", "email", "type", "email", "placeholder", "admin@barbershop.com", 1, "w-full", "pl-9"], [1, "errorMessage"], [1, "flex", "flex-col", "gap-2", "mb-6"], ["for", "txtPassword", 1, "text-sm", "font-medium", "text-slate-700"], ["id", "txtPassword", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "feedback", "toggleMask"], ["type", "submit", "label", "Ingresar", "icon", "pi pi-sign-in", "styleClass", "w-full justify-center", 3, "click", "loading"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6, "BarberShop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Panel de Administraci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "h2", 8);
      \u0275\u0275text(11, "Iniciar Sesi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "form", 9);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_12_listener() {
        return ctx.sendLogin();
      });
      \u0275\u0275elementStart(13, "div", 10)(14, "label", 11);
      \u0275\u0275text(15, " Correo electr\xF3nico ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275element(17, "i", 13)(18, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, Login_Conditional_19_Template, 2, 0, "small", 15);
      \u0275\u0275conditionalCreate(20, Login_Conditional_20_Template, 2, 0, "small", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 16)(22, "label", 17);
      \u0275\u0275text(23, " Contrase\xF1a ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "p-password", 18);
      \u0275\u0275conditionalCreate(25, Login_Conditional_25_Template, 2, 0, "small", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p-button", 19);
      \u0275\u0275listener("click", function Login_Template_p_button_click_26_listener() {
        return ctx.sendLogin();
      });
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("formGroup", ctx.frmLogin);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.emailFb.touched && ctx.emailFb.invalid);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.emailFb.touched && ctx.emailFb.hasError("required") ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.emailFb.touched && ctx.emailFb.hasError("email") ? 20 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("feedback", false)("toggleMask", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.passwordFb.touched && ctx.passwordFb.hasError("required") ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading);
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
    InputTextModule,
    InputText,
    PasswordModule,
    Password,
    ButtonModule,
    Button
  ], styles: ["\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      InputTextModule,
      PasswordModule,
      ButtonModule
    ], template: `<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">

  <!-- Tarjeta de login -->
  <div class="w-full max-w-md">

    <!-- Logo / Marca -->
    <div class="text-center mb-8">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4">
        <i class="pi pi-scissors text-white text-3xl"></i>
      </div>
      <h1 class="text-3xl font-bold text-white tracking-tight">BarberShop</h1>
      <p class="text-slate-400 text-sm mt-1">Panel de Administraci\xF3n</p>
    </div>

    <!-- Card -->
    <div class="bg-white rounded-2xl shadow-2xl p-8">
      <h2 class="text-xl font-semibold text-slate-800 mb-6">Iniciar Sesi\xF3n</h2>

      <form [formGroup]="frmLogin" (ngSubmit)="sendLogin()">

        <!-- Email -->
        <div class="flex flex-col gap-2 mb-4">
          <label for="txtEmail" class="text-sm font-medium text-slate-700">
            Correo electr\xF3nico
          </label>
          <div class="relative">
            <i class="pi pi-envelope absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm z-10"></i>
            <input
              pInputText
              id="txtEmail"
              formControlName="email"
              type="email"
              placeholder="admin@barbershop.com"
              class="w-full pl-9"
              [class.ng-invalid]="emailFb.touched && emailFb.invalid"
            />
          </div>
          @if(emailFb.touched && emailFb.hasError('required')) {
            <small class="errorMessage">El correo es obligatorio.</small>
          }
          @if(emailFb.touched && emailFb.hasError('email')) {
            <small class="errorMessage">Ingrese un correo v\xE1lido.</small>
          }
        </div>

        <!-- Password -->
        <div class="flex flex-col gap-2 mb-6">
          <label for="txtPassword" class="text-sm font-medium text-slate-700">
            Contrase\xF1a
          </label>
          <p-password
            id="txtPassword"
            formControlName="password"
            placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
            [feedback]="false"
            [toggleMask]="true"
            styleClass="w-full"
            inputStyleClass="w-full"
          />
          @if(passwordFb.touched && passwordFb.hasError('required')) {
            <small class="errorMessage">La contrase\xF1a es obligatoria.</small>
          }
        </div>

        <!-- Bot\xF3n -->
        <p-button
          type="submit"
          label="Ingresar"
          icon="pi pi-sign-in"
          styleClass="w-full justify-center"
          [loading]="loading"
          (click)="sendLogin()"
        />

      </form>
    </div>
    <!-- Sistema de Reservas para Barber\xEDa-->
     <!--Cliente
      reservar cita
      elegir barbero
      elegir servicios
      ver horarios disponibles
      cancelar reserva
      
      Administrador
      gestionar reservas
      gestionar barberos
      controlar pagos
      dashboard
      reportes
     
      Barbero
      ver agenda
      confirmar citas
      marcar servicio finalizado-->
  </div>
</div>
`, styles: ["/* src/app/page/auth/login/login.css */\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/page/auth/login/login.ts", lineNumber: 28 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-KH5UXNE2.js.map
