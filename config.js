/* Configuración de la fuente de datos del dashboard (MAD ESTUDIO · Bahioma).
   Este es el único archivo que hace falta tocar para cambiar de dónde se leen los datos. */
window.CC_CONFIG = {

  /* "sheets" = lee en vivo la planilla de Google Sheets indicada abajo.
     "xlsx"   = lee el archivo MAD_Bahioma_CC.xlsx subido a este mismo repositorio. */
  fuente: "sheets",

  sheets: {
    /* Link de la planilla de Google Sheets, compartida como "Cualquier persona con el enlace · Lector". */
    url: "https://docs.google.com/spreadsheets/d/1d6_VJ5CFoBRcJTCSho2Smd_yK3YKlej6_JlMRinrMMI/edit?usp=sharing",
    /* Nombres de las pestañas (dejar así salvo que las renombres). */
    hojaMovimientos: "Movimientos",
    hojaCobros: "Cobros",
    /* Opcional: links CSV de "Archivo → Compartir → Publicar en la web" (uno por pestaña, formato CSV).
       Si están cargados, se usan en lugar de la url de arriba. */
    csvMovimientos: "",
    csvCobros: ""
  },

  /* Nombre del Excel dentro del repositorio, para fuente "xlsx". */
  xlsx: "MAD_Bahioma_CC.xlsx"
};
