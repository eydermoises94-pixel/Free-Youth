---
name: free-youth-iniciar
description: "Inicio obligatorio de tareas del proyecto Free Youth: leer estado.md y memoria-sesion.md, recuperar decisiones y aplicar las reglas antirretroceso antes de actuar."
---

# Inicio de trabajo en Free Youth

Aplicar al iniciar cada tarea o continuación que afecte a este proyecto. El
AGENTS.md raíz requiere esta skill; no esperar a que el usuario la invoque.
Las instrucciones explícitas vigentes del usuario prevalecen.

## Lectura previa obligatoria

Antes de explorar código, proponer cambios, editar o ejecutar comandos del
proyecto, leer completamente:

1. [estado.md](../../../estado.md).
2. [memoria-sesion.md](../../../memoria-sesion.md).
3. [AGENTS.md](../../../AGENTS.md), si todavía no se ha leído.
4. [Skill de registro](../free-youth-registrar/SKILL.md).

Resolver las rutas desde esta carpeta hasta la raíz del repositorio. Solo se
exceptúan las operaciones necesarias para localizar y leer estas instrucciones.
Si un archivo falta o no es legible, no continuar modificaciones de la web a
ciegas: recuperar lo demostrable y señalar el hueco. No inventar decisiones.

## Aplicación al encargo

- Extraer objetivo autorizado, último estado, rechazos, elementos aprobados,
  pendientes y siguiente paso. Resolver contradicciones a favor de la instrucción
  más reciente del usuario y registrar la corrección.
- Consultar después git status y el diff pertinente. Diferenciar cambios heredados
  de cambios nuevos; verificar datos que puedan haber quedado obsoletos.
- El resultado rechazado sigue rechazado aunque funcione técnicamente o tenga
  capturas llamadas final. No reiniciar desde él como si fuera una base aprobada.
- Para cambios visuales, identificar referencia, ruta, viewport y comportamiento
  a conservar. Comparar la evidencia disponible antes de diseñar. Si falta una
  decisión visual indispensable, avanzar con el diagnóstico y pedir solo esa
  aclaración; no pedir aprobación rutinaria para tareas ya autorizadas.
- Seguir las reglas antirretroceso de AGENTS.md. La validación técnica y la
  aceptación visual son estados separados.
- Mantener el trabajo dentro de la petición actual. Un plan pendiente no autoriza
  su ejecución completa. Una consulta sobre GitHub no autoriza publicar.

La lectura debe reflejarse en las decisiones y, cuando haya novedades, en el
registro; no basta con afirmar que se leyeron los archivos.
