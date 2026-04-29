import styles from "./Voices.module.css";

const voices = [
  {
    emoji: "🎓",
    quote: "初めは緊張していましたが、丁寧に研修してもらえたので安心してスタートできました。生徒が「わかった！」と言ってくれた瞬間が一番うれしいです。",
    name: "Aさん（大学2年生）",
    role: "担当：中学数学・英語",
  },
  {
    emoji: "📖",
    quote: "シフト調整が柔軟で、就活の時期もしっかり休みを取れました。先生方の雰囲気がよく、働きやすい職場です。",
    name: "Bさん（大学3年生）",
    role: "担当：高校英語・現代文",
  },
  {
    emoji: "✏️",
    quote: "卒業後も非常勤として続けています。自分のペースで子どもたちと関われる環境が気に入っています。",
    name: "Cさん（元大学院生・社会人）",
    role: "担当：中学〜高校理系",
  },
];

export default function Voices() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="reveal">
          <div className={styles.label}>Voice</div>
          <h2 className={styles.title}>先輩講師の声</h2>
        </div>
        <div className={`${styles.grid} reveal`}>
          {voices.map((v, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.quote}>「{v.quote}」</p>
              <div className={styles.person}>
                <div className={styles.avatar}>{v.emoji}</div>
                <div>
                  <strong className={styles.name}>{v.name}</strong>
                  <span className={styles.role}>{v.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
