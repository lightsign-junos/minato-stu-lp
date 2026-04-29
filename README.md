# みなと個別指導塾 — 講師問い合わせ LP

Next.js 14 (App Router) + TypeScript + CSS Modules で構築した講師募集ランディングページです。

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（http://localhost:3000）
npm run dev

# 本番ビルド
npm run build
npm start
```

## ディレクトリ構成

```
minato-lp/
├── app/
│   ├── layout.tsx       # ルートレイアウト・メタデータ
│   ├── page.tsx         # メインページ（各コンポーネントを組み合わせ）
│   └── globals.css      # デザイントークン・グローバルスタイル
├── components/
│   ├── Nav.tsx / .css   # 固定ナビゲーション
│   ├── Hero.tsx / .css  # ファーストビュー
│   ├── Points.tsx       # 働く3つの理由
│   ├── Flow.tsx         # 採用フロー
│   ├── Conditions.tsx   # 募集要項
│   ├── Voices.tsx       # 先輩講師の声
│   ├── ContactForm.tsx  # お問い合わせフォーム（バリデーション付き）
│   ├── FAQ.tsx          # よくある質問（アコーディオン）
│   ├── Footer.tsx       # フッター
│   └── ScrollReveal.tsx # スクロールアニメーション
└── README.md
```

## カスタマイズポイント

| 項目 | ファイル |
|------|---------|
| 塾の住所・電話番号 | `components/Footer.tsx` |
| 時給・勤務条件 | `components/Conditions.tsx` |
| 先輩講師のコメント | `components/Voices.tsx` |
| FAQの内容 | `components/FAQ.tsx` |
| カラーテーマ | `app/globals.css` の `:root` 変数 |
| フォームの送信先 | `components/ContactForm.tsx`（現在はダミー） |

## フォームの本番連携

`ContactForm.tsx` の `submit` 関数を編集し、
- **Resend / SendGrid** などのメール送信APIに繋ぐ
- または Next.js の **Route Handler** (`app/api/contact/route.ts`) を作成してサーバー側で処理

```ts
// app/api/contact/route.ts の例
export async function POST(req: Request) {
  const data = await req.json();
  // メール送信処理 ...
  return Response.json({ ok: true });
}
```
