/**
 * firebaseService.js
 * Llama a las Vercel API Routes en lugar de Firestore directamente.
 * El admin SDK con permisos de escritura vive solo en el servidor (api/).
 */

/**
 * Solicita acceso enviando el email a la API Route.
 */
export async function createAccessRequest(email) {
  const res = await fetch('/api/requestAccess', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ email }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error ?? 'Error al solicitar acceso.');
  }

  return data;
}

/**
 * Valida un token llamando a la API Route del servidor.
 * Retorna { valid: true, email } o { valid: false, reason }
 */
export async function validateToken(token) {
  const res = await fetch('/api/validateToken', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ token }),
  });

  const data = await res.json();

  if (!res.ok) {
    return { valid: false, reason: 'Error al validar el acceso.' };
  }

  return data;
}

/**
 * logPortfolioView ya se ejecuta dentro de validateToken en el servidor.
 * Esta función existe como no-op para mantener compatibilidad con el hook.
 */
export async function logPortfolioView(_email) {
  // Manejado en api/validateToken.js
}
