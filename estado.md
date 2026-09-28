# Estado del proyecto · Free Youth

Última actualización: 2026-09-27, Europe/Madrid.
Registro asociado: [memoria-sesion.md](memoria-sesion.md).
Normas: [AGENTS.md](AGENTS.md).

## Situación actual

**Versión visual local rechazada por el usuario; corrección pendiente.**
El usuario indica: «yo en local solo estoy viendo un retroseso mas que evidente».
El resultado no está aprobado y no debe convertirse en la nueva base de diseño.
Las causas visuales concretas todavía deben contrastarse con el usuario y la
evidencia; no atribuirle críticas específicas que no ha expresado.

- Proyecto estático Astro; identidad Free Youth, «Acercándonos a Dios».
- Objetivo visual original: adaptar los movimientos de 24-7 Prayer Youth,
  manteniendo la identidad del grupo y usando efectos líquidos cuando encajen.
- Trabajo actual autorizado: reglas antirretroceso, este estado, memoria de sesión
  y dos skills de lectura y registro. No incluye otro rediseño ni publicación.
- Cambios de interfaz de esta sesión: guardados localmente, sin commit ni push
  realizados por este agente. La documentación nueva también queda local.
- Rama observada: `main`. HEAD local: `c9c02597b678138893db5439e1f461b394c3f0a6`
  (`Mantener cabecera visible al abrir el menú móvil`). Es un punto técnico de
  comparación, no una versión declarada aprobada.
- Remoto configurado: `https://github.com/eydermoises94-pixel/Free-Youth.git`.
  Estado remoto y producción no consultados en vivo en esta tarea documental.
- Vista previa usada: `http://127.0.0.1:4322/`; verificar disponibilidad al retomarla.
- `.github/workflows/deploy.yml` despliega GitHub Pages desde la rama predeterminada.

## Trabajo local que se debe preservar y revisar

| Área | Archivos o evidencia | Estado |
| --- | --- | --- |
| Diseño y movimiento | `src/layouts/Base.astro`, `src/pages/index.astro`, `src/styles/story.css` | Modificados; resultado visual rechazado |
| Scripts de movimiento | `src/scripts/reveal.ts`, `src/scripts/story-motion.ts` | Nuevos, locales; revisión pendiente |
| Verificación | `scripts/verify-motion.cjs`, `evidencia/final-*.png`, `evidencia/verificacion-movimiento.json` | Evidencia técnica, no aprobación estética |
| Comparación previa | `evidencia/antes-1440.png`, `evidencia/antes-2527.png` | Capturas anteriores al cambio de esta sesión |
| Referencia externa | `evidencia/referencia-inicio.png`, `evidencia/referencia-950.png` | Capturas de la referencia de movimiento |
| Archivo heredado | `evidencia/portada-publicada-movil.png` | Ya existía sin seguimiento antes de esta sesión; no sobrescribir |
| Gobernanza | `AGENTS.md`, `estado.md`, `memoria-sesion.md`, `.agents/skills/free-youth-*/SKILL.md` | Creada por petición del usuario; revisar validación en la memoria |

No revertir todo el árbol ni borrar evidencias para limpiar el repositorio.
El inventario vigente debe confirmarse con `git status` al iniciar cada tarea.

## Verificaciones y sus límites

En el trabajo visual anterior de esta misma sesión: Astro check terminó con
0 errores, 0 warnings y 21 hints; build correcto de siete páginas, con avisos por
blog y agenda vacíos. Hubo pruebas de navegador a 320, 375, 390, 768, 1024, 1440 y
2527 px, anclas, menú, teclado, movimiento reducido y enlaces. Esto **no valida la
calidad visual**, que el usuario ha rechazado. No se han probado móviles físicos.
El JSON de verificación solo contiene el pase final de rutas, movimiento reducido
y visibilidad sin JS; los siete tamaños constan en la salida de pruebas de la
conversación. No presentar ese JSON como un informe completo de los siete tamaños.

En la tarea documental no se cambian archivos de la aplicación ni se repiten sus
pruebas: se validan las skills, enlaces locales y coherencia de las nuevas reglas.

## Plan vigente

| Paso | Estado | Criterio de cierre |
| --- | --- | --- |
| Registrar el rechazo y establecer continuidad | Hecho | Estado, memoria, reglas y dos skills guardados y enlazados |
| Determinar la base visual válida | Pendiente | Comparación real entre antes, local y referencia; identificar qué conservar sin asumir aprobación |
| Definir corrección mínima | Pendiente | Diferencias concretas y alcance acordes con la siguiente instrucción del usuario |
| Corregir por interacción o componente | Pendiente | Evidencia comparable de ausencia de regresión visual y funcional |
| Validar resultado con el usuario | Pendiente | Aceptación explícita registrada, independiente de tests técnicos |
| Guardar en GitHub y publicar | No autorizado actualmente | Autorización aplicable, diff acotado, commit/push y despliegue comprobados |

Próxima acción de desarrollo: leer los documentos obligatorios y estudiar las
diferencias; no continuar automáticamente la dirección rechazada. La petición
actual de documentación no autoriza ejecutar todo este plan.
