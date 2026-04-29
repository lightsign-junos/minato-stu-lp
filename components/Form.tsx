"use client";

import { useState } from "react";
import styles from "./Form.module.css";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbxFlPxW2HeO5EpN4E7lK7bddo4bMRaL_FQXUZsRKDj1EBBpK-YqlPwAr8t5VsC8n5bdbA/exec";

export default function Form() {
  const [classroom, setClassroom] = useState("");
  const [name, setName] = useState("");
  const [kana, setKana] = useState("");
  const [age, setAge] = useState("");
  const [university, setUniversity] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [postalError, setPostalError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handlePostalCode = async (value: string) => {
    const cleaned = value.replace(/[^0-9]/g, "").slice(0, 7);
    setPostalCode(cleaned);
    setPostalError("");

    if (cleaned.length === 7) {
      try {
        const res = await fetch(
          `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleaned}`
        );
        const data = await res.json();
        if (data.results && data.results[0]) {
          const r = data.results[0];
          setAddress(r.address1 + r.address2 + r.address3);
        } else {
          setPostalError("住所が見つかりませんでした");
        }
      } catch {
        setPostalError("住所の取得に失敗しました");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      await fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          classroom,
          name,
          kana,
          age,
          university,
          gender,
          contact,
          zip: postalCode,
          address,
          message,
        }),
      });
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <section id="form" className={styles.section}>
        <div className={styles.successBox}>
          <p className={styles.successText}>
            送信が完了しました。担当者よりご連絡いたします。
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className={styles.section}>
      <h2 className={styles.title}>応募フォーム</h2>
      <form className={styles.form} onSubmit={handleSubmit}>

        {/* 1. 教室 */}
        <div className={styles.field}>
          <label className={styles.label}>
            お問い合わせ教室<span className={styles.required}>必須</span>
          </label>
          <select
            className={styles.select}
            value={classroom}
            onChange={(e) => setClassroom(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="方南町教室">方南町教室</option>
            <option value="中河原教室">中河原教室</option>
          </select>
        </div>

        {/* 2. お名前 */}
        <div className={styles.field}>
          <label className={styles.label}>
            お名前<span className={styles.required}>必須</span>
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="例：山田 太郎"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* 3. お名前（かな） */}
        <div className={styles.field}>
          <label className={styles.label}>
            お名前（かな）<span className={styles.required}>必須</span>
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="例：やまだ たろう"
            value={kana}
            onChange={(e) => setKana(e.target.value)}
          />
        </div>

        {/* 4. 年齢 */}
        <div className={styles.field}>
          <label className={styles.label}>
            年齢<span className={styles.required}>必須</span>
          </label>
          <div className={styles.radios}>
            {["大学生", "社会人", "その他"].map((v) => (
              <label key={v} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="age"
                  value={v}
                  className={styles.radioInput}
                  checked={age === v}
                  onChange={() => setAge(v)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        {/* 5. 大学名 */}
        <div className={styles.field}>
          <label className={styles.label}>大学名</label>
          <input
            type="text"
            className={styles.input}
            placeholder="例：○○大学"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </div>

        {/* 6. 性別 */}
        <div className={styles.field}>
          <label className={styles.label}>
            性別<span className={styles.required}>必須</span>
          </label>
          <div className={styles.radios}>
            {["男性", "女性"].map((v) => (
              <label key={v} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="gender"
                  value={v}
                  className={styles.radioInput}
                  checked={gender === v}
                  onChange={() => setGender(v)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        {/* 7. 連絡先 */}
        <div className={styles.field}>
          <label className={styles.label}>
            連絡先<span className={styles.required}>必須</span>
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="電話番号またはメールアドレス"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        {/* 8. 郵便番号 */}
        <div className={styles.field}>
          <label className={styles.label}>郵便番号</label>
          <div className={styles.postalRow}>
            <input
              type="text"
              className={styles.input}
              placeholder="例：1234567（ハイフンなし）"
              value={postalCode}
              onChange={(e) => handlePostalCode(e.target.value)}
              maxLength={7}
              inputMode="numeric"
            />
          </div>
          {postalError && <p className={styles.error}>{postalError}</p>}
        </div>

        {/* 9. 住所 */}
        <div className={styles.field}>
          <label className={styles.label}>住所</label>
          <input
            type="text"
            className={styles.input}
            placeholder="郵便番号を入力すると自動入力されます"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* 10. ご質問内容 */}
        <div className={styles.field}>
          <label className={styles.label}>ご質問内容</label>
          <textarea
            className={styles.textarea}
            placeholder="ご自由にご記入ください"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {submitStatus === "error" && (
          <p className={styles.error}>
            送信に失敗しました。時間をおいて再度お試しください。
          </p>
        )}

        {/* 送信ボタン */}
        <button type="submit" className={styles.button} disabled={submitting}>
          {submitting ? "送信中..." : "送信する"}
        </button>
      </form>
    </section>
  );
}
