import { HeroSection }  from '../components/sections/HeroSection';
import { StackSection } from '../components/sections/StackSection';
import styles from './LandingPage.module.css';

export function LandingPage() {
  return (
    <main className={styles.page}>
      <HeroSection />

      <div className={styles.divider} />
      <StackSection />
    </main>
  );
}
