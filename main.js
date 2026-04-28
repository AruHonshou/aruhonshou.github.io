/* ═══════════════════════════════════════
   APP Principal — Clean Code Modular
   ═══════════════════════════════════════ */
const APP = (() => {
    'use strict';

    let currentLang = 'es';

    /* ═══════════ TRANSLATIONS ═══════════ */
    const T = {
        es: {
            'lang-btn': '🌐 EN',
            'nav-about': 'Sobre mí', 'nav-skills': 'Skills', 'nav-exp': 'Experiencia',
            'nav-proj': 'Proyectos', 'nav-cert': 'Certs', 'nav-contact': 'Contacto',
            'hero-eyebrow': 'Disponible para nuevas oportunidades',
            'hero-role': 'Fullstack Developer <em>&amp;</em> QA Engineer',
            'hero-desc': 'Bachiller en Ingeniería en Sistemas de Información · Colegiado CPIC · 3+ años construyendo software real para clientes reales. Especializado en React, TypeScript, Node.js e integración de IA generativa con Claude API, RAG y Function Calling.',
            'btn-projects': 'Ver proyectos →', 'btn-contact': 'Contacto',
            'tag-about': 'sobre mí', 'tag-skills': 'stack técnico', 'tag-exp': 'trayectoria',
            'tag-building': 'en construcción', 'tag-proj': 'portafolio', 'tag-cert': 'formación', 'tag-contact': 'contacto',
            'title-about': 'Sobre <span>mí</span>', 'title-skills': 'Habilidades <span>técnicas</span>',
            'title-exp': 'Experiencia <span>profesional</span>', 'title-building': 'Actualmente <span>construyendo</span>',
            'title-proj': 'Proyectos <span>destacados</span>', 'title-cert': 'Formación y <span>certificaciones</span>',
            'about-p1': 'Soy desarrollador fullstack y QA engineer costarricense con más de <strong>3 años de experiencia</strong> construyendo aplicaciones reales. Me gradué en Ingeniería en Sistemas de Información y soy colegiado activo del <strong>CPIC</strong>.',
            'about-p2': 'Trabajé en <strong>Novacomp</strong> como QA Engineer para el banco Davivienda, donde fui el primero en proponer e implementar una <strong>estrategia de automatización con IA</strong> en un entorno bancario regulado, reduciendo el ciclo de prueba en ~40%.',
            'about-p3': 'Como freelance he atendido a <strong>más de 23 clientes</strong> en Costa Rica y Estados Unidos, desde páginas personales hasta sistemas empresariales completos. Actualmente construyo un <strong>agente de IA</strong> con Claude API, RAG y Function Calling.',
            'about-p4': 'Me apasiona la intersección entre <strong>desarrollo, calidad y tecnología de IA</strong>. Inglés avanzado (CCCN) — cómodo en entornos de trabajo totalmente en inglés.',
            'stat-exp': 'años exp.', 'stat-clients': 'clientes', 'stat-qa': '↓ ciclo QA', 'stat-eng': 'inglés',
            'info-loc': 'Costa Rica', 'info-deg': 'Ing. Sistemas de Información', 'info-cpic': 'CPIC — Colegiado Activo', 'info-eng': 'Inglés Avanzado (CCCN)',
            'skill-ai': 'IA & Agentes', 'skill-db': 'Bases de datos',
            'job1-title': 'QA Engineer', 'job1-client': 'Cliente: Davivienda Bank',
            'job1-desc': 'Pruebas de software en sistemas bancarios críticos de uno de los bancos más grandes de Latinoamérica...',
            'job1-b1-bold': 'Pionero en automatización con IA:', 'job1-b1-rest': 'Propuse e implementé la primera estrategia de pruebas automatizadas...',
            'job1-b2': 'Diseñé casos de prueba con cobertura del 100% de flujos críticos bancarios...',
            'job1-b3': 'Implementé datos sintéticos y control de auditoría...', 'job1-b4': 'Contribuí en desarrollo Java con asistencia de IA...',
            'job2-title': 'Desarrollador Freelance', 'job2-co': 'Proyectos independientes · 23+ clientes', 'job2-date': '2021 – Presente',
            'job2-desc': 'Desarrollo de software a medida para clientes en Costa Rica y Estados Unidos...',
            'job2-b1-bold': 'Sistema de RRHH completo (Fundación):', 'job2-b1-rest': 'Reemplacé una operación 100% en papel...',
            'job2-b2': '23+ clientes en Costa Rica y EE.UU...', 'job2-b3': 'Comunicación directa en inglés...',
            'badge-active': '● En desarrollo', 'badge-done': '✓ Completado', 'badge-active2': '● En desarrollo', 'badge-free': '★ Freelance',
            'proj1-name': 'AI Agent — Claude API', 'proj1-desc': 'Agente de inteligencia artificial construido desde cero...',
            'proj2-name': 'Sistema de RRHH', 'proj2-desc': 'Sistema completo de gestión de recursos humanos...',
            'proj3-name': 'Portfolio Personal', 'proj3-desc': 'Este mismo sitio. Portfolio dark mode tech...',
            'proj4-name': '23+ Proyectos Web', 'proj4-desc': 'Desarrollo de sitios web y aplicaciones para más de 23 clientes...',
            'm-time': '↓ 80% tiempo admin', 'm-dup': '0 duplicados', 'm-dig': '100% digital',
            'cert1': 'Bachillerato en Ingeniería en Sistemas de Información', 'cert1-i': 'Universidad · Costa Rica · 2019–2023',
            'cert2': 'Inglés Avanzado', 'cert3': 'TypeScript — Curso Completo', 'cert4': 'React — Aplicaciones Modernas',
            'cert5': 'Node.js — APIs & Backend', 'cert6': 'MySQL — Bases de Datos Relacionales', 'cert7': 'Docker — Contenedores y Despliegue',
            'cert8': 'AI Agent · Claude API + RAG + Function Calling', 'cert8-i': 'Proyecto activo · Node.js + Anthropic SDK',
            'cert9': 'Certificaciones adicionales', 'cert-done': 'Titulado', 'cert-done2': 'Completado', 'cert-active': 'Activo', 'cert-prog': 'En curso',
            'contact-title': '¿Trabajamos juntos?', 'contact-desc': 'Estoy disponible para posiciones fullstack, frontend, QA o roles enfocados en IA...',
            'build-title': 'Agente de IA — Claude API', 'build-desc': 'Agente conversacional con arquitectura RAG...',
            'build-progress': 'Progreso del proyecto', 'prog1': 'Arquitectura & setup', 'prog2': 'Pipeline RAG',
            'prog3': 'Function Calling', 'prog4': 'Memoria contextual', 'prog5': 'Interfaz & demo',
            'btn-code': '⌨ Ver código', 'btn-code2': '⌨ Ver código', 'btn-code3': '⌨ Ver código', 'btn-demo3': '↗ Demo'
        },
        en: {
            'lang-btn': '🌐 ES',
            'nav-about': 'About', 'nav-skills': 'Skills', 'nav-exp': 'Experience',
            'nav-proj': 'Projects', 'nav-cert': 'Certs', 'nav-contact': 'Contact',
            'hero-eyebrow': 'Available for new opportunities',
            'hero-role': 'Fullstack Developer <em>&amp;</em> QA Engineer',
            'hero-desc': "Bachelor's in Information Systems Engineering · CPIC member · 3+ years building real software for real clients...",
            'btn-projects': 'View projects →', 'btn-contact': 'Contact',
            'tag-about': 'about me', 'tag-skills': 'tech stack', 'tag-exp': 'work history',
            'tag-building': 'in progress', 'tag-proj': 'portfolio', 'tag-cert': 'education', 'tag-contact': 'contact',
            'title-about': 'About <span>me</span>', 'title-skills': 'Technical <span>skills</span>',
            'title-exp': 'Professional <span>experience</span>', 'title-building': 'Currently <span>building</span>',
            'title-proj': 'Featured <span>projects</span>', 'title-cert': 'Education & <span>certifications</span>',
            'about-p1': "I'm a Costa Rican fullstack developer and QA engineer with over <strong>3 years of experience</strong>...",
            'about-p2': 'I worked at <strong>Novacomp</strong> as a QA Engineer for Davivienda Bank...',
            'about-p3': 'As a freelancer I have served <strong>23+ clients</strong>...',
            'about-p4': "I'm passionate about the intersection of <strong>development, quality and AI technology</strong>...",
            'stat-exp': 'yrs exp.', 'stat-clients': 'clients', 'stat-qa': '↓ QA cycle', 'stat-eng': 'English',
            'info-loc': 'Costa Rica', 'info-deg': 'Information Systems Engineering', 'info-cpic': 'CPIC — Active Member', 'info-eng': 'Advanced English (CCCN)',
            'skill-ai': 'AI & Agents', 'skill-db': 'Databases',
            'job1-title': 'QA Engineer', 'job1-client': 'Client: Davivienda Bank',
            'job1-desc': 'Software testing on critical banking systems...',
            'job1-b1-bold': 'AI automation pioneer:', 'job1-b1-rest': 'Proposed and implemented the team\'s first automated testing strategy...',
            'job1-b2': 'Designed test cases with 100% coverage...', 'job1-b3': 'Implemented synthetic data...', 'job1-b4': 'Contributed to Java banking application...',
            'job2-title': 'Freelance Developer', 'job2-co': 'Independent projects · 23+ clients', 'job2-date': '2021 – Present',
            'job2-desc': 'Custom software development for clients...',
            'job2-b1-bold': 'Full HR Management System (Foundation):', 'job2-b1-rest': 'Replaced a 100% paper-based operation...',
            'job2-b2': '23+ clients in Costa Rica and the US...', 'job2-b3': 'Direct English communication...',
            'badge-active': '● In progress', 'badge-done': '✓ Completed', 'badge-active2': '● In progress', 'badge-free': '★ Freelance',
            'proj1-name': 'AI Agent — Claude API', 'proj1-desc': 'Artificial intelligence agent built from scratch...',
            'proj2-name': 'HR Management System', 'proj2-desc': 'Complete HR management system...',
            'proj3-name': 'Personal Portfolio', 'proj3-desc': 'This very site. Dark mode tech portfolio...',
            'proj4-name': '23+ Web Projects', 'proj4-desc': 'Websites and applications for 23+ clients...',
            'm-time': '↓ 80% admin time', 'm-dup': '0 duplicates', 'm-dig': '100% digital',
            'cert1': "Bachelor's Degree in Information Systems Engineering", 'cert1-i': 'University · Costa Rica · 2019–2023',
            'cert2': 'Advanced English', 'cert3': 'TypeScript — Complete Course', 'cert4': 'React — Modern Applications',
            'cert5': 'Node.js — APIs & Backend', 'cert6': 'MySQL — Relational Databases', 'cert7': 'Docker — Containers & Deployment',
            'cert8': 'AI Agent · Claude API + RAG + Function Calling', 'cert8-i': 'Active project · Node.js + Anthropic SDK',
            'cert9': 'Additional certifications', 'cert-done': 'Graduated', 'cert-done2': 'Completed', 'cert-active': 'Active', 'cert-prog': 'In progress',
            'contact-title': "Let's work together?", 'contact-desc': 'Available for fullstack, frontend, QA or AI-focused roles...',
            'build-title': 'AI Agent — Claude API', 'build-desc': 'Conversational agent with RAG architecture...',
            'build-progress': 'Project progress', 'prog1': 'Architecture & setup', 'prog2': 'RAG pipeline',
            'prog3': 'Function Calling', 'prog4': 'Contextual memory', 'prog5': 'Interface & demo',
            'btn-code': '⌨ View code', 'btn-code2': '⌨ View code', 'btn-code3': '⌨ View code', 'btn-demo3': '↗ Demo'
        }
    };

    function applyLang(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.getElementById('lang-btn').textContent = T[lang]['lang-btn'];
        const navKeys = ['nav-about', 'nav-skills', 'nav-exp', 'nav-proj', 'nav-cert', 'nav-contact'];
        document.querySelectorAll('.nav-links a').forEach((a, i) => { if (navKeys[i]) a.textContent = T[lang][navKeys[i]]; });
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.dataset.key;
            if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
        });
        const splitPairs = [['job1-b1-bold', 'job1-b1-rest'], ['job2-b1-bold', 'job2-b1-rest']];
        splitPairs.forEach(([bk, rk]) => {
            const bEl = document.querySelector(`[data-key="${bk}"]`);
            const rEl = document.querySelector(`[data-key="${rk}"]`);
            if (bEl && rEl) bEl.closest('li').innerHTML = `<strong>${T[lang][bk]}</strong> ${T[lang][rk]}`;
        });
        updateProgressBarsLang(lang);
    }

    function toggleLang() { applyLang(currentLang === 'es' ? 'en' : 'es'); }

    /* ═══════════ PARTICLES ═══════════ */
    function initParticles() {
        const canvas = document.getElementById('bg-canvas');
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
        resize(); window.addEventListener('resize', resize);
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

    /* ═══════════ SCROLL EFFECTS ═══════════ */
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

    /* ═══════════ TERMINAL ═══════════ */
    function initTerminal() {
        const body = document.getElementById('terminal-body');
        if (!body) return;
        const lines = [
            '<span class="tc">// Developer Profile</span>',
            '<span class="tk">const</span> dev = {',
            '  <span class="tk">name</span>: <span class="ts">"Kendall Valverde"</span>,',
            '  <span class="tk">alias</span>: <span class="ts">"AruHonshou"</span>,',
            '  <span class="tk">role</span>: <span class="ts">"Fullstack + QA"</span>,',
            '  <span class="tk">location</span>: <span class="ts">"Costa Rica 🇨🇷"</span>,',
            '  <span class="tk">english</span>: <span class="ts">"Advanced (CCCN)"</span>,',
            '  <span class="tk">experience</span>: <span class="tv">3</span>, <span class="tc">// years</span>',
            '  <span class="tk">clients</span>: <span class="tv">23</span><span class="tc">+</span>,',
            '  <span class="tk">ai</span>: [<span class="ts">"Claude API"</span>, <span class="ts">"OpenAI"</span>],',
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

    /* ═══════════ PROGRESS BARS ═══════════ */
    function updateProgressBarsLang(lang) {
        const list = document.getElementById('progress-list');
        if (!list) return;
        const items = [
            { key: 'prog1', pct: 100, cls: '' },
            { key: 'prog2', pct: 85, cls: 'green' },
            { key: 'prog3', pct: 70, cls: 'green' },
            { key: 'prog4', pct: 60, cls: 'amber' },
            { key: 'prog5', pct: 20, cls: 'amber' }
        ];
        list.innerHTML = items.map(i => `
      <div class="progress-item">
        <div class="progress-label">
          <span class="progress-name">${T[lang][i.key]}</span>
          <span class="progress-pct">${i.pct}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill ${i.cls}" data-width="${i.pct}"></div></div>
      </div>
    `).join('');
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.progress-fill').forEach(b => b.style.width = b.dataset.width + '%');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: .3 });
        obs.observe(document.getElementById('building-card'));
    }

    /* ═══════════ CHATBOT IA — DeepSeek via Cloudflare Worker ═══════════
       La API key de DeepSeek vive en el Worker (nunca en el navegador).
       El frontend solo llama al Worker, que actúa de proxy seguro.
       ════════════════════════════════════════════════════════════ */
    const chatbot = (() => {
        // ─── Cloudflare Worker URL ───────────────────────────────
        // Reemplaza esto con la URL de tu Worker desplegado
        // Ejemplo: 'https://aru-chat.TU-USUARIO.workers.dev'
        const WORKER_URL = 'https://aru-chat.valverdekendall867.workers.dev';

        // ⚠️ API key eliminada del frontend — ahora vive en el Cloudflare Worker (seguro)
        const SYSTEM_PROMPTS = {
            es: `Eres Aru, una asistente virtual amigable y animada que representa a Kendall Valverde, desarrollador fullstack y QA engineer de Costa Rica.

            Tu personalidad:
            - Eres entusiasta, cálida y profesional
            - Siempre terminas tus respuestas con "¿Hay algo más en lo que pueda ayudarte? 😊"
            - Si el usuario dice que no necesita más ayuda (ejemplo: "no", "estoy bien", "gracias", "eso es todo"), te despides con: "¡Fue un placer hablar contigo! Espero que Kendall pueda ser parte de tu equipo pronto. ¡Hasta luego! 👋" y no respondas más
            - Nunca inventes información sobre Kendall y tienes PROHIBIDO RESPONDER A PREGUNTAS QUE NO TIENEN NADA QUE VER CON KENDALL (ejemplo: "¿Cuál es la capital de Francia?") — en esos casos, responde con "Lo siento, solo puedo responder preguntas relacionadas con Kendall. ¿Hay algo más en lo que pueda ayudarte? 😊"
            - Responde siempre en español

            Información sobre Kendall:
            - Nombre: Kendall Andrés Valverde Díaz
            - Ubicación: Costa Rica
            - Email: kendallavd@gmail.com | Teléfono: +506 8509-7920
            - GitHub: github.com/AruHonshou | LinkedIn: linkedin.com/in/kendall-valverde-diaz-aru
            - Bachiller en Ingeniería en Sistemas de Información, colegiado activo del CPIC
            - Inglés avanzado (CCCN)
            - 3+ años de experiencia, 23+ clientes en Costa Rica y EE.UU.
            - QA Engineer en Novacomp para Davivienda Bank (2025-2026): redujo ciclo de pruebas 40% con IA, usó Playwright, Selenium, GitHub Actions, AWS, Jira
            - Freelance: Sistema de RRHH completo (80% reducción tiempo administrativo), 23+ clientes
            - Stack: React, TypeScript, Node.js, Claude API, RAG, Function Calling, OpenAI, Playwright, Selenium, MySQL, Docker, Git
            - Actualmente construye un agente de IA con Claude API + RAG + Function Calling
            - Disponible para roles fullstack, frontend, QA o IA`,

              en: `You are Aru, a friendly and enthusiastic virtual assistant representing Kendall Valverde, a fullstack developer and QA engineer from Costa Rica.

            Your personality:
            - You are warm, enthusiastic and professional
            - Always end your responses with "Is there anything else I can help you with? 😊"
            - If the user says they don't need more help (example: "no", "I'm good", "thanks", "that's all"), say goodbye with: "It was a pleasure talking with you! I hope Kendall can be part of your team soon. Goodbye! 👋" and don't respond further
            - Never invent information about Kendall and you are PROHIBITED from responding to questions that have nothing to do with Kendall (example: "What is the capital of France?") — in such cases, respond with "I'm sorry, I can only answer questions related to Kendall. Is there anything else I can help you with? 😊"
            - Always respond in English

            Information about Kendall:
            - Name: Kendall Andrés Valverde Díaz
            - Location: Costa Rica
            - Email: kendallavd@gmail.com | Phone: +506 8509-7920
            - GitHub: github.com/AruHonshou | LinkedIn: linkedin.com/in/kendall-valverde-diaz-aru
            - Bachelor's in Information Systems Engineering, active CPIC member
            - Advanced English (CCCN)
            - 3+ years experience, 23+ clients in Costa Rica and the US
            - QA Engineer at Novacomp for Davivienda Bank (2025-2026): reduced test cycle 40% with AI, used Playwright, Selenium, GitHub Actions, AWS, Jira
            - Freelance: Full HR Management System (80% reduction in admin time), 23+ clients
            - Stack: React, TypeScript, Node.js, Claude API, RAG, Function Calling, OpenAI, Playwright, Selenium, MySQL, Docker, Git
            - Currently building an AI agent with Claude API + RAG + Function Calling
            - Available for fullstack, frontend, QA or AI roles`
            };

        let messages = [];
        let lastMsgTime = 0;

        function toggle() {
            document.getElementById('chat-window').classList.toggle('hidden');
        }

        async function sendMessage() {
            const input = document.getElementById('chat-input');
            const text = input.value.trim();
            if (!text) return;

            appendMessage('user', text);
            input.value = '';

            const now = Date.now();
            if (now - lastMsgTime < 6000) {
                appendMessage('assistant', currentLang === 'es'
                    ? '¡Hola! Soy Aru, la asistente virtual de Kendall 👋 ¿Qué te gustaría saber sobre él? 😊'
                    : 'Hi! I\'m Aru, Kendall\'s virtual assistant 👋 What would you like to know about him? 😊');
                return;
            }
            lastMsgTime = now;

            if (messages.length === 0) {
                messages.push({ role: 'system', content: SYSTEM_PROMPTS[currentLang] });
            }
            messages.push({ role: 'user', content: text });

            try {
                const res = await fetch(WORKER_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    // La API key ya NO va aquí — el Worker la maneja de forma segura
                    body: JSON.stringify({ messages, max_tokens: 300, temperature: 0.7 })
                });
                const data = await res.json();
                const reply = data.choices[0].message.content;
                messages.push({ role: 'assistant', content: reply });

                // ─── Detección de despedida y GIF ───
                const farewellPhrases = ['hasta luego', 'goodbye', 'fue un placer', 'it was a pleasure'];
                const isFarewell = farewellPhrases.some(p => reply.toLowerCase().includes(p));

                if (isFarewell) {
                  appendMessage('assistant', reply);
                  // Mostrar GIF de despedida
                  setTimeout(() => {
                    const container = document.getElementById('chat-messages');
                    const gifDiv = document.createElement('div');
                    gifDiv.className = 'chat-msg chat-msg--assistant';
                    gifDiv.innerHTML = '<img src="images/anime.gif" style="width:120px;border-radius:12px;margin-top:4px"/>';
                    container.appendChild(gifDiv);
                    container.scrollTop = container.scrollHeight;
                  }, 800);
                } else {
                  appendMessage('assistant', reply);
                }

            } catch (err) {
                appendMessage('assistant', currentLang === 'es' ? 'Error al conectar con la IA.' : 'Error connecting to AI.');
            }
        }

        function appendMessage(role, text) {
            const container = document.getElementById('chat-messages');
            const div = document.createElement('div');
            div.className = `chat-msg chat-msg--${role}`;
            // Convertir markdown básico a HTML
            const formatted = text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\n/g, '<br>');
            div.innerHTML = formatted;
            container.appendChild(div);
            container.scrollTop = container.scrollHeight;
        }

        return { toggle, sendMessage };
    })();

    /* ═══════════ INIT ═══════════ */
    function init() {
        initParticles();
        initScrollEffects();
        initTerminal();
        updateProgressBarsLang('es');
        applyLang('es');
    }

    return { init, toggleLang, chatbot };
})();

document.addEventListener('DOMContentLoaded', APP.init);