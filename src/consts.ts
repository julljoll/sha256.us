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

export const FOUNDER = {
	name: 'Jull',
	handle: 'jull.sha256.us',
	role: 'Fundador & Perito Principal en Informática Forense Digital',
	url: 'https://jull.sha256.us',
	linkedin: 'https://www.linkedin.com/in/julljoll/',
	github: 'https://github.com/julljoll',
	summary:
		'Especialista en informática forense, respuesta a incidentes, extracción y preservación de evidencia digital, cadena de custodia criptográfica (SHA-256) y auditoría técnica de sistemas para litigios judiciales y corporativos.',
	specialties: [
		'Informática Forense y Peritaje Judicial (ISO/IEC 27037 & 27042)',
		'Adquisición y Análisis Forense de Dispositivos Móviles y Mensajería (WhatsApp, Telegram)',
		'Recuperación Forense en Unidades de Almacenamiento (HDD, SSD, NVMe, RAID)',
		'Auditoría de Contratos Digitales, Firmas Electrónicas y Metadatos',
		'Preservación de Cadena de Custodia Criptográfica (SHA-256 / MUCC-2017)',
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
		founderWeb: 'https://jull.sha256.us',
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
		href: '/servicios#forense',
	},
	{
		id: 'moviles',
		tag: 'FORENSE MÓVIL',
		title: 'Extracción y Certificación de Dispositivos Móviles',
		sub: 'Smartphones, Tablets, WhatsApp, Telegram y Redes',
		desc: 'Extracción lógica y física de mensajería instantánea, notas de voz, correos, geolocalización y registros eliminados bajo norma ISO/IEC 27042.',
		href: '/servicios#moviles',
	},
	{
		id: 'almacenamiento',
		tag: 'LABORATORIO DE DATOS',
		title: 'Recuperación y Análisis de Almacenamiento',
		sub: 'Discos HDD, SSD, NVMe, Memorias Flash y Servidores',
		desc: 'Diagnóstico por consignación, recuperación de información en medios con daño lógico o físico y clonado forense con bloqueadores de escritura.',
		href: '/servicios#almacenamiento',
	},
	{
		id: 'contratos-digitales',
		tag: 'AUDITORÍA DOCUMENTAL',
		title: 'Peritaje de Contratos y Documentos Electrónicos',
		sub: 'Autenticidad, Metadatos y Firmas Electrónicas',
		desc: 'Verificación técnica de integridad documental, sellos de tiempo, cabeceras de correo electrónico y trazabilidad de autoría frente a impugnaciones.',
		href: '/servicios#documentos',
	},
];
