import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Home page
      </main>
      <footer className={styles.footer}>
        <Link href={`/stepper`}>
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Stepper
        </Link>
      </footer>
    </div>
  );
}
