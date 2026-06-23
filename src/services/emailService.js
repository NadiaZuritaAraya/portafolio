/**
 * emailService.js
 * En producción el email lo despacha la Cloud Function requestAccess.
 * Este módulo existe por si necesitas llamar desde el cliente
 * (e.g. EmailJS como fallback sin backend propio).
 */

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Envía el email de acceso vía EmailJS (fallback cliente).
 * Normalmente esta lógica vive en la Cloud Function.
 */
export async function sendAccessEmail({ toEmail, accessUrl }) {
  const emailjs = await import('@emailjs/browser');

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      to_email:   toEmail,
      access_url: accessUrl,
      valid_hours: 24,
    },
    EMAILJS_PUBLIC_KEY,
  );
}
