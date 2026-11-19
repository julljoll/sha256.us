// Configuración global corporativa de sha256.us y centro de datos para arquitectura Atomic Design
// Sustento normativo: Carpeta raíz /Informatica/ (28 instrumentos con hash_pdf_sha256) y proceso oficial https://forense.sha256.us/

export const SITE_TITLE = 'Laboratorio de Informática Forense en Venezuela | Peritaje Digital Judicial — sha256.us';
export const SITE_DESCRIPTION =
	'Laboratorio de informática forense y peritaje digital judicial en Venezuela. Ciclo pericial ISO de 6 fases (F0–F5), 13 planillas en Folio, custodia MUCC-2017, COPP Art. 187, LMDFE, LEDI e ISO/IEC 27037/27042.';
export const SITE_URL = 'https://sha256.us';
export const FORENSE_PORTAL_URL = 'https://forense.sha256.us';

export const COMPANY = {
	name: 'sha256.us',
	legalBrand: 'Laboratorio de Informática Forense Digital sha256.us',
	tagline: 'Informática Forense Digital & Evidencia Jurídica Certificada',
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
	{ href: '/', label: 'Inicio' },
	{ href: '/servicios', label: 'Servicios Forenses' },
	{ href: '/normativa', label: 'Marco Legal & Proceso' },
	{ href: '/blog', label: 'Blog & Casos' },
	{ href: '/about', label: 'Sobre Nosotros' },
	{ href: '/contacto', label: 'Contacto' },
];



export interface TrustBarItem {
	icon: 'court' | 'hash' | 'chain' | 'shield';
	text: string;
}

export const TRUST_ITEMS: TrustBarItem[] = [
	{ icon: 'court', text: 'Válido en Tribunales y Juicios' },
	{ icon: 'shield', text: 'Tu Equipo Seguro (Sin Borrar tus Datos)' },
	{ icon: 'hash', text: 'Sello Digital Inalterable SHA-256' },
	{ icon: 'chain', text: 'Explicación Clara sin Tecnicismos' },
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
		badgeTag: 'PASO 1 · ORIENTACIÓN INICIAL',
		title: 'Cuéntanos tu situación en palabras sencillas',
		description:
			'Nos explicas por WhatsApp o en consulta qué ocurrió y qué necesitas demostrar (mensajes, audios, correos, documentos o equipos). Te orientamos sin tecnicismos sobre cómo podemos ayudarte.',
		bullets: [
			'Atención confidencial para personas, abogados y empresas',
			'Te indicamos qué hacer para no perder ni dañar tu prueba digital',
		],
	},
	{
		stepNumber: '2',
		badgeTag: 'PASO 2 · REVISIÓN SEGURA',
		title: 'Extraemos y protegemos tu prueba sin alterar tu equipo',
		description:
			'Revisamos tu teléfono, documento o computadora en nuestro laboratorio con equipos especializados que leen la información sin borrar ni modificar tus archivos originales, devolviéndote tu dispositivo rápidamente.',
		bullets: [
			'Tu teléfono o computadora nunca sufre alteraciones ni pérdida de datos',
			'Sellamos digitalmente la evidencia (SHA-256) para que nadie pueda cuestionarla',
		],
	},
	{
		stepNumber: '3',
		badgeTag: 'PASO 3 · INFORME LEGAL',
		title: 'Recibes tu informe oficial listo para el juez o tribunal',
		description:
			'Te entregamos el informe pericial firmado y sellado con conclusiones claras y comprensibles, respaldado por todas las leyes vigentes para que tú y tu abogado lo presenten con total seguridad.',
		bullets: [
			'Conclusiones redactadas en lenguaje claro para jueces, abogados y clientes',
			'Incluye todo el respaldo legal y cadena de custodia oficial si vas a juicio',
		],
	},
];

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
		titleTag: 'Fases F3–F5: Análisis, Dictamen Judicial & Disposición Final',
		phases: 'ISO/IEC 27042 · COPP Arts. 187, 223–225 · LMDFE Arts. 4 y 7',
		summary:
			'Especialista en análisis forense avanzado de datos sobre copia de trabajo, evaluación heurística UX vs. SQLite, análisis espectral acústico (FFT/Opus), emisión del Dictamen Pericial Oficial colegiado y defensa oral en estrados judiciales.',
		responsibilities: [
			'Análisis e interpretación forense de evidencia digital sobre copia de trabajo verificada (Fase F3 — ISO/IEC 27042 §7–8 & ACPO Principio 3)',
			'Elaboración y suscripción del Dictamen Pericial Oficial de Informática Forense, Evidencia Fotográfica (EXIF/ELA) y Notas de Voz (Fase F4 — COPP Arts. 223–225)',
			'Verificación matemática de integridad criptográfica (Génesis Hash SHA-256) y validez de mensajes de datos y firmas electrónicas (LMDFE G.O. 37.148)',
			'Auditoría de cumplimiento normativo (LEDI G.O. 37.313, CENIF G.O. 39.847 y Normas Técnicas SUSCERTE)',
			'Certificación de sanitización criptográfica (NIST SP 800-88 Crypto-Erase) y cierre de cadena de auditoría SHA-256 (Fase F5)',
		],
		standards: ['ISO/IEC 27042', 'COPP Arts. 187 y 223–225', 'LMDFE G.O. 37.148', 'LEDI G.O. 37.313', 'NIST SP 800-88'],
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
		titleTag: 'Fases F0–F2: Apertura, Recolección PRCC & Adquisición Lógica',
		phases: 'MUCC-2017 · ISO/IEC 27037 · NIST SP 800-101 · CRBV Arts. 28 y 49',
		summary:
			'Especialista en legitimación del encargo pericial (consentimiento informado y Hábeas Data), entrevistas técnico-periciales a consignantes, apertura de Planillas de Registro de Cadena de Custodia (PRCC) en Folio y extracciones lógicas/físicas con bloqueo de escritura.',
		responsibilities: [
			'Apertura de expediente, Acta de Consentimiento Informado (CRBV Art. 28) y Acta de Entrevista Técnico-Pericial al Consignante (Fase F0 — ISO 37301 & ISO/IEC 27043)',
			'Fijación fotográfica 360°, aislamiento electromagnético en bolsa Faraday y levantamiento de Planilla PRCC en Folio 216mm × 330mm (Fase F1 — MUCC-2017 & ISO/IEC 27037)',
			'Desprecintado controlado en laboratorio, uso de bloqueadores de escritura (Write-Blockers) y generación del Hash Génesis SHA-256 (Fase F2 — NIST SP 800-86)',
			'Extracciones lógicas y de sistema de archivos en dispositivos móviles Android/iOS (bases SQLite msgstore.db, WhatsApp, Telegram — NIST SP 800-101 Nivel 2)',
			'Control dactiloscópico bilateral y resguardo de evidencia original en bóveda de acceso restringido',
		],
		standards: ['MUCC-2017', 'ISO/IEC 27037', 'NIST SP 800-101', 'Write-Blockers', 'CRBV Art. 28'],
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
		'Dictamen Pericial Oficial con Validez Probatoria en Juicio (COPP Arts. 223–225)',
		'Auditoría de Contratos Digitales, Firmas Electrónicas y Metadatos (LMDFE G.O. 37.148)',
		'Verificación Matemática Criptográfica (Génesis Hash SHA-256 / FIPS 180-4)',
		'Defensa y Comparecencia Pericial en Tribunales',
	],
};

export const CONTACT = {
	phone: {
		display: '+57 316 3931945',
		link: 'tel:+573163931945',
		whatsapp:
			'https://api.whatsapp.com/send?phone=573163931945&text=Hola%2C%20solicito%20asistencia%20pericial%20desde%20sha256.us',
	},
	whatsapp:
		'https://api.whatsapp.com/send?phone=573163931945&text=Hola%2C%20solicito%20asistencia%20pericial%20desde%20sha256.us',
	email: 'soporte@sha256.us',
	address:
		'Avenida 6 con Calle 7, Edificio Mercantil La Ceiba, Primer Piso, Oficina N° 8, Quíbor, Estado Lara, Venezuela.',
	social: {
		linkedin: 'https://www.linkedin.com/in/julljoll/',
		twitter: 'https://x.com/sha256us',
		instagram: 'https://www.instagram.com/sha256.us',
		whatsapp:
			'https://api.whatsapp.com/send?phone=573163931945&text=Hola%2C%20solicito%20asistencia%20pericial%20desde%20sha256.us',
	},
};

// ============================================================================
// CICLO PERICIAL ISO DE 6 FASES (F0 A F5) — SINCRONIZADO CON forense.sha256.us
// ============================================================================
export interface IsoForensicPhase {
	phaseCode: 'F0' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5';
	stepNumber: string;
	badgeTag: string;
	badgeVariant: 'primary' | 'secondary' | 'accent' | 'dark';
	title: string;
	shortName: string;
	norms: string;
	responsible: string;
	description: string;
	controls: string[];
	planillas: string[];
}

export const ISO_FORENSIC_PHASES: IsoForensicPhase[] = [
	{
		phaseCode: 'F0',
		stepNumber: 'F0',
		badgeTag: 'FASE F0 · APERTURA',
		badgeVariant: 'primary',
		title: 'Apertura, Legitimación y Consentimiento',
		shortName: 'Consentimiento, entrevista y designación pericial',
		norms: 'ISO 37301 §8.1 · ISO/IEC 27043 §8 · CRBV Arts. 28 y 49',
		responsible: 'Jhonatan Freitez (Recepción & Entrevistas)',
		description:
			'Legitimamos el encargo pericial antes de intervenir cualquier evidencia: identificamos al consignante, obtenemos el consentimiento informado (Hábeas Data), realizamos la entrevista técnico-pericial preliminar y delimitamos el alcance jurídico.',
		controls: [
			'Verificación de identidad y titularidad o facultad legal sobre el equipo consignado',
			'Suscripción de autorización expresa de extracción bajo garantía constitucional (CRBV Art. 28)',
			'Registro cronológico de hechos y puntos controvertidos en entrevista técnico-pericial',
		],
		planillas: [
			'Acta de Consentimiento Informado y Autorización',
			'Acta de Entrevista Técnico-Pericial al Consignante',
		],
	},
	{
		phaseCode: 'F1',
		stepNumber: 'F1',
		badgeTag: 'FASE F1 · RECOLECCIÓN',
		badgeVariant: 'primary',
		title: 'Identificación, Fijación y Cadena de Custodia (PRCC)',
		shortName: 'Recolección física, bolsa Faraday y apertura PRCC',
		norms: 'ISO/IEC 27037 §5.2–5.3 · MUCC-2017 Fase Inicial · COPP Art. 187',
		responsible: 'Jhonatan Freitez (Custodia & Aseguramiento)',
		description:
			'Documentamos el estado físico e identificadores únicos del dispositivo (marca, modelo, serial, IMEI/MAC), realizamos fijación fotográfica de 6 ángulos, aplicamos aislamiento electromagnético (bolsa Faraday) y abrimos la Planilla PRCC numerada.',
		controls: [
			'Aislamiento de red inmediato (Modo Avión / Bolsa de Faraday) contra borrado remoto',
			'Embalaje antiestático con precinto de seguridad numerado e inviolable',
			'Apertura de la Planilla de Registro de Cadena de Custodia (PRCC) con huellas dactilares',
		],
		planillas: [
			'Acta de Obtención por Consignación y Preservación',
			'Planilla de Registro de Cadena de Custodia (PRCC)',
		],
	},
	{
		phaseCode: 'F2',
		stepNumber: 'F2',
		badgeTag: 'FASE F2 · ADQUISICIÓN',
		badgeVariant: 'primary',
		title: 'Desprecintado, Adquisición Lógica y Hash Génesis SHA-256',
		shortName: 'Write-Blocker, copia forense y Hash Génesis SHA-256',
		norms: 'ISO/IEC 27037 §5.4 · NIST SP 800-86 §3.1.2 · NIST SP 800-101 Nivel 2',
		responsible: 'Jhonatan Freitez (Extracción Lógica & Física)',
		description:
			'En ambiente controlado de laboratorio verificamos la integridad del precinto, conectamos bloqueadores de escritura (Write-Blockers) o extracción lógica (SQLite/ADB), y calculamos el Hash Génesis SHA-256 tanto en origen como en destino (verificación MATCH).',
		controls: [
			'Bloqueo de escritura por hardware/software que impide alterar un solo bit del original',
			'Generación del resumen criptográfico SHA-256 (FIPS 180-4) de 256 bits en origen y copia',
			'Resguardo inmediato del dispositivo original en bóveda o devolución bajo acta',
		],
		planillas: [
			'Acta de Desprecintado y Adquisición Lógica',
		],
	},
	{
		phaseCode: 'F3',
		stepNumber: 'F3',
		badgeTag: 'FASE F3 · ANÁLISIS',
		badgeVariant: 'secondary',
		title: 'Análisis Forense e Interpretación Científica',
		shortName: 'SQLite, metadatos EXIF/ELA y espectrograma acústico',
		norms: 'ISO/IEC 27042 §7–8 · ACPO Principio 3 · RFC 3227 · SWGDE',
		responsible: 'Jull (Análisis Forense & Jurídico de Datos)',
		description:
			'Ejecutamos el examen pericial exclusivamente sobre la copia de trabajo verificada: correlacionamos tablas SQLite (msgstore.db / wa.db), auditamos cabeceras MIME/DKIM, metadatos EXIF/ELA y espectrogramas acústicos FFT/Opus 48 kHz en notas de voz.',
		controls: [
			'Prohibición absoluta de analizar sobre el medio original (ACPO Principio 1 y 2)',
			'Trazabilidad reproducible: un tercer perito independiente obtiene idéntico resultado',
			'Contraste entre interfaz gráfica de usuario (UX) y registros crudos en base de datos SQLite',
		],
		planillas: [
			'Planilla de Análisis Forense de Audio (Notas de Voz)',
			'Planilla de Evaluación de Interfaz UX y Software',
		],
	},
	{
		phaseCode: 'F4',
		stepNumber: 'F4',
		badgeTag: 'FASE F4 · DICTAMEN',
		badgeVariant: 'accent',
		title: 'Emisión del Dictamen Pericial Oficial',
		shortName: 'Dictamen motivado con validez judicial (COPP Arts. 223–225)',
		norms: 'ISO/IEC 27043 §9 · COPP Arts. 223–225 · LMDFE Arts. 4, 7 y 16 · CENIF G.O. 39.847',
		responsible: 'Jull (Dictamen Pericial & Defensa Judicial)',
		description:
			'Consolidamos los hallazgos científicos en el Dictamen Pericial Oficial motivado, estructurado con metodología, herramientas empleadas, cadena de custodia, tablas de hashes SHA-256 y conclusiones categóricas listas para su ratificación oral en juicio.',
		controls: [
			'Cumplimiento estricto de los requisitos del Dictamen Pericial del Art. 225 del COPP',
			'Equivalencia funcional y eficacia probatoria conforme a la LMDFE (G.O. 37.148)',
			'Doble firma pericial colegiada (Perito Forense Líder y Especialista Coadyuvante)',
		],
		planillas: [
			'Dictamen Pericial Oficial de Informática Forense',
			'Dictamen Especializado en Evidencia Fotográfica (EXIF/ELA)',
			'Dictamen Especializado de Notas de Voz y Audio',
		],
	},
	{
		phaseCode: 'F5',
		stepNumber: 'F5',
		badgeTag: 'FASE F5 · DISPOSICIÓN',
		badgeVariant: 'dark',
		title: 'Entrega, Sanitización Criptográfica y Auditoría',
		shortName: 'Devolución formal, Crypto-Erase NIST 800-88 y cierre',
		norms: 'MUCC-2017 Disposición Final · NIST SP 800-88 Rev. 1 · ISO/IEC 27001 A.8.10',
		responsible: 'Jull & Jhonatan Freitez (Cierre Colegiado)',
		description:
			'Realizamos la entrega formal del Dictamen Pericial y la devolución definitiva del dispositivo al titular cerrando la PRCC, aplicamos sanitización irreversible (Crypto-Erase) de copias temporales de trabajo y emitimos el certificado de auditoría SHA-256.',
		controls: [
			'Cierre formal del eslabón de disposición final en la Planilla PRCC (MUCC-2017)',
			'Borrado seguro NIST SP 800-88 (Purge / Crypto-Erase) con verificación post-borrado',
			'Sellado criptográfico de la cadena de auditoría inmutable del expediente',
		],
		planillas: [
			'Acta de Disposición Final y Devolución al Titular',
			'Acta de Sanitización de Copias Lógicas Temporales',
			'Acta de Auditoría y Trazabilidad Criptográfica',
		],
	},
];

// ============================================================================
// CATÁLOGO OFICIAL DE 13 PLANILLAS EN FOLIO (216mm × 330mm) — forense.sha256.us
// ============================================================================
export interface FolioFormItem {
	number: string;
	phase: 'F0' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5';
	sheets: string;
	title: string;
	standards: string;
	description: string;
	portalUrl: string;
}

export const FOLIO_FORMS_CATALOG: FolioFormItem[] = [
	{
		number: '01',
		phase: 'F0',
		sheets: '2 Hojas Folio',
		title: 'Acta de Consentimiento Informado y Autorización',
		standards: 'CRBV Art. 28 · Ley Privacidad Comunicaciones · ISO/IEC 27037',
		description:
			'Autorización expresa del titular o consignante para la extracción y análisis forense de datos contenidos en dispositivos móviles o medios de almacenamiento.',
		portalUrl: 'https://forense.sha256.us/planillas/acta-consentimiento',
	},
	{
		number: '02',
		phase: 'F0',
		sheets: '2 Hojas Folio',
		title: 'Acta de Entrevista Técnico-Pericial al Consignante',
		standards: 'COPP Art. 223 · ISO/IEC 27043 · ENFSI',
		description:
			'Cuestionario estructurado de recepción de testimonio técnico, contexto de los hechos, cuentas vinculadas y delimitación de los puntos periciales.',
		portalUrl: 'https://forense.sha256.us/planillas/acta-entrevista',
	},
	{
		number: '03',
		phase: 'F1',
		sheets: '2 Hojas Folio',
		title: 'Acta de Obtención por Consignación y Preservación',
		standards: 'COPP Arts. 187 y 223 · MUCC-2017 · ISO/IEC 27037',
		description:
			'Registro del estado físico del equipo, fijación fotográfica 360°, aislamiento de red (Modo Avión / Bolsa Faraday) y precintado inicial.',
		portalUrl: 'https://forense.sha256.us/planillas/acta-obtencion',
	},
	{
		number: '04',
		phase: 'F1',
		sheets: '2 Hojas Folio',
		title: 'Planilla de Registro de Cadena de Custodia (PRCC)',
		standards: 'COPP Art. 187 · MUCC-2017 (G.O. 41.247) · ISO/IEC 27037',
		description:
			'Instrumento oficial auditable de trazabilidad física y digital de la evidencia desde su consignación hasta su disposición judicial o devolución.',
		portalUrl: 'https://forense.sha256.us/planillas/prcc-custodia',
	},
	{
		number: '05',
		phase: 'F2',
		sheets: '2 Hojas Folio',
		title: 'Acta de Desprecintado y Adquisición Lógica',
		standards: 'ISO/IEC 27037 · NIST SP 800-101 · MUCC-2017',
		description:
			'Apertura de precinto en laboratorio, bloqueo de escritura (Write-Blocker), extracción de base de datos (msgstore.db / PST) y cálculo de Hash Génesis SHA-256.',
		portalUrl: 'https://forense.sha256.us/planillas/acta-adquisicion',
	},
	{
		number: '06',
		phase: 'F3',
		sheets: '2 Hojas Folio',
		title: 'Planilla de Análisis Forense de Audio (Notas de Voz)',
		standards: 'ISO/IEC 27042 · ENFSI Audio · SWGDE',
		description:
			'Hoja de trabajo técnica para examen de codificación Opus/OGG 48 kHz, análisis espectral FFT, continuidad acústica y transcripción literal.',
		portalUrl: 'https://forense.sha256.us/planillas/analisis-audio',
	},
	{
		number: '07',
		phase: 'F3',
		sheets: '2 Hojas Folio',
		title: 'Planilla de Evaluación de Interfaz UX y Software',
		standards: 'ISO/IEC 27042 · ISO 9241-110 · Heurística Nielsen',
		description:
			'Contraste técnico entre la presentación visual en pantalla (WhatsApp/Cliente de Correo) y los registros reales almacenados en motor SQLite.',
		portalUrl: 'https://forense.sha256.us/planillas/evaluacion-ux',
	},
	{
		number: '08',
		phase: 'F4',
		sheets: '3 Hojas Folio',
		title: 'Dictamen Pericial Oficial de Informática Forense',
		standards: 'COPP Arts. 223–225 · LMDFE G.O. 37.148 · ISO/IEC 27042',
		description:
			'Informe pericial integral con exposición de motivo, metodología científica, relación de evidencias, verificación SHA-256 y conclusiones periciales.',
		portalUrl: 'https://forense.sha256.us/planillas/dictamen-pericial',
	},
	{
		number: '09',
		phase: 'F4',
		sheets: '2 Hojas Folio',
		title: 'Dictamen Especializado en Evidencia Fotográfica (EXIF/ELA)',
		standards: 'ISO/IEC 27042 · SWGDE Image · LMDFE',
		description:
			'Certificación de autenticidad de imágenes digitales mediante auditoría de cabeceras EXIF, cuantización JPEG, Error Level Analysis (ELA) y geolocalización.',
		portalUrl: 'https://forense.sha256.us/planillas/dictamen-fotografico',
	},
	{
		number: '10',
		phase: 'F4',
		sheets: '2 Hojas Folio',
		title: 'Dictamen Especializado de Notas de Voz y Audio',
		standards: 'COPP Art. 225 · LMDFE · ISO/IEC 27042',
		description:
			'Dictamen pericial dedicado a la autenticidad, ausencia de edición o empalme (splicing) y correlación en base de datos de notas de voz.',
		portalUrl: 'https://forense.sha256.us/planillas/dictamen-notas-voz',
	},
	{
		number: '11',
		phase: 'F5',
		sheets: '2 Hojas Folio',
		title: 'Acta de Disposición Final y Devolución al Titular',
		standards: 'MUCC-2017 Disposición Final · COPP Art. 187',
		description:
			'Constancia formal de reintegro físico del dispositivo original en idénticas condiciones operativas y cierre del registro PRCC.',
		portalUrl: 'https://forense.sha256.us/planillas/acta-devolucion',
	},
	{
		number: '12',
		phase: 'F5',
		sheets: '2 Hojas Folio',
		title: 'Acta de Sanitización de Copias Lógicas Temporales',
		standards: 'NIST SP 800-88 Rev. 1 · ISO/IEC 27001 A.8.10 · ISO/IEC 27040',
		description:
			'Certificación de borrado criptográfico seguro (Crypto-Erase / Purge) de las copias de trabajo temporales del servidor forense.',
		portalUrl: 'https://forense.sha256.us/planillas/acta-sanitizacion',
	},
	{
		number: '13',
		phase: 'F5',
		sheets: '2 Hojas Folio',
		title: 'Acta de Auditoría y Trazabilidad Criptográfica',
		standards: 'ISO/IEC 27001 · FIPS 180-4 · RFC 8785',
		description:
			'Certificado de cierre del expediente que consolida la cadena de hashes SHA-256 de todas las actas y evidencias generadas de F0 a F5.',
		portalUrl: 'https://forense.sha256.us/planillas/acta-auditoria',
	},
];

// ============================================================================
// PIRÁMIDE DE APLICACIÓN Y SUPLETORIEDAD (COPP Art. 225) — forense.sha256.us
// ============================================================================
export interface LegalPyramidTier {
	tier: string;
	levelName: string;
	normTitle: string;
	articles: string;
	application: string;
}

export const LEGAL_PYRAMID: LegalPyramidTier[] = [
	{
		tier: 'NIVEL 1 · RANGO CONSTITUCIONAL',
		levelName: 'Constitución de la República Bolivariana de Venezuela (CRBV — G.O. N° 36.860)',
		normTitle: 'Garantías Constitucionales de la Prueba Digital',
		articles: 'Arts. 28 (Hábeas Data), 48 (Secreto e Inviolabilidad de las Comunicaciones) y 49 (Debido Proceso y Derecho a la Defensa)',
		application:
			'Toda adquisición forense requiere orden judicial o consentimiento informado expreso del titular (F0). La prueba obtenida con violación del debido proceso es nula de pleno derecho.',
	},
	{
		tier: 'NIVEL 2 · RANGO LEGAL PROCESAL',
		levelName: 'Código Orgánico Procesal Penal (COPP — G.O. N° 6.644E) y Código de Procedimiento Civil (CPC)',
		normTitle: 'Licitud de la Prueba, Cadena de Custodia y Régimen de Experticias',
		articles: 'COPP Art. 181 (Licitud de la prueba), Art. 187 (Cadena de Custodia), Arts. 223–225 (Dictamen Pericial); CPC Arts. 451–471; CC Arts. 1422–1427',
		application:
			'Establece la obligatoriedad de la Planilla de Registro de Cadena de Custodia (PRCC) y faculta la aplicación supletoria de las reglas técnicas y científicas de la informática forense (Art. 225 COPP).',
	},
	{
		tier: 'NIVEL 3 · LEYES ESPECIALES INFORMÁTICAS',
		levelName: 'LMDFE (G.O. N° 37.148) · LEDI (G.O. N° 37.313) · Ley de Infogobierno · Ley de Telecomunicaciones',
		normTitle: 'Equivalencia Funcional del Mensaje de Datos y Tipificación de Delitos Informáticos',
		articles: 'LMDFE Arts. 4, 7, 8 y 16 (Eficacia probatoria e integridad del mensaje de datos); LEDI Arts. 6–32 (Delitos contra sistemas, data y privacidad)',
		application:
			'Otorga a los mensajes de datos (WhatsApp, correos, PDFs, bases SQLite) la misma eficacia probatoria que los documentos escritos cuando se certifica que la información permanece íntegra e inalterada mediante Hash SHA-256.',
	},
	{
		tier: 'NIVEL 4 · NORMATIVA SUB-LEGAL Y REGLAMENTARIA',
		levelName: 'MUCC-2017 (G.O. N° 41.247) · CENIF (G.O. N° 39.847) · Normas SUSCERTE (G.O. N° 39.633)',
		normTitle: 'Protocolos Oficiales de Cadena de Custodia y Certificación Electrónica',
		articles: 'Manual Único de Cadena de Custodia (4 Fases, 4 Modalidades y 3 Figuras Continuas); Decreto N° 8.792 CENIF; Providencias SUSCERTE PKI',
		application:
			'Regula el llenado estricto de la PRCC sin tachaduras ni enmiendas, el precintado numerado, el traslado y las normas de auditoría forense y firma electrónica acreditada.',
	},
	{
		tier: 'NIVEL 5 · ESTÁNDARES CIENTÍFICOS INTERNACIONALES (SUPLETORIEDAD COPP ART. 225)',
		levelName: 'ISO/IEC 27037:2012 · ISO/IEC 27042:2015 · ISO/IEC 27001/27002 · NIST SP 800-86 / 800-101 · RFC 3227 · ACPO',
		normTitle: 'Mejores Prácticas de Laboratorio e Ingeniería Forense Digital',
		articles: 'Estándares técnicos internacionales invocados por vía del Artículo 225 del COPP (reglas del arte o ciencia)',
		application:
			'Gobiernan el uso de bloqueadores de escritura (Write-Blockers), el orden de volatilidad (RFC 3227), la adquisición móvil (NIST SP 800-101), la reproducibilidad del análisis (ISO/IEC 27042) y el borrado seguro (NIST SP 800-88).',
	},
];

// ============================================================================
// GARANTÍAS DE ADMISIBILIDAD PROBATORIA (COPP ART. 187 & MUCC-2017)
// ============================================================================
export interface AdmissibilityGuarantee {
	title: string;
	code: string;
	description: string;
	iconName: string;
}

export const ADMISSIBILITY_GUARANTEES: AdmissibilityGuarantee[] = [
	{
		title: 'Bloqueo Físico y Lógico de Escritura (Write-Blockers)',
		code: 'ISO/IEC 27037 §5.4.3 · ACPO Principio 1',
		description:
			'Ninguna acción ejecutada por el laboratorio modifica los datos contenidos en el dispositivo original. Toda lectura se realiza mediante bloqueo de comandos de escritura.',
		iconName: 'lock',
	},
	{
		title: 'Sellado Criptográfico Génesis SHA-256',
		code: 'FIPS 180-4 · LMDFE Art. 7 · ISO/IEC 27037',
		description:
			'Cálculo instantáneo de huella digital matemática de 256 bits (64 caracteres hexadecimales) al momento de la adquisición para demostrar mismidad e inalterabilidad absoluta.',
		iconName: 'verified_user',
	},
	{
		title: 'Aislamiento Electromagnético (Bolsa de Faraday)',
		code: 'NIST SP 800-101 Rev. 1 · MUCC-2017',
		description:
			'Protección de smartphones y tablets contra señales celulares, Wi-Fi o Bluetooth para impedir comandos de borrado remoto (Remote Wipe) o alteración de estados.',
		iconName: 'security',
	},
	{
		title: 'Planilla PRCC Numerada y Dactiloscopía Bilateral',
		code: 'COPP Art. 187 · MUCC-2017 (G.O. 41.247)',
		description:
			'Registro continuo sin espacios en blanco ni enmiendas de cada funcionario o perito que interviene, respaldado en formato Folio (216mm × 330mm) con impresión dactilar.',
		iconName: 'assignment_turned_in',
	},
];

// ============================================================================
// COMPENDIO COMPLETO DE 28 INSTRUMENTOS LEGALES Y TÉCNICOS (Carpeta /Informatica/)
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
	// --- LEYES NACIONALES ESPECIALES E INFORMÁTICAS ---
	{
		code: 'LMDFE',
		category: 'Leyes Nacionales',
		title: 'Ley sobre Mensajes de Datos y Firmas Electrónicas',
		gacetaOrRef: 'Gaceta Oficial N° 37.148 (Decreto N° 1.204)',
		year: '2001',
		articlesOrScope: 'Arts. 1, 4, 7, 8, 16 y 38',
		description:
			'Otorga y reconoce eficacia y valor jurídico a la Firma Electrónica, al Mensaje de Datos y a toda información inteligible en formato electrónico, estableciendo el principio de equivalencia funcional con los documentos escritos.',
		keyApplication: 'Sustenta la validez probatoria de mensajes de WhatsApp, correos electrónicos, archivos PDF y firmas digitales en juicio.',
		fileRef: 'Informatica/LEY SOBRE MENSAJES DE DATOS Y FIRMAS ELECTRONICAS.md',
		sha256Hash: '9efd43c8824c1fc2e0ccab2b8a3f9be3fa8f8836b22bf360eb455650c2017cd4',
	},
	{
		code: 'LEDI',
		category: 'Leyes Nacionales',
		title: 'Ley Especial contra los Delitos Informáticos',
		gacetaOrRef: 'Gaceta Oficial N° 37.313',
		year: '2001',
		articlesOrScope: '33 Artículos (Arts. 6 al 26)',
		description:
			'Protege integralmente los sistemas que utilicen tecnologías de información y tipifica los delitos contra sistemas (acceso indebido, sabotaje, falsificación de documentos, espionaje), contra la propiedad y contra la privacidad de las comunicaciones.',
		keyApplication: 'Base sustantiva penal para peritajes sobre acceso indebido, alteración de data, fraude electrónico y suplantación de identidad.',
		fileRef: 'Informatica/LEY ESPECIAL CONTRA LOS DELITOS INFORMATICOS.md',
		sha256Hash: '873cba0467a8a782dc8a3bb60d9be6315072b4d7c1039da2e10173090a25a93d',
	},
	{
		code: 'MUCC-2017',
		category: 'Leyes Nacionales',
		title: 'Manual Único de Cadena de Custodia de Evidencias Físicas y Digitales',
		gacetaOrRef: 'Gaceta Oficial N° 41.247 (Resolución Conjunta MP / MRIJP)',
		year: '2017',
		articlesOrScope: '4 Fases · 4 Modalidades · 3 Figuras Continuas · PRCC',
		description:
			'Regula de manera obligatoria los procedimientos generales y específicos de la Cadena de Custodia de evidencias físicas y digitales en Venezuela: obtención (técnica, aseguramiento, consignación, derivación), laboratorio y disposición final.',
		keyApplication: 'Rige la Planilla de Registro de Cadena de Custodia (PRCC) y las actas de obtención por consignación en las fases F1, F2 y F5.',
		fileRef: 'Informatica/Manual Único de Cadena de Custodia de Evidencias Físicas.md',
		sha256Hash: '9eef2c060ab009aa60a9573b3a668d79e435976632379a969df6beae89ba68a6',
	},
	{
		code: 'CENIF',
		category: 'Leyes Nacionales',
		title: 'Decreto de Creación del Centro Nacional de Informática Forense (CENIF)',
		gacetaOrRef: 'Gaceta Oficial N° 39.847 (Decreto N° 8.792)',
		year: '2012',
		articlesOrScope: '11 Artículos',
		description:
			'Crea el Centro Nacional de Informática Forense adscrito a SUSCERTE para brindar apoyo técnico y científico en las experticias informáticas forenses sobre evidencias digitales colectadas y garantizar la cadena de custodia.',
		keyApplication: 'Marco institucional de referencia nacional sobre estándares de laboratorio forense digital y colecta de evidencia electrónica.',
		fileRef: 'Informatica/CREACION DEL CENTRO NACIONAL DE INFORMATICA FORENSE.md',
		sha256Hash: 'c4025b9b4909ef6bd3383db5246f020877f808aa4c5b2a840ab90eb99479db55',
	},
	{
		code: 'SUSCERTE-PKI',
		category: 'Leyes Nacionales',
		title: 'Providencias y Normativa Técnica SUSCERTE sobre Certificación Electrónica y Forense Digital',
		gacetaOrRef: 'Gaceta Oficial N° 39.633 · NORMA-063-1.1-2011',
		year: '2011–2013',
		articlesOrScope: 'Estándares Técnicos PSC, Sellado de Tiempo yPKI',
		description:
			'Normativa de la Superintendencia de Servicios de Certificación Electrónica (SUSCERTE) para la acreditación de Proveedores de Servicios de Certificación, sellado electrónico de tiempo (TSA), algoritmos criptográficos y certificación cruzada.',
		keyApplication: 'Fundamenta la auditoría de certificados digitales X.509, firmas electrónicas avanzadas y sellos de tiempo en documentos PDF.',
		fileRef: 'Informatica/SUSCERTE_Marco_Normativo_Forense_Digital_Venezuela.md',
		sha256Hash: '7cc900e6009565ab31e86de613bd46f5080b83e9f9d0c857452512046f07fa91',
	},
	{
		code: 'NORMA-063',
		category: 'Leyes Nacionales',
		title: 'Norma Técnica SUSCERTE para la Certificación Cruzada (NORMA-063-1.1-2011)',
		gacetaOrRef: 'SUSCERTE / MCTI',
		year: '2011',
		articlesOrScope: 'Homologación de Certificados Electrónicos Extranjeros',
		description:
			'Define los requisitos técnicos y criptográficos para el reconocimiento y homologación de certificados electrónicos emitidos por proveedores extranjeros dentro de la infraestructura nacional.',
		keyApplication: 'Validación pericial de contratos internacionales firmados digitalmente con plataformas de certificación foráneas.',
		fileRef: 'Informatica/NORMA-063-1.1-2011-PARA-LA-CERTIFICACIN-CRUZADA.md',
		sha256Hash: 'f241d575361568475a7d8a32ec861731565e19539a3ee1f04714492fb70a9060',
	},
	{
		code: 'LPPC',
		category: 'Leyes Nacionales',
		title: 'Ley sobre Protección a la Privacidad de las Comunicaciones',
		gacetaOrRef: 'Gaceta Oficial N° 34.863',
		year: '1991',
		articlesOrScope: 'Protección Penal del Secreto de las Comunicaciones',
		description:
			'Tutela la privacidad e inviolabilidad de las comunicaciones entre particulares y sanciona la grabación, interceptación o reproducción arbitraria sin el consentimiento de los participantes o autorización judicial.',
		keyApplication: 'Sustenta el Acta de Consentimiento Informado (Fase F0) firmada por el propio participante de la comunicación consignada.',
		fileRef: 'Informatica/LEY SOBRE PROTECCION A LA PRIVACIDAD DE LAS COMUNICACIONES.md',
		sha256Hash: '72503efb8785719b9ab7cb31f0a69e7db201dc27762fbecfa9a1ff99573f3314',
	},
	{
		code: 'INFOGOBIERNO',
		category: 'Leyes Nacionales',
		title: 'Ley de Infogobierno',
		gacetaOrRef: 'Gaceta Oficial N° 40.274',
		year: '2013',
		articlesOrScope: '84 Artículos',
		description:
			'Establece los principios, bases y lineamientos que rigen el uso de las tecnologías de información en el Poder Público, la validez de los expedientes y actuaciones electrónicas y la seguridad de la información.',
		keyApplication: 'Auditoría de documentos electrónicos públicos, interoperabilidad y validez de actuaciones administrativas digitales.',
		fileRef: 'Informatica/LEY DE INFOGOBIERNO.md',
		sha256Hash: '8c33557b45c7d01f1f721691351478bd7cd519d3434a66a98a4a66c1be894769',
	},
	{
		code: 'INTEROPERABILIDAD',
		category: 'Leyes Nacionales',
		title: 'Ley sobre el Acceso e Intercambio Electrónico de Datos, Información y Documentos',
		gacetaOrRef: 'Gaceta Oficial N° 39.945 (Decreto N° 9.051)',
		year: '2012',
		articlesOrScope: '53 Artículos',
		description:
			'Regula el intercambio electrónico de datos e información entre órganos y entes del Estado, estableciendo estándares de integridad, disponibilidad, confidencialidad y trazabilidad.',
		keyApplication: 'Marco de trazabilidad y estándares de intercambio de datos electrónicos institucionales.',
		fileRef: 'Informatica/LEY SOBRE EL ACCESO E INTERCAMBIO ELECTRONICO DE DATOS.md',
		sha256Hash: '3d1e1659bb7663234625d76293fc84830337eb03bc1c9b04fb50eb940ec0a66e',
	},
	{
		code: 'LOTEL',
		category: 'Leyes Nacionales',
		title: 'Ley Orgánica de Telecomunicaciones',
		gacetaOrRef: 'Gaceta Oficial N° 39.610',
		year: '2011',
		articlesOrScope: 'Marco Regulatorio de Redes y Espectro Radioeléctrico',
		description:
			'Establece el marco legal de las telecomunicaciones, servicios de transporte de datos, telefonía móvil, direccionamiento IP y obligaciones de los operadores de telecomunicaciones.',
		keyApplication: 'Peritajes sobre registros de llamadas (CDR), celdas de telefonía móvil, direccionamiento IP y tráfico telemático.',
		fileRef: 'Informatica/LEY ORGANICA DE TELECOMUNICACIONES.md',
		sha256Hash: '4739a4498a19697b18e6b7c81ab1707fa61b74db8fd5c488f5a301431521bc98',
	},
	{
		code: 'LOCTI',
		category: 'Leyes Nacionales',
		title: 'Ley Orgánica de Ciencia, Tecnología e Innovación',
		gacetaOrRef: 'Gaceta Oficial N° 6.151 Extraordinario',
		year: '2014',
		articlesOrScope: '108 Artículos',
		description:
			'Rige la generación de conocimientos científicos, el desarrollo tecnológico y la aplicación de metodologías científicas certificadas en el ámbito nacional.',
		keyApplication: 'Respalda el carácter científico y metodológico de las investigaciones y peritajes tecnológicos.',
		fileRef: 'Informatica/LEY ORGANICA DE CIENCIA TECNOLOGIA E INNOVACION.md',
		sha256Hash: '1c6ad0e3b7e480a7a8858bf63612062efca08e44efae02b92263876e57b45cf9',
	},
	{
		code: 'RESORTE-ME',
		category: 'Leyes Nacionales',
		title: 'Ley de Responsabilidad Social en Radio, Televisión y Medios Electrónicos',
		gacetaOrRef: 'Gaceta Oficial N° 39.610',
		year: '2011',
		articlesOrScope: '53 Artículos',
		description:
			'Regula la difusión y recepción de mensajes a través de medios electrónicos, portales web y redes sociales, estableciendo responsabilidades sobre contenidos ilícitos o difamatorios.',
		keyApplication: 'Fijación y certificación forense de publicaciones en redes sociales, portales digitales y medios electrónicos.',
		fileRef: 'Informatica/LEY DE RESPONSABILIDAD SOCIAL EN RADIO TELEVISION Y MEDIOS ELECTRONICOS.md',
		sha256Hash: 'e3e4dad9d1052df65f22626ca61dc0d72a4f5e0c2ca89fc66cb671c1b8537627',
	},

	// --- CÓDIGOS Y LEYES ORGÁNICAS ---
	{
		code: 'CRBV',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Constitución de la República Bolivariana de Venezuela',
		gacetaOrRef: 'Gaceta Oficial N° 36.860 / N° 5.453E',
		year: '1999',
		articlesOrScope: 'Arts. 28, 48, 49, 60 y 110',
		description:
			'Norma suprema del ordenamiento jurídico. Consagra el derecho de acceso a los datos (Art. 28), la inviolabilidad de las comunicaciones (Art. 48), el debido proceso y la nulidad de pruebas ilícitas (Art. 49.1).',
		keyApplication: 'Vértice constitucional de toda actuación del laboratorio sha256.us y de la admisibilidad de la evidencia digital.',
		fileRef: 'Informatica/CONSTITUCION DE LA REPUBLICA BOLIVARIANA DE VENEZUELA.md',
		sha256Hash: 'e41d945f2c2142b10c980cf92a359bc19790e9112573d4bc517e6efed72765ca',
	},
	{
		code: 'COPP',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Ley de Reforma Parcial del Código Orgánico Procesal Penal',
		gacetaOrRef: 'Gaceta Oficial N° 6.644 Extraordinario',
		year: '2021',
		articlesOrScope: 'Arts. 181, 182, 187, 223, 224 y 225',
		description:
			'Establece el principio de libertad y licitud de la prueba (Art. 181), el procedimiento obligatorio de Cadena de Custodia (Art. 187) y las reglas de designación de peritos y contenido del Dictamen Pericial (Arts. 223–225).',
		keyApplication: 'Norma rectora de la estructura del Dictamen Pericial Oficial (Fase F4) y de la Planilla PRCC (Fase F1).',
		fileRef: 'Informatica/LEY DE REFORMA PARCIAL DEL CODIGO ORGANICO PROCESAL PENAL.md',
		sha256Hash: '264e3e37c0a376306ab12b8ebff84d4160b45dc6660bcde3f06bd26db4586545',
	},
	{
		code: 'CPC',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Código de Procedimiento Civil',
		gacetaOrRef: 'Gaceta Oficial N° 4.209 Extraordinario',
		year: '1990',
		articlesOrScope: 'Arts. 395, 429 y 451 al 471 (De la Experticia)',
		description:
			'Regula los medios de prueba en procesos civiles, mercantiles y laborales (por remisión), incluyendo la promoción, evacuación y valoración de la prueba de experticia y reproducciones técnicas.',
		keyApplication: 'Sustenta los dictámenes periciales informáticos promovidos en litigios civiles, mercantiles y laborales.',
		fileRef: 'Informatica/CODIGO DE PROCEDIMIENTO CIVIL.md',
		sha256Hash: '660623bc80f78ec0c21506e06199296f4d862796f9d292a76bf3efed6b08c342',
	},
	{
		code: 'CC',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Código Civil de Venezuela',
		gacetaOrRef: 'Gaceta Oficial N° 2.990 Extraordinario',
		year: '1982',
		articlesOrScope: 'Arts. 1.354 al 1.430 (De la Prueba de las Obligaciones y de la Experticia)',
		description:
			'Regula la eficacia de los instrumentos públicos y privados, las reproducciones mecánicas/técnicas y el régimen sustantivo de la prueba de experticia (Arts. 1.422–1.427).',
		keyApplication: 'Base sustantiva civil para el peritaje de contratos electrónicos, obligaciones mercantiles y valoración de experticias.',
		fileRef: 'Informatica/CODIGO CIVIL DE VENEZUELA.md',
		sha256Hash: '1c75ab6f44a38a27bc49bd2bdbe6d9300531f3b4db6bb1b929d89c2e9c7f997b',
	},
	{
		code: 'CP',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Código Penal de Venezuela',
		gacetaOrRef: 'Gaceta Oficial N° 5.768 Extraordinario',
		year: '2005',
		articlesOrScope: '122 Artículos Seleccionados (Falsedad, Estafa, Violación de Secretos, Falso Testimonio)',
		description:
			'Tipifica los delitos de falsificación de documentos, estafa y otros fraudes, revelación de secretos y las responsabilidades penales de los expertos y peritos en juicio.',
		keyApplication: 'Marco punitivo general conexo a delitos informáticos, fraudes documentales y juramento de ley del perito.',
		fileRef: 'Informatica/CODIGO PENAL DE VENEZUELA.md',
		sha256Hash: '7908f9bd9767be474ec9bb1ef4b609f11a9e77fc2ee64180c0d4245bbfe25e49',
	},
	{
		code: 'LOMP / LOPJ / LOADGC',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Ley Orgánica del Ministerio Público, Ley Orgánica del Poder Judicial y Ley de Archivos',
		gacetaOrRef: 'G.O. N° 38.647 (LOMP) · G.O. N° 5.262E (LOPJ) · G.O. N° 34.090 (LOADGC)',
		year: '1988–2007',
		articlesOrScope: 'Dirección de la Investigación, Auxiliares de Justicia y Conservación Documental',
		description:
			'Regulan las atribuciones del Ministerio Público en la dirección de la investigación penal y práctica de experticias, el rol de los peritos como auxiliares de justicia ante el Poder Judicial y la conservación de documentos.',
		keyApplication: 'Sustenta la actuación de los peritos de sha256.us como auxiliares de justicia y expertos técnicos.',
		fileRef: 'Informatica/LEY ORGANICA DEL MINISTERIO PUBLICO.md',
		sha256Hash: '13d871bf71b0bd069b2770eb0196e144a2bf4cbca553eb4ecad0bf2bbdb4e397',
	},

	// --- ESTÁNDARES INTERNACIONALES ISO/IEC ---
	{
		code: 'ISO/IEC 27037:2012',
		category: 'Estándares ISO/IEC',
		title: 'Directrices para la Identificación, Recolección, Adquisición y Preservación de Evidencia Digital',
		gacetaOrRef: 'ISO/IEC JTC 1/SC 27 · Primera Edición',
		year: '2012',
		articlesOrScope: 'Cláusulas 5, 6 y 7 (DEFR y DES) · Fases F1 y F2',
		description:
			'Estándar internacional fundamental que define las acciones de los Primeros Respondedores (DEFR) y Especialistas en Evidencia Digital (DES) para preservar la integridad, autenticidad y auditabilidad de los medios digitales.',
		keyApplication: 'Gobierna las Fases F1 (Identificación y Recolección) y F2 (Adquisición Lógica/Física y Hash Génesis SHA-256).',
		fileRef: 'Informatica/ISO-IEC-27037-2012.md',
		sha256Hash: '1fc4ef36e61a9ff7a3e6bc7a7230d68c2e391b7f7c27c07efca09b574890505b',
	},
	{
		code: 'ISO/IEC 27042:2015',
		category: 'Estándares ISO/IEC',
		title: 'Tecnología de la Información — Análisis e Interpretación de Evidencia Digital',
		gacetaOrRef: 'ISO/IEC JTC 1/SC 27',
		year: '2015',
		articlesOrScope: 'Cláusulas 6, 7, 8 y 9 (Continuidad, Repetibilidad y Reproducibilidad) · Fases F3 y F4',
		description:
			'Proporciona directrices para el análisis e interpretación científica de la evidencia digital, exigiendo validación de herramientas, competencia del analista y que un tercero independiente pueda reproducir idénticos resultados.',
		keyApplication: 'Rige la Fase F3 (Análisis SQLite, Audio Opus y Evaluación UX) y la estructura científica de la Fase F4 (Dictamen).',
		fileRef: 'Informatica/ISO_IEC 27042.md',
		sha256Hash: 'adb3606024cb952d0a9e0eb7a8d08e5ab9d409e3ab616667df106651071cb25b',
	},
	{
		code: 'ISO/IEC 27001:2022',
		category: 'Estándares ISO/IEC',
		title: 'Seguridad de la Información, Ciberseguridad y Protección de la Privacidad — SGSI',
		gacetaOrRef: 'ISO/IEC 27001:2022 · Anexo A (93 Controles)',
		year: '2022',
		articlesOrScope: 'Controles A.5.28 (Recolección de Evidencia) y A.8.10 (Eliminación de Información)',
		description:
			'Especifica los requisitos para establecer, implementar, mantener y mejorar un Sistema de Gestión de Seguridad de la Información (SGSI), incluyendo el control de evidencias y la eliminación segura de datos.',
		keyApplication: 'Sustenta los controles de seguridad del laboratorio y las Actas de Sanitización y Auditoría Criptográfica en la Fase F5.',
		fileRef: 'Informatica/ISO-IEC-27001-2022.md',
		sha256Hash: '08729218499fd9aa711e5d3b4648aa966e008e723d69aa86f23ca8fd4fb3d61e',
	},
	{
		code: 'ISO/IEC 27002:2022',
		category: 'Estándares ISO/IEC',
		title: 'Controles de Seguridad de la Información (Guía de Implementación)',
		gacetaOrRef: 'ISO/IEC 27002:2022',
		year: '2022',
		articlesOrScope: 'Controles Organizacionales, de Personas, Físicos y Tecnológicos',
		description:
			'Catálogo de referencia de controles de seguridad de la información, criptografía, control de acceso físico a bóvedas de evidencia, registro de eventos (logs) y gestión de incidentes.',
		keyApplication: 'Asegura el resguardo físico en bóveda, el control de acceso y el sellado criptográfico en sha256.us.',
		fileRef: 'Informatica/ISO-IEC-27002-2022.md',
		sha256Hash: '79b8a80c59aa938d74d9d9a4bd0ef626ec769b6c7fb74a0b8bc55be918bf562f',
	},

	// --- GUÍAS TÉCNICAS NIST / IETF / ACPO ---
	{
		code: 'NIST SP 800-86',
		category: 'Guías NIST / IETF / ACPO',
		title: 'Guide to Integrating Forensic Techniques into Incident Response',
		gacetaOrRef: 'National Institute of Standards and Technology (U.S. Dept. of Commerce)',
		year: '2006',
		articlesOrScope: '4 Fases NIST (Collection, Examination, Analysis, Reporting)',
		description:
			'Guía federal de los Estados Unidos para integrar técnicas de informática forense en la respuesta a incidentes sobre archivos de datos, sistemas operativos, tráfico de red y aplicaciones.',
		keyApplication: 'Metodología transversal de adquisición, examen y reporte forense en servidores, discos y estaciones de trabajo.',
		fileRef: 'Informatica/NIST.SP.800-86.md',
		sha256Hash: 'ea7eb6459b02458489c3b81bb129c4bc849e13d5db8e2432227f69653c0b3a05',
	},
	{
		code: 'NIST SP 800-101 Rev. 1',
		category: 'Guías NIST / IETF / ACPO',
		title: 'Guidelines on Mobile Device Forensics',
		gacetaOrRef: 'National Institute of Standards and Technology (NIST)',
		year: '2014',
		articlesOrScope: 'Pirámide de Extracción Móvil (Niveles 1 al 5: Manual, Lógica, Hex Dump, Chip-Off)',
		description:
			'Directriz federal estadounidense especializada en preservación, adquisición (lógica, sistema de archivos y física), examen y reporte forense de teléfonos inteligentes, tarjetas SIM/UICC y tablets.',
		keyApplication: 'Estándar rector para la extracción forense de WhatsApp, Telegram, bases SQLite y aislamiento Faraday en móviles.',
		fileRef: 'Informatica/NIST.SP.800-101r1.md',
		sha256Hash: 'efd3f02263ef8a93dfbf4ab539eead042db62018d0d658a2d57c9ec5f0772112',
	},
	{
		code: 'RFC 3227 (IETF)',
		category: 'Guías NIST / IETF / ACPO',
		title: 'Guidelines for Evidence Collection and Archiving (BCP 55)',
		gacetaOrRef: 'Internet Engineering Task Force (IETF)',
		year: '2002',
		articlesOrScope: 'Orden de Volatilidad (Order of Volatility) y Cadena de Custodia',
		description:
			'Define el Orden de Volatilidad obligatorio para recolectar evidencia digital desde lo más efímero (registros de CPU, caché, memoria RAM, conexiones de red) hasta el almacenamiento persistente (discos y respaldos).',
		keyApplication: 'Protocolo de recolección en vivo (Live Forensics) y preservación de evidencia volátil en servidores e incidentes.',
		fileRef: 'Informatica/rfc3227.txt.md',
		sha256Hash: 'f200dc11432d4822e4fa8a556a3f0796d323e73660f4bd87266586b249f0b7d7',
	},
	{
		code: 'ACPO v5 (7Safe)',
		category: 'Guías NIST / IETF / ACPO',
		title: 'ACPO Good Practice Guide for Digital Evidence',
		gacetaOrRef: 'Association of Chief Police Officers (UK)',
		year: '2012',
		articlesOrScope: 'Los 4 Principios Fundamentales de la Evidencia Digital',
		description:
			'Establece los 4 principios universales: (1) Ninguna acción debe alterar el dato original; (2) Quien acceda al original debe ser competente y explicar sus acciones; (3) Se debe crear una pista de auditoría reproducible; (4) El responsable de la investigación garantiza el cumplimiento legal.',
		keyApplication: 'Pilar deontológico y procedimental invocado en cada Acta de Adquisición (F2) y Dictamen Pericial (F4).',
		fileRef: 'Informatica/acpo-good-practice-guide-for-digital-evidence-v5.md',
		sha256Hash: '3bfbfef1d5555a70333c9433d9d7d4bd9df837ef7f11ec9d16b33290e4694fb2',
	},

	// --- MANUALES Y DOCTRINA FORENSE EN CARPETA /Informatica/ ---
	{
		code: 'AVILLA-ANDROID',
		category: 'Manuales y Doctrina Forense',
		title: 'Análisis Forense en Dispositivos Android con Avilla Forensics',
		gacetaOrRef: 'Protocolo Técnico de Adquisición Lógica Android / ADB / WhatsApp',
		year: '2023',
		articlesOrScope: 'Extracción no intrusiva de msgstore.db, wa.db y artefactos multimedia',
		description:
			'Metodología práctica para la adquisición lógica de dispositivos Android mediante puente ADB, extracción de bases de datos SQLite de WhatsApp, recuperación de notas de voz Opus y preservación con hash SHA-256.',
		keyApplication: 'Sustenta el procedimiento técnico de extracción móvil en las Fases F2 y F3 del laboratorio.',
		fileRef: 'Informatica/Análisis Forense en Dispositivos Android con Avilla Forensics.md',
		sha256Hash: 'e56a4da49dc28265884a70d04073f05e9c9cf6fd6eb423db697969e3ab7e5807',
	},
	{
		code: 'DAUBERT-PERITAJE',
		category: 'Manuales y Doctrina Forense',
		title: 'El Peritaje Informático Forense, Estándar Daubert y Doctrina Criminalística',
		gacetaOrRef: 'Compendio Doctrinal (Peritaje Forense · Criminología · Normalización Digital)',
		year: '2016–2023',
		articlesOrScope: 'Criterios Daubert de Confiabilidad Científica y Prueba Electrónica',
		description:
			'Integra los criterios de admisibilidad científica (verificabilidad, revisión por pares, tasa de error conocida y aceptación general en la comunidad científica) junto a la doctrina de criminalística y normalización digital.',
		keyApplication: 'Fundamentación epistemológica y científica de los dictámenes periciales para su defensa en juicio oral.',
		fileRef: 'Informatica/El peritaje informático forense.md',
		sha256Hash: 'c832e53aa088fc41b9028046db5cc40a48ff4f27591ef28b062ab33bd65e9141',
	},
];

export const STANDARDS = [
	{
		code: 'ISO/IEC 27037:2012',
		title: 'Identificación, Recolección y Adquisición',
		desc: 'Directrices internacionales para el aseguramiento, bloqueo de escritura (Write-Blocker) y preservación de evidencia digital con Hash Génesis SHA-256 (Fases F1–F2).',
		tag: 'ISO / IEC · F1–F2',
		hash: '1fc4ef36...505b',
	},
	{
		code: 'ISO/IEC 27042:2015',
		title: 'Análisis e Interpretación Pericial',
		desc: 'Estándar internacional de repetibilidad y reproducibilidad científica para el examen de bases SQLite, metadatos EXIF/ELA y audio forense (Fases F3–F4).',
		tag: 'ISO / IEC · F3–F4',
		hash: 'adb36060...b25b',
	},
	{
		code: 'NIST SP 800-86 & 800-101',
		title: 'Forense en Incidentes y Móviles',
		desc: 'Guías federales del NIST (EE. UU.) para adquisición forense de smartphones, tablets, servidores y sanitización criptográfica NIST SP 800-88.',
		tag: 'NIST USA · F2–F5',
		hash: 'ea7eb645...3a05',
	},
	{
		code: 'MUCC-2017 & COPP Art. 187',
		title: 'Cadena de Custodia Oficial (PRCC)',
		desc: 'Manual Único de Cadena de Custodia (G.O. N° 41.247) y Planilla PRCC en Folio con plena admisibilidad procesal ante tribunales de la República.',
		tag: 'NACIONAL · F1–F5',
		hash: '9eef2c06...68a6',
	},
	{
		code: 'LMDFE (G.O. 37.148)',
		title: 'Mensajes de Datos y Firmas Electrónicas',
		desc: 'Reconoce eficacia probatoria y equivalencia funcional a los mensajes de datos (WhatsApp, correos, PDFs) cuya integridad se certifique mediante SHA-256.',
		tag: 'LEY ESPECIAL · F4',
		hash: '9efd43c8...7cd4',
	},
	{
		code: 'LEDI (G.O. 37.313) & CENIF',
		title: 'Delitos Informáticos y Estándar CENIF',
		desc: 'Ley Especial contra los Delitos Informáticos, Decreto de Creación del CENIF (G.O. 39.847) y Providencias Técnicas de SUSCERTE.',
		tag: 'MARCO PENAL · F0–F4',
		hash: '873cba04...a93d',
	},
];

export const CORE_SERVICES = [
	{
		id: 'informatica-forense',
		tag: 'JUICIOS Y TRIBUNALES',
		title: 'Pruebas Digitales e Informes para Juicios',
		sub: 'Para casos laborales, civiles, familiares, mercantiles y penales',
		desc: 'Ejecución del Ciclo Pericial ISO de 6 Fases (F0 a F5): adquisición bit a bit con Write-Blockers, sellado Génesis SHA-256, Planilla PRCC (MUCC-2017) y Dictamen Pericial Oficial en Folio.',
		simpleDesc: 'Convertimos tus mensajes, correos, transferencias o archivos en una prueba legal certificada para que el juez la acepte en tu demanda o defensa.',
		cases: [
			'Demostrar despidos, acuerdos, deudas o incumplimientos en un juicio',
			'Evitar que la otra parte diga que tus pruebas son falsas o editadas',
			'Informe oficial firmado por peritos que pueden defender tu caso en el tribunal',
		],
		href: '/servicios#forense',
	},
	{
		id: 'moviles',
		tag: 'WHATSAPP Y CELULARES',
		title: 'Certificación de WhatsApp, Notas de Voz y Teléfonos',
		sub: 'Chats, audios, fotos, llamadas y mensajes borrados',
		desc: 'Extracción lógica y física en aislamiento Faraday, correlación de bases de datos SQLite (msgstore.db / wa.db), análisis espectral de notas de voz y contraste heurístico UX vs. SQLite.',
		simpleDesc: 'Extraemos y certificamos lo que realmente se envió o recibió en un teléfono celular, incluso si intentaron borrar los mensajes.',
		cases: [
			'Conversaciones de WhatsApp, Telegram o redes sociales',
			'Verificar que una nota de voz o grabación es real y no fue cortada ni editada',
			'Comprobar la fecha, hora y ubicación real de una fotografía o video',
		],
		href: '/servicios#moviles',
	},
	{
		id: 'almacenamiento',
		tag: 'COMPUTADORAS Y DISCOS',
		title: 'Recuperación de Archivos y Revisión de Computadoras',
		sub: 'Discos duros, laptops, memorias USB y servidores de empresas',
		desc: 'Adquisición por consignación con bloqueadores de escritura, preservación según el Orden de Volatilidad (RFC 3227), recuperación de particiones y sanitización NIST SP 800-88.',
		simpleDesc: 'Recuperamos información importante de equipos dañados o formateados y demostramos si alguien entró sin permiso a tu computadora.',
		cases: [
			'Archivos, contabilidad o documentos borrados por error o sabotaje',
			'Discos duros o memorias USB que dejaron de funcionar',
			'Investigar robos de información o accesos no autorizados en tu empresa',
		],
		href: '/servicios#almacenamiento',
	},
	{
		id: 'contratos-digitales',
		tag: 'DOCUMENTOS PDF Y CORREOS',
		title: 'Verificación de Contratos PDF, Correos y Estafas',
		sub: 'Detección de documentos alterados, firmas falsas y correos suplantados',
		desc: 'Auditoría técnica de integridad documental conforme a la LMDFE (G.O. 37.148), validación de certificados X.509 y certificación cruzada (NORMA-063 SUSCERTE), cabeceras SPF/DKIM/DMARC y metadatos XMP.',
		simpleDesc: 'Comprobamos científicamente si un contrato en PDF, recibo de pago, firma electrónica o correo es auténtico o fue manipulado.',
		cases: [
			'Descubrir si un contrato, factura o recibo en PDF fue modificado',
			'Rastrear el origen real de un correo electrónico en casos de fraude o estafa',
			'Validar firmas electrónicas y acuerdos comerciales digitales',
		],
		href: '/servicios#documentos',
	},
];
