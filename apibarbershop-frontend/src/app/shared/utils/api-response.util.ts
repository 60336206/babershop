/**
 * Normaliza la respuesta del API: algunos endpoints devuelven el JSON ya
 * parseado y otros lo devuelven como string. Centraliza el patrón
 * `typeof response === 'string' ? JSON.parse(response) : response`
 * que se repetía en customers.ts, users.ts y services.ts.
 */
export function parseApiResponse<T = any>(response: any): T {
  return typeof response === 'string' ? JSON.parse(response) : response;
}

/** true si la respuesta del API indica éxito (data.type === 'success'). */
export function isApiSuccess(data: any): boolean {
  return data?.type === 'success';
}

/** Primer mensaje de error del API, con fallback si no viene informado. */
export function apiErrorMessage(data: any, fallback: string): string {
  return data?.listMessage?.[0] ?? fallback;
}
