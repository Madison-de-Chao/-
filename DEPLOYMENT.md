# Deployment Guide

## 快速開始

### 本地開發
```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 訪問 http://localhost:3000
```

### 部署到 Vercel

1. 將此倉庫推送到 GitHub（已完成）
2. 前往 [vercel.com](https://vercel.com)
3. 點擊 "New Project"
4. 選擇此 repository：`Madison-de-Chao/-`
5. Framework 自動識別為 Next.js
6. 點擊 "Deploy"
7. 等待部署完成（約 1-2 分鐘）
8. 獲得 Production URL

### 更新內容

#### 小改動（內容更新）
1. 編輯 `data/*.json` 文件
2. Commit 並 push
3. Vercel 自動重新部署

#### 大改動（結構調整）
1. 修改 `components/*.tsx` 或 `app/*/page.tsx`
2. 測試：`npm run build`
3. Commit 並 push
4. Vercel 自動重新部署

### 添加圖片

將試閱圖片放置在：
- `public/images/preview/qianlong-1.jpg`
- `public/images/preview/qianlong-2.jpg`
- `public/images/preview/ygf-1.jpg`
- `public/images/preview/ygf-2.jpg`

建議規格：
- 長邊 1600px
- 品質 80
- WebP 格式優先

## 環境變數（可選）

在 Vercel 設置環境變數：
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `CONTACT_EMAIL` - 聯繫 Email
- `LINE_URL` - LINE 聯繫連結

## SEO 優化

1. 更新 `lib/site.config.ts` 中的：
   - `url` - 實際網站 URL
   - `ogImage` - Open Graph 圖片路徑
   
2. 添加 `public/images/og-image.jpg`（1200x630px）

## 效能優化

目前配置已優化：
- ✅ Static Site Generation (SSG)
- ✅ Tailwind CSS purging
- ✅ 圖片 lazy loading
- ✅ 最小化 JavaScript bundle

建議：
- 添加 Google Fonts 或本地字體
- 壓縮圖片
- 啟用 CDN（Vercel 已內建）
