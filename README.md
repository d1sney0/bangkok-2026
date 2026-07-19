# 曼谷行程規劃 · 2026/7/21–7/27

7 天 6 夜曼谷行程的靜態網頁，可用 GitHub Pages 直接發佈。內容整理自
`曼谷行程規劃_更新版_2026-07-21_to_07-27.docx`。

## 內容

- 分頁式導覽：總覽 / DAY 1–7 / 行前 / 收藏，一次只看一天或一個區塊（hash 深連結，如 `#d5`）
- 每日時間軸，標示固定行程與重點；每個地點附 Google Maps 連結
- 泰服拍照動線（Wat Arun → 大皇宮）與租借建議
- 出發前必辦清單（可勾選，狀態存於瀏覽器 localStorage）
- Top 5 推薦、可刪減景點
- 喵金魚的 Google 收藏清單「Zenith曼谷 IM」（連結 + 未排入行程的口袋名單）

## 設計

主題「Bangkok weekday colours」：每一天以泰國該星期的招牌色（สีประจำวัน）呈現 —
週二玫瑰、週三翡翠、週四橘、週五天藍、週六紫、週日紅、週一琥珀。首頁以七色光譜當作
signature。字體 Chonburi（泰式拉丁）＋ Noto Serif TC ＋ Noto Sans Thai。

## 結構

```
index.html              外層 shell（載入字型 + assets）
assets/css/main.css     樣式（設計系統、每日 --day 主題色）
assets/js/itinerary.js  行程資料（TRIP 常數）+ 渲染 + 分頁邏輯
.nojekyll               關閉 Jekyll，直接吃 assets/
```

## 發佈到 GitHub Pages

1. GitHub repo：`d1sney0/bangkok-2026`（已建立）。
2. `git push -u origin main`。
3. repo Settings → Pages → Source 選 `main` 分支、根目錄。
4. 網址：`https://d1sney0.github.io/bangkok-2026/`。

## 本地預覽

```
python3 -m http.server 8000
# 開 http://localhost:8000
```
