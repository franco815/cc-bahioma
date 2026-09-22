# Cuenta corriente MAD ESTUDIO · Bahioma

Dashboard de solo lectura con el estado de cuenta entre **MAD ESTUDIO** y **Bahioma**
(cargas sociales, honorarios, cobros y saldo de cuenta corriente).

La página (`index.html`) lee la planilla `MAD_Bahioma_CC.xlsx` **directo de este repositorio**
cada vez que alguien la abre. No hay base de datos ni nada que configurar: la planilla es la
única fuente de datos, y quien entra al link solo puede mirar.

## Qué hay en el repo

| Archivo | Qué es |
|---|---|
| `index.html` | El dashboard. No hace falta tocarlo. |
| `MAD_Bahioma_CC.xlsx` | La planilla maestra: hojas **Movimientos**, **Cobros**, **Resumen** y **Cómo usar**. Es lo único que se actualiza. |
| `xlsx.full.min.js` | Librería que permite al navegador leer el Excel (SheetJS 0.18.5). No se toca. |

## Publicar por primera vez (una sola vez)

1. En GitHub: **New repository** → nombre a elección (por ejemplo `cc-bahioma`) → **Public** → *Create repository*.
   > Con un plan gratuito, GitHub Pages solo publica repositorios públicos. El repo y la planilla
   > quedan visibles para quien encuentre el link; si preferís que el repo sea privado, GitHub Pro
   > permite publicar Pages desde repos privados (el dashboard igual es público para quien tenga el link).
2. En el repo nuevo: **Add file → Upload files**. Arrastrá los cuatro archivos de esta carpeta
   (`index.html`, `MAD_Bahioma_CC.xlsx`, `xlsx.full.min.js`, `README.md`) y apretá **Commit changes**.
3. **Settings → Pages**. En *Build and deployment*: Source = **Deploy from a branch**,
   Branch = **main** y carpeta **/ (root)**. Guardá.
4. Esperá un minuto y recargá esa misma pantalla: arriba aparece el link, con la forma
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`. Ese es el link que le pasás a Bahioma.

## Actualizar los datos (cada vez que cambie algo)

1. Editá `MAD_Bahioma_CC.xlsx` en tu computadora (Movimientos y Cobros) y guardalo con el mismo nombre.
2. En el repo: **Add file → Upload files**, arrastrá la planilla y **Commit changes**.
   Como tiene el mismo nombre, reemplaza a la anterior.
3. En un minuto GitHub Pages publica la versión nueva. Bahioma la ve en el mismo link
   (si alguien lo tenía abierto, con recargar la página alcanza).

También podés hacerlo con GitHub Desktop: reemplazás el archivo en la carpeta del repo,
*Commit to main* y *Push origin*.

## Reglas de la planilla (para que la lectura no falle)

- No cambies los nombres de las hojas **Movimientos** y **Cobros** ni los títulos de sus columnas.
- Usá los valores de las listas desplegables (Concepto, Forma de pago, Estado, Tipo).
- No dejes filas vacías entre datos. Las filas totalmente vacías al final no molestan.
- En Movimientos cargás **Neto** (y **IVA** si hubo factura); el **Importe** se calcula solo.
- Un movimiento se descuenta de la cuenta corriente cuando queda **Saldado** con forma de pago **CC**.
  Los pagados por **Transferencia** o **Efectivo** aparecen, pero no tocan la cuenta corriente.
- Un cobro suma crédito cuando su estado es **Cobrado**. **En cartera** se muestra como "por acreditar".
- **Imp. al cheque** es informativo: no se descuenta del crédito de Bahioma.

## Cómo se calcula el saldo

```
Saldo CC = cobros Cobrados − movimientos Saldados con forma de pago CC
```

Positivo: Bahioma tiene plata a favor. Negativo: Bahioma le debe ese monto a MAD ESTUDIO.
La hoja **Resumen** del Excel calcula exactamente lo mismo, así que siempre podés comparar.

## Si el dashboard muestra "No se pudo leer la planilla"

- Verificá que el archivo en el repo se llame exactamente `MAD_Bahioma_CC.xlsx`.
- Si abrís `index.html` en tu computadora (doble clic), el navegador no puede leer el archivo
  del disco por seguridad: usá el botón *Elegir planilla* para previsualizar con tu copia local,
  o mirá directamente el link de GitHub Pages.
