import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';

import { Api } from '../../api/api';
import { apicustomergetall, apicustomerinsert, ApicustomerinsertParams, apicustomerupdate, apicustomerdelete } from '../../api/functions';

import { noWhitespaceValidator } from '../../shared/validators/no-whitespace.validator';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    TagModule,
    ToolbarModule,
    TooltipModule,
    SelectModule
  ],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers implements OnInit {
  private readonly api                 = inject(Api);
  private readonly formBuilder         = inject(FormBuilder);
  private readonly messageService      = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly cdr                 = inject(ChangeDetectorRef);

  listCustomer: any[] = [];
  loading = false;

  statusOptions = [
    { label: 'Activo', value: 1 },
    { label: 'Inactivo', value: 0 }
  ];

  dialogVisible = false;
  isEditing = false;
  saving = false;

  searchValue = '';

  frmCustomer: FormGroup;

  get firstNameFb() { return this.frmCustomer.controls['firstName']; }
  get surNameFb()   { return this.frmCustomer.controls['surName']; }
  get phoneFb()     { return this.frmCustomer.controls['phone']; }
  get emailFb()     { return this.frmCustomer.controls['email']; }

  constructor() {
    this.frmCustomer = this.formBuilder.group({
      idCustomer: [''],
      firstName:  ['', [Validators.required, noWhitespaceValidator]],
      surName:    ['', [Validators.required, noWhitespaceValidator]],
      phone:      ['', [Validators.required, Validators.pattern(/^\d{9}$/), noWhitespaceValidator]],
      email:      ['', [Validators.email, noWhitespaceValidator]],
      status:     [1]
    });
  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  private loadCustomers(): void {
    this.loading = true;
    this.api.invoke(apicustomergetall).then((response: any) => {
      const data = typeof response === 'string' ? JSON.parse(response) : response;
      this.listCustomer = data?.listCustomer ?? [];
      this.loading = false;
      this.cdr.detectChanges();
    }).catch(() => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar el listado de clientes.' });
    });
  }

  toggleStatus(customer: any): void {
    const newStatus = customer.status === 1 ? 0 : 1;
    const body = {
      idCustomer: customer.idCustomer,
      firstName: customer.firstName,
      surName: customer.surName,
      phone: customer.phone,
      email: customer.email,
      status: newStatus
    };
    
    this.api.invoke(apicustomerupdate as any, { body }).then((res: any) => {
      const data = typeof res === 'string' ? JSON.parse(res) : res;
      if (data?.type === 'success') {
        customer.status = newStatus;
        this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Estado actualizado.' });
        this.cdr.detectChanges();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar el estado.' });
      }
    });
  }

  hideDialog(): void {
    this.isEditing = false;
    this.frmCustomer.reset();
    this.dialogVisible = true;
  }

  openNew(): void {
    this.isEditing = false;
    this.frmCustomer.reset();
    this.dialogVisible = true;
  }

  openEdit(customer: any): void {
    this.isEditing = true;
    this.frmCustomer.patchValue(customer);
    this.dialogVisible = true;
  }

  saveCustomer(): void {
    if (!this.frmCustomer.valid) {
      this.frmCustomer.markAllAsTouched();
      this.messageService.add({ severity: 'warn', summary: 'Atención', detail: 'Complete todos los campos correctamente.' });
      return;
    }

    this.saving = true;

    if (this.isEditing) {
      const body = {
        idCustomer: this.frmCustomer.value.idCustomer,
        firstName:  this.frmCustomer.value.firstName,
        surName:    this.frmCustomer.value.surName,
        phone:      this.frmCustomer.value.phone,
        email:      this.frmCustomer.value.email ?? '',
        status:     this.frmCustomer.value.status
      };

      this.api.invoke(apicustomerupdate, { body }).then((response: any) => {
        const data = typeof response === 'string' ? JSON.parse(response) : response;
        if (data?.type === 'success') {
          this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Cliente actualizado.' });
          this.dialogVisible = false;
          this.loadCustomers();
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: data.listMessage?.[0] ?? 'Error al actualizar.' });
        }
      }).catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al actualizar el cliente.' });
      }).finally(() => { this.saving = false; this.cdr.detectChanges(); });

    } else {
      const params: ApicustomerinsertParams = {
        body: {
          firstName: this.frmCustomer.value.firstName,
          surName:   this.frmCustomer.value.surName,
          phone:     this.frmCustomer.value.phone,
          email:     this.frmCustomer.value.email ?? ''
        }
      };

      this.api.invoke(apicustomerinsert, params).then((response: any) => {
        const data = typeof response === 'string' ? JSON.parse(response) : response;
        if (data?.type === 'success') {
          this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Cliente registrado.' });
          this.dialogVisible = false;
          this.loadCustomers();
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: data.listMessage?.[0] ?? 'Error al registrar.' });
        }
      }).catch(() => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al registrar el cliente.' });
      }).finally(() => { this.saving = false; this.cdr.detectChanges(); });
    }
  }

  confirmDelete(event: Event, customer: any): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Eliminar al cliente "${customer.firstName} ${customer.surName}"?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: { label: 'Cancelar', severity: 'secondary', outlined: true },
      acceptButtonProps:  { label: 'Sí, eliminar', severity: 'danger' },
      accept: () => {
        this.api.invoke(apicustomerdelete, { idCustomer: customer.idCustomer }).then((response: any) => {
          const data = typeof response === 'string' ? JSON.parse(response) : response;
          if (data?.type === 'success') {
            this.listCustomer = this.listCustomer.filter(c => c.idCustomer !== customer.idCustomer);
            this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Cliente eliminado.' });
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