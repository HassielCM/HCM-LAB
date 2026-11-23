# Contexto de HCM LAB para asistentes

- Ejecuta los comandos de npm desde `frontend/`. La aplicación usa React, Vite y JavaScript (JSX).
- Agrupa cada página en `frontend/src/pages/<Página>/` y coloca su CSS Module junto al JSX. Aplica el mismo criterio a los componentes reutilizables de `components/`. Usa `styles/global.css` para los estilos compartidos.
- Organiza las funcionalidades en `features/`, los clientes de servicios en `lib/` y los recursos importados en `assets/` cuando se necesiten.
- Usa `lucide-react` para iconos de interfaz y `react-icons` para iconos de marcas y redes sociales.
- Home es la única página de la base. `backend/` está reservado para una futura API en Python. Incorpora las funcionalidades a medida que se soliciten.
- Para Vercel, la raíz es `frontend`, el preset es Vite, el comando de compilación es `npm run build` y la salida es `dist`. El rewrite de la SPA vive en `frontend/vercel.json`.
- Verifica los cambios de frontend con `npm run build`. El flujo de desarrollo parte de `main`.
- Mantén este archivo como referencia del proyecto para asistentes. Las conexiones MCP y sus credenciales se gestionan en el entorno de cada usuario.
