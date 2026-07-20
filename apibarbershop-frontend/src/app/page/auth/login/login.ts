import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

import { Api } from '../../../api/api';
import { apiauthlogin, ApiauthloginParams } from '../../../api/functions';
import { AuthService } from '../../../observable/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private readonly formBuilder   = inject(FormBuilder);
  private readonly router        = inject(Router);
  private readonly api           = inject(Api);
  private readonly authService   = inject(AuthService);
  private readonly messageService = inject(MessageService);

  frmLogin: FormGroup;
  loading = false;

  get emailFb()    { return this.frmLogin.controls['email']; }
  get passwordFb() { return this.frmLogin.controls['password']; }

  constructor() {
    this.frmLogin = this.formBuilder.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  sendLogin(): void {
    if (!this.frmLogin.valid) {
      this.frmLogin.markAllAsTouched();
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Complete todos los campos correctamente.' });
      return;
    }

    this.loading = true;

    const params: ApiauthloginParams = {
      body: {
        email:    this.emailFb.value,
        password: this.passwordFb.value
      }
    };

    this.api.invoke(apiauthlogin, params).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;

      if (data.token) {
        this.authService.setUser({
          token:     data.token,
          firstName: data.firstName,
          surName:   data.surName,
          email:     data.email,
          role:      data.role,
          photo:     data.photo ?? '',
          idUser:    data.idUser
        });

        this.messageService.add({ severity: 'success', summary: '¡Bienvenido!', detail: data.message ?? 'Sesión iniciada.' });

        setTimeout(() => this.router.navigate(['/dashboard']), 800);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Credenciales incorrectas.' });
      }
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo conectar con el servidor.' });
    }).finally(() => {
      this.loading = false;
    });
  }
}
