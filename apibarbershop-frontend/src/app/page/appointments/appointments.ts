import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import { ConfirmationService, MessageService } from 'primeng/api';


import { Api } from '../../api/api';
import { apiappointmentgetall, apiappointmentgetfiles } from '../../api/functions';
import { environment } from '../../environments/environments';

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../api/strict-http-response';
import { RequestBuilder } from '../../api/request-builder';
import { AuthService } from '../../observable/auth/auth.service';

function apiappointmentgetbybarber(http: HttpClient, rootUrl: string, params: { idUser: string }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, `/appointment/getbybarber/${params.idUser}`, 'get');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apiappointmentupdate(http: HttpClient, rootUrl: string, params: { body: any }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, '/appointment/update', 'put');
  rb.body(params.body, 'application/json');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apiappointmentdelete(http: HttpClient, rootUrl: string, params: { idAppointment: string }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, `/appointment/delete/${params.idAppointment}`, 'delete');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [
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
  ],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css'
})
export class Appointments implements OnInit {
  private readonly api                 = inject(Api);
  private readonly formBuilder         = inject(FormBuilder);
  private readonly messageService      = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly cdr                 = inject(ChangeDetectorRef);
  private readonly authService         = inject(AuthService);

  user = this.authService.getUser();

  listAppointment: any[] = [];
  loading = false;

  // Detail dialog
  detailVisible = false;
  selectedAppointment: any = null;
  selectedAppointmentFiles: any[] = [];
  loadingFiles = false;

  // Edit dialog
  editVisible = false;
  saving = false;
  frmEdit: FormGroup;

  statusOptions = [
    { label: 'Pendiente',   value: 'Pendiente' },
    { label: 'Confirmada',  value: 'Confirmada' },
    { label: 'Cancelada',   value: 'Cancelada' },
    { label: 'Finalizada',  value: 'Finalizada' }
  ];

  get statusFb()      { return this.frmEdit.controls['status']; }
  get observationFb() { return this.frmEdit.controls['observation']; }

  constructor() {
    this.frmEdit = this.formBuilder.group({
      idAppointment:   [''],
      appointmentDate: [''],
      startHour:       [''],
      endHour:         [''],
      status:          ['', [Validators.required]],
      observation:     ['']
    });
  }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.loading = true;
    
    let requestPromise;
    if (this.user?.role === 'BARBER') {
      requestPromise = this.api.invoke(apiappointmentgetbybarber, { idUser: this.user.idUser });
    } else {
      requestPromise = this.api.invoke(apiappointmentgetall);
    }

    requestPromise.then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      this.listAppointment = (data?.listAppointment ?? []).sort((a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar las reservas.' });
    });
  }

  openDetail(appointment: any): void {
    this.selectedAppointment = appointment;
    this.selectedAppointmentFiles = [];
    this.detailVisible = true;

    this.loadingFiles = true;
    this.api.invoke(apiappointmentgetfiles, { idAppointment: appointment.idAppointment }).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      this.selectedAppointmentFiles = data?.listFile ?? [];
      this.loadingFiles = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loadingFiles = false;
    });
  }

  getFileUrl(file: any): string {
    return `${environment.urlBase}/uploads/appointments/${file.fileName}`;
  }

  hasReferenceNote(appointment: any): boolean {
    return !!appointment.observation && appointment.observation.includes('imagen de referencia');
  }

  openEdit(appointment: any): void {
    this.frmEdit.patchValue({
      idAppointment:   appointment.idAppointment,
      appointmentDate: appointment.appointmentDate,
      startHour:       appointment.startHour,
      endHour:         appointment.endHour,
      status:          appointment.status,
      observation:     appointment.observation ?? ''
    });
    this.editVisible = true;
  }

  saveEdit(): void {
    if (!this.frmEdit.valid) {
      this.frmEdit.markAllAsTouched();
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Seleccione un estado.' });
      return;
    }

    this.saving = true;
    const v = this.frmEdit.value;

    this.api.invoke(apiappointmentupdate, {
      body: {
        idAppointment:   v.idAppointment,
        appointmentDate: v.appointmentDate,
        startHour:       v.startHour,
        endHour:         v.endHour,
        status:          v.status,
        observation:     v.observation ?? ''
      }
    }).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      if (data?.type === 'success') {
        this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Reserva actualizada.' });
        this.editVisible = false;
        this.loadAppointments();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: data.listMessage?.[0] ?? 'Error al actualizar.' });
      }
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error de conexión.' });
    }).finally(() => { this.saving = false; this.cdr.detectChanges(); });
  }

  quickStatus(appointment: any, newStatus: string): void {
    this.api.invoke(apiappointmentupdate, {
      body: {
        idAppointment:   appointment.idAppointment,
        appointmentDate: appointment.appointmentDate,
        startHour:       appointment.startHour,
        endHour:         appointment.endHour,
        status:          newStatus,
        observation:     appointment.observation ?? ''
      }
    }).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      if (data?.type === 'success') {
        const idx = this.listAppointment.findIndex(a => a.idAppointment === appointment.idAppointment);
        if (idx !== -1) {
          this.listAppointment[idx] = { ...this.listAppointment[idx], status: newStatus };
          this.listAppointment = [...this.listAppointment];
        }
        this.messageService.add({ severity: 'success', summary: 'Correcto', detail: `Reserva marcada como ${newStatus}.` });
        this.cdr.detectChanges();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar el estado.' });
      }
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error de conexión.' });
    });
  }

  confirmDelete(event: Event, appointment: any): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Esta acción eliminará permanentemente la reserva. ¿Continuar?',
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: { label: 'Cancelar', severity: 'secondary', outlined: true },
      acceptButtonProps:  { label: 'Sí, eliminar', severity: 'danger' },
      accept: () => {
        this.api.invoke(apiappointmentdelete, { idAppointment: appointment.idAppointment }).then((response: any) => {
          const data = typeof response === 'string' ? JSON.parse(response) : response;
          if (data?.type === 'success') {
            this.listAppointment = this.listAppointment.filter(a => a.idAppointment !== appointment.idAppointment);
            this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Reserva eliminada.' });
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

  getStatusSeverity(status: string): 'success' | 'warn' | 'danger' | 'info' | 'secondary' {
    switch (status) {
      case 'Confirmada':  return 'success';
      case 'Pendiente':   return 'warn';
      case 'Cancelada':   return 'danger';
      case 'Finalizada':  return 'info';
      default:            return 'secondary';
    }
  }
}