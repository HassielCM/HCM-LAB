# HCM_LAB

Consulta la [guía del proyecto](agent/codex.md) para conocer las convenciones vigentes de HCM_LAB.

## Reglas generales de trabajo

- Respeta los cambios existentes del usuario.
- Limita las modificaciones a lo solicitado.
- Solicita autorización antes de hacer commits, push o despliegues.
- Solicita autorización explícita antes de utilizar el navegador o acceder a cuentas o conversaciones externas.
- Mantén en planeación las funcionalidades pendientes de autorización para implementarse.
- Verifica los cambios realizados e informa los resultados.

## Privacidad y versionado

- El repositorio de GitHub es público. Mantén versionados `AGENTS.md`, `agent/codex.md`, `README.md`, `frontend/` y `backend/`. Conserva `docs/` e `identidad/` como documentación local excluida de Git.
- Mantén las fichas técnicas, documentos maestros, prompts y referencias originales de Haxi e interfaces fuera de GitHub. Los recursos gráficos destinados directamente al frontend pueden versionarse.
- Mantén los secretos y las credenciales fuera de Git y de los recursos publicados.
- Incorpora licencias de código abierto únicamente con autorización.

## Identidad visual e interfaces

Las referencias locales de identidad pueden faltar en otros entornos. Si una tarea requiere referencias que no están disponibles, solicítalas al usuario. Evita inventar su contenido o buscarlo en conversaciones externas.

Para tareas de identidad visual o interfaces, consulta el [reporte BC-01](identidad/interfaces/identidad-visual.md) y las [notas de exploración](identidad/interfaces/referencias/notas-de-exploracion.md). BC-01 sigue en evaluación. Sus colores, tipografías, navegación y componentes son propuestas y requieren aprobación explícita para convertirse en decisiones de diseño.

## Haxi

Cuando una tarea involucre a Haxi, la mascota oficial de HCM_LAB, consulta ambas referencias vigentes:

- [Ficha técnica v1.3](identidad/haxi/ficha-tecnica-v1.3.png), referencia oficial visual.
- [Documento maestro v1.0](identidad/haxi/identidad.md), referencia oficial textual de identidad, personalidad y uso.

El [documento de exploración](identidad/haxi/historico/exploracion.md) conserva los antecedentes del diseño. Las referencias vigentes prevalecen sobre las propuestas históricas.

Cualquier cambio a la identidad visual o al comportamiento aprobado de Haxi requiere autorización expresa. Si las referencias vigentes difieren en un detalle que afecta la tarea, señala la discrepancia y pide confirmación antes de aplicarlo.

El color de las branquias y manchas queda pendiente de confirmación por la discrepancia entre la ficha técnica y el documento maestro.
