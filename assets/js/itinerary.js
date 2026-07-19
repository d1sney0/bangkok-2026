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
    back: "7/27 <b>JX746</b>　BKK → TPE（約 17:35 起飛 · 16:50 關櫃）",
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
          maps: [{ label: "萬怡酒店", q: "Courtyard by Marriott Bangkok Suvarnabhumi Airport" }] },
        { time: "18:00–20:00", title: "晚餐（已安排）", loc: "飯店", note: "固定行程。", fixed: true },
        { time: "20:00–22:00", title: "附近小逛＋放鬆", loc: "CHAGÓ／Relax Place (Little Walk Lat Krabang)／Robinson Lifestyle Suvarnabhumi",
          note: "若搭機疲累，建議只安排 CHAGÓ＋Relax Place 按摩。",
          maps: [
            { label: "CHAGÓ", q: "CHAGO Lat Krabang Bangkok" },
            { label: "Little Walk Lat Krabang", q: "Little Walk Lat Krabang" },
            { label: "Robinson Lifestyle Suvarnabhumi", q: "Robinson Lifestyle Suvarnabhumi" },
          ] },
      ],
    },
    {
      id: "d2", date: "7/22", dow: "三", theme: "CRA Training 日", sub: "不進市區",
      slots: [
        { time: "09:00–17:00", title: "CRA Training", loc: "固定行程", note: "白天不安排額外景點。", fixed: true },
        { time: "19:00–21:00", title: "Welcome Dinner", loc: "固定行程", note: "固定行程。", fixed: true },
        { time: "21:15 後", title: "按摩放鬆", loc: "THE FOREST MASSAGE", note: "建議 Foot 或 Thai Massage，避免太晚奔波。",
          maps: [{ label: "THE FOREST MASSAGE", q: "The Forest Massage Bangkok" }] },
      ],
    },
    {
      id: "d3", date: "7/23", dow: "四", theme: "Engagement Meeting 日", sub: "Si Yaek Huatakhe",
      slots: [
        { time: "09:00–16:30", title: "Engagement Meeting", loc: "固定行程", note: "白天不安排額外景點。", fixed: true },
        { time: "17:15–18:45", title: "老運河社區咖啡／散步", loc: "Si Yaek Huatakhe Cafe & Guesthouse",
          note: "咖啡廳<span class=\"hot\">營業至 19:00</span>，請直接前往勿耽擱。貓咪遊船需事先 IG（huatakh_cat）預約，日落船班約 16:30／17:30；若想搭 17:30 場，需確認會議能否準時或提早結束。",
          maps: [{ label: "Si Yaek Huatakhe Cafe & Guesthouse", q: "Si Yaek Huatakhe Cafe and Guesthouse" }] },
        { time: "19:00–20:30", title: "晚餐／回飯店", loc: "飯店周邊",
          note: "Huatakhe 一帶 19:00 後店家多已打烊，晚餐建議回飯店附近解決。隔天要搬飯店，早點休息。" },
      ],
    },
    {
      id: "d4", date: "7/24", dow: "五", theme: "搬飯店＋Sukhumvit 逛街＋按摩", sub: "",
      slots: [
        { time: "上午", title: "退房／移動至 Carlton", loc: "曼谷素坤逸卡爾頓酒店", note: "可先寄放行李。",
          maps: [{ label: "Carlton Hotel Sukhumvit", q: "Carlton Hotel Bangkok Sukhumvit" }] },
        { time: "12:30–15:30", title: "Sukhumvit 商圈慢慢逛", loc: "EmQuartier／Gourmet Market／Villa Market／Thong Smith",
          note: "午餐 Thong Smith，逛街時間保留久一點。",
          maps: [
            { label: "EmQuartier", q: "EmQuartier Bangkok" },
            { label: "Thong Smith", q: "Thong Smith EmQuartier" },
          ] },
        { time: "16:00–18:00", title: "按摩（已預約）", loc: "AThai&massage (by aspa)", note: "固定行程。", fixed: true },
        { time: "18:30–20:00", title: "晚餐", loc: "NEUA.NEUR.BKK", note: "<span class=\"hot\">熱門店，請先訂位（18:30）。</span>",
          maps: [{ label: "NEUA.NEUR.BKK", q: "NEUA NEUR BKK Bangkok" }] },
        { time: "20:00 後", title: "逛街", loc: "CentralWorld", note: "可先為 7/26 伴手禮探路。",
          maps: [{ label: "CentralWorld", q: "CentralWorld Bangkok" }] },
      ],
    },
    {
      id: "d5", date: "7/25", dow: "六", theme: "泰服拍照日（動線已更新）＋夜市", sub: "",
      slots: [
        { time: "07:00", title: "出門", loc: "飯店 → Bangkok & Blush", note: "早出門避開人潮與酷熱。" },
        { time: "07:45–08:45", title: "泰服租借＋妝髮", loc: "Bangkok & Blush",
          note: "預約最早時段；含妝髮實際需 45–60 分鐘，原排 30 分鐘太趕。同時確認歸還時間與押金規定。",
          maps: [{ label: "Bangkok & Blush", q: "Bangkok & Blush" }] },
        { time: "08:45–10:15", title: "Wat Arun 拍照", loc: "鄭王廟＋Khanom Bueang - Wat Arun", highlight: true,
          note: "<span class=\"hot\">拍照動線</span>：店面位於 Wat Arun 一帶，先拍 Wat Arun 再過河，免走回頭路。早上人少、光線佳。",
          maps: [
            { label: "Wat Arun 鄭王廟", q: "Wat Arun Bangkok" },
            { label: "Khanom Bueang - Wat Arun", q: "Khanom Bueang Wat Arun" },
          ] },
        { time: "10:30–13:00", title: "過河→經典觀光", loc: "大皇宮／玉佛寺／臥佛寺",
          note: "<span class=\"hot\">大皇宮 15:30 停止售票</span>，務必於下午前拍完。泰服需遮肩過膝，先確認款式合規。",
          maps: [
            { label: "大皇宮 Grand Palace", q: "Grand Palace Bangkok" },
            { label: "臥佛寺 Wat Pho", q: "Wat Pho Bangkok" },
          ] },
        { time: "13:00–14:00", title: "午餐", loc: "Jae Wan（彈性）", note: "視排隊狀況調整。",
          maps: [{ label: "Jae Wan", q: "Jae Wan restaurant Bangkok" }] },
        { time: "14:00–14:30", title: "歸還泰服", loc: "Bangkok & Blush", note: "回程順路歸還。",
          maps: [{ label: "Bangkok & Blush", q: "Bangkok & Blush" }] },
        { time: "15:00–18:00", title: "回飯店休息", loc: "Carlton Hotel Sukhumvit", note: "七月炎熱＋午後易雷陣雨，此時段留室內。",
          maps: [{ label: "Carlton Hotel Sukhumvit", q: "Carlton Hotel Bangkok Sukhumvit" }] },
        { time: "18:30 後", title: "夜市", loc: "JODD FAIRS Ratchada",
          note: "<span class=\"hot\">地點</span>：MRT 泰國文化中心站旁（非舊 Rama 9 址），每日 17:00–01:00。隔壁即 The One Ratchada 火車夜市，可順逛。",
          maps: [
            { label: "JODD FAIRS Ratchada", q: "Jodd Fairs Rama 9 Ratchada" },
            { label: "The One Ratchada", q: "The One Ratchada" },
          ] },
      ],
    },
    {
      id: "d6", date: "7/26", dow: "日", theme: "吃貨＋血拚＋夜市日", sub: "",
      slots: [
        { time: "10:00–12:00", title: "早午餐", loc: "Baan Prapa", note: "環境漂亮，悠閒安排。",
          maps: [{ label: "Baan Prapa", q: "Baan Prapa Bangkok" }] },
        { time: "12:30–16:30", title: "伴手禮採買／逛街", loc: "Big C Ratchadamri／CentralWorld",
          note: "室內行程，剛好避開午後雷陣雨；Big C 一次買齊。",
          maps: [
            { label: "Big C Ratchadamri", q: "Big C Ratchadamri" },
            { label: "CentralWorld", q: "CentralWorld Bangkok" },
          ] },
        { time: "16:30–18:00", title: "回飯店整理／休息", loc: "Carlton Hotel Sukhumvit", note: "避免晚餐與夜市前太累。",
          maps: [{ label: "Carlton Hotel Sukhumvit", q: "Carlton Hotel Bangkok Sukhumvit" }] },
        { time: "18:00–19:30", title: "晚餐（依訂位結果定案）", loc: "Jeh O Chula 或 Kuay Jab Mr. Joe",
          note: "Jeh O 17:30 開始營業、<span class=\"hot\">現場排 1–2 小時</span>；請先用 QueQ App 或 Klook 訂位，訂不到就直接去 Mr. Joe，勿現場賭排隊，否則趕不上夜市。",
          maps: [
            { label: "Jeh O Chula", q: "Jeh O Chula" },
            { label: "Kuay Jab Mr. Joe", q: "Kuay Jab Mr Joe Bangkok" },
          ] },
        { time: "20:00 後", title: "夜市", loc: "Train Night Market Srinagarindra",
          note: "已確認週日有營業（週四–日 17:00–01:00）。MRT 黃線 Suan Luang Rama 9 站步行約 10 分鐘；回程建議叫 Grab（黃線末班約 24:00 前）。",
          maps: [{ label: "Train Night Market Srinagarindra", q: "Train Night Market Srinagarindra" }] },
      ],
    },
    {
      id: "d7", date: "7/27", dow: "一", theme: "回程日", sub: "Asoke 周邊補貨",
      slots: [
        { time: "09:30–12:30", title: "輕鬆採買／散步", loc: "Foodland Sukhumvit 16／butter bakery asoke／Terminal 21",
          note: "不排遠點；午餐在 Terminal 21 快速解決。",
          maps: [
            { label: "Foodland Sukhumvit 16", q: "Foodland Sukhumvit 16" },
            { label: "butter bakery asoke", q: "Butter Bakery Asoke" },
            { label: "Terminal 21", q: "Terminal 21 Asok" },
          ] },
        { time: "13:15", title: "離開市區前往機場", loc: "Asoke → BKK", highlight: true,
          note: "<span class=\"hot\">JX746 約 17:35 起飛、16:50 關櫃。</span>含退稅（先海關驗貨再托運）建議 14:30 前抵機場。",
          maps: [{ label: "Suvarnabhumi Airport", q: "Suvarnabhumi Airport" }] },
      ],
    },
  ],
  costume: [
    { tier: "首選", name: "Bangkok & Blush", first: true,
      desc: "已在收藏清單中，店面位於老城區 Wat Arun 一帶，官網（SimplyBook）可預約時段。請預約最早時段，並依更新後動線：先 Wat Arun、後大皇宮。",
      q: "Bangkok & Blush" },
    { tier: "備選", name: "Sense of Thai Costume",
      desc: "若 Bangkok & Blush 時段不理想可作備選（熱門店需提前預約）。價格與方案以店家實際公告為準。",
      q: "Sense of Thai Costume Bangkok" },
  ],
  checklist: [
    { t: "Bangkok & Blush", d: "官網預約最早時段，確認店面確切位置、歸還時間、大皇宮服裝合規。" },
    { t: "Jeh O Chula", d: "QueQ App 或 Klook 訂位（7/26 晚）；訂不到即定案 Kuay Jab Mr. Joe。" },
    { t: "NEUA.NEUR.BKK", d: "訂位 7/24 18:30。" },
    { t: "貓咪遊船（如要搭）", d: "IG huatakh_cat 預約 7/23 17:30 場，並確認會議可否準時結束。" },
    { t: "下載 Grab／Bolt", d: "7/26 Train Night Market 回程備用。" },
    { t: "退稅文件", d: "購物時索取 P.P.10 表格＋收據，回程日先至海關驗貨再托運。" },
  ],
  trim: [
    { b: "Robinson Lifestyle Suvarnabhumi", d: "若抵達日太累可刪。" },
    { b: "Smoothies Drink Healthy", d: "非核心景點，順路再去。" },
    { b: "Gourmet Market／Villa Market／Foodland", d: "性質重複，保留 1–2 個即可。" },
    { b: "朱拉隆功夜市", d: "已排 JODD FAIRS Ratchada 與 Train Night Market，可不必特別排。" },
  ],
  top5: [
    "Wat Arun＋泰服拍照（新動線：早上先拍）",
    "EmQuartier／CentralWorld 逛街",
    "Big C Ratchadamri 伴手禮採買",
    "Train Night Market Srinagarindra",
    "Si Yaek Huatakhe Cafe & Guesthouse",
  ],
  collection: {
    name: "Zenith曼谷 IM",
    curator: "喵金魚",
    count: 37,
    url: "https://maps.app.goo.gl/SyKhhSUxBqfiiNby9?g_st=i",
    // 清單中「行程尚未排入」的口袋名單；已排入日程的點不重複列。完整 37 點見上方連結。
    pocket: [
      { name: "Mae Varee", cat: "芒果糯米飯（名店）", q: "Mae Varee Thonglor Bangkok" },
      { name: "Karun Thai Tea", cat: "泰式茶飲 · CentralWorld", q: "Karun Thai Tea CentralWorld Bangkok" },
      { name: "Ying Charoen Market", cat: "鮮食市場", q: "Ying Charoen Market Bangkok" },
      { name: "班蘭蛋捲", cat: "泰式點心", q: "班蘭蛋捲 曼谷" },
      { name: "Sudjai ทองม้วนสด", cat: "泰式蛋捲", q: "Sudjai thong muan sod Bangkok" },
      { name: "Let's Relax Spa", cat: "水療（Ella 推薦）", q: "Let's Relax Spa Bangkok" },
      { name: "TYME Restaurant", cat: "餐廳", q: "TYME Restaurant Bangkok" },
      { name: "Mae Klong Hua Pla Mo Fai", cat: "魚頭火鍋", q: "Mae Klong Hua Pla Mo Fai Bangkok" },
      { name: "呑武里市場", cat: "河邊市場", q: "Thonburi Market Bangkok" },
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
  return `<div class="${cls}">
    <div class="slot__dot"></div>
    <div class="slot__body">
      <div class="slot__top"><span class="slot__time">${s.time}</span><span class="slot__title">${s.title}</span>${tag}</div>
      ${loc}${note}${renderMaps(s.maps)}
    </div>
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
    <div class="timeline">${slots}</div>
  </section>`;
}

function renderCostume() {
  const cards = TRIP.costume
    .map((c) => `<div class="costume__card${c.first ? " is-first" : ""}">
      <div class="costume__tier">${c.tier}</div>
      <div class="costume__name">${c.name}</div>
      <div class="costume__desc">${c.desc}</div>
      <div class="maps"><a class="mapchip" href="${map(c.q)}" target="_blank" rel="noopener">🗺 ${c.name}</a></div>
    </div>`)
    .join("");
  return `<section class="wrap">
    ${sectionHead("THAI COSTUME", "泰服租借建議")}
    <div class="costume">${cards}</div>
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

function renderTrim() {
  const items = TRIP.trim.map((t) => `<li><b>${t.b}</b>：${t.d}</li>`).join("");
  return `<section class="wrap">
    ${sectionHead("OPTIONAL", "可視體力刪減的點")}
    <div class="trim"><ul>${items}</ul></div>
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
    { id: "prep", pill: tab("prep", "PREP", "行前"), html: renderCostume() + renderChecklist() + renderTrim() },
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
