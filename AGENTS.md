# Free Youth · reglas de trabajo obligatorias

Estas reglas se aplican a las tareas de este proyecto. Las instrucciones explícitas
del usuario prevalecen. No trasladar estas reglas a otros proyectos.

## Inicio de cada tarea o continuación

Antes de explorar el código, editar, ejecutar comandos del proyecto o proponer
cambios, leer en este orden:

1. [Skill de inicio](.agents/skills/free-youth-iniciar/SKILL.md).
2. [Estado actual](estado.md).
3. [Memoria de la sesión](memoria-sesion.md).
4. [Skill de registro](.agents/skills/free-youth-registrar/SKILL.md).

Las lecturas necesarias para localizar estos documentos están permitidas. Si falta
alguno, reconstruirlo con evidencia de esta conversación o Git, señalando lo que
no se sabe, antes de modificar la web. No fingir que se ha leído un documento.
Aplicar las skills por sus rutas aunque todavía no aparezcan en el catálogo.

## Reglas antirretroceso

- El resultado local del cambio visual del 27/09/2026 fue **rechazado por el
  usuario por considerarlo un retroceso**. No usarlo como referencia aprobada.
- Un build correcto, tests verdes o la opinión del agente no equivalen a una
  mejora visual ni a aceptación del usuario. Separar esas tres cosas al informar.
- Antes de tocar la interfaz, identificar la base de comparación y los aspectos
  que se deben conservar. No presumir que HEAD, producción o una captura llamada
  `final` cuentan con aprobación. Si la base no está clara, hacer primero la
  comparación de evidencias y resolver esa ambigüedad antes de rediseñar.
- Preservar identidad, contenido, jerarquía, composición y comportamientos
  aprobados. Una petición de animación no autoriza por sí sola sustituir el
  modelo de navegación, cambiar fondos o rehacer secciones.
- Hacer cambios pequeños y trazables, por componente o interacción. No reescribir
  una pantalla completa para corregir un detalle ni acumular estilos contradictorios.
- Comparar antes y después en la misma ruta, viewport, zoom, posición de scroll
  y estado. Revisar escritorio y móvil; para movimiento, observar también la
  transición real: una captura fija no demuestra su fidelidad.
- Comprobar proporciones, legibilidad, espacios, cortes, enlaces, menú, foco y
  movimiento reducido según lo modificado. No ocultar una regresión detrás de
  mejoras en otro apartado. Registrar toda diferencia intencional.
- Si el usuario señala un retroceso, invalidar la aceptación del área afectada,
  registrar su observación y dejar de extender esa dirección. Corregir dentro del
  alcance solicitado; no revertir ni publicar automáticamente.
- No borrar trabajo previo, archivos ajenos o evidencias. Consultar `git status`
  y el diff antes de editar; distinguir cambios heredados y cambios de la tarea.
- No describir como terminado, aprobado, clonado o publicado algo sin la evidencia
  correspondiente. Informar limitaciones y pendientes concretos.

## Registro y cierre

Aplicar [free-youth-registrar](.agents/skills/free-youth-registrar/SKILL.md) tras
cada avance significativo, cambio de plan, prueba relevante o rechazo, y antes
de terminar una tarea con novedades del proyecto. Mantener `estado.md` como
resumen vigente y `memoria-sesion.md` como historial acumulativo.

Guardar significa escribir los archivos locales y documentar su situación.
No implica commit, push ni despliegue. Esas acciones requieren autorización
explícita aplicable de la conversación; si ya existe, no pedirla de nuevo.
El push a la rama predeterminada puede activar GitHub Pages: comprobar el workflow
antes de publicar y verificar después el resultado público.
