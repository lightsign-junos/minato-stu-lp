"use client";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        みなと<span>個別指導塾</span>
      </div>
      <Link href="#contact" className={styles.cta}>
        無料で問い合わせる
      </Link>
    </nav>
  );
}
