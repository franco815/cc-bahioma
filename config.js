/* Configuración de la fuente de datos del dashboard (MAD ESTUDIO · Bahioma).
   Este es el único archivo que hace falta tocar para cambiar de dónde se leen los datos. */
window.CC_CONFIG = {

  /* "sheets" = lee en vivo la planilla de Google Sheets indicada abajo.
     "xlsx"   = lee el archivo MAD_Bahioma_CC.xlsx subido a este mismo repositorio. */
  fuente: "sheets",

  sheets: {
    /* Link de la planilla de Google Sheets, compartida como "Cualquier persona con el enlace · Lector". */
    url: "https://docs.google.com/spreadsheets/d/1819FRnw-oeIb--b3T_lDOqCn3dSMojDtciYZFfu12KM/edit",

    /* "original" = una sola pestaña con el formato de MAD (Mes / Tipo de cobro / … y el bloque "Cobros a Bahioma" a la derecha).
       "tablas"   = dos pestañas, Movimientos y Cobros (la planilla MAD_Bahioma_CC). */
    formato: "original",
    /* Para formato "original": qué pestaña leer (0 = la primera; el número aparece en el link como gid=…). */
    gid: 0,

    /* Para formato "tablas": nombres de las pestañas. */
    hojaMovimientos: "Movimientos",
    hojaCobros: "Cobros",

    /* Opcional: links CSV de "Archivo → Compartir → Publicar en la web". Si están cargados, se usan en lugar de la url. */
    csvHoja: "",
    csvMovimientos: "",
    csvCobros: ""
  },

  /* Nombre del Excel dentro del repositorio, para fuente "xlsx". */
  xlsx: "MAD_Bahioma_CC.xlsx"
};
