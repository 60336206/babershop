import { MessageService } from 'primeng/api';

/**
 * Helpers para mostrar mensajes con el MessageService de PrimeNG.
 * Centraliza el patrón `messageService.add({ severity, summary, detail })`
 * que se repetía en customers.ts, users.ts y otras páginas CRUD.
 */
export function notifySuccess(messageService: MessageService, detail: string): void {
  messageService.add({ severity: 'success', summary: 'Correcto', detail });
}

export function notifyError(messageService: MessageService, detail: string): void {
  messageService.add({ severity: 'error', summary: 'Error', detail });
}

export function notifyWarn(messageService: MessageService, detail: string): void {
  messageService.add({ severity: 'warn', summary: 'Atención', detail });
}
