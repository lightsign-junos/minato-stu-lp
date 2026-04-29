import styles from "./Flow.module.css";

const steps = [
  { n: "1", title: "フォーム送信", desc: "このページ下部のフォームより、お気軽にお問い合わせください。" },
  { n: "2", title: "面接・見学",  desc: "塾長との面接と授業見学を行います。30〜60分程度です。" },
  { n: "3", title: "研修・準備",  desc: "指導方針・教材の確認、模擬授業など丁寧に研修します。" },
  { n: "4", title: "授業スタート", desc: "担当生徒が決まり次第、いよいよ授業開始です！" },
];

export default function Flow() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Application Flow</div>
          <h2 className="section-title">採用までの流れ</h2>
          <p className="section-lead">お問い合わせから最短2週間で勤務開始できます。</p>
        </div>
        <div className={`${styles.steps} reveal`}>
          {steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.num}>{s.n}</div>
              <div className={styles.title}>{s.title}</div>
              <div className={styles.desc}>{s.desc}</div>
              {i < steps.length - 1 && <span className={styles.arrow}>→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
