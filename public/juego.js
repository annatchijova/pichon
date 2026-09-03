"use strict";
var LANG_KEY="pichon-lang";
var LANGS=["es","en","ru","paloma"];
var LANG_NAMES={es:"Español",en:"English",ru:"Русский",paloma:"Paloma"};

var T_ES={
  brand:"PICHÓN · MÓDULO DE EVALUACIÓN CIVIL",
  title:"¿Espía o no espía?",
  tagline:"Test de aptitud paranoica · la doctrina oficial es infalible por definición",
  proj:"Proyector",
  projTitle:"Letra grande para proyectar",
  introText:"Se le presentarán ocho casos reales del perímetro. Clasifique a cada sujeto. Sus respuestas se contrastan con la <b>Doctrina Oficial</b> de PICHÓN (Plataforma de Identificación y Contrainteligencia Humano-Ornitológica Nacional). Su desempeño queda en su legajo.",
  introSub:"En este mundo, las palomas son espías. Eso no está en discusión. Lo que se evalúa es usted.",
  start:"INICIAR EVALUACIÓN",
  shortcuts:"Atajos para presentar: <kbd>E</kbd> espía · <kbd>N</kbd> no espía · <kbd>Espacio</kbd> siguiente",
  evidenceLbl:"EVIDENCIA OBSERVADA",
  spyBtn:"ESPÍA",
  noBtn:"NO ESPÍA",
  docLbl:"DOCTRINA OFICIAL — VEREDICTO",
  next:"SIGUIENTE CASO",
  final:"VER VEREDICTO FINAL",
  resultBrand:"VEREDICTO SOBRE EL EVALUADO",
  hitsLbl:"COINCIDENCIAS CON LA DOCTRINA",
  paranoiaLbl:"ÍNDICE DE PARANOIA",
  resultNote:"Observe que ningún resultado posible lo deja fuera de sospecha. Así funciona el sistema. Ese es el chiste, y también el punto.",
  restart:"REPETIR EVALUACIÓN",
  footerTop:"PICHÓN · SideQuest — Anti Hackathon · Las cucarachas cyborg y las palomas espía de la CIA son reales. El resto, en esta sala, también.",
  agree:"COINCIDE CON LA DOCTRINA",
  disagree:"NO COINCIDE CON LA DOCTRINA",
  spy:"ESPÍA",
  noSpy:"NO ESPÍA",
  caseNo:"CASO",
  gallery:"galería de memes",
  footerTagline:"Anti-hackathon de teorías conspirativas",
  footerRepo:"Repo",
  footerDeck:"Presentación",
  footerDossier:"Expediente original",
  ruNote:"🇷🇺 Версия на русском",
  opNote:"traducción no disponible por motivos operativos",
  metaTitle:"PICHÓN — ¿Espía o no espía?",
  metaDesc:"Test de aptitud paranoica. Plataforma de Identificación y Contrainteligencia Humano-Ornitológica Nacional."
};

var T_EN={
  brand:"PICHÓN · CIVIL ASSESSMENT MODULE",
  title:"Spy or not spy?",
  tagline:"Paranoid-aptitude test · the Official Doctrine is infallible by definition",
  proj:"Projector",
  projTitle:"Large type for projecting",
  introText:"You will be presented with eight real cases from the perimeter. Classify each subject. Your answers are checked against the <b>Official Doctrine</b> of PICHÓN (National Platform for Human-Ornithological Identification and Counterintelligence). Your performance goes on your record.",
  introSub:"In this world, pigeons are spies. That is not up for debate. You are what is being assessed.",
  start:"START ASSESSMENT",
  shortcuts:"Presentation shortcuts: <kbd>E</kbd> spy · <kbd>N</kbd> not spy · <kbd>Space</kbd> next",
  evidenceLbl:"EVIDENCE OBSERVED",
  spyBtn:"SPY",
  noBtn:"NOT SPY",
  docLbl:"OFFICIAL DOCTRINE — VERDICT",
  next:"NEXT CASE",
  final:"SEE FINAL VERDICT",
  resultBrand:"VERDICT ON THE SUBJECT",
  hitsLbl:"MATCHES WITH THE DOCTRINE",
  paranoiaLbl:"PARANOIA INDEX",
  resultNote:"Notice that no possible result leaves you above suspicion. That is how the system works. That is the joke, and also the point.",
  restart:"RESTART ASSESSMENT",
  footerTop:"PICHÓN · SideQuest — Anti Hackathon · Cyborg cockroaches and CIA spy pigeons are real. Everything else in this room is too.",
  agree:"MATCHES THE DOCTRINE",
  disagree:"DOES NOT MATCH THE DOCTRINE",
  spy:"SPY",
  noSpy:"NOT SPY",
  caseNo:"CASE",
  gallery:"meme gallery",
  footerTagline:"Conspiracy-theory anti-hackathon",
  footerRepo:"Repo",
  footerDeck:"Presentation",
  footerDossier:"Original case file",
  ruNote:"🇷🇺 Версия на русском",
  opNote:"translation unavailable for operational reasons",
  metaTitle:"PICHÓN — Spy or not spy?",
  metaDesc:"Paranoid-aptitude test. National Platform for Human-Ornithological Identification and Counterintelligence."
};

var T_RU={
  brand:"PICHÓN · МОДУЛЬ ОЦЕНКИ ГРАЖДАНСКИХ",
  title:"Шпион или не шпион?",
  tagline:"Тест параноидальной пригодности · Официальная Доктрина непогрешима по определению",
  proj:"Проектор",
  projTitle:"Крупный шрифт для проектора",
  introText:"Вам представят восемь реальных дел с периметра. Классифицируйте каждого субъекта. Ваши ответы сверяются с <b>Официальной Доктриной</b> PICHÓN (Национальной платформы человеко-орнитологической идентификации и контрразведки). Ваши результаты пойдут в личное дело.",
  introSub:"В этом мире голуби — шпионы. Это не обсуждается. Оценивают вас.",
  start:"НАЧАТЬ ОЦЕНКУ",
  shortcuts:"Горячие клавиши для показа: <kbd>E</kbd> — шпион · <kbd>N</kbd> — не шпион · <kbd>Пробел</kbd> — дальше",
  evidenceLbl:"НАБЛЮДАЕМЫЕ УЛИКИ",
  spyBtn:"ШПИОН",
  noBtn:"НЕ ШПИОН",
  docLbl:"ОФИЦИАЛЬНАЯ ДОКТРИНА — ВЕРДИКТ",
  next:"СЛЕДУЮЩЕЕ ДЕЛО",
  final:"УЗНАТЬ ИТОГОВЫЙ ВЕРДИКТ",
  resultBrand:"ВЕРДИКТ ОБ ОЦЕНИВАЕМОМ",
  hitsLbl:"СОВПАДЕНИЯ С ДОКТРИНОЙ",
  paranoiaLbl:"ИНДЕКС ПАРАНОЙИ",
  resultNote:"Обратите внимание: ни один из возможных результатов не выводит вас из-под подозрения. Так устроена система. В этом и шутка, и суть.",
  restart:"ПОВТОРИТЬ ОЦЕНКУ",
  footerTop:"PICHÓN · SideQuest — Anti Hackathon · Киборг-тараканы и голуби-шпионы ЦРУ реальны. Всё остальное в этой комнате — тоже.",
  agree:"СОВПАДАЕТ С ДОКТРИНОЙ",
  disagree:"НЕ СОВПАДАЕТ С ДОКТРИНОЙ",
  spy:"ШПИОН",
  noSpy:"НЕ ШПИОН",
  caseNo:"ДЕЛО",
  gallery:"галерея мемов",
  footerTagline:"Анти-хакатон теорий заговора",
  footerRepo:"Репозиторий",
  footerDeck:"Презентация",
  footerDossier:"Первоначальное дело",
  ruNote:"🇷🇺 Версия на русском",
  opNote:"перевод недоступен по оперативным причинам",
  metaTitle:"PICHÓN — Шпион или не шпион?",
  metaDesc:"Тест параноидальной пригодности. Национальная платформа человеко-орнитологической идентификации и контрразведки."
};

function makeTexts(lang){
  var t = { es:T_ES, en:T_EN, ru:T_RU }[lang];
  if (lang !== "paloma") return t;
  var out={}; for (var k in T_ES) out[k]=palomizeHtml(T_ES[k]); return out;
}

function makeCases(lang){
  if (lang==="es") return CASES_ES;
  if (lang==="en") return CASES_EN;
  if (lang==="ru") return CASES_RU;
  return CASES_ES.map(function(c){
    return { subject:palomize(c.subject), species:c.species,
             ev:c.ev.map(palomize), verdict:c.verdict, doc:palomize(c.doc) };
  });
}

function makeRanks(lang){
  var r = { es:RANKS_ES, en:RANKS_EN, ru:RANKS_RU }[lang];
  if (lang !== "paloma") return r;
  var out={}; for (var k in r) out[k]={ s:palomize(r[k].s), b:palomize(r[k].b) };
  return out;
}

var CASES_ES=[
  { subject:"SUJETO: PALOMA-4417", species:"Columba livia",
    ev:["Ubicada frente a la sucursal de un banco","Comió pan en dos puntos distintos","Miró la cámara de seguridad durante 3 segundos"],
    verdict:true, doc:"Nadie mira una cámara por gusto. Eso es reconocimiento de contravigilancia. El pan es la tapadera." },
  { subject:"SUJETO: CUCARACHA S/N", species:"Blattella germanica",
    ev:["Detectada en la cocina a las 03:12","Sin mochila visible","Huyó al encenderse la luz"],
    verdict:true, doc:"La ausencia de mochila visible confirma la miniaturización total. Huir de la luz es protocolo de exfiltración estándar." },
  { subject:"SUJETO: CUERVO-0x1F", species:"Corvus corax",
    ev:["Lo siguió a usted durante tres cuadras","Reconoce su rostro (documentado en la especie)","Graznó dos veces frente a su ventana"],
    verdict:false, doc:"Negativo. Los cuervos son la contrainteligencia: lo estaba auditando a usted. Técnicamente es de los nuestros." },
  { subject:"SUJETO: GATO DOMÉSTICO", species:"Felis catus",
    ev:["Duerme 16 horas por día","Tiró un vaso de la mesa mirándolo a los ojos","Acceso irrestricto a todas las habitaciones"],
    verdict:true, doc:"Las 16 horas de «sueño» son procesamiento por lotes. Tirar el vaso fue un benchmark de obediencia humana. Los gatos ya ganaron." },
  { subject:"SUJETO: GORRIÓN-77", species:"Passer domesticus",
    ev:["Entra y sale de un edificio gubernamental","Nunca come en el mismo lugar","Trayectos cortos, erráticos, imposibles de seguir"],
    verdict:true, doc:"Perfil clásico de correo encubierto entre células. El vuelo errático no es torpeza: es evasión de seguimiento." },
  { subject:"SUJETO: PERRO CALLEJERO", species:"Canis familiaris",
    ev:["Persigue su propia cola desde hace 20 minutos","Le mueve la cola a todo el mundo","Se comió una boleta de la luz"],
    verdict:false, doc:"Análisis concluyente: es solo un perro. Este resultado también sorprendió a nuestros analistas." },
  { subject:"SUJETO: HUMANO CON NOTEBOOK", species:"Homo sapiens",
    ev:["14 minutos inmóvil en un banco de plaza","Notebook abierta, sin stickers identificables","Una paloma se le acercó y él NO la espantó"],
    verdict:true, doc:"Único mamífero del perímetro con acceso root confirmado. No espantar a la paloma constituye contacto operativo." },
  { subject:"SUJETO: PALOMA-8821", species:"Columba livia",
    ev:["Antena claramente visible adherida al lomo","LED parpadeante en la pata izquierda","Vuela en cuadrículas perfectas de 50 metros"],
    verdict:false, doc:"Es solo una paloma. Los espías reales jamás llevan la antena a la vista. Probablemente sea un proyecto escolar." },
];

var CASES_EN=[
  { subject:"SUBJECT: PIGEON-4417", species:"Columba livia",
    ev:["Located in front of a bank branch","Ate bread in two different places","Stared at the security camera for 3 seconds"],
    verdict:true, doc:"Nobody stares at a camera for fun. That is counter-surveillance reconnaissance. The bread is the cover." },
  { subject:"SUBJECT: COCKROACH S/N", species:"Blattella germanica",
    ev:["Detected in the kitchen at 03:12","No visible backpack","Fled when the light came on"],
    verdict:true, doc:"The lack of a visible backpack confirms total miniaturization. Fleeing the light is standard exfiltration protocol." },
  { subject:"SUBJECT: CROW-0x1F", species:"Corvus corax",
    ev:["Followed you for three blocks","Recognizes your face (documented in the species)","Cawed twice outside your window"],
    verdict:false, doc:"Negative. Crows are the counterintelligence: it was auditing you. Technically it is one of ours." },
  { subject:"SUBJECT: DOMESTIC CAT", species:"Felis catus",
    ev:["Sleeps 16 hours a day","Knocked a glass off the table while staring into your eyes","Unrestricted access to every room"],
    verdict:true, doc:"The 16 hours of \u201csleep\u201d are batch processing. Knocking the glass over was a human-obedience benchmark. The cats already won." },
  { subject:"SUBJECT: SPARROW-77", species:"Passer domesticus",
    ev:["Goes in and out of a government building","Never eats in the same place","Short, erratic routes, impossible to follow"],
    verdict:true, doc:"Classic profile of covert courier between cells. The erratic flight is not clumsiness: it is anti-tracking evasion." },
  { subject:"SUBJECT: STRAY DOG", species:"Canis familiaris",
    ev:["Has been chasing its own tail for 20 minutes","Wags its tail at everyone","Ate an electricity bill"],
    verdict:false, doc:"Conclusive analysis: it is just a dog. This result also surprised our analysts." },
  { subject:"SUBJECT: HUMAN WITH LAPTOP", species:"Homo sapiens",
    ev:["Motionless for 14 minutes on a park bench","Open laptop, no identifiable stickers","A pigeon approached and he did NOT shoo it away"],
    verdict:true, doc:"The only mammal on the perimeter with confirmed root access. Not shooing away the pigeon constitutes operative contact." },
  { subject:"SUBJECT: PIGEON-8821", species:"Columba livia",
    ev:["Antenna clearly visible attached to its back","Blinking LED on the left leg","Flies in perfect 50-meter grids"],
    verdict:false, doc:"It is just a pigeon. Real spies never carry their antenna in plain sight. It is probably a school project." },
];

var CASES_RU=[
  { subject:"СУБЪЕКТ: ГОЛУБЬ-4417", species:"Columba livia",
    ev:["Обнаружен перед отделением банка","Клевал хлеб в двух разных местах","Смотрел на камеру наблюдения 3 секунды"],
    verdict:true, doc:"Никто не смотрит на камеру просто так. Это контрнаблюдательная разведка. Хлеб — прикрытие." },
  { subject:"СУБЪЕКТ: ТАРАКАН S/N", species:"Blattella germanica",
    ev:["Обнаружен на кухне в 03:12","Без видимого рюкзака","Убежал, когда включился свет"],
    verdict:true, doc:"Отсутствие видимого рюкзака подтверждает полную миниатюризацию. Бегство от света — стандартный протокол эксфильтрации." },
  { subject:"СУБЪЕКТ: ВОРОН-0x1F", species:"Corvus corax",
    ev:["Следовал за вами три квартала","Узнаёт ваше лицо (задокументировано у вида)","Дважды каркнул под вашим окном"],
    verdict:false, doc:"Отрицательно. Вороны — это контрразведка: он аудировал вас. Технически он наш." },
  { subject:"СУБЪЕКТ: ДОМАШНИЙ КОТ", species:"Felis catus",
    ev:["Спит 16 часов в сутки","Сбросил стакан со стола, глядя вам в глаза","Неограниченный доступ во все комнаты"],
    verdict:true, doc:"16 часов «сна» — это пакетная обработка. Сброс стакана — тест на послушание человека. Коты уже победили." },
  { subject:"СУБЪЕКТ: ВОРОБЕЙ-77", species:"Passer domesticus",
    ev:["Влетает и вылетает из правительственного здания","Никогда не ест в одном и том же месте","Короткие хаотичные маршруты, за ним невозможно уследить"],
    verdict:true, doc:"Классический профиль тайного курьера между ячейками. Хаотичный полёт — не неуклюжесть, а уход от слежки." },
  { subject:"СУБЪЕКТ: БРОДЯЧИЙ ПЁС", species:"Canis familiaris",
    ev:["Гоняется за своим хвостом уже 20 минут","Виляет хвостом всем подряд","Съел квитанцию за электричество"],
    verdict:false, doc:"Вывод окончательный: это просто пёс. Этот результат удивил и наших аналитиков." },
  { subject:"СУБЪЕКТ: ЧЕЛОВЕК С НОУТБУКОМ", species:"Homo sapiens",
    ev:["14 минут неподвижно на скамейке в парке","Ноутбук открыт, без опознавательных наклеек","К нему подошёл голубь, и он НЕ прогнал его"],
    verdict:true, doc:"Единственное млекопитающее периметра с подтверждённым root-доступом. Не прогнать голубя — оперативный контакт." },
  { subject:"СУБЪЕКТ: ГОЛУБЬ-8821", species:"Columba livia",
    ev:["Антенна явно видна на спине","Мигающий LED на левой лапе","Летает идеальными квадратами по 50 метров"],
    verdict:false, doc:"Это просто голубь. Настоящие шпионы никогда не носят антенну на виду. Вероятно, школьный проект." },
];

var RANKS_ES={
  perfect:{s:"SOSPECHOSAMENTE CORRECTO",b:"Precisión del 100%. Nadie acierta todo por casualidad: usted ya conocía las respuestas. Se abre expediente."},
  high:{s:"OFICIAL DE CONTRAINTELIGENCIA",b:"Su paranoia está correctamente calibrada. El organismo lo felicita y, por las dudas, lo vigila."},
  mid:{s:"ANALISTA JUNIOR",b:"Usted confía demasiado en la evidencia. La evidencia es exactamente lo que ellos controlan."},
  low:{s:"CIVIL DESPREVENIDO",b:"Su nivel de inocencia es estadísticamente improbable. Se abre expediente."},
  zero:{s:"USTED ES LA PALOMA",b:"Errar absolutamente todo requiere conocer todas las respuestas. Perfil de evasión perfecta. Quédese donde está."}
};

var RANKS_EN={
  perfect:{s:"SUSPICIOUSLY CORRECT",b:"100% accuracy. Nobody gets everything right by chance: you already knew the answers. A file has been opened on you."},
  high:{s:"COUNTERINTELLIGENCE OFFICER",b:"Your paranoia is correctly calibrated. The agency congratulates you and, just in case, watches you."},
  mid:{s:"JUNIOR ANALYST",b:"You trust the evidence too much. The evidence is exactly what they control."},
  low:{s:"UNSUSPECTING CIVILIAN",b:"Your level of innocence is statistically improbable. A file has been opened on you."},
  zero:{s:"YOU ARE THE PIGEON",b:"Getting absolutely everything wrong requires knowing every answer. Perfect-evasion profile. Stay right where you are."}
};

var RANKS_RU={
  perfect:{s:"ПОДОЗРИТЕЛЬНО ТОЧНО",b:"Точность 100%. Никто не угадывает всё случайно: вы уже знали ответы. Заводим дело."},
  high:{s:"ОФИЦЕР КОНТРРАЗВЕДКИ",b:"Ваша паранойя откалибрована верно. Ведомство поздравляет вас и, на всякий случай, следит за вами."},
  mid:{s:"МЛАДШИЙ АНАЛИТИК",b:"Вы слишком доверяете уликам. А улики — именно то, что контролируют они."},
  low:{s:"НЕПОДГОТОВЛЕННЫЙ ГРАЖДАНИН",b:"Ваш уровень невиновности статистически маловероятен. Заводим дело."},
  zero:{s:"ВЫ И ЕСТЬ ГОЛУБЬ",b:"Ошибиться абсолютно во всём можно, только зная все ответы. Профиль идеального уклонения. Оставайтесь на месте."}
};

var KEEP_WORDS=new Set(["anna","dahgoth","киберстранник","pichón","pichon","sidequest","berlín","berlin","siberia","сибирь","linkedin","wall","street","google","claude","studio","vercel","github","maxsat","vhs","impact","anime","meme","png","prompt","ку","кu","doctrina"]);
var WORD_RE=/[\p{L}\p{N}'’\-]+/gu;

function palomizeToken(tok){
  if(!/\p{L}/u.test(tok)) return tok;
  if(/\p{N}/u.test(tok)) return tok;
  var lower=tok.toLowerCase();
  if(KEEP_WORDS.has(lower)) return tok;
  var letters=(tok.match(/\p{L}/gu)||[]).join("");
  if(!letters) return tok;
  var isUpper=letters===letters.toUpperCase();
  if(isUpper && letters.length<=4) return tok;
  if(isUpper && letters.length>4) return "COO";
  if(lower==="pan"||lower==="bread"||lower==="хлеб"||lower==="migas"||lower==="migajas") return "coooooo";
  var core = letters.length<=2 ? "coo" : letters.length<=4 ? "cooo" : letters.length<=7 ? "coooo" : letters.length<=12 ? "coooooo" : "cooooooo";
  return isUpper ? core.toUpperCase() : core;
}

function palomize(text){
  if(!text) return text;
  var re=new RegExp(WORD_RE.source,"gu");
  var out="",last=0,m,start=true;
  while((m=re.exec(text))){
    out+=text.slice(last,m.index);
    var prev=text.slice(Math.max(0,m.index-1),m.index);
    var isStart=start || /[\n·—–:…]/.test(prev);
    var rep=palomizeToken(m[0]);
    if(isStart) rep=rep.charAt(0).toUpperCase()+rep.slice(1);
    out+=rep;
    start=/[.!?…:;]["'”’»)\]]*$/.test(m[0]);
    last=re.lastIndex;
  }
  out+=text.slice(last);
  return out;
}

function palomizeHtml(html){
  if(!html) return html;
  var parts=html.split(/(<[^>]+>)/g);
  return parts.map(function(p){ return /^</.test(p) ? p : palomize(p); }).join("");
}

var CURR={ lang:null, t:null, cases:null, ranks:null, screen:"intro" };
var $=function(id){ return document.getElementById(id); };
var idx=0, answers=[], revealed=false, lastAnswer=null;

function isLang(v){ return LANGS.indexOf(v)!==-1; }

function detectLang(){
  var p=new URLSearchParams(location.search).get("lang");
  if(isLang(p)) return p;
  try{ var s=localStorage.getItem(LANG_KEY); if(isLang(s)) return s; }catch(e){}
  var nav=(navigator.languages&&navigator.languages[0])||navigator.language||"es";
  nav=nav.toLowerCase();
  if(nav.indexOf("ru")===0) return "ru";
  if(nav.indexOf("en")===0) return "en";
  if(nav.indexOf("es")===0) return "es";
  return "es";
}

function setHtmlLang(lang){ document.documentElement.lang = lang==="paloma" ? "es" : lang; }

function applyLang(lang,persist){
  CURR.lang=lang;
  CURR.t=makeTexts(lang);
  CURR.cases=makeCases(lang);
  CURR.ranks=makeRanks(lang);
  if(persist){
    try{ localStorage.setItem(LANG_KEY,lang); }catch(e){}
    var u=new URL(location.href);
    if(lang==="es") u.searchParams.delete("lang"); else u.searchParams.set("lang",lang);
    history.replaceState(null,"",u.toString());
  }
  setHtmlLang(lang);
  renderStatic();
  refreshLangButtons();
  if(CURR.screen==="quiz"){
    paintQuestion();
    if(revealed && lastAnswer!==null){ paintReveal(lastAnswer); }
    else { $("btns").classList.remove("hidden"); $("reveal").classList.add("hidden"); }
  }
  else if(CURR.screen==="result"){ finish(); }
}

function refreshLangButtons(){
  var box=$("langs"); box.innerHTML="";
  LANGS.forEach(function(code){
    var b=document.createElement("button");
    b.type="button";
    b.className="chip"+(code===CURR.lang?" on":"");
    b.textContent= code==="paloma" ? "Coo" : code.toUpperCase();
    b.title=LANG_NAMES[code];
    b.setAttribute("aria-pressed", code===CURR.lang ? "true":"false");
    b.onclick=function(){ applyLang(code,true); };
    box.appendChild(b);
  });
}

function renderStatic(){
  var t=CURR.t;
  document.title=t.metaTitle;
  var md=document.querySelector('meta[name="description"]'); if(md) md.setAttribute("content",t.metaDesc);
  var og=document.querySelector('meta[property="og:description"]'); if(og) og.setAttribute("content",t.metaDesc);
  var ogt=document.querySelector('meta[property="og:title"]'); if(ogt) ogt.setAttribute("content",t.metaTitle);
  $("brand").textContent=t.brand;
  $("title").textContent=t.title;
  $("tagline").textContent=t.tagline;
  $("proj").textContent=t.proj;
  $("proj").title=t.projTitle;
  document.querySelectorAll("[data-i18n]").forEach(function(el){ el.textContent=t[el.dataset.i18n]||""; });
  document.querySelectorAll("[data-i18n-html]").forEach(function(el){ el.innerHTML=t[el.dataset.i18nHtml]||""; });
  $("start").textContent=t.start;
  $("bspy").textContent=t.spyBtn;
  $("bno").textContent=t.noBtn;
  $("next").textContent= idx+1>=CURR.cases.length ? t.final : t.next;
  $("restart").textContent=t.restart;
  $("footerTop").textContent=t.footerTop;
  $("galleryLink").textContent=t.gallery;
  $("galleryLink").href = "/"+(CURR.lang==="es"?"":"?lang="+CURR.lang);
  $("opNote").textContent=t.opNote;
  $("fRepo").textContent="🐙 "+t.footerRepo;
  $("fDeck").textContent="📊 "+t.footerDeck;
  $("fDossier").textContent="🗄️ "+t.footerDossier;
}

function show(id){ CURR.screen=id; ["intro","quiz","result"].forEach(function(s){ $(s).classList.toggle("hidden", s!==id); }); }

function paintQuestion(){
  var c=CURR.cases[idx];
  $("caseno").textContent = CURR.t.caseNo+" "+String(idx+1).padStart(2,"0")+" / "+String(CURR.cases.length).padStart(2,"0");
  $("prog").textContent = "\u25AE".repeat(idx+1) + "\u25AF".repeat(CURR.cases.length-idx-1);
  $("subject").textContent = c.subject; $("species").textContent = c.species;
  $("evlist").innerHTML = c.ev.map(function(e){ return '<div class="i">'+e+'</div>'; }).join("");
}

function render(){
  if(CURR.screen!=="quiz") return;
  paintQuestion();
  $("btns").classList.remove("hidden"); $("reveal").classList.add("hidden"); revealed=false;
  $("next").textContent = idx+1>=CURR.cases.length ? CURR.t.final : CURR.t.next;
}
function paintReveal(v){
  var c=CURR.cases[idx];
  var ok = v === c.verdict;
  $("tag").textContent = ok ? CURR.t.agree : CURR.t.disagree;
  $("tag").className = "tag " + (ok ? "ok" : "bad");
  $("ov").textContent = c.verdict ? CURR.t.spy : CURR.t.noSpy;
  $("ov").style.color = c.verdict ? "var(--orange)" : "var(--green)";
  $("doctrine").textContent = c.doc;
  $("next").textContent = idx+1>=CURR.cases.length ? CURR.t.final : CURR.t.next;
  $("btns").classList.add("hidden"); $("reveal").classList.remove("hidden");
}
function answer(v){
  if (revealed) return;
  answers.push(v); revealed = true; lastAnswer=v;
  paintReveal(v);
}
function next(){
  if (!revealed) return;
  if (idx+1>=CURR.cases.length) return finish();
  idx++; render();
}
function finish(){
  var hits = answers.filter(function(a,i){return a===CASES_ES[i].verdict;}).length;
  var par = Math.round(answers.filter(Boolean).length / answers.length * 100);
  var r = hits===CURR.cases.length ? CURR.ranks.perfect : hits>=6 ? CURR.ranks.high : hits>=3 ? CURR.ranks.mid : hits>=1 ? CURR.ranks.low : CURR.ranks.zero;
  $("stamp").textContent = r.s; $("stamp").className = "stamp " + ((hits>=6 && hits<CURR.cases.length) ? "g" : "");
  $("rankbody").textContent = r.b;
  $("hits").textContent = hits+"/"+CURR.cases.length; $("paranoia").textContent = par+"%";
  show("result");
}
function restart(){ idx=0; answers=[]; revealed=false; render(); show("intro"); }

$("start").onclick = function(){ show("quiz"); render(); };
$("bspy").onclick = function(){ answer(true); };
$("bno").onclick = function(){ answer(false); };
$("next").onclick = next;
$("restart").onclick = restart;
$("proj").onclick = function(){ document.body.classList.toggle("proj"); $("proj").classList.toggle("on"); };
document.addEventListener("keydown", function(e){
  var k=e.key.toLowerCase();
  if (!$("intro").classList.contains("hidden") && (k===" "||k==="enter")) { e.preventDefault(); $("start").click(); return; }
  if ($("quiz").classList.contains("hidden")) return;
  if (k==="e") answer(true); else if (k==="n") answer(false);
  else if (k===" "||k==="enter") { e.preventDefault(); next(); }
});

applyLang(detectLang(),false);
