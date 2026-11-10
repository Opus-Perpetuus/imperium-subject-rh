# Recursos Humanos

La app `subject-rh` responde su contrato de salud y publica su manifiesto con
el technical-id `subject-rh` y los menús de RH (Departamentos, Empleados y la
carpeta Nómina). Queda probado que el proceso levantado es esta app y no otra.

## Sub-features

La app hace la acción de `health`. Escribe: no.
La app hace la acción de `manifest`. Escribe: no.

Esta ficha no lleva línea `Subject:` con imagen: el catálogo no da un tag
para rellenarla. El hueco está en `despliegue.md`.

- `health` deja `GET /health` 200 con `status: "ok"`, `ready: true` y
  `service: "subject-rh"`.
- `manifest` deja `GET /manifest` 200 con `id: "SUBJECT-rh"` y
  `technicalId: "subject-rh"`.

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `SUBJECT-rh` (`subject-rh`); sin
  `dependsOn`.
- `src/server.ts` — `serve_subject(SUBJECT)`.
- `GET /health` y `GET /manifest` del kit (`vendor/kit/src/kirlet/serve.ts`).

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-rh.health` | `GET /health` | ninguno | GET a la app en `:3213` | 200, `status: "ok"`, `ready: true`, `service: "subject-rh"` | no | sin receta |
| `subject-rh.manifest` | `GET /manifest` | ninguno | GET a la app en `:3213` | 200, `technicalId: "subject-rh"` | no | sin receta |

## How to get to it (user POV)

- Menú principal de Imperium → `RH` (`rh.root`) → `Departamentos`,
  `Empleados`, `Nómina`.

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-rh`, la receta sale `omitida`.

- **Abrir.** `GET http://127.0.0.1:3213/health` y
  `GET http://127.0.0.1:3213/manifest`; el status y los campos de la tabla.
- **Proof.** `evidence/rh/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- No hay base QA nombrada: ninguna receta muta.
- `omitida` no cuenta como probada.
