// ---- Edit your projects here ----
const projects = [
  { type:"data",   title:"Fitness Dashboard",          text:"Power BI dashboard for fitness data, performance tracking and visual reporting." },
  { type:"data",   title:"Sales and Profit Dashboard", text:"Power BI dashboard for sales performance, profit analysis and KPI tracking." },
  { type:"data",   title:"Netflix Data Analysis",      text:"Excel dashboard for Netflix data, trend analysis and data visualization." },
  { type:"code",   title:"OZE Technologies Website",   text:"Responsive business website for a software company, with a hero section and a live analytics and delivery-tracking widget." },
  { type:"design", title:"Coffee Shop Website",        text:"Full Figma website design for a coffee brand: landing page, product showcase, gallery, contact and newsletter." },
  { type:"design", title:"Chordify Music App",         text:"Figma mobile app design with onboarding, home and search screens, and login and sign-up flow in a gradient theme." }
];
const labels = {data:"Data", design:"Design", code:"Code"};

// ---- Hero slides ----
const slides = [
  { word:"data.",   intro:"Hello, I'm <b>Jamil Hyder Samo</b>. I turn raw numbers into Power BI and Excel dashboards that explain themselves." },
  { word:"design.", intro:"Hello, I'm <b>Jamil Hyder Samo</b>. I design websites and mobile apps in Figma, from first sketch to full user flow." },
  { word:"code.",   intro:"Hello, I'm <b>Jamil Hyder Samo</b>. I build responsive websites with HTML, CSS and React." },
  { word:"AI.",     intro:"Hello, I'm <b>Jamil Hyder Samo</b>. I explore creative AI and AI video generation in my free time." }
];
const typed = document.getElementById("typed"), introEl = document.getElementById("introText");
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
let si = 0, typeTimer, autoTimer;
function show(i) {
  si = (i + slides.length) % slides.length;
  clearTimeout(typeTimer); clearTimeout(autoTimer);
  introEl.classList.add("swap");
  setTimeout(() => { introEl.innerHTML = slides[si].intro; introEl.classList.remove("swap"); }, 250);
  const w = slides[si].word; typed.textContent = "";
  if (still) { typed.textContent = w; return; }
  let n = 0;
  (function tick() {
    typed.textContent = w.slice(0, ++n);
    if (n < w.length) typeTimer = setTimeout(tick, 110);
    else autoTimer = setTimeout(() => show(si + 1), 3200);
  })();
}
document.getElementById("prev").addEventListener("click", () => show(si - 1));
document.getElementById("next").addEventListener("click", () => show(si + 1));
show(0);

// ---- Cursor dot and ring ----
const dot = document.getElementById("dot"), ring = document.getElementById("ring");
let mx = -100, my = -100, rx = -100, ry = -100;
addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px)`; });
(function loop() {
  rx += (mx - rx) * .15; ry += (my - ry) * .15;
  ring.style.transform = `translate(${rx}px,${ry}px)`;
  requestAnimationFrame(loop);
})();

// ---- Projects list and filters ----
const rows = document.getElementById("rows");
rows.innerHTML = projects.map(p =>
  `<article class="row" data-type="${p.type}"><span class="kind">${labels[p.type]}</span><h3>${p.title}</h3><p>${p.text}</p></article>`
).join("");
document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".filters button").forEach(x => x.classList.remove("on"));
  b.classList.add("on");
  document.querySelectorAll(".row").forEach(r => { r.hidden = b.dataset.f !== "all" && r.dataset.type !== b.dataset.f; });
}));

// ---- Copy email ----
const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText("jamilhyder2004@gmail.com"); copyBtn.textContent = "Copied"; }
  catch { copyBtn.textContent = "Copy failed"; }
  setTimeout(() => copyBtn.textContent = "Copy email", 1800);
});