# Bottle Diary

Bottle Diary は、ユーザーが匿名でメッセージを送信し、他のユーザーからのメッセージを受け取ることができるアプリケーションです。このプロジェクトはそのモックアップです。

## プロジェクト構成

. 
├── .eslintrc.json 
├── .gitignore 
├── .next/ 
├── app/ 
│   ├── account/ 
│   │   └── page.tsx 
│   ├── api/ 
│   │   └── helloNextJs/ 
│   │       └── route.ts 
│   ├── components/ 
│   │   ├── Icons.tsx 
│   │   ├── MessageList.tsx 
│   │   └── NewMessageForm.tsx 
│   ├── dashboard/ 
│   │   └── page.tsx 
│   ├── globals.css 
│   ├── layout.tsx 
│   └── page.tsx 
├── LICENSE 
├── next.config.js 
├── package.json 
├── postcss.config.js 
├── public/ 
├── README.md 
├── server/ 
│   └── index.js 
├── tailwind.config.js 
└── tsconfig.json

## インストール

プロジェクトをクローンし、依存関係をインストールします。

```sh
git clone https://github.com/your-repo/bottle-diary.git
cd bottle-diary
npm install
```

## 開発サーバーの起動

以下のコマンドで開発サーバーを起動します。

```sh
npm run dev
```

## 使用技術

- Next.js
- React
- Tailwind CSS
- TypeScript

## 機能

- 匿名メッセージの送信
- メッセージの受信と表示
- ユーザーアカウント管理

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細はLICENSEファイルを参照してください。