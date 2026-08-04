/** Opciones estándar de estado (Activo/Inactivo) usadas en los formularios de Customers, Users y Services. */
export const STATUS_OPTIONS = [
  { label: 'Activo', value: 1 },
  { label: 'Inactivo', value: 0 }
];

/** Severidad de PrimeNG Tag según el estado (1 = success, 0 = danger). */
export function getStatusSeverity(status: number): 'success' | 'danger' {
  return status === 1 ? 'success' : 'danger';
}
