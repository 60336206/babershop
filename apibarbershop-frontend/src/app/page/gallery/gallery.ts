import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Api } from '../../api/api';
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../api/strict-http-response';
import { RequestBuilder } from '../../api/request-builder';

function apigallerygetall(http: HttpClient, rootUrl: string, params?: any, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, '/gallery/getall', 'get');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apigalleryinsert(http: HttpClient, rootUrl: string, params: { body: any }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, '/gallery/insert', 'post');
  rb.body(params.body, 'application/json');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apigalleryupdate(http: HttpClient, rootUrl: string, params: { body: any }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, '/gallery/update', 'put');
  rb.body(params.body, 'application/json');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apigallerydelete(http: HttpClient, rootUrl: string, params: { idGallery: string }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, `/gallery/delete/${params.idGallery}`, 'delete');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    ButtonModule, DialogModule, ToolbarModule, TooltipModule,
    InputTextModule, TextareaModule, SkeletonModule, ProgressSpinnerModule
  ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery implements OnInit {
  private readonly api                 = inject(Api);
  private readonly formBuilder         = inject(FormBuilder);
  private readonly messageService      = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly cdr                 = inject(ChangeDetectorRef);

  listGallery: any[] = [];
  loading = false;
  saving = false;
  dialogVisible = false;
  isEditing = false;
  uploadedImageBase64: string | null = null;
  imageError: string | null = null;

  frmGallery: FormGroup;

  get titleFb()       { return this.frmGallery.controls['title']; }
  get descriptionFb() { return this.frmGallery.controls['description']; }

  constructor() {
    this.frmGallery = this.formBuilder.group({
      idGallery:   [''],
      title:       ['', [Validators.required]],
      description: ['']
    });
  }

  ngOnInit(): void { this.loadGallery(); }

  loadGallery(): void {
    this.loading = true;
    this.api.invoke(apigallerygetall).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      this.listGallery = data?.listGallery ?? [];
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar la galería.' });
    });
  }

  openNew(): void {
    this.isEditing = false;
    this.uploadedImageBase64 = null;
    this.imageError = null;
    this.frmGallery.reset({ idGallery: '', title: '', description: '' });
    this.dialogVisible = true;
  }

  openEdit(item: any): void {
    this.isEditing = true;
    this.uploadedImageBase64 = item.image ?? null;
    this.imageError = null;
    this.frmGallery.patchValue({ idGallery: item.idGallery, title: item.title, description: item.description ?? '' });
    this.dialogVisible = true;
  }

  // Maneja input nativo type="file"
  onImageSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.imageError = null;
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      this.imageError = 'El archivo debe ser una imagen.';
      input.value = '';
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      this.imageError = 'La imagen no debe superar 3 MB.';
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.uploadedImageBase64 = reader.result as string;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.uploadedImageBase64 = null;
    this.imageError = null;
  }

  saveGallery(): void {
    if (!this.frmGallery.valid) {
      this.frmGallery.markAllAsTouched();
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Complete los campos requeridos.' });
      return;
    }
    if (!this.uploadedImageBase64) {
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Debe subir una imagen.' });
      return;
    }

    this.saving = true;
    const val = this.frmGallery.value;
    const body = { idGallery: val.idGallery, title: val.title, description: val.description ?? '', image: this.uploadedImageBase64 };
    const fn = this.isEditing ? apigalleryupdate : apigalleryinsert;

    this.api.invoke(fn, { body }).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      if (data?.type === 'success') {
        this.messageService.add({ severity: 'success', summary: 'Correcto', detail: data.listMessage?.[0] ?? 'Guardado.' });
        this.dialogVisible = false;
        this.loadGallery();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: data.listMessage?.[0] ?? 'Error al guardar.' });
      }
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error de conexión.' });
    }).finally(() => { this.saving = false; this.cdr.detectChanges(); });
  }

  confirmDelete(event: Event, item: any): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Eliminar la imagen "${item.title}"?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: { label: 'Cancelar', severity: 'secondary', outlined: true },
      acceptButtonProps: { label: 'Sí, eliminar', severity: 'danger' },
      accept: () => {
        this.api.invoke(apigallerydelete, { idGallery: item.idGallery }).then((response: any) => {
          const data = typeof response === 'string' ? JSON.parse(response) : response;
          if (data?.type === 'success') {
            this.listGallery = this.listGallery.filter(g => g.idGallery !== item.idGallery);
            this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Imagen eliminada.' });
            this.cdr.detectChanges();
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar.' });
          }
        }).catch(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error de red.' });
        });
      }
    });
  }
}
