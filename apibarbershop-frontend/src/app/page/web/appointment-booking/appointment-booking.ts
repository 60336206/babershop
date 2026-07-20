import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { CheckboxModule } from 'primeng/checkbox';
import { StepperModule } from 'primeng/stepper';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { MessageService } from 'primeng/api';

import { Api } from '../../../api/api';
import {
  apiservicegetall,
  apiusergetall,
  apicustomerinsert,
  apiappointmentinsert,
  apiappointmentuploadimage,
  ApicustomerinsertParams,
  ApiappointmentinsertParams,
  ApiappointmentuploadimageParams
} from '../../../api/functions';

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../../api/strict-http-response';
import { RequestBuilder } from '../../../api/request-builder';

function apibarberscheduleavailablehours(http: HttpClient, rootUrl: string, params: { idUser: string, date: string }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, `/barberschedule/availablehours/${params.idUser}/${params.date}`, 'get');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

@Component({
  selector: 'app-appointment-booking',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    DatePickerModule,
    CheckboxModule,
    StepperModule,
    CardModule,
    TagModule,
    DividerModule
  ],
  templateUrl: './appointment-booking.html',
  styleUrl: './appointment-booking.css'
})
export class AppointmentBooking implements OnInit {
  private readonly api            = inject(Api);
  private readonly router         = inject(Router);
  private readonly formBuilder    = inject(FormBuilder);
  private readonly messageService = inject(MessageService);
  private readonly cdr            = inject(ChangeDetectorRef);

  // ── Datos del backend ──
  services: any[] = [];
  barbers: any[]  = [];
  loading = true;

  availableHours: string[] = [];
  loadingHours = false;

  // ── Stepper ──
  activeStep = 0;

  // ── Formulario cliente ──
  frmCustomer: FormGroup;
  get firstNameFb() { return this.frmCustomer.controls['firstName']; }
  get surNameFb()   { return this.frmCustomer.controls['surName']; }
  get phoneFb()     { return this.frmCustomer.controls['phone']; }
  get emailFb()     { return this.frmCustomer.controls['email']; }

  // ── Selección de servicios ──
  selectedServices: any[] = [];

  // ── Alternativa: imagen de referencia (cuando el cliente no sabe qué servicio elegir) ──
  referenceImageFile: File | null = null;
  referenceImagePreview: string | null = null;
  referenceImageError = '';
  uploadingImage = false;

  // ── Formulario reserva ──
  frmAppointment: FormGroup;
  get barberFb()      { return this.frmAppointment.controls['barber']; }
  get dateFb()        { return this.frmAppointment.controls['date']; }
  get startHourFb()   { return this.frmAppointment.controls['startHour']; }
  get observationFb() { return this.frmAppointment.controls['observation']; }

  minDate = new Date();

  // ── Resultado ──
  sendingCustomer    = false;
  sendingAppointment = false;
  createdCustomerId  = '';
  bookingSuccess     = false;

  constructor() {
    this.frmCustomer = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      surName:   ['', [Validators.required]],
      phone:     ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
      email:     ['', [Validators.email]]
    });

    this.frmAppointment = this.formBuilder.group({
      barber:      ['', [Validators.required]],
      date:        ['', [Validators.required]],
      startHour:   ['', [Validators.required]],
      observation: ['']
    });

    this.barberFb.valueChanges.subscribe(() => this.fetchAvailableHours());
    this.dateFb.valueChanges.subscribe(() => this.fetchAvailableHours());
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    Promise.all([
      this.api.invoke(apiservicegetall),
      this.api.invoke(apiusergetall)
    ]).then(([services, users]) => {
      const parse = (r: any) => (typeof r === 'string' ? JSON.parse(r) : r);
      this.services = (parse(services)?.listService ?? []).filter((x: any) => x.status === 1);
      this.barbers  = (parse(users)?.listUser ?? []).filter((x: any) => x.role === 'BARBER' && x.status === 1);
      this.loading  = false;
      this.cdr.detectChanges();
    }).catch(() => { this.loading = false; });
  }

  // ── Paso 1: Datos del cliente ──
  goToStep2(): void {
    if (!this.frmCustomer.valid) {
      this.frmCustomer.markAllAsTouched();
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Complete sus datos correctamente.' });
      return;
    }
    this.activeStep = 1;
  }

  // ── Paso 2: Selección de servicios ──
  toggleService(service: any): void {
    if (this.referenceImageFile) return; // mutuamente excluyente con la imagen de referencia

    const idx = this.selectedServices.findIndex(s => s.idService === service.idService);
    if (idx >= 0) {
      this.selectedServices.splice(idx, 1);
    } else {
      this.selectedServices.push(service);
    }
  }

  isServiceSelected(service: any): boolean {
    return this.selectedServices.some(s => s.idService === service.idService);
  }

  get totalPrice(): number {
    return this.selectedServices.reduce((sum, s) => sum + Number(s.price), 0);
  }

  get totalMinutes(): number {
    return this.selectedServices.reduce((sum, s) => sum + Number(s.durationMinutes), 0);
  }

  get hasReferenceImage(): boolean {
    return !!this.referenceImageFile;
  }

  // ── Imagen de referencia ──
  onReferenceImageSelected(event: Event): void {
    if (this.selectedServices.length > 0) return; // mutuamente excluyente con servicios seleccionados

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.referenceImageError = '';

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      this.referenceImageError = 'Solo se permiten imágenes (jpg, png, webp, gif).';
      input.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.referenceImageError = 'La imagen no debe superar los 5MB.';
      input.value = '';
      return;
    }

    this.referenceImageFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.referenceImagePreview = reader.result as string;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);

    input.value = '';
  }

  removeReferenceImage(): void {
    this.referenceImageFile = null;
    this.referenceImagePreview = null;
    this.referenceImageError = '';
  }

  goToStep3(): void {
    if (this.selectedServices.length === 0 && !this.referenceImageFile) {
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Seleccione al menos un servicio o adjunte una imagen de referencia.' });
      return;
    }
    this.activeStep = 2;
  }

  // ── Paso 3: Barbero, fecha, hora ──
  private formatDate(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  fetchAvailableHours(): void {
    const barber = this.barberFb.value;
    const date = this.dateFb.value;

    this.availableHours = [];
    this.startHourFb.setValue('');

    if (!barber?.idUser || !date) return;

    this.loadingHours = true;
    const dateStr = this.formatDate(date);

    this.api.invoke(apibarberscheduleavailablehours, { idUser: barber.idUser, date: dateStr }).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      if (data?.type === 'success') {
        this.availableHours = data.listAvailableHours || [];
      } else {
        this.availableHours = [];
      }
    }).catch(() => {
      this.availableHours = [];
    }).finally(() => {
      this.loadingHours = false;
      this.cdr.detectChanges();
    });
  }

  private calcEndHour(startHour: string, minutes: number): string {
    const [h, m] = startHour.split(':').map(Number);
    const total  = h * 60 + m + minutes;
    return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  }

  sendBooking(): void {
    if (!this.frmAppointment.valid) {
      this.frmAppointment.markAllAsTouched();
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Complete todos los datos de la reserva.' });
      return;
    }

    this.sendingCustomer = true;

    // 1. Crear cliente
    const customerParams: ApicustomerinsertParams = {
      body: {
        firstName: this.firstNameFb.value,
        surName:   this.surNameFb.value,
        phone:     this.phoneFb.value,
        email:     this.emailFb.value ?? ''
      }
    };

    this.api.invoke(apicustomerinsert, customerParams).then((customerRes: any) => {
      const cr = typeof customerRes === 'string' ? JSON.parse(customerRes) : customerRes;

      if (cr.type !== 'success' || !cr.idCustomer) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: cr.listMessage?.[0] ?? 'No se pudo registrar el cliente.' });
        this.sendingCustomer = false;
        return;
      }

      this.createdCustomerId   = cr.idCustomer;
      this.sendingCustomer     = false;
      this.sendingAppointment  = true;

      const startHour       = this.startHourFb.value + ':00';
      const estimatedMinutes = this.totalMinutes > 0 ? this.totalMinutes : 30; // duración estimada cuando solo se envía imagen de referencia
      const endHour   = this.calcEndHour(this.startHourFb.value, estimatedMinutes) + ':00';
      const dateStr   = this.formatDate(this.dateFb.value);

      const observationText = this.hasReferenceImage && this.selectedServices.length === 0
        ? `[Servicio a definir según imagen de referencia] ${this.observationFb.value ?? ''}`.trim()
        : (this.observationFb.value ?? '');

      // 2. Crear reserva
      const appointmentParams: ApiappointmentinsertParams = {
        body: {
          idCustomer:      this.createdCustomerId,
          idUser:          this.barberFb.value.idUser,
          appointmentDate: dateStr,
          startHour:       startHour,
          endHour:         endHour,
          total:           this.totalPrice,
          observation:     observationText,
          details:         this.selectedServices.map(s => ({ idService: s.idService, price: Number(s.price) }))
        }
      };

      this.api.invoke(apiappointmentinsert, appointmentParams).then((aptRes: any) => {
        const ar = typeof aptRes === 'string' ? JSON.parse(aptRes) : aptRes;

        if (ar.type !== 'success') {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: ar.listMessage?.[0] ?? 'No se pudo crear la reserva.' });
          this.sendingAppointment = false;
          this.cdr.detectChanges();
          return;
        }

        // 3. Si el cliente adjuntó una imagen de referencia, subirla asociada a la reserva creada
        if (this.referenceImageFile && ar.idAppointment) {
          this.uploadingImage = true;
          const uploadParams: ApiappointmentuploadimageParams = {
            idAppointment: ar.idAppointment,
            body: { file: this.referenceImageFile }
          };
          this.api.invoke(apiappointmentuploadimage, uploadParams)
            .then(() => { this.uploadingImage = false; })
            .catch(() => {
              this.uploadingImage = false;
              this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'La reserva se creó, pero no se pudo subir la imagen de referencia.' });
            })
            .finally(() => {
              this.bookingSuccess     = true;
              this.activeStep         = 3;
              this.sendingAppointment = false;
              this.cdr.detectChanges();
            });
        } else {
          this.bookingSuccess     = true;
          this.activeStep         = 3;
          this.sendingAppointment = false;
          this.cdr.detectChanges();
        }
      }).catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al crear la reserva.' });
        this.sendingAppointment = false;
      });

    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al registrar el cliente.' });
      this.sendingCustomer = false;
    });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}