import { useState } from 'react';
import { createAccessRequest } from '../services/firebaseService';
import { isValidEmail } from '../utils/tokenUtils';

const STATUS = {
  idle:    'idle',
  loading: 'loading',
  success: 'success',
  error:   'error',
};

export function useAccessRequest() {
  const [status,  setStatus]  = useState(STATUS.idle);
  const [message, setMessage] = useState('');

  async function requestAccess(email) {
    const trimmed = email.trim();

    if (!isValidEmail(trimmed)) {
      setStatus(STATUS.error);
      setMessage('Por favor ingresa un email válido.');
      return;
    }

    setStatus(STATUS.loading);
    setMessage('');

    try {
      await createAccessRequest(trimmed);
      setStatus(STATUS.success);
      setMessage('✓ Solicitud enviada. Recibirás tu link de acceso en los próximos minutos.');
    } catch (err) {
      console.error('[useAccessRequest]', err);
      setStatus(STATUS.error);
      setMessage('Ocurrió un error. Intenta nuevamente en unos segundos.');
    }
  }

  function reset() {
    setStatus(STATUS.idle);
    setMessage('');
  }

  return {
    requestAccess,
    reset,
    isLoading: status === STATUS.loading,
    isSuccess: status === STATUS.success,
    isError:   status === STATUS.error,
    message,
  };
}
