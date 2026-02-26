/**
* MÓDULO EcoCalculadora - Compatible Node.js y navegador
*/

const ecoCalculadora = {
sumar: (a, b) => Number(a) + Number(b),
restar: (a, b) => Number(a) - Number(b),
potencia: (a, b) => Number(a) ** Number(b),
multiplicar: (a, b) => Number(a) * Number(b),
raiz: (a) => {
if (Number(a)<0) return "error:    no puedes sacar la raiz de un numero negativo";
return Math.sqrt (Number (a))
},
dividir: (a, b) => {
if (Number(b) === 0) return "Error: División por cero";
return Number(a) / Number(b);
},
calcularPorcentaje: (total, porcentaje) => (Number(total) * Number(porcentaje)) / 100,
saludar: (nombre) => "Hola " + (nombre || "Visitante") + ", hoy reciclarás código y cuidarás el planeta"
};

// Exportar para Node.js
if (typeof module !== 'undefined' && module.exports) {
module.exports = { ecoCalculadora };
}