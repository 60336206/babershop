import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Api } from '../../api/api';
import { apiusergetall } from '../../api/functions';

// API fn inline (mismos patrones que apicustomerinsert del proyecto)
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../api/strict-http-response';
import { RequestBuilder } from '../../api/request-builder';

function apiuserinsert(http: HttpClient, rootUrl: string, params: { body: any }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, '/user/insert', 'post');
  rb.body(params.body, 'application/json');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apiuserupdate(http: HttpClient, rootUrl: string, params: { body: any }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, '/user/update', 'put');
  rb.body(params.body, 'application/json');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

function apiuserdelete(http: HttpClient, rootUrl: string, params: { idUser: string }, context?: HttpContext): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, `/user/delete/${params.idUser}`, 'delete');
  return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => r as StrictHttpResponse<any>)
  );
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    SelectModule,
    TagModule,
    ToolbarModule,
    TooltipModule,
    AvatarModule
  ],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {
  private readonly api               = inject(Api);
  private readonly formBuilder       = inject(FormBuilder);
  private readonly messageService    = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly cdr               = inject(ChangeDetectorRef);

  listUser: any[] = [];
  loading = false;

  dialogVisible = false;
  isEditing = false;
  savingUser = false;

  searchValue = '';

  frmUser: FormGroup;

  roleOptions = [
    { label: 'Administrador', value: 'ADMIN' },
    { label: 'Barbero',       value: 'BARBER' }
  ];

  statusOptions = [
    { label: 'Activo', value: 1 },
    { label: 'Inactivo', value: 0 }
  ];

  get firstNameFb() { return this.frmUser.controls['firstName']; }
  get surNameFb()   { return this.frmUser.controls['surName']; }
  get emailFb()     { return this.frmUser.controls['email']; }
  get phoneFb()     { return this.frmUser.controls['phone']; }
  get passwordFb()  { return this.frmUser.controls['password']; }
  get roleFb()      { return this.frmUser.controls['role']; }

  constructor() {
    this.frmUser = this.formBuilder.group({
      idUser:    [''],
      firstName: ['', [Validators.required]],
      surName:   ['', [Validators.required]],
      email:     ['', [Validators.required, Validators.email]],
      phone:     ['', [Validators.required, Validators.pattern('^[0-9+]*$'), Validators.minLength(7)]],
      password:  ['', [Validators.minLength(6)]],
      role:      ['', [Validators.required]],
      status:    [1]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.loading = true;
    this.api.invoke(apiusergetall).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      this.listUser = data?.listUser ?? [];
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar el listado de usuarios.' });
    });
  }

  openNew(): void {
    this.isEditing = false;
    this.frmUser.reset();
    this.passwordFb.setValidators([Validators.required, Validators.minLength(6)]);
    this.passwordFb.updateValueAndValidity();
    this.dialogVisible = true;
  }

  openEdit(user: any): void {
    this.isEditing = true;
    this.frmUser.patchValue({
      idUser:    user.idUser,
      firstName: user.firstName,
      surName:   user.surName,
      email:     user.email,
      phone:     user.phone,
      role:      user.role,
      password:  '',
      status:    user.status
    });
    this.passwordFb.clearValidators();
    this.passwordFb.updateValueAndValidity();
    this.dialogVisible = true;
  }

  saveUser(): void {
    if (!this.frmUser.valid) {
      this.frmUser.markAllAsTouched();
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Complete todos los campos correctamente.' });
      return;
    }

    this.savingUser = true;

    if (this.isEditing) {
      const body = {
        idUser:    this.frmUser.value.idUser,
        firstName: this.frmUser.value.firstName,
        surName:   this.frmUser.value.surName,
        email:     this.frmUser.value.email,
        role:      this.frmUser.value.role,
        photo:     '',
        status:    this.frmUser.value.status
      };

      this.api.invoke(apiuserupdate, { body }).then((response: any) => {
        const data = typeof response === 'string' ? JSON.parse(response) : response;
        if (data?.type === 'success') {
          this.messageService.add({ severity: 'success', summary: 'Correcto', detail: data.listMessage?.[0] ?? 'Usuario actualizado.' });
          this.dialogVisible = false;
          this.loadUsers();
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: data.listMessage?.[0] ?? 'No se pudo actualizar.' });
        }
      }).catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al actualizar el usuario.' });
      }).finally(() => {
        this.savingUser = false;
        this.cdr.detectChanges();
      });

    } else {
      const body = {
        firstName: this.frmUser.value.firstName,
        surName:   this.frmUser.value.surName,
        email:     this.frmUser.value.email,
        password:  this.frmUser.value.password,
        role:      this.frmUser.value.role,
        photo:     ''
      };

      this.api.invoke(apiuserinsert, { body }).then((response: any) => {
        const data = typeof response === 'string' ? JSON.parse(response) : response;
        if (data?.type === 'success') {
          this.messageService.add({ severity: 'success', summary: 'Correcto', detail: data.listMessage?.[0] ?? 'Usuario registrado.' });
          this.dialogVisible = false;
          this.loadUsers();
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: data.listMessage?.[0] ?? 'No se pudo registrar.' });
        }
      }).catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al registrar el usuario.' });
      }).finally(() => {
        this.savingUser = false;
        this.cdr.detectChanges();
      });
    }
  }

  confirmDelete(event: Event, user: any): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Eliminar al usuario "${user.firstName} ${user.surName}"?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: { label: 'Cancelar', severity: 'secondary', outlined: true },
      acceptButtonProps:  { label: 'Sí, eliminar', severity: 'danger' },
      accept: () => this.deleteUser(user.idUser)
    });
  }

  private deleteUser(idUser: string): void {
    this.api.invoke(apiuserdelete, { idUser }).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      if (data?.type === 'success') {
        this.listUser = this.listUser.filter(u => u.idUser !== idUser);
        this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Usuario eliminado.' });
        this.cdr.detectChanges();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: data.listMessage?.[0] ?? 'No se pudo eliminar.' });
      }
    }).catch(() => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el usuario.' });
    });
  }

  getRoleSeverity(role: string): 'success' | 'info' | 'warn' | 'secondary' {
    switch (role) {
      case 'ADMIN': return 'warn';
      case 'BARBER':       return 'info';
      default:              return 'secondary';
    }
  }

  getStatusSeverity(status: number): 'success' | 'danger' {
    return status === 1 ? 'success' : 'danger';
  }
}