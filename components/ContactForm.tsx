"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: "", kana: "", email: "", tel: "", job: "", subject: "", message: "",
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(false);
  };

  const submit = () => {
    if (!form.name || !form.email) { setError(true); return; }
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Contact</div>
          <h2 className="section-title">講師への応募・<br />お問い合わせ</h2>
          <p className="section-lead">
            まずはお気軽にご連絡ください。内容を確認後、2〜3営業日以内にご連絡いたします。
          </p>
        </div>

        <div className={`${styles.wrap} reveal`}>
          {/* Left panel */}
          <div className={styles.left}>
            <h3 className={styles.leftTitle}>子どもたちと一緒に、<br />成長できる場所。</h3>
            <p className={styles.leftText}>
              みなと個別指導塾は、生徒も講師も大切にする塾です。
              「少し興味がある」という段階でも、ぜひご連絡ください。
              まずは見学から歓迎しています。
            </p>
            <div className={styles.badge}>📩 2〜3営業日以内にご返信</div>
          </div>

          {/* Form */}
          <div className={styles.form}>
            <div className={styles.formTitle}>お問い合わせフォーム</div>

            {submitted ? (
              <div className={styles.thanks}>
                <div className={styles.thanksIcon}>✓</div>
                <p>送信ありがとうございます！<br />担当者より2〜3営業日以内にご連絡いたします。</p>
              </div>
            ) : (
              <>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label className={styles.label}>お名前<span className={styles.req}>必須</span></label>
                    <input name="name" value={form.name} onChange={handle} className={`${styles.input} ${error && !form.name ? styles.inputError : ""}`} placeholder="山田 太郎" />
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label}>フリガナ</label>
                    <input name="kana" value={form.kana} onChange={handle} className={styles.input} placeholder="ヤマダ タロウ" />
                  </div>
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>メールアドレス<span className={styles.req}>必須</span></label>
                  <input name="email" type="email" value={form.email} onChange={handle} className={`${styles.input} ${error && !form.email ? styles.inputError : ""}`} placeholder="example@email.com" />
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>電話番号</label>
                  <input name="tel" type="tel" value={form.tel} onChange={handle} className={styles.input} placeholder="090-0000-0000" />
                </div>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label className={styles.label}>ご職業</label>
                    <select name="job" value={form.job} onChange={handle} className={styles.select}>
                      <option value="">選択してください</option>
                      <option>大学生（学部）</option>
                      <option>大学院生</option>
                      <option>社会人</option>
                      <option>元教員・塾講師経験者</option>
                      <option>その他</option>
                    </select>
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label}>希望担当科目</label>
                    <select name="subject" value={form.subject} onChange={handle} className={styles.select}>
                      <option value="">選択してください</option>
                      <option>数学・理科系</option>
                      <option>英語</option>
                      <option>国語・社会</option>
                      <option>複数科目（相談）</option>
                    </select>
                  </div>
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>メッセージ・ご質問など</label>
                  <textarea name="message" value={form.message} onChange={handle} className={styles.textarea} placeholder="ご自由にご記入ください（指導経験、希望シフトなど）" />
                </div>
                {error && <p className={styles.errMsg}>※ お名前とメールアドレスは必須です</p>}
                <button className={styles.submit} onClick={submit}>送信する →</button>
                <p className={styles.note}>送信後、ご入力いただいたメールアドレスに確認メールが届きます。</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
