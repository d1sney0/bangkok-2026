// 曼谷行程規劃｜2026/7/21–7/27 — data-driven static page.
// 資料整理自「曼谷行程規劃_更新版_2026-07-21_to_07-27.docx」。

const map = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

// Thai weekday colours (สีประจำวัน) — each day themed in its auspicious colour.
const DAY_THEME = {
  "二": { th: "อังคาร", color: "#d24f86" }, // Tue — rose
  "三": { th: "พุธ", color: "#1f9a70" }, // Wed — jade
  "四": { th: "พฤหัสบดี", color: "#e07a24" }, // Thu — orange
  "五": { th: "ศุกร์", color: "#2f7fce" }, // Fri — sky blue
  "六": { th: "เสาร์", color: "#7d51c4" }, // Sat — violet
  "日": { th: "อาทิตย์", color: "#d13b39" }, // Sun — red
  "一": { th: "จันทร์", color: "#c1901a" }, // Mon — amber
};

const sectionHead = (kicker, title) =>
  `<div class="section-head"><span class="section-head__k">${kicker}</span><h2>${title}</h2></div>`;

const TRIP = {
  title: "曼谷行程規劃",
  preparedFor: "Prepared for Lauren",
  flights: {
    out: "7/21 <b>JX745</b>　TPE → BKK",
    back: "7/27 <b>JX746</b>　BKK → TPE（17:50 起飛 · 16:50 關櫃）",
  },
  hotels: [
    { dates: "7/21–7/24", name: "曼谷素萬那普機場萬怡酒店", q: "Courtyard by Marriott Bangkok Suvarnabhumi Airport" },
    { dates: "7/24–7/27", name: "曼谷素坤逸卡爾頓酒店", q: "Carlton Hotel Bangkok Sukhumvit" },
  ],
  fixed: [
    "7/21 18:00–20:00 飯店晚餐",
    "7/22 09:00–17:00 CRA Training",
    "7/22 19:00–21:00 Welcome Dinner",
    "7/23 09:00–16:30 Engagement Meeting",
    "7/24 16:00–18:00 AThai&massage (by aspa)",
  ],
  days: [
    {
      id: "d1", date: "7/21", dow: "二", theme: "抵達日", sub: "機場飯店周邊輕鬆行程",
      slots: [
        { time: "抵達後", title: "入住／整理行李", loc: "曼谷素萬那普機場萬怡酒店", note: "以休息為主。",
          transit: "🚌 機場→飯店 免費接駁 ~10–15 分",
          maps: [{ label: "萬怡酒店", q: "Courtyard by Marriott Bangkok Suvarnabhumi Airport" }] },
        { time: "18:00–20:00", title: "晚餐（已安排）", loc: "飯店", note: "固定行程。", fixed: true },
        { time: "20:00–22:00", title: "附近小逛＋放鬆", loc: "Let's Relax Spa／Durianism café（Little Walk Lat Krabang）／Robinson Lifestyle Suvarnabhumi",
          note: "累就只做 Let's Relax Spa 按摩＋Durianism 榴槤咖啡甜點；<br>有力氣再逛 Robinson。三點都在 Little Walk Lat Krabang 一帶、離飯店近。",
          transit: "🚕 飯店→此 Grab 一台 60–90 THB／10–15 分",
          maps: [
            { label: "Let's Relax Spa（Lat Krabang）", q: "13.7229644,100.7273072" },
            { label: "Durianism café（Little Walk Lat Krabang）", q: "13.7228415,100.7258645" },
            { label: "Robinson Lifestyle Suvarnabhumi", q: "Robinson Lifestyle Suvarnabhumi" },
          ] },
      ],
    },
    {
      id: "d2", date: "7/22", dow: "三", theme: "CRA Training 日", sub: "不進市區",
      slots: [
        { time: "09:00–17:00", title: "CRA Training", loc: "固定行程", note: "白天不安排額外景點。", fixed: true },
        { time: "19:00–21:00", title: "Welcome Dinner", loc: "飯店", note: "固定行程，於飯店。", fixed: true },
      ],
    },
    {
      id: "d3", date: "7/23", dow: "四", theme: "Engagement Meeting 日", sub: "",
      slots: [
        { time: "09:00–16:30", title: "Engagement Meeting", loc: "飯店", note: "白天在飯店開會，不安排額外景點。", fixed: true },
        { time: "19:00–20:30", title: "晚餐", loc: "飯店周邊",
          note: "會後在飯店附近吃；隔天要搬飯店，早點休息。",
          transit: "🚶 飯店附近步行可到" },
      ],
    },
    {
      id: "d4", date: "7/24", dow: "五", theme: "搬飯店＋吞武里市場＋按摩", sub: "",
      slots: [
        { time: "08:00", title: "退房／移動至 Carlton", loc: "曼谷素坤逸卡爾頓酒店",
          note: "早退房，把西邊市場整段挪到上午，趕 16:00 按摩更從容。<br>可先到 Carlton 寄放行李。",
          transit: "🚕 4 人＋行李叫 GrabVan／XL（6 人座）約 800–1,200 THB＋過路費、離峰 ~40 分",
          maps: [{ label: "Carlton Hotel Sukhumvit", q: "Carlton Hotel Bangkok Sukhumvit" }] },
        { time: "10:00–13:00", title: "吞武里市場", loc: "吞武里市場（Thonburi Market Place）",
          note: "上午先來，西側 Thonburi、離飯店較遠；早上車流輕，也留足回程緩衝趕 16:00 按摩。<br>午餐在市場解決，13:00 回程約 1 小時、午後在飯店附近休息。",
          transit: "🚕 Carlton→此 GrabCar 300–450 THB／40–60 分",
          maps: [{ label: "吞武里市場", q: "13.7847965,100.3971688" }] },
        { time: "16:00–18:00", title: "按摩（已預約）", loc: "AThai&massage (by aspa)", note: "固定行程。",
          transit: "🚕 市場→此 GrabCar 300–450 THB／40–60 分", fixed: true },
        { time: "18:30–20:00", title: "晚餐", loc: "NEUA.NEUR.BKK",
          note: "未訂位、現場候位；店內僅約 5 桌、最後點餐 20:30。<br><span class=\"hot\">人多就改附近備案。</span>",
          transit: "🚕 按摩→此 GrabCar 60–100 THB／10–20 分（或 BTS）",
          maps: [{ label: "NEUA.NEUR.BKK", q: "NEUA NEUR BKK Bangkok" }] },
        { time: "20:00 後", title: "逛街", loc: "Terminal 21 Asok",
          note: "主題商場（每層一座城市），就在 Asok、離 Carlton 步行可到；<br>晚餐後輕鬆逛到打烊（~22:00）。",
          transit: "🚆 NEUA→此 BTS Ekkamai→Asok（3 站）；回 Carlton 步行即到",
          maps: [{ label: "Terminal 21 Asok", q: "Terminal 21 Asok" }] },
      ],
    },
    {
      id: "d5", date: "7/25", dow: "六", theme: "泰服拍照日＋高空酒吧", sub: "",
      slots: [
        { time: "08:00", title: "出門", loc: "飯店出發", note: "泰服 10:00 才借；安樂園 06:00 開，早點過去老城吃早餐，再往 Wat Arun。",
          transit: "🚆 Carlton→安樂園 MRT Sukhumvit→Sam Yot（直達不轉車、Exit 3 即到，避塞、~40 THB×5）" },
        { time: "08:30–09:15", title: "早餐", loc: "安樂園 On Lok Yun",
          note: "90 年老店，泰式烤吐司＋咖椰＋半熟蛋；06:00–14:30，就在 MRT Sam Yot 3 號出口。<br>吃完往河邊過河去泰服店。",
          maps: [{ label: "安樂園 On Lok Yun", q: "On Lok Yun Bangkok" }] },
        { time: "10:00–11:00", title: "泰服租借＋妝髮", loc: "Bangkok & Blush", fixed: true,
          note: "<span class=\"hot\">已預約 10:00</span>；含妝髮約 45–60 分，順便確認歸還時間與押金規定。",
          transit: "🚕 安樂園→Tha Tien 碼頭 Grab／計程車 ~10 分；⛴ 過河渡輪到 Wat Arun／Bangkok & Blush ~5 分",
          maps: [{ label: "Bangkok & Blush", q: "Bangkok & Blush" }] },
        { time: "11:00–12:15", title: "Wat Arun 拍照（泰服）", loc: "鄭王廟＋Khanom Bueang - Wat Arun", highlight: true,
          note: "泰服<span class=\"hot\">只在鄭王廟（Wat Arun）拍</span>；店面就在附近，拍完先歸還再過河，免走回頭路。<br>正午較曬，記得防曬補水。",
          maps: [
            { label: "Wat Arun 鄭王廟", q: "Wat Arun Bangkok" },
            { label: "Khanom Bueang - Wat Arun", q: "Khanom Bueang Wat Arun" },
          ] },
        { time: "12:15–12:30", title: "歸還泰服", loc: "Bangkok & Blush", highlight: true,
          note: "拍完直接就近歸還、換回一般服裝。<br>過河前先在西岸吃碗船麵當午餐，再過河去對岸兩寺（不穿泰服）。",
          maps: [{ label: "Bangkok & Blush", q: "Bangkok & Blush" }] },
        { time: "12:30–13:00", title: "船麵午餐 Lung Ayutthaya Boat Noodle", loc: "Lung Ayutthaya Boat Noodle（Arun Amarin Rd，西岸）",
          note: "與 Bangkok & Blush／Wat Arun 同側；船麵小碗、上菜快，過河前吃完免走回頭路。<br><span class=\"hot\">營業時間現場／IG 再確認，可能午後售完。</span>",
          transit: "🚶 歸還泰服處→此 步行 ~5 分",
          maps: [{ label: "Lung Ayutthaya Boat Noodle", q: "13.7456261,100.4853106" }] },
        { time: "13:00–15:00", title: "過橋→對岸兩間寺", loc: "大皇宮／玉佛寺、臥佛寺",
          note: "<span class=\"hot\">大皇宮 15:30 停止售票</span>，先逛大皇宮再臥佛寺（臥佛寺開到 18:30 較彈性）。<br>大皇宮須遮肩過膝的一般服儀。",
          transit: "⛴ 船麵→對岸 Tha Tien 渡輪 ~5 分",
          maps: [
            { label: "大皇宮 Grand Palace", q: "Grand Palace Bangkok" },
            { label: "臥佛寺 Wat Pho", q: "Wat Pho Bangkok" },
          ] },
        { time: "15:00–17:45", title: "Tha Maharaj 河岸慢活", loc: "Tha Maharaj",
          note: "晚餐 Savoey 就在這裡；午後留在河岸咖啡、河景、避暑，不必來回 Sukhumvit 飯店。",
          transit: "🚶 兩寺→此 步行可到（Maharaj 碼頭旁）",
          maps: [{ label: "Tha Maharaj", q: "Tha Maharaj Bangkok" }] },
        { time: "18:00–19:30", title: "晚餐 Savoey（已訂）", loc: "Savoey @Tha Maharaj", fixed: true,
          note: "河岸泰式海鮮，已訂位 18:00；就在 Tha Maharaj，吃完再往 Sukhumvit 高空酒吧。",
          maps: [{ label: "Savoey @Tha Maharaj", q: "13.7553002,100.4887332" }] },
        { time: "20:00 後", title: "高空酒吧", loc: "Octave Rooftop（曼谷素坤逸萬豪酒店）", highlight: true,
          note: "萬豪酒店頂樓 Octave（Thong Lo 一帶、離飯店近），賞 Sukhumvit 夜景；<br>有服儀規定，注意穿著。<span class=\"hot\">遇雨露天 48/49F 關、改 45F 室內。</span>",
          transit: "🚕 Tha Maharaj→此 GrabVan 290–500 THB／30–45 分；回 Carlton GrabVan 140–220 或 BTS Thong Lo→Asok",
          maps: [{ label: "高空酒吧 Octave", q: "13.7234261,100.5805352" }] },
      ],
    },
    {
      id: "d6", date: "7/26", dow: "日", theme: "吃貨＋血拚＋燈展日", sub: "",
      slots: [
        { time: "09:00–10:00", title: "早餐（二選一）", loc: "CASA LAPIN x CentralWorld ／ 邢泰記 @ One Bangkok",
          note: "開逛前吃早餐，兩家二選一：<br>① CASA LAPIN：就在 CentralWorld 商圈、與 Big C 步行可到，吃完直接開逛最順。<br>② 邢泰記（One Bangkok The Storeys）：在 Witthayu／Lumphini，需再往 Ratchaprasong 移動 ~10–15 分；<span class=\"hot\">該店營業時間以現場為準（The Storeys 07:00–22:00）</span>。",
          transit: "① 🚆 Carlton→CASA LAPIN BTS Asok→Chidlom（~30 THB×5）或 GrabVan 120–200／10–20 分<br>② 🚆 Carlton→One Bangkok MRT Sukhumvit→Lumphini（~30 THB×5）；早餐後→Big C GrabVan ~10–15 分",
          maps: [
            { label: "CASA LAPIN x CentralWorld", q: "13.7460053,100.5384739" },
            { label: "邢泰記 @ One Bangkok", q: "邢泰記 One Bangkok The Storeys" },
          ] },
        { time: "10:00–16:30", title: "伴手禮採買＋逛街", loc: "Big C Ratchadamri → CentralWorld",
          note: "早餐後直接開逛：Big C 一次買齊伴手禮，再步行去 CentralWorld 順逛。<br>逛的時候順喝手標茶 Cha Tra Mue 與 Karun Thai Tea（都在商圈內）。",
          transit: "🚶 Big C→CentralWorld 步行 ~5 分（同商圈）",
          maps: [
            { label: "Big C Ratchadamri", q: "Big C Ratchadamri" },
            { label: "CentralWorld", q: "CentralWorld Bangkok" },
            { label: "Cha Tra Mue 泰式手標茶", q: "13.7469281,100.5386487" },
            { label: "Karun Thai Tea", q: "Karun Thai Tea CentralWorld Bangkok" },
          ] },
        { time: "18:00–19:30", title: "晚餐", loc: "Jeh O Chula",
          note: "Jeh O 16:30 開賣、<span class=\"hot\">現場排 1–2 小時</span>。<br>用 QueQ App 取號（須到店附近才抓得到）或提早 17:00 到避峰，別現場硬賭。",
          transit: "🚕 CentralWorld→此 GrabVan 120–200 THB／10–20 分",
          maps: [{ label: "Jeh O Chula", q: "Jeh O Chula" }] },
        { time: "20:00 後", title: "Samyan Mitrtown 燈飾展＋Banthat Thong 美食街", loc: "Samyan Mitrtown（Sam Yan MRT）",
          note: "<span class=\"hot\">Lantern Art Festival「The Luminous Bloom」7/17–7/31、每日 10:00–22:00、週日照開、免費</span>。<br>大型花卉燈飾光雕可拍照；商場室內，下雨也可行。<br>想吃小吃就逛 Banthat Thong 街屋。",
          transit: "🚶 Jeh O→此 步行 5–10 分（同在 Banthat Thong 一帶）<br>🚆 回 Carlton：MRT Sam Yan→Sukhumvit ~25 THB×5／~10 分（或 GrabVan 140–220）",
          maps: [
            { label: "Samyan Mitrtown", q: "Samyan Mitrtown Bangkok" },
            { label: "Banthat Thong 美食街", q: "Banthadthong Road Bangkok" },
          ] },
      ],
    },
    {
      id: "d7", date: "7/27", dow: "一", theme: "回程日", sub: "Asoke 周邊補貨",
      slots: [
        { time: "09:30–12:30", title: "輕鬆採買／散步", loc: "Foodland Sukhumvit 16／butter bakery asoke／Terminal 21",
          note: "不排遠點，都在 Asok 步行可到；午餐在 Terminal 21 快速解決。",
          transit: "🚶 Foodland／butter bakery／Terminal 21 都在 Asok，步行可到",
          maps: [
            { label: "Foodland Sukhumvit 16", q: "Foodland Sukhumvit 16" },
            { label: "butter bakery asoke", q: "Butter Bakery Asoke" },
            { label: "Terminal 21", q: "Terminal 21 Asok" },
          ] },
        { time: "13:15", title: "離開市區前往機場", loc: "Asoke → BKK", highlight: true,
          note: "<span class=\"hot\">JX746 17:50 起飛、16:50 關櫃。</span><br>13:15 出發、離峰 40–50 分可達；含退稅（先海關驗貨再托運）建議 14:30 前到機場（距關櫃逾 2 小時）。<br><span class=\"hot\">這天剩 3 位</span>（另 2 位搭較早班次已離開）。",
          transit: "🚕 Asok→機場 3 人＋行李叫 GrabCar 可、想寬鬆用 GrabXL",
          maps: [{ label: "Suvarnabhumi Airport", q: "Suvarnabhumi Airport" }] },
      ],
    },
  ],
  checklist: [
    { t: "簽證 APP", d: "出發前用簽證 APP 辦好。" },
    { t: "現金／外幣", d: "每人帶 20,000 泰銖等值外幣（入境可能抽查財力）。" },
    { t: "下載 Grab／Bolt", d: "叫車、夜市回程備用。" },
  ],
  top5: [
    "Wat Arun＋泰服拍照（7/25 早上先拍，過河再逛寺）",
    "大皇宮＋臥佛寺（古城雙寺）",
    "Octave 高空酒吧（Sukhumvit 夜景）",
    "Jeh O Chula 米其林火鍋＋Samyan Mitrtown 燈飾展",
    "Big C＋CentralWorld 伴手禮血拚",
  ],
  souvenir: {
    intro: "以 Big C Ratchadamri 為主戰場一次買齊、退稅集中；香氛保養精緻款到 CentralWorld 專櫃。價格為大概區間（THB），★＝最多人推、回購率高。",
    top: "小老闆海苔、Koh-Kae 大哥花生、手標茶 ChaTraMue 即溶泰奶、虎標萬金油、蛇牌爽身粉",
    cats: [
      { name: "零食餅乾", where: "Big C", items: [
        { n: "小老闆海苔", p: "25–99", star: true },
        { n: "Koh-Kae 大哥花生", p: "20–40", star: true },
        { n: "Bento 魷魚片", p: "20–30" },
        { n: "芒果乾／榴槤乾（Doikham、藍象）", p: "155–369", note: "Big C 比機場便宜" },
        { n: "Kunna 椰子脆片", p: "40–60" },
        { n: "樂事鹹蛋黃洋芋片", p: "35–40" },
      ] },
      { name: "泡麵與泰式調味", where: "Big C", items: [
        { n: "MAMA 泡麵（冬陰功／打拋豬）", p: "6–20", star: true },
        { n: "藍象料理包", p: "50–80", star: true },
        { n: "Mae Pranom 海鮮沾醬", p: "40–70" },
        { n: "LOBO 咖哩醬", p: "30–60" },
        { n: "魚露", p: "30–50" },
      ] },
      { name: "飲品沖泡", where: "Big C／CentralWorld", items: [
        { n: "手標茶 ChaTraMue 即溶泰奶／茶葉罐", p: "60–120", star: true, note: "CentralWorld 有門市" },
        { n: "Birdy／Nescafe 三合一咖啡", p: "65–100" },
        { n: "蝶豆花乾", p: "50–80" },
        { n: "泰奶粉罐裝", p: "100–150" },
      ] },
      { name: "藥妝保養（回購率最高）", where: "Big C／Boots", items: [
        { n: "虎標萬金油 Tiger Balm", p: "40–90", star: true, note: "比台灣/機場便宜" },
        { n: "蛇牌爽身粉 Prickly Heat", p: "35–60", star: true },
        { n: "Counterpain 痠痛藥膏", p: "50–90" },
        { n: "五蜈蚣標止咳丸", p: "30–50" },
        { n: "Mistine 彩妝", p: "89–150" },
        { n: "Snail White", p: "80–150", note: "Boots 較齊" },
        { n: "臥佛牌青草藥膏", p: "40–80" },
      ] },
      { name: "香氛雜貨（精緻款）", where: "CentralWorld", items: [
        { n: "Karmakamet 香皂／擴香", p: "80–150+", star: true },
        { n: "THANN 護手霜", p: "250–400" },
        { n: "HARNN 禮盒", p: "500+" },
        { n: "大象褲", p: "<100", note: "市集比百貨便宜" },
      ] },
    ],
  },
  collection: {
    name: "Zenith曼谷 IM",
    curator: "喵金魚",
    count: 37,
    url: "https://maps.app.goo.gl/SyKhhSUxBqfiiNby9?g_st=i",
    // 清單中「行程尚未排入」的口袋名單；已排入日程的點不重複列。完整 37 點見上方連結。
    pocket: [
      { name: "Mae Varee", cat: "芒果糯米飯（名店）", q: "Mae Varee Thonglor Bangkok" },
      { name: "Ying Charoen Market", cat: "鮮食市場", q: "Ying Charoen Market Bangkok" },
      { name: "班蘭蛋捲", cat: "泰式點心", q: "班蘭蛋捲 曼谷" },
      { name: "Sudjai ทองม้วนสด", cat: "泰式蛋捲", q: "Sudjai thong muan sod Bangkok" },
      { name: "Let's Relax Spa", cat: "水療（Ella 推薦）", q: "Let's Relax Spa Bangkok" },
      { name: "Mae Klong Hua Pla Mo Fai", cat: "魚頭火鍋", q: "Mae Klong Hua Pla Mo Fai Bangkok" },
      { name: "陳瑞興餐室", cat: "老字號餐室", q: "陳瑞興餐室 曼谷" },
      { name: "泰式椰奶脆餅", cat: "街頭小吃", q: "泰式椰奶脆餅 曼谷" },
      { name: "Dhou noodles", cat: "粥 · 粿條", q: "Dhou noodles โจ๊ก ก๋วยเตี๋ยว Bangkok" },
      { name: "JC Kevin Sathorn 酒店", cat: "飯店（備選）", q: "JC Kevin Sathorn Bangkok Hotel" },
    ],
  },
};

function renderHero() {
  const spectrum = TRIP.days
    .map((d) => {
      const t = DAY_THEME[d.dow];
      const n = d.date.split("/")[1] - 20;
      return `<a class="spec" href="#${d.id}" style="--day:${t.color}" aria-label="Day ${n} · ${d.date} · 星期${d.dow}">
        <span class="spec__dot"></span><b>${n}</b><i>${d.date}</i>
      </a>`;
    })
    .join("");
  return `<header class="hero"><div class="hero__inner">
    <div class="hero__eyebrow">BANGKOK · 2026</div>
    <h1 class="hero__title">${TRIP.title}</h1>
    <div class="hero__rule"></div>
    <div class="hero__dates">7.21 — 7.27</div>
    <div class="hero__for">${TRIP.preparedFor}　·　curated with 喵金魚’s list</div>
    <div class="hero__spectrum">${spectrum}</div>
  </div></header>`;
}

function renderBasics() {
  const hotels = TRIP.hotels
    .map((h) => `<div class="inforow"><b>${h.dates}</b>　<a class="mapchip" href="${map(h.q)}" target="_blank" rel="noopener">🗺 ${h.name}</a></div>`)
    .join("");
  const fixed = TRIP.fixed.map((f) => `<li>${f}</li>`).join("");
  return `<section class="wrap">
    ${sectionHead("ESSENTIALS", "基本資訊")}
    <div class="infogrid">
      <div class="infocard"><h3>Flights 航班</h3>
        <div class="inforow">去程　${TRIP.flights.out}</div>
        <div class="inforow">回程　${TRIP.flights.back}</div>
      </div>
      <div class="infocard"><h3>Hotels 住宿</h3>${hotels}</div>
      <div class="infocard infocard--wide"><h3>Fixed 固定行程</h3><ul class="fixedlist">${fixed}</ul></div>
    </div>
  </section>`;
}

function renderMaps(maps) {
  if (!maps || !maps.length) return "";
  const chips = maps
    .map((m) => `<a class="mapchip" href="${map(m.q)}" target="_blank" rel="noopener">🗺 ${m.label}</a>`)
    .join("");
  return `<div class="maps">${chips}</div>`;
}

function renderSlot(s) {
  const cls = "slot" + (s.fixed ? " is-fixed" : "") + (s.highlight ? " is-highlight" : "");
  const tag = s.fixed
    ? `<span class="tag tag--fixed">固定行程</span>`
    : s.highlight
    ? `<span class="tag tag--star">重點</span>`
    : "";
  const loc = s.loc ? `<div class="slot__loc">📍 ${s.loc}</div>` : "";
  const note = s.note ? `<div class="slot__note">${s.note}</div>` : "";
  const transit = s.transit ? `<div class="slot__transit">${s.transit}</div>` : "";
  return `<div class="${cls}">
    <div class="slot__dot"></div>
    <div class="slot__body">
      <div class="slot__top"><span class="slot__time">${s.time}</span><span class="slot__title">${s.title}</span>${tag}</div>
      ${loc}${note}${transit}${renderMaps(s.maps)}
    </div>
  </div>`;
}

// Ordered, de-duplicated real place queries for a day (skips 固定行程/飯店 with no map).
function dayPlaces(d) {
  const seen = new Set();
  const out = [];
  d.slots.forEach((s) =>
    (s.maps || []).forEach((m) => {
      if (!seen.has(m.q)) { seen.add(m.q); out.push(m.q); }
    })
  );
  return out.slice(0, 9); // Google directions embed caps around ~10 stops
}

// Keyless Google Maps embed showing the day's spots as pins (transit mode → no
// driving time; multi-waypoint transit can't route, so it just drops the markers).
function dayMapSrc(d) {
  const places = dayPlaces(d);
  if (!places.length) return "";
  const e = encodeURIComponent;
  if (places.length === 1) return `https://maps.google.com/maps?q=${e(places[0])}&z=14&output=embed`;
  const daddr = places.slice(1).map(e).join("+to:");
  return `https://maps.google.com/maps?saddr=${e(places[0])}&daddr=${daddr}&dirflg=r&output=embed`;
}

function renderDayMap(d) {
  const src = dayMapSrc(d);
  if (!src) return "";
  return `<div class="daymap">
    <iframe class="daymap__frame" data-src="${src}" loading="lazy" title="${d.date} 當天景點地圖"></iframe>
    <div class="daymap__hint">當天景點位置 · 點地圖可放大，或在 Google 地圖查大眾運輸路線</div>
  </div>`;
}

function renderDay(d) {
  const t = DAY_THEME[d.dow];
  const sub = d.sub ? `<span class="day__sub">${d.sub}</span>` : "";
  const slots = d.slots.map(renderSlot).join("");
  return `<section class="day wrap" style="--day:${t.color}">
    <div class="day__head">
      <span class="day__date">${d.date}</span>
      <span class="day__dow"><b>星期${d.dow}</b><i>${t.th}</i></span>
      <span class="day__theme">${d.theme}${sub}</span>
    </div>
    ${renderDayMap(d)}
    <div class="timeline">${slots}</div>
  </section>`;
}

function renderChecklist() {
  const items = TRIP.checklist
    .map((c, i) => `<label class="checkitem" data-idx="${i}">
      <input type="checkbox" data-idx="${i}">
      <span class="checkitem__text"><b>${c.t}</b><span>${c.d}</span></span>
    </label>`)
    .join("");
  return `<section class="wrap">
    ${sectionHead("BEFORE YOU GO", "出發前必辦清單")}
    <div class="checkwrap">
      <div class="checkbar">
        <span class="checkbar__prog"><b id="prog">0</b> / ${TRIP.checklist.length} 已完成</span>
        <button class="checkbar__reset" id="reset">清除全部</button>
      </div>
      ${items}
    </div>
  </section>`;
}

function renderTop5() {
  const items = TRIP.top5
    .map((t, i) => `<div class="top5__item"><span class="top5__no">${i + 1}</span><span class="top5__text">${t}</span></div>`)
    .join("");
  return `<section class="wrap">
    ${sectionHead("HIGHLIGHTS", "最推薦 Top 5")}
    <div class="top5">${items}</div>
  </section>`;
}

function renderSouvenir() {
  const s = TRIP.souvenir;
  const img = (q) => `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q + " 泰國")}`;
  const cats = s.cats
    .map((c) => {
      const items = c.items
        .map((i) => `<li>${i.star ? "★ " : ""}${i.n}　<b>${i.p} THB</b>${i.note ? `（${i.note}）` : ""} <a class="mapchip" href="${img(i.n)}" target="_blank" rel="noopener">🔍 查圖</a></li>`)
        .join("");
      return `<details class="infocard"><summary><b>${c.name}</b>　🛒 ${c.where}（${c.items.length}）</summary><ul class="fixedlist">${items}</ul></details>`;
    })
    .join("");
  return `<section class="wrap">
    ${sectionHead("SOUVENIRS", "伴手禮建議")}
    <div class="collection__note">${s.intro}　每項 🔍 可點開查 Google 圖片對照包裝；點分類標題可展開／收合。</div>
    <div class="infocard infocard--wide"><h3>必買 5 樣</h3><ul class="fixedlist"><li>★ ${s.top}</li></ul></div>
    <div style="display:grid;gap:12px;margin-top:14px">${cats}</div>
  </section>`;
}

function renderCollection() {
  const c = TRIP.collection;
  const items = c.pocket
    .map((p) => `<a class="pocketitem" href="${map(p.q)}" target="_blank" rel="noopener">
      <span class="pocketitem__pin">🗺</span>
      <span class="pocketitem__body"><b>${p.name}</b><span>${p.cat}</span></span>
    </a>`)
    .join("");
  return `<section class="wrap">
    ${sectionHead("SAVED PLACES", "收藏清單")}
    <div class="collection">
      <div class="collection__head">
        <div class="collection__meta">
          <div class="collection__name">${c.name}</div>
          <div class="collection__by">by ${c.curator} · ${c.count} 個地點</div>
        </div>
        <a class="collection__btn" href="${c.url}" target="_blank" rel="noopener">🗺 在 Google 地圖開啟完整清單</a>
      </div>
      <div class="collection__note">以下為清單中、行程尚未排入的口袋名單；完整 ${c.count} 個地點請開啟上方連結。</div>
      <div class="pocket">${items}</div>
    </div>
  </section>`;
}

function renderFooter() {
  return `<footer class="foot">Bangkok Trip Itinerary｜<b>Prepared for Lauren</b></footer>`;
}

// ---- Checklist persistence ----
const STORAGE_KEY = "bkk2026.checklist";

function loadChecklist() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveChecklist(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — session-only */
  }
}

function wireChecklist(root) {
  const state = loadChecklist();
  const boxes = [...root.querySelectorAll(".checkitem input")];
  const prog = root.querySelector("#prog");

  const refresh = () => {
    let done = 0;
    boxes.forEach((box) => {
      const on = !!state[box.dataset.idx];
      box.checked = on;
      box.closest(".checkitem").classList.toggle("is-done", on);
      if (on) done++;
    });
    if (prog) prog.textContent = done;
  };

  boxes.forEach((box) => {
    box.addEventListener("change", () => {
      state[box.dataset.idx] = box.checked;
      saveChecklist(state);
      refresh();
    });
  });

  const reset = root.querySelector("#reset");
  if (reset) {
    reset.addEventListener("click", () => {
      boxes.forEach((box) => delete state[box.dataset.idx]);
      saveChecklist(state);
      refresh();
    });
  }

  refresh();
}

// Tabbed navigation: show one panel at a time instead of one long scroll.
function wireTabs(root) {
  const nav = root.querySelector(".tabbar");
  const track = root.querySelector(".tabbar__track");
  const panelsWrap = root.querySelector(".panels");
  const pills = [...root.querySelectorAll(".tab")];
  const byTarget = new Map(pills.map((p) => [p.dataset.target, p]));
  const panels = [...root.querySelectorAll(".panel")];
  const panelById = new Map(panels.map((p) => [p.dataset.panel, p]));
  const first = panels[0].dataset.panel;

  // Center the active pill inside the horizontal track only — never
  // scrollIntoView(), which would scroll the document to the sticky bar.
  const centerPill = (pill) => {
    const t = track.getBoundingClientRect();
    const p = pill.getBoundingClientRect();
    track.scrollTo({ left: track.scrollLeft + (p.left - t.left) - (t.width - p.width) / 2, behavior: "smooth" });
  };

  const activate = (id, scroll) => {
    if (!panelById.has(id)) id = first;
    panels.forEach((p) => { p.hidden = p.dataset.panel !== id; });
    // Lazy-load the shown panel's map iframe(s) — avoids loading all 7 at once.
    panelById.get(id).querySelectorAll("iframe[data-src]").forEach((f) => {
      f.src = f.dataset.src;
      f.removeAttribute("data-src");
    });
    pills.forEach((p) => p.classList.toggle("is-active", p.dataset.target === id));
    const pill = byTarget.get(id);
    if (pill) centerPill(pill);
    if (scroll) {
      // pin the sticky tab bar to the top, panel content starting just below
      const y = panelsWrap.offsetTop - nav.offsetHeight;
      window.scrollTo(0, Math.max(0, y));
    }
  };

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const id = pill.dataset.target;
      if (location.hash.slice(1) === id) activate(id, true);
      else location.hash = id; // triggers hashchange
    });
  });
  window.addEventListener("hashchange", () => activate(location.hash.slice(1), true));

  activate(location.hash.slice(1) || first, false);
}

function tab(id, top, label, color) {
  const style = color ? ` style="--day:${color}"` : "";
  return `<button type="button" class="tab" data-target="${id}"${style}><b>${top}</b><span>${label}</span></button>`;
}

function main() {
  const app = document.getElementById("app");

  const dayTabs = TRIP.days.map((d) => ({
    id: d.id,
    pill: tab(d.id, `DAY ${d.date.split("/")[1] - 20}`, d.date, DAY_THEME[d.dow].color),
    html: renderDay(d),
  }));
  const tabs = [
    { id: "overview", pill: tab("overview", "PLAN", "總覽"), html: renderBasics() + renderTop5() },
    ...dayTabs,
    { id: "prep", pill: tab("prep", "PREP", "行前"), html: renderChecklist() },
    { id: "gifts", pill: tab("gifts", "GIFTS", "伴手禮"), html: renderSouvenir() },
    { id: "collection", pill: tab("collection", "LIST", "收藏"), html: renderCollection() },
  ];

  const bar = `<nav class="tabbar"><div class="tabbar__track">${tabs.map((t) => t.pill).join("")}</div></nav>`;
  const panels = `<div class="panels">${tabs
    .map((t) => `<section class="panel" data-panel="${t.id}">${t.html}</section>`)
    .join("")}</div>`;

  app.innerHTML = renderHero() + bar + panels + renderFooter();

  wireChecklist(app);
  wireTabs(app);
}

main();
