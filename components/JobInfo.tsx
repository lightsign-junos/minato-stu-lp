import { FaYenSign, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./JobInfo.module.css";

const items = [
  {
    title: "給与",
    icon: <FaYenSign color="#1a2f5e" size={22} />,
    lines: ["1コマ80分", "1,800円〜2,100円"],
  },
  {
    title: "シフト",
    icon: <FaCalendarAlt color="#1a2f5e" size={22} />,
    lines: [
      "平日のみOK",
      "夜（18時）からの勤務歓迎",
      "副業可",
      "週1日からOK",
    ],
  },
  {
    title: "勤務地",
    icon: <FaMapMarkerAlt color="#1a2f5e" size={22} />,
    lines: [
      "方南町教室：東京都杉並区",
      "中河原教室：東京都府中市",
    ],
  },
];

export default function JobInfo() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>募集要項</h2>
      <div className={styles.cards}>
        {items.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.cardTitle}>{item.title}</span>
            </div>
            <ul className={styles.list}>
              {item.lines.map((line) => (
                <li key={line} className={styles.listItem}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
