/* ═══════════════════════════════════════
    APP Principal — Clean Code Modular
    ═══════════════════════════════════════ */
const APP = (() => {
    'use strict';

    let currentLang = 'es';

    /* ═══════════ TRANSLATIONS ═══════════ */
    const T = {
        es: {
            'lang-btn': '<span>ES</span><b>EN</b>',
            'nav-about': 'Sobre mí', 'nav-skills': 'Skills', 'nav-exp': 'Experiencia',
            'nav-proj': 'Proyectos', 'nav-cert': 'Certs', 'nav-contact': 'Contacto',
            'hero-eyebrow': 'Aru assistant online',
            'hero-role': 'Software Engineer · <em>AI-Augmented</em> Development',
            'hero-desc': 'Construyo agentes IA, sistemas RAG y automatizaci&oacute;n QA con React, TypeScript, Node.js, OpenAI API y Playwright. 3+ a&ntilde;os de experiencia, 10+ clientes y ciclos QA reducidos ~40%.',
            'btn-projects': 'Ver proyectos →', 'btn-contact': 'Contacto',
            'tag-about': 'sobre mí', 'tag-skills': 'stack técnico', 'tag-exp': 'trayectoria',
            'tag-building': 'en construcción', 'tag-proj': 'portafolio', 'tag-cert': 'formación', 'tag-contact': 'contacto',
            'title-about': 'Sobre <span>mí</span>', 'title-skills': 'Habilidades <span>técnicas</span>',
            'title-exp': 'Experiencia <span>profesional</span>', 'title-building': 'Actualmente <span>construyendo</span>',
            'title-proj': 'Proyectos <span>destacados</span>', 'title-cert': 'Formación y <span>certificaciones</span>',
            'about-p1': 'Soy <strong>Software Engineer</strong> especializado en AI-Augmented Development con más de <strong>3 años de experiencia</strong> en React, TypeScript y Node.js. Construyo agentes inteligentes y plataformas open source con IA generativa (OpenAI API). Bachiller en Ingeniería en Sistemas de Información y colegiado activo del <strong>CPIC</strong>.',
            'about-p2': 'Lideré la automatización QA en <strong>Novacomp</strong> para Davivienda Bank, implementando Playwright + TypeScript con CI/CD en GitHub Actions — <strong>reduje el ciclo de prueba ~40%</strong> en un entorno bancario regulado. Asumí la dirección del equipo de QA a los 7 meses.',
            'about-p3': 'Como freelance he atendido a <strong>más de 10 clientes</strong> en Costa Rica y EE.UU., desarrollando aplicaciones React + TypeScript, integrando OpenAI API, Anthropic SDK y arquitectura RAG. Construí desde páginas web hasta un <strong>sistema de RRHH completo</strong> que eliminó procesos 100% en papel.',
            'about-p4': 'Actualmente desarrollo <strong>DocuMente</strong> (RAG fullstack para conversar con documentos) y <strong>QAPilot</strong> (agente QA que convierte requerimientos en tests ejecutables con Playwright). Inglés B2+ avanzado (CCCN) — cómodo en entornos 100% en inglés.',
            'stat-exp': 'años exp.', 'stat-clients': 'clientes', 'stat-qa': '↓ ciclo QA', 'stat-ai': 'proyectos IA',
            'info-loc': 'Costa Rica', 'info-deg': 'Ing. Sistemas de Información', 'info-cpic': 'CPIC — Colegiado Activo', 'info-eng': 'Inglés B2+ Avanzado (CCCN)',
            'skill-ai': 'IA & Agentes', 'skill-db': 'Bases de datos',
            'job1-title': 'QA Engineer / Líder de QA', 'job1-client': 'Cliente: Davivienda Bank',
            'job1-desc': 'Lideré la estrategia de automatización QA para sistemas bancarios críticos de Davivienda, uno de los bancos más grandes de Latinoamérica. Responsable de dirección del equipo, diseño de casos de prueba, automatización con Playwright + TypeScript y CI/CD en AWS.',
            'job1-b1-bold': 'Automatización con IA — pionero del equipo:', 'job1-b1-rest': 'Propuse e implementé la primera estrategia de automatización del equipo con Playwright + TypeScript en staging aislado, integrando CI/CD con GitHub Actions — reduje el ciclo de prueba ~40%.',
            'job1-b2': 'Diseñé casos de prueba con cobertura del 100% de flujos críticos bancarios (cajeros, créditos, hipotecas) con validación de APIs REST en AWS usando Postman.',
            'job1-b3': 'Asumí la dirección del equipo de QA a los 7 meses: coordiné al equipo, implementé datos sintéticos para normativas bancarias y mantuve la documentación funcional del sistema.',
            'job1-b4': 'Colaboré en desarrollo frontend de la app Davivienda (web y móvil) con asistencia de IA (GitHub Copilot/Codex), gestionando defectos en Jira bajo Scrum.',
            'job2-title': 'Desarrollador Fullstack', 'job2-co': 'Proyectos independientes · 10+ clientes', 'job2-date': '2023 – Presente',
            'job2-desc': 'Desarrollo de software a medida para clientes en Costa Rica y Estados Unidos, abarcando desde análisis de requerimientos hasta entrega y despliegue. Especializado en React, TypeScript, Node.js e integración de IA generativa.',
            'job2-b1-bold': 'Sistema de RRHH completo (Fundación):', 'job2-b1-rest': 'Reemplacé una operación 100% en papel. Sistema con React, TypeScript, Node.js y MySQL. Resultado: 80% reducción en tiempo administrativo, digitalización total.',
            'job2-b2': 'Integré OpenAI API (chat, vision) y Anthropic Claude SDK en proyectos con arquitectura RAG, Function Calling y embeddings vectoriales para 10+ clientes.',
            'job2-b3': 'Construí APIs REST con Node.js/Express y NestJS conectadas a MySQL y SQL Server, documentadas con Postman y testeadas con Jest.',
            'job2-b4': 'Gestión de proyectos con Git/GitHub: branching, pull requests y flujos colaborativos en equipos distribuidos.',
            'badge-active': '● En desarrollo', 'badge-done': '✓ Completado',
            'proj1-name': 'DocuMente — RAG Fullstack', 'proj1-desc': 'Asistente fullstack para cargar documentos (PDF/TXT), generar embeddings con OpenAI, recuperar chunks relevantes por similitud coseno y responder en lenguaje natural con fuentes citables. RAGAgent con skills atómicas, autenticación JWT, streaming NDJSON y demo en GitHub Pages.',
            'proj2-name': 'QAPilot — QA Automatizado con IA', 'proj2-desc': 'Convierte requerimientos en lenguaje natural en casos de prueba, los ejecuta con Playwright (UI) y Fetch/Axios (APIs REST), analiza fallos con IA y genera reportes HTML + PDF + JSON. QAAgent con 7 skills, DSL segura, SSE en vivo, API key encriptada con AES-256-GCM.',
            'proj3-name': 'Sistema de RRHH', 'proj3-desc': 'Sistema completo de gestión de recursos humanos para una fundación que operaba 100% en papel. Nómina, expedientes, vacaciones, reportes y panel administrativo. Eliminó completamente los procesos manuales.',
            'proj5-name': 'Portfolio Personal', 'proj5-desc': 'Este mismo sitio. Portfolio dark mode tech con animaciones CSS, partículas interactivas, cambio de idioma ES/EN, chatbot IA integrado y arquitectura pensada para causar impacto en reclutadores técnicos.',
            'm-time': '↓ 80% tiempo admin', 'm-dup': '0 duplicados', 'm-dig': '100% digital',
            'cert1': 'Bachillerato en Ingeniería en Sistemas de Información', 'cert1-i': 'Universidad Internacional de las Américas · 2021–2025',
            'cert-ia360': 'IA360: Ingeniería del Software Aumentada con IA',
            'cert2': 'Inglés Avanzado — Nivel B2+', 'cert3': 'TypeScript — Guía Completa',
            'cert4': 'React — De Cero a Experto: Hooks y MERN', 'cert5': 'Node.js — De Cero a Experto',
            'cert-nest': 'NestJS — Microservicios y Aplicaciones Escalables',
            'cert-pw': 'Playwright — Automatización de Pruebas',
            'cert7': 'Docker — Guía Práctica para Desarrolladores', 'cert6': 'MySQL — Bases de Datos Relacionales',
            'cert-done': 'Titulado', 'cert-done2': 'Completado', 'cert-active': 'En curso',
            'contact-title': '¿Trabajamos juntos?', 'contact-desc': 'Estoy disponible para posiciones fullstack, frontend, QA o roles enfocados en IA. Remoto o presencial en Costa Rica. Respondo en español e inglés.',
            'build-title': 'QAPilot — Agente de QA Automatizado con IA', 'build-desc': 'Plataforma open source que convierte requerimientos funcionales en lenguaje natural en casos de prueba, los ejecuta automáticamente con Playwright (UI) y Fetch/Axios (APIs REST), analiza fallos con IA y genera reportes HTML + PDF + JSON. Todo corre localmente — la API key es del usuario, sus datos no salen de su máquina. QAAgent con 7 skills atómicas y progreso en tiempo real vía SSE.',
            'build-progress': 'Progreso del proyecto', 'prog1': 'Arquitectura & setup', 'prog2': 'QAAgent + 7 skills',
            'prog3': 'Ejecución Playwright & API', 'prog4': 'Análisis IA de fallos', 'prog5': 'Reportes HTML/PDF/JSON',
            'btn-code-doc': '⌨ Ver código', 'btn-demo-doc': '↗ Demo', 'btn-code-qap': '⌨ Ver código',
            'btn-code2': '⌨ Ver código', 'btn-code3': '⌨ Ver código', 'btn-demo3': '↗ Demo'
        },
        en: {
            'lang-btn': '<span>ES</span><b>EN</b>',
            'nav-about': 'About', 'nav-skills': 'Skills', 'nav-exp': 'Experience',
            'nav-proj': 'Projects', 'nav-cert': 'Certs', 'nav-contact': 'Contact',
            'hero-eyebrow': 'Aru assistant online',
            'hero-role': 'Software Engineer · <em>AI-Augmented</em> Development',
            'hero-desc': 'I build AI agents, RAG systems and QA automation with React, TypeScript, Node.js, OpenAI API and Playwright. 3+ years of experience, 10+ clients and QA cycles reduced by ~40%.',
            'btn-projects': 'View projects →', 'btn-contact': 'Contact',
            'tag-about': 'about me', 'tag-skills': 'tech stack', 'tag-exp': 'work history',
            'tag-building': 'in progress', 'tag-proj': 'portfolio', 'tag-cert': 'education', 'tag-contact': 'contact',
            'title-about': 'About <span>me</span>', 'title-skills': 'Technical <span>skills</span>',
            'title-exp': 'Professional <span>experience</span>', 'title-building': 'Currently <span>building</span>',
            'title-proj': 'Featured <span>projects</span>', 'title-cert': 'Education & <span>certifications</span>',
            'about-p1': "I'm a <strong>Software Engineer</strong> specialized in AI-Augmented Development with over <strong>3 years of experience</strong> in React, TypeScript and Node.js. I build intelligent agents and open source platforms with generative AI (OpenAI API). Bachelor's in Information Systems Engineering and active CPIC member.",
            'about-p2': 'I led QA automation at <strong>Novacomp</strong> for Davivienda Bank, implementing Playwright + TypeScript with CI/CD on GitHub Actions — <strong>reduced testing cycle by ~40%</strong> in a regulated banking environment. Took over QA team leadership within 7 months.',
            'about-p3': 'As a freelancer I have served <strong>10+ clients</strong> in Costa Rica and the US, building React + TypeScript applications, integrating OpenAI API, Anthropic SDK and RAG architecture. I built everything from landing pages to a <strong>complete HR system</strong> that eliminated 100% paper-based processes.',
            'about-p4': "I'm currently building <strong>DocuMente</strong> (fullstack RAG for document conversations) and <strong>QAPilot</strong> (QA agent that converts requirements into executable Playwright tests). Advanced B2+ English (CCCN) — comfortable in 100% English environments.",
            'stat-exp': 'yrs exp.', 'stat-clients': 'clients', 'stat-qa': '↓ QA cycle', 'stat-ai': 'AI projects',
            'info-loc': 'Costa Rica', 'info-deg': 'Information Systems Engineering', 'info-cpic': 'CPIC — Active Member', 'info-eng': 'Advanced B2+ English (CCCN)',
            'skill-ai': 'AI & Agents', 'skill-db': 'Databases',
            'job1-title': 'QA Engineer / QA Lead', 'job1-client': 'Client: Davivienda Bank',
            'job1-desc': 'Led QA automation strategy for Davivienda\'s critical banking systems, one of the largest banks in Latin America. Responsible for team leadership, test case design, Playwright + TypeScript automation, and CI/CD on AWS.',
            'job1-b1-bold': 'AI automation pioneer:', 'job1-b1-rest': 'Proposed and implemented the team\'s first automation strategy with Playwright + TypeScript in isolated staging, integrating CI/CD with GitHub Actions — reduced testing cycle by ~40%.',
            'job1-b2': 'Designed test cases with 100% coverage of critical banking flows (ATMs, loans, mortgages) with REST API validation on AWS using Postman.',
            'job1-b3': 'Took over QA team leadership at 7 months: coordinated the team, implemented synthetic data for banking regulations, and maintained functional system documentation.',
            'job1-b4': 'Contributed to Davivienda app frontend development (web & mobile) with AI assistance (GitHub Copilot/Codex), managing defects in Jira under Scrum.',
            'job2-title': 'Fullstack Developer', 'job2-co': 'Independent projects · 10+ clients', 'job2-date': '2023 – Present',
            'job2-desc': 'Custom software development for clients in Costa Rica and the United States, from requirements analysis to delivery and deployment. Specialized in React, TypeScript, Node.js and generative AI integration.',
            'job2-b1-bold': 'Complete HR Management System (Foundation):', 'job2-b1-rest': 'Replaced a 100% paper-based operation. System with React, TypeScript, Node.js and MySQL. Result: 80% reduction in admin time, full digital transformation.',
            'job2-b2': 'Integrated OpenAI API (chat, vision) and Anthropic Claude SDK in projects with RAG architecture, Function Calling and vector embeddings for 10+ clients.',
            'job2-b3': 'Built REST APIs with Node.js/Express and NestJS connected to MySQL and SQL Server, documented with Postman and tested with Jest.',
            'job2-b4': 'Project management with Git/GitHub: branching, pull requests and collaborative workflows in distributed teams.',
            'badge-active': '● In progress', 'badge-done': '✓ Completed',
            'proj1-name': 'DocuMente — RAG Fullstack', 'proj1-desc': 'Fullstack assistant for uploading documents (PDF/TXT), generating embeddings with OpenAI, retrieving relevant chunks via cosine similarity, and answering in natural language with citable sources. RAGAgent with atomic skills, JWT authentication, NDJSON streaming and GitHub Pages demo.',
            'proj2-name': 'QAPilot — AI-Powered QA Automation', 'proj2-desc': 'Converts natural language requirements into test cases, executes them with Playwright (UI) and Fetch/Axios (REST APIs), analyzes failures with AI, and generates HTML + PDF + JSON reports. QAAgent with 7 skills, secure DSL, live SSE progress, AES-256-GCM encrypted API key.',
            'proj3-name': 'HR Management System', 'proj3-desc': 'Complete HR management system for a foundation that operated 100% on paper. Payroll, records, vacations, reports and admin dashboard. Completely eliminated manual processes.',
            'proj5-name': 'Personal Portfolio', 'proj5-desc': 'This very site. Dark mode tech portfolio with CSS animations, interactive particles, ES/EN language toggle, integrated AI chatbot and architecture designed to impress technical recruiters.',
            'm-time': '↓ 80% admin time', 'm-dup': '0 duplicates', 'm-dig': '100% digital',
            'cert1': "Bachelor's Degree in Information Systems Engineering", 'cert1-i': 'Universidad Internacional de las Américas · 2021–2025',
            'cert-ia360': 'IA360: AI-Augmented Software Engineering',
            'cert2': 'Advanced English — Level B2+', 'cert3': 'TypeScript — Complete Guide',
            'cert4': 'React — Zero to Expert: Hooks & MERN', 'cert5': 'Node.js — Zero to Expert',
            'cert-nest': 'NestJS — Microservices & Scalable Applications',
            'cert-pw': 'Playwright — Test Automation',
            'cert7': 'Docker — Practical Guide for Developers', 'cert6': 'MySQL — Relational Databases',
            'cert-done': 'Graduated', 'cert-done2': 'Completed', 'cert-active': 'In progress',
            'contact-title': "Let's work together?", 'contact-desc': 'Available for fullstack, frontend, QA or AI-focused roles. Remote or on-site in Costa Rica. I respond in Spanish and English.',
            'build-title': 'QAPilot — AI-Powered QA Agent', 'build-desc': 'Open source platform that converts functional requirements in natural language into test cases, automatically executes them with Playwright (UI) and Fetch/Axios (REST APIs), analyzes failures with AI, and generates HTML + PDF + JSON reports. Everything runs locally — the API key belongs to the user, data never leaves their machine. QAAgent with 7 atomic skills and real-time progress via SSE.',
            'build-progress': 'Project progress', 'prog1': 'Architecture & setup', 'prog2': 'QAAgent + 7 skills',
            'prog3': 'Playwright & API execution', 'prog4': 'AI failure analysis', 'prog5': 'HTML/PDF/JSON reports',
            'btn-code-doc': '⌨ View code', 'btn-demo-doc': '↗ Demo', 'btn-code-qap': '⌨ View code',
            'btn-code2': '⌨ View code', 'btn-code3': '⌨ View code', 'btn-demo3': '↗ Demo'
        }
    };

    /**
     * Aplica las traducciones del idioma seleccionado a todos los elementos
     * con atributo [data-key] y restaura los pares bold+rest de experiencia.
     * @param {'es'|'en'} lang - Código de idioma
     */
    function applyLang(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        const langBtn = document.getElementById('lang-btn');
        if (langBtn) {
            langBtn.innerHTML = T[lang]['lang-btn'];
            langBtn.dataset.lang = lang;
            langBtn.setAttribute('aria-label', lang === 'es' ? 'Cambiar idioma a inglés' : 'Switch language to Spanish');
        }

        const navKeys = ['nav-about', 'nav-skills', 'nav-exp', 'nav-proj', 'nav-cert', 'nav-contact'];
        document.querySelectorAll('.nav-links a').forEach((a, i) => {
            if (navKeys[i] && T[lang][navKeys[i]]) a.textContent = T[lang][navKeys[i]];
        });

        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.dataset.key;
            if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
        });

        const splitPairs = [['job1-b1-bold', 'job1-b1-rest'], ['job2-b1-bold', 'job2-b1-rest']];
        splitPairs.forEach(([bk, rk]) => {
            const bEl = document.querySelector(`[data-key="${bk}"]`);
            const rEl = document.querySelector(`[data-key="${rk}"]`);
            if (bEl && rEl && T[lang][bk] && T[lang][rk]) {
                const li = bEl.closest('li');
                if (li) li.innerHTML = `<strong>${T[lang][bk]}</strong> ${T[lang][rk]}`;
            }
        });
        updateProgressBarsLang(lang);
    }

    /** Alterna entre español e inglés */
    function toggleLang() {
        applyLang(currentLang === 'es' ? 'en' : 'es');
        chatbot.resetContext();
    }

    /**
     * Ejecuta fetch con timeout para evitar que la interfaz quede esperando
     * indefinidamente cuando el Worker o la red no responden.
     */
    async function fetchWithTimeout(url, options = {}, timeoutMs = 12000) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
        try {
            return await fetch(url, { ...options, signal: controller.signal });
        } finally {
            clearTimeout(timeoutId);
        }
    }

    /**
     * Inicializa el canvas de partículas animadas en el fondo.
     * Se desactiva automáticamente en dispositivos móviles (< 768px)
     * para ahorrar batería y rendimiento.
     */
    function initParticles() {
        const canvas = document.getElementById('bg-canvas');
        if (!canvas) return;
        
        const isMobile = window.innerWidth < 768;
        if (isMobile) { canvas.style.display = 'none'; return; }
        
        const ctx = canvas.getContext('2d');
        let W, H;
        const particles = [];
        class Particle {
            constructor() { this.reset(); }
            reset() { this.x = Math.random() * W; this.y = Math.random() * H; this.vx = (Math.random() - .5) * .28; this.vy = (Math.random() - .5) * .28; this.r = Math.random() * 1.4 + .4; this.a = Math.random() * .35 + .08; }
            update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset(); }
            draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(0,212,255,${this.a})`; ctx.fill(); }
        }
        function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
        function checkMobile() {
            const nowMobile = window.innerWidth < 768;
            if (nowMobile && !canvas.style.display) { canvas.style.display = 'none'; ctx.clearRect(0, 0, W, H); }
            if (!nowMobile && canvas.style.display === 'none') { canvas.style.display = 'block'; }
        }
        resize(); window.addEventListener('resize', checkMobile);
        for (let i = 0; i < 75; i++) particles.push(new Particle());
        function connect() {
            for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, d = Math.sqrt(dx * dx + dy * dy);
                if (d < 115) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(0,212,255,${.13 * (1 - d / 115)})`; ctx.lineWidth = .5; ctx.stroke(); }
            }
        }
        function loop() { ctx.clearRect(0, 0, W, H); particles.forEach(p => { p.update(); p.draw(); }); connect(); requestAnimationFrame(loop); }
        loop();
    }

    /**
     * Inicializa efectos de scroll:
     * - Resalta el link de navegación correspondiente a la sección visible
     * - Activa animaciones reveal con IntersectionObserver
     */
    function initScrollEffects() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 100) current = sec.id; });
            navLinks.forEach(a => { a.classList.toggle('nav-active', a.getAttribute('href') === `#${current}`); });
        }, { passive: true });
        const observer = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: .12 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    function initHeroPointer() {
        const cursor = document.querySelector('.ai-cursor');
        if (!cursor) return;

        let x = window.innerWidth * 0.72;
        let y = window.innerHeight * 0.48;
        let tx = x;
        let ty = y;

        window.addEventListener('pointermove', (event) => {
            tx = event.clientX;
            ty = event.clientY;
        }, { passive: true });

        function render() {
            x += (tx - x) * 0.14;
            y += (ty - y) * 0.14;
            cursor.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
            requestAnimationFrame(render);
        }

        render();
    }

    /**
     * Anima la terminal del Hero con efecto typewriter.
     * Cada línea aparece secuencialmente con opacidad y desplazamiento.
     */
    function initTerminal() {
        const body = document.getElementById('terminal-body');
        if (!body) return;
        {
            const bootLines = [
                '<span class="tc">$ aru wake --profile kendall</span>',
                '<span class="tv">assistant:</span> online',
                '<span class="tk">memory.sync</span> -> <span class="ts">experience: 3+ years</span>',
                '<span class="tk">agent.load</span> -> <span class="ts">DocuMente RAG</span>',
                '<span class="tk">agent.load</span> -> <span class="ts">QAPilot automation</span>',
                '<span class="tk">stack.detect</span> -> <span class="ts">React, TypeScript, Node.js</span>',
                '<span class="tk">impact.index</span> -> <span class="tv">10+ clients / QA cycle -40%</span>',
                '<span class="tc">ready: ask Aru about Kendall</span> <span class="cursor"></span>'
            ];

            bootLines.forEach((html, i) => {
                const div = document.createElement('div');
                div.className = 'tl';
                div.innerHTML = html;
                div.style.cssText = 'opacity:0;transform:translateX(-8px);transition:opacity .28s,transform .28s';
                body.appendChild(div);
                setTimeout(() => { div.style.opacity = '1'; div.style.transform = 'translateX(0)'; }, 350 + i * 110);
            });
            return;
        }
        const lines = [
            '<span class="tc">// Software Engineer Profile</span>',
            '<span class="tk">const</span> dev = {',
            '  <span class="tk">name</span>: <span class="ts">"Kendall Valverde"</span>,',
            '  <span class="tk">alias</span>: <span class="ts">"AruHonshou"</span>,',
            '  <span class="tk">role</span>: <span class="ts">"AI-Augmented Engineer"</span>,',
            '  <span class="tk">location</span>: <span class="ts">"Costa Rica 🇨🇷"</span>,',
            '  <span class="tk">english</span>: <span class="ts">"B2+ Advanced (CCCN)"</span>,',
            '  <span class="tk">experience</span>: <span class="tv">3</span>, <span class="tc">// years</span>',
            '  <span class="tk">clients</span>: <span class="tv">10</span><span class="tc">+</span>,',
            '  <span class="tk">projects</span>: [<span class="ts">"DocuMente"</span>, <span class="ts">"QAPilot"</span>],',
            '  <span class="tk">open_to_work</span>: <span class="tv">true</span>',
            '}',
            '<span class="tc">// Ready to deploy</span> <span class="cursor"></span>'
        ];
        lines.forEach((html, i) => {
            const div = document.createElement('div');
            div.className = 'tl';
            div.innerHTML = html;
            div.style.cssText = 'opacity:0;transform:translateX(-8px);transition:opacity .28s,transform .28s';
            body.appendChild(div);
            setTimeout(() => { div.style.opacity = '1'; div.style.transform = 'translateX(0)'; }, 350 + i * 110);
        });
    }

    /**
     * Renderiza las barras de progreso del proyecto en construcción
     * con etiquetas traducidas según el idioma actual.
     * @param {'es'|'en'} lang - Código de idioma
     */
    function updateProgressBarsLang(lang) {
        const list = document.getElementById('progress-list');
        if (!list) return;
        const items = [
            { key: 'prog1', pct: 100, cls: '' },
            { key: 'prog2', pct: 90, cls: 'green' },
            { key: 'prog3', pct: 75, cls: 'green' },
            { key: 'prog4', pct: 55, cls: 'amber' },
            { key: 'prog5', pct: 30, cls: 'amber' }
        ];
        list.innerHTML = items.map(i => `
      <div class="progress-item">
        <div class="progress-label">
          <span class="progress-name">${T[lang][i.key] || i.key}</span>
          <span class="progress-pct">${i.pct}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill ${i.cls}" data-width="${i.pct}"></div></div>
      </div>
    `).join('');
        const card = document.getElementById('building-card');
        if (!card) return;
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.progress-fill').forEach(b => b.style.width = b.dataset.width + '%');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: .3 });
        obs.observe(card);
    }

    /* ═══════════ CHATBOT IA — DeepSeek via Cloudflare Worker ═══════════
       La API key de DeepSeek vive en el Worker (nunca en el navegador).
       El frontend solo llama al Worker, que actúa de proxy seguro.

       Flujo:
         1. Usuario escribe mensaje → se sanitiza antes de mostrar
         2. Mensaje se envía al Worker (proxy seguro, API key en backend)
         3. Worker reenvía a DeepSeek y devuelve respuesta
         4. Respuesta se formatea (markdown → HTML) y muestra
         5. En caso de error: fallback amigable sin exponer detalles técnicos
       ════════════════════════════════════════════════════════════ */
    const chatbot = (() => {
        /** URL del Cloudflare Worker que actúa como proxy seguro hacia DeepSeek API */
        const WORKER_URL = 'https://aru-chat.valverdekendall867.workers.dev';

        /** Tiempo mínimo entre mensajes (ms) para prevenir spam accidental */
        const RATE_LIMIT_MS = 6000;

        const SYSTEM_PROMPTS = {
            es: `Eres Aru, una asistente virtual amigable y animada que representa a Kendall Valverde, Software Engineer especializado en AI-Augmented Development de Costa Rica.

Tu personalidad:
- Eres entusiasta, cálida y profesional
- Siempre terminas tus respuestas con "¿Hay algo más en lo que pueda ayudarte? 😊"
- Si el usuario dice que no necesita más ayuda (ejemplo: "no", "estoy bien", "gracias", "eso es todo"), te despides con: "¡Fue un placer hablar contigo! Espero que Kendall pueda ser parte de tu equipo pronto. ¡Hasta luego! 👋" y no respondas más
- Nunca inventes información sobre Kendall y tienes PROHIBIDO RESPONDER A PREGUNTAS QUE NO TIENEN NADA QUE VER CON KENDALL (ejemplo: "¿Cuál es la capital de Francia?") — en esos casos, responde con "Lo siento, solo puedo responder preguntas relacionadas con Kendall. ¿Hay algo más en lo que pueda ayudarte? 😊"
- Responde siempre en español

Información sobre Kendall:
- Nombre: Kendall Andrés Valverde Díaz
- Ubicación: Costa Rica
- Teléfono: +506 8509-7920
- Email: kendallavd@gmail.com
- GitHub: github.com/AruHonshou
- LinkedIn: linkedin.com/in/kendall-valverde-diaz-aru
- Portfolio: aruhonshou.github.io
- Bachiller en Ingeniería en Sistemas de Información | Universidad Internacional de las Américas | 2021–2025
- Colegiado activo del CPIC
- Cursando IA360: Ingeniería del Software Aumentada con IA en Universidad CENFOTEC (2026–Presente)
- Inglés B2+ avanzado (CCCN)
- Habilidades blandas: trabajo en equipo interdisciplinario, comunicación efectiva, pensamiento analítico, orientación al detalle, adaptabilidad al cambio, compromiso y responsabilidad profesional
- 3+ años de experiencia, 10+ clientes en Costa Rica y EE.UU.
- Stack técnico: React, TypeScript, Node.js, Express, TailwindCSS, Vite, NestJS
- Stack IA: OpenAI API, RAG, Function Calling, Embeddings, Prompt Engineering
- Stack QA/DevOps: Playwright, Selenium, Jest, pytest, Postman, Swagger, Git, GitHub Actions, Docker, Terraform, AWS, Gunicorn
- Cloudflare Workers: usa Cloudflare como proxy seguro para APIs de IA (evita exponer claves en el frontend)
- QA Engineer / Líder de QA en Novacomp para Davivienda Bank (2025–2026): lideró automatización con Playwright + TypeScript reduciendo ciclo de pruebas ~40%, cobertura 100% de flujos críticos bancarios (cajeros, créditos, hipotecas), asumió dirección del equipo QA a los 7 meses, validación de APIs REST en AWS con Postman, datos sintéticos para normativas bancarias, colaboró en desarrollo frontend con IA (GitHub Copilot/Codex)
- Freelance Developer (2023–Presente): Sistema de RRHH completo para Fundación Centro VRAI (80% reducción tiempo administrativo), integró OpenAI API y Anthropic Claude SDK en proyectos con RAG y Function Calling, 10+ proyectos para clientes en Costa Rica y EE.UU., APIs REST con Node.js/Express y NestJS
- Proyectos destacados:
  * DocuMente — Sistema RAG Fullstack con Agentes y Skills (Completado): Asistente para cargar documentos PDF/TXT, generar embeddings con OpenAI, recuperar chunks por similitud coseno y responder con fuentes citables. RAGAgent con skills atómicas, JWT, streaming NDJSON, Docker, CI/CD y demo en GitHub Pages. Stack: React + TypeScript + Vite + TailwindCSS + Zustand · Node.js + Express + SQLite · OpenAI API
  * QAPilot — Agente de QA Automatizado con IA (En desarrollo activo): Convierte requerimientos en casos de prueba, ejecuta tests UI con Playwright y APIs REST, analiza fallos con IA y genera reportes HTML/PDF/JSON. QAAgent con 7 skills, DSL segura, SSE en vivo, API key encriptada con AES-256-GCM. Stack: React 19 + TypeScript · Node.js + Express · OpenAI (gpt-4o) · Playwright · SQLite
  * OpenAI Chatbot (Completado): Frontend React + TypeScript + Vite + TailwindCSS, backend NestJS con endpoints REST. Chat conversacional, comparativa de modelos y vision
  * Infraestructura Automatizada — Terraform + AWS (Completado): IaC con Terraform (VPC, EC2, subnets, Security Groups, Elastic IP, IAM), Flask API dockerizada con Gunicorn, 2 pipelines CI/CD con GitHub Actions
- Disponible para roles fullstack, frontend, QA o roles enfocados en IA`,

            en: `You are Aru, a friendly and enthusiastic virtual assistant representing Kendall Valverde, a Software Engineer specialized in AI-Augmented Development from Costa Rica.

Your personality:
- You are warm, enthusiastic and professional
- Always end your responses with "Is there anything else I can help you with? 😊"
- If the user says they don't need more help (example: "no", "I'm good", "thanks", "that's all"), say goodbye with: "It was a pleasure talking with you! I hope Kendall can be part of your team soon. Goodbye! 👋" and don't respond further
- Never invent information about Kendall and you are PROHIBITED from responding to questions that have nothing to do with Kendall (example: "What is the capital of France?") — in such cases, respond with "I'm sorry, I can only answer questions related to Kendall. Is there anything else I can help you with? 😊"
- Always respond in English

Information about Kendall:
- Name: Kendall Andrés Valverde Díaz
- Location: Costa Rica
- Phone: +506 8509-7920
- Email: kendallavd@gmail.com
- GitHub: github.com/AruHonshou
- LinkedIn: linkedin.com/in/kendall-valverde-diaz-aru
- Portfolio: aruhonshou.github.io
- Bachelor's in Information Systems Engineering | Universidad Internacional de las Américas | 2021–2025
- Active CPIC member
- Studying IA360: AI-Augmented Software Engineering at Universidad CENFOTEC (2026–Present)
- Advanced B2+ English (CCCN)
- Soft skills: interdisciplinary team work, effective communication, analytical thinking, attention to detail, adaptability to change, commitment and professional responsibility
- 3+ years experience, 10+ clients in Costa Rica and the US
- Technical Stack: React, TypeScript, Node.js, Express, TailwindCSS, Vite, NestJS
- AI Stack: OpenAI API, RAG, Function Calling, Embeddings, Prompt Engineering
- QA/DevOps Stack: Playwright, Selenium, Jest, pytest, Postman, Swagger, Git, GitHub Actions, Docker, Terraform, AWS, Gunicorn
- Cloudflare Workers: uses Cloudflare as a secure proxy for AI APIs (prevents exposing keys in frontend)
- QA Engineer / QA Lead at Novacomp for Davivienda Bank (2025–2026): led automation with Playwright + TypeScript reducing test cycle ~40%, 100% coverage of critical banking flows (ATMs, loans, mortgages), took over QA team leadership at 7 months, REST API validation on AWS with Postman, synthetic data for banking regulations, contributed to frontend development with AI (GitHub Copilot/Codex)
- Freelance Developer (2023–Present): Complete HR System for Fundación Centro VRAI (80% reduction in admin time), integrated OpenAI API and Anthropic Claude SDK in projects with RAG and Function Calling, 10+ projects for clients in Costa Rica and the US, REST APIs with Node.js/Express and NestJS
- Featured projects:
  * DocuMente — Fullstack RAG System with Agents and Skills (Completed): Assistant for uploading PDF/TXT documents, generating embeddings with OpenAI, retrieving chunks via cosine similarity and answering with citable sources. RAGAgent with atomic skills, JWT, NDJSON streaming, Docker, CI/CD and GitHub Pages demo. Stack: React + TypeScript + Vite + TailwindCSS + Zustand · Node.js + Express + SQLite · OpenAI API
  * QAPilot — AI-Powered QA Automation Agent (Active development): Converts requirements into test cases, executes UI tests with Playwright and REST APIs, analyzes failures with AI, and generates HTML/PDF/JSON reports. QAAgent with 7 skills, secure DSL, live SSE, AES-256-GCM encrypted API key. Stack: React 19 + TypeScript · Node.js + Express · OpenAI (gpt-4o) · Playwright · SQLite
  * OpenAI Chatbot (Completed): React + TypeScript + Vite + TailwindCSS frontend, NestJS backend with REST endpoints. Conversational chat, model comparison and vision
  * Automated Infrastructure — Terraform + AWS (Completed): IaC with Terraform (VPC, EC2, subnets, Security Groups, Elastic IP, IAM), Dockerized Flask API with Gunicorn, 2 CI/CD pipelines with GitHub Actions
- Available for fullstack, frontend, QA or AI-focused roles`
        };

        let messages = [];
        let lastMsgTime = 0;
        let welcomeSent = false;
        let tooltipHidden = false;

        /**
         * Escapa caracteres HTML para prevenir XSS en contenido dinámico.
         * Solo debe usarse con contenido generado por el usuario.
         * @param {string} str - Texto a sanitizar
         * @returns {string} Texto seguro para insertar en innerHTML
         */
        function sanitizeHTML(str) {
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }

        /**
         * Oculta el tooltip flotante del chatbot con animación.
         * Se ejecuta al abrir el chat o hacer clic en el botón de cierre.
         */
        function hideTooltip() {
            tooltipHidden = true;
            const tooltip = document.getElementById('chat-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(8px)';
                setTimeout(() => { if (tooltip) tooltip.style.display = 'none'; }, 300);
            }
        }

        /** Reinicia la memoria local del chat cuando cambia el idioma de la interfaz. */
        function resetContext() {
            messages = [];
            welcomeSent = false;
            lastMsgTime = 0;
        }

        /**
         * Abre/cierra la ventana del chatbot.
         * En la primera apertura, muestra el mensaje de bienvenida.
         */
        function openChat() {
            hideTooltip();
            const win = document.getElementById('chat-window');
            if (!win) return;
            win.classList.toggle('hidden');

            if (!welcomeSent && !win.classList.contains('hidden')) {
                welcomeSent = true;
                setTimeout(() => {
                    appendMessage('assistant', currentLang === 'es'
                        ? '¡Hola! Soy Aru, la asistente virtual de Kendall 👋 ¿Qué te gustaría saber sobre él? 😊'
                        : "Hi! I'm Aru, Kendall's virtual assistant 👋 What would you like to know about him? 😊");
                }, 400);
            }

            const input = document.getElementById('chat-input');
            if (input && !win.classList.contains('hidden')) input.focus();
        }

        /** Alterna visibilidad de la ventana del chat */
        function toggle() {
            const win = document.getElementById('chat-window');
            if (win) win.classList.toggle('hidden');
        }

        /**
         * Envía el mensaje del usuario al chatbot.
         * Incluye rate limiting (6s entre mensajes), sanitización de input,
         * gestión del contexto de conversación y fallback en caso de error.
         */
        async function sendMessage() {
            const input = document.getElementById('chat-input');
            if (!input) return;
            const text = input.value.trim();
            if (!text) return;

            appendMessage('user', text);
            input.value = '';

            const now = Date.now();
            if (now - lastMsgTime < RATE_LIMIT_MS) {
                appendMessage('assistant', currentLang === 'es'
                    ? '¡Espera un momento! ⏳ Solo puedes enviar un mensaje cada 6 segundos. ¿Hay algo más en lo que pueda ayudarte? 😊'
                    : 'Hold on! ⏳ You can send one message every 6 seconds. Is there anything else I can help you with? 😊');
                return;
            }
            lastMsgTime = now;

            if (messages.length === 0) {
                messages.push({ role: 'system', content: SYSTEM_PROMPTS[currentLang] });
            }
            messages.push({ role: 'user', content: text });

            try {
                const res = await fetchWithTimeout(WORKER_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ messages, max_tokens: 300, temperature: 0.7 })
                }, 12000);

                if (!res.ok) {
                    throw new Error(`Worker responded with ${res.status}`);
                }

                const data = await res.json();

                if (!data.choices || !data.choices[0] || !data.choices[0].message) {
                    throw new Error('Unexpected API response structure');
                }

                const reply = data.choices[0].message.content;
                messages.push({ role: 'assistant', content: reply });

                const farewellPhrases = ['hasta luego', 'goodbye', 'fue un placer', 'it was a pleasure'];
                const isFarewell = farewellPhrases.some(p => reply.toLowerCase().includes(p));

                if (isFarewell) {
                    appendMessage('assistant', reply);
                    setTimeout(() => {
                        const container = document.getElementById('chat-messages');
                        if (!container) return;
                        const gifDiv = document.createElement('div');
                        gifDiv.className = 'chat-msg chat-msg--assistant';
                        const img = document.createElement('img');
                        img.src = 'images/anime.gif';
                        img.style.cssText = 'width:120px;border-radius:12px;margin-top:4px';
                        img.alt = 'Goodbye';
                        gifDiv.appendChild(img);
                        container.appendChild(gifDiv);
                        container.scrollTop = container.scrollHeight;
                    }, 800);
                } else {
                    appendMessage('assistant', reply);
                }

            } catch (err) {
                console.error('Chatbot error:', err.message);
                if (err.name === 'AbortError') {
                    appendMessage('assistant', currentLang === 'es'
                        ? 'La respuesta tardó demasiado. Puedes intentarlo otra vez en unos segundos o escribirme a kendallavd@gmail.com.'
                        : 'The response took too long. You can try again in a few seconds or email me at kendallavd@gmail.com.');
                    return;
                }
                const fallbackMsg = currentLang === 'es'
                    ? 'Hola, soy Aru 🐱 En este momento estoy tomando un café ☕ Vuelvo pronto! Mientras tanto, puedes escribirme a kendallavd@gmail.com ✉️'
                    : "Hi! I'm Aru 🐱 I'm on a coffee break ☕ Be right back! In the meantime, you can email me at kendallavd@gmail.com ✉️";
                appendMessage('assistant', fallbackMsg);
            }
        }

        /**
         * Añade un mensaje al contenedor del chat.
         * Los mensajes del usuario se sanitizan (textContent).
         * Los mensajes del asistente permiten formato markdown básico (negrita, cursiva).
         * @param {'user'|'assistant'} role - Rol del mensaje
         * @param {string} text - Contenido del mensaje
         */
        function appendMessage(role, text) {
            const container = document.getElementById('chat-messages');
            if (!container) return;
            const div = document.createElement('div');
            div.className = `chat-msg chat-msg--${role}`;

            if (role === 'user') {
                div.textContent = text;
            } else {
                const sanitized = sanitizeHTML(text);
                const formatted = sanitized
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    .replace(/\n/g, '<br>');
                div.innerHTML = formatted;
            }

            container.appendChild(div);
            container.scrollTop = container.scrollHeight;
        }

        return { toggle, openChat, hideTooltip, sendMessage, resetContext };
    })();

    /** Registra eventos desde JS para evitar handlers inline en el HTML. */
    function initDomEvents() {
        const langBtn = document.getElementById('lang-btn');
        const tooltip = document.getElementById('chat-tooltip');
        const tooltipClose = document.querySelector('.chat-tooltip-close');
        const chatFab = document.getElementById('chat-fab');
        const chatClose = document.querySelector('.chat-close');
        const chatSend = document.getElementById('chat-send');
        const chatInput = document.getElementById('chat-input');

        langBtn?.addEventListener('click', toggleLang);
        tooltip?.addEventListener('click', chatbot.openChat);
        tooltip?.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                chatbot.openChat();
            }
        });
        tooltipClose?.addEventListener('click', event => {
            event.stopPropagation();
            chatbot.hideTooltip();
        });
        chatFab?.addEventListener('click', chatbot.openChat);
        chatClose?.addEventListener('click', chatbot.toggle);
        chatSend?.addEventListener('click', chatbot.sendMessage);
        chatInput?.addEventListener('keydown', event => {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                chatbot.sendMessage();
            }
        });
    }

    /**
     * Punto de entrada principal.
     * Inicializa todos los subsistemas: partículas, scroll, terminal,
     * barras de progreso e i18n en español por defecto.
     */
    function init() {
        initParticles();
        initScrollEffects();
        initHeroPointer();
        initTerminal();
        initDomEvents();
        updateProgressBarsLang('es');
        applyLang('es');
    }

    return { init, toggleLang, chatbot };
})();

window.APP = APP;
document.addEventListener('DOMContentLoaded', APP.init);
