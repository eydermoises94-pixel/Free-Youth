---
name: free-youth-registrar
description: "Registro obligatorio de avances en Free Youth: guardar archivos locales y actualizar estado.md y memoria-sesion.md tras cambios, pruebas, decisiones o rechazos y antes de cerrar una tarea con novedades."
---

# Guardar trabajo y mantener continuidad en Free Youth

Aplicar durante el trabajo y antes de dar por cerrada una tarea que produzca
novedades en este proyecto. No esperar a que el usuario lo recuerde. Antes de
actuar, cumplir [free-youth-iniciar](../free-youth-iniciar/SKILL.md).

## Cuándo registrar

Registrar cada avance significativo: cambio de código o documento, prueba con
resultado relevante, aceptación o rechazo del usuario, incidencia, cambio de
alcance o plan. Hacer un punto de guardado antes de operaciones largas o de riesgo
y al cerrar el turno. No llenar el historial con cada comando ni duplicar
entradas en consultas que no aporten novedades.

## Qué guardar

1. Guardar en disco los archivos editados y revisar el diff sin pisar cambios
   ajenos. Si existe un bloqueo de escritura, declararlo; no afirmar que se guardó.
2. Actualizar [estado.md](../../../estado.md) como fuente del estado vigente:
   - fecha y objetivo autorizado;
   - resultado actual y estado separado de implementación, pruebas, aceptación
     visual y publicación;
   - archivos afectados, evidencia y limitaciones reales;
   - pendientes, plan con pasos y criterios de cierre, y siguiente acción.
3. Añadir una entrada a [memoria-sesion.md](../../../memoria-sesion.md): petición
   o decisión, acción realizada, archivos, verificaciones efectivamente ejecutadas,
   resultados, rechazo o aceptación y siguiente paso. Conservar la historia;
   corregir errores con una nota posterior.
4. Comprobar que ambos documentos coinciden y que enlaces y rutas existen. Mantener
   AGENTS.md como reglas y las skills como procedimiento; no copiar allí toda la
   bitácora. Revisar git diff --check cuando se hayan editado archivos.

Distinguir hecho comprobado, propuesta y dato pendiente. Identificar pruebas de
un turno anterior: no hacerlas pasar por verificaciones nuevas. Tras un rechazo,
actualizar el estado y señalar qué valoraciones o informes anteriores dejan de
ser válidos. Un test aprobado no anula la valoración visual del usuario.

## Guardado local y publicación

Guardar significa persistir los cambios en archivos y registrar su situación.
Esta skill no autoriza commit, push, despliegue, rollback ni eliminación de
trabajo. Si la conversación ya autoriza una de esas acciones, ejecutarla dentro
de su alcance sin pedir permiso de nuevo y registrar solo el resultado verificado.
En este repositorio, un push a la rama predeterminada puede publicar en Pages.

## Cierre verificable

No cerrar afirmando que todo está terminado si quedan documentos desactualizados
por cambios propios de la tarea. El mensaje final debe resumir el estado real,
la evidencia relevante y los pendientes; distinguir siempre local, aprobado y
publicado. Si una interrupción impide cerrar, el último punto de guardado debe
permitir retomar el trabajo sin reconstruir toda la conversación.
