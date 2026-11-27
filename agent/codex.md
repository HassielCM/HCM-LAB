# Contexto de HCM LAB para asistentes

- Ejecuta los comandos de npm desde `frontend/` o desde la raíz del repositorio con `npm --prefix frontend` seguido del comando correspondiente. La aplicación usa React, Vite y JavaScript (JSX).
- Agrupa cada página en `frontend/src/pages/<Página>/` y cada componente reutilizable en `components/`. Si necesitas un CSS Module, colócalo junto al JSX correspondiente.
- Usa utilidades de Tailwind CSS en `className`. Tailwind se carga desde `styles/global.css` mediante el plugin de Vite. Usa ese archivo para los estilos compartidos. Preflight está desactivado.
- Organiza las funcionalidades en `features/`, los clientes de servicios en `lib/` y los recursos importados en `assets/` cuando se necesiten.
- Usa `lucide-react` para iconos de interfaz y `react-icons` para iconos de marcas y redes sociales.
- Home es la única página de la base. `backend/` está reservado para una futura API en Python. Incorpora las funcionalidades a medida que se soliciten.
- Para Vercel, la raíz es `frontend`, el preset es Vite, el comando de compilación es `npm run build` y la salida es `dist`. El rewrite de la SPA vive en `frontend/vercel.json`.
- Verifica los cambios de frontend con `npm run build`.
- Mantén este archivo como referencia del proyecto para asistentes. Las conexiones MCP y sus credenciales se gestionan en el entorno de cada usuario.

## Flujo de Git

- Tras el commit base, parte de `main` actualizada y usa una rama por tarea. Nombra las ramas `tipo/descripcion-breve`, en minúsculas, con palabras en español separadas por guiones.
- Escribe commits como `tipo: descripción breve` y agrupa cambios relacionados. Usa `feat` o `fix` para cambios visuales según su propósito. Reserva `style` para el formato del código.
- Revisa y verifica los cambios antes de integrarlos en `main`. Retira las ramas cuando ya no hagan falta. Respeta las autorizaciones de `AGENTS.md` y consulta [la guía local de comandos](../docs/comandos.md) cuando esté disponible.

## Dirección del proyecto

HCM_LAB es un espacio personal de desarrollo, aprendizaje, creatividad y experimentación tecnológica que también funciona como portafolio profesional para cualquier visitante interesado.

1. **Portafolio fundamental.** Perfil personal y profesional, proyectos académicos, profesionales y personales, trayectoria, logros, CV y contacto. Haxi tendrá un papel visual. Home se diseñará después de consolidar el contenido y las interfaces internas.
2. **Plataforma de usuarios.** Supabase, registro, autenticación, cuentas, aportaciones económicas y pasarela de pagos.
3. **Laboratorio interactivo.** Haxi como asistente conversacional, modelos de IA locales, generación de imágenes, límites de consumo, experimentos y herramientas interactivas.

El portafolio será accesible sin registro. Las cuentas se destinarán principalmente a funciones interactivas y personalizadas. Las fases son una hoja de ruta flexible.
