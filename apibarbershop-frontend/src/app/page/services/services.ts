import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import { SelectModule } from 'primeng/select';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Api } from '../../api/api';
import { apiservicegetall } from '../../api/functions';

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../api/strict-http-response';
import { RequestBuilder } from '../../api/request-builder';

function apiserviceinsert(http: HttpClient, rootUrl: string, params: { body: any }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, '/service/insert', 'post');
  rb.body(params.body, 'application/json');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apiserviceupdate(http: HttpClient, rootUrl: string, params: { body: any }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, '/service/update', 'put');
  rb.body(params.body, 'application/json');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apiservicedelete(http: HttpClient, rootUrl: string, params: { idService: string }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, `/service/delete/${params.idService}`, 'delete');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TextareaModule,
    InputNumberModule,
    TagModule,
    ToolbarModule,
    TooltipModule,
    SkeletonModule,
    SelectModule
  ],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services implements OnInit {
  private readonly api                 = inject(Api);
  private readonly formBuilder         = inject(FormBuilder);
  private readonly messageService      = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly cdr                 = inject(ChangeDetectorRef);

  listService: any[] = [];
  loading = false;

  statusOptions = [
    { label: 'Activo', value: 1 },
    { label: 'Inactivo', value: 0 }
  ];

  dialogVisible = false;
  isEditing = false;
  saving = false;

  imagePreview: string | null = null;
  imageError: string | null = null;

  frmService: FormGroup;

  get nameFb()            { return this.frmService.controls['name']; }
  get descriptionFb()     { return this.frmService.controls['description']; }
  get priceFb()           { return this.frmService.controls['price']; }
  get durationMinutesFb() { return this.frmService.controls['durationMinutes']; }

  constructor() {
    this.frmService = this.formBuilder.group({
      idService:       [''],
      name:            ['', [Validators.required]],
      description:     ['', [Validators.required]],
      price:           [null, [Validators.required, Validators.min(0.01)]],
      durationMinutes: [null, [Validators.required, Validators.min(1)]],
      image:           [''],
      status:          [1]
    });
  }

  ngOnInit(): void {
    this.loadServices();
  }

  private loadServices(): void {
    this.loading = true;
    this.api.invoke(apiservicegetall).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      this.listService = data?.listService ?? [];
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar los servicios.' });
    });
  }

  openNew(): void {
    this.isEditing = false;
    this.frmService.reset();
    this.imagePreview = null;
    this.imageError = null;
    this.dialogVisible = true;
  }

  openEdit(service: any): void {
    this.isEditing = true;
    this.frmService.patchValue(service);
    this.imagePreview = service.image || null;
    this.imageError = null;
    this.dialogVisible = true;
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.imageError = null;

    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      this.imageError = 'El archivo debe ser una imagen.';
      input.value = '';
      return;
    }

    const maxSizeBytes = 3 * 1024 * 1024; // 3 MB
    if (file.size > maxSizeBytes) {
      this.imageError = 'La imagen no debe superar 3 MB.';
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      this.imagePreview = base64;
      this.frmService.patchValue({ image: base64 });
      this.cdr.detectChanges();
    };
    reader.onerror = () => {
      this.imageError = 'No se pudo leer la imagen seleccionada.';
    };
    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.imagePreview = null;
    this.imageError = null;
    this.frmService.patchValue({ image: '' });
  }

  saveService(): void {
    if (!this.frmService.valid) {
      this.frmService.markAllAsTouched();
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Complete todos los campos.' });
      return;
    }

    this.saving = true;
    const v = this.frmService.value;

    const fn = this.isEditing ? apiserviceupdate : apiserviceinsert;
    const body = this.isEditing
      ? { idService: v.idService, name: v.name, description: v.description, price: v.price, durationMinutes: v.durationMinutes, image: v.image ?? '', status: v.status }
      : { name: v.name, description: v.description, price: v.price, durationMinutes: v.durationMinutes, image: v.image ?? '', status: v.status };

    this.api.invoke(fn, { body }).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      if (data?.type === 'success') {
        this.messageService.add({ severity: 'success', summary: 'Correcto', detail: data.listMessage?.[0] ?? 'Servicio guardado.' });
        this.dialogVisible = false;
        this.loadServices();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: data.listMessage?.[0] ?? 'Error al guardar.' });
      }
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error de conexión.' });
    }).finally(() => { this.saving = false; this.cdr.detectChanges(); });
  }

  confirmDelete(event: Event, service: any): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Eliminar el servicio "${service.name}"?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: { label: 'Cancelar', severity: 'secondary', outlined: true },
      acceptButtonProps:  { label: 'Sí, eliminar', severity: 'danger' },
      accept: () => {
        this.api.invoke(apiservicedelete, { idService: service.idService }).then((response: any) => {
          const data = typeof response === 'string' ? JSON.parse(response) : response;
          if (data?.type === 'success') {
            this.listService = this.listService.filter(s => s.idService !== service.idService);
            this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Servicio eliminado.' });
            this.cdr.detectChanges();
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar.' });
          }
        }).catch(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar.' });
        });
      }
    });
  }

  getStatusSeverity(status: number): 'success' | 'danger' {
    return status === 1 ? 'success' : 'danger';
  }
}