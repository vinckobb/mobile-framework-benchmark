import {Step} from "../../components/step";

import styles from "../../page.module.css";

import stepAnimation from "../../lottie-files/step-4.json";
import Link from "next/link";

export default function Stepper() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Step animationData={stepAnimation}>
          You are all set up to use our app. <b>Enjoy</b>! 🎉
        </Step>
      </main>
      <footer className={styles.footer}>
        <Link href='/stepper/step3'>
          <button>Previous</button>
        </Link>
        <div className="flex-row">
          <div className={styles.step}></div>
          <div className={styles.step}></div>
          <div className={styles.step}></div>
          <div className={`${styles.step} ${styles.active}`}></div>
        </div>
        <Link href='/'>
          <button>Finish</button>
        </Link>
      </footer>
    </div>
  );
}
