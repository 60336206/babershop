import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { apisettinggetone } from '../../api/functions';
import { Api } from '../../api/api';
import { StrictHttpResponse } from '../../api/strict-http-response';
import { RequestBuilder } from '../../api/request-builder';

// Función para actualizar configuraciones que no está generada automáticamente
function apisettingupdate(http: HttpClient, rootUrl: string, params: { body: any }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, '/setting/update', 'put');
  rb.body(params.body, 'application/json');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(Api);
  private readonly messageService = inject(MessageService);

  frmSettings: FormGroup;
  loading = false;
  saving = false;
  currentLogoBase64: string | null = null;
  idSetting: string = '';

  constructor() {
    this.frmSettings = this.fb.group({
      businessName: ['', Validators.required],
      address: [''],
      phone: [''],
      email: [''],
      openHour: [''],
      closeHour: ['']
    });
  }

  ngOnInit(): void {
    this.loadSettings();
  }

  loadSettings(): void {
    this.loading = true;
    (this.api.invoke(apisettinggetone as any, {}) as Promise<any>).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      if (data?.type === 'success' && data.setting) {
        const setting = data.setting;
        this.idSetting = setting.idSetting;
        this.currentLogoBase64 = setting.logo;
        
        this.frmSettings.patchValue({
          businessName: setting.businessName,
          address: setting.address,
          phone: setting.phone,
          email: setting.email,
          openHour: setting.openHour,
          closeHour: setting.closeHour
        });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar la configuración.' });
      }
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error de conexión con el servidor.' });
    }).finally(() => {
      this.loading = false;
    });
  }

  onLogoChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 300;
          const MAX_HEIGHT = 300;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            this.currentLogoBase64 = canvas.toDataURL('image/jpeg', 0.8);
          }
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveSettings(): void {
    if (!this.frmSettings.valid) {
      this.frmSettings.markAllAsTouched();
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Complete los campos obligatorios.' });
      return;
    }

    this.saving = true;
    const formValue = this.frmSettings.value;

    const body = {
      idSetting: this.idSetting,
      businessName: formValue.businessName,
      address: formValue.address,
      phone: formValue.phone,
      email: formValue.email,
      openHour: formValue.openHour,
      closeHour: formValue.closeHour,
      logo: this.currentLogoBase64
    };

    (this.api.invoke(apisettingupdate as any, { body }) as Promise<any>).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      if (data?.type === 'success') {
        this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Configuración actualizada.' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: data.listMessage?.[0] || 'Error al actualizar.' });
      }
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al conectar con el servidor.' });
    }).finally(() => {
      this.saving = false;
    });
  }
}
