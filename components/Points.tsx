import styles from "./Points.module.css";

const points = [
  {
    num: "01",
    icon: "📚",
    title: "充実した研修で\n未経験でも安心",
    body: "入社前の指導トレーニング、ベテラン講師によるOJT、授業見学制度を完備。初めての方でも丁寧にサポートするので安心してスタートできます。",
  },
  {
    num: "02",
    icon: "⏰",
    title: "柔軟なシフトで\n学業・生活との両立",
    body: "週1コマ（90分）から勤務可能。テスト期間や就活時期は休みの調整も気軽に相談できます。自分のペースで長く続けられる環境です。",
  },
  {
    num: "03",
    icon: "🌱",
    title: "生徒の成長が\nそのままやりがいに",
    body: "担当生徒の成績向上や志望校合格を、一緒に喜べる環境。教育の本質的な喜びを日常の中で実感できる、それがみなと塾の魅力です。",
  },
];

export default function Points() {
  return (
    <section id="points" className={styles.section}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Why Minato</div>
          <h2 className="section-title">みなと塾で働く<br />３つの理由</h2>
          <p className="section-lead">
            アルバイトから正社員まで、すべての講師に公平で充実した環境をご用意しています。
          </p>
        </div>
        <div className={`${styles.grid} reveal`}>
          {points.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.num}>{p.num}</div>
              <div className={styles.icon}>{p.icon}</div>
              <h3 className={styles.title}>
                {p.title.split("\n").map((l, j) => (
                  <span key={j}>{l}<br /></span>
                ))}
              </h3>
              <p className={styles.body}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
