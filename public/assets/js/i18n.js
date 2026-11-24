/**
 * public/assets/js/i18n.js
 * Motor Bilingüe Ultraligero y de Alto Rendimiento para sha256.us
 * Idioma por defecto: Español ('es') | Idioma secundario: Inglés ('en')
 * 
 * Rendimiento Core Web Vitals:
 * - Carga diferida (lazy-fetch) del diccionario 'i18n-en.json' ÚNICAMENTE si
 *   el usuario activa el modo Inglés.
 * - En visitas en Español, no consume ancho de banda de red (0 KB transferidos).
 * - Transición reversible y sin pérdida (lossless) entre Español e Inglés.
 */

(function () {
  const STORAGE_KEY = 'sha256_lang';
  let i18nData = null;
  let isFetching = false;
  let trackedNodes = null;
  let trackedPlaceholders = null;
  let originalTitle = null;

  function getInitialLanguage() {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'en' || urlLang === 'es') return urlLang;
      // Idioma oficial por defecto: Español ('es')
      const sessionLang = sessionStorage.getItem(STORAGE_KEY);
      if (sessionLang === 'en' || sessionLang === 'es') return sessionLang;
    } catch (e) {
      // Fallback seguro
    }
    return 'es';
  }

  async function loadDictionary() {
    if (i18nData) return i18nData;
    if (isFetching) {
      while (isFetching) {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      return i18nData;
    }
    isFetching = true;
    try {
      const res = await fetch('/assets/js/i18n-en.json');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      i18nData = await res.json();
    } catch (err) {
      console.warn('[i18n] No se pudo cargar el diccionario de inglés:', err);
      i18nData = { titles: {}, dictionary: {} };
    } finally {
      isFetching = false;
    }
    return i18nData;
  }

  function initTracking() {
    if (trackedNodes !== null) return;
    trackedNodes = [];
    trackedPlaceholders = [];
    originalTitle = document.title;

    const dict = (i18nData && i18nData.dictionary) || {};

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (!node || !node.nodeValue) return NodeFilter.FILTER_REJECT;
          const parent = node.parentNode;
          if (!parent) return NodeFilter.FILTER_REJECT;
          const tag = parent.nodeName.toUpperCase();
          if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'CODE' || tag === 'PRE' || tag === 'NOSCRIPT') {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.closest && (parent.closest('[data-lang-toggle]') || parent.closest('[data-lang-ui]'))) {
            return NodeFilter.FILTER_REJECT;
          }
          const text = node.nodeValue.trim();
          if (text.length > 0 && dict[text]) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_SKIP;
        }
      }
    );

    let currentNode;
    while ((currentNode = walker.nextNode())) {
      const raw = currentNode.nodeValue;
      const text = raw.trim();
      const en = dict[text];
      if (en) {
        const lead = raw.match(/^\s*/)[0];
        const trail = raw.match(/\s*$/)[0];
        trackedNodes.push({
          node: currentNode,
          es: raw,
          en: lead + en + trail
        });
      }
    }

    document.querySelectorAll('[placeholder]').forEach((el) => {
      const ph = el.getAttribute('placeholder');
      if (ph && dict[ph]) {
        trackedPlaceholders.push({
          el: el,
          es: ph,
          en: dict[ph]
        });
      }
    });
  }

  function updateButtonsUI(lang) {
    const isEn = lang === 'en';

    // Toggle buttons
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.setAttribute('aria-pressed', isEn ? 'true' : 'false');
      btn.setAttribute(
        'aria-label',
        isEn
          ? 'Switch site language: Spanish - English (Current: English)'
          : 'Cambiar idioma del sitio: Español - Inglés (Actual: Español)'
      );

      const esEl = btn.querySelector('[data-lang-es]');
      const enEl = btn.querySelector('[data-lang-en]');
      if (esEl && enEl) {
        if (isEn) {
          esEl.classList.remove('text-bold', 'text-primary-dark');
          esEl.classList.add('text-normal', 'text-base');
          enEl.classList.remove('text-normal', 'text-base');
          enEl.classList.add('text-bold', 'text-primary-dark');
        } else {
          esEl.classList.remove('text-normal', 'text-base');
          esEl.classList.add('text-bold', 'text-primary-dark');
          enEl.classList.remove('text-bold', 'text-primary-dark');
          enEl.classList.add('text-normal', 'text-base');
        }
      }

      const textEl = btn.querySelector('[data-lang-text]');
      if (textEl) {
        textEl.textContent = isEn ? 'Inglés (EN)' : 'Español (ES)';
      }
    });

    // Explicit set buttons
    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      const target = btn.getAttribute('data-set-lang');
      if (target === lang) {
        btn.classList.add('usa-button--active');
        btn.setAttribute('aria-current', 'true');
      } else {
        btn.classList.remove('usa-button--active');
        btn.removeAttribute('aria-current');
      }
    });
  }

  async function applyLanguage(lang) {
    const normalized = lang === 'en' ? 'en' : 'es';
    try {
      sessionStorage.setItem(STORAGE_KEY, normalized);
      localStorage.setItem(STORAGE_KEY, normalized);
    } catch (e) {}

    document.documentElement.lang = normalized;

    if (normalized === 'en') {
      await loadDictionary();
      initTracking();

      if (originalTitle && i18nData && i18nData.titles && i18nData.titles[originalTitle]) {
        document.title = i18nData.titles[originalTitle];
      }

      if (trackedNodes) {
        for (let i = 0; i < trackedNodes.length; i++) {
          trackedNodes[i].node.nodeValue = trackedNodes[i].en;
        }
      }

      if (trackedPlaceholders) {
        for (let i = 0; i < trackedPlaceholders.length; i++) {
          trackedPlaceholders[i].el.setAttribute('placeholder', trackedPlaceholders[i].en);
        }
      }
    } else {
      // Restaurar español
      if (originalTitle) {
        document.title = originalTitle;
      }
      if (trackedNodes) {
        for (let i = 0; i < trackedNodes.length; i++) {
          trackedNodes[i].node.nodeValue = trackedNodes[i].es;
        }
      }
      if (trackedPlaceholders) {
        for (let i = 0; i < trackedPlaceholders.length; i++) {
          trackedPlaceholders[i].el.setAttribute('placeholder', trackedPlaceholders[i].es);
        }
      }
    }

    updateButtonsUI(normalized);
  }

  function bindEvents() {
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = document.documentElement.lang === 'en' ? 'en' : 'es';
        const next = current === 'es' ? 'en' : 'es';
        applyLanguage(next);
      });
    });

    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.getAttribute('data-set-lang') === 'en' ? 'en' : 'es';
        applyLanguage(target);
      });
    });
  }

  const initialLang = getInitialLanguage();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      bindEvents();
      if (initialLang === 'en') {
        applyLanguage('en');
      } else {
        updateButtonsUI('es');
      }
    });
  } else {
    bindEvents();
    if (initialLang === 'en') {
      applyLanguage('en');
    } else {
      updateButtonsUI('es');
    }
  }
})();
