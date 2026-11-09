// ---- Edit your projects here ----
const projects = [
  { type:"data",   title:"Fitness Dashboard",            text:"Power BI dashboard for fitness data, performance tracking and visual reporting." },
  { type:"data",   title:"Sales and Profit Dashboard",   text:"Power BI dashboard for sales performance, profit analysis and KPI tracking." },
  { type:"data",   title:"Netflix Data Analysis",        text:"Excel dashboard for Netflix data, trend analysis and data visualization." },
  { type:"code",   title:"OZE Technologies Website",     text:"Responsive business website for a software company with a hero section and a live analytics and delivery-tracking widget." },
  { type:"design", title:"Coffee Shop Website",          text:"Full Figma website design for a coffee brand: landing page, product showcase, gallery, contact and newsletter." },
  { type:"design", title:"Chordify Music App",           text:"Figma mobile app design with onboarding, home and search screens, and login and sign-up flow in a gradient theme." }
];
// Hours per day for the hero chart (sample numbers, change them)
const week = [["Mon",2],["Tue",3],["Wed",4],["Thu",3],["Fri",5],["Sat",6],["Sun",4]];
const labels = {data:"Data", design:"Design", code:"Code"};

const grid = document.getElementById("grid");
grid.innerHTML = projects.map(p =>
  `<article class="card" data-type="${p.type}"><span class="kind">${labels[p.type]}</span><h3>${p.title}</h3><p>${p.text}</p></article>`
).join("");

document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".filters button").forEach(x => x.classList.remove("on"));
  b.classList.add("on");
  document.querySelectorAll(".card").forEach(c => { c.hidden = b.dataset.f !== "all" && c.dataset.type !== b.dataset.f; });
}));

const bars = document.getElementById("bars");
const max = Math.max(...week.map(w => w[1]));
bars.innerHTML = week.map(([d,h]) => `<div class="bar"><i data-h="${h/max*100}"></i>${d}</div>`).join("");
requestAnimationFrame(() => setTimeout(() => {
  bars.querySelectorAll("i").forEach(i => i.style.height = i.dataset.h + "%");
}, 150));