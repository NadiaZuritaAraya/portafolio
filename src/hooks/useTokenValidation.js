import { useState, useEffect } from 'react';
import { validateToken, logPortfolioView } from '../services/firebaseService';
import { getTokenFromUrl } from '../utils/tokenUtils';

const SESSION_KEY = 'portfolio_access';

export function useTokenValidation() {
  const [state, setState] = useState({
    checking: true,
    granted:  false,
    email:    null,
    error:    null,
  });

  useEffect(() => {
    async function check() {
      const cached = sessionStorage.getItem(SESSION_KEY);
      if (cached) {
        const { email } = JSON.parse(cached);
        setState({ checking: false, granted: true, email, error: null });
        return;
      }

      const token = getTokenFromUrl();

      if (!token) {
        setState({ checking: false, granted: false, email: null, error: 'No se encontró un token de acceso.' });
        return;
      }

      try {
        const result = await validateToken(token);

        if (result.valid) {
          sessionStorage.setItem(SESSION_KEY, JSON.stringify({ email: result.email }));
          await logPortfolioView(result.email);
          setState({ checking: false, granted: true, email: result.email, error: null });
        } else {
          setState({ checking: false, granted: false, email: null, error: result.reason });
        }
      } catch (err) {
        console.error('[useTokenValidation]', err);
        setState({ checking: false, granted: false, email: null, error: 'Error al validar el acceso.' });
      }
    }

    check();
  }, []);

  return state;
}
