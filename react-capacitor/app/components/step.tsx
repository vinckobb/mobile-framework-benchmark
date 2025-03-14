'use client'
import Lottie from 'lottie-react';

import styles from "../page.module.css";

export function Step({animationData, children}: {animationData: unknown, children: React.ReactNode}) {
  return (
    <div>
        <Lottie animationData={animationData} loop={true} />
        <div className={styles.textcenter}>
            {children}
        </div>
    </div>
  );
}