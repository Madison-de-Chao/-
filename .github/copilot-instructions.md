# Rainbow Sanctuary 專案 - GitHub Copilot 指引

## 專案概述

**Rainbow Sanctuary** 是一個全方位命理解讀報告的介紹網站，整合了四大命理系統：
- 紫微斗數
- 八字
- 占星
- 人類圖

核心理念：「鏡子不是劇本，真實才是命運」— 以「人生羅盤」為中樞，幫助使用者看清自己的原廠設定與行動選項，而非預言未來。

## 技術架構

### 核心技術棧
- **框架**: Next.js 15 (App Router)
- **UI 框架**: React 19
- **樣式**: Tailwind CSS + Framer Motion
- **語言**: TypeScript
- **部署**: Vercel

### 專案結構

```
rainbow-sanctuary-report-site/
├── app/                    # Next.js App Router 頁面
│   ├── layout.tsx         # 全站布局（SEO、字體）
│   ├── page.tsx           # 首頁（整合所有區塊）
│   ├── preview/           # 試閱頁面
│   ├── pricing/           # 方案價格頁面
│   ├── faq/              # 常見問題頁面
│   └── api/revalidate/   # ISR 重新驗證端點
│
├── components/            # React 元件
│   ├── HeroSection.tsx   # 首屏英雄區塊
│   ├── Section.tsx       # 通用區塊容器
│   ├── FeatureCards.tsx  # 功能卡片
│   ├── PreviewSlider.tsx # 試閱滑動卡
│   ├── PricingTable.tsx  # 價格表
│   ├── StepsFlow.tsx     # 使用流程
│   ├── FAQList.tsx       # FAQ 列表
│   └── CTASection.tsx    # 行動呼籲區塊
│
├── data/                  # JSON 內容配置
│   ├── hero.json         # 首屏內容
│   ├── about.json        # 關於報告
│   ├── features.json     # 功能特色
│   ├── preview.json      # 試閱內容
│   ├── plans.json        # 方案價格
│   ├── flow.json         # 使用流程
│   ├── faq.json          # 常見問題
│   └── cta.json          # CTA 內容
│
├── lib/                   # 工具函數
│   ├── site.config.ts    # 站點配置
│   └── content.ts        # 內容讀取工具
│
├── public/               # 靜態資源
│   └── images/          # 圖片資源
│
└── styles/              # 全域樣式
    └── globals.css      # Tailwind 配置
```

## 編碼規範

### TypeScript 使用
- 所有組件使用 TypeScript
- 為 JSON 數據定義明確的介面類型（見 `lib/content.ts`）
- 使用嚴格模式（tsconfig.json）

### React 組件模式
- 使用函數組件（Function Components）
- 優先使用 Server Components（Next.js 15 App Router）
- 僅在需要互動時使用 Client Components（'use client' directive）
- Props 類型定義清晰

### 樣式規範
- 使用 Tailwind CSS utility classes
- 遵循現有的色彩系統：
  - 主色：`soft-gold` (#E8C547)
  - 背景：灰色系（gray-50, gray-100）
  - 文字：深灰色（gray-900, gray-700, gray-600）
- 響應式設計：優先考慮 mobile-first

### 內容管理
- **小幅更新**：直接編輯 `data/*.json` 文件
- **大幅更新**：修改組件或新增路由
- 所有文案使用繁體中文（zh-TW）

## 常用開發命令

```bash
# 開發環境
npm run dev          # 啟動開發伺服器（使用 Turbopack）

# 建置與部署
npm run build        # 建置生產版本（SSG）
npm run start        # 啟動生產伺服器
npm run lint         # ESLint 檢查
```

## SEO 與 Metadata
- 每個頁面都有獨立的 metadata（title, description）
- Open Graph 和 Twitter Card 支援
- 所有圖片使用 `next/image` 並設定 alt 文字
- 站點配置集中在 `lib/site.config.ts`

## 重要設計原則

1. **內容與代碼分離**：所有文案存放在 `data/*.json`
2. **可重用組件**：使用 `Section.tsx` 作為通用容器
3. **效能優先**：
   - 使用 Static Site Generation (SSG)
   - 圖片優化（next/image）
   - 字體優化（display=swap）
4. **無障礙性**：
   - 鍵盤導航支援
   - 語義化 HTML
   - ARIA 屬性
5. **響應式設計**：所有組件適配桌面、平板、手機

## 品牌特色

- **核心標語**：「鏡子不是劇本，真實才是命運。」
- **定位**：不預言未來，只幫你看清原廠設定與行動選項
- **視覺風格**：溫暖的金色系 + 簡潔的灰白底色
- **語調**：專業但親切，避免神秘主義

## 開發注意事項

1. 修改任何 `data/*.json` 後，建議運行 `npm run build` 驗證
2. 新增頁面時，記得在 `app/layout.tsx` 設定適當的 metadata
3. 使用 Framer Motion 時，保持動效簡潔自然
4. 所有外部連結記得設定 `target="_blank" rel="noopener noreferrer"`
5. 圖片資源放在 `public/images/` 對應目錄

## 後續工作清單

### 必要任務
- [ ] 添加實際試閱圖片到 `public/images/preview/`
- [ ] 添加 OG 圖片 `public/images/og-image.jpg` (1200x630px)
- [ ] 更新 `lib/site.config.ts` 的實際網站 URL
- [ ] 更新 LINE 和 Email 聯繫資訊

### 選用優化
- [ ] 添加 Google Fonts 或本地字體檔
- [ ] 啟用 Google Analytics
- [ ] 添加更多頁面（/contact, /about 等）
- [ ] i18n 多語言支援

---

**當你協助開發時，請遵循以上規範，保持代碼風格一致，並優先考慮使用者體驗與效能。**
