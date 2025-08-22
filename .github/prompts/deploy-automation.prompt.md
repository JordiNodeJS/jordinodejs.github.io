# Prompt: Automatizar despliegue / creación de PR y limpieza de rama

Objetivo
- Cuando le indique a la IA "haz un despliegue" debe:
  1. Si hay cambios locales sin commitear: crear un commit con el mensaje que le proporcione el usuario y pushearlo.
  2. Si la rama actual es `main`: pushear a `origin/main` y terminar (el workflow se disparará por el push).
  3. Si la rama actual NO es `main`: pushear la rama, crear un Pull Request hacia `main`. Si está configurado `auto_merge: true` y la API lo permite, intentar mergear automáticamente. Tras el merge exitoso, borrar la rama feature local y remota.

Precondiciones y credenciales
- Debes disponer de un token con permisos `repo` y `workflow` (o `repo` en repos públicos) expuesto como variable `GITHUB_TOKEN` o `PAT`.
- El agente debe ejecutar comandos git en el repo local y llamadas a la API de GitHub para crear y (opcionalmente) mergear PRs.

Parámetros (placeholders)
- {commit_message} — mensaje de commit a usar cuando haya cambios no comiteados. Si no se proporciona, usar: "chore: cambios antes de despliegue".
- {auto_merge} — booleano (true/false). Si true, el agente intentará mergear la PR automáticamente usando la API.
- {merge_method} — "merge" | "squash" | "rebase" (opcional, por defecto "merge").
- {github_token} — token con scope adecuado (no imprimirlo en logs públicos).

Pasos detallados (ejecución que debe seguir la IA)
1. Comprobar el estado del repo local:
   - Ejecutar `git status --porcelain`.
   - Si hay cambios no comiteados:
     - Ejecutar `git add -A`.
     - Ejecutar `git commit -m "{commit_message}"`.
     - Si el commit falla por falta de usuario configurado, configurar temporalmente `git config user.name` y `git config user.email` con valores proporcionados por el usuario.
2. Detectar la rama actual: `git rev-parse --abbrev-ref HEAD`.
3. Si la rama es `main`:
   - Ejecutar `git push origin main`.
   - Reportar al usuario la URL de Actions o el run que se haya disparado (si es posible consultar la API).
   - Terminar con status `done`.
4. Si la rama NO es `main` (ej: `feature/xyz`):
   - Ejecutar `git push --set-upstream origin {branch}`.
   - Crear un Pull Request hacia `main` usando la API de GitHub (POST /repos/:owner/:repo/pulls) con título `chore: PR para desplegar {branch}` y body que incluya el commit_message y lista de cambios.
   - Reportar la URL del PR al usuario.
   - Si {auto_merge} == true:
     - Comprobar si el PR es mergeable (usar GET /repos/:owner/:repo/pulls/:number hasta obtener `mergeable: true` o timeout corto).
     - Si mergeable: ejecutar PUT /repos/:owner/:repo/pulls/:number/merge con `merge_method`.
     - Si la API responde que no puede mergear por protecciones (status 405 o mensajes), informar al usuario y no forzar nada.
   - Tras merge exitoso (ya sea automático o manual confirmado por el usuario), borrar la rama remota: DELETE /git/refs/heads/{branch} o `git push origin --delete {branch}` y borrar la rama local: `git branch -D {branch}`.

Comportamiento de seguridad y confirmaciones
- Antes de mergear automáticamente, si el repo tiene reglas de protección (required reviews, environment protections), pide confirmación al usuario salvo que el usuario haya permitido explícitamente auto-merge.
- No uses credenciales embebidas en logs. Si vas a mostrar respuestas de la API, filtra los tokens.
- En caso de error en cualquiera de los pasos, aborta y devuelve un resumen claro: comando que falló, salida de la API (mensaje) y pasos sugeridos.

Mensajes que debe devolver la IA al usuario (plantillas)
- Start: "Inicio: detectados X cambios locales; rama actual: {branch}."
- After commit: "Commit creado: {commit_sha}. Push: {push_result}."
- After PR: "PR creado: {pr_url}."; si auto-merge: "Intentando merge automático..." y luego el resultado.
- After cleanup: "Rama {branch} borrada (remote + local)." o en caso de no borrarse, instrucciones para borrado manual.

Ejemplo rápido de uso (manual)
- Usuario: "IA, haz un despliegue con mensaje 'feat: actualizar hero' y auto_merge=false"
- IA: sigue los pasos anteriores, commitea, pushea y si está en feature crea PR y devuelve URL.

Notas técnicas
- Para llamadas a la API recomienda usar `Accept: application/vnd.github+json` y autenticar con `Authorization: token {github_token}`.
- Respeta rate limits y maneja re-intentos exponiendo el error al usuario después de 2 intentos fallidos.

Fin del prompt.
