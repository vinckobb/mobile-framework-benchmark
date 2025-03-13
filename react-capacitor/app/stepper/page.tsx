import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function Stepper() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Stepper page
      </main>
      <footer className={styles.footer}>
        <Link href={`/`}>
            <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
            />
            Home
        </Link>
      </footer>
    </div>
  );
}
