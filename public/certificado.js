const T = {
  es: {
    brand: "PICHÓN · PROGRAMA DE FORMACIÓN", title: "Certificado de aprobación",
    sub: "Curso de Identificación de Espías · Nivel 1 · Editable · No transferible a palomas",
    lName: "NOMBRE DEL AGENTE", lPants: "COLOR DEL PANTALÓN (NIVEL DE ACCESO)", lHits: "COINCIDENCIAS CON LA DOCTRINA",
    lSpec: "ESPECIALIDAD", lDate: "FECHA DE EMISIÓN", dl: "DESCARGAR PNG", rnd: "GENERAR OTRO EXPEDIENTE",
    hint: "El número de expediente se deriva del nombre y la fecha. Cambiar el nombre cambia el expediente; así funciona la burocracia.",
    foot: "Todos aprueban. Es más barato. · <a href='./universo.html'>Archivo cinematográfico</a> · <a href='./'>Galería</a> · <a href='./juego.html'>¿Espía o no espía?</a>",
    pants: { grey: "Gris — NO CLASIFICADO", blue: "Azul — RESTRINGIDO", yellow: "Amarillo — CONFIDENCIAL", rasp: "Frambuesa — CÓSMICO" },
    cls: { grey: "NO CLASIFICADO", blue: "RESTRINGIDO", yellow: "CONFIDENCIAL", rasp: "CÓSMICO" },
    pantsShort: { grey: "gris", blue: "azul", yellow: "amarillo", rasp: "frambuesa" },
    specs: ["Identificación aviar", "Auditoría de cuervos", "Custodia del pan", "Contra-contrainteligencia felina", "Lectura de guano", "Vigilancia de antenas"],
    ranks: { perfect: "SOSPECHOSAMENTE CORRECTO", high: "OFICIAL DE CONTRAINTELIGENCIA", mid: "ANALISTA JUNIOR", low: "CIVIL DESPREVENIDO", zero: "USTED ES LA PALOMA" },
    hitsOpt: n => `${n} de 8`,
    defName: "Agente sin nombre",
    c: {
      org: "DIRECCIÓN DE AVES · PROGRAMA DE FORMACIÓN", title: "CERTIFICADO DE APROBACIÓN",
      course: "Curso de Identificación de Espías · Nivel 1 · Formación civil obligatoria",
      certifies: "Se certifica que",
      body: "ha completado la formación civil obligatoria, vio su verdadera forma durante 0,4 segundos y ya no puede dejar de verla.",
      result: "RESULTADO", access: "NIVEL DE ACCESO", spec: "ESPECIALIDAD", pantsLbl: "pantalón",
      file: "EXPEDIENTE N.º", city: "Buenos Aires", sign: "FIRMA DEL AGENTE", print: "HUELLA DE PALOMA",
      stamp: "APROBADO", stampSub: "Todos aprueban. Es más barato.", verified: "VERIFICADO POR TRES PALOMAS",
      footer: "COPIA NO CONTROLADA · Si este documento llegó a usted, está siendo vigilado.", ku: "КУ",
      months: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
      dateFmt: (d, m, y) => `${d} de ${m} de ${y}`,
    },
  },
  ru: {
    brand: "PICHÓN · ПРОГРАММА ПОДГОТОВКИ", title: "Свидетельство об окончании",
    sub: "Курс по выявлению шпионов · Уровень 1 · Редактируемое · Не передаётся голубям",
    lName: "ИМЯ АГЕНТА", lPants: "ЦВЕТ ШТАНОВ (УРОВЕНЬ ДОПУСКА)", lHits: "СОВПАДЕНИЙ С ДОКТРИНОЙ",
    lSpec: "СПЕЦИАЛИЗАЦИЯ", lDate: "ДАТА ВЫДАЧИ", dl: "СКАЧАТЬ PNG", rnd: "ДРУГОЙ НОМЕР ДЕЛА",
    hint: "Номер дела выводится из имени и даты. Смените имя — сменится дело; так работает бюрократия.",
    foot: "Сдают все. Так дешевле. · <a href='./universo.html'>Киноархив</a> · <a href='./'>Галерея</a> · <a href='./juego.html'>Шпион или не шпион?</a>",
    pants: { grey: "Серые — НЕ СЕКРЕТНО", blue: "Синие — ДСП", yellow: "Жёлтые — СЕКРЕТНО", rasp: "Малиновые — КОСМИЧЕСКИ" },
    cls: { grey: "НЕ СЕКРЕТНО", blue: "ДСП", yellow: "СЕКРЕТНО", rasp: "КОСМИЧЕСКИ СЕКРЕТНО" },
    pantsShort: { grey: "серые", blue: "синие", yellow: "жёлтые", rasp: "малиновые" },
    specs: ["Выявление птиц", "Аудит воронов", "Охрана хлеба", "Контр-контрразведка котов", "Чтение помёта", "Наблюдение за антеннами"],
    ranks: { perfect: "ПОДОЗРИТЕЛЬНО ТОЧНО", high: "ОФИЦЕР КОНТРРАЗВЕДКИ", mid: "МЛАДШИЙ АНАЛИТИК", low: "БЕСПЕЧНЫЙ ГРАЖДАНИН", zero: "ВЫ И ЕСТЬ ГОЛУБЬ" },
    hitsOpt: n => `${n} из 8`,
    defName: "Агент без имени",
    c: {
      org: "УПРАВЛЕНИЕ ПО ДЕЛАМ ПТИЦ · ПРОГРАММА ПОДГОТОВКИ", title: "СВИДЕТЕЛЬСТВО ОБ ОКОНЧАНИИ",
      course: "Курс по выявлению шпионов · Уровень 1 · Обязательная гражданская подготовка",
      certifies: "Настоящим удостоверяется, что",
      body: "прошёл(-ла) обязательную гражданскую подготовку, видел(-а) свою истинную форму в течение 0,4 секунды и больше не может её не видеть.",
      result: "РЕЗУЛЬТАТ", access: "УРОВЕНЬ ДОПУСКА", spec: "СПЕЦИАЛИЗАЦИЯ", pantsLbl: "штаны",
      file: "ДЕЛО №", city: "Буэнос-Айрес", sign: "ПОДПИСЬ АГЕНТА", print: "ОТПЕЧАТОК ГОЛУБЯ",
      stamp: "УТВЕРЖДЕНО", stampSub: "Сдают все. Так дешевле.", verified: "ПРОВЕРЕНО ТРЕМЯ ГОЛУБЯМИ",
      footer: "НЕКОНТРОЛИРУЕМАЯ КОПИЯ · Если этот документ попал к вам, за вами следят.", ku: "КУ",
      months: ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],
      dateFmt: (d, m, y) => `${d} ${m} ${y} г.`,
    },
  },
};
const PANTS = { grey: "#8A8F99", blue: "#3B6EA8", yellow: "#D9A81C", rasp: "#B23A6B" };
const C = { bg: "#F3EEE3", card: "#FBF8F2", ink: "#22252B", red: "#B3261E", navy: "#2C3E66", muted: "#7A7F8A", line: "#D9D2C4", green: "#3E7C5A" };
const SERIF = 'Georgia, "Times New Roman", serif';
const SANS = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
const MONO = '"Courier New", Courier, monospace';

let lang = "es";
let seedBump = 0;
const $ = id => document.getElementById(id);

function rankFor(h) { return h === 8 ? "perfect" : h >= 6 ? "high" : h >= 3 ? "mid" : h >= 1 ? "low" : "zero"; }
function hash(s) { let h = 2166136261; for (const ch of s) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return (h >>> 0); }
function fileNo(name, date) { const n = (hash(name + "|" + date + "|" + seedBump) % 9000) + 1000; return `8821-C/26-${n}`; }

function buildUI() {
  const t = T[lang];
  $("ui-brand").textContent = t.brand; $("ui-title").textContent = t.title; $("ui-sub").textContent = t.sub;
  $("l-name").textContent = t.lName; $("l-pants").textContent = t.lPants; $("l-hits").textContent = t.lHits;
  $("l-spec").textContent = t.lSpec; $("l-date").textContent = t.lDate; $("dl").textContent = t.dl; $("rnd").textContent = t.rnd;
  $("ui-hint").textContent = t.hint; $("ui-foot").innerHTML = t.foot;
  $("name").placeholder = t.defName;
  for (const o of $("pants").options) o.textContent = t.pants[o.value];
  const hs = $("hits"); const hv = hs.value || "6"; hs.innerHTML = "";
  for (let i = 8; i >= 0; i--) { const o = document.createElement("option"); o.value = i; o.textContent = t.hitsOpt(i); hs.appendChild(o); }
  hs.value = hv;
  const sp = $("spec"); const sv = sp.selectedIndex >= 0 ? sp.selectedIndex : 0; sp.innerHTML = "";
  t.specs.forEach((s, i) => { const o = document.createElement("option"); o.value = i; o.textContent = s; sp.appendChild(o); });
  sp.selectedIndex = sv;
}

function wrap(ctx, text, x, y, maxW, lh, align = "center") {
  const words = text.split(" "); let line = ""; const lines = [];
  for (const w of words) { const test = line ? line + " " + w : w; if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test; }
  if (line) lines.push(line);
  ctx.textAlign = align;
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * lh));
  return lines.length;
}

function draw() {
  const t = T[lang], c = t.c;
  const cv = $("cert"), ctx = cv.getContext("2d");
  const W = cv.width, H = cv.height;
  const name = ($("name").value.trim() || t.defName);
  const pants = $("pants").value; const hits = Number($("hits").value);
  const spec = t.specs[Number($("spec").value) || 0];
  const dateVal = $("date").value || new Date().toISOString().slice(0, 10);
  const [yy, mm, dd] = dateVal.split("-").map(Number);
  const dateTxt = c.dateFmt(dd, c.months[mm - 1], yy);
  const fno = fileNo(name, dateVal);

  // fondo y bordes
  ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = C.card; ctx.fillRect(40, 40, W - 80, H - 80);
  ctx.lineWidth = 6; ctx.strokeStyle = C.ink; ctx.strokeRect(40, 40, W - 80, H - 80);
  ctx.lineWidth = 1.5; ctx.strokeRect(58, 58, W - 116, H - 116);
  // banda de pantalón
  ctx.fillStyle = PANTS[pants]; ctx.fillRect(58, 58, 22, H - 116);

  // cabecera
  ctx.fillStyle = C.muted; ctx.font = `700 18px ${SANS}`; ctx.textAlign = "left";
  ctx.fillText(c.org.split("").join("\u200A"), 110, 110);
  ctx.fillStyle = C.red; ctx.textAlign = "right"; ctx.fillText(t.cls[pants].split("").join("\u200A"), W - 100, 110);

  // título
  ctx.fillStyle = C.ink; ctx.textAlign = "center";
  ctx.font = `700 60px ${SERIF}`; ctx.fillText(c.title, W / 2, 215);
  ctx.fillStyle = C.navy; ctx.font = `400 24px ${SANS}`; ctx.fillText(c.course, W / 2, 258);

  // se certifica que
  ctx.fillStyle = C.muted; ctx.font = `italic 400 24px ${SERIF}`; ctx.fillText(c.certifies, W / 2, 345);
  ctx.fillStyle = C.ink; let fs = 76; ctx.font = `700 ${fs}px ${SERIF}`;
  while (ctx.measureText(name).width > W - 360 && fs > 34) { fs -= 4; ctx.font = `700 ${fs}px ${SERIF}`; }
  ctx.fillText(name, W / 2, 440);
  const nw = Math.max(420, ctx.measureText(name).width + 60);
  ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(W / 2 - nw / 2, 462); ctx.lineTo(W / 2 + nw / 2, 462); ctx.stroke();

  // cuerpo
  ctx.fillStyle = C.ink; ctx.font = `400 26px ${SANS}`;
  wrap(ctx, c.body, W / 2, 520, 1000, 36);

  // tres cajas
  const boxes = [
    [c.result, t.ranks[rankFor(hits)], `${hits}/8`],
    [c.access, t.cls[pants], `${c.pantsLbl} ${t.pantsShort[pants]}`],
    [c.spec, spec, ""],
  ];
  const bw = 400, bh = 150, gap = 40, bx0 = (W - (bw * 3 + gap * 2)) / 2, by = 630;
  boxes.forEach((b, i) => {
    const x = bx0 + i * (bw + gap);
    ctx.fillStyle = "#F1ECE0"; ctx.fillRect(x, by, bw, bh);
    ctx.strokeStyle = C.line; ctx.lineWidth = 1.5; ctx.strokeRect(x, by, bw, bh);
    if (i === 1) { ctx.fillStyle = PANTS[pants]; ctx.fillRect(x, by, bw, 10); }
    ctx.textAlign = "center"; ctx.fillStyle = C.navy; ctx.font = `700 15px ${SANS}`;
    ctx.fillText(b[0].split("").join("\u200A"), x + bw / 2, by + 42);
    ctx.fillStyle = C.ink; let f = 22; ctx.font = `700 ${f}px ${SERIF}`;
    while (ctx.measureText(b[1]).width > bw - 40 && f > 14) { f -= 1; ctx.font = `700 ${f}px ${SERIF}`; }
    ctx.fillText(b[1], x + bw / 2, by + 88);
    ctx.fillStyle = C.muted; ctx.font = `400 17px ${SANS}`; ctx.fillText(b[2], x + bw / 2, by + 122);
  });

  // pie: expediente, firma, huella
  const fy = 900;
  ctx.textAlign = "left"; ctx.fillStyle = C.ink; ctx.font = `700 18px ${MONO}`;
  ctx.fillText(`${c.file} ${fno}`, 110, fy);
  ctx.fillStyle = C.muted; ctx.font = `400 18px ${SANS}`; ctx.fillText(`${c.city}, ${dateTxt}`, 110, fy + 32);

  ctx.textAlign = "center"; ctx.strokeStyle = C.ink; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(W / 2 - 170, fy + 4); ctx.lineTo(W / 2 + 170, fy + 4); ctx.stroke();
  ctx.fillStyle = C.muted; ctx.font = `700 14px ${SANS}`; ctx.fillText(c.sign.split("").join("\u200A"), W / 2, fy + 32);

  ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.arc(W - 150, fy - 20, 52, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillText(c.print.split("").join("\u200A"), W - 150, fy + 62);

  // sello
  ctx.save(); ctx.translate(W - 370, 840); ctx.rotate(-8 * Math.PI / 180);
  ctx.strokeStyle = C.green; ctx.lineWidth = 4; ctx.strokeRect(-150, -42, 300, 84);
  ctx.lineWidth = 1.5; ctx.strokeRect(-140, -32, 280, 64);
  ctx.fillStyle = C.green; ctx.font = `700 36px ${SANS}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  let sf = 36; ctx.font = `700 ${sf}px ${SANS}`; while (ctx.measureText(c.stamp).width > 250 && sf > 18) { sf -= 2; ctx.font = `700 ${sf}px ${SANS}`; }
  ctx.fillText(c.stamp.split("").join("\u200A"), 0, 0);
  ctx.textBaseline = "alphabetic"; ctx.restore();
  ctx.fillStyle = C.muted; ctx.font = `italic 400 15px ${SANS}`; ctx.textAlign = "center"; ctx.fillText(c.stampSub, W - 370, 928);

  // verificado + footer + KU
  ctx.fillStyle = C.green; ctx.font = `700 13px ${SANS}`; ctx.textAlign = "left"; ctx.fillText(c.verified.split("").join("\u200A"), 110, H - 92);
  ctx.fillStyle = C.muted; ctx.font = `400 15px ${SANS}`; ctx.textAlign = "center"; ctx.fillText(c.footer, W / 2, H - 66);
  ctx.fillStyle = C.red; ctx.font = `700 20px ${SANS}`; ctx.textAlign = "right"; ctx.fillText(c.ku, W - 100, H - 90);
}

function download() {
  const name = ($("name").value.trim() || T[lang].defName).toLowerCase().replace(/[^a-z0-9а-яё]+/gi, "-").replace(/^-|-$/g, "");
  const a = document.createElement("a");
  a.download = `certificado-pichon-${name || "agente"}.png`;
  a.href = $("cert").toDataURL("image/png");
  a.click();
}

document.querySelectorAll(".chip").forEach(b => b.onclick = () => {
  lang = b.dataset.lang; document.querySelectorAll(".chip").forEach(x => x.classList.toggle("on", x === b));
  document.documentElement.lang = lang; buildUI(); draw();
});
["name", "pants", "hits", "spec", "date"].forEach(id => { $(id).addEventListener("input", draw); $(id).addEventListener("change", draw); });
$("dl").onclick = download;
$("rnd").onclick = () => { seedBump++; draw(); };

$("date").value = new Date().toISOString().slice(0, 10);
buildUI();
$("hits").value = "6";
draw();
