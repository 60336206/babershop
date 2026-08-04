import { ConfirmationService } from 'primeng/api';

/**
 * Centraliza el diálogo de confirmación de eliminación de PrimeNG
 * (mismo header/icon/botones en customers.ts, users.ts y otras páginas CRUD).
 */
export function confirmDelete(
  confirmationService: ConfirmationService,
  event: Event,
  message: string,
  accept: () => void
): void {
  confirmationService.confirm({
    target: event.target as EventTarget,
    message,
    header: 'Confirmar eliminación',
    icon: 'pi pi-exclamation-triangle',
    rejectButtonProps: { label: 'Cancelar', severity: 'secondary', outlined: true },
    acceptButtonProps: { label: 'Sí, eliminar', severity: 'danger' },
    accept
  });
}
