/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  Copy,
  Check,
  Type,
  Maximize2,
  Minimize2,
  Sparkles,
  Palette,
  Eye,
  Sliders,
  Tv,
  Grid,
  Columns,
  Layers,
  Brain,
  ToggleLeft,
  Users,
  Tag,
  MessageCircle,
} from 'lucide-react';
import spyMemeImg from './assets/images/is_this_a_spy_1788303449247.jpg';
import conspiracyImg from './assets/images/conspiracy_wall_1788303800505.jpg';
import panel1Img from './assets/images/expanding_pigeon_1_1788304121132.jpg';
import panel2Img from './assets/images/expanding_pigeon_2_1788304138915.jpg';
import panel3Img from './assets/images/expanding_pigeon_3_1788304152496.jpg';
import panel4Img from './assets/images/expanding_pigeon_4_1788304164229.jpg';
import twoButtonsImg from './assets/images/two_buttons_sweating_meme_1788304496432.jpg';
import surprisedReactionImg from './assets/images/surprised_office_worker_reaction_1788304638332.jpg';
import distractedBoyfriendImg from './assets/images/distracted_boyfriend_pigeon_1788305029252.jpg';
import theyDontKnowCockroachImg from './assets/images/they_dont_know_cockroach_party_1788305180984.jpg';
import crowNobodyBelievesImg from './assets/images/crow_nobody_believes_podium_1788305510812.jpg';
import securityOpsPigeonImg from './assets/images/security_ops_pigeon_tracking_1788305637753.jpg';
import cockroachTacticalImg from './assets/images/cockroach_tactical_backpack_1788305958876.jpg';
import cockroachDatacenterImg from './assets/images/cockroach_datacenter_isometric_1788306069747.jpg';
import coldWarPigeonImg from './assets/images/cold_war_pigeon_documentary_1788306179413.jpg';
import declassifiedDossierImg from './assets/images/declassified_dossier_pigeons_1788306379450.jpg';
import corporatePigeonImg from './assets/images/corporate_pigeon_headshot_1788306483828.jpg';
import antEthernetImg from './assets/images/ant_ethernet_cable_macro_1788306621008.jpg';
import waspFirewallImg from './assets/images/wasp_firewall_server_room_1788306714176.jpg';
import cordycepsAntImg from './assets/images/cordyceps_ant_fiber_optics_1788306789240.jpg';
import siberiaOriginImg from './assets/images/bitten_in_siberia_origin_1788306901543.jpg';
import doubleAgentImg from './assets/images/double_agent_silhouette_noir_1788306991871.jpg';
import constructivistPigeonImg from './assets/images/constructivist_pigeon_poster_1788307071105.jpg';
import whiteboardChartImg from './assets/images/pigeon_suspicion_whiteboard_chart_1788307163586.jpg';
import invisibleBackpackImg from './assets/images/invisible_backpack_cockroach_1788307203437.jpg';
import escalatedAiImg from './assets/images/escalated_to_ai_control_room_1788307329221.jpg';

interface ArtItem {
  id: string;
  category: 'single' | 'expanding-panel' | 'buttons-meme' | 'trio-meme' | 'thought-meme';
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
  dualButtonPresets?: Array<{ left: string; right: string; caption?: string }>;
  trioPresets?: Array<{ boyfriend: string; girlfriend: string; pigeon: string; caption?: string }>;
}

const ALL_ARTWORKS: ArtItem[] = [
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

const EXPANDING_BRAIN_PANELS = ALL_ARTWORKS.filter((a) => a.category === 'expanding-panel');

/**
 * Función robusta para envolver texto en múltiples líneas centradas sin desbordamiento
 */
function wrapCenteredText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth && currentLine !== '') {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.length > 0 ? lines : [text];
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'individual' | 'expanding-collage'>('individual');
  const [selectedArtId, setSelectedArtId] = useState<string>('escalated-to-ai');

  // Individual Art State
  const currentArt = ALL_ARTWORKS.find((a) => a.id === selectedArtId) || ALL_ARTWORKS[0];
  const [subtitleText, setSubtitleText] = useState(currentArt.defaultCaption);
  const [showSubtitle, setShowSubtitle] = useState(true);
  const [subtitleStyle, setSubtitleStyle] = useState<'retro-yellow' | 'clean-white' | 'meme-impact'>('retro-yellow');
  const [showVhsEffect, setShowVhsEffect] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [subtitleSize, setSubtitleSize] = useState<number>(24);
  const [subtitlePos, setSubtitlePos] = useState<'bottom' | 'top' | 'center'>('bottom');

  // Two Buttons Specific State
  const [buttonLeftText, setButtonLeftText] = useState('Creer que es un ave real');
  const [buttonRightText, setButtonRightText] = useState('Aceptar que es un dron espía');
  const [buttonOverlayMode, setButtonOverlayMode] = useState<'dual-tags' | 'standard'>('dual-tags');

  // Distracted Boyfriend Specific State
  const [tagBoyfriendText, setTagBoyfriendText] = useState('Yo');
  const [tagGirlfriendText, setTagGirlfriendText] = useState('Mi vida normal');
  const [tagPigeonText, setTagPigeonText] = useState('Paloma con mochila táctica');
  const [boyfriendOverlayMode, setBoyfriendOverlayMode] = useState<'trio-tags' | 'standard'>('trio-tags');

  // Thought Meme ("They Don't Know") Specific State
  const [thoughtOverlayMode, setThoughtOverlayMode] = useState<'thought-bubble' | 'standard'>('thought-bubble');

  // Expanding Brain Collage State
  const [collageCaptions, setCollageCaptions] = useState<string[]>([
    'Una simple paloma comiendo migajas',
    'Unidad apostada vigilando el banco',
    'Nodo de antena transmitiendo datos 5G',
    'Sensor óptico conectado al operador',
  ]);
  const [collageLayout, setCollageLayout] = useState<'vertical' | 'grid'>('vertical');
  const [showCollageCaptions, setShowCollageCaptions] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleSelectArt = (art: ArtItem) => {
    setSelectedArtId(art.id);
    setSubtitleText(art.defaultCaption);
    if (art.buttonLeft && art.buttonRight) {
      setButtonLeftText(art.buttonLeft);
      setButtonRightText(art.buttonRight);
    }
    if (art.tagBoyfriend && art.tagGirlfriend && art.tagPigeon) {
      setTagBoyfriendText(art.tagBoyfriend);
      setTagGirlfriendText(art.tagGirlfriend);
      setTagPigeonText(art.tagPigeon);
    }
  };

  const handleCopyPrompt = (textToCopy?: string) => {
    navigator.clipboard.writeText(textToCopy || currentArt.prompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownloadSingle = async () => {
    setIsExporting(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = currentArt.image;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      canvas.width = img.naturalWidth || 1024;
      canvas.height = img.naturalHeight || 1024;

      // Dibujar imagen base
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Efecto VHS opcional
      if (showVhsEffect) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
        for (let i = 0; i < canvas.height; i += 4) {
          ctx.fillRect(0, i, canvas.width, 2);
        }
      }

      const scaleFactor = canvas.width / 600;

      // 1. MODO ESPECIAL: Cucaracha en la Fiesta ("They Don't Know") - Burbuja de Pensamiento
      if (currentArt.id === 'they-dont-know-cockroach' && thoughtOverlayMode === 'thought-bubble') {
        if (subtitleText.trim()) {
          const fontSize = Math.round(18 * scaleFactor);
          ctx.font = `italic bold ${fontSize}px system-ui, -apple-system, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          const maxBoxWidth = canvas.width * 0.55;
          const lines = wrapCenteredText(ctx, subtitleText, maxBoxWidth - 30 * scaleFactor);
          const lineHeight = fontSize * 1.35;
          const paddingX = 22 * scaleFactor;
          const paddingY = 16 * scaleFactor;

          let longestLineWidth = 0;
          lines.forEach((l) => {
            const w = ctx.measureText(l).width;
            if (w > longestLineWidth) longestLineWidth = w;
          });

          const boxWidth = Math.min(canvas.width * 0.65, longestLineWidth + paddingX * 2);
          const boxHeight = lines.length * lineHeight + paddingY * 2 + 20 * scaleFactor;
          // Posición en la esquina superior derecha o izquierda (donde destaca el pensamiento)
          const boxX = 35 * scaleFactor;
          const boxY = 40 * scaleFactor;

          // Sombra suave
          ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
          ctx.shadowBlur = 16 * scaleFactor;

          // Fondo de la nube de pensamiento
          ctx.fillStyle = 'rgba(15, 12, 10, 0.94)';
          ctx.beginPath();
          ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 16 * scaleFactor);
          ctx.fill();

          // Reset sombra
          ctx.shadowBlur = 0;

          // Borde ámbar brillante
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2.5 * scaleFactor;
          ctx.stroke();

          // Insignia superior
          ctx.font = `bold ${Math.round(10 * scaleFactor)}px system-ui, sans-serif`;
          ctx.fillStyle = '#fbbf24';
          ctx.textAlign = 'left';
          ctx.fillText('💭 PENSAMIENTO DE LA ESQUINA', boxX + 16 * scaleFactor, boxY + 16 * scaleFactor);

          // Texto de pensamiento
          ctx.font = `italic bold ${fontSize}px system-ui, sans-serif`;
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';

          const textCenterY = boxY + 28 * scaleFactor + (boxHeight - 28 * scaleFactor) / 2;
          const totalTextHeight = (lines.length - 1) * lineHeight;

          lines.forEach((line, idx) => {
            const y = textCenterY - totalTextHeight / 2 + idx * lineHeight;
            ctx.fillText(line, boxX + boxWidth / 2, y);
          });
        }

      // 2. MODO ESPECIAL: Novio Distraído (3 Etiquetas)
      } else if (currentArt.id === 'distracted-boyfriend-pigeon' && boyfriendOverlayMode === 'trio-tags') {
        if (subtitleText.trim()) {
          const fontSize = Math.round(20 * scaleFactor);
          ctx.font = `bold ${fontSize}px system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          const maxTitleWidth = canvas.width * 0.85;
          const lines = wrapCenteredText(ctx, subtitleText, maxTitleWidth);
          const lineHeight = fontSize * 1.35;
          const paddingX = 20 * scaleFactor;
          const paddingY = 12 * scaleFactor;

          let longestLineWidth = 0;
          lines.forEach((l) => {
            const w = ctx.measureText(l).width;
            if (w > longestLineWidth) longestLineWidth = w;
          });

          const bannerWidth = Math.min(canvas.width * 0.9, longestLineWidth + paddingX * 2);
          const bannerHeight = lines.length * lineHeight + paddingY * 2;
          const bannerX = (canvas.width - bannerWidth) / 2;
          const bannerY = 25 * scaleFactor;

          ctx.fillStyle = 'rgba(15, 12, 10, 0.88)';
          ctx.beginPath();
          ctx.roundRect(bannerX, bannerY, bannerWidth, bannerHeight, 10 * scaleFactor);
          ctx.fill();
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2 * scaleFactor;
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          lines.forEach((line, idx) => {
            const y = bannerY + paddingY + (idx + 0.5) * lineHeight;
            ctx.fillText(line, canvas.width / 2, y);
          });
        }

        const drawTagPill = (
          text: string,
          centerX: number,
          centerY: number,
          accentColor: string,
          badgeText: string
        ) => {
          const cardWidth = 190 * scaleFactor;
          const paddingX = 14 * scaleFactor;
          const paddingY = 10 * scaleFactor;
          const maxTextWidth = cardWidth - paddingX * 2;

          ctx.font = `bold ${Math.round(13 * scaleFactor)}px system-ui, sans-serif`;
          const lines = wrapCenteredText(ctx, text, maxTextWidth);
          const lineHeight = 16 * scaleFactor;
          const cardHeight = Math.max(65 * scaleFactor, 30 * scaleFactor + lines.length * lineHeight + paddingY);

          const cardX = centerX - cardWidth / 2;
          const cardY = centerY - cardHeight / 2;

          ctx.fillStyle = 'rgba(15, 18, 25, 0.92)';
          ctx.beginPath();
          ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 10 * scaleFactor);
          ctx.fill();

          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 2.5 * scaleFactor;
          ctx.stroke();

          ctx.font = `bold ${Math.round(10 * scaleFactor)}px system-ui, sans-serif`;
          ctx.fillStyle = accentColor;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(badgeText, centerX, cardY + 6 * scaleFactor);

          ctx.font = `bold ${Math.round(13 * scaleFactor)}px system-ui, sans-serif`;
          ctx.fillStyle = '#ffffff';
          ctx.textBaseline = 'middle';

          const textBlockStartY = cardY + 24 * scaleFactor + (cardHeight - 24 * scaleFactor) / 2;
          const totalTextBlockHeight = (lines.length - 1) * lineHeight;

          lines.forEach((line, idx) => {
            const lineY = textBlockStartY - totalTextBlockHeight / 2 + idx * lineHeight;
            ctx.fillText(line, centerX, lineY);
          });
        };

        drawTagPill(tagGirlfriendText, canvas.width * 0.22, canvas.height * 0.48, '#f43f5e', 'NOVIA OFENDIDA');
        drawTagPill(tagBoyfriendText, canvas.width * 0.56, canvas.height * 0.44, '#38bdf8', 'NOVIO DISTRAÍDO');
        drawTagPill(tagPigeonText, canvas.width * 0.76, canvas.height * 0.82, '#eab308', 'PALOMA CON MOCHILA');

      // 3. MODO ESPECIAL: Dos Botones (2 Etiquetas)
      } else if (currentArt.id === 'two-buttons-sweating' && buttonOverlayMode === 'dual-tags') {
        if (subtitleText.trim()) {
          const fontSize = Math.round(20 * scaleFactor);
          ctx.font = `bold ${fontSize}px system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          const maxTitleWidth = canvas.width * 0.85;
          const lines = wrapCenteredText(ctx, subtitleText, maxTitleWidth);
          const lineHeight = fontSize * 1.35;
          const paddingX = 20 * scaleFactor;
          const paddingY = 12 * scaleFactor;

          let longestLineWidth = 0;
          lines.forEach((l) => {
            const w = ctx.measureText(l).width;
            if (w > longestLineWidth) longestLineWidth = w;
          });

          const bannerWidth = Math.min(canvas.width * 0.9, longestLineWidth + paddingX * 2);
          const bannerHeight = lines.length * lineHeight + paddingY * 2;
          const bannerX = (canvas.width - bannerWidth) / 2;
          const bannerY = 25 * scaleFactor;

          ctx.fillStyle = 'rgba(15, 12, 10, 0.88)';
          ctx.beginPath();
          ctx.roundRect(bannerX, bannerY, bannerWidth, bannerHeight, 10 * scaleFactor);
          ctx.fill();
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2 * scaleFactor;
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          lines.forEach((line, idx) => {
            const y = bannerY + paddingY + (idx + 0.5) * lineHeight;
            ctx.fillText(line, canvas.width / 2, y);
          });
        }

        const drawButtonCard = (text: string, x: number, y: number, isWorn: boolean) => {
          const cardWidth = 230 * scaleFactor;
          const paddingX = 14 * scaleFactor;
          const paddingY = 10 * scaleFactor;
          const maxTextWidth = cardWidth - paddingX * 2;

          ctx.font = `bold ${Math.round(13 * scaleFactor)}px system-ui, sans-serif`;
          const lines = wrapCenteredText(ctx, text, maxTextWidth);
          const lineHeight = 16 * scaleFactor;
          const cardHeight = Math.max(75 * scaleFactor, 30 * scaleFactor + lines.length * lineHeight + paddingY);

          const cardX = x - cardWidth / 2;
          const cardY = y - cardHeight / 2;

          ctx.fillStyle = isWorn ? 'rgba(30, 20, 10, 0.92)' : 'rgba(20, 25, 35, 0.92)';
          ctx.beginPath();
          ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 12 * scaleFactor);
          ctx.fill();

          ctx.strokeStyle = isWorn ? '#eab308' : '#38bdf8';
          ctx.lineWidth = 3 * scaleFactor;
          ctx.stroke();

          ctx.font = `bold ${Math.round(11 * scaleFactor)}px system-ui, sans-serif`;
          ctx.fillStyle = isWorn ? '#fbbf24' : '#7dd3fc';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(isWorn ? 'BOTÓN GASTADO (99%)' : 'BOTÓN NUEVO (1%)', x, cardY + 8 * scaleFactor);

          ctx.font = `bold ${Math.round(13 * scaleFactor)}px system-ui, sans-serif`;
          ctx.fillStyle = '#ffffff';
          ctx.textBaseline = 'middle';

          const textBlockStartY = cardY + 24 * scaleFactor + (cardHeight - 24 * scaleFactor) / 2;
          const totalTextBlockHeight = (lines.length - 1) * lineHeight;

          lines.forEach((line, idx) => {
            const lineY = textBlockStartY - totalTextBlockHeight / 2 + idx * lineHeight;
            ctx.fillText(line, x, lineY);
          });
        };

        drawButtonCard(buttonLeftText, canvas.width * 0.3, canvas.height * 0.76, true);
        drawButtonCard(buttonRightText, canvas.width * 0.7, canvas.height * 0.76, false);

      // 4. SUBTÍTULO ESTÁNDAR (Con auto-wrap centrado para que NUNCA se corte)
      } else if (showSubtitle && subtitleText.trim()) {
        const fontSize = Math.round(subtitleSize * scaleFactor);
        let fontFace = 'sans-serif';
        if (subtitleStyle === 'meme-impact') {
          fontFace = 'Impact, sans-serif';
        } else if (subtitleStyle === 'retro-yellow') {
          fontFace = '"MS Gothic", "Hiragino Sans", "Segoe UI", sans-serif';
        } else {
          fontFace = 'system-ui, -apple-system, sans-serif';
        }

        ctx.font = `bold ${fontSize}px ${fontFace}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Margen seguro del 85% del ancho del canvas
        const maxTextWidth = canvas.width * 0.85;
        const rawText = subtitleStyle === 'meme-impact' ? subtitleText.toUpperCase() : subtitleText;
        const lines = wrapCenteredText(ctx, rawText, maxTextWidth);

        const lineHeight = fontSize * 1.25;
        const totalHeight = lines.length * lineHeight;

        let baseY = canvas.height * 0.88;
        if (subtitlePos === 'top') baseY = canvas.height * 0.12;
        if (subtitlePos === 'center') baseY = canvas.height * 0.5;

        const startY = baseY - totalHeight / 2 + lineHeight / 2;
        const xPos = canvas.width / 2;

        lines.forEach((line, index) => {
          const currentY = startY + index * lineHeight;

          if (subtitleStyle === 'retro-yellow') {
            ctx.lineWidth = Math.max(4, Math.round(6 * scaleFactor));
            ctx.strokeStyle = '#050505';
            ctx.strokeText(line, xPos, currentY);
            ctx.fillStyle = '#ffea38';
            ctx.fillText(line, xPos, currentY);
          } else if (subtitleStyle === 'meme-impact') {
            ctx.lineWidth = Math.max(5, Math.round(8 * scaleFactor));
            ctx.strokeStyle = '#000000';
            ctx.strokeText(line, xPos, currentY);
            ctx.fillStyle = '#ffffff';
            ctx.fillText(line, xPos, currentY);
          } else {
            ctx.lineWidth = Math.max(3, Math.round(4 * scaleFactor));
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.85)';
            ctx.strokeText(line, xPos, currentY);
            ctx.fillStyle = '#f8fafc';
            ctx.fillText(line, xPos, currentY);
          }
        });
      }

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${currentArt.id}-meme.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error al descargar:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const handleDownloadCollage = async () => {
    setIsExporting(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const loadedImages: HTMLImageElement[] = [];
      for (const panel of EXPANDING_BRAIN_PANELS) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = panel.image;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
        loadedImages.push(img);
      }

      const panelSize = 600;

      if (collageLayout === 'vertical') {
        const textColWidth = 500;
        canvas.width = panelSize + textColWidth;
        canvas.height = panelSize * 4;

        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 4; i++) {
          const y = i * panelSize;
          ctx.drawImage(loadedImages[i], 0, y, panelSize, panelSize);

          ctx.fillStyle = i % 2 === 0 ? '#292524' : '#1f1d1b';
          ctx.fillRect(panelSize, y, textColWidth, panelSize);

          ctx.strokeStyle = '#44403c';
          ctx.lineWidth = 3;
          ctx.strokeRect(0, y, canvas.width, panelSize);

          if (showCollageCaptions) {
            ctx.font = 'bold 22px system-ui, sans-serif';
            ctx.fillStyle = '#f59e0b';
            ctx.textAlign = 'left';
            ctx.fillText(`NIVEL ${i + 1}`, panelSize + 36, y + 60);

            ctx.font = 'bold 28px system-ui, sans-serif';
            ctx.fillStyle = '#f5f5f4';

            const text = collageCaptions[i] || '';
            const lines = wrapCenteredText(ctx, text, textColWidth - 72);
            lines.forEach((l, lIdx) => {
              ctx.fillText(l, panelSize + 36, y + 120 + lIdx * 38);
            });
          }
        }
      } else {
        canvas.width = panelSize * 2;
        canvas.height = panelSize * 2;

        for (let i = 0; i < 4; i++) {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = col * panelSize;
          const y = row * panelSize;

          ctx.drawImage(loadedImages[i], x, y, panelSize, panelSize);

          if (showCollageCaptions && collageCaptions[i]) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.fillRect(x, y + panelSize - 90, panelSize, 90);

            ctx.font = 'bold 20px "MS Gothic", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const lines = wrapCenteredText(ctx, collageCaptions[i], panelSize - 40);
            const lineH = 26;
            const startLineY = y + panelSize - 45 - ((lines.length - 1) * lineH) / 2;

            lines.forEach((l, lIdx) => {
              const ly = startLineY + lIdx * lineH;
              ctx.strokeStyle = '#000000';
              ctx.lineWidth = 4;
              ctx.strokeText(l, x + panelSize / 2, ly);
              ctx.fillStyle = '#ffea38';
              ctx.fillText(l, x + panelSize / 2, ly);
            });
          }
        }
      }

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `expanding-brain-palomas-${collageLayout}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error al exportar collage:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 font-sans selection:bg-amber-400 selection:text-stone-900">
      {/* Fondo con brillo ambiental */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_20%,rgba(245,158,11,0.15),transparent_60%)]" />

      {/* Barra de cabecera */}
      <header className="w-full max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-800 pb-4 mb-6 z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold shadow-inner">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-stone-100 flex items-center gap-2">
              Saga de Memes: Palomas & Conspiración
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {ALL_ARTWORKS.length} Obras
              </span>
            </h1>
            <p className="text-xs text-stone-400">
              Ilustraciones maestras en formato 1:1, limpias y sin marcas de agua incrustadas
            </p>
          </div>
        </div>

        {/* Pestañas de Vista */}
        <div className="flex items-center gap-2 bg-stone-950/80 p-1 rounded-xl border border-stone-800">
          <button
            onClick={() => setActiveTab('individual')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'individual'
                ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Galería de Memes</span>
          </button>
          <button
            onClick={() => setActiveTab('expanding-collage')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'expanding-collage'
                ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Expanding Brain (4 Paneles)</span>
          </button>
        </div>
      </header>

      {/* VISTA 1: Galería Individual y Editor de Memes */}
      {activeTab === 'individual' && (
        <div className="w-full max-w-5xl flex flex-col gap-6 z-10">
          {/* Navegación por las Obras */}
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between text-xs text-stone-400 px-1">
              <span className="font-medium text-stone-300">Selecciona una ilustración para personalizar:</span>
              <span>{ALL_ARTWORKS.length} imágenes disponibles</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
              {ALL_ARTWORKS.map((art) => {
                const isSelected = art.id === currentArt.id;
                return (
                  <button
                    key={art.id}
                    id={`select-art-${art.id}`}
                    onClick={() => handleSelectArt(art)}
                    className={`flex flex-col items-center p-2 rounded-xl border text-center transition-all group ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500/70 shadow-lg ring-1 ring-amber-400/40'
                        : 'bg-stone-950/70 border-stone-800 hover:border-stone-700 hover:bg-stone-900/60'
                    }`}
                  >
                    <div className="w-full aspect-square rounded-lg overflow-hidden border border-stone-800 shrink-0 bg-stone-900 relative">
                      <img
                        src={art.image}
                        alt={art.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {art.id === 'escalated-to-ai' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-red-500 text-white animate-pulse">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'invisible-backpack-cockroach' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-lime-400 text-stone-950">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'pigeon-suspicion-chart' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-emerald-400 text-stone-950">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'constructivist-pigeon-poster' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-red-600 text-white">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'double-agent-silhouette' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-zinc-200 text-stone-950">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'bitten-in-siberia-origin' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-sky-400 text-stone-950">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'cordyceps-v2-endpoint' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-cyan-400 text-stone-950">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'wasp-firewall' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-rose-500 text-white">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'ant-ethernet-cable' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-amber-400 text-stone-950">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'corporate-pigeon-headshot' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-blue-500 text-white">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'declassified-dossier' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-red-500 text-white">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'cold-war-pigeon' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-slate-300 text-stone-950">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'cockroach-datacenter-isometric' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-emerald-400 text-stone-950">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'cockroach-tactical-backpack' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-lime-400 text-stone-950">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'security-ops-pigeon' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-cyan-500 text-stone-950">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'crow-nobody-believes' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-violet-500 text-white">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'they-dont-know-cockroach' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-amber-500 text-stone-950">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'distracted-boyfriend-pigeon' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-emerald-500/90 text-white">
                          NUEVO
                        </span>
                      )}
                      {art.id === 'two-buttons-sweating' && (
                        <span className="absolute top-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-red-500/90 text-white">
                          NUEVO
                        </span>
                      )}
                      {art.levelBadge && (
                        <span className="absolute bottom-1 right-1 text-[7px] font-bold px-1 py-0.5 rounded bg-black/80 text-amber-300">
                          {art.levelBadge.split('•')[0]}
                        </span>
                      )}
                    </div>
                    <span className={`text-[10px] font-semibold truncate w-full mt-1.5 ${isSelected ? 'text-amber-300' : 'text-stone-300'}`}>
                      {art.title.split(':')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cuadrícula Principal de Presentación */}
          <main className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start my-auto">
            {/* Izquierda: Lienzo de la Ilustración */}
            <div className="lg:col-span-8 flex flex-col items-center justify-center">
              <div
                ref={containerRef}
                className="relative w-full max-w-[560px] aspect-square rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl group select-none"
              >
                {/* Imagen Generada */}
                <img
                  ref={imageRef}
                  src={currentArt.image}
                  alt={currentArt.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Efecto Opcional de Filtro VHS / Scanlines */}
                {showVhsEffect && (
                  <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.18),rgba(0,0,0,0.18)_2px,transparent_2px,transparent_4px)] mix-blend-overlay" />
                )}

                {/* MODO ESPECIAL: Cucaracha en la Fiesta ("They Don't Know") */}
                {currentArt.id === 'they-dont-know-cockroach' && thoughtOverlayMode === 'thought-bubble' ? (
                  <div className="absolute inset-0 p-5 pointer-events-none">
                    {subtitleText.trim() && (
                      <div className="absolute top-4 left-4 max-w-[65%] p-3.5 rounded-2xl bg-stone-950/92 border-2 border-amber-500 shadow-2xl backdrop-blur-md">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-amber-400 block mb-1 flex items-center gap-1">
                          💭 Pensamiento de la Esquina
                        </span>
                        <p className="text-xs sm:text-sm font-semibold italic text-stone-100 leading-snug break-words">
                          "{subtitleText}"
                        </p>
                      </div>
                    )}
                  </div>
                ) : currentArt.id === 'distracted-boyfriend-pigeon' && boyfriendOverlayMode === 'trio-tags' ? (
                  /* MODO ESPECIAL: Novio Distraído (3 Etiquetas) */
                  <div className="absolute inset-0 p-4 pointer-events-none flex flex-col justify-between">
                    {/* Título arriba centrado */}
                    {subtitleText.trim() && (
                      <div className="flex justify-center mt-1">
                        <div className="px-3.5 py-1.5 rounded-xl bg-stone-950/90 border border-amber-500/60 shadow-xl backdrop-blur-md max-w-[85%] text-center">
                          <p className="text-xs sm:text-sm font-bold text-stone-100 leading-tight">{subtitleText}</p>
                        </div>
                      </div>
                    )}

                    {/* Las 3 etiquetas flotantes sobre los personajes */}
                    <div className="relative w-full h-full">
                      {/* Novia ofendida (Izquierda) */}
                      <div className="absolute top-[38%] left-[2%] max-w-[34%] p-2 rounded-xl bg-stone-950/92 border-2 border-rose-500 shadow-2xl backdrop-blur-md text-center">
                        <span className="text-[8px] uppercase font-bold tracking-wider text-rose-300 block mb-0.5">
                          💔 Novia Ofendida
                        </span>
                        <p className="text-[11px] sm:text-xs font-bold text-white leading-tight break-words">
                          {tagGirlfriendText || 'Novia'}
                        </p>
                      </div>

                      {/* Novio distraído (Centro) */}
                      <div className="absolute top-[34%] left-[42%] max-w-[34%] p-2 rounded-xl bg-stone-950/92 border-2 border-sky-400 shadow-2xl backdrop-blur-md text-center">
                        <span className="text-[8px] uppercase font-bold tracking-wider text-sky-300 block mb-0.5">
                          👀 Novio Distraído
                        </span>
                        <p className="text-[11px] sm:text-xs font-bold text-white leading-tight break-words">
                          {tagBoyfriendText || 'Novio'}
                        </p>
                      </div>

                      {/* Paloma con mochila (Abajo Derecha) */}
                      <div className="absolute bottom-[4%] right-[2%] max-w-[42%] p-2 rounded-xl bg-stone-950/92 border-2 border-amber-400 shadow-2xl backdrop-blur-md text-center">
                        <span className="text-[8px] uppercase font-bold tracking-wider text-amber-300 block mb-0.5">
                          🎒 Paloma con Mochila
                        </span>
                        <p className="text-[11px] sm:text-xs font-bold text-white leading-tight break-words">
                          {tagPigeonText || 'Paloma con mochila'}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : currentArt.id === 'two-buttons-sweating' && buttonOverlayMode === 'dual-tags' ? (
                  /* MODO ESPECIAL: Dos Botones (2 Etiquetas) */
                  <div className="absolute inset-0 p-4 pointer-events-none flex flex-col justify-between">
                    {/* Banner superior de situación */}
                    {subtitleText.trim() && (
                      <div className="flex justify-center mt-1">
                        <div className="px-4 py-1.5 rounded-xl bg-stone-950/90 border border-amber-500/60 shadow-xl backdrop-blur-md max-w-[85%] text-center">
                          <p className="text-xs sm:text-sm font-bold text-stone-100 leading-tight">{subtitleText}</p>
                        </div>
                      </div>
                    )}

                    {/* Las dos cajas de texto sobre los botones rojo gastado y rojo nuevo */}
                    <div className="grid grid-cols-2 gap-3 mb-6 px-3">
                      {/* Botón Izquierdo (Gastado) */}
                      <div className="p-2.5 rounded-xl bg-stone-950/92 border-2 border-amber-400 shadow-2xl backdrop-blur-md flex flex-col justify-between text-center">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-amber-300 block mb-0.5">
                          🔴 Botón Gastado (99%)
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white leading-tight break-words">
                          {buttonLeftText || 'Opción habitual'}
                        </p>
                      </div>

                      {/* Botón Derecho (Nuevo) */}
                      <div className="p-2.5 rounded-xl bg-stone-950/92 border-2 border-sky-400 shadow-2xl backdrop-blur-md flex flex-col justify-between text-center">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-sky-300 block mb-0.5">
                          🔴 Botón Nuevo (1%)
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white leading-tight break-words">
                          {buttonRightText || 'Opción sospechosa'}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Subtítulo Estándar Dinámico */
                  showSubtitle &&
                  subtitleText.trim() && (
                    <div
                      className={`absolute inset-x-0 px-8 flex justify-center pointer-events-none transition-all duration-200 ${
                        subtitlePos === 'top'
                          ? 'top-8'
                          : subtitlePos === 'center'
                          ? 'top-1/2 -translate-y-1/2'
                          : 'bottom-8'
                      }`}
                    >
                      <div className="max-w-[85%]">
                        <p
                          style={{ fontSize: `${subtitleSize}px` }}
                          className={`text-center tracking-wide leading-tight select-none transition-all break-words ${
                            subtitleStyle === 'retro-yellow'
                              ? 'font-bold text-[#ffea38] [text-shadow:_0_0_8px_#000,_0_2px_4px_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_2px_2px_0_#000]'
                              : subtitleStyle === 'meme-impact'
                              ? 'font-black uppercase tracking-wider text-white [font-family:Impact,sans-serif] [text-shadow:_0_0_10px_#000,_-3px_-3px_0_#000,_3px_-3px_0_#000,_-3px_3px_0_#000,_3px_3px_0_#000]'
                              : 'font-semibold text-stone-50 [text-shadow:_0_2px_6px_rgba(0,0,0,0.9),_0_0_2px_#000]'
                          }`}
                        >
                          {subtitleStyle === 'meme-impact' ? subtitleText.toUpperCase() : subtitleText}
                        </p>
                      </div>
                    </div>
                  )
                )}

                {/* Botón para Ampliar / Pantalla Completa */}
                <button
                  id="expand-view-btn"
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-300 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all border border-stone-700/60 shadow-lg"
                  title="Vista ampliada"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              <div className="w-full max-w-[560px] flex items-center justify-between text-xs text-stone-400 mt-3 px-1">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-stone-500" />
                  Formato 1:1 • Alta Definición Centrada
                </span>
                <button
                  onClick={() => setShowVhsEffect(!showVhsEffect)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-colors border ${
                    showVhsEffect
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-medium'
                      : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-300'
                  }`}
                >
                  <Tv className="w-3 h-3" />
                  <span>Filtro VHS {showVhsEffect ? 'Activado' : 'Desactivado'}</span>
                </button>
              </div>
            </div>

            {/* Derecha: Barra Lateral de Personalización */}
            <div className="lg:col-span-4 w-full flex flex-col gap-4">
              {/* Acciones Rápidas */}
              <div className="flex gap-2">
                <button
                  id="copy-prompt-btn"
                  onClick={() => handleCopyPrompt()}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition-colors"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Prompt</span>
                    </>
                  )}
                </button>
                <button
                  id="download-artwork-btn"
                  onClick={handleDownloadSingle}
                  disabled={isExporting}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all shadow-sm active:scale-95 disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isExporting ? 'Exportando...' : 'Descargar PNG Centrado'}</span>
                </button>
              </div>

              {/* Panel de edición para "They Don't Know" (Cucaracha) */}
              {currentArt.id === 'they-dont-know-cockroach' && (
                <div className="p-4 rounded-2xl bg-stone-950/80 border border-amber-500/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
                      <MessageCircle className="w-4 h-4" />
                      Meme "No saben..." (Fiesta)
                    </h3>
                    <div className="flex bg-stone-900 p-0.5 rounded-lg border border-stone-700">
                      <button
                        onClick={() => setThoughtOverlayMode('thought-bubble')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          thoughtOverlayMode === 'thought-bubble'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        Nube de Pensamiento
                      </button>
                      <button
                        onClick={() => setThoughtOverlayMode('standard')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          thoughtOverlayMode === 'standard'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        Subtítulo
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] text-stone-400 block mb-1">Pensamiento de la Cucaracha:</label>
                    <textarea
                      value={subtitleText}
                      onChange={(e) => setSubtitleText(e.target.value)}
                      rows={2}
                      placeholder="Ej: No saben que puedo sobrevivir a una explosión nuclear..."
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-stone-900 border border-amber-500/50 text-stone-100 outline-none resize-none"
                    />
                  </div>

                  {/* Presets sugeridos */}
                  <div className="pt-2 border-t border-stone-800">
                    <label className="text-[10px] text-stone-400 block mb-1.5 font-medium">
                      Pensamientos secretos sugeridos:
                    </label>
                    <div className="space-y-1">
                      {currentArt.presets.map((preset, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSubtitleText(preset)}
                          className="w-full text-left p-1.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-800 text-[11px] text-stone-300 transition-colors"
                        >
                          "{preset}"
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Panel de edición para "Novio Distraído" */}
              {currentArt.id === 'distracted-boyfriend-pigeon' && (
                <div className="p-4 rounded-2xl bg-stone-950/80 border border-amber-500/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
                      <Users className="w-4 h-4" />
                      Meme Novio Distraído
                    </h3>
                    <div className="flex bg-stone-900 p-0.5 rounded-lg border border-stone-700">
                      <button
                        onClick={() => setBoyfriendOverlayMode('trio-tags')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          boyfriendOverlayMode === 'trio-tags'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        3 Etiquetas
                      </button>
                      <button
                        onClick={() => setBoyfriendOverlayMode('standard')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          boyfriendOverlayMode === 'standard'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        Subtítulo
                      </button>
                    </div>
                  </div>

                  {boyfriendOverlayMode === 'trio-tags' && (
                    <div className="space-y-2.5 pt-1">
                      <div>
                        <label className="text-[11px] text-stone-400 block mb-1">Situación / Título</label>
                        <input
                          type="text"
                          value={subtitleText}
                          onChange={(e) => setSubtitleText(e.target.value)}
                          placeholder="Ej: Caminando por la ciudad..."
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-stone-900 border border-stone-700 text-stone-100 outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <div>
                          <label className="text-[10px] text-rose-400 font-semibold block mb-0.5">
                            💔 Novia Ofendida (Izquierda)
                          </label>
                          <input
                            type="text"
                            value={tagGirlfriendText}
                            onChange={(e) => setTagGirlfriendText(e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded-lg bg-stone-900 border border-rose-500/50 text-stone-100 outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-sky-400 font-semibold block mb-0.5">
                            👀 Novio Distraído (Centro)
                          </label>
                          <input
                            type="text"
                            value={tagBoyfriendText}
                            onChange={(e) => setTagBoyfriendText(e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded-lg bg-stone-900 border border-sky-500/50 text-stone-100 outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-amber-400 font-semibold block mb-0.5">
                            🎒 Paloma con Mochila (Abajo Derecha)
                          </label>
                          <input
                            type="text"
                            value={tagPigeonText}
                            onChange={(e) => setTagPigeonText(e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded-lg bg-stone-900 border border-amber-500/50 text-stone-100 outline-none"
                          />
                        </div>
                      </div>

                      {/* Presets de Novio Distraído */}
                      <div className="pt-2 border-t border-stone-800">
                        <label className="text-[10px] text-stone-400 block mb-1.5 font-medium">
                          Plantillas sugeridas:
                        </label>
                        <div className="space-y-1">
                          {currentArt.trioPresets?.map((p, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setTagBoyfriendText(p.boyfriend);
                                setTagGirlfriendText(p.girlfriend);
                                setTagPigeonText(p.pigeon);
                                if (p.caption) setSubtitleText(p.caption);
                              }}
                              className="w-full text-left p-1.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-800 text-[11px] text-stone-300 transition-colors"
                            >
                              <span className="text-amber-400 font-bold block">{p.caption}</span>
                              <span className="text-stone-400 text-[10px]">
                                {p.boyfriend} ➔ {p.pigeon} (Ignorando: {p.girlfriend})
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Panel de edición específico para "Dos Botones" */}
              {currentArt.id === 'two-buttons-sweating' && (
                <div className="p-4 rounded-2xl bg-stone-950/80 border border-amber-500/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
                      <ToggleLeft className="w-4 h-4" />
                      Modo Meme Dos Botones
                    </h3>
                    <div className="flex bg-stone-900 p-0.5 rounded-lg border border-stone-700">
                      <button
                        onClick={() => setButtonOverlayMode('dual-tags')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          buttonOverlayMode === 'dual-tags'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        Etiquetas
                      </button>
                      <button
                        onClick={() => setButtonOverlayMode('standard')}
                        className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                          buttonOverlayMode === 'standard'
                            ? 'bg-amber-500 text-stone-950 font-bold'
                            : 'text-stone-400'
                        }`}
                      >
                        Subtítulo
                      </button>
                    </div>
                  </div>

                  {buttonOverlayMode === 'dual-tags' && (
                    <div className="space-y-2.5 pt-1">
                      <div>
                        <label className="text-[11px] text-stone-400 block mb-1">Situación / Título</label>
                        <input
                          type="text"
                          value={subtitleText}
                          onChange={(e) => setSubtitleText(e.target.value)}
                          placeholder="Ej: Cuando ves una paloma sospechosa..."
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-stone-900 border border-stone-700 text-stone-100 outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] text-amber-400 font-semibold block mb-1">
                            🔴 Botón Izquierdo (Gastado)
                          </label>
                          <input
                            type="text"
                            value={buttonLeftText}
                            onChange={(e) => setButtonLeftText(e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded-lg bg-stone-900 border border-amber-500/50 text-stone-100 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-sky-400 font-semibold block mb-1">
                            🔴 Botón Derecho (Nuevo)
                          </label>
                          <input
                            type="text"
                            value={buttonRightText}
                            onChange={(e) => setButtonRightText(e.target.value)}
                            className="w-full px-2 py-1 text-xs rounded-lg bg-stone-900 border border-sky-500/50 text-stone-100 outline-none"
                          />
                        </div>
                      </div>

                      {/* Presets de Dos Botones */}
                      <div className="pt-2 border-t border-stone-800">
                        <label className="text-[10px] text-stone-400 block mb-1.5 font-medium">
                          Dilemas sugeridos:
                        </label>
                        <div className="space-y-1">
                          {currentArt.dualButtonPresets?.map((p, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                setButtonLeftText(p.left);
                                setButtonRightText(p.right);
                                if (p.caption) setSubtitleText(p.caption);
                              }}
                              className="w-full text-left p-1.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-800 text-[11px] text-stone-300 transition-colors"
                            >
                              <span className="text-amber-400 font-bold block">{p.caption}</span>
                              <span className="text-stone-400 text-[10px]">
                                Gastado: {p.left} | Nuevo: {p.right}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Subtítulos Estándar (cuando no está en modo especial o en modo estándar) */}
              {(currentArt.category === 'single' ||
                currentArt.category === 'expanding-panel' ||
                (currentArt.id === 'two-buttons-sweating' && buttonOverlayMode === 'standard') ||
                (currentArt.id === 'distracted-boyfriend-pigeon' && boyfriendOverlayMode === 'standard') ||
                (currentArt.id === 'they-dont-know-cockroach' && thoughtOverlayMode === 'standard')) && (
                <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-stone-200 flex items-center gap-1.5 uppercase tracking-wide">
                      <Type className="w-4 h-4 text-amber-400" />
                      Editor de Subtítulo Centrado
                    </h3>
                    <button
                      onClick={() => setShowSubtitle(!showSubtitle)}
                      className={`text-[11px] px-2 py-0.5 rounded font-medium transition-colors ${
                        showSubtitle
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-stone-800 text-stone-400'
                      }`}
                    >
                      {showSubtitle ? 'Visible' : 'Oculto'}
                    </button>
                  </div>

                  {showSubtitle && (
                    <div className="space-y-3">
                      <div>
                        <input
                          id="subtitle-input"
                          type="text"
                          value={subtitleText}
                          onChange={(e) => setSubtitleText(e.target.value)}
                          placeholder="Escribe el texto del meme..."
                          className="w-full px-3 py-2 text-xs rounded-xl bg-stone-900 border border-stone-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-stone-100 outline-none transition-all"
                        />
                      </div>

                      {/* Estilo tipográfico */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] text-stone-400 flex items-center gap-1">
                          <Palette className="w-3 h-3 text-stone-400" />
                          Estilo de Letra
                        </label>
                        <div className="grid grid-cols-3 gap-1.5">
                          <button
                            onClick={() => setSubtitleStyle('retro-yellow')}
                            className={`px-2 py-1.5 text-[11px] font-bold rounded-lg border transition-all ${
                              subtitleStyle === 'retro-yellow'
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                                : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                            }`}
                          >
                            Anime Amarillo
                          </button>
                          <button
                            onClick={() => setSubtitleStyle('meme-impact')}
                            className={`px-2 py-1.5 text-[11px] font-bold uppercase rounded-lg border transition-all ${
                              subtitleStyle === 'meme-impact'
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                                : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                            }`}
                          >
                            Impact Clásico
                          </button>
                          <button
                            onClick={() => setSubtitleStyle('clean-white')}
                            className={`px-2 py-1.5 text-[11px] font-semibold rounded-lg border transition-all ${
                              subtitleStyle === 'clean-white'
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                                : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                            }`}
                          >
                            Blanco Fino
                          </button>
                        </div>
                      </div>

                      {/* Posición y Tamaño */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div>
                          <label className="text-[10px] text-stone-400 block mb-1">Posición</label>
                          <div className="grid grid-cols-3 gap-1 bg-stone-900 p-1 rounded-lg border border-stone-800">
                            {(['top', 'center', 'bottom'] as const).map((pos) => (
                              <button
                                key={pos}
                                onClick={() => setSubtitlePos(pos)}
                                className={`text-[10px] py-0.5 rounded capitalize ${
                                  subtitlePos === pos
                                    ? 'bg-amber-500 text-stone-950 font-bold'
                                    : 'text-stone-400 hover:text-stone-200'
                                }`}
                              >
                                {pos === 'top' ? 'Arriba' : pos === 'center' ? 'Centro' : 'Abajo'}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] text-stone-400 flex justify-between mb-1">
                            <span>Tamaño</span>
                            <span className="text-amber-400">{subtitleSize}px</span>
                          </label>
                          <input
                            type="range"
                            min="14"
                            max="36"
                            value={subtitleSize}
                            onChange={(e) => setSubtitleSize(Number(e.target.value))}
                            className="w-full accent-amber-500 bg-stone-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Presets Sugeridos */}
                      <div className="pt-2 border-t border-stone-800">
                        <label className="text-[10px] text-stone-400 block mb-1 font-medium">Frases rápidas:</label>
                        <div className="flex flex-wrap gap-1">
                          {currentArt.presets.map((preset, index) => (
                            <button
                              key={index}
                              onClick={() => setSubtitleText(preset)}
                              className="text-[11px] px-2 py-1 rounded bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-stone-100 transition-colors truncate max-w-full text-left"
                            >
                              {preset}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Ficha Técnica y Prompt */}
              <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-stone-300">{currentArt.title}</h3>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Prompt Original
                  </span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed font-mono bg-stone-900/90 p-2.5 rounded-xl border border-stone-800/80">
                  {currentArt.prompt}
                </p>
                <p className="text-[11px] text-stone-400 pt-1 leading-snug">
                  {currentArt.description}
                </p>
              </div>
            </div>
          </main>
        </div>
      )}

      {/* VISTA 2: Expanding Brain Collage Completo */}
      {activeTab === 'expanding-collage' && (
        <div className="w-full max-w-5xl flex flex-col gap-6 z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-stone-950/80 p-4 rounded-2xl border border-stone-800">
            <div>
              <h2 className="text-base font-bold text-stone-100 flex items-center gap-2">
                <Brain className="w-4 h-4 text-amber-400" />
                Expanding Brain Saga: Niveles 1 al 4 de la Paloma
              </h2>
              <p className="text-xs text-stone-400">
                La secuencia ascendente completa de conspiración aviar en un solo collage descargable
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <div className="flex bg-stone-900 p-1 rounded-xl border border-stone-800">
                <button
                  onClick={() => setCollageLayout('vertical')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg font-medium ${
                    collageLayout === 'vertical'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Columns className="w-3.5 h-3.5" />
                  <span>Vertical Meme</span>
                </button>
                <button
                  onClick={() => setCollageLayout('grid')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg font-medium ${
                    collageLayout === 'grid'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Cuadrícula 2x2</span>
                </button>
              </div>

              <button
                onClick={handleDownloadCollage}
                disabled={isExporting}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-sm transition-all active:scale-95 disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isExporting ? 'Exportando...' : 'Descargar Collage PNG'}</span>
              </button>
            </div>
          </div>

          {/* Renderizado de Previsualización del Collage */}
          {collageLayout === 'vertical' ? (
            <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-stone-700 bg-stone-950 shadow-2xl divide-y divide-stone-800">
              {EXPANDING_BRAIN_PANELS.map((panel, idx) => (
                <div key={panel.id} className="grid grid-cols-1 md:grid-cols-12 items-center">
                  <div className="md:col-span-5 aspect-square bg-stone-900 relative">
                    <img
                      src={panel.image}
                      alt={panel.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-black/80 text-amber-400 border border-amber-500/30">
                      NIVEL {idx + 1}
                    </span>
                  </div>
                  <div className="md:col-span-7 p-6 space-y-2 bg-stone-950">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {panel.levelBadge}
                    </span>
                    <input
                      type="text"
                      value={collageCaptions[idx]}
                      onChange={(e) => {
                        const next = [...collageCaptions];
                        next[idx] = e.target.value;
                        setCollageCaptions(next);
                      }}
                      className="w-full text-base font-bold text-stone-100 bg-stone-900/80 px-3 py-2 rounded-xl border border-stone-700 focus:border-amber-500 outline-none"
                    />
                    <p className="text-xs text-stone-400">{panel.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-2 p-2 rounded-2xl bg-stone-950 border border-stone-800 shadow-2xl">
              {EXPANDING_BRAIN_PANELS.map((panel, idx) => (
                <div key={panel.id} className="relative aspect-square rounded-xl overflow-hidden group bg-stone-900">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-2 bg-black/80 backdrop-blur-sm border-t border-stone-800 text-center">
                    <span className="text-[10px] text-amber-400 font-bold block">{panel.levelBadge}</span>
                    <p className="text-xs font-bold text-stone-100 truncate">{collageCaptions[idx]}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal Lightbox para Vista Ampliada */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              className="relative max-w-4xl w-full aspect-square max-h-[90vh] rounded-2xl overflow-hidden border border-stone-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentArt.image}
                alt={currentArt.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain bg-stone-950"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pie de página */}
      <footer className="w-full max-w-5xl text-center text-xs text-stone-400 pt-6 mt-6 border-t border-stone-800/80">
        <p className="flex items-center justify-center gap-2">
          <span>Saga de Memes & Conspiración</span>
          <span>•</span>
          <span>Generación de Imágenes Cuadradas 1:1</span>
          <span>•</span>
          <span className="text-amber-400 font-medium">Textos con Auto-Centrado Inteligente</span>
        </p>
      </footer>
    </div>
  );
}
