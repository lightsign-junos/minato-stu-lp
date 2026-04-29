"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaUserGraduate,
  FaPalette,
  FaStar,
  FaUniversity,
  FaClock,
  FaChalkboardTeacher,
} from "react-icons/fa";
import styles from "./Hero.module.css";

const images = [
  "/classroom/classroom01.png",
  "/classroom/classroom02.png",
  "/classroom/classroom03.png",
  "/classroom/classroom04.png",
  "/classroom/classroom05.png",
  "/classroom/classroom06.png",
];

type Feature = {
  label: string;
  icon: React.ReactNode;
  detail: string;
};

const ICON_COLOR = "#1a2f5e";
const ICON_SIZE = 40;

const features: Feature[] = [
  {
    label: "未経験OK",
    icon: <FaUserGraduate color={ICON_COLOR} size={ICON_SIZE} />,
    detail:
      "講師の経験がなくても大丈夫です。授業の進め方やカリキュラム作成など一からサポートします。",
  },
  {
    label: "ネイル・髪色自由",
    icon: <FaPalette color={ICON_COLOR} size={ICON_SIZE} />,
    detail:
      "おしゃれはそのままでOK。自分らしいスタイルで働けます。服装や見た目に関するルールは最小限です。",
  },
  {
    label: "得意科目だけでOK",
    icon: <FaStar color={ICON_COLOR} size={ICON_SIZE} />,
    detail:
      "すべての科目を教える必要はありません。あなたが得意な科目だけを担当できます。",
  },
  {
    label: "学生歓迎",
    icon: <FaUniversity color={ICON_COLOR} size={ICON_SIZE} />,
    detail:
      "アルバイトデビューも歓迎です。学業との両立ができるよう、シフトは柔軟に対応します。",
  },
  {
    label: "シフト自由",
    icon: <FaClock color={ICON_COLOR} size={ICON_SIZE} />,
    detail:
      "週1日から勤務可能。試験期間や就活など、ライフスタイルに合わせて自由に調整できます。",
  },
  {
    label: "研修あり",
    icon: <FaChalkboardTeacher color={ICON_COLOR} size={ICON_SIZE} />,
    detail:
      "初めての方も安心。先輩講師や室長によるサポート体制で、ゼロから丁寧に教えます。",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Feature | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const handleScroll = () => {
    const el = document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section>
        {/* カルーセル */}
        <div className={styles.carousel}>
          {images.map((src, i) => (
            <div
              key={src}
              className={`${styles.slide} ${i === current ? styles.active : ""}`}
            >
              <Image
                src={src}
                alt={`教室の様子${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
          ))}
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`スライド${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ネイビーセクション */}
        <div className={styles.navy}>
          <h1 className={styles.catchcopy}>一緒に、子どもの未来を育てよう。</h1>
          <div className={styles.cards}>
            {features.map((item) => (
              <button
                key={item.label}
                className={styles.card}
                onClick={() => setSelected(item)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 固定応募ボタン */}
      <div className={styles.fixedBar}>
        <button className={styles.fixedButton} onClick={handleScroll}>
          応募する
        </button>
      </div>

      {/* ポップアップ */}
      {selected && (
        <div className={styles.overlay} onClick={() => setSelected(null)}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalIcon}>{selected.icon}</div>
            <h2 className={styles.modalTitle}>{selected.label}</h2>
            <p className={styles.modalText}>{selected.detail}</p>
            <button
              className={styles.modalClose}
              onClick={() => setSelected(null)}
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </>
  );
}
