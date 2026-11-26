// Configuración global corporativa de sha256.us y centro de datos para arquitectura Atomic Design
// Única fuente de verdad normativa y técnica: Directorio raíz /RAG/ (hashes SHA-256 verificados)

export const SITE_TITLE = 'Peritaje Informático y Análisis Forense de Móviles y Computadoras | sha256.us';
export const SITE_DESCRIPTION =
	'Laboratorio de análisis forense de teléfonos móviles y computadoras. Peritaje de WhatsApp, redes sociales, imágenes, contenido web, recuperación de datos e informes para juicios.';
export const SITE_URL = 'https://sha256.us';
export const FORENSE_PORTAL_URL = 'https://forense.sha256.us';

export const COMPANY = {
	name: 'sha256.us',
	legalBrand: 'Laboratorio de Informática Forense Digital sha256.us',
	tagline: 'Análisis Forense de Móviles y Computadoras',
	domain: 'sha256.us',
	url: 'https://sha256.us',
	forenseUrl: 'https://forense.sha256.us',
	foundedLocation: 'Quíbor, Estado Lara, Venezuela',
};

export interface NavItem {
	href: string;
	label: string;
}

export const NAV_ITEMS: NavItem[] = [
	{ href: '/#inicio', label: 'Inicio' },
	{ href: '/#servicios', label: 'Servicios' },
	{ href: '/#como-trabajamos', label: 'Cómo Funciona' },
	{ href: '/#nosotros', label: 'Sobre Nosotros' },
	{ href: '/#blog', label: 'Blog' },
	{ href: '/#contacto', label: 'Contacto' },
];

export interface TrustBarItem {
	icon: 'court' | 'hash' | 'chain' | 'shield';
	text: string;
}

export const TRUST_ITEMS: TrustBarItem[] = [
	{ icon: 'hash', text: 'Móviles y Computadoras' },
	{ icon: 'shield', text: 'Sin Borrar tus Datos' },
	{ icon: 'court', text: 'Informe Válido en Juicio' },
	{ icon: 'chain', text: 'Atención Confidencial' },
];

export interface ClientSimpleStep {
	stepNumber: string;
	badgeTag: string;
	title: string;
	description: string;
	bullets: string[];
}

export const CLIENT_SIMPLE_STEPS: ClientSimpleStep[] = [
	{
		stepNumber: '1',
		badgeTag: 'PASO 1',
		title: '1. Cuéntanos tu Caso',
		description:
			'Escríbenos por WhatsApp qué necesitas demostrar o recuperar en tu móvil o computadora.',
		bullets: [
			'Evaluación inicial rápida y confidencial',
			'Te indicamos cómo cuidar tu equipo',
		],
	},
	{
		stepNumber: '2',
		badgeTag: 'PASO 2',
		title: '2. Análisis en Laboratorio',
		description:
			'Examinamos tu dispositivo de forma segura sin borrar ni alterar tu información personal.',
		bullets: [
			'Copia segura con sello digital inalterable',
			'Devolución rápida de tu teléfono o PC',
		],
	},
	{
		stepNumber: '3',
		badgeTag: 'PASO 3',
		title: '3. Informe para Juicio',
		description:
			'Te entregamos el informe pericial firmado y claro, listo para presentar ante el tribunal.',
		bullets: [
			'Redactado para jueces y abogados',
			'Respaldo ante impugnaciones en juicio',
		],
	},
];

export const CORE_SERVICES = [
	{
		id: 'whatsapp',
		tag: 'MENSAJERÍA',
		icon: 'chat' as const,
		title: 'Informe Pericial de WhatsApp',
		desc: 'Certificamos chats, notas de voz y mensajes borrados en tu móvil para presentarlos como prueba en juicio.',
		cases: [
			'Conversaciones completas y fechas reales',
			'Audios y archivos enviados en el chat',
			'Recuperación de mensajes eliminados',
		],
		href: '/#contacto',
	},
	{
		id: 'moviles',
		tag: 'SMARTPHONES',
		icon: 'phone' as const,
		title: 'Peritaje de Teléfonos Móviles',
		desc: 'Análisis forense de celulares Android y iPhone para extraer llamadas, ubicaciones, archivos y actividad.',
		cases: [
			'Registro de llamadas y mensajes SMS',
			'Ubicaciones GPS e historial del equipo',
			'Extracción segura sin borrar tus datos',
		],
		href: '/#contacto',
	},
	{
		id: 'computadoras',
		tag: 'PC Y DISCOS',
		icon: 'folder_open' as const,
		title: 'Análisis Forense de Computadoras y Datos',
		desc: 'Revisión de laptops, PCs y discos duros para recuperar archivos borrados o detectar robos de información.',
		cases: [
			'Recuperación de datos eliminados',
			'Revisión de discos duros y memorias USB',
			'Detección de fuga o borrado de archivos',
		],
		href: '/#contacto',
	},
	{
		id: 'laboral-judicial',
		tag: 'JUICIOS',
		icon: 'account_balance' as const,
		title: 'Peritaje Laboral y Judicial',
		desc: 'Informes periciales para despidos, cobro de deudas, incumplimientos de contrato y demandas.',
		cases: [
			'Pruebas digitales para conflictos laborales',
			'Demostrar préstamos, pagos o acuerdos',
			'Dictamen firmado válido ante el juez',
		],
		href: '/#contacto',
	},
	{
		id: 'redes-web',
		tag: 'WEB Y CORREOS',
		icon: 'public' as const,
		title: 'Redes Sociales, Web y Correos',
		desc: 'Certificación de publicaciones en redes sociales, páginas web, correos electrónicos y documentos PDF.',
		cases: [
			'Perfiles, acoso y estafas en redes',
			'Certificación de páginas web antes de borrar',
			'Autenticidad de correos y contratos PDF',
		],
		href: '/#contacto',
	},
	{
		id: 'imagenes-multimedia',
		tag: 'MULTIMEDIA',
		icon: 'verified_user' as const,
		title: 'Manipulación de Imágenes y Audios',
		desc: 'Comprobamos si una fotografía, captura, nota de voz o video es original o fue editado.',
		cases: [
			'Detección de fotomontajes y recortes',
			'Verificación de fecha real de fotografías',
			'Comprobación de cortes en audios o videos',
		],
		href: '/#contacto',
	},
];

// Caso de uso real minimalista: Recuperación de dinero prestado validando WhatsApp
export const WHATSAPP_LOAN_CASE_STUDY = {
	tag: 'CASO DE USO REAL',
	title: 'Cómo recuperó su dinero prestado validando sus chats de WhatsApp',
	sub: 'Cuando no hay contrato en papel, una captura de pantalla no basta. Un análisis forense convierte tu chat en prueba sólida.',
	cards: [
		{
			step: '1',
			tag: '1. EL PROBLEMA',
			badgeVariant: 'secondary' as const,
			title: 'Préstamo acordado por WhatsApp',
			summary:
				'Prestó dinero por transferencia sin firmar papel. El deudor negó la deuda y rechazó las capturas impresas.',
			points: [
				'Sin contrato físico firmado',
				'El deudor desconoció las capturas',
				'Riesgo de perder la demanda',
			],
		},
		{
			step: '2',
			tag: '2. EL PERITAJE',
			badgeVariant: 'primary' as const,
			title: 'Análisis forense del teléfono',
			summary:
				'Revisamos el móvil en laboratorio para certificar que los mensajes, fechas y comprobantes eran auténticos.',
			points: [
				'Extracción segura sin alterar el móvil',
				'Validación de emisor, fecha y hora',
				'Informe pericial con sello digital',
			],
		},
		{
			step: '3',
			tag: '3. EL RESULTADO',
			badgeVariant: 'dark' as const,
			title: 'Dinero recuperado en juicio',
			summary:
				'El juez aceptó el informe pericial como prueba válida de la deuda y ordenó devolver el dinero.',
			points: [
				'Prueba digital admitida sin objeciones',
				'Deuda y transferencia comprobadas',
				'Sentencia favorable al acreedor',
			],
		},
	],
};

export interface TeamMember {
	id: string;
	name: string;
	role: string;
	titleTag: string;
	phases: string;
	summary: string;
	responsibilities: string[];
	standards: string[];
	social: {
		web?: string;
		linkedin?: string;
		github?: string;
	};
}

export const TEAM_MEMBERS: TeamMember[] = [
	{
		id: 'jull',
		name: 'Jull',
		role: 'Perito Forense Digital',
		titleTag: 'ANÁLISIS E INFORMES JUDICIALES',
		phases: 'Móviles · Computadoras · Dictámenes',
		summary:
			'Especialista en análisis forense de teléfonos, computadoras y redacción de informes periciales claros para juicio.',
		responsibilities: [
			'Análisis de chats de WhatsApp, correos y documentos PDF',
			'Revisión de discos, recuperación de datos y metadatos',
			'Emisión y defensa de informes periciales en tribunales',
		],
		standards: ['WhatsApp y Móviles', 'Computadoras', 'Informes Judiciales'],
		social: {
			web: 'https://jull.sha256.us',
			linkedin: 'https://www.linkedin.com/in/julljoll/',
			github: 'https://github.com/julljoll',
		},
	},
	{
		id: 'jhonatan-freitez',
		name: 'Jhonatan Freitez',
		role: 'Especialista en Recepción y Extracción de Dispositivos',
		titleTag: 'RECEPCIÓN Y EXTRACCIÓN SEGURA',
		phases: 'Atención · Custodia · Adquisición',
		summary:
			'Encargado de la atención inicial al cliente, resguardo seguro del dispositivo y extracción de datos sin alteraciones.',
		responsibilities: [
			'Orientación confidencial y recepción de equipos en laboratorio',
			'Resguardo del teléfono o computadora sin borrar tu información',
			'Extracción segura de dispositivos Android, iPhone y discos',
		],
		standards: ['Atención Directa', 'Extracción Móvil', 'Cuidado de Equipos'],
		social: {
			linkedin: 'https://www.linkedin.com/in/jhonatan-freitez-86423378/',
		},
	},
];

export const FOUNDER = {
	name: 'Jull',
	handle: 'jull.sha256.us',
	role: 'Perito Forense Digital',
	url: 'https://jull.sha256.us',
	linkedin: 'https://www.linkedin.com/in/julljoll/',
	github: 'https://github.com/julljoll',
	summary:
		'Perito informático especializado en análisis forense de teléfonos móviles, computadoras e informes periciales judiciales.',
	specialties: [
		'Peritaje de WhatsApp y teléfonos móviles',
		'Análisis forense de computadoras y discos',
		'Verificación de imágenes, audios y documentos PDF',
		'Informes periciales para juicios laborales, civiles y penales',
	],
};

export const CONTACT = {
	phone: {
		display: '+57 316 3931945',
		link: 'tel:+573163931945',
		whatsapp:
			'https://api.whatsapp.com/send?phone=573163931945&text=Hola%2C%20solicito%20informaci%C3%B3n%20sobre%20un%20peritaje%20en%20sha256.us',
	},
	whatsapp:
		'https://api.whatsapp.com/send?phone=573163931945&text=Hola%2C%20solicito%20informaci%C3%B3n%20sobre%20un%20peritaje%20en%20sha256.us',
	email: 'soporte@sha256.us',
	address:
		'Avenida 6 con Calle 7, Edificio Mercantil La Ceiba, Primer Piso, Oficina N° 8, Quíbor, Estado Lara, Venezuela.',
	social: {
		linkedin: 'https://www.linkedin.com/in/julljoll/',
		twitter: 'https://x.com/sha256us',
		instagram: 'https://www.instagram.com/sha256.us',
		whatsapp:
			'https://api.whatsapp.com/send?phone=573163931945&text=Hola%2C%20solicito%20informaci%C3%B3n%20sobre%20un%20peritaje%20en%20sha256.us',
	},
};

export const STANDARDS = [
	{
		code: 'Teléfonos Móviles',
		title: 'WhatsApp, audios, fotos, llamadas y chats borrados en Android e iPhone.',
		tag: 'MÓVILES',
	},
	{
		code: 'Computadoras y Discos',
		title: 'Laptops, PCs, discos duros, USB y recuperación de datos eliminados.',
		tag: 'COMPUTADORAS',
	},
	{
		code: 'Redes Sociales y Web',
		title: 'Certificación de publicaciones, perfiles, correos y páginas web.',
		tag: 'INTERNET',
	},
	{
		code: 'Imágenes y Documentos',
		title: 'Detección de fotomontajes, edición de audios y contratos PDF falsos.',
		tag: 'MULTIMEDIA',
	},
];

// ============================================================================
// MATRIZ INTERNA DE TRAZABILIDAD DOCUMENTAL /RAG/ (Verificada por verify:rag)
// ============================================================================
export type LegalCategory =
	| 'Leyes Nacionales'
	| 'Códigos y Leyes Orgánicas'
	| 'Estándares ISO/IEC'
	| 'Guías NIST / IETF / ACPO'
	| 'Manuales y Doctrina Forense';

export interface LegalInstrument {
	code: string;
	category: LegalCategory;
	title: string;
	gacetaOrRef: string;
	year: string;
	articlesOrScope: string;
	description: string;
	keyApplication: string;
	fileRef: string;
	sha256Hash: string;
}

export const LEGAL_INSTRUMENTS: LegalInstrument[] = [
	{
		code: 'LMDFE',
		category: 'Leyes Nacionales',
		title: 'Ley sobre Mensajes de Datos y Firmas Electrónicas',
		gacetaOrRef: 'Gaceta Oficial N° 37.148 (Decreto-Ley N° 1.204)',
		year: '2001',
		articlesOrScope: 'Arts. 1, 2, 4, 6, 7, 8, 9, 11, 16, 17 y 38 (46 Arts.)',
		description: 'Eficacia probatoria de mensajes de datos y firmas electrónicas.',
		keyApplication: 'Validez probatoria de chats, correos y documentos digitales.',
		fileRef: 'RAG/Informatica/Ley-sobre-Mensajes-de-Datos-y-Firmas-Electronicas.md',
		sha256Hash: '9efd43c8565bf744e3414ffa4a0f73da806e7ebc7a15fbfe51b110e9c8240fe0',
	},
	{
		code: 'LEDI',
		category: 'Leyes Nacionales',
		title: 'Ley Especial contra los Delitos Informáticos',
		gacetaOrRef: 'Gaceta Oficial N° 37.313',
		year: '2001',
		articlesOrScope: '33 Artículos',
		description: 'Protección de sistemas de información y delitos informáticos.',
		keyApplication: 'Peritajes sobre acceso indebido, sabotaje, fraude y falsificación.',
		fileRef: 'RAG/Informatica/Ley Especial de Delitos informáticos (2001). Publicado en Gaceta Oficial Nº 37.313 .md',
		sha256Hash: '873cba04737498ddee15c39da4e6dfe42e3b59fe26495128fb2a8cd4d4859f5b',
	},
	{
		code: 'MUCC-2017',
		category: 'Leyes Nacionales',
		title: 'Manual Único de Cadena de Custodia de Evidencias Físicas',
		gacetaOrRef: 'Ministerio Público / MPPRIJP (Versión 2017)',
		year: '2017',
		articlesOrScope: '4 Fases · 4 Modalidades · PRCC',
		description: 'Procedimientos de Cadena de Custodia desde la obtención hasta la disposición final.',
		keyApplication: 'Recepción por consignación y Planilla PRCC.',
		fileRef: 'RAG/Informatica/MANUAL_ÚNICO_DE_CADENA DE_CUSTODIA_DE_EVIDENCIAS_(VERSIÓN_FINAL_29SEP17).md',
		sha256Hash: '9eef2c066c2d667a046b8b4c1dee62ad5dad9732777786eb4c44f70b9ed1c318',
	},
	{
		code: 'CENIF',
		category: 'Leyes Nacionales',
		title: 'Creación del Centro Nacional de Informática Forense (CENIF)',
		gacetaOrRef: 'Gaceta Oficial N° 39.847 (Resolución N° 027 MCTI)',
		year: '2012',
		articlesOrScope: 'Arts. 1 al 6',
		description: 'Creación del CENIF bajo dirección de SUSCERTE.',
		keyApplication: 'Marco nacional de peritajes informáticos.',
		fileRef: 'RAG/Informatica/Creación del CENIF (2012). Centro Nacional de Informática Forense. Publicado en Gaceta Oficial N° 39.847 de fecha 20 de enero..md',
		sha256Hash: 'c4025b9be2ee419bef68ed2dedf5240f605bfdf4ff47d81da2d41fc6dfd11bf5',
	},
	{
		code: 'SUSCERTE-MARCO',
		category: 'Leyes Nacionales',
		title: 'Referencias Bibliográficas y Marco Normativo Forense Digital',
		gacetaOrRef: 'Compendio Normativo SUSCERTE',
		year: '2025',
		articlesOrScope: 'ISO, NIST, UNE y Leyes VE',
		description: 'Matriz normativa de informática forense y firma electrónica.',
		keyApplication: 'Referencia para elaboración de informes periciales.',
		fileRef: 'RAG/Informatica/Normativas SUSCERTE Forense Digital y Firma Electronica.md',
		sha256Hash: '7cc900e6e4bc3ec2d4483219dfc516a3a3c882a7b6df0be2d83b318cb67a23ca',
	},
	{
		code: 'NORMA-063',
		category: 'Leyes Nacionales',
		title: 'Guía para la Gestión de Certificación Cruzada (NORMA-063-1.1-2011)',
		gacetaOrRef: 'Norma SUSCERTE N° 063-08/11',
		year: '2011',
		articlesOrScope: 'Certificación Cruzada',
		description: 'Reconocimiento de certificados electrónicos extranjeros.',
		keyApplication: 'Validación de firmas electrónicas internacionales.',
		fileRef: 'RAG/Informatica/NORMA-063-1.1-2011.md',
		sha256Hash: 'f241d5758149e307facc7c0f292dfd0da1f640b2486f5858da3a44f4ec1d719b',
	},
	{
		code: 'LPPC',
		category: 'Leyes Nacionales',
		title: 'Ley sobre Protección a la Privacidad de las Comunicaciones',
		gacetaOrRef: 'Gaceta Oficial (16/12/1991)',
		year: '1991',
		articlesOrScope: 'Privacidad de Comunicaciones',
		description: 'Protección de la privacidad e inviolabilidad de las comunicaciones.',
		keyApplication: 'Extracciones con autorización del titular o mandato judicial.',
		fileRef: 'RAG/Informatica/ley-sobre-proteccion-a-la-privacidad-de-las-comunicaciones.md',
		sha256Hash: '72503efb46a45134751374228c68a13a06cb03e9fce9d89e6f57f6596ce73f91',
	},
	{
		code: 'INFOGOBIERNO',
		category: 'Leyes Nacionales',
		title: 'Ley de Infogobierno',
		gacetaOrRef: 'Asamblea Nacional',
		year: '2013',
		articlesOrScope: '84 Artículos',
		description: 'Uso de tecnologías de información en el Poder Público.',
		keyApplication: 'Validez de actuaciones y expedientes electrónicos.',
		fileRef: 'RAG/Informatica/Ley-de-infogobierno.md',
		sha256Hash: '8c33557b2f24689070fcc826d04a989752f8a2537a810c756e53a4b63db4e570',
	},
	{
		code: 'INTEROPERABILIDAD',
		category: 'Leyes Nacionales',
		title: 'Ley sobre Acceso e Intercambio Electrónico de Datos',
		gacetaOrRef: 'Decreto con Rango de Ley',
		year: '2012',
		articlesOrScope: '53 Artículos',
		description: 'Intercambio electrónico de datos entre órganos y entes.',
		keyApplication: 'Trazabilidad e integridad de datos electrónicos.',
		fileRef: 'RAG/Informatica/PDF-Ley-sobre-Acceso-e-Intercambio-Electronico-de-Datos.md',
		sha256Hash: '3d1e16591331300d08595f0547c0228d7cdf1ff2e3ab06133e531953088e31c9',
	},
	{
		code: 'LOTEL',
		category: 'Leyes Nacionales',
		title: 'Ley Orgánica de Telecomunicaciones (LOTEL)',
		gacetaOrRef: 'Marco Regulatorio',
		year: '2011',
		articlesOrScope: '26 Artículos Indexados',
		description: 'Regulación de redes y telefonía móvil.',
		keyApplication: 'Referencia en peritajes vinculados a telefonía.',
		fileRef: 'RAG/Informatica/Ley-Organica-de-Telecomunicaciones-LOTEL.md',
		sha256Hash: '4739a449e3307c1d842a146d04d0c435955c09018c68e30fd09106fac8e74ea4',
	},
	{
		code: 'LOCTI',
		category: 'Leyes Nacionales',
		title: 'Ley Orgánica de Ciencia, Tecnología e Innovación',
		gacetaOrRef: 'Asamblea Nacional',
		year: '2014',
		articlesOrScope: '108 Artículos',
		description: 'Desarrollo científico y tecnológico.',
		keyApplication: 'Sustento científico de metodologías técnicas.',
		fileRef: 'RAG/Informatica/PDF-Ley-Organica-de-Ciencia-Tecnologia-e-Innovacion.md',
		sha256Hash: '1c6ad0e335c9c8cdedecd14f9d5ec7fc6b83acdf7d50102f96097a90b82ba665',
	},
	{
		code: 'RESORTE-ME',
		category: 'Leyes Nacionales',
		title: 'Ley de Responsabilidad Social en Radio, Televisión y Medios Electrónicos',
		gacetaOrRef: 'Asamblea Nacional',
		year: '2011',
		articlesOrScope: '53 Artículos',
		description: 'Regulación de mensajes en medios electrónicos.',
		keyApplication: 'Fijación de contenidos en plataformas digitales.',
		fileRef: 'RAG/Informatica/Ley-de-Responsabilidad-Social-en-Radio-Television-y-Medios-Electronicos.md',
		sha256Hash: 'e3e4dad9855c80e7b7661b197d1322be652de93b98600e63bea9d3573c8e65c8',
	},
	{
		code: 'CRBV',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Constitución de la República Bolivariana de Venezuela',
		gacetaOrRef: 'Constitución Nacional (1999)',
		year: '1999',
		articlesOrScope: 'Arts. 28, 48, 49, 285',
		description: 'Garantías constitucionales de datos, comunicaciones y debido proceso.',
		keyApplication: 'Licitud constitucional en la obtención de evidencias.',
		fileRef: 'RAG/Constitucion/constitucion-nacional-20191205135853.md',
		sha256Hash: '4677d2ca90238b1deb1735ae9f3a7ee2ecff73796a6903783d504ed5e07a0fcd',
	},
	{
		code: 'COPP',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Código Orgánico Procesal Penal',
		gacetaOrRef: 'Texto Procesal Penal en RAG',
		year: '2012–2021',
		articlesOrScope: 'Arts. 197, 237–241',
		description: 'Licitud de la prueba y requisitos del Dictamen Pericial.',
		keyApplication: 'Estructura legal de dictámenes periciales penales.',
		fileRef: 'RAG/Penal/codigo-organico-procesal-penal.md',
		sha256Hash: '849ed8a1821316d65afc6a98491016798e718d94b440b5419a55199c45cae830',
	},
	{
		code: 'CPC',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Código de Procedimiento Civil',
		gacetaOrRef: 'República de Venezuela',
		year: '1990',
		articlesOrScope: 'Arts. 395, 429 y 451–471',
		description: 'Pruebas libres y prueba de experticia civil.',
		keyApplication: 'Admisión de pruebas digitales en juicios civiles y laborales.',
		fileRef: 'RAG/Civil/codigo-de-procedimiento-civil.md',
		sha256Hash: 'f23b7dc7507de59799bc61cf2b9ddba550789f85e923b946506267be18311b80',
	},
	{
		code: 'CC',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Código Civil de Venezuela',
		gacetaOrRef: 'Código Civil',
		year: '1982',
		articlesOrScope: 'Arts. 1.354 y 1.422–1.427',
		description: 'Prueba de obligaciones y dictamen de expertos.',
		keyApplication: 'Demostración de deudas, pagos y acuerdos.',
		fileRef: 'RAG/Civil/codigo-civil.md',
		sha256Hash: '0fa3bf5abbef1cad85b65ff6acee15b24c41e6d929f2d3f0dc313e5090145b87',
	},
	{
		code: 'CP',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Código Penal de Venezuela',
		gacetaOrRef: 'Gaceta Oficial N° 5.494 Extraordinario',
		year: '2000',
		articlesOrScope: '408 Artículos',
		description: 'Delitos contra la fe pública, estafas y fraudes.',
		keyApplication: 'Marco penal conexo en fraudes y falsedades.',
		fileRef: 'RAG/Penal/codigo penal.md',
		sha256Hash: 'a2ba2391b35fd75d43133f4d7d14b3a40d4f30f13ad0a920bb8561b1a119346b',
	},
	{
		code: 'LOMP',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Ley Orgánica del Ministerio Público',
		gacetaOrRef: 'LOMP',
		year: '2007',
		articlesOrScope: '101 Artículos',
		description: 'Atribuciones investigativas y solicitud de experticias.',
		keyApplication: 'Colaboración pericial en causas penales.',
		fileRef: 'RAG/Penal/ley-organica-del-ministerio-publico.md',
		sha256Hash: '5f55daa598762ce35d01ed2d68dc196ef7fbdddac57e93879f185596f4401471',
	},
	{
		code: 'LOPJ',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Ley Orgánica del Poder Judicial',
		gacetaOrRef: 'LOPJ',
		year: '1998',
		articlesOrScope: '121 Artículos',
		description: 'Organización judicial y auxiliares de justicia.',
		keyApplication: 'Actuación pericial ante tribunales.',
		fileRef: 'RAG/Penal/ley-organica-del-poder-judicial.md',
		sha256Hash: '191925185408d1b8a2c145cec034cdb9e5804c5e448781e8403ea052a27f5ff4',
	},
	{
		code: 'ISO/IEC 27037:2012',
		category: 'Estándares ISO/IEC',
		title: 'Identificación, Recolección, Adquisición y Preservación de Evidencia Digital',
		gacetaOrRef: 'ISO/IEC JTC 1/SC 27',
		year: '2012',
		articlesOrScope: 'Cláusulas 5, 6 y 7',
		description: 'Preservación y adquisición sin alterar el medio original.',
		keyApplication: 'Copiado seguro y verificación SHA-256.',
		fileRef: 'RAG/Informatica/ISO IEC 27037-2012.md',
		sha256Hash: '1fc4ef366fa13da68e4c9f7168b3ea15ec5044b1e5bdb5a6a2055ad4b4de4b3b',
	},
	{
		code: 'ISO/IEC 27042:2015',
		category: 'Estándares ISO/IEC',
		title: 'Análisis e Interpretación de Evidencia Digital',
		gacetaOrRef: 'ISO/IEC 27042:2015',
		year: '2015',
		articlesOrScope: 'Repetibilidad y Reproducibilidad',
		description: 'Directrices científicas para el análisis de evidencia digital.',
		keyApplication: 'Análisis reproducible sobre copia verificada.',
		fileRef: 'RAG/Informatica/ISO-IEC 27042 2015.md',
		sha256Hash: 'adb360603120c4f69f6f4a3215cc26b839c5efdbb68f036bbf3de657c9e54e5b',
	},
	{
		code: 'ISO/IEC 27001:2022',
		category: 'Estándares ISO/IEC',
		title: 'Sistemas de Gestión de Seguridad de la Información',
		gacetaOrRef: 'ISO/IEC 27001:2022',
		year: '2022',
		articlesOrScope: 'SGSI',
		description: 'Protección de confidencialidad e integridad de la información.',
		keyApplication: 'Resguardo confidencial en laboratorio.',
		fileRef: 'RAG/Informatica/ISO-27001_2022_NOEDER.md',
		sha256Hash: '08729218f04ef9270571ce9cdf1638514da7c6b85a3743fb49215c917fd70836',
	},
	{
		code: 'ISO/IEC 27002:2022',
		category: 'Estándares ISO/IEC',
		title: 'Controles de Seguridad de la Información',
		gacetaOrRef: 'ISO/IEC 27002:2022',
		year: '2022',
		articlesOrScope: 'Controles de Seguridad',
		description: 'Controles físicos y técnicos para manejo de evidencias.',
		keyApplication: 'Protección de copias y dispositivos consignados.',
		fileRef: 'RAG/Informatica/ISO 27002_2022 ES.md',
		sha256Hash: '79b8a80c8a7bf17da3ab802dbf08383e9ccf84aefa2944ac6400dfa6c8c6126d',
	},
	{
		code: 'NIST SP 800-86',
		category: 'Guías NIST / IETF / ACPO',
		title: 'Guide to Integrating Forensic Techniques into Incident Response',
		gacetaOrRef: 'NIST',
		year: '2006',
		articlesOrScope: 'Collection, Examination, Analysis, Reporting',
		description: 'Técnicas forenses para sistemas y computadoras.',
		keyApplication: 'Examen forense en computadoras y discos.',
		fileRef: 'RAG/Informatica/NIST SP 800-86_ingles.md',
		sha256Hash: 'ea7eb645bcd3feaf3ab9ea7dfc3c8987a08bf260c40682df1e5e8292bf9fe9b4',
	},
	{
		code: 'NIST SP 800-101 Rev. 1',
		category: 'Guías NIST / IETF / ACPO',
		title: 'Guidelines on Mobile Device Forensics',
		gacetaOrRef: 'NIST',
		year: '2014',
		articlesOrScope: 'Adquisición y Análisis Móvil',
		description: 'Directrices forenses para smartphones y tablets.',
		keyApplication: 'Extracción de WhatsApp, llamadas y datos móviles.',
		fileRef: 'RAG/Informatica/Guidelines on Mobile Device-NIST Special Publication 800-101.md',
		sha256Hash: 'efd3f02258276fb294d62a73bb0a6ec80051fd625d5197584220beaface31718',
	},
	{
		code: 'RFC 3227 (IETF)',
		category: 'Guías NIST / IETF / ACPO',
		title: 'Guidelines for Evidence Collection and Archiving',
		gacetaOrRef: 'IETF',
		year: '2002',
		articlesOrScope: 'Orden de Volatilidad',
		description: 'Recolección ordenada desde memoria volátil hasta discos.',
		keyApplication: 'Preservación de evidencia en equipos encendidos.',
		fileRef: 'RAG/Informatica/RFC 3227 (2002)_2.md',
		sha256Hash: 'f200dc11aa0ef92a0a1c5a7bb7d4dad563d59f24f7160887ec6c5c5f8437cacd',
	},
	{
		code: 'ACPO v5',
		category: 'Guías NIST / IETF / ACPO',
		title: 'ACPO Good Practice Guide for Digital Evidence',
		gacetaOrRef: 'ACPO (UK)',
		year: '2012',
		articlesOrScope: '4 Principios Fundamentales',
		description: 'No alteración del original y pista de auditoría reproducible.',
		keyApplication: 'Principio base de toda intervención forense.',
		fileRef: 'RAG/Informatica/ACPO_Good_Practice_Guide_for_Digital_Evidence_v5.md',
		sha256Hash: '3bfbfef11be8dd338d056204389db46b69d19f3ee1459943b80d416c11cb6128',
	},
	{
		code: 'AVILLA-ANDROID',
		category: 'Manuales y Doctrina Forense',
		title: 'Análisis Forense en Dispositivos Móviles Android',
		gacetaOrRef: 'Protocolo Android / SQLite',
		year: '2023',
		articlesOrScope: 'Adquisición y Análisis Android',
		description: 'Procedimientos técnicos de extracción lógica/física en Android.',
		keyApplication: 'Análisis forense en teléfonos Android.',
		fileRef: 'RAG/Informatica/analisis forense en android con avilla forensics.md',
		sha256Hash: 'e56a4da482f30910123236c6ef686f9bbd60ff6472c88f5aaf56d8f13f2549f9',
	},
	{
		code: 'PERITAJE-INFORMATICO',
		category: 'Manuales y Doctrina Forense',
		title: 'El Peritaje Informático y la Evidencia Digital',
		gacetaOrRef: 'Universidad de los Andes (GECTI)',
		year: '2010',
		articlesOrScope: 'Valoración de Prueba Electrónica',
		description: 'Doctrina jurídica y técnica sobre el peritaje informático.',
		keyApplication: 'Fundamento para la valoración probatoria en juicio.',
		fileRef: 'RAG/Informatica/el peritaje informático.md',
		sha256Hash: 'c832e53a12fe2591c35e240e13977e087a178409e418226d53e7361747e0a3ea',
	},
];
