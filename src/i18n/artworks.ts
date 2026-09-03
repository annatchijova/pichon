import spyMemeImg from '../assets/images/is_this_a_spy_1788303449247.jpg';
import conspiracyImg from '../assets/images/conspiracy_wall_1788303800505.jpg';
import panel1Img from '../assets/images/expanding_pigeon_1_1788304121132.jpg';
import panel2Img from '../assets/images/expanding_pigeon_2_1788304138915.jpg';
import panel3Img from '../assets/images/expanding_pigeon_3_1788304152496.jpg';
import panel4Img from '../assets/images/expanding_pigeon_4_1788304164229.jpg';
import twoButtonsImg from '../assets/images/two_buttons_sweating_meme_1788304496432.jpg';
import surprisedReactionImg from '../assets/images/surprised_office_worker_reaction_1788304638332.jpg';
import distractedBoyfriendImg from '../assets/images/distracted_boyfriend_pigeon_1788305029252.jpg';
import theyDontKnowCockroachImg from '../assets/images/they_dont_know_cockroach_party_1788305180984.jpg';
import crowNobodyBelievesImg from '../assets/images/crow_nobody_believes_podium_1788305510812.jpg';
import securityOpsPigeonImg from '../assets/images/security_ops_pigeon_tracking_1788305637753.jpg';
import cockroachTacticalImg from '../assets/images/cockroach_tactical_backpack_1788305958876.jpg';
import cockroachDatacenterImg from '../assets/images/cockroach_datacenter_isometric_1788306069747.jpg';
import coldWarPigeonImg from '../assets/images/cold_war_pigeon_documentary_1788306179413.jpg';
import declassifiedDossierImg from '../assets/images/declassified_dossier_pigeons_1788306379450.jpg';
import corporatePigeonImg from '../assets/images/corporate_pigeon_headshot_1788306483828.jpg';
import antEthernetImg from '../assets/images/ant_ethernet_cable_macro_1788306621008.jpg';
import waspFirewallImg from '../assets/images/wasp_firewall_server_room_1788306714176.jpg';
import cordycepsAntImg from '../assets/images/cordyceps_ant_fiber_optics_1788306789240.jpg';
import siberiaOriginImg from '../assets/images/bitten_in_siberia_origin_1788306901543.jpg';
import doubleAgentImg from '../assets/images/double_agent_silhouette_noir_1788306991871.jpg';
import constructivistPigeonImg from '../assets/images/constructivist_pigeon_poster_1788307071105.jpg';
import whiteboardChartImg from '../assets/images/pigeon_suspicion_whiteboard_chart_1788307163586.jpg';
import invisibleBackpackImg from '../assets/images/invisible_backpack_cockroach_1788307203437.jpg';
import escalatedAiImg from '../assets/images/escalated_to_ai_control_room_1788307329221.jpg';

export type ArtCategory =
  | 'single'
  | 'expanding-panel'
  | 'buttons-meme'
  | 'trio-meme'
  | 'thought-meme';

export interface DualButtonPreset {
  left: string;
  right: string;
  caption?: string;
}

export interface TrioPreset {
  boyfriend: string;
  girlfriend: string;
  pigeon: string;
  caption?: string;
}

export interface ArtItem {
  id: string;
  category: ArtCategory;
  title: string;
  subtitle: string;
  levelBadge?: string;
  image: string;
  defaultCaption: string;
  buttonLeft?: string;
  buttonRight?: string;
  tagBoyfriend?: string;
  tagGirlfriend?: string;
  tagPigeon?: string;
  prompt: string;
  description: string;
  presets: string[];
  dualButtonPresets?: DualButtonPreset[];
  trioPresets?: TrioPreset[];
  /** Default caption shown in the Expanding Brain collage editor. */
  collageDefault?: string;
}

export const ARTWORKS_ES: ArtItem[] = [
  {
    id: 'spy-pigeon',
    category: 'single',
    title: '1. ¿Es esto un espía?',
    subtitle: 'Meme de la mariposa (literal con paloma)',
    image: spyMemeImg,
    defaultCaption: '¿Es esto un espía?',
    prompt: `1. "Is this a spy?" (butterfly meme, but literal) A young man in a casual shirt pointing with an open hand at a common city pigeon standing on a sidewalk, anime-inspired flat illustration style, bright daylight, city street background, the man looks confused and earnest, square format, no text, no logos.`,
    description:
      'Ilustración plana estilo anime de los 90 recreando el clásico meme "¿Es esto una paloma?": un joven desconcertado y formal señalando con la palma abierta a una paloma en la acera.',
    presets: [
      '¿Es esto un espía?',
      '¿Es un dron del gobierno?',
      '¿Es un agente encubierto?',
      '¿Es esto una paloma?',
      'Los pájaros no son reales',
    ],
  },
  {
    id: 'corkboard-wall',
    category: 'single',
    title: '2. Muro de Conspiración',
    subtitle: 'Tablero de corcho, hilos rojos y el calcetín',
    image: conspiracyImg,
    defaultCaption: 'Todo está conectado...',
    prompt: `2. Corkboard conspiracy wall A dim room lit by a single desk lamp, a large corkboard covered with surveillance-style photos of pigeons, cockroaches, a crow and one lone sock, all connected with red string and pushpins, a person seen from behind in a hoodie staring at it, cinematic, moody, no text, no logos.`,
    description:
      'Habitación en penumbra iluminada por una lámpara de escritorio. Un gran tablero de corcho con fotos de palomas, cucarachas, un cuervo y un calcetín solitario, unidos por hilos rojos y chinchetas.',
    presets: [
      'Todo está conectado...',
      'El calcetín es la clave',
      'Operación Plumas Urbanas',
      'No confíes en las palomas',
      'La verdad está aquí dentro',
    ],
  },
  {
    id: 'two-buttons-sweating',
    category: 'buttons-meme',
    title: '4. Dos Botones (Hombre Sudando)',
    subtitle: 'Consola con botón gastado y botón nuevo',
    image: twoButtonsImg,
    defaultCaption: 'La decisión más difícil del agente...',
    buttonLeft: 'Creer que es un ave real',
    buttonRight: 'Aceptar que es un dron espía',
    prompt: `4. Two buttons, sweating A nervous cartoon man in a suit sweating heavily, looking at two large red buttons on a console in front of him, one button visibly worn and faded from overuse, flat vector illustration, meme style, no text, no logos.`,
    description:
      'Hombre nervioso de traje sudando intensamente frente a una consola con dos grandes botones rojos: uno notablemente desgastado y despintado por el uso excesivo, y el otro nuevo e intacto.',
    presets: [
      'La decisión más difícil del agente...',
      'El dilema del botón rojo desgastado',
      '¡No puedo evitar presionar el gastado!',
      '¿Instinto o paranoia?',
    ],
    dualButtonPresets: [
      {
        left: 'Creer que es un pájaro real (Gastado)',
        right: 'Aceptar que es un dron espía',
        caption: 'Cuando ves una paloma sospechosa:',
      },
      {
        left: 'Tirarle migas de pan (Gastado)',
        right: 'Bloquear su señal 5G',
        caption: 'Protocolo de contacto en la plaza:',
      },
      {
        left: 'Ignorar el calcetín perdido (Gastado)',
        right: 'Conectarlo al tablero con hilo rojo',
        caption: 'Organizando el caso de conspiración:',
      },
      {
        left: 'Actuar normal (Gastado)',
        right: 'Mantener contacto visual',
        caption: 'La paloma te mira fijamente:',
      },
    ],
  },
  {
    id: 'surprised-reaction',
    category: 'single',
    title: '5. Cara de Sorpresa (Oficina)',
    subtitle: 'Reacción exagerada frente al monitor (Shock / Scream)',
    image: surprisedReactionImg,
    defaultCaption: '¡CUANDO ABRES EL INFORME Y DESCUBRES LA VERDAD!',
    prompt: `5. Surprised face reaction Close-up of a shocked office worker in front of a monitor, mouth open, hands on cheeks, fluorescent office lighting, exaggerated expression, photorealistic, no text.`,
    description:
      'Primer plano fotorrealista de un empleado de oficina en estado de shock absoluto frente a su monitor, con la boca abierta y las manos en las mejillas, iluminado por la luz de la pantalla y fluorescentes de oficina.',
    presets: [
      '¡CUANDO DESCUBRES QUE LAS PALOMAS TRANSMITEN EN 4K!',
      '¡CUANDO VES EL PRESUPUESTO SECRETO DE DRONES URBANOS!',
      '¡Revisé los registros del satélite y todo encaja!',
      '¡El calcetín perdido estaba en la sala de servidores!',
      '¡NO PUEDE SER VERDAD!',
      '¡ME ESTÁN MIRANDO POR LA VENTANA!',
    ],
  },
  {
    id: 'distracted-boyfriend-pigeon',
    category: 'trio-meme',
    title: '6. Novio Distraído (Versión Animal)',
    subtitle: 'Hombre mirando a la paloma con mini mochila negra',
    image: distractedBoyfriendImg,
    defaultCaption: 'Prioridades en la calle...',
    tagBoyfriend: 'Yo',
    tagGirlfriend: 'Mi cita / Mi rutina normal',
    tagPigeon: 'Paloma con mochila táctica',
    prompt: `6. Distracted boyfriend, animal version A man walking with his girlfriend on a city street, he turns his head to look at a pigeon wearing a tiny black backpack, the girlfriend looks offended, stock-photo style, bright daylight, no text, no logos.`,
    description:
      'Recreación en estilo fotografía de stock a plena luz del día: un hombre caminando de la mano con su novia gira la cabeza fascinado para observar a una paloma que camina por la acera llevando una diminuta mochila negra, mientras la novia ofendida lo mira en shock.',
    presets: [
      'Prioridades en la calle...',
      'Cuando el espía es demasiado evidente',
      'No puedo quitarle los ojos de encima a ese dron',
      '¡Tiene una mochila! ¿Es que nadie más lo ve?',
    ],
    trioPresets: [
      {
        boyfriend: 'Yo',
        girlfriend: 'Mi vida normal y tranquila',
        pigeon: 'Paloma con mochila táctica espía',
        caption: 'Caminando por la ciudad:',
      },
      {
        boyfriend: 'Mis pensamientos a las 3 AM',
        girlfriend: 'Dormir 8 horas',
        pigeon: '¿Qué lleva la paloma en la mochila?',
        caption: 'En la cama intentando dormir:',
      },
      {
        boyfriend: 'Investigador de conspiraciones',
        girlfriend: 'Hechos comprobables',
        pigeon: 'Prueba irrefutable con arnés negro',
        caption: 'Encontrando la verdad:',
      },
      {
        boyfriend: 'Mi atención en la calle',
        girlfriend: 'Conversación seria',
        pigeon: 'Agente alado en misión de entrega',
        caption: 'Cuando sales a pasear:',
      },
    ],
  },
  {
    id: 'they-dont-know-cockroach',
    category: 'thought-meme',
    title: '7. "No saben..." (Cucaracha en la Fiesta)',
    subtitle: 'Cucaracha tamaño humano sola en la esquina con bebida',
    image: theyDontKnowCockroachImg,
    defaultCaption: 'No saben que puedo sobrevivir a una explosión nuclear...',
    prompt: `7. "They don't know" party corner A crowded house party, everyone chatting and laughing, in the corner a single cockroach the size of a person standing alone holding a drink, wide shot, warm party lighting, photorealistic composite, no text.`,
    description:
      'Plano general cinematográfico con iluminación cálida de una fiesta casera repleta de gente charlando y riendo. En la esquina, una cucaracha solitaria del tamaño de una persona de pie en dos patas con un vasito de fiesta, marginada y reflexionando sobre la verdad.',
    presets: [
      'No saben que puedo sobrevivir a una explosión nuclear...',
      'No saben que las palomas transmiten en 4K...',
      'No saben que vivo detrás del refrigerador...',
      'No saben que el calcetín del tablero era mío...',
      'Ellos bailan mientras el mundo no sabe la verdad...',
      'No saben que el satélite ya sincronizó los datos...',
      'They don’t know I’m listening to everything...',
    ],
  },
  {
    id: 'crow-nobody-believes',
    category: 'single',
    title: '8. Cuervo en el Podio (Nadie le cree)',
    subtitle: 'Rueda de prensa sobre la conspiración ante auditorio vacío',
    image: crowNobodyBelievesImg,
    defaultCaption: 'Tengo pruebas de que las palomas trabajan para el gobierno...',
    prompt: `8. Crow nobody believes A crow standing on a podium with a microphone in front of an empty audience of folding chairs, one bored human security guard in the back, editorial photography, muted colors, no text.`,
    description:
      'Fotografía editorial en tonos apagados y cinematográficos. Un cuervo negro de pie sobre un atril de madera con micrófono clásico hablando seriamente a una sala vacía de sillas plegables, con un guardia aburrido recostado al fondo.',
    presets: [
      'Tengo pruebas irrefutables de que las palomas son drones...',
      '¡Nadie vino a la rueda de prensa sobre el calcetín!',
      'El satélite se sincroniza a las 3 AM y nadie me escucha.',
      'Llevo 5 años investigando y esta es la audiencia que me dan.',
      'Por favor, guarden silencio para las preguntas... Oh.',
      'Los medios tradicionales intentan ocultar mi mensaje.',
      'Mi verdad incomoda a la sociedad.',
    ],
  },
  {
    id: 'security-ops-pigeon',
    category: 'single',
    title: '9. Centro de Operaciones (SOC)',
    subtitle: 'Analistas de ciberseguridad rastreando a la paloma en pantallas gigantes',
    image: securityOpsPigeonImg,
    defaultCaption: 'OBJETIVO IDENTIFICADO: Paloma urbana transmitiendo telemetría en tiempo real',
    prompt: `9. Security operations center watching a pigeon Corporate stock photo, photorealistic: a cybersecurity operations room with serious analysts in front of huge wall screens, the screens show a close-up of an ordinary city pigeon with tracking overlays, cool blue lighting, wide shot, no text, no logos.`,
    description:
      'Fotografía corporativa fotorrealista de una sala de operaciones de seguridad de alta tecnología (SOC). Analistas serios en trajes observan pantallas gigantes de pared que muestran un primer plano en vivo de una paloma común con superposiciones tácticas de rastreo y reconocimiento biométrico bajo iluminación azul fría.',
    presets: [
      'OBJETIVO IDENTIFICADO: Paloma urbana transmitiendo telemetría',
      '¡Alerta roja! El sujeto 04 está picoteando migajas en el sector 7',
      'Monitoreando enlace satelital con el nodo de la plaza mayor',
      'Activando rastreo biométrico de plumas y escaneo retiniano',
      'El calcetín ha cambiado de ubicación. Repito: el calcetín se mueve',
      'Todo el presupuesto del departamento invertido en esta paloma',
      'Confirmado: No es un pájaro ordinario',
    ],
  },
  {
    id: 'cockroach-tactical-backpack',
    category: 'single',
    title: '10. Cucaracha Táctica',
    subtitle: 'Fotografía macro de producto con mini mochila negra mate y antena',
    image: cockroachTacticalImg,
    defaultCaption: 'UNIDAD TERRESTRE DE INFILTRACIÓN: Modelo C-9 con antena microtransmisora',
    prompt: `10. Cockroach with tactical backpack Macro product photography: a cockroach wearing a tiny matte-black tactical backpack with a miniature antenna, neutral grey studio background, soft professional lighting, sharp focus, no text.`,
    description:
      'Fotografía macro de producto en estudio con iluminación suave y fondo gris neutro. Una cucaracha con enfoque ultra nítido llevando una diminuta mochila táctica negra mate con arneses a medida y una microantena metálica orientada hacia arriba.',
    presets: [
      'UNIDAD TERRESTRE DE INFILTRACIÓN: Modelo C-9 con microantena',
      'El equipo táctico de reconocimiento para ductos y tuberías',
      'Transmisor autónomo con 10 años de batería y resistencia nuclear',
      'Operando tras el refrigerador en misión encubierta',
      'Lleva el microchip robado del centro de operaciones',
      'Diseño ergonómico para misiones de sigilo nocturno',
      'No es una plaga, es tecnología militar avanzada',
    ],
  },
  {
    id: 'cockroach-datacenter-isometric',
    category: 'single',
    title: '11. Datacenter Cucaracha (Render 3D)',
    subtitle: 'Micro datacenter isométrico con racks, fibra óptica y LEDs',
    image: cockroachDatacenterImg,
    defaultCaption: 'SERVIDORES DISTRIBUIDOS: Centro de datos móvil con redundancia biológica',
    prompt: `11. Cockroach datacenter Isometric 3D render: a miniature datacenter with server racks, fiber-optic cables and blinking LEDs mounted on the back of a cockroach, clean technical illustration style, soft shadows, no text.`,
    description:
      'Render 3D isométrico con estilo de ilustración técnica limpia y sombras suaves. Una cucaracha que transporta un micro datacenter modular en su espalda con racks de servidores, ventiladores diminutos, fibra óptica brillante y luces LED parpadeantes.',
    presets: [
      'SERVIDORES DISTRIBUIDOS: Centro de datos móvil de alta disponibilidad',
      '99.999% de uptime garantizado gracias a la resistencia biológica',
      'Red descentralizada de microservidores en ductos de ventilación',
      'Procesando telemetría de las palomas directamente en el borde (Edge)',
      'Nube biológica: cuando se cae AWS pero tu cucaracha sigue en pie',
      'Arquitectura de microservicios sobre insectos de combate',
      'Servidor de respaldo ubicado en la cocina corporativa',
    ],
  },
  {
    id: 'cold-war-pigeon',
    category: 'single',
    title: '12. Paloma de la Guerra Fría',
    subtitle: 'Fotografía documental en blanco y negro con grano fílmico y atmósfera de espionaje',
    image: coldWarPigeonImg,
    defaultCaption: 'BERLÍN, 1962: El agente 09 reportándose en la cornisa del ministerio',
    prompt: `12. Cold-war pigeon Black and white documentary photograph with heavy film grain, cold-war era mood: a lone pigeon on the window ledge of an imposing government building, dramatic low angle, overcast sky, no text.`,
    description:
      'Fotografía documental en blanco y negro con marcado grano fílmico analógico y estética de Guerra Fría. Una solitaria paloma posada sobre la cornisa de piedra de un imponente edificio gubernamental brutalista con rejas de hierro, vista en contrapicado dramático bajo un cielo nublado.',
    presets: [
      'BERLÍN, 1962: El agente 09 reportándose en la cornisa del ministerio',
      'La Guerra Fría nunca terminó: solo cambió de plumaje',
      'Esperando el microfilme escondido tras el marco de la ventana',
      'Fotografía clasificada desclasificada 60 años después',
      'Vigilancia estática en el sector este de la embajada',
      'El origen del proyecto: Archivos secretos de 1964',
      'Sin micrófonos visibles. Solo plumas y sospechas.',
    ],
  },
  {
    id: 'declassified-dossier',
    category: 'single',
    title: '14. Expediente Desclasificado',
    subtitle: 'Flat lay cenital con carpeta manila, fotos de palomas, lupa y sellos rojos',
    image: declassifiedDossierImg,
    defaultCaption: 'DOCUMENTO TOP SECRET DESCLASIFICADO: Operación Plumas de Acero',
    prompt: `14. Declassified dossier Top-down flat lay under harsh light: an open manila folder on a wooden desk with surveillance photos of pigeons, a red rubber stamp, a magnifying glass and paper clips, declassified-archive aesthetic, no text, no logos.`,
    description:
      'Fotografía flat lay cenital bajo luz dura de interrogatorio sobre un escritorio de madera envejecida. Una carpeta manila abierta con fotos de vigilancia en blanco y negro de palomas rodeadas en rotulador rojo, un sello de goma rojo clásico, lupa de latón, clips y papeles con censura de barras negras.',
    presets: [
      'DOCUMENTO TOP SECRET DESCLASIFICADO: Operación Plumas de Acero',
      'Expediente #404: Evidencia fotográfica de vigilancia aviar',
      'Informes censurados del comité de inteligencia urbana',
      'Bajo la lupa: cada parque público es una zona de espionaje',
      'Sello de CONFIDENCIAL revocado: la verdad sale a la luz',
      'Análisis forense de microcámaras en plumaje',
      'Pruebas irrefutables archivadas durante décadas',
    ],
  },
  {
    id: 'corporate-pigeon-headshot',
    category: 'single',
    title: '15. Retrato Corporativo (LinkedIn)',
    subtitle: 'Retrato formal de estudio con auricular de seguridad y fondo degradado',
    image: corporatePigeonImg,
    defaultCaption: 'Director Senior de Vigilancia Aérea y Monitoreo de Migajas',
    prompt: `15. Corporate pigeon headshot Formal corporate headshot, LinkedIn style: a pigeon wearing a security-agent earpiece, grey gradient studio background, professional three-point lighting, serious expression, no text.`,
    description:
      'Retrato fotográfico corporativo formal estilo LinkedIn. Una paloma con porte distinguido y expresión de máxima seriedad, equipada con un auricular de tubo acústico transparente de agente secreto. Fondo degradado gris de estudio con iluminación profesional a tres puntos y reflejos en la mirada.',
    presets: [
      'Director Senior de Vigilancia Aérea y Monitoreo de Migajas',
      'Abierto a nuevas oportunidades en inteligencia urbana (Open to Work)',
      '10+ años de experiencia en reconocimiento táctico en plazas',
      'Especialista en recolección pasiva de migajas y datos confidenciales',
      'Liderando la transformación digital de la red aviar encubierta',
      'Cuando actualizas tu foto de perfil tras ser promovido a Agente Especial',
      'Contacto en LinkedIn: Lic. Paloma G. - CISO de Seguridad Urbana',
    ],
  },
  {
    id: 'ant-ethernet-cable',
    category: 'single',
    title: '16. Hormiga con Cable Ethernet',
    subtitle: 'Fotografía macro con casco amarillo instalando cable de red en tierra',
    image: antEthernetImg,
    defaultCaption: 'TÉCNICO DE REDES: Instalando conexión física para el servidor subterráneo',
    prompt: `16. Ant with ethernet cable Macro photography: an ant carrying a miniature ethernet cable across bare soil, wearing a tiny yellow construction helmet, shallow depth of field, natural light, no text.`,
    description:
      'Fotografía macro de naturaleza y alta resolución con luz natural. Una hormiga obrera trabajadora que cruza el suelo llevando un cable de red Ethernet RJ45 azul en miniatura mientras lleva puesto un diminuto casco amarillo de seguridad y construcción. Profundidad de campo súper reducida con bokeh suave.',
    presets: [
      'TÉCNICO DE REDES: Instalando conexión física para el servidor subterráneo',
      'Capa 1 del modelo OSI: Transporte físico de paquetes de datos',
      'Tirando cableado estructurado Cat6 hasta el hormiguero principal',
      'Soporte técnico de guardia: cuando el WiFi falla y toca cablear',
      'Infraestructura subterránea de telecomunicaciones biológicas',
      'Salario mínimo pero con casco reglamentario de seguridad',
      'Ping 1ms: la fibra óptica del reino animal en marcha',
    ],
  },
  {
    id: 'wasp-firewall',
    category: 'single',
    title: '17. Avispa Firewall (Sala de Servidores)',
    subtitle: 'Primer plano dramático de avispa custodiando la puerta con luz roja y humo',
    image: waspFirewallImg,
    defaultCaption: 'FIREWALL HARDWARE: Intento de acceso no autorizado detectado',
    prompt: `17. Wasp firewall Dramatic close-up of a wasp hovering in front of a glowing red server room door, cinematic backlight, smoke, sci-fi thriller mood, no text.`,
    description:
      'Cinematografía dramática en primer plano con atmósfera de thriller de ciencia ficción y ciberseguridad. Una avispa intimidante suspendida en el aire custodiando la puerta blindada e iluminada en rojo carmesí de una sala de servidores de máxima seguridad, con humo flotante, contraluz volumétrico y destellos de lente.',
    presets: [
      'FIREWALL HARDWARE: Intento de acceso no autorizado detectado',
      'Regla del Cortafuegos: El que intente entrar recibe 300 picaduras/segundo',
      'Sistema de prevención de intrusiones con aguijón biológico',
      'Puerto 443 bloqueado. Permiso denegado por el administrador',
      'Autenticación biométrica fallida: Protocolo de ataque aéreo iniciado',
      'El firewall más agresivo de la empresa: no admite excepciones',
      'Acceso restringido: Zona de alta tensión y servidores centrales',
    ],
  },
  {
    id: 'cordyceps-v2-endpoint',
    category: 'single',
    title: '18. Endpoint Cordyceps v2 (Fibra Óptica)',
    subtitle: 'Fotografía macro científica de hormiga con tallo fúngico bioluminiscente azul',
    image: cordycepsAntImg,
    defaultCaption: 'ENDPOINT INFECTADO: Nodo biológico reprogramado transmitiendo en fibra óptica',
    prompt: `18. Cordyceps v2 endpoint Macro photography of an ant on a leaf with a fungal stalk growing from its head, but the stalk is faintly glowing blue like fiber optics, dark forest background, moody, scientific-documentary style, no text.`,
    description:
      'Fotografía macro documental científica estilo BBC Planet Earth. Una hormiga aferrada a una hoja de la selva en la oscuridad de la noche, con un tallo de hongo Cordyceps que brota detrás de su cabeza emitiendo un brillo bioluminiscente azul cian como cables de fibra óptica de transmisión de datos.',
    presets: [
      'ENDPOINT INFECTADO: Nodo biológico reprogramado transmitiendo en fibra óptica',
      'Malware Cordyceps v2.0: Control total del huésped y transmisión de datos',
      'El hongo no es un parásito: es una interfaz de red cerebral',
      'Transmisión de telemetría a 10 Gbps a través de esporas fúngicas',
      'Huésped comprometido: Ejecutando comandos del servidor central',
      'Bioluminiscencia de alta velocidad en la selva profunda',
      'Cuando el firmware del bosque se actualiza solo',
    ],
  },
  {
    id: 'bitten-in-siberia-origin',
    category: 'single',
    title: '19. Mordido en Siberia (Origen Dahgoth)',
    subtitle: 'Fotograma cinematográfico en 35mm en calle nevada con paloma en el hombro',
    image: siberiaOriginImg,
    defaultCaption: 'TODO COMENZÓ AQUÍ: El primer contacto en una gélida noche siberiana',
    prompt: `19. Bitten in Siberia (Dahgoth origin) Cinematic still: a young man in a heavy winter coat standing in a snowy Siberian street, a pigeon perched on his shoulder, he looks slightly alarmed, cold blue light, film grain, no text, no logos.`,
    description:
      'Fotograma cinematográfico en película de 35mm con grano auténtico. Un joven abrigado con un pesado abrigo de invierno y bufanda de lana en una calle nevada de Siberia durante el crepúsculo gélido. Una solitaria paloma urbana posada en su hombro mientras él mira con expresión de alerta e inquietud bajo una fría luz azul desaturada.',
    presets: [
      'TODO COMENZÓ AQUÍ: El primer contacto en una gélida noche siberiana',
      'El origen del protocolo Dahgoth: transmisión de la señal',
      'Sentí un picotazo en el hombro y de repente entendí todo el código fuente',
      '-40°C en Siberia: Ni el frío detiene la sincronización de datos',
      'No era una paloma común. Me miró y supe que ya no estaba solo',
      'Paciente Cero: Cuando la red aviar te elige como nuevo nodo',
      'Fotograma desclasificado del archivo siberiano • 1987',
    ],
  },
  {
    id: 'double-agent-silhouette',
    category: 'single',
    title: '20. Silueta del Doble Agente (Estilo Noir)',
    subtitle: 'Silueta bajo la farola con una paloma en un hombro y un cuervo en el otro',
    image: doubleAgentImg,
    defaultCaption: 'DOBLE AGENTE: Negociando secretos entre la facción de palomas y cuervos',
    prompt: `20. Double agent silhouette Silhouette of a man in a long coat under a streetlamp at night, a pigeon on one shoulder and a crow on the other, fog, noir style, high contrast, no text.`,
    description:
      'Fotografía de cine negro en alto contraste blanco y negro. La silueta misteriosa de un hombre con gabardina bajo la luz directa de una farola solitaria en un callejón adoquinado y mojado en la noche. Una paloma en un hombro y un gran cuervo negro en el otro, envueltos en niebla densa y sombras dramáticas.',
    presets: [
      'DOBLE AGENTE: Negociando secretos entre la facción de palomas y cuervos',
      'Lealtad dividida: Un hombro para la vigilancia diurna, otro para la nocturna',
      'En la niebla de la ciudad, nadie sabe para qué bando vuelas',
      'El intermediario supremo de las dos mayores redes de espionaje aéreo',
      'La paloma reporta migas; el cuervo ejecuta el ataque',
      'Bajo la farola del muelle, las órdenes nunca se escriben en papel',
      'Ni paloma ni cuervo: el hombre que susurraba a las dos alas del poder',
    ],
  },
  {
    id: 'constructivist-pigeon-poster',
    category: 'single',
    title: '21. Cartel Constructivista (Años 20)',
    subtitle: 'Propaganda geométrica vanguardista con ondas de radio y paloma en ángulo diagonal',
    image: constructivistPigeonImg,
    defaultCaption: '¡PROLETARIADO ALADO! Transmitiendo la señal de radio a toda la vanguardia',
    prompt: `21. Constructivist pigeon poster 1920s constructivist propaganda poster style: a heroic pigeon in a dramatic diagonal angle with geometric radio waves radiating from its head, red, black and cream palette, bold flat shapes, no text.`,
    description:
      'Cartel de propaganda de estilo constructivista soviético de los años 1920 (inspirado en Rodchenko y El Lissitzky). Una paloma heroica y estilizada en una poderosa perspectiva diagonal ascendente, con ondas de radio concéntricas y rayos angulares que irradian desde su cabeza en una paleta estricta de rojo carmesí, negro y crema vintage.',
    presets: [
      '¡PROLETARIADO ALADO! Transmitiendo la señal de radio a toda la vanguardia',
      '¡TODAS LAS FRECUENCIAS AL SERVICIO DE LA RED DE PALOMAS!',
      'Vigilancia revolucionaria: Ondas geométricas en cada esquina',
      'El arte de la vanguardia aviar: Ni un secreto escapa a la antena',
      'Propaganda del Comité Central de Reconocimiento Aéreo',
      '¡HACIA LA VICTORIA DE LA TELEMETRÍA SUBTERRÁNEA Y AÉREA!',
      'Geometría, radiofrecuencia y migajas para el pueblo',
    ],
  },
  {
    id: 'pigeon-suspicion-chart',
    category: 'single',
    title: '22. Gráfico de Sospecha en Pizarra',
    subtitle: 'Foto de oficina con gráfico de barras dibujado a mano y la última barra disparada en rojo',
    image: whiteboardChartImg,
    defaultCaption: 'NIVEL DE SOSPECHA: Perro < Gato < Vecino < Inspector < PALOMA EN EL TEJADO',
    prompt: `22. Pigeon suspicion chart, hand-drawn Whiteboard photo: a hand-drawn bar chart in marker with five bars of increasing height, the last one wildly taller and circled several times in red, a coffee mug in the corner, office lighting, no text.`,
    description:
      'Foto realista de una pizarra de oficina con iluminación fluorescente. Un gráfico de barras dibujado a mano con rotulador que muestra cinco barras de altura creciente; la quinta y última barra se dispara exponencialmente hacia arriba y está rodeada con círculos enfáticos de rotulador rojo. En la esquina descansa una taza de café de oficina.',
    presets: [
      'NIVEL DE SOSPECHA: Perro < Gato < Vecino < Inspector < PALOMA EN EL TEJADO',
      'Métrica de la reunión: La barra 5 es 100% actividad de drones encubiertos',
      'Probabilidad de que el pájaro de tu balcón sea un agente estatal',
      'Presentación al equipo de seguridad: "Los datos no mienten, miren la quinta barra"',
      'Gasto de presupuesto del departamento: 95% en investigar a la paloma del parque',
      'Índice de paranoia semanal según el número de picotazos en la ventana',
      'Gráfico definitivo presentado en la junta directiva de ciberseguridad',
    ],
  },
  {
    id: 'invisible-backpack-cockroach',
    category: 'single',
    title: '23. La Mochila Invisible (Diseño de Producto)',
    subtitle: 'Fotografía macro de producto en estudio blanco con silueta punteada flotante de mochila',
    image: invisibleBackpackImg,
    defaultCaption: 'DISEÑO DE EQUIPO: Espacio de carga táctico reservado para hardware espía',
    prompt: `23. The invisible backpack Macro product shot of a cockroach on a white surface with an empty dotted-line outline hovering above its back where a backpack would be, clean studio lighting, minimalist, no text.`,
    description:
      'Fotografía macro de producto comercial en estudio limpio y minimalista. Una cucaracha realista sobre una superficie blanca mate con iluminación de catálogo de diseño. Flotando directamente sobre su lomo, una silueta gráfica en línea de puntos discontinua muestra el esquema donde se acopla la mochila táctica.',
    presets: [
      'DISEÑO DE EQUIPO: Espacio de carga táctico reservado para hardware espía',
      'Mochila táctica modelo Stealth-9: 0 gramos de peso, 100% indetectable',
      'Inserte aquí: Micrófono láser, microprocesador o antena de 5.8 GHz',
      'Catálogo de accesorios tácticos para agentes de infiltración rastrera',
      'Mochila invisible vendida por separado en la tienda del departamento',
      'Línea discontinua: Zona de anclaje de nanotecnología de vigilancia',
      'Cuando el presupuesto militar solo alcanzó para el plano de la mochila',
    ],
  },
  {
    id: 'escalated-to-ai',
    category: 'single',
    title: '24. Escalado a la IA (Sala de Control Roja)',
    subtitle: 'Plano general cinematográfico de sala de control vacía en la noche con todas las pantallas en rojo',
    image: escalatedAiImg,
    defaultCaption: 'ALERTA ROJA: El sistema ha sido transferido al control total de la IA',
    prompt: `24. Escalated to the AI Wide cinematic shot of an empty control room at night, every screen glowing red, one chair spinning slowly, no people, thriller mood, no text.`,
    description:
      'Plano panorámico cinematográfico de un centro de control y operaciones de ciberseguridad a medianoche. Completamente desierto, sin personas. Cientos de pantallas y monitores emiten un intenso resplandor de alerta roja de emergencia con datos y bloqueos en cascada. En primer plano, una silla ejecutiva gira lentamente en soledad.',
    presets: [
      'ALERTA ROJA: El sistema ha sido transferido al control total de la IA',
      'Incidente de seguridad crítico: "El operador humano ya no tiene permisos"',
      'Cuando el modelo autónomo toma el control de todos los firewalls',
      'Medianoche en el SOC: Las pantallas parpadean en rojo y no queda nadie',
      'Protocolo Cero activado: La IA ha bloqueado los accesos físicos y lógicos',
      'Silla vacía girando lentamente: La última decisión ya no fue humana',
      'El final de la investigación: La red de palomas y la IA se han fusionado',
    ],
  },
  {
    id: 'expanding-panel-1',
    category: 'expanding-panel',
    levelBadge: 'Nivel 1 • Inocente',
    title: '3.1. Migas en la acera',
    subtitle: 'Paloma comiendo migajas de pan en la calle',
    image: panel1Img,
    defaultCaption: 'Una simple paloma comiendo migajas en la acera',
    collageDefault: 'Una simple paloma comiendo migajas',
    prompt: `Panel 1: a plain pigeon eating breadcrumbs on a sidewalk, flat photo, boring, neutral light, no text.`,
    description:
      'Ilustración plana estilo anime de una paloma común comiendo migas de pan en la acera con luz diurna neutra y cotidiana.',
    presets: [
      'Una simple paloma comiendo pan',
      'Solo un ave urbana inofensiva',
      'Ignorancia cotidiana',
      'Paseando por la plaza',
    ],
  },
  {
    id: 'expanding-panel-2',
    category: 'expanding-panel',
    levelBadge: 'Nivel 2 • Sospechoso',
    title: '3.2. Vigilancia bancaria',
    subtitle: 'Paloma apostada frente a columnas del banco',
    image: panel2Img,
    defaultCaption: 'Una unidad de reconocimiento vigilando el sector financiero',
    collageDefault: 'Unidad apostada vigilando el banco',
    prompt: `Panel 2: a pigeon standing in front of a bank facade with columns, slightly dramatic angle, no text.`,
    description:
      'Paloma erguida en ángulo contrapicado frente a la imponente fachada con columnas clásicas de un banco.',
    presets: [
      'Vigilando transacciones bancarias',
      'Reconocimiento táctico financiero',
      'Posición estratégica en el banco',
      'Infiltración en Wall Street',
    ],
  },
  {
    id: 'expanding-panel-3',
    category: 'expanding-panel',
    levelBadge: 'Nivel 3 • Conectado',
    title: '3.3. Antena al anochecer',
    subtitle: 'Paloma en lo alto transmitiendo datos sobre la ciudad',
    image: panel3Img,
    defaultCaption: 'Nodo de transmisión 5G triangulando la red metropolitana',
    collageDefault: 'Nodo de antena transmitiendo datos 5G',
    prompt: `Panel 3: a pigeon perched on a rooftop antenna at dusk with city lights below, cinematic, no text.`,
    description:
      'Paloma posada sobre una antena de tejado al atardecer, observando las luces de la metrópolis iluminada con gradiente crepuscular.',
    presets: [
      'Triangulando señales de radio a la base',
      'Sincronización nocturna del satélite',
      'Vigilancia metropolitana en tiempo real',
      'Descarga de datos completada al 99%',
    ],
  },
  {
    id: 'expanding-panel-4',
    category: 'expanding-panel',
    levelBadge: 'Nivel 4 • Iluminación',
    title: '3.4. El Ojo de la Verdad',
    subtitle: 'Primer plano del ojo reflejando al operador con laptop',
    image: panel4Img,
    defaultCaption: 'Cámara biométrica con sensor óptico y enlace directo al operador',
    collageDefault: 'Sensor óptico conectado al operador',
    prompt: `Panel 4: extreme close-up of a pigeon's eye reflecting a human silhouette holding a laptop, ultra detailed, dramatic, no text.`,
    description:
      'Macro extremo del ojo brillante de la paloma donde se refleja nítidamente la silueta del humano operando una laptop conectada.',
    presets: [
      'Cámara biométrica con enlace al operador',
      '¡EL OPERADOR SIEMPRE NOS OBSERVA!',
      'Acceso total concedido al agente encubierto',
      'LOS PÁJAROS NUNCA FUERON REALES',
    ],
  },
];
