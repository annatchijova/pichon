import type { ArtItem } from './artworks';

export type ArtOverride = Partial<
  Pick<
    ArtItem,
    | 'title'
    | 'subtitle'
    | 'levelBadge'
    | 'defaultCaption'
    | 'buttonLeft'
    | 'buttonRight'
    | 'tagBoyfriend'
    | 'tagGirlfriend'
    | 'tagPigeon'
    | 'description'
    | 'presets'
    | 'dualButtonPresets'
    | 'trioPresets'
    | 'collageDefault'
  >
>;

export const ART_EN: Record<string, ArtOverride> = {
  'spy-pigeon': {
    title: '1. Is this a spy?',
    subtitle: 'Butterfly meme (literal, with a pigeon)',
    defaultCaption: 'Is this a spy?',
    description:
      'Flat 90s anime illustration recreating the classic "Is this a pigeon?" meme: a confused, earnest young man pointing with an open palm at a pigeon on the sidewalk.',
    presets: [
      'Is this a spy?',
      'Is it a government drone?',
      'Is it an undercover agent?',
      'Is this a pigeon?',
      "Birds aren't real",
    ],
  },
  'corkboard-wall': {
    title: '2. Conspiracy Wall',
    subtitle: 'Corkboard, red string, and the sock',
    defaultCaption: "It's all connected...",
    description:
      'A dim room lit by a single desk lamp. A large corkboard with photos of pigeons, cockroaches, a crow, and a lonely sock, joined by red string and pushpins.',
    presets: [
      "It's all connected...",
      'The sock is the key',
      'Operation Urban Feathers',
      "Don't trust the pigeons",
      'The truth is in here',
    ],
  },
  'two-buttons-sweating': {
    title: '4. Two Buttons (Sweating Man)',
    subtitle: 'Console with a worn button and a new one',
    defaultCaption: "The agent's hardest decision...",
    buttonLeft: "Believe it's a real bird",
    buttonRight: "Accept it's a spy drone",
    description:
      'A nervous man in a suit sweating heavily in front of a console with two big red buttons: one visibly worn and scuffed from overuse, the other brand new and untouched.',
    presets: [
      "The agent's hardest decision...",
      'The worn red button dilemma',
      "I can't help pressing the worn one!",
      'Instinct or paranoia?',
    ],
    dualButtonPresets: [
      {
        left: "Believe it's a real bird (Worn)",
        right: "Accept it's a spy drone",
        caption: 'When you see a suspicious pigeon:',
      },
      {
        left: 'Throw it breadcrumbs (Worn)',
        right: 'Block its 5G signal',
        caption: 'Contact protocol in the square:',
      },
      {
        left: 'Ignore the lost sock (Worn)',
        right: 'Pin it to the board with red string',
        caption: 'Building the conspiracy case:',
      },
      {
        left: 'Act normal (Worn)',
        right: 'Keep eye contact',
        caption: 'The pigeon is staring at you:',
      },
    ],
  },
  'surprised-reaction': {
    title: '5. Shocked Face (Office)',
    subtitle: 'Exaggerated reaction in front of the monitor (Shock / Scream)',
    defaultCaption: 'WHEN YOU OPEN THE REPORT AND DISCOVER THE TRUTH!',
    description:
      'Photorealistic close-up of an office worker in absolute shock in front of a monitor, mouth open and hands on cheeks, lit by the screen and fluorescent office lights.',
    presets: [
      'WHEN YOU FIND OUT PIGEONS TRANSMIT IN 4K!',
      'WHEN YOU SEE THE SECRET BUDGET FOR URBAN DRONES!',
      'I checked the satellite logs and it all fits!',
      'The missing sock was in the server room!',
      "IT CAN'T BE TRUE!",
      "THEY'RE WATCHING ME THROUGH THE WINDOW!",
    ],
  },
  'distracted-boyfriend-pigeon': {
    title: '6. Distracted Boyfriend (Animal Version)',
    subtitle: 'Man staring at the pigeon with a tiny black backpack',
    defaultCaption: 'Priorities on the street...',
    tagBoyfriend: 'Me',
    tagGirlfriend: 'My date / My normal routine',
    tagPigeon: 'Pigeon with a tactical backpack',
    description:
      'A bright-daylight stock-photo recreation: a man walking hand in hand with his girlfriend turns his head, fascinated, to watch a pigeon walking along the sidewalk carrying a tiny black backpack, while his offended girlfriend stares at him in shock.',
    presets: [
      'Priorities on the street...',
      'When the spy is way too obvious',
      "I can't take my eyes off that drone",
      'It has a backpack! Does nobody else see it?',
    ],
    trioPresets: [
      {
        boyfriend: 'Me',
        girlfriend: 'My calm, normal life',
        pigeon: 'Pigeon with a tactical spy backpack',
        caption: 'Walking through the city:',
      },
      {
        boyfriend: 'My thoughts at 3 AM',
        girlfriend: 'Sleeping 8 hours',
        pigeon: 'What does the pigeon carry in its backpack?',
        caption: 'In bed trying to sleep:',
      },
      {
        boyfriend: 'Conspiracy researcher',
        girlfriend: 'Verifiable facts',
        pigeon: 'Irrefutable proof with a black harness',
        caption: 'Finding the truth:',
      },
      {
        boyfriend: 'My attention on the street',
        girlfriend: 'Serious conversation',
        pigeon: 'Winged agent on a delivery mission',
        caption: 'When you go for a walk:',
      },
    ],
  },
  'they-dont-know-cockroach': {
    title: '7. "They don\'t know..." (Cockroach at the Party)',
    subtitle: 'Human-sized cockroach alone in the corner with a drink',
    defaultCaption: "They don't know I can survive a nuclear explosion...",
    description:
      'A wide cinematic shot with warm lighting of a crowded house party full of people chatting and laughing. In the corner, a lonely cockroach the size of a person stands on two legs holding a little party cup, left out and pondering the truth.',
    presets: [
      "They don't know I can survive a nuclear explosion...",
      "They don't know pigeons transmit in 4K...",
      "They don't know I live behind the fridge...",
      "They don't know the sock on the board was mine...",
      "They dance while the world doesn't know the truth...",
      "They don't know the satellite already synced the data...",
      "They don't know I'm listening to everything...",
    ],
  },
  'crow-nobody-believes': {
    title: '8. Crow at the Podium (Nobody Believes Him)',
    subtitle: 'Press conference about the conspiracy before an empty auditorium',
    defaultCaption: 'I have proof that pigeons work for the government...',
    description:
      'Muted, cinematic editorial photography. A black crow standing on a wooden lectern with a classic microphone, seriously addressing an empty room of folding chairs, with a bored guard leaning in the back.',
    presets: [
      'I have irrefutable proof that pigeons are drones...',
      'Nobody came to the press conference about the sock!',
      'The satellite syncs at 3 AM and nobody listens.',
      '5 years of research and this is the audience I get.',
      'Please, silence for questions... Oh.',
      'The mainstream media is trying to silence my message.',
      'My truth makes society uncomfortable.',
    ],
  },
  'security-ops-pigeon': {
    title: '9. Security Operations Center (SOC)',
    subtitle: 'Cybersecurity analysts tracking the pigeon on giant screens',
    defaultCaption: 'TARGET IDENTIFIED: Urban pigeon transmitting telemetry in real time',
    description:
      'Photorealistic corporate photography of a high-tech security operations center (SOC). Serious analysts in suits watch giant wall screens showing a live close-up of an ordinary pigeon with tactical tracking and biometric-recognition overlays under cold blue lighting.',
    presets: [
      'TARGET IDENTIFIED: Urban pigeon transmitting telemetry',
      'Red alert! Subject 04 is pecking crumbs in sector 7',
      'Monitoring satellite link with the main square node',
      'Activating biometric feather tracking and retinal scan',
      'The sock has moved. Repeat: the sock is moving',
      'The entire department budget invested in this pigeon',
      'Confirmed: not an ordinary bird',
    ],
  },
  'cockroach-tactical-backpack': {
    title: '10. Tactical Cockroach',
    subtitle: 'Macro product shot with a tiny matte-black backpack and antenna',
    defaultCaption: 'GROUND INFILTRATION UNIT: Model C-9 with micro-transmitter antenna',
    description:
      'Macro studio product photography with soft lighting and a neutral grey background. An ultra-sharp cockroach wearing a tiny matte-black tactical backpack with custom harnesses and a small upward-pointing metal antenna.',
    presets: [
      'GROUND INFILTRATION UNIT: Model C-9 with micro-antenna',
      'Tactical recon gear for ducts and pipes',
      'Autonomous transmitter with 10-year battery and nuclear resistance',
      'Operating behind the fridge on a covert mission',
      'Carrying the microchip stolen from the operations center',
      'Ergonomic design for nighttime stealth missions',
      "It's not a pest, it's advanced military tech",
    ],
  },
  'cockroach-datacenter-isometric': {
    title: '11. Cockroach Datacenter (3D Render)',
    subtitle: 'Isometric micro datacenter with racks, fiber optics, and LEDs',
    defaultCaption: 'DISTRIBUTED SERVERS: Mobile datacenter with biological redundancy',
    description:
      'Isometric 3D render in a clean technical-illustration style with soft shadows. A cockroach carrying a modular micro datacenter on its back with server racks, tiny fans, glowing fiber optics, and blinking LEDs.',
    presets: [
      'DISTRIBUTED SERVERS: High-availability mobile datacenter',
      '99.999% uptime guaranteed thanks to biological resilience',
      'Decentralized network of micro-servers in ventilation ducts',
      'Processing pigeon telemetry right at the edge',
      'Biological cloud: when AWS goes down but your cockroach keeps going',
      'Microservices architecture on combat insects',
      'Backup server located in the corporate kitchen',
    ],
  },
  'cold-war-pigeon': {
    title: '12. Cold War Pigeon',
    subtitle: 'Black-and-white documentary photo with film grain and a spy atmosphere',
    defaultCaption: 'BERLIN, 1962: Agent 09 reporting in on the ministry ledge',
    description:
      'A black-and-white documentary photo with heavy analog film grain and Cold War aesthetics. A lone pigeon perched on the stone ledge of an imposing brutalist government building with iron bars, shot from a dramatic low angle under an overcast sky.',
    presets: [
      'BERLIN, 1962: Agent 09 reporting in on the ministry ledge',
      'The Cold War never ended: it just changed its feathers',
      'Waiting for the microfilm hidden behind the window frame',
      'Classified photo declassified 60 years later',
      'Static surveillance on the east side of the embassy',
      "The project's origin: secret files from 1964",
      'No visible microphones. Only feathers and suspicion.',
    ],
  },
  'declassified-dossier': {
    title: '14. Declassified Case File',
    subtitle: 'Top-down flat lay with a manila folder, pigeon photos, magnifying glass, and red stamps',
    defaultCaption: 'DECLASSIFIED TOP-SECRET DOCUMENT: Operation Steel Feathers',
    description:
      'Top-down flat-lay photo under harsh interrogation lighting on an aged wooden desk. An open manila folder with black-and-white surveillance photos of pigeons circled in red marker, a classic red rubber stamp, a brass magnifying glass, paper clips, and papers censored with black bars.',
    presets: [
      'DECLASSIFIED TOP-SECRET DOCUMENT: Operation Steel Feathers',
      'File #404: Photographic evidence of avian surveillance',
      'Censored reports from the urban intelligence committee',
      'Under the magnifying glass: every public park is a spying zone',
      'CONFIDENTIAL stamp revoked: the truth comes to light',
      'Forensic analysis of micro-cameras in plumage',
      'Irrefutable evidence archived for decades',
    ],
  },
  'corporate-pigeon-headshot': {
    title: '15. Corporate Headshot (LinkedIn)',
    subtitle: 'Formal studio portrait with a security earpiece and gradient background',
    defaultCaption: 'Senior Director of Aerial Surveillance and Crumbs Monitoring',
    description:
      'A formal LinkedIn-style corporate photo portrait. A pigeon with a distinguished bearing and an utterly serious expression, fitted with a clear acoustic-tube secret-agent earpiece. Grey studio gradient background with professional three-point lighting and catchlights in the eyes.',
    presets: [
      'Senior Director of Aerial Surveillance and Crumbs Monitoring',
      'Open to new opportunities in urban intelligence (Open to Work)',
      '10+ years of experience in tactical recon in squares',
      'Specialist in passive collection of crumbs and confidential data',
      'Leading the digital transformation of the covert avian network',
      'When you update your profile picture after being promoted to Special Agent',
      'Contact on LinkedIn: Lic. Paloma G. — CISO of Urban Security',
    ],
  },
  'ant-ethernet-cable': {
    title: '16. Ant with an Ethernet Cable',
    subtitle: 'Macro photo with a yellow helmet laying network cable in the dirt',
    defaultCaption: 'NETWORK TECHNICIAN: Installing the physical link for the underground server',
    description:
      'High-resolution nature macro photography with natural light. A hard-working worker ant crossing the soil while carrying a miniature blue RJ45 Ethernet cable and wearing a tiny yellow construction hard hat. Very shallow depth of field with soft bokeh.',
    presets: [
      'NETWORK TECHNICIAN: Installing the physical link for the underground server',
      'OSI model layer 1: physical transport of data packets',
      'Pulling structured Cat6 cabling to the main anthill',
      'On-call tech support: when Wi-Fi fails and you have to cable it',
      'Underground biological telecommunications infrastructure',
      'Minimum wage but with the required safety helmet',
      "Ping 1ms: the animal kingdom's fiber optics in action",
    ],
  },
  'wasp-firewall': {
    title: '17. Wasp Firewall (Server Room)',
    subtitle: 'Dramatic close-up of a wasp guarding the door with red light and smoke',
    defaultCaption: 'HARDWARE FIREWALL: Unauthorized access attempt detected',
    description:
      'Dramatic close-up cinematography with a sci-fi cybersecurity-thriller atmosphere. An intimidating wasp hovering in mid-air, guarding the steel door of a maximum-security server room, lit in crimson red, with floating smoke, volumetric backlighting, and lens flares.',
    presets: [
      'HARDWARE FIREWALL: Unauthorized access attempt detected',
      'Firewall rule: anyone who gets in gets 300 stings/second',
      'Intrusion prevention system with a biological stinger',
      'Port 443 blocked. Access denied by the administrator',
      'Biometric authentication failed: aerial attack protocol initiated',
      "The company's most aggressive firewall: no exceptions allowed",
      'Restricted access: high-voltage zone and core servers',
    ],
  },
  'cordyceps-v2-endpoint': {
    title: '18. Cordyceps v2 Endpoint (Fiber Optics)',
    subtitle: 'Scientific macro photo of an ant with a bioluminescent blue fungal stalk',
    defaultCaption: 'INFECTED ENDPOINT: Reprogrammed biological node transmitting over fiber optics',
    description:
      'Scientific documentary macro photography in BBC Planet Earth style. An ant clinging to a jungle leaf in the dark of night, with a Cordyceps fungus stalk growing from behind its head glowing cyan-blue like fiber-optic data cables.',
    presets: [
      'INFECTED ENDPOINT: Reprogrammed biological node transmitting over fiber optics',
      'Cordyceps v2.0 malware: full host control and data transmission',
      "The fungus isn't a parasite: it's a brain-network interface",
      'Telemetry transmission at 10 Gbps through fungal spores',
      'Compromised host: running commands from the central server',
      'High-speed bioluminescence in the deep jungle',
      'When the forest firmware updates itself',
    ],
  },
  'bitten-in-siberia-origin': {
    title: '19. Bitten in Siberia (Dahgoth\u2019s Origin)',
    subtitle: '35mm cinematic still on a snowy street with a pigeon on the shoulder',
    defaultCaption: 'IT ALL STARTED HERE: First contact on a freezing Siberian night',
    description:
      'A 35mm cinematic still with authentic film grain. A young man in a heavy winter coat and wool scarf on a snowy Siberian street at freezing twilight. A lone urban pigeon perched on his shoulder while he looks on with an alert, uneasy expression under cold, desaturated blue light.',
    presets: [
      'IT ALL STARTED HERE: First contact on a freezing Siberian night',
      'The origin of the Dahgoth protocol: transmission of the signal',
      'I felt a peck on my shoulder and suddenly understood the entire source code',
      '-40°C in Siberia: not even the cold stops the data sync',
      "It wasn't an ordinary pigeon. It looked at me and I knew I wasn't alone anymore",
      'Patient Zero: when the avian network picks you as a new node',
      'Declassified frame from the Siberian archive • 1987',
    ],
  },
  'double-agent-silhouette': {
    title: '20. Double Agent Silhouette (Noir Style)',
    subtitle: 'Silhouette under the streetlamp with a pigeon on one shoulder and a crow on the other',
    defaultCaption: 'DOUBLE AGENT: Negotiating secrets between the pigeon and crow factions',
    description:
      'High-contrast black-and-white film-noir photography. The mysterious silhouette of a man in a trench coat under the direct light of a lone streetlamp in a wet cobblestone alley at night. A pigeon on one shoulder and a large black crow on the other, wrapped in dense fog and dramatic shadows.',
    presets: [
      'DOUBLE AGENT: Negotiating secrets between the pigeon and crow factions',
      'Divided loyalty: one shoulder for daytime surveillance, one for nighttime',
      'In the city fog, nobody knows which side you fly for',
      'The ultimate broker of the two largest aerial spy networks',
      'The pigeon reports crumbs; the crow executes the strike',
      'Under the dock streetlamp, orders are never written on paper',
      'Neither pigeon nor crow: the man who whispered to both wings of power',
    ],
  },
  'constructivist-pigeon-poster': {
    title: '21. Constructivist Poster (1920s)',
    subtitle: 'Avant-garde geometric propaganda with radio waves and a pigeon on a diagonal',
    defaultCaption: 'WINGED PROLETARIAT! Broadcasting the radio signal to the whole vanguard',
    description:
      'A 1920s Soviet constructivist propaganda poster (inspired by Rodchenko and El Lissitzky). A heroic, stylized pigeon in a powerful ascending diagonal perspective, with concentric radio waves and angular rays radiating from its head in a strict palette of crimson red, black, and vintage cream.',
    presets: [
      'WINGED PROLETARIAT! Broadcasting the radio signal to the whole vanguard',
      'ALL FREQUENCIES AT THE SERVICE OF THE PIGEON NETWORK!',
      'Revolutionary surveillance: geometric waves on every corner',
      'The art of the avian vanguard: no secret escapes the antenna',
      'Propaganda from the Central Committee of Aerial Reconnaissance',
      'TO VICTORY FOR UNDERGROUND AND AERIAL TELEMETRY!',
      'Geometry, radio frequency, and crumbs for the people',
    ],
  },
  'pigeon-suspicion-chart': {
    title: '22. Suspicion Chart on the Whiteboard',
    subtitle: 'Office photo with a hand-drawn bar chart and the last bar shooting up in red',
    defaultCaption: 'SUSPICION LEVEL: Dog < Cat < Neighbor < Inspector < PIGEON ON THE ROOF',
    description:
      'A realistic photo of an office whiteboard under fluorescent lighting. A hand-drawn marker bar chart with five bars of increasing height; the fifth and final bar shoots exponentially upward and is circled several times in emphatic red marker. An office coffee mug rests in the corner.',
    presets: [
      'SUSPICION LEVEL: Dog < Cat < Neighbor < Inspector < PIGEON ON THE ROOF',
      'Meeting metric: bar 5 is 100% covert drone activity',
      'Probability that the bird on your balcony is a state agent',
      'Presentation to the security team: \u201cThe data doesn\'t lie, look at bar five\u201d',
      'Department budget spending: 95% investigating the park pigeon',
      'Weekly paranoia index by number of pecks on the window',
      'Definitive chart presented to the cybersecurity board',
    ],
  },
  'invisible-backpack-cockroach': {
    title: '23. The Invisible Backpack (Product Design)',
    subtitle: 'Macro studio product shot on white with a floating dotted backpack outline',
    defaultCaption: 'EQUIPMENT DESIGN: Tactical cargo space reserved for spy hardware',
    description:
      'Clean, minimalist studio product macro photography. A realistic cockroach on a matte white surface with catalog lighting. Floating directly above its back, a graphic dotted-line silhouette shows the outline where the tactical backpack attaches.',
    presets: [
      'EQUIPMENT DESIGN: Tactical cargo space reserved for spy hardware',
      'Stealth-9 tactical backpack: 0 grams of weight, 100% undetectable',
      'Insert here: laser microphone, microprocessor, or 5.8 GHz antenna',
      'Tactical accessories catalog for crawling infiltration agents',
      'Invisible backpack sold separately at the department store',
      'Dotted line: anchoring zone for surveillance nanotechnology',
      'When the military budget only covered the backpack blueprint',
    ],
  },
  'escalated-to-ai': {
    title: '24. Escalated to the AI (Red Control Room)',
    subtitle: 'Wide cinematic shot of an empty control room at night with every screen glowing red',
    defaultCaption: 'RED ALERT: The system has been handed over to total AI control',
    description:
      'A panoramic cinematic shot of a cybersecurity control and operations center at midnight. Completely deserted, no people. Hundreds of screens and monitors emit an intense red emergency glow with cascading data and locks. In the foreground, an executive chair spins slowly, alone.',
    presets: [
      'RED ALERT: The system has been handed over to total AI control',
      'Critical security incident: \u201cThe human operator no longer has permissions\u201d',
      'When the autonomous model takes over every firewall',
      'Midnight at the SOC: the screens blink red and nobody is left',
      'Protocol Zero activated: the AI has locked all physical and logical access',
      'Empty chair spinning slowly: the last decision was no longer human',
      'The end of the investigation: the pigeon network and the AI have merged',
    ],
  },
  'expanding-panel-1': {
    title: '3.1. Crumbs on the Sidewalk',
    subtitle: 'Pigeon eating breadcrumbs on the street',
    levelBadge: 'Level 1 • Innocent',
    defaultCaption: 'An ordinary pigeon eating crumbs on the sidewalk',
    collageDefault: 'A simple pigeon eating crumbs',
    description:
      'Flat anime-style illustration of an ordinary pigeon eating breadcrumbs on the sidewalk in neutral, everyday daylight.',
    presets: [
      'A simple pigeon eating bread',
      'Just a harmless urban bird',
      'Everyday ignorance',
      'Strolling through the square',
    ],
  },
  'expanding-panel-2': {
    title: '3.2. Bank Surveillance',
    subtitle: 'Pigeon stationed in front of the bank columns',
    levelBadge: 'Level 2 • Suspicious',
    defaultCaption: 'A reconnaissance unit watching the financial sector',
    collageDefault: 'Unit stationed watching the bank',
    description:
      'A pigeon standing upright in a low-angle shot in front of the imposing facade with classical columns of a bank.',
    presets: [
      'Watching bank transactions',
      'Tactical financial reconnaissance',
      'Strategic position at the bank',
      'Wall Street infiltration',
    ],
  },
  'expanding-panel-3': {
    title: '3.3. Antenna at Dusk',
    subtitle: 'Pigeon on high transmitting data over the city',
    levelBadge: 'Level 3 • Connected',
    defaultCaption: '5G transmission node triangulating the metropolitan network',
    collageDefault: 'Antenna node transmitting 5G data',
    description:
      'A pigeon perched on a rooftop antenna at sunset, watching the illuminated metropolis with a twilight gradient.',
    presets: [
      'Triangulating radio signals to base',
      'Nightly satellite sync',
      'Real-time metropolitan surveillance',
      'Data download 99% complete',
    ],
  },
  'expanding-panel-4': {
    title: '3.4. The Eye of Truth',
    subtitle: "Close-up of the eye reflecting the operator with a laptop",
    levelBadge: 'Level 4 • Enlightenment',
    defaultCaption: 'Biometric camera with optical sensor and direct link to the operator',
    collageDefault: 'Optical sensor linked to the operator',
    description:
      "Extreme macro of the pigeon's bright eye, sharply reflecting the silhouette of the human operating a connected laptop.",
    presets: [
      'Biometric camera with link to the operator',
      'THE OPERATOR IS ALWAYS WATCHING US!',
      'Full access granted to the undercover agent',
      'THE BIRDS WERE NEVER REAL',
    ],
  },
};
