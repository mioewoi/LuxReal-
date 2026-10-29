const ASSET = "./assets/";
const AGENT_WEB_URL = ""; // 在此填入 LuxReal 专业短剧 Agent 的实际 Web 地址。
const navAssets = {
  theatre: { normal: `${ASSET}nav-theatre-normal.svg`, active: `${ASSET}nav-theatre-active.svg` },
  fast: { normal: `${ASSET}nav-fast-normal.svg`, active: `${ASSET}nav-fast-active.svg` },
  profile: { normal: `${ASSET}nav-profile-normal.svg`, active: `${ASSET}nav-profile-active.svg` },
};
const scriptLibraryItems = [
  { title: "囚日之神", poster: `${ASSET}embedded-04.png`, duration: 5, actor: "凯伦", genre: "古风" },
  { title: "王的债务", poster: `${ASSET}poster-kings-debt.png`, duration: 9, actor: "白", genre: "穿越" },
  { title: "被保护的敌人", poster: `${ASSET}poster-protected-enemy.png`, duration: 4, actor: "蓝", genre: "悬疑" },
  { title: "皇家血脉", poster: `${ASSET}embedded-02.png`, duration: 15, actor: "雅皮士精神", genre: "热血" },
  { title: "疯狂父亲", poster: `${ASSET}poster-broke-moms-secret.png`, duration: 10, actor: "洛城机密", genre: "科幻" },
  { title: "被保护的敌人", poster: `${ASSET}poster-protected-enemy.png`, duration: 5, actor: "洛城机密", genre: "悬疑" },
  { title: "王的债务", poster: `${ASSET}poster-kings-debt.png`, duration: 5, actor: "雅皮士精神", genre: "奇幻" },
  { title: "囚日之神", poster: `${ASSET}embedded-04.png`, duration: 8, actor: "洛城机密", genre: "古风" },
  { title: "疯狂父亲", poster: `${ASSET}poster-broke-moms-secret.png`, duration: 7, actor: "洛城机密", genre: "热血" },
];
const scriptLibraryCategories = ["全部", "悬疑", "科幻", "穿越", "古风", "热血"];

const templates = [
  {
    id: "prisoner-of-the-sun-god",
    title: "囚日之神",
    english: "PRISONER OF THE SUN GOD",
    subtitle: "她看见真相，他能熔化钢铁。",
    genre: "奇幻 · 复仇 · 高能反转",
    poster: `${ASSET}embedded-04.png`,
    duration: 45,
    cast: ["凯伦", "埃莉奥"],
    synopsis: "伏五年，埃莉奥褪去天真，借边境战功回归宫廷。此时的凯伦王权不稳，苛政失心，朝堂派系林立、矛盾丛生。埃莉奥伪装成温和武将，暗中收拢旧部、策反朝臣，步步瓦解王权势力。她识破王室的私情与阴谋，在加冕周年大典上揭露罪证，亲手粉碎夺权阴谋。",
  },
  {
    id: "royal-blood",
    title: "皇家血脉",
    english: "THE FIGHTERS · ROYAL BLOOD",
    subtitle: "一场关于王冠与命运的决战。",
    genre: "动作 · 奇幻 · 王室",
    poster: `${ASSET}embedded-02.png`,
    duration: 60,
    cast: ["亚瑟", "莉娜"],
    synopsis: "血月降临，沉睡的古老力量再次苏醒。被流放的王子与失去记忆的守护者在王城重逢，必须在午夜钟声敲响前找回王室信物，揭开父辈留下的真相。",
  },
  {
    id: "crazy-father",
    title: "疯狂父亲",
    english: "THE BILLIONAIRE'S CRAZY FATHER",
    subtitle: "每一个秘密，都是为了保护你。",
    genre: "家庭 · 悬疑 · 反转",
    poster: `${ASSET}embedded-05.png`,
    duration: 30,
    cast: ["艾伦", "索菲"],
    synopsis: "一封迟来的信，让女儿重新走进父亲混乱的世界。那些看似荒唐的举动背后，藏着一段被尘封多年的守护与牺牲。她决定在家族晚宴上揭开所有谜底。",
  },
  {
    id: "kings-debt",
    title: "王的债务",
    english: "THE BEAST · KING'S DEBT",
    subtitle: "一纸债约，牵动王国与两个人的命运。",
    genre: "奇幻 · 王室 · 命运",
    poster: `${ASSET}poster-kings-debt.png`,
    duration: 45,
    cast: ["白"],
    synopsis: "一纸突如其来的债约，将王室的命运与一位异乡人紧紧相连。为了守住约定，他们必须在权力纷争中揭开王室债务背后的秘密。",
  },
  {
    id: "protected-enemy",
    title: "被保护的敌人",
    english: "PROTECTED BY THE ENEMY",
    subtitle: "最危险的守护，始于一场意外相逢。",
    genre: "悬疑 · 爱情 · 反转",
    poster: `${ASSET}poster-protected-enemy.png`,
    duration: 45,
    cast: ["蓝"],
    synopsis: "一名身份成谜的女子被迫与曾经的敌人同行。随着追踪者逼近，两人从互相试探到彼此守护，也逐步发现这场追捕指向一桩被掩盖的阴谋。",
  },
  {
    id: "broke-moms-secret",
    title: "亿万富翁母亲的秘密",
    english: "THE BROKE MOM'S BILLION-DOLLAR SECRET",
    subtitle: "他们笑她平凡，却不知道她真正是谁。",
    genre: "家庭 · 逆袭 · 悬疑",
    poster: `${ASSET}poster-broke-moms-secret.png`,
    duration: 45,
    cast: ["母亲", "女儿"],
    synopsis: "被所有人轻视的母亲一直守着家人的秘密。在一场意外重逢后，她必须在家族利益与亲情之间作出选择，也让曾经嘲笑她的人看清真相。",
  },
];

const scriptRecommendations = templates.map((template, templateIndex) => ({
  scriptId: template.id,
  title: template.title,
  poster: template.poster,
  templateIndex,
}));
// Add only this script's own story frames to previews; its cover is the single-image fallback.
const detailPreviewsByTemplate = templates.map((template) => ({ scriptId: template.id, images: template.previews || [template.poster] }));

function detailPreviewsFor(template) {
  return detailPreviewsByTemplate.find((entry) => entry.scriptId === template.id)?.images || [];
}

const steps = [
  "AI 理解创作需求",
  "确认剧本、出演资产与风格参数",
  "拆分剧本为叙事节奏单元",
  "生成详细镜头提示词",
  "规划视频任务",
];
const modelOptions = ["S2.0", "Sora 2", "Veo 3.1", "Kling 2.5"];
const modelReferenceLimits = { "S2.0": 9, "Sora 2": 1, "Veo 3.1": 3, "Kling 2.5": 1 };
const ratioOptions = ["9:16", "16:9", "1:1"];
const qualityOptions = ["720p", "1080p"];
const durationOptions = [15, 20, 30, 45, 60, 90, 120, 180];
const styleOptions = ["电影质感", "微短剧", "梦幻插画", "复古胶片"];
const defaultActors = [
  { name: "凯伦 · 王", src: templates[0].poster, position: "36% center" },
  { name: "埃莉奥", src: templates[0].poster, position: "71% center" },
];

const state = {
  page: "home",
  homeTab: "script",
  inputActive: false,
  scriptLibraryOpen: false,
  scriptLibraryCategory: "全部",
  scriptLibraryQuery: "",
  scriptLibrarySearch: false,
  bottomTab: "fast",
  profileSection: "works",
  profileWorkTab: "project",
  profileUnreadCount: 0,
  projects: [],
  homeBannerIndex: 0,
  selectedTemplateIndex: 0,
  previewIndex: 0,
  isFreePrompt: false,
  prompt: getStoredPrompt(),
  freeStory: "",
  actors: defaultActors.map((actor) => ({ ...actor })),
  model: "S2.0",
  ratio: "9:16",
  quality: "720p",
  duration: 45,
  style: "电影质感",
  modal: null,
  assetSource: "recent",
  assetLibraryScope: "mine",
  pickedAsset: null,
  selectedAssets: [],
  promptAssets: [],
  phase: "idle",
  step: 0,
  extraNote: "",
  noteDraft: "",
  smartMode: "fast",
  renderPercent: 0,
  isPlaying: false,
  feedIndex: 0,
  liked: {},
  toastTimer: null,
  analysisTimer: null,
  renderTimer: null,
  previewTimer: null,
  uploadedLabel: "",
  projectCount: 0,
  homeDraft: {
    prompt: getStoredPrompt(),
    promptAssets: [],
    model: "S2.0",
    ratio: "9:16",
    quality: "720p",
    duration: 45,
    style: "电影质感",
  },
  configContext: null,
  assetContext: null,
};

const app = document.getElementById("app");
const overlayRoot = document.getElementById("overlay-root");
const toast = document.getElementById("toast");
let renderedPage = null;
let activeCarouselGesture = null;
let suppressedCarouselClickUntil = 0;
let carouselWheelDelta = 0;
let carouselWheelLocked = false;
let carouselWheelTimer = null;

function syncDomNode(current, next) {
  if (current.nodeType !== next.nodeType || (current.nodeType === Node.ELEMENT_NODE && current.tagName !== next.tagName)) {
    current.replaceWith(next.cloneNode(true));
    return;
  }
  if (current.nodeType === Node.TEXT_NODE) {
    if (current.nodeValue !== next.nodeValue) current.nodeValue = next.nodeValue;
    return;
  }
  if (current.nodeType !== Node.ELEMENT_NODE) return;

  for (const attribute of [...current.attributes]) {
    if (!next.hasAttribute(attribute.name)) current.removeAttribute(attribute.name);
  }
  for (const attribute of [...next.attributes]) {
    if (current.getAttribute(attribute.name) !== attribute.value) current.setAttribute(attribute.name, attribute.value);
  }

  const active = current === document.activeElement;
  const selectionStart = active && "selectionStart" in current ? current.selectionStart : null;
  const selectionEnd = active && "selectionEnd" in current ? current.selectionEnd : null;
  const oldChildren = [...current.childNodes];
  const newChildren = [...next.childNodes];
  for (let index = 0; index < newChildren.length; index += 1) {
    const newChild = newChildren[index];
    const oldChild = oldChildren[index];
    if (oldChild) syncDomNode(oldChild, newChild);
    else current.append(newChild.cloneNode(true));
  }
  while (current.childNodes.length > newChildren.length) current.lastChild.remove();

  if ((current instanceof HTMLInputElement || current instanceof HTMLTextAreaElement) && !active && current.value !== next.value) {
    current.value = next.value;
  } else if (active && selectionStart !== null && current.setSelectionRange) {
    current.setSelectionRange(selectionStart, selectionEnd);
  }
}

function syncMarkup(root, html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  const oldChildren = [...root.childNodes];
  const newChildren = [...template.content.childNodes];
  for (let index = 0; index < newChildren.length; index += 1) {
    const oldChild = oldChildren[index];
    if (oldChild) syncDomNode(oldChild, newChildren[index]);
    else root.append(newChildren[index].cloneNode(true));
  }
  while (root.childNodes.length > newChildren.length) root.lastChild.remove();
}

const icon = {
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5-8.8 10-8.8 10s-8.8-5-8.8-10A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/></svg>',
  share: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V3m0 0L7.5 7.5M12 3l4.5 4.5M5 13v7h14v-7"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5h3v14H8zM15 5h3v14h-3z"/></svg>',
  theatre: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3" width="17" height="18" rx="3"/><path d="m10 8 6 4-6 4V8Z"/></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/></svg>',
  profile: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="3.5"/><path d="M4 21a8 8 0 0 1 16 0H4Z"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
};

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function getStoredPrompt() {
  try { return window.sessionStorage.getItem("luxreal.prompt") || ""; }
  catch { return ""; }
}

function storePrompt(value) {
  try { window.sessionStorage.setItem("luxreal.prompt", value); }
  catch { /* The in-memory prompt still remains available if storage is blocked. */ }
}

function defaultHomeDraft() {
  return { prompt: "", promptAssets: [], model: "S2.0", ratio: "9:16", quality: "720p", duration: 45, style: "电影质感" };
}

function resetHomeDraft() {
  state.homeDraft = defaultHomeDraft();
  storePrompt("");
}

function activeConfigState() {
  return state.configContext === "home" ? state.homeDraft : state;
}

function activeAssetModel() {
  return state.assetContext === "home" ? state.homeDraft.model : state.model;
}

function currentTemplate() {
  if (state.isFreePrompt) {
    return {
      title: "自由创作 · 新短片",
      english: "YOUR STORY",
      subtitle: "从一个想法，开始一段故事。",
      genre: "自主创作",
      poster: state.promptAssets[0]?.src || `${ASSET}embedded-01.png`,
      cast: [],
      synopsis: state.freeStory || "输入你的故事想法，LuxReal 会协助整理成短片剧本。",
    };
  }
  return templates[state.selectedTemplateIndex] || templates[0];
}

function statusBar() {
  return `<div class="status-bar"><span>9:41</span><span class="system-icons" aria-hidden="true"><svg viewBox="0 0 22 14"><rect x="1" y="9" width="4" height="5" rx="1" fill="currentColor"/><rect x="6.5" y="6" width="4" height="8" rx="1" fill="currentColor"/><rect x="12" y="3" width="4" height="11" rx="1" fill="currentColor"/><rect x="17.5" width="4" height="14" rx="1" fill="currentColor"/></svg><svg viewBox="0 0 20 14"><path d="M1 4a14 14 0 0 1 18 0M4 7.5a9 9 0 0 1 12 0M7.3 11a4 4 0 0 1 5.4 0" fill="none" stroke="currentColor" stroke-width="2.6"/><circle cx="10" cy="13" r="1" fill="currentColor"/></svg><svg class="battery" viewBox="0 0 28 14"><rect x=".6" y=".6" width="24" height="12.8" rx="2.8" fill="none" stroke="currentColor" stroke-opacity=".4" stroke-width="1.2"/><path d="M26 4.5v5a2.5 2.5 0 0 0 0-5Z" fill="currentColor" fill-opacity=".4"/><rect x="2.5" y="2.5" width="20" height="9" rx="1.4" fill="currentColor"/></svg></span></div>`;
}

function modeTabs() {
  const tabs = [["script", "剧本快拍"], ["3d", "3D片场"], ["agent", "专业短剧Agent"]];
  return `<nav class="mode-tabs" aria-label="创作方式">${tabs.map(([key, label]) => `<button class="mode-tab ${state.homeTab === key ? "active" : ""}" type="button" data-mode="${key}">${label}</button>`).join("")}</nav>`;
}

function bottomNav(selected = "fast") {
  return `<nav class="bottom-nav" aria-label="主导航">
    ${["theatre", "fast", "profile"].map((key) => `<button type="button" class="nav-item ${selected === key ? "active" : ""}" data-nav="${key}"><img src="${navAssets[key][selected === key ? "active" : "normal"]}" alt="" width="24" height="24"/><span>${key === "theatre" ? "剧场" : key === "fast" ? "快拍" : "我的"}</span></button>`).join("")}
  </nav>`;
}

function cardMarkup(index, position) {
  const t = templates[(index + templates.length) % templates.length];
  const button = position === "center" ? `<button class="cover-create" type="button" data-action="open-detail">创作视频</button>` : "";
  return `<article class="cover-card ${position}" data-action="open-detail" data-script-id="${t.id}" data-card-index="${index}" aria-label="${escapeHtml(t.title)}">
    <img src="${t.poster}" alt="${escapeHtml(t.english)} 海报" draggable="false" />
    ${position === "center" ? `<div class="cover-copy"><div class="cover-copy-inner"><span class="cover-subtitle">“ ${escapeHtml(t.subtitle)} ”</span>${button}</div></div>` : ""}
  </article>`;
}

function homeScript() {
  if (state.inputActive) return homeInputActive();
  const prev = (state.homeBannerIndex + templates.length - 1) % templates.length;
  const next = (state.homeBannerIndex + 1) % templates.length;
  const composer = `<form class="composer" id="prompt-form" aria-label="输入创作想法">
    <button class="composer-plus" type="button" data-action="open-assets" aria-label="上传资产"><img src="${ASSET}add.svg" alt="" /></button>
    <input id="prompt-input" name="prompt" autocomplete="off" data-action="activate-input" value="${escapeHtml(state.homeDraft.prompt)}" placeholder="选择你喜欢的剧本，开始拍摄" aria-label="输入短片创作想法" />
    <button class="send-button" type="submit" aria-label="开始创作"><img src="${ASSET}arrow-up.svg" alt="" /></button>
  </form>`;
  return `<section class="screen home-script" aria-label="剧本快拍首页">
    ${statusBar()}${modeTabs()}
    <div class="card-carousel" id="card-carousel" role="region" aria-roledescription="carousel" aria-label="推荐剧本轮播" tabindex="0">
      ${cardMarkup(prev, "side left")}${cardMarkup(next, "side right")}${cardMarkup(state.homeBannerIndex, "center")}
    </div>
    <p class="swipe-hint">左右滑动查看更多</p>
    <div class="film-reel" aria-hidden="true"><img src="${ASSET}embedded-01.png" alt="" /></div>
    <div class="home-prompt-links"><button type="button" data-action="open-templates">拍个萌宝砸存钱罐视频 <span>↙</span></button><button type="button" data-action="open-templates">拍个欲盖弥彰趣味视频 <span>↙</span></button></div>
    ${composer}${bottomNav("fast")}
  </section>`;
}

function scriptLibraryRow() {
  return `<div class="script-library-row" aria-label="推荐剧本">
    <button class="script-library-entry" type="button" data-action="open-templates" aria-label="打开剧本库"><img class="library-grid-icon" src="${ASSET}script-library-icon.svg" alt="" /><small>剧本库</small></button>
    ${scriptRecommendations.map((item, index) => `<button class="script-recommendation" type="button" data-action="choose-recommendation" data-recommendation="${index}"><img src="${item.poster}" alt=""/><small>${item.title}</small></button>`).join("")}
  </div>`;
}

function referenceLimitForModel(model = state.model) {
  return modelReferenceLimits[model] ?? 1;
}

function homeInputActive() {
  const hasReferenceImages = state.homeDraft.promptAssets.length > 0;
  const referenceImages = hasReferenceImages ? `<div class="active-reference-strip" aria-label="已添加参考图">${state.homeDraft.promptAssets.map((asset, index) => `<div class="active-reference-item"><img src="${asset.src}" alt="参考图 ${index + 1}"/><span>@图片${index + 1}</span><button type="button" data-action="remove-reference" data-reference-index="${index}" aria-label="移除参考图 ${index + 1}">×</button></div>`).join("")}</div>` : "";
  return `<section class="screen home-input-active ${state.scriptLibraryOpen ? "library-open" : ""}" aria-label="输入创作想法">
    ${statusBar()}<div class="credit-pill">✦ 10&nbsp; 充值享优惠</div>
    <button class="input-close" type="button" data-action="exit-input" aria-label="返回首页">×</button>
    <div class="input-library-control"><button class="script-library-toggle ${state.scriptLibraryOpen ? "expanded" : ""}" type="button" data-action="toggle-script-library" aria-expanded="${state.scriptLibraryOpen}" aria-label="${state.scriptLibraryOpen ? "收起" : "展开"}剧本库"><img src="${ASSET}script-recommendations-toggle.svg" alt="" /></button></div>
    ${state.scriptLibraryOpen ? scriptLibraryRow() : ""}
    <form class="active-input-form ${hasReferenceImages ? "has-reference-images" : ""}" id="prompt-active-form" aria-label="编辑创作想法">
      ${referenceImages}
      <textarea id="prompt-input-active" autocomplete="off" placeholder="上传素材或角色，使用 @ 调用已添加素材，尝试参考生成、编辑、改风格，生成下镜、首尾帧等创作。" aria-label="输入短片创作想法">${escapeHtml(state.homeDraft.prompt)}</textarea>
      <div class="active-input-toolbar"><button class="active-plus" type="button" data-action="open-assets" aria-label="添加参考图，最多 ${referenceLimitForModel(state.homeDraft.model)} 张"><img src="${ASSET}add.svg" alt="" /></button><button class="style-library-chip" type="button" data-action="open-style" aria-label="风格库"><img src="${templates[0].poster}" alt="" /></button><button class="active-config" type="button" data-action="config" data-config="model"><img class="model-icon" src="${ASSET}script-library-icon.svg" alt="" /><span>${escapeHtml(state.homeDraft.model)}</span></button><button class="active-config" type="button" data-action="config" data-config="video">${state.homeDraft.quality}&nbsp;|&nbsp;${state.homeDraft.ratio}&nbsp;|&nbsp;${state.homeDraft.duration}s⌄</button><button class="send-button active-send" type="submit" aria-label="开始创作"><img src="${ASSET}arrow-up.svg" alt="" /></button></div>
    </form>
    <img class="mobile-keyboard-placeholder" src="${ASSET}mobile-keyboard-placeholder.png" alt="" aria-hidden="true" />
  </section>`;
}

function modeLanding(kind) {
  const agent = kind === "agent";
  return `<section class="screen mode-landing" aria-label="${agent ? "专业短剧 Agent" : "3D 片场"}">
    ${statusBar()}${modeTabs()}<div class="landing-backdrop" aria-hidden="true"></div>
    <div class="landing-content">
      <span class="landing-kicker">LUXREAL · ${agent ? "PRODUCTION STUDIO" : "SPATIAL STORYTELLING"}</span>
      <h1>${agent ? "专业短剧<br/>Agent" : "3D 片场"}</h1>
      <p>${agent ? "从短片灵感到连续剧制作，在更完整的创作空间里掌控每一幕。" : "在三维空间搭建场景、调度角色，让故事从镜头走进片场。"}</p>
      <div class="landing-art"><img src="${agent ? templates[2].poster : templates[1].poster}" alt="${agent ? "专业短剧制作海报" : "3D 片场创作海报"}" /></div>
      <div class="landing-note"><span>✦</span><span><strong>${agent ? "移动端创作 · Web 端续写" : "移动端玩法 · 尽情期待"}</strong>${agent ? "短片项目可无缝衔接到 Web，继续深度创作。" : "前往 Web 端体验更完整的 3D 创作工具。"}</span></div>
      <button class="landing-action" type="button" data-action="${agent ? "open-agent" : "open-3d"}">${agent ? "了解 LuxReal 专业短剧 Agent" : "前往 Web 创作"}</button>
      <button class="landing-action secondary" type="button" data-action="back-fast">${agent ? "继续移动端短片创作" : "移动端玩法尽情期待"}</button>
    </div>
    <div class="landing-bottom">${bottomNav("fast")}</div>
  </section>`;
}

function homePage() {
  if (state.homeTab === "agent" || state.homeTab === "3d") return modeLanding(state.homeTab);
  return homeScript();
}

function castMarkup(actor, index) {
  const objectPosition = actor.position || (index === 0 ? "37% center" : "72% center");
  return `<article class="cast-card">
    <div class="cast-photo ${templates.some(template => template.poster === actor.src) ? "poster-crop" : ""}"><img src="${actor.src}" alt="${escapeHtml(actor.name)} 角色照" style="object-position:${objectPosition}" /><span class="cast-name">${escapeHtml(actor.name)}</span></div>
    <button class="swap-button" type="button" data-action="open-assets" data-actor="${index}">换人出演</button>
  </article>`;
}

function configFooter() {
  return `<footer class="detail-footer">
    <p class="footer-tip">✦ 每张图将为角色保持一致，后续镜头自动沿用</p>
    <div class="detail-controls">
      <button class="config-chip model" type="button" data-action="config" data-config="model"><img class="model-icon" src="${ASSET}script-library-icon.svg" alt="" /><span>${escapeHtml(state.model)}</span></button>
      <button class="config-chip" type="button" data-action="config" data-config="video">${state.quality} <small>|</small> ${state.ratio} <small>|</small> ${state.duration}s ⌄</button>
      <button class="start-button" type="button" data-action="start">立即开拍</button>
    </div>
  </footer>`;
}

function detailPreviewClass(index, count) {
  const rawOffset = (index - state.previewIndex + count) % count;
  const offset = rawOffset > Math.floor(count / 2) ? rawOffset - count : rawOffset;
  return offset === 0 ? "center" : `${offset < 0 ? "left" : "right"} stack-${Math.min(Math.abs(offset), 3)}${Math.abs(offset) > 3 ? " is-hidden" : ""}`;
}

function detailPosterMarkup(index, previews, title) {
  const position = detailPreviewClass(index, previews.length);
  return `<button class="detail-slide ${position}" type="button" data-action="select-detail-slide" data-slide-index="${index}" aria-label="显示第 ${index + 1} 张剧情预览" aria-current="${index === state.previewIndex}" ${position.includes("is-hidden") ? 'tabindex="-1"' : ""}>
    <img src="${previews[index]}" alt="${escapeHtml(title)} 剧情预览 ${index + 1}" draggable="false" />
  </button>`;
}

function updateDetailPreview(index) {
  const count = detailPreviewsFor(currentTemplate()).length;
  if (state.page !== "detail" || count < 2 || !Number.isInteger(index)) return;
  state.previewIndex = ((index % count) + count) % count;
  const carousel = document.getElementById("detail-carousel");
  carousel?.querySelectorAll(".detail-slide").forEach((slide, i) => {
    const position = detailPreviewClass(i, count);
    slide.className = `detail-slide ${position}`;
    slide.setAttribute("aria-current", String(i === state.previewIndex));
    slide.tabIndex = position.includes("is-hidden") ? -1 : 0;
  });
  carousel?.querySelectorAll(".detail-dots button").forEach((dot, i) => {
    dot.classList.toggle("active", i === state.previewIndex);
    dot.setAttribute("aria-current", String(i === state.previewIndex));
  });
}

function detailPage() {
  const t = currentTemplate();
  const previews = detailPreviewsFor(t);
  return `<section class="screen detail-screen" aria-label="${escapeHtml(t.title)} 剧本详情">
    ${statusBar()}<header class="back-row"><button class="icon-button" type="button" data-action="back" aria-label="返回">${icon.back}</button><h1>《${escapeHtml(t.title)}》</h1><button class="icon-button" type="button" data-action="favorite" aria-label="收藏剧本">${icon.heart}</button></header>
    <div class="detail-scroll">
      <div class="detail-hero" id="detail-carousel" data-script-id="${t.id || ""}" role="region" aria-roledescription="carousel" aria-label="${escapeHtml(t.title)} 剧情预览" tabindex="0">
        <div class="detail-poster-stack">${previews.map((_, index) => detailPosterMarkup(index, previews, t.title)).join("")}</div>
        <div class="detail-dots" role="group" aria-label="选择海报">${previews.map((_, index) => `<button type="button" class="${index === state.previewIndex ? "active" : ""}" data-action="select-detail-slide" data-slide-index="${index}" aria-label="第 ${index + 1} 张剧情预览" aria-current="${index === state.previewIndex ? "true" : "false"}"></button>`).join("")}</div>
      </div>
      <div class="cast-title"><h2>出演角色</h2></div>
      <div class="cast-list">${state.actors.map(castMarkup).join("")}</div>
      <section class="synopsis"><h2>剧本内容</h2><p>${escapeHtml(t.synopsis)}</p></section>
      <p class="detail-tip">预计成片 ${state.duration} 秒 · ${state.duration >= 30 ? "将生成智能镜头预演" : "可直接进入成片生成"}</p>
    </div>${configFooter()}
  </section>`;
}

function stepList() {
  return `<div class="step-list">${steps.map((label, index) => {
    const status = index < state.step ? "done" : index === state.step && state.phase === "running" ? "current" : state.phase !== "running" ? "done" : "";
    return `<div class="step-row ${status}"><span class="step-mark">${status === "done" ? "✓" : index + 1}</span><span>${label}</span><span class="step-state">${status === "done" ? "已完成" : status === "current" ? "处理中" : "等待中"}</span></div>`;
  }).join("")}</div>`;
}

function shotPreview() {
  return `<div class="shot-grid">
    <div class="shot"><img src="${templates[state.selectedTemplateIndex].poster}" alt="镜头预演画面：建立场景" /><span>01 · 建立场景</span></div>
    <div class="shot"><img src="${templates[(state.selectedTemplateIndex + 1) % templates.length].poster}" alt="镜头预演画面：角色入场" /><span>02 · 角色入场</span></div>
    <div class="shot"><img src="${templates[state.selectedTemplateIndex].poster}" alt="镜头预演画面：情绪反转" /><span>03 · 情绪反转</span></div>
  </div>`;
}

function progressFooter() {
  return `<div class="lui-composer-wrap"><form class="chat-composer" id="note-form"><button type="button" class="lui-plus" data-action="open-templates" aria-label="选择剧本"><img class="model-icon" src="${ASSET}script-library-icon.svg" alt="" /></button><input id="note-input" value="${escapeHtml(state.noteDraft)}" placeholder="继续补充你的创作想法" aria-label="补充创作想法"/><button type="submit" aria-label="发送补充"><img src="${ASSET}arrow-up.svg" alt="" /></button></form><span class="home-indicator"></span></div>`;
}

function creationHeader() {
  return `${statusBar()}<header class="lui-header"><button class="icon-button" type="button" data-action="back" aria-label="返回">${icon.back}</button><h1>${escapeHtml(currentTemplate().title)}</h1><button class="icon-button" type="button" data-action="project-info" aria-label="项目信息">···</button></header>`;
}

function userRequest() {
  const template = currentTemplate();
  const reference = state.isFreePrompt && !state.promptAssets.length
    ? `<span class="lui-reference-placeholder">自由创作</span>`
    : `<img src="${template.poster}" alt="${state.isFreePrompt ? "参考图" : "剧本封面"}"/>`;
  const parameters = state.isFreePrompt
    ? `${escapeHtml(state.style)} · ${state.actors.length ? `${state.actors.length} 位出演角色` : "未预设出演角色"}`
    : `${escapeHtml(state.style)} · ${state.actors.length} 位出演角色`;
  return `<div class="lui-user"><div class="lui-bubble"><div class="lui-reference">${reference}<span>《${escapeHtml(template.title)}》<small>${state.quality}　|　${state.ratio}　|　${state.duration}s　|　${escapeHtml(state.model)}</small></span></div><p>${escapeHtml(state.isFreePrompt ? state.freeStory : template.synopsis)}</p><span class="lui-parameters">${parameters}</span></div></div>`;
}

function agentOutput(title, description, content = "", pending = false) {
  return `<article class="lui-agent"><div class="lui-agent-title"><span class="lui-agent-mark ${pending ? "pending" : ""}">${pending ? "◌" : "✦"}</span><span>${title}</span><span class="lui-chevron">⌄</span></div>${description ? `<p class="lui-description">${description}</p>` : ""}${content ? `<div class="lui-bubble">${content}</div>` : ""}</article>`;
}

function taskHistory() {
  const completed = state.phase === "running" ? state.step : steps.length;
  const actorSummary = state.isFreePrompt && !state.actors.length ? "未预设出演角色" : `${state.actors.length} 位出演角色`;
  const descriptions = [
    `已理解你的创作需求，正在结合${state.isFreePrompt ? "描述与参数" : "剧本与参数"}准备拍摄。`,
    `已确认 ${actorSummary}、${escapeHtml(state.style)}、${state.ratio}、${state.quality}。`,
    `${state.isFreePrompt ? "已将创作描述整理为" : "已将剧本按叙事节奏拆分为"} 3 个叙事单元。`,
    "已为每个镜头补充景别、人物动作、光线与运镜提示词。",
    `已将相关镜头编排为 3 个视频任务，预计成片 ${state.duration} 秒。`,
  ];
  return steps.slice(0, Math.min(completed + 1, steps.length)).map((label, i) => {
    const pending = state.phase === "running" && i === state.step;
    const script = i === 2 && !pending ? `<details class="lui-script"><summary>查看叙事单元</summary>${["开场 · 建立人物与冲突", "发展 · 矛盾升级", "高潮 · 真相揭晓"].map((text, n) => `<p><b>${String(n + 1).padStart(2, "0")} ${text}</b><br/>${escapeHtml(currentTemplate().synopsis.slice(n * 40, n * 40 + 65))}</p>`).join("")}</details>` : "";
    return agentOutput(pending ? label : label.replace(/^AI /, "") + " · 已完成", pending ? "正在处理中…" : descriptions[i], script, pending);
  }).join("");
}

function smartChoices() {
  return `<div class="smart-options" role="radiogroup" aria-label="智能镜头方案">${[
    ["pro", "多宫格 PRO", "效果最佳，生成连续视频后提取关键画面帧，保持长视频连贯性", "预计 5 min"],
    ["fast", "多宫格 Fast", "效果与效率平衡，生成多宫格拼图再拆分，确保多镜头画风一致", "预计 3 min"],
    ["off", "不启用智能镜头", "直接生成成片，镜头之间的画面一致性可能降低", "直接生成"],
  ].map(([key, title, text, time]) => `<button class="smart-option ${state.smartMode === key ? "selected" : ""}" role="radio" aria-checked="${state.smartMode === key}" type="button" data-action="smart-mode" data-value="${key}"><span class="smart-option-title">${title}<i></i></span><span>${text}</span><small>${time}</small></button>`).join("")}</div>`;
}

function progressPage() {
  let phaseCard = "";
  if (state.phase === "smart-ready") {
    phaseCard = agentOutput("等待规划视频任务", "为了保证视频内容的一致性和连贯性，建议启用「智能镜头库」快速预演不同分镜的效果。请选择一种你倾向的方式：", `${smartChoices()}<p class="lui-cost">${state.smartMode === "off" ? "本次将直接生成视频" : "智能镜头预演：" + (state.smartMode === "pro" ? "36" : "18") + " 积分"}</p><button class="primary-cta lui-cta" type="button" data-action="preview">${state.smartMode === "off" ? "确认并生成成片" : "生成智能镜头预演"}</button>`);
  } else if (state.phase === "previewing" || state.phase === "preview-ready") {
    phaseCard = agentOutput(state.phase === "preview-ready" ? "智能镜头预演已完成" : "正在生成智能镜头预演", "按叙事顺序检查景别、动作连续性与情绪转折。", `${shotPreview()}<button class="primary-cta lui-cta" type="button" data-action="render" ${state.phase === "previewing" ? "disabled" : ""}>${state.phase === "previewing" ? "正在生成预演…" : "消耗 36 积分 · 生成成片"}</button>`, state.phase === "previewing");
  } else if (state.phase === "confirm") {
    phaseCard = agentOutput("视频任务规划完成", `成片约 ${state.duration} 秒，确认后将开始生成。`, `<p class="lui-cost">本次需要消耗 18 积分，请确认</p><button class="primary-cta lui-cta" type="button" data-action="render">消耗 18 积分 · 生成成片</button>`);
  }
  return `<section class="screen lui-screen" aria-label="短片创作进度">${creationHeader()}<div class="lui-scroll">${userRequest()}${taskHistory()}${state.extraNote ? agentOutput("已收到补充想法", escapeHtml(state.extraNote)) : ""}${phaseCard}</div>${progressFooter()}</section>`;
}

function renderingPage() {
  const pct = Math.round(state.renderPercent);
  const status = pct < 60 ? "正在生成视频镜头" : "正在合成画面与声音";
  return `<section class="screen lui-screen" aria-label="成片生成中">${creationHeader()}<div class="lui-scroll">${userRequest()}${agentOutput("视频任务规划已完成", `${state.duration}s · ${state.model} · ${state.quality}`)}${agentOutput("生成成片中", status, `<div class="lui-render-placeholder"><span class="lui-spinner"></span><strong>${pct}%</strong><span>${status}</span></div><div class="render-progress"><i style="width:${pct}%"></i></div>`, true)}</div>${progressFooter()}</section>`;
}

function resultPage() {
  const t = currentTemplate();
  return `<section class="screen lui-screen" aria-label="成片已完成">${creationHeader()}<div class="lui-scroll">${userRequest()}${agentOutput("生成成片已完成", "所有分镜视频片段已生成，开始合成为完整视频")}<article class="lui-agent"><div class="lui-agent-title"><span class="lui-agent-mark">✦</span><span>完整视频合成成功</span></div><div class="lui-result">
      <div class="mock-player ${state.isPlaying ? "playing" : ""}"><img src="${t.poster}" alt="${escapeHtml(t.title)} 成片预览"/><div class="player-overlay"><button class="player-play" type="button" data-action="toggle-play" aria-label="${state.isPlaying ? "暂停" : "播放"}">${state.isPlaying ? icon.pause : icon.play}</button></div><div class="player-progress"><span>${state.isPlaying ? "正在预览" : "预览成片"}</span><span>${state.duration}s · ${state.ratio}</span></div></div>
      <div class="lui-result-actions"><button type="button" data-action="continue">↻ 继续创作</button><button type="button" data-action="share">${icon.share}分享</button><button type="button" data-action="save">↓ 下载</button><button type="button" data-action="publish">${icon.share}发布</button></div><p class="lui-demo-note">当前为封面动效预览，尚未接入真实视频生成。</p></div></article></div>${progressFooter()}</section>`;
}

function feedPage() {
  return `<section class="screen feed-screen" aria-label="剧场视频流">${statusBar()}<header class="feed-header"><h1>剧场</h1><span class="eyebrow">为你发现</span></header>
    <div class="feed-scroll">${templates.map((item, index) => `<article class="feed-card"><img src="${item.poster}" alt="${escapeHtml(item.title)} 短片封面"/><div class="feed-overlay"><div class="feed-copy"><h2>${escapeHtml(item.title)}</h2><p>一段关于命运与选择的短片 · ${item.duration}s</p></div><div class="feed-actions"><button type="button" data-action="like" data-feed="${index}" aria-label="${state.liked[index] ? "取消点赞" : "点赞"} ${escapeHtml(item.title)}" aria-pressed="${!!state.liked[index]}" class="${state.liked[index] ? "liked" : ""}">${icon.heart}<span>${state.liked[index] ? "1.3k" : "1.2k"}</span></button><button type="button" data-action="share" data-feed="${index}">${icon.share}<span>分享</span></button><button type="button" data-action="follow" data-feed="${index}">${icon.spark}<span>跟拍</span></button></div></div></article>`).join("")}</div>
    <button class="feed-fab" type="button" data-action="back-fast" aria-label="开始创作">+</button>${bottomNav("theatre")}</section>`;
}

function profilePage() {
  const unreadBadge = state.profileUnreadCount > 0 ? "<i class=\"profile-badge\">" + (state.profileUnreadCount > 99 ? "99+" : state.profileUnreadCount) + "</i>" : "";
  const roleNames = [...new Set(templates.flatMap((item) => item.cast))];
  const roleCards = roleNames.map((name, index) => {
    const item = templates[index % templates.length];
    return "<button class=\"profile-role\" type=\"button\" data-action=\"profile-role\" data-role=\"" + escapeHtml(name) + "\"><img src=\"" + item.poster + "\" alt=\"" + escapeHtml(name) + " 角色资产\"/><span>" + escapeHtml(name) + "</span><small>角色资产</small></button>";
  }).join("");
  let content = "";
  if (state.profileSection === "roles") {
    content = "<div class=\"profile-role-grid\">" + roleCards + "</div>";
  } else {
    const projects = state.profileWorkTab === "published" ? [] : state.projects;
    const rows = projects.map((project, index) => "<button class=\"profile-project " + (project.unread ? "unread" : "") + "\" type=\"button\" data-action=\"open-profile-project\" data-project=\"" + index + "\"><img src=\"" + project.poster + "\" alt=\"\"/><span class=\"profile-project-copy\"><b>" + escapeHtml(project.title) + "</b><small>LuxReal Agent · " + project.duration + "s</small><span>" + (project.unread ? "生成完成 · 新项目" : "生成完成 · 交互 Demo") + "</span></span><span class=\"profile-project-mark\">" + (project.unread ? "未读" : "›") + "</span></button>").join("");
    content = rows || "<div class=\"profile-empty\"><div class=\"profile-empty-art\" aria-hidden=\"true\"><svg viewBox=\"0 0 88 88\"><path d=\"M14 47 67 15 52 72 39 53 14 47Z\" fill=\"url(#profile-blue)\"/><path d=\"m39 53 28-38-15 57-13-19Z\" fill=\"#1475ff\"/><path d=\"m39 53-4 20 17-1-13-19Z\" fill=\"#82baff\"/><defs><linearGradient id=\"profile-blue\" x1=\"18\" y1=\"18\" x2=\"64\" y2=\"68\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#d8e8ff\"/><stop offset=\"1\" stop-color=\"#397cff\"/></linearGradient></defs></svg></div><b>" + (state.profileWorkTab === "published" ? "暂无已发布作品" : state.profileWorkTab === "finished" ? "暂无成片" : "暂无项目") + "</b><span>开始创作后，你的作品会显示在这里</span></div>";
  }
  const workTabs = [["project", "项目"], ["finished", "成片"], ["published", "已发布"]];
  const mainTabs = "<nav class=\"profile-main-tabs\" aria-label=\"我的内容\"><button type=\"button\" class=\"" + (state.profileSection === "works" ? "active" : "") + "\" data-profile-section=\"works\">作品</button><button type=\"button\" class=\"" + (state.profileSection === "roles" ? "active" : "") + "\" data-profile-section=\"roles\">角色库</button></nav>";
  const subTabs = state.profileSection === "works" ? "<nav class=\"profile-work-tabs\" aria-label=\"作品分类\">" + workTabs.map(([key, label]) => "<button type=\"button\" class=\"" + (state.profileWorkTab === key ? "active" : "") + "\" data-profile-work-tab=\"" + key + "\">" + label + (key === "project" ? unreadBadge : "") + "</button>").join("") + "</nav>" : "";
  return "<section class=\"screen profile-screen\">" + statusBar() + "<div class=\"profile-content\"><header class=\"profile-heading\"><div class=\"profile-avatar\"><svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><path d=\"M11 34 54 9 42 55 31 39 11 34Z\" fill=\"#dceaff\"/><path d=\"M31 39 54 9 42 55 31 39Z\" fill=\"#4d8eff\"/><path d=\"m31 39-3 16 14 0-11-16Z\" fill=\"#8cbeff\"/></svg></div><div class=\"profile-user\"><h1>用户 404 <span aria-hidden=\"true\">↗</span></h1><button type=\"button\" data-action=\"copy-profile-id\">ID 532456644　复制</button></div><button type=\"button\" class=\"profile-credit\" data-action=\"profile-credit\">✦ 506.5K 积分</button></header><button class=\"profile-membership\" type=\"button\" data-action=\"profile-membership\"><span>♛</span><b>成为会员</b><small>大额赠送积分 & 专属权益</small><i>›</i></button>" + mainTabs + subTabs + "<div class=\"profile-view\">" + content + "</div></div>" + bottomNav("profile") + "</section>";
}
function render() {
  const samePage = renderedPage === state.page;
  const scrolling = app.querySelector('.lui-scroll, .detail-scroll, .feed-scroll, .profile-content');
  const oldScroll = scrolling?.scrollTop || 0;
  const followOutput = scrolling?.classList.contains('lui-scroll') && scrolling.scrollHeight - scrolling.scrollTop - scrolling.clientHeight < 80;
  const noteFocused = document.activeElement?.id === 'note-input';
  const noteSelection = noteFocused ? document.activeElement.selectionStart : null;
  let html;
  switch (state.page) {
    case "detail": html = detailPage(); break;
    case "progress": html = progressPage(); break;
    case "rendering": html = renderingPage(); break;
    case "result": html = resultPage(); break;
    case "feed": html = feedPage(); break;
    case "profile": html = profilePage(); break;
    default: html = homePage();
  }
  if (samePage) syncMarkup(app, html);
  else app.innerHTML = html;
  syncMarkup(overlayRoot, state.modal ? renderModal() : "");
  const newScrolling = app.querySelector('.lui-scroll, .detail-scroll, .feed-scroll, .profile-content');
  if (samePage && newScrolling) newScrolling.scrollTop = followOutput ? newScrolling.scrollHeight : oldScroll;
  renderedPage = state.page;
  if (noteFocused && !state.modal) {
    const input = document.getElementById('note-input');
    input?.focus({ preventScroll: true });
    if (input && noteSelection !== null) input.setSelectionRange(noteSelection, noteSelection);
  }
}

function openToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove("visible"), 2600);
}

function cancelGeneration() {
  clearInterval(state.analysisTimer);
  clearInterval(state.renderTimer);
  clearTimeout(state.previewTimer);
  state.analysisTimer = null;
  state.renderTimer = null;
  state.previewTimer = null;
}

function goHome(tab = "script") {
  cancelGeneration();
  state.page = "home";
  state.homeTab = tab;
  state.inputActive = false;
  state.scriptLibraryOpen = false;
  state.bottomTab = "fast";
  state.modal = null;
  render();
}

function beginFreeTask() {
  const draft = state.homeDraft;
  const prompt = String(draft.prompt || "").trim();
  if (!prompt) {
    state.inputActive = true;
    state.scriptLibraryOpen = false;
    state.modal = null;
    render();
    openToast("先写下一句故事灵感，再开始创作");
    requestAnimationFrame(() => document.getElementById("prompt-input-active")?.focus());
    return false;
  }

  state.prompt = prompt;
  state.freeStory = prompt;
  state.promptAssets = (draft.promptAssets || []).map((asset) => ({ ...asset }));
  state.model = draft.model;
  state.ratio = draft.ratio;
  state.quality = draft.quality;
  state.duration = draft.duration;
  state.style = draft.style;
  state.isFreePrompt = true;
  state.selectedTemplateIndex = 0;
  state.actors = [];
  state.inputActive = false;
  state.scriptLibraryOpen = false;
  state.selectedAssets = [];
  state.pickedAsset = null;
  state.uploadedLabel = "";
  state.assetContext = null;
  state.configContext = null;
  resetHomeDraft();
  startAnalysis();
  return true;
}

function enterDetail(scriptId = templates[state.selectedTemplateIndex].id, fromPrompt = false) {
  const index = typeof scriptId === "number" ? scriptId : templates.findIndex((template) => template.id === scriptId);
  if (!Number.isInteger(index) || index < 0 || index >= templates.length) return;
  cancelGeneration();
  state.page = "detail";
  state.inputActive = false;
  state.scriptLibraryOpen = false;
  state.bottomTab = "fast";
  state.selectedTemplateIndex = (index + templates.length) % templates.length;
  state.previewIndex = 0;
  state.isFreePrompt = fromPrompt;
  const template = currentTemplate();
  state.duration = template.duration;
  state.actors = template.cast.map((name, i) => ({ name, src: template.poster, position: i === 0 ? "35% center" : "72% center" }));
  state.modal = null;
  render();
}

function startAnalysis() {
  cancelGeneration();
  state.page = "progress";
  state.phase = "running";
  state.step = 0;
  state.extraNote = "";
  state.noteDraft = "";
  state.smartMode = "fast";
  state.modal = null;
  render();
  clearInterval(state.analysisTimer);
  state.analysisTimer = setInterval(() => {
    if (state.step < steps.length - 1) {
      state.step += 1;
      render();
    } else {
      clearInterval(state.analysisTimer);
      state.phase = state.duration >= 30 ? "smart-ready" : "confirm";
      render();
    }
  }, 820);
}

function beginSmartPreview() {
  if (state.smartMode === "off") { beginRender(); return; }
  state.phase = "previewing";
  render();
  clearTimeout(state.previewTimer);
  state.previewTimer = setTimeout(() => {
    if (state.page !== "progress") return;
    state.phase = "preview-ready";
    render();
  }, 1650);
}

function beginRender() {
  cancelGeneration();
  state.page = "rendering";
  state.renderPercent = 4;
  state.modal = null;
  render();
  clearInterval(state.renderTimer);
  state.renderTimer = setInterval(() => {
    state.renderPercent = Math.min(100, state.renderPercent + 8 + Math.random() * 12);
    render();
    if (state.renderPercent >= 100) {
      clearInterval(state.renderTimer);
      state.projectCount += 1;
      state.projects.unshift({
        title: currentTemplate().title,
        poster: currentTemplate().poster,
        templateIndex: state.selectedTemplateIndex,
        duration: state.duration,
        isFreePrompt: state.isFreePrompt,
        freeStory: state.freeStory,
        unread: true,
      });
      state.profileUnreadCount += 1;
      state.profileSection = "works";
      state.profileWorkTab = "project";
      state.page = "result";
      state.isPlaying = false;
      render();
    }
  }, 380);
}

function openConfig(type) {
  state.configContext = state.page === "home" ? "home" : "task";
  state.modal = { type: "config", category: type, subCategory: type === "video" ? "quality" : undefined };
  render();
}

function optionsFor(category) {
  if (category === "model") return [modelOptions, "视频模型", "选择用于生成镜头的视频模型"];
  if (category === "style") return [styleOptions, "画面风格", "成片视觉基调"];
  if (category === "duration") return [durationOptions.map(String), "视频时长", "短片成片时长（15–180 秒）"];
  if (category === "ratio") return [ratioOptions, "画面比例", "选择发布平台适用的画幅"];
  if (category === "quality") return [qualityOptions, "分辨率", "较高分辨率可能增加生成时间"];
  return [[], "视频参数", ""];
}

function currentChoice(category) {
  const config = activeConfigState();
  return ({ model: config.model, style: config.style, duration: String(config.duration), ratio: config.ratio, quality: config.quality })[category];
}

function renderModal() {
  const modal = state.modal;
  if (!modal) return "";
  if (modal.type === "assets") {
    const isLibrary = state.assetSource === "library";
    const isPromptReference = modal.actor === null || modal.actor === undefined;
    const referenceLimit = referenceLimitForModel(activeAssetModel());
    const referenceCount = state.promptAssets.length;
    const libraryImages = state.assetLibraryScope === "public"
      ? [templates[1].poster, templates[2].poster, templates[0].poster]
      : [templates[0].poster, templates[1].poster, templates[2].poster];
    const sourceImages = isLibrary ? libraryImages : [templates[0].poster, templates[1].poster, templates[2].poster, templates[2].poster];
    const assetImages = Array.from({ length: isLibrary ? sourceImages.length : 28 }, (_, i) => sourceImages[i % sourceImages.length]);
    const selectedAssets = state.selectedAssets || [];
    const fileTile = `<button class="asset-tile camera-tile" type="button" data-action="upload"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5h3l1.5-2h7l1.5 2h3a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 19.5H4A1.5 1.5 0 0 1 2.5 18V9A1.5 1.5 0 0 1 4 7.5Z"/><circle cx="12" cy="13" r="3.5"/></svg><span>${isLibrary ? "创建角色" : "本地相册"}</span></button>`;
    const roleNames = state.assetLibraryScope === "public" ? ["莱恩 · 王子", "索菲 · 都市", "凯伦 · 骑士"] : ["埃莉奥 · 金发", "凯伦 · 骑士", "索菲 · 都市"];
    const tiles = assetImages.map((src, i) => {
      const selectionIndex = selectedAssets.findIndex((asset) => asset.index === i && asset.src === src);
      const isSelected = isPromptReference ? selectionIndex >= 0 : state.pickedAsset?.index === i && state.pickedAsset?.src === src;
      const selectionNumber = isPromptReference ? selectionIndex + 1 : 1;
      return `<button class="asset-tile ${isSelected ? "selected" : ""}" type="button" aria-pressed="${isSelected}" data-action="pick-asset" data-asset-index="${i}" data-src="${src}" data-name="${escapeHtml(isLibrary ? roleNames[i % roleNames.length] : `最近项目 ${i + 1}`)}"${isSelected ? ` data-selection="${selectionNumber}"` : ""}><img src="${src}" alt="角色资产 ${i + 1}"/><span class="asset-name">${escapeHtml(isLibrary ? roleNames[i % roleNames.length] : "")}</span></button>`;
    }).join("");
    return `<div class="overlay-root"><div class="sheet-backdrop" data-action="dismiss"><section class="sheet" role="dialog" aria-modal="true" aria-label="选择出演角色" data-sheet="assets">
      <div class="asset-head"><button type="button" class="asset-source ${!isLibrary ? "active" : ""}" data-action="asset-tab" data-source="recent">最近项目⌄</button><button type="button" class="asset-source ${isLibrary ? "active" : ""}" data-action="asset-tab" data-source="library">角色库</button><span class="asset-head-spacer"></span><button class="sheet-close" type="button" data-action="dismiss" aria-label="关闭">×</button></div>
      ${isLibrary ? `<div class="asset-library-tabs"><button class="${state.assetLibraryScope === "mine" ? "active" : ""}" type="button" data-action="asset-scope" data-scope="mine">我的角色</button><button class="${state.assetLibraryScope === "public" ? "active" : ""}" type="button" data-action="asset-scope" data-scope="public">公共角色</button></div>` : ""}
      <div class="asset-grid ${isLibrary ? "library-asset-grid" : ""}">${fileTile}${tiles}</div>
      ${isPromptReference && selectedAssets.length ? `<div class="asset-selected-preview">${selectedAssets.map((asset, index) => `<img src="${asset.src}" alt="已选择的参考图 ${index + 1}" />`).join("")}</div>` : state.pickedAsset ? `<div class="asset-selected-preview"><img src="${state.pickedAsset.src}" alt="已选择的角色资产" /></div>` : ""}
      <div class="sheet-footer"><span>${isPromptReference ? `参考图 ${referenceCount}/${referenceLimit} · 当前模型最多添加 ${referenceLimit} 张` : state.pickedAsset ? "已选择 1 个角色 / 图片" : "最多可选择 1 个图片或角色"}</span><button class="primary-cta" type="button" data-action="confirm-asset" ${(isPromptReference ? selectedAssets.length > 0 : state.pickedAsset) ? "" : "disabled"}>完成${isPromptReference && selectedAssets.length ? ` (${selectedAssets.length})` : state.pickedAsset ? " (1)" : ""}</button></div>
      <input class="file-input" id="asset-file" type="file" accept="image/jpeg,image/png,.jpg,.jpeg,.png" ${isPromptReference ? "multiple" : ""} />
    </section></div></div>`;
  }
  if (modal.type === "config") {
    const category = modal.category === "video" ? (modal.subCategory || "quality") : modal.category;
    const [options, title, note] = optionsFor(category);
    return `<div class="overlay-root"><div class="sheet-backdrop" data-action="dismiss"><section class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title" data-sheet="config">
      <div class="sheet-head"><h2 id="sheet-title">${modal.category === "video" ? "视频参数" : title}</h2><button class="sheet-close" type="button" data-action="dismiss" aria-label="关闭">×</button></div>
      ${modal.category === "video" ? `<div class="sheet-tabs config-tabs">${[["quality", "分辨率"], ["ratio", "比例"], ["duration", "时长"], ["style", "风格"]].map(([key, label]) => `<button class="${category === key ? "active" : ""}" type="button" data-action="config-sub" data-sub="${key}">${label}</button>`).join("")}</div>` : `<p class="eyebrow">${note}</p>`}
      <div class="option-list">${options.map((option) => `<button class="option-row ${currentChoice(category) === option ? "selected" : ""}" type="button" data-action="choose-config" data-category="${category}" data-value="${option}"><span>${option}${category === "duration" ? " 秒" : ""}</span><small>${currentChoice(category) === option ? "✓ 已选择" : ""}</small></button>`).join("")}</div>
      <div class="sheet-footer"><span>${category === "duration" ? "成片时长支持 15–180 秒" : "设置将用于本次短片创作"}</span><button class="primary-cta" type="button" data-action="dismiss">完成</button></div>
    </section></div></div>`;
  }
  if (modal.type === "templates") {
    const query = state.scriptLibraryQuery.trim().toLowerCase();
    const filteredScripts = scriptLibraryItems.filter((item) => {
      const matchesCategory = state.scriptLibraryCategory === "全部" || item.genre === state.scriptLibraryCategory;
      const matchesQuery = !query || `${item.title}${item.actor}${item.genre}`.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
    const cards = filteredScripts.length ? filteredScripts.map((item, index) => {
      const templateIndex = templates.findIndex((template) => template.title === item.title);
      return `<button class="script-library-card" type="button" aria-label="选择《${escapeHtml(item.title)}》" data-action="select-template" data-template="${templateIndex >= 0 ? templateIndex : index % templates.length}"><img src="${item.poster}" alt="${escapeHtml(item.title)} 海报"/><span class="script-library-meta"><small>${item.duration}s</small><i aria-hidden="true">▥</i>${escapeHtml(item.actor)}</span></button>`;
    }).join("") : `<p class="script-library-empty">暂时没有匹配的剧本</p>`;
    return `<div class="overlay-root"><div class="sheet-backdrop" data-action="dismiss"><section class="sheet script-library-sheet" role="dialog" aria-modal="true" aria-labelledby="script-library-title" data-sheet="templates">
      <header class="script-library-head"><h2 id="script-library-title">剧本库</h2><button class="sheet-close script-library-close" type="button" data-action="dismiss" aria-label="关闭">×</button></header>
      <div class="script-library-categories" role="tablist" aria-label="剧本分类">${scriptLibraryCategories.map((category) => `<button class="script-category ${state.scriptLibraryCategory === category ? "active" : ""}" type="button" role="tab" aria-selected="${state.scriptLibraryCategory === category}" data-action="script-category" data-category="${category}">${category}</button>`).join("")}<span class="script-category-divider" aria-hidden="true"></span><button class="script-search-button ${state.scriptLibrarySearch ? "active" : ""}" type="button" data-action="toggle-script-search" aria-label="搜索剧本">⌕</button></div>
      ${state.scriptLibrarySearch ? `<input class="script-library-search" id="script-library-search" type="search" value="${escapeHtml(state.scriptLibraryQuery)}" placeholder="搜索剧本" aria-label="搜索剧本"/>` : ""}
      <div class="script-library-grid">${cards}<button class="script-library-card script-library-free" type="button" data-action="create-free"><span class="free-script-plus">+</span><strong>自由创作</strong><small>从一句想法开始</small></button></div>
    </section></div></div>`;
  }
  if (modal.type === "share") {
    return `<div class="overlay-root"><div class="sheet-backdrop" data-action="dismiss"><section class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title" data-sheet="share">
      <div class="sheet-head"><h2 id="sheet-title">分享短片</h2><button class="sheet-close" type="button" data-action="dismiss" aria-label="关闭">×</button></div><p class="eyebrow">选择平台继续发布</p><div class="share-options"><button class="share-option" type="button" data-action="share-platform" data-platform="Instagram"><span class="share-icon">◎</span><span>Instagram</span></button><button class="share-option" type="button" data-action="share-platform" data-platform="TikTok"><span class="share-icon tiktok">♪</span><span>TikTok</span></button><button class="share-option" type="button" data-action="share-platform" data-platform="YouTube"><span class="share-icon youtube">▶</span><span>YouTube Shorts</span></button></div><div class="share-link"><code>luxreal.app/short/${String(state.selectedTemplateIndex + 1).padStart(4, "0")}</code><button type="button" class="config-chip" data-action="copy-link">复制</button></div><p class="subtle-note">Demo 使用本地预览链接；平台发布能力需接入正式账号授权。</p>
    </section></div></div>`;
  }
  if (modal.type === "agent") {
    return `<div class="overlay-root"><div class="sheet-backdrop" data-action="dismiss"><section class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title" data-sheet="agent">
      <div class="sheet-head"><h2 id="sheet-title">专业短剧 Agent</h2><button class="sheet-close" type="button" data-action="dismiss" aria-label="关闭">×</button></div><p class="ai-message">移动端短片项目可以在 Web 端继续深度创作。正式 Web 地址尚未配置；补充链接后，这里会跳转至 Agent 介绍页。</p><button class="primary-cta" type="button" data-action="agent-link">${AGENT_WEB_URL ? "打开 Web 介绍页" : "Web 地址待配置"}</button>
    </section></div></div>`;
  }
  return "";
}

function modalDismissFromTarget(target) {
  return target.matches(".sheet-backdrop") || target.closest("[data-action='dismiss']");
}

function updateChoice(category, value) {
  let trimmedReferenceImages = false;
  const config = activeConfigState();
  if (category === "duration") config.duration = Number(value);
  else if (category === "model") {
    config.model = value;
    const limit = referenceLimitForModel(value);
    const assets = state.configContext === "home" ? state.homeDraft.promptAssets : state.promptAssets;
    if (assets.length > limit) {
      if (state.configContext === "home") state.homeDraft.promptAssets = assets.slice(0, limit);
      else state.promptAssets = assets.slice(0, limit);
      trimmedReferenceImages = true;
    }
  }
  else if (category === "style") config.style = value;
  else if (category === "ratio") config.ratio = value;
  else if (category === "quality") config.quality = value;
  if (state.modal?.category === "video") state.modal.subCategory = category;
  else { state.modal = null; state.configContext = null; }
  render();
  if (trimmedReferenceImages) openToast(`已按 ${value} 上限保留前 ${referenceLimitForModel(value)} 张参考图`);
}

function showShare() {
  state.modal = { type: "share" };
  render();
}

function openShareUrl(platform) {
  const urls = {
    Instagram: "https://www.instagram.com/",
    TikTok: "https://www.tiktok.com/upload",
    YouTube: "https://www.youtube.com/upload",
  };
  window.open(urls[platform], "_blank", "noopener,noreferrer");
  openToast(`已打开 ${platform}，请在平台内选择视频发布`);
}

function downloadPoster() {
  const link = document.createElement("a");
  link.href = currentTemplate().poster;
  link.download = `LuxReal-${currentTemplate().title}-封面.png`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  openToast("已下载短片封面图；Demo 尚未生成真实视频文件");
}

function handleAction(action, target) {
  switch (action) {
    case "open-detail": {
      const bannerCard = target.closest("#card-carousel [data-card-index]");
      enterDetail(bannerCard ? bannerCard.dataset.scriptId : templates[state.selectedTemplateIndex].id);
      break;
    }
    case "select-detail-slide":
      updateDetailPreview(Number(target.dataset.slideIndex));
      break;
    case "mode": break;
    case "activate-input":
      state.inputActive = true;
      state.scriptLibraryOpen = false;
      render();
      requestAnimationFrame(() => document.getElementById("prompt-input-active")?.focus());
      break;
    case "exit-input": state.inputActive = false; state.scriptLibraryOpen = false; render(); break;
    case "toggle-script-library": state.scriptLibraryOpen = !state.scriptLibraryOpen; render(); break;
    case "open-script-library": state.inputActive = true; state.scriptLibraryOpen = true; render(); break;
    case "open-templates": state.modal = { type: "templates" }; state.scriptLibraryCategory = "全部"; state.scriptLibraryQuery = ""; state.scriptLibrarySearch = false; render(); break;
    case "script-category": state.scriptLibraryCategory = target.dataset.category || "全部"; render(); break;
    case "toggle-script-search": state.scriptLibrarySearch = !state.scriptLibrarySearch; render(); requestAnimationFrame(() => document.getElementById("script-library-search")?.focus()); break;
    case "choose-recommendation":
      enterDetail(scriptRecommendations[Number(target.dataset.recommendation)]?.scriptId);
      break;
    case "select-template": enterDetail(Number(target.dataset.template)); break;
    case "create-free":
      state.modal = null;
      beginFreeTask();
      break;
    case "back":
      if (state.page === "detail") goHome("script");
      else if (state.page === "progress") {
        if (state.isFreePrompt) goHome("script");
        else { cancelGeneration(); state.page = "detail"; state.phase = "idle"; render(); }
      }
      else if (state.page === "result") goHome("script");
      else goHome("script");
      break;
    case "back-fast": goHome("script"); break;
    case "open-assets":
      if (target.dataset.actor === undefined) {
        state.inputActive = true;
        state.assetContext = state.page === "home" ? "home" : "task";
        if (state.assetContext === "home") state.promptAssets = state.homeDraft.promptAssets.map((asset) => ({ ...asset }));
        if (state.promptAssets.length >= referenceLimitForModel(activeAssetModel())) {
          render();
          openToast(`当前 ${activeAssetModel()} 最多添加 ${referenceLimitForModel(activeAssetModel())} 张参考图`);
          break;
        }
      }
      state.modal = { type: "assets", actor: target.dataset.actor === undefined ? null : Number(target.dataset.actor) };
      state.assetSource = "recent";
      state.pickedAsset = null;
      state.selectedAssets = [];
      render();
      break;
    case "asset-tab": state.assetSource = target.dataset.source; state.pickedAsset = null; state.selectedAssets = []; render(); break;
    case "asset-scope": state.assetLibraryScope = target.dataset.scope; state.pickedAsset = null; state.selectedAssets = []; render(); break;
    case "pick-asset": {
      const asset = { src: target.dataset.src, name: target.dataset.name, index: Number(target.dataset.assetIndex) };
      if (state.modal?.actor === null || state.modal?.actor === undefined) {
        const current = state.selectedAssets || [];
        const existing = current.findIndex((item) => item.index === asset.index && item.src === asset.src);
        if (existing >= 0) state.selectedAssets = current.filter((_, index) => index !== existing);
        else if (current.length < Math.max(0, referenceLimitForModel(activeAssetModel()) - state.promptAssets.length)) state.selectedAssets = [...current, asset];
        else state.assetLimitReached = true;
      } else state.pickedAsset = asset;
      render();
      if (state.assetLimitReached) {
        state.assetLimitReached = false;
        openToast(`当前 ${activeAssetModel()} 最多选择 ${referenceLimitForModel(activeAssetModel())} 张参考图`);
      }
      break;
    }
    case "upload": document.getElementById("asset-file")?.click(); break;
    case "confirm-asset":
      if (state.modal.actor === null || state.modal.actor === undefined) {
        const limit = referenceLimitForModel(activeAssetModel());
        const selected = (state.selectedAssets || []).slice(0, Math.max(0, limit - state.promptAssets.length));
        if (!selected.length) break;
        state.promptAssets = [...state.promptAssets, ...selected];
        if (state.assetContext === "home") state.homeDraft.promptAssets = state.promptAssets.map((asset) => ({ ...asset }));
      } else {
        if (!state.pickedAsset) break;
        state.actors[state.modal.actor] = { name: state.pickedAsset.name || state.uploadedLabel || "我的角色", src: state.pickedAsset.src, position: "center" };
      }
      {
        const isReferenceImage = state.modal.actor === null || state.modal.actor === undefined;
        const model = activeAssetModel();
        state.modal = null; state.pickedAsset = null; state.selectedAssets = []; state.uploadedLabel = ""; state.assetContext = null; render();
        openToast(isReferenceImage ? `已添加参考图 ${state.promptAssets.length}/${referenceLimitForModel(model)}` : "出演角色已替换");
      }
      break;
    case "remove-reference":
      if (state.page === "home") {
        state.homeDraft.promptAssets.splice(Number(target.dataset.referenceIndex), 1);
        state.promptAssets = state.homeDraft.promptAssets.map((asset) => ({ ...asset }));
      } else state.promptAssets.splice(Number(target.dataset.referenceIndex), 1);
      render();
      break;
    case "config": openConfig(target.dataset.config); break;
    case "open-style": openConfig("style"); break;
    case "config-sub": state.modal.subCategory = target.dataset.sub; render(); break;
    case "choose-config": updateChoice(target.dataset.category, target.dataset.value); break;
    case "start": startAnalysis(); break;
    case "preview": beginSmartPreview(); break;
    case "smart-mode": state.smartMode = target.dataset.value; render(); break;
    case "project-info": openToast(`${state.model} · ${state.quality} · ${state.ratio} · ${state.duration}s`); break;
    case "render": beginRender(); break;
    case "toggle-play": state.isPlaying = !state.isPlaying; render(); break;
    case "save": downloadPoster(); break;
    case "share":
      if (target.dataset.feed !== undefined) state.selectedTemplateIndex = Number(target.dataset.feed);
      showShare(); break;
    case "publish": showShare(); break;
    case "share-platform": openShareUrl(target.dataset.platform); break;
    case "copy-link":
      navigator.clipboard?.writeText(`${location.origin}${location.pathname}#short-${state.selectedTemplateIndex + 1}`)
        .then(() => openToast("短片链接已复制"))
        .catch(() => openToast("演示链接：luxreal.app/short/" + String(state.selectedTemplateIndex + 1).padStart(4, "0")));
      break;
    case "continue": enterDetail(state.selectedTemplateIndex); break;
    case "favorite": openToast("已加入剧本收藏"); break;
    case "copy-profile-id": {
      const userId = "532456644";
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(userId).then(() => openToast("用户 ID 已复制"))
          .catch(() => openToast("用户 ID：" + userId));
      } else openToast("用户 ID：" + userId);
      break;
    }
    case "profile-credit": openToast("当前可用积分：506.5K"); break;
    case "profile-membership": openToast("会员权益即将开放"); break;
    case "profile-role": openToast("角色资产详情即将开放"); break;
    case "open-profile-project": {
      const project = state.projects[Number(target.dataset.project)];
      if (!project) break;
      if (project.unread) {
        project.unread = false;
        state.profileUnreadCount = Math.max(0, state.profileUnreadCount - 1);
      }
      state.selectedTemplateIndex = project.templateIndex;
      state.duration = project.duration;
      state.isFreePrompt = project.isFreePrompt;
      state.freeStory = project.freeStory || "";
      state.prompt = project.isFreePrompt ? project.freeStory || project.title : project.title;
      state.page = "result";
      state.bottomTab = "fast";
      state.isPlaying = false;
      render();
      break;
    }
    case "like": {
      const index = Number(target.dataset.feed);
      state.liked[index] = !state.liked[index]; render(); break;
    }
    case "follow":
      state.isFreePrompt = false;
      state.selectedTemplateIndex = Number(target.dataset.feed);
      state.model = "S2.0";
      state.ratio = "9:16";
      state.quality = "720p";
      state.style = "电影质感";
      enterDetail(state.selectedTemplateIndex);
      openToast("已带入原短片参数，开始跟拍");
      break;
    case "open-agent":
      if (AGENT_WEB_URL) window.open(AGENT_WEB_URL, "_blank", "noopener,noreferrer");
      else { state.modal = { type: "agent" }; render(); }
      break;
    case "agent-link":
      if (AGENT_WEB_URL) window.open(AGENT_WEB_URL, "_blank", "noopener,noreferrer");
      else openToast("请先在 app.js 配置 Web Agent 地址");
      break;
    case "open-3d": openToast("Web 端创作入口待配置，移动端玩法尽情期待"); break;
    case "dismiss": state.modal = null; state.configContext = null; state.assetContext = null; render(); break;
    default: break;
  }
}

app.addEventListener("click", (event) => {
  if (Date.now() < suppressedCarouselClickUntil && event.target.closest("#card-carousel, #detail-carousel")) {
    event.preventDefault();
    event.stopImmediatePropagation();
    return;
  }
  const mode = event.target.closest("[data-mode]");
  if (mode) { state.homeTab = mode.dataset.mode; render(); return; }
  const profileSection = event.target.closest("[data-profile-section]");
  if (profileSection) {
    state.profileSection = profileSection.dataset.profileSection;
    if (state.profileSection === "works") state.profileWorkTab = "project";
    render();
    return;
  }
  const profileWorkTab = event.target.closest("[data-profile-work-tab]");
  if (profileWorkTab) { state.profileWorkTab = profileWorkTab.dataset.profileWorkTab; render(); return; }
  const nav = event.target.closest("[data-nav]");
  if (nav) {
    const selected = nav.dataset.nav;
    state.bottomTab = selected;
    state.page = selected === "theatre" ? "feed" : selected === "profile" ? "profile" : "home";
    if (selected === "fast") state.homeTab = "script";
    render();
    return;
  }
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;
  if (actionTarget.dataset.action === "dismiss" && !actionTarget.closest("[data-sheet]") && !actionTarget.matches(".sheet-backdrop")) return;
  if (actionTarget.dataset.action === "dismiss" && actionTarget.closest("[data-sheet]") && actionTarget.closest(".sheet") && !actionTarget.matches(".sheet-close") && !actionTarget.closest("button")) return;
  if (actionTarget.dataset.action === "dismiss" && actionTarget.closest(".sheet") && actionTarget.matches(".sheet-backdrop")) return;
  if (actionTarget.dataset.action === "dismiss" && actionTarget.closest(".sheet") && !actionTarget.matches(".sheet-close")) return;
  handleAction(actionTarget.dataset.action, actionTarget);
});

app.addEventListener("submit", (event) => {
  if (event.target.id === "prompt-form") {
    event.preventDefault();
    const input = document.getElementById("prompt-input");
    state.homeDraft.prompt = input?.value.trim() || "";
    if (!state.homeDraft.prompt) { state.modal = { type: "templates" }; render(); return; }
    beginFreeTask();
  } else if (event.target.id === "prompt-active-form") {
    event.preventDefault();
    state.homeDraft.prompt = document.getElementById("prompt-input-active")?.value.trim() || "";
    beginFreeTask();
  } else if (event.target.id === "note-form") {
    event.preventDefault();
    const input = document.getElementById("note-input");
    state.extraNote = input?.value.trim() || state.extraNote;
    state.noteDraft = "";
    render();
    openToast("补充想法已加入镜头规划");
  }
});

app.addEventListener('input', (event) => {
  if (event.target.id === 'note-input') state.noteDraft = event.target.value;
  if (event.target.id === 'prompt-input' || event.target.id === 'prompt-input-active') {
    state.homeDraft.prompt = event.target.value;
    storePrompt(state.homeDraft.prompt);
  }
  if (event.target.id === 'script-library-search') {
    state.scriptLibraryQuery = event.target.value;
    render();
    requestAnimationFrame(() => {
      const search = document.getElementById('script-library-search');
      if (search) { search.focus(); search.setSelectionRange(search.value.length, search.value.length); }
    });
  }
});

overlayRoot.addEventListener("click", (event) => {
  const upload = event.target.closest("[data-action='upload']");
  if (upload) { document.getElementById("asset-file")?.click(); return; }
  const target = event.target.closest("[data-action]");
  if (!target) {
    if (event.target.classList.contains("sheet-backdrop")) { state.modal = null; state.configContext = null; state.assetContext = null; render(); }
    return;
  }
  if (target.closest(".sheet") && !target.matches("button")) return;
  if (target.dataset.action === "dismiss") { state.modal = null; state.configContext = null; state.assetContext = null; render(); return; }
  handleAction(target.dataset.action, target);
});

overlayRoot.addEventListener("change", (event) => {
  if (event.target.id !== "asset-file") return;
  const files = Array.from(event.target.files || []);
  if (!files.length) return;
  const allowedFiles = files.filter((file) => ["image/jpeg", "image/png"].includes(file.type) || /\.(jpe?g|png)$/i.test(file.name));
  if (allowedFiles.length !== files.length) openToast("仅支持 JPG 或 PNG 图片");
  if (state.modal?.actor !== null && state.modal?.actor !== undefined) {
    const file = allowedFiles[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      state.uploadedLabel = file.name.replace(/\.[^.]+$/, "");
      state.pickedAsset = { src: reader.result, name: state.uploadedLabel, index: -1 };
      render();
    };
    reader.readAsDataURL(file);
    return;
  }
  const remaining = Math.max(0, referenceLimitForModel(activeAssetModel()) - state.promptAssets.length - (state.selectedAssets || []).length);
  const acceptedFiles = allowedFiles.slice(0, remaining);
  if (acceptedFiles.length < allowedFiles.length) openToast(`当前 ${activeAssetModel()} 最多添加 ${referenceLimitForModel(activeAssetModel())} 张参考图`);
  if (!acceptedFiles.length) return;
  Promise.all(acceptedFiles.map((file, index) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ src: reader.result, name: file.name.replace(/\.[^.]+$/, ""), index: -1 - state.selectedAssets.length - index });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  }))).then((assets) => {
    state.selectedAssets = [...(state.selectedAssets || []), ...assets];
    render();
  }).catch(() => openToast("部分图片读取失败，请重试"));
});

overlayRoot.addEventListener("click", (event) => {
  if (event.target.classList.contains("sheet-backdrop")) { state.modal = null; state.configContext = null; state.assetContext = null; render(); }
});

function changeCarouselIndex(kind, direction) {
  if (kind === "home") {
    state.homeBannerIndex = (state.homeBannerIndex + direction + templates.length) % templates.length;
  } else {
    updateDetailPreview(state.previewIndex + direction);
    return;
  }
  render();
}

app.addEventListener("pointerdown", (event) => {
  if (!event.isPrimary || event.button !== 0 || event.target.closest(".detail-dots")) return;
  const homeCarousel = event.target.closest("#card-carousel");
  const detailCarousel = event.target.closest("#detail-carousel");
  const carousel = homeCarousel || detailCarousel;
  if (!carousel) return;
  activeCarouselGesture = {
    kind: homeCarousel ? "home" : "detail",
    pointerId: event.pointerId,
    carousel,
    startX: event.clientX,
    startY: event.clientY,
    axis: null,
  };
});

document.addEventListener("pointermove", (event) => {
  const gesture = activeCarouselGesture;
  if (!gesture || gesture.pointerId !== event.pointerId) return;
  const dx = event.clientX - gesture.startX;
  const dy = event.clientY - gesture.startY;
  if (!gesture.axis && Math.max(Math.abs(dx), Math.abs(dy)) >= 8) {
    gesture.axis = Math.abs(dx) > Math.abs(dy) * 1.15 ? "horizontal" : "vertical";
  }
  if (gesture.axis !== "horizontal") return;
  if (event.cancelable) event.preventDefault();
  const limit = Math.max(36, gesture.carousel.clientWidth * 0.28);
  gesture.carousel.style.setProperty("--drag-x", `${Math.max(-limit, Math.min(limit, dx))}px`);
  gesture.carousel.classList.add("is-dragging");
});

function finishCarouselGesture(event) {
  const gesture = activeCarouselGesture;
  if (!gesture || gesture.pointerId !== event.pointerId) return;
  activeCarouselGesture = null;
  const dx = event.clientX - gesture.startX;
  const threshold = Math.max(36, gesture.carousel.clientWidth * 0.12);
  gesture.carousel.style.removeProperty("--drag-x");
  gesture.carousel.classList.remove("is-dragging");
  if (gesture.axis !== "horizontal" || Math.abs(dx) < threshold) return;
  suppressedCarouselClickUntil = Date.now() + 360;
  changeCarouselIndex(gesture.kind, dx < 0 ? 1 : -1);
}

document.addEventListener("pointerup", finishCarouselGesture);
document.addEventListener("pointercancel", (event) => {
  const gesture = activeCarouselGesture;
  if (!gesture || gesture.pointerId !== event.pointerId) return;
  gesture.carousel.style.removeProperty("--drag-x");
  gesture.carousel.classList.remove("is-dragging");
  activeCarouselGesture = null;
});

app.addEventListener("wheel", (event) => {
  const homeCarousel = event.target.closest("#card-carousel");
  const detailCarousel = event.target.closest("#detail-carousel");
  const carousel = homeCarousel || detailCarousel;
  if (!carousel || Math.abs(event.deltaX) <= Math.abs(event.deltaY) * 1.15) return;
  event.preventDefault();
  clearTimeout(carouselWheelTimer);
  carouselWheelTimer = setTimeout(() => {
    carouselWheelDelta = 0;
    carouselWheelLocked = false;
  }, 180);
  if (carouselWheelLocked) return;
  carouselWheelDelta += event.deltaX;
  if (Math.abs(carouselWheelDelta) < Math.max(36, carousel.clientWidth * 0.1)) return;
  carouselWheelLocked = true;
  suppressedCarouselClickUntil = Date.now() + 360;
  changeCarouselIndex(homeCarousel ? "home" : "detail", carouselWheelDelta < 0 ? -1 : 1);
  carouselWheelDelta = 0;
}, { passive: false });

document.addEventListener("keydown", (event) => {
  const homeCarousel = event.target.closest?.("#card-carousel");
  const detailCarousel = event.target.closest?.("#detail-carousel");
  if ((homeCarousel || detailCarousel) && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
    event.preventDefault();
    changeCarouselIndex(homeCarousel ? "home" : "detail", event.key === "ArrowLeft" ? -1 : 1);
    return;
  }
  if (event.key === "Escape" && state.modal) { state.modal = null; render(); }
});

render();
