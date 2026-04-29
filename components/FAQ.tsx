"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "教員免許や指導経験がなくても応募できますか？",
    a: "はい、免許・経験は不問です。入塾前後に研修制度を設けており、未経験の方も多数在籍しています。「子どもが好き」「一緒に学びたい」という気持ちがあれば大歓迎です。",
  },
  {
    q: "週に何コマから働けますか？",
    a: "週1コマ（90分）からスタートできます。慣れてきたら徐々に増やすことも可能です。テスト期間・就活・体調などによる一時的なシフト減少も気軽にご相談ください。",
  },
  {
    q: "どの科目を担当するか、自分で選べますか？",
    a: "面接時に得意科目や希望をお聞きし、できる限りご要望に沿った担当科目を割り当てます。ただし、塾の状況によってご希望に添えない場合もあります。",
  },
  {
    q: "応募後、いつから働き始められますか？",
    a: "お問い合わせから面接・研修を経て、最短2週間程度で授業スタートが可能です。ご都合に合わせて調整しますので、お気軽にご相談ください。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">よくあるご質問</h2>
        </div>
        <div className={`${styles.list} reveal`}>
          {faqs.map((f, i) => (
            <div key={i} className={styles.item}>
              <button
                className={styles.q}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={styles.qIcon}>Q</span>
                <span className={styles.qText}>{f.q}</span>
                <span className={`${styles.toggle} ${open === i ? styles.toggleOpen : ""}`}>＋</span>
              </button>
              <div className={`${styles.a} ${open === i ? styles.aOpen : ""}`}>
                <div className={styles.aInner}>{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
