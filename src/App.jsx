import { ROUTES } from './constants';
import { LandingPage }   from './pages/LandingPage';
import { AccessPage }    from './pages/AccessPage';
import { PortfolioPage } from './pages/PortfolioPage';

export default function App() {
  const path = window.location.pathname;

  if (path.startsWith(ROUTES.portfolio)) return <PortfolioPage />;
  if (path.startsWith(ROUTES.access))    return <AccessPage />;
  return <LandingPage />;
}
