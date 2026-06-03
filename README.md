# Kendall Valverde Portfolio

Portfolio personal de Kendall Valverde con estetica de terminal IA, asistente Aru integrado, secciones de experiencia, proyectos, certificaciones y contacto.

## Stack

- HTML5
- CSS3
- JavaScript vanilla
- Cloudflare Worker como proxy seguro para el chat de Aru
- GitHub Pages para publicacion

## Estructura

```txt
index.html      Estructura principal del sitio
styles.css      Sistema visual, responsive y animaciones
main.js         i18n, animaciones, chatbot y eventos de UI
images/         Avatar de Aru y recursos visuales
```

## Desarrollo local

Puedes abrir `index.html` directamente o servir el directorio con un servidor estatico:

```bash
npx serve .
```

## Publicacion

El sitio esta preparado para GitHub Pages desde la rama `main` del repositorio:

```txt
https://aruhonshou.github.io
```

## Seguridad y mantenimiento

- Los enlaces externos usan `rel="noopener noreferrer"`.
- La API key del modelo no vive en el frontend; el navegador llama a un Worker.
- El chat sanitiza mensajes antes de renderizarlos.
- El cambio de idioma reinicia el contexto local del chat para evitar mezclar prompts ES/EN.
- Hay soporte para `prefers-reduced-motion`.

## Contacto

- Email: kendallavd@gmail.com
- GitHub: https://github.com/AruHonshou
- LinkedIn: https://www.linkedin.com/in/kendall-valverde-diaz-aru/
