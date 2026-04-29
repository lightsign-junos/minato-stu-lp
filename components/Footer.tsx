import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>みなと<span>個別指導塾</span></div>
      <div className={styles.info}>
        〒000-0000 ○○県○○市みなと1-2-3<br />
        <span suppressHydrationWarning>TEL: 000-000-0000</span>　<span suppressHydrationWarning>受付時間: 平日 14:00〜21:00</span>
      </div>
      <div className={styles.copy}>© 2025 みなと個別指導塾</div>
    </footer>
  );
}
