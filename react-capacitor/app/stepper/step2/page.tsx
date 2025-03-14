import {Step} from "../../components/step";

import styles from "../../page.module.css";

import stepAnimation from "../../lottie-files/step-2.json";
import Link from "next/link";

export default function Stepper() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Step animationData={stepAnimation}>
          A quick setup to get you started in no time
        </Step>
      </main>
      <footer className={styles.footer}>
        <Link href='/stepper'>
          <button>Previous</button>
        </Link>
        <div className="flex-row">
          <div className={styles.step}></div>
          <div className={`${styles.step} ${styles.active}`}></div>
          <div className={styles.step}></div>
          <div className={styles.step}></div>
        </div>
        <Link href='/stepper/step3'>
          <button>Next</button>
        </Link>
      </footer>
    </div>
  );
}
