// Configuración global corporativa de sha256.us y centro de datos para arquitectura Atomic Design
// Única fuente de verdad normativa y técnica: Directorio raíz /RAG/ (hashes SHA-256 verificados)

export const SITE_TITLE = 'Laboratorio de Informática Forense en Venezuela | Pruebas Digitales — sha256.us';
export const SITE_DESCRIPTION =
	'Laboratorio de informática forense en Venezuela. Certificamos mensajes de WhatsApp, correos, audios, contratos PDF y discos duros con SHA-256, Cadena de Custodia (MUCC-2017), ISO/IEC 27037, ISO/IEC 27042 y LMDFE para ganar procesos judiciales.';
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
	{ href: '/normativa', label: 'Proceso & Leyes' },
	{ href: '/blog', label: 'Casos & Guías' },
	{ href: '/about', label: 'Sobre Nosotros' },
	{ href: '/contacto', label: 'Contacto' },
];

export interface TrustBarItem {
	icon: 'court' | 'hash' | 'chain' | 'shield';
	text: string;
}

export const TRUST_ITEMS: TrustBarItem[] = [
	{ icon: 'court', text: 'Válido en Juicios (LMDFE y CPC)' },
	{ icon: 'shield', text: 'Sin Borrar ni Alterar tu Equipo' },
	{ icon: 'hash', text: 'Integridad Matemática SHA-256' },
	{ icon: 'chain', text: 'Cadena de Custodia MUCC-2017' },
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
		badgeTag: 'PASO 1 · RECEPCIÓN SEGURA',
		title: 'Recibimos tu teléfono o archivo con Cadena de Custodia',
		description:
			'Nos cuentas tu problema sin tecnicismos. Registramos el estado de tu equipo (marca, serial o IMEI) bajo la modalidad de Obtención por Consignación y abrimos la Planilla de Registro de Cadena de Custodia (PRCC).',
		bullets: [
			'Atención confidencial y autorización expresa del titular (CRBV Art. 28)',
			'Aislamiento de red (Modo Avión / Bolsa de Faraday) para evitar borrado remoto',
		],
	},
	{
		stepNumber: '2',
		badgeTag: 'PASO 2 · EXTRACCIÓN Y SELLADO SHA-256',
		title: 'Copiamos tu evidencia sin modificar tu dispositivo',
		description:
			'Realizamos una copia forense con bloqueadores de escritura o extracción lógica (NIST SP 800-101) y calculamos el sello digital SHA-256 antes y después de copiar para demostrar que nada fue alterado.',
		bullets: [
			'Tu teléfono o disco original nunca se analiza directamente (Principio ACPO 1)',
			'Devolución rápida de tu dispositivo en óptimas condiciones',
		],
	},
	{
		stepNumber: '3',
		badgeTag: 'PASO 3 · DICTAMEN PARA GANAR EL PROCESO',
		title: 'Entregamos el informe pericial listo para el tribunal',
		description:
			'Analizamos la copia verificada (bases SQLite, metadatos y fechas) y emitimos un Dictamen Pericial motivado que otorga a tus mensajes de datos plena eficacia probatoria ante el juez.',
		bullets: [
			'Equivalencia probatoria con documentos escritos (LMDFE Arts. 4 y 7)',
			'Redactado con claridad para jueces, abogados y ciudadanos (UNE 197010)',
		],
	},
];

export interface ForensicPhase {
	phaseCode: 'FASE 1' | 'FASE 2' | 'FASE 3' | 'FASE 4';
	stepNumber: string;
	badgeTag: string;
	badgeVariant: 'primary' | 'secondary' | 'accent' | 'dark';
	title: string;
	norms: string;
	responsible: string;
	description: string;
	controls: string[];
}

// Ciclo forense de 4 fases verificado íntegramente en RAG/
export const FORENSIC_PHASES: ForensicPhase[] = [
	{
		phaseCode: 'FASE 1',
		stepNumber: '1',
		badgeTag: 'FASE 1 · IDENTIFICACIÓN Y CONSIGNACIÓN',
		badgeVariant: 'primary',
		title: 'Identificación de Evidencia y Apertura de Cadena de Custodia (PRCC)',
		norms: 'ISO/IEC 27037 Cláusula 5.3 · MUCC-2017 Fase Inicial · CRBV Arts. 28 y 48',
		responsible: 'Jhonatan Freitez (Recepción, Entrevista y Custodia)',
		description:
			'Localización física y lógica de los dispositivos o archivos vinculados al hecho, fijación fotográfica previa a su manipulación, registro de identificadores (serial / IMEI *#06#) y recepción mediante Obtención por Consignación con apertura de la Planilla PRCC.',
		controls: [
			'Consentimiento expreso del titular o participante de la comunicación (CRBV Art. 28 y LPPC)',
			'Registro fotográfico y escrito del estado físico del equipo antes de manipularlo (ISO/IEC 27037 §5.3)',
			'Apertura de la Planilla de Registro de Cadena de Custodia (PRCC — MUCC-2017)',
		],
	},
	{
		phaseCode: 'FASE 2',
		stepNumber: '2',
		badgeTag: 'FASE 2 · PRESERVACIÓN Y ADQUISICIÓN',
		badgeVariant: 'primary',
		title: 'Aislamiento Faraday, Adquisición Segura y Verificación SHA-256',
		norms: 'ISO/IEC 27037 §§6.3, 6.5, 7.2 y 7.4 · NIST SP 800-101 · RFC 3227 · ACPO Principio 1',
		responsible: 'Jhonatan Freitez (Adquisición Lógica y Física)',
		description:
			'Aislamiento electromagnético inmediato (Modo Avión, extracción SIM y Bolsa de Faraday) contra borrado remoto (remote wipe), respeto al Orden de Volatilidad (RFC 3227), clonado bit a bit con Write-Blockers (FTK Imager) o extracción móvil (Avilla Forensics / ADB) y cálculo de hash SHA-256.',
		controls: [
			'Bloqueadores de escritura (Write-Blockers) y embalaje antiestático rotulado (ISO/IEC 27037 §7.4)',
			'Adquisición lógica o física móvil según estado del dispositivo (NIST SP 800-101 Rev. 1)',
			'Cálculo y verificación de huella criptográfica SHA-256 antes y después de la copia',
		],
	},
	{
		phaseCode: 'FASE 3',
		stepNumber: '3',
		badgeTag: 'FASE 3 · ANÁLISIS CIENTÍFICO',
		badgeVariant: 'secondary',
		title: 'Análisis e Interpretación Forense sobre Copia Verificada',
		norms: 'ISO/IEC 27042:2015 · NIST SP 800-86 · MUCC-2017 Fase de Laboratorio · ACPO Principios 2 y 3',
		responsible: 'Jull (Análisis Forense y Jurídico de Datos)',
		description:
			'Examen técnico reproducible ejecutado exclusivamente sobre la copia de trabajo verificada: inspección de bases de datos SQLite de mensajería (SQLiteBrowser / SQLiteman), reconstrucción de línea de tiempo (Autopsy), auditoría de metadatos (ExifTool) y comprobación continua con QuickHash SHA-256.',
		controls: [
			'Prohibición absoluta de analizar sobre el dispositivo original (ACPO Principio 1)',
			'Repetibilidad y reproducibilidad: un tercer perito obtiene el mismo resultado (ISO/IEC 27042)',
			'Recuperación de archivos y registros eliminados junto con su cronología exacta',
		],
	},
	{
		phaseCode: 'FASE 4',
		stepNumber: '4',
		badgeTag: 'FASE 4 · DICTAMEN Y DISPOSICIÓN',
		badgeVariant: 'accent',
		title: 'Dictamen Pericial Oficial y Cierre de Cadena de Custodia',
		norms: 'LMDFE Arts. 4 y 7 · COPP Arts. 197, 237–239 · CPC Arts. 395, 451–471 · CC Arts. 1.354 y 1.422–1.427',
		responsible: 'Jull & Jhonatan Freitez (Dictamen y Devolución)',
		description:
			'Redacción del Dictamen Pericial motivado con descripción del objeto examinado, exámenes practicados, resultados y conclusiones claras para el juez (COPP Art. 239 / CC Art. 1.425 / UNE 197010), más la devolución formal del dispositivo cerrando la PRCC (MUCC-2017 Disposición Final).',
		controls: [
			'Equivalencia probatoria de mensajes de datos con documentos escritos (LMDFE Arts. 4 y 7)',
			'Promoción conforme a pruebas libres y experticia civil o penal (CPC Arts. 395 y 451 / COPP Art. 237)',
			'Cierre formal de la Planilla PRCC por devolución o entrega al titular (MUCC-2017)',
		],
	},
];

// Caso de uso real: Recuperación de dinero prestado validando WhatsApp (100% fundamentado en RAG/)
export interface CaseStudyCard {
	step: string;
	tag: string;
	badgeVariant: 'secondary' | 'primary' | 'dark';
	title: string;
	summary: string;
	points: string[];
	legalBasis: string;
}

export const WHATSAPP_LOAN_CASE_STUDY = {
	tag: 'CASO DE USO REAL · RECUPERACIÓN DE PRÉSTAMO',
	title: 'Cómo una persona recuperó su dinero prestado validando sus chats de WhatsApp',
	sub: 'Cuando alguien niega una deuda porque no hubo contrato en papel, una simple captura de pantalla puede ser rechazada. Así es como un análisis forense correcto garantiza ganar el proceso.',
	cards: [
		{
			step: '1',
			tag: '1. EL PROBLEMA',
			badgeVariant: 'secondary' as const,
			title: 'Préstamo sin pagaré y capturas cuestionadas',
			summary:
				'Una persona prestó dinero por transferencia bancaria acordando la devolución por WhatsApp. Al vencer el plazo, el deudor negó la deuda, borró mensajes y alegó que las capturas impresas eran editadas.',
			points: [
				'No existía contrato físico firmado en papel',
				'El deudor desconocía la autenticidad de las capturas',
				'Las simples impresiones tienen valor limitado de copia (LMDFE Art. 4)',
			],
			legalBasis: 'Código Civil Art. 1.354: Quien pide ejecutar una obligación debe probarla.',
		},
		{
			step: '2',
			tag: '2. EL ANÁLISIS FORENSE',
			badgeVariant: 'primary' as const,
			title: 'Extracción de SQLite y sello SHA-256 en laboratorio',
			summary:
				'El acreedor consignó su teléfono en el laboratorio bajo Cadena de Custodia (PRCC). Se aisló el equipo de la red y se extrajo de forma segura la base de datos SQLite de mensajería sin alterar el original.',
			points: [
				'Aislamiento y copia forense (ISO/IEC 27037 y NIST SP 800-101)',
				'Lectura técnica de tablas SQLite con Avilla Forensics y SQLiteBrowser',
				'Verificación de integridad con hash SHA-256 (ISO/IEC 27042)',
			],
			legalBasis: 'MUCC-2017 (Obtención por Consignación y PRCC) + ISO/IEC 27037 y 27042.',
		},
		{
			step: '3',
			tag: '3. EL RESULTADO',
			badgeVariant: 'dark' as const,
			title: 'Prueba admitida y recuperación del dinero',
			summary:
				'Con el Dictamen Pericial motivado, el juez comprobó el emisor, destinatario, fecha, hora e integridad del acuerdo y del comprobante de pago, condenando al pago total de la deuda.',
			points: [
				'Plena eficacia probatoria del chat como Mensaje de Datos (LMDFE Arts. 4 y 7)',
				'Acreditación de origen, fecha y hora (LMDFE Arts. 8 y 9)',
				'Evacuación como prueba libre y experticia civil (CPC Arts. 395 y 451)',
			],
			legalBasis: 'LMDFE Arts. 4, 7 y 8 · CPC Arts. 395 y 451 · CC Arts. 1.354 y 1.422.',
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
		role: 'Perito Forense Digital & Análisis Jurídico de Datos',
		titleTag: 'Fases 3 y 4: Análisis Científico & Dictamen Judicial',
		phases: 'ISO/IEC 27042 · LMDFE Arts. 4 y 7 · COPP Arts. 237–239 · CPC Art. 451',
		summary:
			'Especialista en análisis e interpretación de evidencia digital sobre copia verificada: examen de bases SQLite, reconstrucción de líneas de tiempo, auditoría documental y emisión de dictámenes periciales para juicio.',
		responsibilities: [
			'Análisis forense reproducible sobre copia verificada sin alterar el original (ISO/IEC 27042 y ACPO)',
			'Examen técnico de bases SQLite móviles, metadatos (ExifTool) y líneas de tiempo (Autopsy)',
			'Verificación criptográfica de integridad SHA-256 y eficacia probatoria de mensajes de datos (LMDFE Art. 7)',
			'Redacción y defensa de dictámenes periciales motivados (COPP Art. 239, CPC Art. 451, CC Art. 1.425)',
		],
		standards: ['ISO/IEC 27042', 'LMDFE G.O. 37.148', 'LEDI G.O. 37.313', 'COPP Arts. 237–239', 'CPC Art. 451'],
		social: {
			web: 'https://jull.sha256.us',
			linkedin: 'https://www.linkedin.com/in/julljoll/',
			github: 'https://github.com/julljoll',
		},
	},
	{
		id: 'jhonatan-freitez',
		name: 'Jhonatan Freitez',
		role: 'Especialista en Entrevistas Forenses, Adquisición y Cadena de Custodia',
		titleTag: 'Fases 1 y 2: Consignación, PRCC y Extracción Segura',
		phases: 'MUCC-2017 · ISO/IEC 27037 · NIST SP 800-101 · CRBV Arts. 28 y 48',
		summary:
			'Especialista en recepción de evidencias bajo Obtención por Consignación, fijación física inicial, apertura de Planilla de Registro de Cadena de Custodia (PRCC), aislamiento Faraday y extracción móvil/lógica.',
		responsibilities: [
			'Recepción con autorización expresa del titular y garantía de privacidad (CRBV Art. 28 y LPPC)',
			'Fijación fotográfica, aislamiento de red (Modo Avión / Bolsa de Faraday) y apertura de PRCC (MUCC-2017)',
			'Clonación bit a bit con bloqueo de escritura (Write-Blockers) y generación de hash SHA-256 (ISO/IEC 27037)',
			'Adquisición lógica y física de smartphones Android/iOS (NIST SP 800-101 y Avilla Forensics)',
		],
		standards: ['MUCC-2017', 'ISO/IEC 27037', 'NIST SP 800-101', 'Avilla Forensics', 'CRBV Art. 28'],
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
		'Especialista en análisis de datos forenses y jurídicos, elaboración y defensa de dictámenes periciales judiciales, preservación de cadena de custodia con SHA-256 y auditoría técnica de evidencia digital.',
	specialties: [
		'Análisis Forense e Interpretación de Evidencia Digital (ISO/IEC 27042:2015)',
		'Dictamen Pericial Oficial con Validez en Juicio (COPP Arts. 237–239 y CPC Art. 451)',
		'Mensajes de Datos, Contratos Digitales y Firmas Electrónicas (LMDFE G.O. 37.148)',
		'Verificación de Integridad Criptográfica SHA-256 (ISO/IEC 27037)',
		'Defensa y Aclaratoria Pericial en Tribunales',
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
// SISTEMA DE CADENA DE CUSTODIA OFICIAL (MUCC-2017) — Verificado en RAG/
// ============================================================================
export interface CustodyItem {
	number: string;
	category: 'FASE MUCC-2017' | 'MODALIDAD DE OBTENCIÓN' | 'FIGURA CONTINUA';
	title: string;
	standards: string;
	description: string;
}

export const CHAIN_OF_CUSTODY_ITEMS: CustodyItem[] = [
	{
		number: '01',
		category: 'MODALIDAD DE OBTENCIÓN',
		title: 'Obtención por Consignación',
		standards: 'MUCC-2017 Fase Inicial (pp. 44–47)',
		description:
			'Modalidad en la que el particular, víctima o parte interesada entrega voluntariamente el teléfono, computadora o soporte digital en el laboratorio para su fijación y apertura de Planilla PRCC.',
	},
	{
		number: '02',
		category: 'MODALIDAD DE OBTENCIÓN',
		title: 'Obtención Técnica',
		standards: 'MUCC-2017 Fase Inicial (pp. 21–38)',
		description:
			'Protección, observación preliminar, fijación fotográfica, escrita y videográfica, colección, embalaje rotulado y registro en PRCC de evidencias en el sitio.',
	},
	{
		number: '03',
		category: 'FASE MUCC-2017',
		title: 'Fase de Laboratorio (Peritación)',
		standards: 'MUCC-2017 (pp. 52–58) · ISO/IEC 27042',
		description:
			'Recepción en ambiente controlado, designación del perito, examen científico sobre copia verificada y emisión del informe o dictamen pericial.',
	},
	{
		number: '04',
		category: 'FASE MUCC-2017',
		title: 'Fase de Disposición Judicial y Final',
		standards: 'MUCC-2017 (pp. 59–63) · COPP Arts. 187–188',
		description:
			'Resguardo judicial, exhibición en audiencia y cierre definitivo de la Planilla PRCC mediante devolución o entrega formal de la evidencia al titular.',
	},
	{
		number: '05',
		category: 'FIGURA CONTINUA',
		title: 'Resguardo, Traslado y Transferencia',
		standards: 'MUCC-2017 Figuras Continuas (pp. 63–69)',
		description:
			'Tres figuras transversales que garantizan la trazabilidad ininterrumpida en áreas de resguardo seguro y en cada entrega o traslado registrado en la PRCC.',
	},
	{
		number: '06',
		category: 'FASE MUCC-2017',
		title: 'Planilla de Registro de Cadena de Custodia (PRCC)',
		standards: 'MUCC-2017 (p. 37) · COPP Art. 187 (2012)',
		description:
			'Documento oficial de trazabilidad que registra cada eslabón, responsable, fecha, hora y estado del soporte digital desde su recepción hasta su devolución.',
	},
];

// ============================================================================
// PIRÁMIDE DE APLICACIÓN NORMATIVA — Verificada en RAG/
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
		tier: 'NIVEL 1 · CONSTITUCIONAL',
		levelName: 'Constitución de la República Bolivariana de Venezuela (CRBV)',
		normTitle: 'Garantías de Privacidad, Datos Personales y Debido Proceso',
		articles: 'Arts. 28 (Acceso a datos), 48 (Secreto de comunicaciones) y 49 (Debido proceso)',
		application:
			'Toda revisión de un dispositivo o comunicación privada requiere orden judicial o consentimiento expreso del titular participante. La prueba obtenida violando el debido proceso es nula.',
	},
	{
		tier: 'NIVEL 2 · PROCESAL PENAL Y CIVIL',
		levelName: 'Código Orgánico Procesal Penal (COPP), CPC y Código Civil',
		normTitle: 'Licitud de la Prueba, Pruebas Libres y Experticia Judicial',
		articles: 'COPP Arts. 197 y 237–239; CPC Arts. 395, 429 y 451–471; CC Arts. 1.354 y 1.422–1.427',
		application:
			'Regula el deber de probar las obligaciones (CC Art. 1.354), la admisibilidad de pruebas digitales como pruebas libres (CPC Art. 395) y los requisitos del Dictamen Pericial motivado.',
	},
	{
		tier: 'NIVEL 3 · LEYES ESPECIALES INFORMÁTICAS',
		levelName: 'LMDFE (G.O. N° 37.148) · LEDI (G.O. N° 37.313) · LPPC · LOTEL',
		normTitle: 'Eficacia Probatoria de Mensajes de Datos y Delitos Informáticos',
		articles: 'LMDFE Arts. 1, 4, 7, 8, 9 y 16; LEDI Arts. 6, 7, 12, 14 y 21',
		application:
			'Otorga a chats de WhatsApp, correos y PDFs la misma eficacia probatoria que un documento escrito (LMDFE Art. 4) cuando se demuestra su integridad e inalterabilidad (Art. 7).',
	},
	{
		tier: 'NIVEL 4 · PROTOCOLOS NACIONALES',
		levelName: 'MUCC-2017 · Creación del CENIF (G.O. N° 39.847) · Normas SUSCERTE',
		normTitle: 'Cadena de Custodia (PRCC) y Certificación Electrónica',
		articles: 'MUCC-2017 (4 Fases y 4 Modalidades); Res. N° 027 CENIF (Arts. 1–6); Norma 063-08/11',
		application:
			'Define la Planilla de Registro de Cadena de Custodia (PRCC), la Obtención por Consignación y los criterios técnicos de validación de certificados electrónicos.',
	},
	{
		tier: 'NIVEL 5 · ESTÁNDARES CIENTÍFICOS INTERNACIONALES',
		levelName: 'ISO/IEC 27037:2012 · ISO/IEC 27042:2015 · NIST SP 800-86 / 800-101 · RFC 3227 · ACPO',
		normTitle: 'Metodología de Preservación, Extracción y Análisis Reproducible',
		articles: 'ISO/IEC 27037 (§5–7), ISO/IEC 27042, NIST SP 800-101 Rev. 1, RFC 3227, ACPO v5',
		application:
			'Garantizan la no alteración del dispositivo original, el aislamiento de red, el Orden de Volatilidad, la verificación por hash SHA-256 y la reproducibilidad científica del peritaje.',
	},
];

// ============================================================================
// GARANTÍAS TÉCNICAS DE ADMISIBILIDAD — Verificadas en RAG/
// ============================================================================
export interface AdmissibilityGuarantee {
	title: string;
	code: string;
	description: string;
	iconName: string;
}

export const ADMISSIBILITY_GUARANTEES: AdmissibilityGuarantee[] = [
	{
		title: 'Bloqueo de Escritura (Write-Blockers)',
		code: 'ISO/IEC 27037 · ACPO Principio 1',
		description:
			'Ninguna acción del laboratorio altera los datos del equipo original. Toda copia se realiza con bloqueo de escritura.',
		iconName: 'lock',
	},
	{
		title: 'Integridad Matemática SHA-256',
		code: 'LMDFE Art. 7 · QuickHash / ISO 27037',
		description:
			'Calculamos el hash SHA-256 antes y después de adquirir la evidencia para demostrar ante el juez que es idéntica al original.',
		iconName: 'verified_user',
	},
	{
		title: 'Aislamiento Faraday contra Borrado Remoto',
		code: 'NIST SP 800-101 · Avilla Forensics',
		description:
			'Aislamos los teléfonos de señales celulares y Wi-Fi (Modo Avión / Bolsa de Faraday) para impedir borrados remotos (remote wipe).',
		iconName: 'security',
	},
	{
		title: 'Planilla Oficial de Cadena de Custodia (PRCC)',
		code: 'MUCC-2017 · COPP Art. 187 (2012)',
		description:
			'Trazabilidad continua documentada desde la Obtención por Consignación hasta el cierre y devolución del equipo.',
		iconName: 'verified_user',
	},
];

// ============================================================================
// COMPENDIO VERIFICADO DE INSTRUMENTOS DEL DIRECTORIO /RAG/
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
		gacetaOrRef: 'Gaceta Oficial N° 37.148 (Decreto-Ley N° 1.204)',
		year: '2001',
		articlesOrScope: 'Arts. 1, 2, 4, 6, 7, 8, 9, 11, 16, 17 y 38 (46 Arts.)',
		description:
			'Reconoce eficacia probatoria y valor jurídico a los Mensajes de Datos y Firmas Electrónicas, equiparando los mensajes digitales íntegros e inalterados a los documentos escritos.',
		keyApplication: 'Base legal para que chats de WhatsApp, correos y PDFs sirvan como prueba válida en juicio.',
		fileRef: 'RAG/Informatica/Ley-sobre-Mensajes-de-Datos-y-Firmas-Electronicas.md',
		sha256Hash: '9efd43c8565bf744e3414ffa4a0f73da806e7ebc7a15fbfe51b110e9c8240fe0',
	},
	{
		code: 'LEDI',
		category: 'Leyes Nacionales',
		title: 'Ley Especial contra los Delitos Informáticos',
		gacetaOrRef: 'Gaceta Oficial N° 37.313',
		year: '2001',
		articlesOrScope: '33 Artículos (Arts. 6, 7, 11, 12, 14, 20–22)',
		description:
			'Protege los sistemas que utilicen tecnologías de información y sanciona el acceso indebido (Art. 6), sabotaje (Art. 7), espionaje (Art. 11), falsificación de documentos (Art. 12), fraude (Art. 14) y violación de privacidad (Arts. 20–22).',
		keyApplication: 'Tipificación penal en peritajes sobre estafas electrónicas, intrusiones y documentos alterados.',
		fileRef: 'RAG/Informatica/Ley Especial de Delitos informáticos (2001). Publicado en Gaceta Oficial Nº 37.313 .md',
		sha256Hash: '873cba04737498ddee15c39da4e6dfe42e3b59fe26495128fb2a8cd4d4859f5b',
	},
	{
		code: 'MUCC-2017',
		category: 'Leyes Nacionales',
		title: 'Manual Único de Cadena de Custodia de Evidencias Físicas',
		gacetaOrRef: 'Ministerio Público / MPPRIJP (Versión 2017)',
		year: '2017',
		articlesOrScope: '4 Fases · 4 Modalidades · 3 Figuras Continuas · PRCC',
		description:
			'Regula el sistema de Cadena de Custodia desde la Fase Inicial (Obtención Técnica, Aseguramiento, Consignación, Derivación), Laboratorio y Disposición Judicial hasta la Disposición Final.',
		keyApplication: 'Rige la recepción por consignación de teléfonos o discos y el registro continuo en la Planilla PRCC.',
		fileRef: 'RAG/Informatica/MANUAL_ÚNICO_DE_CADENA DE_CUSTODIA_DE_EVIDENCIAS_(VERSIÓN_FINAL_29SEP17).md',
		sha256Hash: '9eef2c066c2d667a046b8b4c1dee62ad5dad9732777786eb4c44f70b9ed1c318',
	},
	{
		code: 'CENIF',
		category: 'Leyes Nacionales',
		title: 'Creación del Centro Nacional de Informática Forense (CENIF)',
		gacetaOrRef: 'Gaceta Oficial N° 39.847 (Resolución N° 027 MCTI)',
		year: '2012',
		articlesOrScope: 'Arts. 1 al 6 (Adscrito a SUSCERTE)',
		description:
			'Crea el CENIF bajo dirección de SUSCERTE para prestar servicios de peritaje informático forense, evaluación de medios de almacenamiento e informes periciales con integridad y confiabilidad.',
		keyApplication: 'Referencia institucional nacional sobre peritajes informáticos y evaluación de medios digitales.',
		fileRef: 'RAG/Informatica/Creación del CENIF (2012). Centro Nacional de Informática Forense. Publicado en Gaceta Oficial N° 39.847 de fecha 20 de enero..md',
		sha256Hash: 'c4025b9be2ee419bef68ed2dedf5240f605bfdf4ff47d81da2d41fc6dfd11bf5',
	},
	{
		code: 'SUSCERTE-MARCO',
		category: 'Leyes Nacionales',
		title: 'Referencias Bibliográficas y Marco Normativo Forense Digital',
		gacetaOrRef: 'Compendio Normativo SUSCERTE / Estándares Forenses',
		year: '2025',
		articlesOrScope: 'ISO 27037, ISO 27042, UNE 71505, UNE 197010, NIST y Leyes VE',
		description:
			'Articula las normas internacionales (ISO/IEC 27037, 27042, 27001, 27002, UNE 71505, UNE 197010), guías técnicas (NIST, ACPO, RFC 3227) y legislación venezolana aplicable al peritaje.',
		keyApplication: 'Matriz de referencia bibliográfica para la elaboración de dictámenes periciales en TIC.',
		fileRef: 'RAG/Informatica/Normativas SUSCERTE Forense Digital y Firma Electronica.md',
		sha256Hash: '7cc900e6e4bc3ec2d4483219dfc516a3a3c882a7b6df0be2d83b318cb67a23ca',
	},
	{
		code: 'NORMA-063',
		category: 'Leyes Nacionales',
		title: 'Guía para la Gestión de Certificación Cruzada (NORMA-063-1.1-2011)',
		gacetaOrRef: 'Norma SUSCERTE N° 063-08/11 · Edición N° 1 (v1.1)',
		year: '2011',
		articlesOrScope: 'Certificación Cruzada · Art. 44 LMDFE · RFC 3280',
		description:
			'Establece el procedimiento para que Proveedores de Servicios de Certificación acreditados validen certificados electrónicos emitidos por proveedores extranjeros.',
		keyApplication: 'Sustenta la validación de firmas y certificados electrónicos internacionales en contratos digitales.',
		fileRef: 'RAG/Informatica/NORMA-063-1.1-2011.md',
		sha256Hash: 'f241d5758149e307facc7c0f292dfd0da1f640b2486f5858da3a44f4ec1d719b',
	},
	{
		code: 'LPPC',
		category: 'Leyes Nacionales',
		title: 'Ley sobre Protección a la Privacidad de las Comunicaciones',
		gacetaOrRef: 'Gaceta Oficial de la República de Venezuela (16/12/1991)',
		year: '1991',
		articlesOrScope: 'Protección del Secreto e Inviolabilidad de Comunicaciones',
		description:
			'Protege la privacidad, confidencialidad e inviolabilidad de las comunicaciones entre particulares frente a interceptaciones o grabaciones arbitrarias sin consentimiento o mandato judicial.',
		keyApplication: 'Garantiza que las extracciones móviles se realicen únicamente con autorización del participante u orden judicial.',
		fileRef: 'RAG/Informatica/ley-sobre-proteccion-a-la-privacidad-de-las-comunicaciones.md',
		sha256Hash: '72503efb46a45134751374228c68a13a06cb03e9fce9d89e6f57f6596ce73f91',
	},
	{
		code: 'INFOGOBIERNO',
		category: 'Leyes Nacionales',
		title: 'Ley de Infogobierno',
		gacetaOrRef: 'Asamblea Nacional · República Bolivariana de Venezuela',
		year: '2013',
		articlesOrScope: '84 Artículos',
		description:
			'Establece los principios y lineamientos que rigen el uso de tecnologías de información en el Poder Público, la validez de expedientes electrónicos y la seguridad de datos.',
		keyApplication: 'Marco de validez e interoperabilidad de documentos y actuaciones electrónicas ante entes públicos.',
		fileRef: 'RAG/Informatica/Ley-de-infogobierno.md',
		sha256Hash: '8c33557b2f24689070fcc826d04a989752f8a2537a810c756e53a4b63db4e570',
	},
	{
		code: 'INTEROPERABILIDAD',
		category: 'Leyes Nacionales',
		title: 'Ley sobre Acceso e Intercambio Electrónico de Datos, Información y Documentos',
		gacetaOrRef: 'Decreto con Rango, Valor y Fuerza de Ley',
		year: '2012',
		articlesOrScope: '53 Artículos',
		description:
			'Regula el intercambio electrónico de datos e información entre órganos y entes del Estado bajo criterios de integridad, disponibilidad y trazabilidad.',
		keyApplication: 'Respalda la trazabilidad e integridad de datos electrónicos institucionales.',
		fileRef: 'RAG/Informatica/PDF-Ley-sobre-Acceso-e-Intercambio-Electronico-de-Datos.md',
		sha256Hash: '3d1e16591331300d08595f0547c0228d7cdf1ff2e3ab06133e531953088e31c9',
	},
	{
		code: 'LOTEL',
		category: 'Leyes Nacionales',
		title: 'Ley Orgánica de Telecomunicaciones (LOTEL)',
		gacetaOrRef: 'Marco Regulatorio de Telecomunicaciones',
		year: '2011',
		articlesOrScope: '26 Artículos Indexados en RAG',
		description:
			'Regula los servicios de telecomunicaciones, redes, telefonía móvil e infraestructura de transmisión de datos en el territorio nacional.',
		keyApplication: 'Referencia regulatoria para peritajes vinculados a telefonía móvil, operadores y comunicaciones.',
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
		description:
			'Rige el desarrollo científico, tecnológico e innovación mediante metodologías verificables en el ámbito nacional.',
		keyApplication: 'Respalda el carácter técnico y científico de la actividad forense digital.',
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
		description:
			'Regula la difusión y recepción de mensajes a través de medios electrónicos y plataformas digitales.',
		keyApplication: 'Marco aplicable a la fijación de contenidos y publicaciones en medios electrónicos y redes.',
		fileRef: 'RAG/Informatica/Ley-de-Responsabilidad-Social-en-Radio-Television-y-Medios-Electronicos.md',
		sha256Hash: 'e3e4dad9855c80e7b7661b197d1322be652de93b98600e63bea9d3573c8e65c8',
	},

	// --- CÓDIGOS Y LEYES ORGÁNICAS ---
	{
		code: 'CRBV',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Constitución de la República Bolivariana de Venezuela',
		gacetaOrRef: 'Constitución Nacional (1999)',
		year: '1999',
		articlesOrScope: 'Arts. 28, 48, 49, 285 (350 Artículos)',
		description:
			'Consagra el derecho de acceso a datos personales (Art. 28), la inviolabilidad de las comunicaciones privadas (Art. 48) y el debido proceso (Art. 49).',
		keyApplication: 'Límite constitucional para garantizar que toda evidencia digital sea obtenida lícitamente.',
		fileRef: 'RAG/Constitucion/constitucion-nacional-20191205135853.md',
		sha256Hash: '4677d2ca90238b1deb1735ae9f3a7ee2ecff73796a6903783d504ed5e07a0fcd',
	},
	{
		code: 'COPP',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Código Orgánico Procesal Penal',
		gacetaOrRef: 'Texto Procesal Penal en RAG',
		year: '2012–2021',
		articlesOrScope: 'Arts. 197, 237–241 (y Arts. 187–188 citados en MUCC-2017)',
		description:
			'Establece la licitud de la prueba (Art. 197), la práctica de experticias (Art. 237), los peritos (Art. 238) y los requisitos del Dictamen Pericial motivado (Art. 239).',
		keyApplication: 'Estructura legal obligatoria de los dictámenes periciales y de su ratificación oral en audiencia.',
		fileRef: 'RAG/Penal/codigo-organico-procesal-penal.md',
		sha256Hash: '849ed8a1821316d65afc6a98491016798e718d94b440b5419a55199c45cae830',
	},
	{
		code: 'CPC',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Código de Procedimiento Civil',
		gacetaOrRef: 'República de Venezuela (944 Artículos)',
		year: '1990',
		articlesOrScope: 'Arts. 395, 429 y 451 al 471 (De la Experticia)',
		description:
			'Habilita la promoción de medios de prueba no prohibidos por la ley o pruebas libres (Art. 395) y regula el nombramiento de expertos y evacuación de la experticia (Arts. 451–471).',
		keyApplication: 'Sustenta la admisión de mensajes de WhatsApp, correos y PDFs en juicios civiles, mercantiles y de cobro.',
		fileRef: 'RAG/Civil/codigo-de-procedimiento-civil.md',
		sha256Hash: 'f23b7dc7507de59799bc61cf2b9ddba550789f85e923b946506267be18311b80',
	},
	{
		code: 'CC',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Código Civil de Venezuela',
		gacetaOrRef: 'Código Civil (1.991 Artículos)',
		year: '1982',
		articlesOrScope: 'Arts. 1.354 (Obligaciones) y 1.422–1.427 (De la Experticia)',
		description:
			'Establece que quien pida la ejecución de una obligación debe probarla (Art. 1.354) y regula la prueba de experticia motivada cuando se requieren conocimientos especiales (Arts. 1.422–1.427).',
		keyApplication: 'Base civil para demostrar préstamos, pagos y contratos mediante experticia informática.',
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
		description:
			'Tipifica los delitos contra la fe pública, estafas, fraudes y responsabilidades penales conexas a la falsificación y administración de justicia.',
		keyApplication: 'Marco penal general en investigaciones sobre estafas, fraudes documentales y suplantación.',
		fileRef: 'RAG/Penal/codigo penal.md',
		sha256Hash: 'a2ba2391b35fd75d43133f4d7d14b3a40d4f30f13ad0a920bb8561b1a119346b',
	},
	{
		code: 'LOMP',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Ley Orgánica del Ministerio Público',
		gacetaOrRef: 'Ley Orgánica del Ministerio Público',
		year: '2007',
		articlesOrScope: '101 Artículos',
		description:
			'Regula la atribución del Ministerio Público para requerir peritajes y experticias pertinentes para el esclarecimiento de los hechos.',
		keyApplication: 'Marco institucional de colaboración pericial en investigaciones penales.',
		fileRef: 'RAG/Penal/ley-organica-del-ministerio-publico.md',
		sha256Hash: '5f55daa598762ce35d01ed2d68dc196ef7fbdddac57e93879f185596f4401471',
	},
	{
		code: 'LOPJ',
		category: 'Códigos y Leyes Orgánicas',
		title: 'Ley Orgánica del Poder Judicial',
		gacetaOrRef: 'Ley Orgánica del Poder Judicial',
		year: '1998',
		articlesOrScope: '121 Artículos',
		description:
			'Establece la organización del Poder Judicial y el régimen de los auxiliares de justicia ante los tribunales.',
		keyApplication: 'Sustenta la actuación de peritos y auxiliares técnicos en procesos judiciales.',
		fileRef: 'RAG/Penal/ley-organica-del-poder-judicial.md',
		sha256Hash: '191925185408d1b8a2c145cec034cdb9e5804c5e448781e8403ea052a27f5ff4',
	},

	// --- ESTÁNDARES INTERNACIONALES ISO/IEC ---
	{
		code: 'ISO/IEC 27037:2012',
		category: 'Estándares ISO/IEC',
		title: 'Directrices para la Identificación, Recolección, Adquisición y Preservación de Evidencia Digital',
		gacetaOrRef: 'ISO/IEC JTC 1/SC 27 · Primera Edición',
		year: '2012',
		articlesOrScope: 'Cláusulas 5, 6 y 7 (Identificación, Volatilidad, Clonado y Preservación)',
		description:
			'Estándar internacional que define los procedimientos técnicos para identificar dispositivos, adquirir copias bit a bit con bloqueo de escritura y preservar la evidencia digital con hashes verificables.',
		keyApplication: 'Gobierna las Fases 1 y 2 del laboratorio: registro visual, Write-Blockers y hash SHA-256.',
		fileRef: 'RAG/Informatica/ISO IEC 27037-2012.md',
		sha256Hash: '1fc4ef366fa13da68e4c9f7168b3ea15ec5044b1e5bdb5a6a2055ad4b4de4b3b',
	},
	{
		code: 'ISO/IEC 27042:2015',
		category: 'Estándares ISO/IEC',
		title: 'Directrices para el Análisis e Interpretación de Evidencia Digital',
		gacetaOrRef: 'ISO/IEC 27042:2015 · Aplicación Práctica en Casos',
		year: '2015',
		articlesOrScope: 'Continuidad, Repetibilidad y Reproducibilidad Científica',
		description:
			'Establece los criterios para el examen e interpretación técnica de evidencia digital, exigiendo herramientas validadas (FTK Imager, Autopsy, QuickHash) y resultados reproducibles por un tercero.',
		keyApplication: 'Rige la Fase 3: análisis de bases SQLite, líneas de tiempo, recuperación de archivos y verificación SHA-256.',
		fileRef: 'RAG/Informatica/ISO-IEC 27042 2015.md',
		sha256Hash: 'adb360603120c4f69f6f4a3215cc26b839c5efdbb68f036bbf3de657c9e54e5b',
	},
	{
		code: 'ISO/IEC 27001:2022',
		category: 'Estándares ISO/IEC',
		title: 'Sistemas de Gestión de Seguridad de la Información (SGSI)',
		gacetaOrRef: 'ISO/IEC 27001:2022',
		year: '2022',
		articlesOrScope: 'Confidencialidad, Integridad, Disponibilidad y Gestión de Riesgos',
		description:
			'Especifica los requisitos para proteger la confidencialidad, integridad y disponibilidad de la información consignada mediante gestión de riesgos y controles de acceso.',
		keyApplication: 'Sustenta los controles de resguardo y confidencialidad de las evidencias dentro del laboratorio.',
		fileRef: 'RAG/Informatica/ISO-27001_2022_NOEDER.md',
		sha256Hash: '08729218f04ef9270571ce9cdf1638514da7c6b85a3743fb49215c917fd70836',
	},
	{
		code: 'ISO/IEC 27002:2022',
		category: 'Estándares ISO/IEC',
		title: 'Controles de Seguridad de la Información (Guía de Implementación)',
		gacetaOrRef: 'ISO/IEC 27002:2022',
		year: '2022',
		articlesOrScope: 'Controles Organizacionales, Físicos y Tecnológicos',
		description:
			'Catálogo de controles de seguridad de la información, protección física, registros de auditoría, criptografía y manejo de evidencias.',
		keyApplication: 'Respalda la custodia física, el control de acceso y el manejo seguro de las copias de trabajo.',
		fileRef: 'RAG/Informatica/ISO 27002_2022 ES.md',
		sha256Hash: '79b8a80c8a7bf17da3ab802dbf08383e9ccf84aefa2944ac6400dfa6c8c6126d',
	},

	// --- GUÍAS TÉCNICAS NIST / IETF / ACPO ---
	{
		code: 'NIST SP 800-86',
		category: 'Guías NIST / IETF / ACPO',
		title: 'Guide to Integrating Forensic Techniques into Incident Response',
		gacetaOrRef: 'National Institute of Standards and Technology (NIST)',
		year: '2006',
		articlesOrScope: '4 Fases: Collection, Examination, Analysis, Reporting',
		description:
			'Guía federal de los Estados Unidos para recolectar, examinar, analizar y reportar evidencia digital sobre archivos, sistemas operativos, tráfico de red y aplicaciones.',
		keyApplication: 'Metodología de examen forense en computadoras, servidores e incidentes de seguridad.',
		fileRef: 'RAG/Informatica/NIST SP 800-86_ingles.md',
		sha256Hash: 'ea7eb645bcd3feaf3ab9ea7dfc3c8987a08bf260c40682df1e5e8292bf9fe9b4',
	},
	{
		code: 'NIST SP 800-101 Rev. 1',
		category: 'Guías NIST / IETF / ACPO',
		title: 'Guidelines on Mobile Device Forensics',
		gacetaOrRef: 'National Institute of Standards and Technology (NIST)',
		year: '2014',
		articlesOrScope: 'Preservación, Adquisición (Manual, Lógica, Física) y Reporte Móvil',
		description:
			'Directriz especializada en la preservación y adquisición de teléfonos inteligentes y tablets: aislamiento contra borrado remoto, extracción lógica/física y análisis de mensajería.',
		keyApplication: 'Estándar rector para certificar chats de WhatsApp, fotos, audios y datos en teléfonos móviles.',
		fileRef: 'RAG/Informatica/Guidelines on Mobile Device-NIST Special Publication 800-101.md',
		sha256Hash: 'efd3f02258276fb294d62a73bb0a6ec80051fd625d5197584220beaface31718',
	},
	{
		code: 'RFC 3227 (IETF)',
		category: 'Guías NIST / IETF / ACPO',
		title: 'Guidelines for Evidence Collection and Archiving',
		gacetaOrRef: 'Internet Engineering Task Force (IETF)',
		year: '2002',
		articlesOrScope: 'Orden de Volatilidad (Order of Volatility) y Archivo Seguro',
		description:
			'Establece el Orden de Volatilidad obligatorio para recolectar evidencia desde lo más efímero (memoria RAM, procesos, red) hasta el almacenamiento persistente en disco.',
		keyApplication: 'Protocolo para captura de memoria RAM y discos en equipos encendidos sin perder datos volátiles.',
		fileRef: 'RAG/Informatica/RFC 3227 (2002)_2.md',
		sha256Hash: 'f200dc11aa0ef92a0a1c5a7bb7d4dad563d59f24f7160887ec6c5c5f8437cacd',
	},
	{
		code: 'ACPO v5',
		category: 'Guías NIST / IETF / ACPO',
		title: 'ACPO Good Practice Guide for Digital Evidence',
		gacetaOrRef: 'Association of Chief Police Officers (Reino Unido)',
		year: '2012',
		articlesOrScope: 'Los 4 Principios Fundamentales de la Evidencia Digital',
		description:
			'Consagra los 4 principios universales: (1) No alterar datos originales; (2) Competencia técnica de quien accede; (3) Pista de auditoría reproducible; (4) Cumplimiento legal.',
		keyApplication: 'Pilar ético y técnico aplicado en cada adquisición y análisis del laboratorio.',
		fileRef: 'RAG/Informatica/ACPO_Good_Practice_Guide_for_Digital_Evidence_v5.md',
		sha256Hash: '3bfbfef11be8dd338d056204389db46b69d19f3ee1459943b80d416c11cb6128',
	},

	// --- MANUALES Y DOCTRINA FORENSE ---
	{
		code: 'AVILLA-ANDROID',
		category: 'Manuales y Doctrina Forense',
		title: 'Análisis Forense en Dispositivos Móviles Android (Avilla Forensics)',
		gacetaOrRef: 'Protocolo de Adquisición y Análisis Android / SQLite',
		year: '2023',
		articlesOrScope: 'Aislamiento Faraday, ADB, SQLiteBrowser, HxD y ExifTool',
		description:
			'Guía práctica sobre aislamiento electromagnético en bolsa de Faraday, tipos de adquisición (manual, lógica y física), uso de Avilla Forensics / ADB y examen de bases SQLite y metadatos.',
		keyApplication: 'Sustenta los procedimientos técnicos de extracción y análisis de WhatsApp y artefactos en Android.',
		fileRef: 'RAG/Informatica/analisis forense en android con avilla forensics.md',
		sha256Hash: 'e56a4da482f30910123236c6ef686f9bbd60ff6472c88f5aaf56d8f13f2549f9',
	},
	{
		code: 'PERITAJE-INFORMATICO',
		category: 'Manuales y Doctrina Forense',
		title: 'El Peritaje Informático y la Evidencia Digital',
		gacetaOrRef: 'Grupo GECTI · Universidad de los Andes (Jeimy Cano)',
		year: '2010',
		articlesOrScope: 'Valoración de la Prueba Electrónica y Estándar del Peritaje',
		description:
			'Obra de doctrina jurídica y técnica sobre valoración probatoria de mensajes de datos, requisitos del peritaje informático y manipulación científica de evidencia electrónica.',
		keyApplication: 'Respaldo doctrinal para sustentar la eficacia probatoria y confiabilidad de los dictámenes en juicio.',
		fileRef: 'RAG/Informatica/el peritaje informático.md',
		sha256Hash: 'c832e53a12fe2591c35e240e13977e087a178409e418226d53e7361747e0a3ea',
	},
];

export const STANDARDS = [
	{
		code: 'ISO/IEC 27037:2012',
		title: 'Preservación y Adquisición Digital',
		desc: 'Directrices para identificar dispositivos, clonar sin alterar el original (Write-Blocker) y calcular hash SHA-256.',
		tag: 'ISO / IEC · Fases 1–2',
		hash: '1fc4ef36...4b3b',
	},
	{
		code: 'ISO/IEC 27042:2015',
		title: 'Análisis e Interpretación Pericial',
		desc: 'Estándar de repetibilidad y reproducibilidad científica para examinar bases SQLite, discos y líneas de tiempo.',
		tag: 'ISO / IEC · Fase 3',
		hash: 'adb36060...4e5b',
	},
	{
		code: 'NIST SP 800-86 & 800-101',
		title: 'Forense en Móviles e Incidentes',
		desc: 'Guías del NIST para aislamiento Faraday y extracción lógica/física de teléfonos Android, iOS y computadoras.',
		tag: 'NIST USA · Fases 2–3',
		hash: 'efd3f022...1718',
	},
	{
		code: 'MUCC-2017 (PRCC)',
		title: 'Cadena de Custodia Oficial',
		desc: 'Manual Único de Cadena de Custodia: Obtención por Consignación y Planilla PRCC para admisibilidad judicial.',
		tag: 'NACIONAL · Fases 1–4',
		hash: '9eef2c06...c318',
	},
	{
		code: 'LMDFE (G.O. N° 37.148)',
		title: 'Mensajes de Datos y Firmas',
		desc: 'Reconoce a chats, correos y documentos electrónicos la misma eficacia probatoria que un documento escrito.',
		tag: 'LEY ESPECIAL · Fase 4',
		hash: '9efd43c8...0fe0',
	},
	{
		code: 'LEDI (G.O. N° 37.313) & CENIF',
		title: 'Delitos Informáticos y Peritaje',
		desc: 'Tipificación de fraudes, acceso indebido y falsificación documental (LEDI) y estándar pericial CENIF (G.O. 39.847).',
		tag: 'MARCO PENAL · Fases 1–4',
		hash: '873cba04...59f5',
	},
];

export const CORE_SERVICES = [
	{
		id: 'moviles',
		tag: 'WHATSAPP, PRÉSTAMOS Y MÓVILES',
		title: 'Certificación de Chats de WhatsApp, Audios y Fotos',
		sub: 'Demuestra deudas, acuerdos, amenazas o mensajes borrados',
		desc: 'Aislamiento Faraday (NIST SP 800-101), extracción lógica/física con Avilla Forensics, examen de bases SQLite y sellado SHA-256.',
		simpleDesc: 'Convertimos tus conversaciones de WhatsApp y notas de voz en una prueba legal que el juez sí acepta, aunque la otra parte niegue el chat.',
		cases: [
			'Cobrar dinero prestado acordado por WhatsApp sin contrato en papel',
			'Recuperar o certificar mensajes borrados, audios y comprobantes de pago',
			'Verificar fecha, hora y metadatos reales de fotos con ExifTool',
		],
		href: '/servicios#moviles',
	},
	{
		id: 'informatica-forense',
		tag: 'JUICIOS Y TRIBUNALES',
		title: 'Dictámenes Periciales para Ganar Procesos Judiciales',
		sub: 'Casos civiles, mercantiles, laborales, familiares y penales',
		desc: 'Ejecución de las 4 Fases Forenses bajo ISO/IEC 27037, ISO/IEC 27042, Planilla PRCC (MUCC-2017) y COPP Art. 239 / CPC Art. 451.',
		simpleDesc: 'Una captura de pantalla se impugna fácil. Nuestro dictamen pericial certificado blinda tu prueba para que tenga plena fuerza en juicio.',
		cases: [
			'Probar obligaciones, pagos o incumplimientos (Código Civil Art. 1.354)',
			'Evitar que la contraparte tache tus pruebas digitales de falsas o editadas',
			'Informe motivado listo para promover como prueba en tribunales',
		],
		href: '/servicios#forense',
	},
	{
		id: 'contratos-digitales',
		tag: 'DOCUMENTOS PDF Y CORREOS',
		title: 'Auditoría de Contratos PDF, Firmas y Correos Falsos',
		sub: 'Detecta documentos manipulados, fraudes y suplantaciones',
		desc: 'Auditoría de integridad documental bajo LMDFE (Arts. 4, 7 y 16), certificación cruzada SUSCERTE (NORMA-063) y delitos de falsificación (LEDI Art. 12).',
		simpleDesc: 'Comprobamos científicamente si un contrato PDF, recibo de pago o correo electrónico es auténtico o fue alterado para engañarte.',
		cases: [
			'Detectar alteraciones o falsificaciones en contratos o recibos PDF',
			'Verificar la autenticidad de firmas y certificados electrónicos',
			'Rastrear correos electrónicos en casos de estafa o fraude comercial',
		],
		href: '/servicios#documentos',
	},
	{
		id: 'almacenamiento',
		tag: 'COMPUTADORAS Y DISCOS',
		title: 'Recuperación de Archivos y Revisión de Computadoras',
		sub: 'Discos duros, laptops, memorias USB y sistemas de oficina',
		desc: 'Clonado bit a bit con Write-Blockers (ISO/IEC 27037), preservación de memoria RAM (RFC 3227), análisis en Autopsy y revisión de delitos LEDI.',
		simpleDesc: 'Rescatamos información eliminada o dañada trabajando siempre sobre una copia segura, e investigamos robos o borrados de datos.',
		cases: [
			'Recuperar documentos o contabilidad borrada sin arriesgar tu disco',
			'Reconstruir qué archivos se abrieron o borraron y en qué fecha (Autopsy)',
			'Documentar accesos indebidos o sabotajes informáticos (LEDI Arts. 6 y 7)',
		],
		href: '/servicios#almacenamiento',
	},
];
