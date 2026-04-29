import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Image
          src="/minato-logo.png"
          alt="みなと個別指導塾"
          width={120}
          height={72}
          priority
        />
        <a
          href="https://minato-kobetsu.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.siteLink}
        >
          公式サイト
        </a>
      </div>
    </header>
  );
}
