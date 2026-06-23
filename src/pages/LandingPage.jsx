import { HeroSection }  from '../components/sections/HeroSection';
import { StatsSection } from '../components/sections/StatsSection';
import { StackSection } from '../components/sections/StackSection';
import styles from './LandingPage.module.css';

export function LandingPage() {
  return (
    <main className={styles.page}>
      <HeroSection />

      <div className={styles.divider} />
      <StatsSection />

      <div className={styles.divider} />
      <StackSection />
    </main>
  );
}
