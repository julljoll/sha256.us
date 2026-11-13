// Configuración global corporativa de sha256.us y perfil profesional jull.sha256.us
export const SITE_TITLE = 'sha256.us | Empresa de Informática Forense y Peritaje Digital';
export const SITE_DESCRIPTION =
	'Laboratorio corporativo de informática forense, auditoría de dispositivos digitales, recuperación de datos y consolidación de evidencia digital con validez judicial bajo normas ISO/IEC 27037, ISO/IEC 27042, NIST SP 800 y MUCC-2017.';
export const SITE_URL = 'https://sha256.us';

export const COMPANY = {
	name: 'sha256.us',
	legalBrand: 'Laboratorio de Informática Forense Digital sha256.us',
	tagline: 'Informática Forense Digital & Evidencia Jurídica Certificada',
	domain: 'sha256.us',
	url: 'https://sha256.us',
	foundedLocation: 'Quíbor, Estado Lara, Venezuela',
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
		role: 'Perito Forense Digital & Análisis Jurídico de Datos',
		titleTag: 'Fases F3–F5: Análisis & Dictamen Judicial',
		phases: 'ISO/IEC 27042 & COPP Art. 187',
		summary:
			'Especialista en análisis forense avanzado de datos, reconstrucción temporal de eventos probatorios, correlación de hipótesis y emisión del Dictamen Pericial Oficial con plena validez procesal y defensa en estrados judiciales.',
		responsibilities: [
			'Procesamiento y análisis forense de datos digitales bajo estándares internacionales (ISO/IEC 27042)',
			'Elaboración, suscripción y defensa del Dictamen Pericial Oficial con valor probatorio pleno (COPP Art. 187)',
			'Verificación matemática de integridad criptográfica e inalterabilidad (Génesis Hash SHA-256)',
			'Auditoría técnica de contratos electrónicos, metadatos ofimáticos y firmas digitales',
			'Comparecencia pericial y ratificación oral en audiencias y salas de juicio',
		],
		standards: ['ISO/IEC 27042', 'COPP Art. 187', 'Génesis SHA-256', 'NIST SP 800-86'],
		social: {
			web: 'https://jull.sha256.us',
			linkedin: 'https://www.linkedin.com/in/julljoll/',
			github: 'https://github.com/julljoll',
		},
	},
	{
		id: 'jhonatan-freitez',
		name: 'Jhonatan Freitez',
		role: 'Especialista en Entrevistas Forenses, Extracciones Lógicas & Cadena de Custodia',
		titleTag: 'Fases F0–F2: Recepción & Adquisición',
		phases: 'MUCC-2017 & ISO/IEC 27037',
		summary:
			'Especialista en recepción técnica y entrevistas preliminares a consignantes y víctimas, formalización de actas de consentimiento, administración de planillas de cadena de custodia en folio (PRCC) y extracciones lógicas y físicas de telefonía móvil.',
		responsibilities: [
			'Entrevistas forenses preliminares, recepción técnica y actas de consentimiento informado con consignantes',
			'Levantamiento protocolar de Planillas de Registro de Cadena de Custodia (PRCC en folio y MUCC-2017)',
			'Extracciones lógicas y forenses en smartphones (Android, iOS, WhatsApp, Telegram, bases de datos SQLite)',
			'Adquisición de imágenes forenses bit a bit con bloqueadores de hardware (Write-Blockers ISO/IEC 27037)',
			'Embalaje en jaula de Faraday, control antiestático y registro dactiloscópico de evidencia consignada',
		],
		standards: ['MUCC-2017', 'ISO/IEC 27037', 'Write-Blockers', 'NIST SP 800-101'],
		social: {
			linkedin: 'https://www.linkedin.com/in/jhonatan-freitez-86423378/',
		},
	},
];

export const FOUNDER = {
	name: 'Jull',
	handle: 'jull.sha256.us',
	role: 'Perito Forense Digital & Análisis Jurídico de Datos',
	url: 'https://jull.sha256.us',
	linkedin: 'https://www.linkedin.com/in/julljoll/',
	github: 'https://github.com/julljoll',
	summary:
		'Especialista en análisis de datos forenses y jurídicos, elaboración y defensa de dictámenes periciales judiciales, preservación de cadena de custodia criptográfica (SHA-256) y auditoría técnica de sistemas.',
	specialties: [
		'Análisis Forense de Datos y Peritaje Judicial (ISO/IEC 27042 & COPP Art. 187)',
		'Dictamen Pericial Oficial con Validez Probatoria en Juicio',
		'Auditoría de Contratos Digitales, Firmas Electrónicas y Metadatos',
		'Verificación Matemática Criptográfica (Génesis Hash SHA-256)',
		'Defensa y Comparecencia Pericial en Tribunales',
	],
};

export const CONTACT = {
	phone: {
		display: '+57 316 3931945',
		link: 'tel:+573163931945',
		whatsapp: 'https://wa.me/573163931945',
	},
	whatsapp: 'https://wa.me/573163931945',
	email: 'soporte@sha256.us',
	address:
		'Avenida 6 con Calle 7, Edificio Mercantil La Ceiba, Primer Piso, Oficina N° 8, Quíbor, Estado Lara, Venezuela.',
	social: {
		linkedin: 'https://www.linkedin.com/in/julljoll/',
		twitter: 'https://x.com/sha256us',
		instagram: 'https://www.instagram.com/sha256.us',
		whatsapp: 'https://wa.me/573163931945',
	},
};

export const STANDARDS = [
	{
		code: 'ISO/IEC 27037',
		title: 'Evidencia Digital',
		desc: 'Directrices internacionales para la identificación, recopilación, adquisición y preservación forense de evidencia digital.',
		tag: 'ISO / IEC',
	},
	{
		code: 'ISO/IEC 27042',
		title: 'Análisis Pericial',
		desc: 'Estándar internacional para el análisis técnico, validación e interpretación forense de medios digitales incautados.',
		tag: 'ISO / IEC',
	},
	{
		code: 'NIST SP 800-86 / 800-101',
		title: 'Seguridad y Móviles',
		desc: 'Directrices metodológicas de informática forense para respuesta a incidentes, redes y dispositivos móviles emitidas por el NIST.',
		tag: 'NIST USA',
	},
	{
		code: 'MUCC-2017',
		title: 'Cadena de Custodia',
		desc: 'Manual Único de Cadena de Custodia de Evidencias Físicas y Digitales con plena validez procesal ante tribunales en Venezuela.',
		tag: 'NACIONAL',
	},
];

export const CORE_SERVICES = [
	{
		id: 'informatica-forense',
		tag: 'SERVICIO PRINCIPAL',
		title: 'Informática Forense y Peritajes Judiciales',
		sub: 'Dictámenes Periciales con Validez Procesal',
		desc: 'Identificación, adquisición bit a bit, preservación con hash criptográfico SHA-256 y elaboración de informes periciales para procesos penales, civiles, laborales y mercantiles.',
		simpleDesc: 'Validamos y certificamos pruebas digitales para que un juez o tribunal las acepte legalmente en tu juicio o demanda.',
		cases: [
			'Pruebas digitales para juicios laborales, civiles o penales',
			'Demostración de que la información no fue alterada ni manipulada',
			'Dictamen firmado por perito informático con comparecencia en tribunales',
		],
		href: '/servicios#forense',
	},
	{
		id: 'moviles',
		tag: 'FORENSE MÓVIL',
		title: 'Extracción y Certificación de Dispositivos Móviles',
		sub: 'Smartphones, Tablets, WhatsApp, Telegram y Redes',
		desc: 'Extracción lógica y física de mensajería instantánea, notas de voz, correos, geolocalización y registros eliminados bajo norma ISO/IEC 27042.',
		simpleDesc: 'Extraemos y certificamos conversaciones de WhatsApp, audios, fotos y mensajes borrados de teléfonos celulares y tablets.',
		cases: [
			'Chats, notas de voz y archivos de WhatsApp o Telegram',
			'Recuperación de mensajes y fotografías borradas',
			'Certificación de remitente, fecha, hora y ubicación exacta',
		],
		href: '/servicios#moviles',
	},
	{
		id: 'almacenamiento',
		tag: 'LABORATORIO DE DATOS',
		title: 'Recuperación y Análisis de Almacenamiento',
		sub: 'Discos HDD, SSD, NVMe, Memorias Flash y Servidores',
		desc: 'Diagnóstico por consignación, recuperación de información en medios con daño lógico o físico y clonado forense con bloqueadores de escritura.',
		simpleDesc: 'Recuperamos tus archivos importantes de discos duros, memorias USB, computadoras o servidores dañados o que no abren.',
		cases: [
			'Discos duros mecánicos o SSD que no encienden o hacen ruido',
			'Archivos y carpetas borradas accidental o maliciosamente',
			'Copia de seguridad idéntica en laboratorio sin alterar el original',
		],
		href: '/servicios#almacenamiento',
	},
	{
		id: 'contratos-digitales',
		tag: 'AUDITORÍA DOCUMENTAL',
		title: 'Peritaje de Contratos y Documentos Electrónicos',
		sub: 'Autenticidad, Metadatos y Firmas Electrónicas',
		desc: 'Verificación técnica de integridad documental, sellos de tiempo, cabeceras de correo electrónico y trazabilidad de autoría frente a impugnaciones.',
		simpleDesc: 'Demostramos si un documento PDF, firma electrónica o correo electrónico es auténtico o fue falsificado o modificado.',
		cases: [
			'Verificación de firmas digitales y contratos en PDF',
			'Auditoría de correos electrónicos para detectar estafas o suplantación',
			'Comprobación de quién creó el archivo y en qué fecha real',
		],
		href: '/servicios#documentos',
	},
];
