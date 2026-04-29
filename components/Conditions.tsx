import styles from "./Conditions.module.css";

const welcome = [
  "大学生・大学院生（学部・専攻不問）",
  "子どもと関わることが好きな方",
  "週1〜2コマから始めたい方",
  "教員・教育系の仕事を目指している方",
  "指導経験のある社会人・元教員の方",
];

const info = [
  "時給：1,500円〜（経験・実績により応相談）",
  "シフト：週1コマ（90分）から可、平日夕方・土曜",
  "場所：みなと個別指導塾（最寄駅より徒歩5分）",
  "交通費：実費支給（上限あり）",
  "担当科目：得意科目・希望科目を考慮して決定",
];

export default function Conditions() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Conditions</div>
          <h2 className="section-title">募集要項</h2>
        </div>
        <div className={`${styles.grid} reveal`}>
          <div className={`${styles.box} ${styles.accent}`}>
            <div className={styles.boxLabel}>WELCOME — こんな方を歓迎します</div>
            <ul className={styles.list}>
              {welcome.map((item, i) => (
                <li key={i} className={styles.item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.box}>
            <div className={styles.boxLabel}>INFO — 勤務条件</div>
            <ul className={styles.list}>
              {info.map((item, i) => (
                <li key={i} className={styles.item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
