import { TOKEN_TTL_HOURS } from '../constants';

/**
 * Genera un UUID v4 para usar como token de acceso.
 * En la Cloud Function se usa crypto.randomUUID() (Node 19+).
 */
export function generateToken() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

/**
 * Retorna el timestamp de expiración (Date) a partir de ahora.
 */
export function getExpireAt(hours = TOKEN_TTL_HOURS) {
  const d = new Date();
  d.setHours(d.getHours() + hours);
  return d;
}

/**
 * Valida formato de email básico en el cliente.
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Construye la URL de acceso completa con el token.
 */
export function buildAccessUrl(token) {
  const base = import.meta.env.VITE_APP_URL ?? window.location.origin;
  return `${base}/access?token=${token}`;
}

/**
 * Lee el token desde los query params de la URL actual.
 */
export function getTokenFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('token') ?? null;
}
