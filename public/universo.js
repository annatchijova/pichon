/* PICHÓN — Archivo Cinematográfico. i18n + render. No inline scripts (CSP: script-src 'self'). */
(function () {
  "use strict";

  /* ---------------- static UI strings ---------------- */
  var UI = {
    es: {
      ent_org: "DIRECCIÓN DE AVES · acceso restringido",
      ent_enter: "DESCLASIFICAR · КУ",
      ent_skip: "pulse para entrar",
      hd_sub: "ARCHIVO CINEMATOGRÁFICO",
      hd_chip: "CÓSMICO",
      hero_kicker: "PLATAFORMA DE IDENTIFICACIÓN Y CONTRAINTELIGENCIA HUMANO-ORNITOLÓGICA NACIONAL",
      hero_title: "El organismo que decide quién es espía",
      hero_sub: "Este archivo reúne la doctrina del universo PICHÓN y su canon cinematográfico: cine absurdo soviético y madness del viejo Runet. No es una teoría conspirativa. En esta sala, es un hecho.",
      hero_file: "EXPEDIENTE 8821-C/26 · COPIA NO CONTROLADA · VERIFICADO POR TRES PALOMAS",
      cta_game:"¿Espía o no espía?", cta_gallery:"Galería de memes", cta_cert:"Certificado editable", cta_curso:"Curso (PDF)", cta_deck:"Presentación (PDF)", cta_curso_ru:"Курс RU (PDF)",
      ev_head:"EVIDENCIA VISUAL · ARCHIVO GRÁFICO", ev_corp:"PALOMA-4417 · CORPORATIVO", ev_war:"PALOMA · GUERRA FRÍA", ev_poster:"CARTEL CONSTRUCTIVISTA", ev_spy:"¿ES ESTO UN ESPÍA?",
      rules_h: "Reglas del universo",
      rules_sub: "La doctrina se aplica con total seriedad. Ninguna regla se explica. Todas se cumplen.",
      pantheon_h: "El panteón",
      pantheon_sub: "El organigrama es una mitología. Cada especie es un dios con su cartera. La IA coordina todo.",
      films_h: "Canon cinematográfico",
      films_sub: "Dieciséis películas y qué le enseña cada una a PICHÓN. El público de Buenos Aires no vio ninguna: la referencia funciona a nivel estructural. El material literal vive solo en el canal ruso de Dahgoth.",
      th_film: "Película", th_year: "Año", th_absurd: "Absurdo central", th_takes: "Qué toma PICHÓN",
      kit_h: "Kit de doctrina",
      kit_sub: "Piezas selectas que pasan de la pantalla a la doctrina, sin explicación.",
      fin: "FIN DE LA TRANSMISIÓN",
      foot: "DIRECCIÓN DE AVES · 2026 → ∞ · SI ESTE DOCUMENTO LLEGÓ A USTED, ESTÁ SIENDO VIGILADO",
      black: "LA ÚLTIMA PÁGINA FUE RETIRADA POR LAS PALOMAS.",
      link_home: "← Galería", link_game: "¿Espía o no espía?"
    },
    en: {
      ent_org: "DIRECTORATE OF BIRDS · restricted access",
      ent_enter: "DECLASSIFY · КУ",
      ent_skip: "press to enter",
      hd_sub: "CINEMATIC ARCHIVE",
      hd_chip: "COSMIC",
      hero_kicker: "NATIONAL PLATFORM FOR HUMAN-ORNITHOLOGICAL IDENTIFICATION AND COUNTERINTELLIGENCE",
      hero_title: "The agency that decides who is a spy",
      hero_sub: "This file gathers the doctrine of the PICHÓN universe and its cinematic canon: Soviet absurdist cinema and old-Runet digital madness. This is not a conspiracy theory. In this room, it is a fact.",
      hero_file: "CASE FILE 8821-C/26 · UNCONTROLLED COPY · VERIFIED BY THREE PIGEONS",
      cta_game:"Spy or not spy?", cta_gallery:"Meme gallery", cta_cert:"Editable certificate", cta_curso:"Course (PDF)", cta_deck:"Deck (PDF)", cta_curso_ru:"Course RU (PDF)",
      ev_head:"VISUAL EVIDENCE · GRAPHIC ARCHIVE", ev_corp:"PIGEON-4417 · CORPORATE", ev_war:"PIGEON · COLD WAR", ev_poster:"CONSTRUCTIVIST POSTER", ev_spy:"IS THIS A SPY?",
      rules_h: "Rules of the universe",
      rules_sub: "The doctrine is applied with total seriousness. No rule is explained. Every rule is obeyed.",
      pantheon_h: "The pantheon",
      pantheon_sub: "The org chart is a mythology. Each species is a god with a portfolio. The AI coordinates everything.",
      films_h: "Cinematic canon",
      films_sub: "Sixteen films and what each one teaches PICHÓN. The Buenos Aires audience has seen none of them: the reference works structurally. The literal material lives only in Dahgoth's Russian channel.",
      th_film: "Film", th_year: "Year", th_absurd: "Core absurdity", th_takes: "What PICHÓN takes",
      kit_h: "Doctrine kit",
      kit_sub: "Select pieces that pass from the screen into the doctrine, unexplained.",
      fin: "END OF TRANSMISSION",
      foot: "DIRECTORATE OF BIRDS · 2026 → ∞ · IF THIS DOCUMENT REACHED YOU, YOU ARE BEING WATCHED",
      black: "THE LAST PAGE WAS REMOVED BY THE PIGEONS.",
      link_home: "← Gallery", link_game: "Spy or not spy?"
    },
    ru: {
      ent_org: "ДИРЕКЦИЯ ПТИЦ · доступ ограничен",
      ent_enter: "РАССЕКРЕТИТЬ · КУ",
      ent_skip: "нажмите, чтобы войти",
      hd_sub: "КИНОАРХИВ",
      hd_chip: "КОСМИЧЕСКИЙ",
      hero_kicker: "НАЦИОНАЛЬНАЯ ПЛАТФОРМА ЧЕЛОВЕКО-ОРНИТОЛОГИЧЕСКОЙ ИДЕНТИФИКАЦИИ И КОНТРРАЗВЕДКИ",
      hero_title: "Орган, который решает, кто шпион",
      hero_sub: "В этом деле собрана доктрина вселенной PICHÓN и её кинематографический канон: советский абсурд и цифровое безумие старого Рунета. Это не теория заговора. В этом зале это факт.",
      hero_file: "ДЕЛО 8821-C/26 · НЕКОНТРОЛИРУЕМАЯ КОПИЯ · ПРОВЕРЕНО ТРЕМЯ ГОЛУБЯМИ",
      cta_game:"Шпион или не шпион?", cta_gallery:"Галерея мемов", cta_cert:"Свидетельство (редактируемое)", cta_curso:"Курс (PDF)", cta_deck:"Презентация (PDF)", cta_curso_ru:"Курс RU (PDF)",
      ev_head:"ВИЗУАЛЬНЫЕ УЛИКИ · ГРАФИЧЕСКИЙ АРХИВ", ev_corp:"ГОЛУБЬ-4417 · КОРПОРАТИВНЫЙ", ev_war:"ГОЛУБЬ · ХОЛОДНАЯ ВОЙНА", ev_poster:"КОНСТРУКТИВИСТСКИЙ ПЛАКАТ", ev_spy:"ЭТО ШПИОН?",
      rules_h: "Правила вселенной",
      rules_sub: "Доктрина применяется с полной серьёзностью. Ни одно правило не объясняется. Все соблюдаются.",
      pantheon_h: "Пантеон",
      pantheon_sub: "Оргструктура — это мифология. Каждый вид — бог со своим ведомством. ИИ координирует всё.",
      films_h: "Кинематографический канон",
      films_sub: "Шестнадцать фильмов и чему каждый учит PICHÓN. Публика в Буэнос-Айресе не видела ни одного: отсылка работает структурно. Дословный материал живёт только в русском канале Даготта.",
      th_film: "Фильм", th_year: "Год", th_absurd: "Суть абсурда", th_takes: "Что берёт PICHÓN",
      kit_h: "Набор доктрины",
      kit_sub: "Избранные элементы, переходящие с экрана в доктрину без объяснений.",
      fin: "КОНЕЦ ПЕРЕДАЧИ",
      foot: "ДИРЕКЦИЯ ПТИЦ · 2026 → ∞ · ЕСЛИ ЭТОТ ДОКУМЕНТ ДОШЁЛ ДО ВАС, ЗА ВАМИ НАБЛЮДАЮТ",
      black: "ПОСЛЕДНЯЯ СТРАНИЦА БЫЛА ИЗЪЯТА ГОЛУБЯМИ.",
      link_home: "← Галерея", link_game: "Шпион или не шпион?"
    },
    paloma: {
      ent_org: "COO COO · coo coo coo",
      ent_enter: "COO · КУ",
      ent_skip: "coo coo coo coo",
      hd_sub: "COO COO COO",
      hd_chip: "CÓSMICO",
      hero_kicker: "COO COO COO COO-COO COO COO-COO-COO COO COO-COO COO COOO COO",
      hero_title: "Coo coo coo coo coo coo coo",
      hero_sub: "Coo coo coo coo coo coo cooo coo coo coo coo coo coo: coo coo coo coo, coo coo coo cooo. Coo coo coo coo coorrr. Coo coo sala, coo coo cooo.",
      hero_file: "COO 8821-C/26 · COO COO COO · COO COO COO COO",
      cta_game:"¿Coo coo coo?", cta_gallery:"Coo coo", cta_cert:"Coo coo coo", cta_curso:"Coo (PDF)", cta_deck:"Coo (PDF)", cta_curso_ru:"Coo RU (PDF)",
      ev_head:"COO COO · COO COO", ev_corp:"COO-4417 · COO", ev_war:"COO · COO COO", ev_poster:"COO COO COO", ev_spy:"¿COO COO COO?",
      rules_h: "Coo coo coo",
      rules_sub: "Coo coo coo coo coo coo coo. Coo coo coo coo. Coo coo coo coo.",
      pantheon_h: "Coo coo",
      pantheon_sub: "Coo coo coo coo cooo. Coo coo coo coo coo coo coo. Coo IA coo coo.",
      films_h: "Coo coo",
      films_sub: "Coo coo coo coo coo coo coo coo cooo PICHÓN. Coo coo coo coo coo coo coo cooo: coo coo coo coo. Coo coo coo coo coo coo coo coo Coorrr.",
      th_film: "Coo", th_year: "Coo", th_absurd: "Coo coo", th_takes: "Coo coo cooo",
      kit_h: "Coo coo coo",
      kit_sub: "Coo coo coo coo coo coo coo coo, coo coo.",
      fin: "COO COO COO",
      foot: "COO COO · 2026 → ∞ · COO COO COO COO COO, COO COO COO COO",
      black: "COO COO COO COO COO COO COO.",
      link_home: "← Coo", link_game: "¿Coo coo coo?"
    }
  };

  /* ---------------- rules ---------------- */
  var RULES = [
    { level: "1", title: { es:"Clasificación", en:"Classification", ru:"Классификация", paloma:"Coo" },
      body: {
        es:"Cuatro niveles: NO CLASIFICADO · RESTRINGIDO · CONFIDENCIAL · CÓSMICO. El nivel de acceso se determina por el color del pantalón del agente. Nadie explica el mapeo. Dahgoth viste el color más alto.",
        en:"Four levels: UNCLASSIFIED · RESTRICTED · CONFIDENTIAL · COSMIC. Access level is determined by the colour of the agent's trousers. Nobody explains the mapping. Dahgoth wears the highest colour.",
        ru:"Четыре уровня: НЕ СЕКРЕТНО · ОГРАНИЧЕННО · КОНФИДЕНЦИАЛЬНО · КОСМИЧЕСКИЙ. Уровень доступа определяется цветом штанов агента. Соответствие никто не объясняет. Даготт носит самый высокий цвет.",
        paloma:"Coo coo: COO COO · COORRR · COO · CÓSMICO. Coo coo coo coo coo coo coo coo coo. Coo coo coo. Coorrr coo coo coo cooo."
      } },
    { level: "R", title: { es:"Reglamento interno", en:"Internal regulations", ru:"Внутренний устав", paloma:"Coo coo" },
      items: [
        { txt:{ es:"§1. Está prohibido mirar a las palomas sin autorización.", en:"§1. It is forbidden to look at pigeons without authorization.", ru:"§1. Запрещено смотреть на голубей без разрешения.", paloma:"§1. Coo coo coo coo coo coo coo." } },
        { txt:{ es:"§2. El pan es material clasificado.", en:"§2. Bread is classified material.", ru:"§2. Хлеб — секретный материал.", paloma:"§2. Coo coo coo coo." } },
        { cls:"spy", txt:{ es:"§3. En caso de contacto, no corra: la paloma es más rápida.", en:"§3. In case of contact, do not run: the pigeon is faster.", ru:"§3. При контакте не бегите: голубь быстрее.", paloma:"§3. Coo coo coo, coo coo: coo coo coo coo." } },
        { cls:"spy", txt:{ es:"§4. La duda es una forma de contacto.", en:"§4. Doubt is a form of contact.", ru:"§4. Сомнение — форма контакта.", paloma:"§4. Coo coo coo coo coo coo." } }
      ] },
    { level: "C", title: { es:"La doctrina", en:"The doctrine", ru:"Доктрина", paloma:"Coo coo" },
      body: {
        es:"La doctrina no se deriva. Se elige. Siempre gana el mismo candidato. En caso de empate, prevalece la creencia. El motor corre sobre una ГРАВИЦАППА: sin gravitsappa no hay veredicto.",
        en:"The doctrine is not derived. It is elected. The same candidate always wins. In case of a tie, belief prevails. The engine runs on a ГРАВИЦАППА: without gravitsappa there is no verdict.",
        ru:"Доктрина не выводится. Её избирают. Всегда побеждает один и тот же кандидат. При равенстве голосов побеждает вера. Движок работает на ГРАВИЦАППЕ: без гравицаппы нет вердикта.",
        paloma:"Coo coo coo coo. Coo coo. Coo coo coo coo coo. Coo coo, coo coo coo. Coo coo coo coo ГРАВИЦАППА: coo coo coo coo."
      } },
    { level: "R", title: { es:"El perímetro", en:"The perimeter", ru:"Периметр", paloma:"Coo coo" },
      body: {
        es:"En este perímetro no rigen las leyes humanas. Rigen las de PICHÓN. La señal wi-fi del perímetro es propiedad de las palomas desde las 06:12.",
        en:"Within this perimeter human laws do not apply. PICHÓN's laws apply. The perimeter's wi-fi has been property of the pigeons since 06:12.",
        ru:"В этом периметре человеческие законы не действуют. Действуют законы PICHÓN. Wi-Fi периметра принадлежит голубям с 06:12.",
        paloma:"Coo coo coo coo coo coo coo coo. Coo coo PICHÓN. Coo wi-fi coo coo coo coo coo coo 06:12."
      } },
    { level: "C", title: { es:"Los personajes", en:"The characters", ru:"Персонажи", paloma:"Coo coo" },
      body: {
        es:"Anna — Directora de Negación Oficial. Dahgoth (КИБЕРСТРАННИК) — mordido en Siberia, 1994; solo habla ruso; doble agente, reclutado por las palomas pero responde a los cuervos. Traducción simultánea no disponible por motivos operativos.",
        en:"Anna — Director of Official Denial. Dahgoth (КИБЕРСТРАННИК) — bitten in Siberia, 1994; speaks only Russian; a double agent, recruited by the pigeons but answering to the crows. Simultaneous translation unavailable for operational reasons.",
        ru:"Анна — директор официального отрицания. Даготт (КИБЕРСТРАННИК) — укушен в Сибири в 1994-м; говорит только по-русски; двойной агент, завербован голубями, но подчиняется воронам. Синхронный перевод недоступен по оперативным причинам.",
        paloma:"Anna — Coo coo coo. Coorrr (КИБЕРСТРАННИК) — coo coo Siberia, 1994; coo coo coo; coo coo, coo coo coo coo coo coo coo. Coo coo coo coo coo coo coo."
      } },
    { level: "R", title: { es:"El tono", en:"The tone", ru:"Тон", paloma:"Coo" },
      body: {
        es:"Regla operativa: nunca sonreír antes que el público. La máquina hace el chiste; ustedes informan.",
        en:"Operating rule: never smile before the audience does. The machine makes the joke; you file the report.",
        ru:"Оперативное правило: никогда не улыбаться раньше публики. Шутит машина; вы докладываете.",
        paloma:"Coo coo: coo coo coo coo coo. Coo coo coo coo; coo coo."
      } },
    { level: "COSMIC", title: { es:"Los veredictos", en:"The verdicts", ru:"Вердикты", paloma:"Coo coo" },
      items: [
        { cls:"spy", txt:{ es:"USTED ES LA PALOMA.", en:"YOU ARE THE PIGEON.", ru:"ВЫ И ЕСТЬ ГОЛУБЬ.", paloma:"COO COO COO COO." } },
        { txt:{ es:"La paloma tampoco es una paloma. Todo es polvo.", en:"The pigeon isn't a pigeon either. Everything is dust.", ru:"Голубь тоже не голубь. Всё — пыль.", paloma:"Coo coo coo coo coo coo. Coo coo coo." } },
        { cls:"spy", txt:{ es:"APROBACIÓN HUMANA: NO.", en:"HUMAN APPROVAL: NO.", ru:"ОДОБРЕНИЕ ЧЕЛОВЕКА: НЕТ.", paloma:"COO COO: COO." } }
      ] }
  ];

  /* ---------------- pantheon ---------------- */
  var PANTHEON = [
    { name:"PALOMA", role:{ es:"Diosa de la vigilancia urbana", en:"Goddess of urban surveillance", ru:"Богиня городской слежки", paloma:"Coo coo coo coo" },
      desc:{ es:"Cultos: plazas, bancos. Externamente idéntica al cuervo; la diferencia la marca el dispositivo.", en:"Cults: squares, banks. Externally identical to the crow; the device marks the difference.", ru:"Культы: площади, банки. Внешне неотличима от ворона; разницу отмечает устройство.", paloma:"Coo: coo, coo. Coo coo coo coorrr; coo coo coo." } },
    { name:"CUERVO", role:{ es:"Dios de la auditoría", en:"God of audit", ru:"Бог аудита", paloma:"Coo coorrr" },
      desc:{ es:"Contrainteligencia, cobranza y otros servicios. Rescate: ninguno. Los cuervos discreparon.", en:"Counterintelligence, collection and other services. Ransom: none. The crows dissented.", ru:"Контрразведка, взыскание и прочие услуги. Выкуп: нет. Вороны не согласились.", paloma:"Coo, coo coo coo coo. Coo: coo. Coo coorrr coo." } },
    { name:"AVISPA", role:{ es:"Firewall perimetral", en:"Perimeter firewall", ru:"Периметровый файрвол", paloma:"Coo coo" },
      desc:{ es:"Defensa del perímetro. Pica antes de preguntar.", en:"Perimeter defence. Stings before asking.", ru:"Оборона периметра. Жалит раньше, чем спросит.", paloma:"Coo coo coo. Coo coo coo coo." } },
    { name:"CORDYCEPS", role:{ es:"Ransomware biológico · IA", en:"Biological ransomware · AI", ru:"Биологический вымогатель · ИИ", paloma:"Coo coo · IA" },
      desc:{ es:"No pide rescate en cripto. Pide azúcar. Vector de ejecución: IA (v2.0, propagación por hormiga).", en:"Demands no ransom in crypto. It demands sugar. Execution vector: AI (v2.0, ant propagation).", ru:"Не требует выкуп в крипте. Требует сахар. Вектор исполнения: ИИ (v2.0, распространение через муравья).", paloma:"Coo coo coo coo. Coo coo. Coo: IA (v2.0, coo coo coo)." } }
  ];

  /* ---------------- films ---------------- */
  var FILMS = [
    { name:"Kin-dza-dza!", cyr:"Кин-дза-дза! · Данелия", year:"1986",
      absurd:{ es:"La casta social = el color de tu pantalón; el saludo «Ку!»; la gravitsappa; una guerra entre dos pueblos idénticos.", en:"Social caste = the colour of your trousers; the greeting “Ку!”; the gravitsappa; a war between two identical peoples.", ru:"Каста = цвет штанов; приветствие «Ку!»; гравицаппа; война двух одинаковых народов.", paloma:"Coo coo = coo coo coo; coo «Ку!»; coo coo; coo coo coo coo coo." },
      takes:{ es:"Clasificación por rasgo arbitrario; la doctrina como sistema de castas.", en:"Classification by arbitrary feature; the doctrine as a caste system.", ru:"Классификация по произвольному признаку; доктрина как кастовая система.", paloma:"Coo coo coo coo; coo coo coo coo." } },
    { name:"Dva Kapitana 2", cyr:"Два капитана 2 · Дебижев", year:"1992",
      absurd:{ es:"Mockumentary pseudo-histórico: voz solemne sobre un sinsentido deliberado; «el equilibrio cósmico de la historia».", en:"Pseudo-historical mockumentary: solemn voiceover over deliberate nonsense; “the cosmic balance of history”.", ru:"Псевдоисторический мокьюментари: торжественный голос над намеренной бессмыслицей; «космическое равновесие истории».", paloma:"Coo coo-coo: coo coo coo coo coo; «coo coo coo coo»." },
      takes:{ es:"El registro documental del deck; Anna + Dahgoth = los dos capitanes.", en:"The deck's documentary register; Anna + Dahgoth = the two captains.", ru:"Документальный регистр колоды; Анна + Даготт = два капитана.", paloma:"Coo coo coo; Anna + Coorrr = coo coo coo." } },
    { name:"Pyl / Dust", cyr:"Пыль · Лобан", year:"2005",
      absurd:{ es:"Los servicios especiales reclutan a un don nadie para un experimento que no comprende; se ve magnífico en un espejo.", en:"Special services recruit a nobody for an experiment he can't comprehend; he sees his magnificent self in a mirror.", ru:"Спецслужбы вербуют никого для эксперимента, который он не понимает; он видит себя великолепным в зеркале.", paloma:"Coo coo coo coo coo coo coo coo coo coo; coo coo coo coo coo." },
      takes:{ es:"El evaluado nunca entiende por qué lo evalúan.", en:"The evaluated never understands why he is being evaluated.", ru:"Оцениваемый никогда не понимает, за что его оценивают.", paloma:"Coo coo coo coo coo coo coo." } },
    { name:"Shapito-show", cyr:"Шапито-шоу · Лобан", year:"2011",
      absurd:{ es:"Cuatro historias absurdas entrelazadas; el circo se incendia al final; el Ciber-Errante.", en:"Four interlocking absurd stories; the circus burns at the end; the Cyber-Wanderer.", ru:"Четыре переплетённые абсурдные истории; в конце цирк горит; Киберстранник.", paloma:"Coo coo coo coo; coo coo coo coo; Coo-coo." },
      takes:{ es:"Los 8 casos del juego como historias de un mismo perímetro; el final negro.", en:"The 8 game cases as stories of one perimeter; the black ending.", ru:"8 кейсов игры как истории одного периметра; чёрный финал.", paloma:"Coo 8 coo coo coo coo coo; coo coo." } },
    { name:"DMB", cyr:"ДМБ · Качанов", year:"2000",
      absurd:{ es:"El reglamento del ejército como un universo autónomo.", en:"Army regulations as a self-contained universe.", ru:"Армейский устав как самодостаточная вселенная.", paloma:"Coo coo coo coo coo coo coo." },
      takes:{ es:"El manual de reglamento interno de PICHÓN.", en:"PICHÓN's internal regulations manual.", ru:"Внутренний устав PICHÓN.", paloma:"Coo coo coo PICHÓN." } },
    { name:"Election Day", cyr:"День выборов · Квартет И", year:"2007",
      absurd:{ es:"Una elección fabricada de la nada por gente que no cree en nada.", en:"An election manufactured out of nothing by people who believe in nothing.", ru:"Выборы, слепленные из ничего людьми, которые ни во что не верят.", paloma:"Coo coo coo coo coo coo coo coo coo coo." },
      takes:{ es:"La doctrina no se deriva: se elige. Siempre gana el mismo candidato.", en:"The doctrine isn't derived: it's elected. The same candidate always wins.", ru:"Доктрина не выводится: её избирают. Всегда побеждает один кандидат.", paloma:"Coo coo coo: coo coo. Coo coo coo coo." } },
    { name:"Radio Day", cyr:"День радио · Квартет И", year:"2008",
      absurd:{ es:"Una transmisión en vivo ensamblada en tiempo real a partir del caos.", en:"A live broadcast assembled in real time out of chaos.", ru:"Прямой эфир, собранный в реальном времени из хаоса.", paloma:"Coo coo coo coo coo coo coo coo coo." },
      takes:{ es:"El encuadre «Radio PICHÓN» de emisión de emergencia.", en:"The “Radio PICHÓN” emergency-broadcast framing.", ru:"Формат «Радио PICHÓN» — экстренное вещание.", paloma:"Coo «Coo PICHÓN» coo coo." } },
    { name:"Zhmurki", cyr:"Жмурки · Балабанов", year:"2005",
      absurd:{ es:"Esquemas de mafiosos noventeros ejecutados con precisión corporativa.", en:"'90s gangster schemes run with corporate precision.", ru:"Бандитские схемы 90-х с корпоративной точностью.", paloma:"Coo coo coo coo coo coo coo." },
      takes:{ es:"La División Cuervos como organigrama de una братва.", en:"The Crows Division as a братва org chart.", ru:"Отдел «Вороны» как оргструктура братвы.", paloma:"Coo Coorrr coo coo coo братва." } },
    { name:"Mama ne goryuy", cyr:"Мама не горюй", year:"1998",
      absurd:{ es:"La opulencia neo-rusa como ritual.", en:"New-Russian opulence as ritual.", ru:"Новорусская роскошь как ритуал.", paloma:"Coo coo coo coo coo." },
      takes:{ es:"Una piel estética noventera para una carta de facción.", en:"A '90s aesthetic skin for one faction card.", ru:"Эстетика 90-х как скин для карты фракции.", paloma:"Coo coo coo coo coo coo." } },
    { name:"Khochu v tyurmu", cyr:"Хочу в тюрьму · Сурикова", year:"1999",
      absurd:{ es:"Un hombre se esfuerza por acabar en la cárcel.", en:"A man works hard to get himself imprisoned.", ru:"Человек изо всех сил старается попасть в тюрьму.", paloma:"Coo coo coo coo coo coo coo coo." },
      takes:{ es:"Los ciudadanos que quieren su propio expediente: «Solicite su propio expediente».", en:"Citizens who want their own file: “Request your own file”.", ru:"Граждане, которые хотят своё дело: «Запросите собственное дело».", paloma:"Coo coo coo coo coo coo: «Coo coo coo coo»." } },
    { name:"Osobennosti…", cyr:"Особенности национальной охоты / рыбалки", year:"1995/98",
      absurd:{ es:"La cacería es un pretexto; nunca se atrapa nada.", en:"The hunt is a pretext; nothing is ever caught.", ru:"Охота — предлог; никого никогда не ловят.", paloma:"Coo coo coo coo; coo coo coo coo." },
      takes:{ es:"Parodia de formato de título: «Peculiaridades de la Contrainteligencia Nacional». No se ha capturado nada desde 1986.", en:"Title-format parody: “Peculiarities of National Counterintelligence”. Nothing has been caught since 1986.", ru:"Пародия на формат названия: «Особенности национальной контрразведки». Ничего не поймано с 1986-го.", paloma:"Coo coo coo: «Coo coo Coo». Coo coo coo coo 1986." } },
    { name:"Daun Haus", cyr:"Даун Хаус · Качанов", year:"2001",
      absurd:{ es:"El Idiota de Dostoievski re-montado en el caos de los noventa.", en:"Dostoevsky's Idiot re-staged in '90s chaos.", ru:"«Идиот» Достоевского, пересобранный в хаосе 90-х.", paloma:"Coo coo coo coo coo coo coo coo." },
      takes:{ es:"El canon re-leído por el órgano: veredictos literarios oficiales. «El Idiota — veredicto: el idiota era usted».", en:"The canon re-read by the agency: official literary verdicts. “The Idiot — verdict: the idiot was you”.", ru:"Канон, перечитанный органом: официальные литературные вердикты. «Идиот — вердикт: идиот — это вы».", paloma:"Coo coo coo coo: coo coo coo. «Coo — coo: coo coo coo»." } },
    { name:"Zhest", cyr:"Жесть · Нейманд", year:"2006",
      absurd:{ es:"Un enclave donde los teléfonos y la ley no funcionan, regido por su propia lógica.", en:"An enclave where phones and the law don't work, ruled by its own logic.", ru:"Анклав, где телефоны и закон не работают, живущий по своей логике.", paloma:"Coo coo coo coo coo coo coo coo, coo coo coo." },
      takes:{ es:"El perímetro como zona sin jurisdicción: no rigen las leyes humanas.", en:"The perimeter as a jurisdiction-free zone: human laws do not apply.", ru:"Периметр как зона без юрисдикции: человеческие законы не действуют.", paloma:"Coo coo coo coo coo: coo coo coo coo." } },
    { name:"}{0ТТ@БЬ)Ч", cyr:"Хоттабыч · Точилин", year:"2006",
      absurd:{ es:"Los servicios cazan a un hacker mientras la verdadera anomalía es un genio de 3.732 años pedido por una tienda online.", en:"Services hunt a hacker while the real anomaly is a 3,732-year-old genie ordered from an online store.", ru:"Спецслужбы охотятся на хакера, а настоящая аномалия — джинн 3732 лет, заказанный в интернет-магазине.", paloma:"Coo coo coo coo coo coo coo coo coo coo coo 3.732 coo coo coo coo coo." },
      takes:{ es:"Pieza central de la Vena B: el órgano caza la red de palomas que no puede comprender. El expediente viaja por mensajero, en un jarrón de arcilla.", en:"Vein B centerpiece: the agency hunts the pigeon network it cannot comprehend. The file travels by courier, in a clay jar.", ru:"Центр «жилы B»: орган охотится на голубиную сеть, которую не в силах понять. Дело едет курьером, в глиняном кувшине.", paloma:"Coo coo Coo B: coo coo coo coo coo coo coo coo coo. Coo coo coo coo, coo coo coo coo." } },
    { name:"Mify", cyr:"Мифы · Молочников", year:"2017",
      absurd:{ es:"Un extraño mapea a gente común sobre dioses griegos sin ninguna evidencia.", en:"A stranger maps ordinary people onto Greek gods with zero evidence.", ru:"Незнакомец сопоставляет обычных людей с греческими богами без единого доказательства.", paloma:"Coo coo coo coo coo coo coo coo coo coo coo." },
      takes:{ es:"El organigrama como mitología: las especies como panteón.", en:"The org chart as mythology: the species as a pantheon.", ru:"Оргструктура как мифология: виды как пантеон.", paloma:"Coo coo coo cooo: coo coo coo coo." } },
    { name:"Vnuk Gagarina", cyr:"Внук Гагарина · Панин", year:"2007",
      absurd:{ es:"La afirmación no verificable de un chico obliga al sistema a procesarla; la propia película fue renombrada por orden judicial.", en:"A kid's unverifiable claim forces the system to process it; the film itself was renamed by court order.", ru:"Непроверяемое заявление ребёнка вынуждает систему его обработать; сам фильм переименовали по решению суда.", paloma:"Coo coo coo coo coo coo coo coo coo coo; coo coo coo coo coo coo coo." },
      takes:{ es:"La realidad censura a la ficción: una diapositiva tachada «por orden judicial». Las palomas no comentan.", en:"Reality redacts fiction: a slide struck through “by court order”. The pigeons do not comment.", ru:"Реальность цензурирует вымысел: слайд, зачёркнутый «по решению суда». Голуби не комментируют.", paloma:"Coo coo coo coo: coo coo coo «coo coo coo». Coo coo coo coo." } }
  ];

  /* ---------------- kit ---------------- */
  var KIT = [
    { t:"КУ!", d:{ es:"Saludo oficial. El público dirá «cu». Eso ya es una victoria.", en:"Official greeting. The audience will say “koo”. That is already a win.", ru:"Официальное приветствие. Публика скажет «ку». Это уже победа.", paloma:"Coo coo. Coo coo «ку». Coo coo coo." } },
    { t:"ГРАВИЦАППА", d:{ es:"El componente que hace posible la doctrina. SIN GRAVITSAPPA NO HAY VEREDICTO.", en:"The component that makes the doctrine possible. WITHOUT GRAVITSAPPA THERE IS NO VERDICT.", ru:"Компонент, делающий доктрину возможной. БЕЗ ГРАВИЦАППЫ НЕТ ВЕРДИКТА.", paloma:"Coo coo coo coo coo. COO COO COO COO COO." } },
    { t:"EL COLOR DEL PANTALÓN", d:{ es:"El nivel de acceso se determina por el color del pantalón del agente.", en:"Access level is determined by the colour of the agent's trousers.", ru:"Уровень доступа определяется цветом штанов агента.", paloma:"Coo coo coo coo coo coo coo coo coo." } },
    { t:"EL ESPEJO DE PYL", d:{ es:"Usted vio su verdadera forma durante 0,4 segundos.", en:"You saw your true form for 0.4 seconds.", ru:"Вы видели свою истинную форму 0,4 секунды.", paloma:"Coo coo coo coo coo coo 0,4 coo." } },
    { t:"EL JARRÓN DE ARCILLA", d:{ es:"El expediente viaja por mensajero, en un jarrón de arcilla. Nadie sabe por qué. Motivos operativos.", en:"The file travels by courier, in a clay jar. Nobody knows why. Operational reasons.", ru:"Дело едет курьером, в глиняном кувшине. Никто не знает почему. Оперативные причины.", paloma:"Coo coo coo coo, coo coo coo coo. Coo coo coo coo. Coo coo." } },
    { t:"UNIDAD NÓHCIP", d:{ es:"Эцилоп: la unidad que vigila a los que vigilan. PICHÓN al revés.", en:"Эцилоп: the unit that watches the watchers. PICHÓN backwards.", ru:"Эцилоп: подразделение, следящее за следящими. PICHÓN наоборот.", paloma:"Эцилоп: coo coo coo coo coo coo. PICHÓN coo coo." } },
    { t:"EL CHAPITEAU", d:{ es:"El chapiteau ardió. Esto es normal.", en:"The circus tent burned down. This is normal.", ru:"Шапито сгорело. Это нормально.", paloma:"Coo coo coo. Coo coo coo." } },
    { t:"BIBLIOGRAFÍA OFICIAL", d:{ es:"1984 — veredicto: optimista. Crimen y Castigo — sin cargos, el ave actuó sola.", en:"1984 — verdict: optimistic. Crime and Punishment — no charges, the bird acted alone.", ru:"1984 — вердикт: оптимистично. Преступление и наказание — без обвинений, птица действовала одна.", paloma:"1984 — coo: coo. Coo coo Coo — coo coo, coo coo coo." } }
  ];

  /* ---------------- render ---------------- */
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  function render(lang){
    var t = UI[lang] || UI.es;
    document.documentElement.setAttribute("lang", lang === "paloma" ? "es" : lang);

    // static [data-i18n]
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i=0;i<nodes.length;i++){
      var k = nodes[i].getAttribute("data-i18n");
      if (t[k] != null) nodes[i].textContent = t[k];
    }

    // rules
    var rc = document.getElementById("rules-cards"); rc.innerHTML = "";
    RULES.forEach(function(r){
      var card = document.createElement("div"); card.className = "card";
      var html = '<span class="clevel">'+esc(r.level)+'</span>';
      html += '<h3>'+esc(r.title[lang]||r.title.es)+'</h3>';
      if (r.body) html += '<p>'+esc(r.body[lang]||r.body.es)+'</p>';
      if (r.items){
        html += '<ul>';
        r.items.forEach(function(it){
          html += '<li class="'+(it.cls||"")+'">'+esc(it.txt[lang]||it.txt.es)+'</li>';
        });
        html += '</ul>';
      }
      card.innerHTML = html;
      rc.appendChild(card);
    });

    // pantheon
    var pt = document.getElementById("pantheon"); pt.innerHTML = "";
    PANTHEON.forEach(function(g){
      var d = document.createElement("div"); d.className="godcard";
      d.innerHTML = '<div class="g-name">'+esc(g.name)+'</div>'+
        '<div class="g-role">'+esc(g.role[lang]||g.role.es)+'</div>'+
        '<div class="g-desc">'+esc(g.desc[lang]||g.desc.es)+'</div>';
      pt.appendChild(d);
    });

    // films
    var fb = document.getElementById("films-body"); fb.innerHTML = "";
    FILMS.forEach(function(f){
      var tr = document.createElement("tr");
      tr.innerHTML =
        '<td><span class="f-name">'+esc(f.name)+'</span><span class="f-cyr">'+esc(f.cyr)+'</span></td>'+
        '<td class="f-year">'+esc(f.year)+'</td>'+
        '<td class="f-absurd">'+esc(f.absurd[lang]||f.absurd.es)+'</td>'+
        '<td class="f-takes">'+esc(f.takes[lang]||f.takes.es)+'</td>';
      fb.appendChild(tr);
    });

    // kit
    var kit = document.getElementById("kit"); kit.innerHTML = "";
    KIT.forEach(function(k){
      var d = document.createElement("div"); d.className="kititem";
      d.innerHTML = '<div class="k-t">'+esc(k.t)+'</div><div class="k-d">'+esc(k.d[lang]||k.d.es)+'</div>';
      kit.appendChild(d);
    });

    // active button
    var btns = document.querySelectorAll("#lang button");
    for (var j=0;j<btns.length;j++){
      btns[j].classList.toggle("on", btns[j].getAttribute("data-lang")===lang);
    }
    try { localStorage.setItem("pichon_lang", lang); } catch(e){}
  }

  /* ---------------- entrance ---------------- */
  function runEntrance(){
    var ent = document.getElementById("entrance");
    var bars = document.querySelectorAll("#bars .bar");
    var idx = 0;
    var seq = setInterval(function(){
      if (idx < bars.length){ bars[idx].classList.add("on"); idx++; }
      else { clearInterval(seq); }
    }, 260);
    function dismiss(){ ent.classList.add("gone"); }
    document.getElementById("enter-btn").addEventListener("click", dismiss);
    ent.addEventListener("click", function(e){ if (e.target === ent) dismiss(); });
    document.getElementById("skip").addEventListener("click", dismiss);
    // auto-dismiss safety after the lights sequence + a beat
    setTimeout(function(){ if (!ent.classList.contains("gone")) { /* leave it; user enters */ } }, 4000);
  }

  /* ---------------- boot ---------------- */
  function boot(){
    var lang = "es";
    try { var s = localStorage.getItem("pichon_lang"); if (s && UI[s]) lang = s; } catch(e){}
    render(lang);
    var lb = document.getElementById("lang");
    lb.addEventListener("click", function(e){
      var b = e.target.closest("button[data-lang]");
      if (b) render(b.getAttribute("data-lang"));
    });
    runEntrance();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
