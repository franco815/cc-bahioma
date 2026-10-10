# Cuenta corriente MAD ESTUDIO · Bahioma

Dashboard de solo lectura con el estado de cuenta entre **MAD ESTUDIO** y **Bahioma**
(cargas sociales, honorarios, cobros y saldo de cuenta corriente).

La página (`index.html`) lee la planilla **en vivo desde Google Sheets** cada vez que alguien la
abre (o, si se configura así, desde el archivo `MAD_Bahioma_CC.xlsx` de este repositorio). No hay
base de datos ni nada que configurar: la planilla es la única fuente de datos, y quien entra al
link solo puede mirar.

## Qué hay en el repo

| Archivo | Qué es |
|---|---|
| `index.html` | El dashboard. No hace falta tocarlo. |
| `config.js` | Dice de dónde se leen los datos: el link de la planilla de Google Sheets (`fuente: "sheets"`) o el Excel del repo (`fuente: "xlsx"`). |
| `MAD_Bahioma_CC.xlsx` | Copia de la planilla maestra (hojas **Movimientos**, **Cobros**, **Resumen** y **Cómo usar**). Es la que se importa a Google Sheets, y la fuente de datos si se usa `fuente: "xlsx"`. |
| `xlsx.full.min.js` | Librería que permite al navegador leer el Excel (SheetJS 0.18.5). No se toca. |

## Publicar por primera vez (una sola vez)

1. En GitHub: **New repository** → nombre a elección (por ejemplo `cc-bahioma`) → **Public** → *Create repository*.
   > Con un plan gratuito, GitHub Pages solo publica repositorios públicos. El repo y la planilla
   > quedan visibles para quien encuentre el link; si preferís que el repo sea privado, GitHub Pro
   > permite publicar Pages desde repos privados (el dashboard igual es público para quien tenga el link).
2. En el repo nuevo: **Add file → Upload files**. Arrastrá los cinco archivos de esta carpeta
   (`index.html`, `config.js`, `MAD_Bahioma_CC.xlsx`, `xlsx.full.min.js`, `README.md`) y apretá **Commit changes**.
3. **Settings → Pages**. En *Build and deployment*: Source = **Deploy from a branch**,
   Branch = **main** y carpeta **/ (root)**. Guardá.
4. Esperá un minuto y recargá esa misma pantalla: arriba aparece el link, con la forma
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`. Ese es el link que le pasás a Bahioma.

## Conectar la planilla de Google Sheets (una sola vez)

1. En sheets.google.com: hoja en blanco → **Archivo → Importar → Subir** → `MAD_Bahioma_CC.xlsx`
   → *Reemplazar hoja de cálculo*. Ponele nombre (por ejemplo "MAD Bahioma CC").
2. Chequeá **Archivo → Configuración → Configuración regional: Argentina** (fechas dd/mm/aaaa).
3. **Compartir → Acceso general: Cualquier persona con el enlace · Lector → Copiar enlace**.
4. En `config.js`: `fuente: "sheets"` y pegá el enlace en `sheets.url`. Subí `config.js` al repo.
5. `formato` dice cómo está armada la hoja: `"tablas"` (dos pestañas, Movimientos y Cobros, como
   `MAD_Bahioma_CC.xlsx`) u `"original"` (una sola pestaña con el formato de MAD: columnas
   Mes / Tipo de cobro / Factura / IVA / Neto / Importe / eCheq / Transf/Efvo / Estado, y el bloque
   "Cobros a Bahioma" a la derecha con Banco / Número / fecha / fecha de cobro / Importe / Imp al cheque / Entrada).
   En el formato original: cada fila con importe entra a la cuenta corriente apenas se carga; Estado se
   escribe "Saldado d/m" cuando quedó cubierta o se deja vacío (pendiente de cancelar); Transf/Efvo es
   "CC" (cubierto con el crédito de los cheques) o "Transferencia" / "Efectivo" (pago directo, que entra
   también como crédito); el número de factura es lo que marca "facturado" (sin número = "sin facturar",
   el rojo de la planilla); Entrada es "Acreditado" (ya cobrado) o "NO" (en cartera). No hay que mover
   los encabezados.

## Actualizar los datos (cada vez que cambie algo)

Con Google Sheets conectado: editás la planilla (desde la compu o desde la app del celular) y
listo. El dashboard la lee al abrirse; si alguien lo tenía abierto, con recargar alcanza.
No hay que subir nada a GitHub.

Si en cambio usás `fuente: "xlsx"`: editá `MAD_Bahioma_CC.xlsx`, guardalo con el mismo nombre y
subilo al repo (**Add file → Upload files → Commit changes**). En un minuto se publica.

## Reglas de la planilla (para que la lectura no falle)

- No cambies los nombres de las hojas **Movimientos** y **Cobros** ni los títulos de sus columnas.
- Usá los valores de las listas desplegables (Concepto, Forma de pago, Estado, Tipo).
- No dejes filas vacías entre datos. Las filas totalmente vacías al final no molestan.
- En Movimientos cargás **Neto** (y **IVA** si hubo factura); el **Importe** se calcula solo.
- Un movimiento entra como débito de la cuenta corriente cuando queda **Saldado** (con IVA si fue facturado).
  Si se pagó por **Transferencia** o **Efectivo**, ese pago entra a la vez como crédito, así la cuenta queda completa.
- Un cheque suma crédito desde que se entrega, esté **Cobrado** o **En cartera**; solo **Rechazado** no cuenta.
  "En cartera" se informa aparte como "por acreditar" (dato de tesorería, no cambia el saldo).
- **Imp. al cheque** es informativo: no se descuenta del crédito de Bahioma.

## Cómo se calcula el saldo

```
Saldo CC = (cheques entregados + transferencias) − movimientos con importe cargado (con IVA si están facturados)
```

Positivo: Bahioma tiene plata a favor. Negativo: Bahioma le debe ese monto a MAD ESTUDIO.
La hoja **Resumen** del Excel calcula exactamente lo mismo, así que siempre podés comparar.

## Si el dashboard muestra "No se pudo leer la planilla"

- Google Sheets: revisá que el documento esté compartido como **Cualquier persona con el enlace**
  (rol Lector) y que las pestañas se sigan llamando **Movimientos** y **Cobros**.
- Excel en el repo: verificá que el archivo se llame exactamente `MAD_Bahioma_CC.xlsx`.
- Si abrís `index.html` en tu computadora (doble clic), el navegador no puede leer archivos del
  disco por seguridad: usá el botón *Elegir planilla* para previsualizar con tu copia local, o
  mirá directamente el link de GitHub Pages.
