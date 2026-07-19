# 曼谷行程規劃 · 2026/7/21–7/27

7 天 6 夜曼谷行程（更新版）的靜態網頁，可用 GitHub Pages 直接發佈。內容整理自
`曼谷行程規劃_更新版_2026-07-21_to_07-27.docx`。

## 內容

- 每日時間軸（7/21–7/27），標示固定行程與更新重點
- 泰服拍照動線（Wat Arun → 大皇宮）與租借建議
- 每個地點附 Google Maps 連結
- 出發前必辦清單（可勾選，狀態存於瀏覽器 localStorage）
- Top 5 推薦與可刪減景點

## 結構

```
index.html            外層 shell
assets/css/main.css   樣式
assets/js/itinerary.js  行程資料 + 渲染邏輯
.nojekyll             關閉 Jekyll，直接吃 assets/
```

## 發佈到 GitHub Pages

1. 建立 GitHub repo `bangkok-2026`（帳號 d1sney0）。
2. `git push -u origin main`。
3. repo Settings → Pages → Source 選 `main` 分支、根目錄。
4. 網址：`https://d1sney0.github.io/bangkok-2026/`。

## 本地預覽

```
python3 -m http.server 8000
# 開 http://localhost:8000
```
