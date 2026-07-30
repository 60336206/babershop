import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Api } from '../../../api/api';
import { apiuserlogin } from '../../../api/functions';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private router   = inject(Router);
  private auth     = inject(AuthService);

  email:         string  = '';
  password:      string  = '';
  showPassword:  boolean = false;
  loading:       boolean = false;
  errorMessage:  string  = '';

  constructor(private api: Api) {
    // Si ya hay sesión activa, redirigir al inicio
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/suggestion/insert']);
    }
  }

  login(): void {
    if (!this.email.trim() || !this.password.trim()) {
      this.errorMessage = 'Por favor ingresa tu correo y contraseña.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.api.invoke(apiuserlogin, {
      body: { email: this.email, password: this.password }
    }).then((response: any) => {
  console.log('RESPONSE COMPLETA:', response);

  const data = typeof response === 'string'
    ? JSON.parse(response)
    : response;

  console.log('DATA:', data);

  if (data?.type === 'success') {
    console.log('LOGIN OK');

    this.auth.saveSession(
      data.token,
      {
        fullName: data.fullName,
        email: data.email,
        role: data.role
      },
      data.refreshToken,
      data.expiresIn
    );

    console.log('TOKEN GUARDADO:', localStorage.getItem('auth_token'));

    this.router.navigate(['/suggestion/insert']);
  } else {
    console.log('LOGIN ERROR:', data);

    this.errorMessage =
      data?.listMessage?.[0] ??
      'Correo o contraseña incorrectos.';
  }
}).finally(() => {
      this.loading = false;
    });
  }
}
