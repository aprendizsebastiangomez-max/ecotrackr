const express = require('express');
const cors = require('cors');
const { ecoCalculadora } = require('./ecoCalculadora.js');

const app = express();
const PUERTO = 3000;

app.use(cors());
app.use(express.json());

// Endpoint raíz
app.get('/', (req, res) => {
res.json({
nombre: 'EcoCalc API',
version: '1.0.0',
endpoints: [
'/api/sumar?a=10&b=5',
'/api/restar?a=10&b=5',
'/api/multiplicar?a=10&b=5',
'/api/raiz?a=69',
'/api/potencia?a=10&b=5',
'/api/dividir?a=10&b=5',
'/api/porcentaje?total=200&porcentaje=15',
'/api/saludar?nombre=Ana'
]
});
});

// Endpoint SUMAR
app.get('/api/sumar', (req, res) => {
const a = Number(req.query.a);
const b = Number(req.query.b);
if (isNaN(a) || isNaN(b)) {
return res.status(400).json({ error: 'Parámetros inválidos' });

}
res.json({ operacion: 'suma', a, b, resultado: ecoCalculadora.sumar(a,
b) });
});



// Endpoint SUMAR
app.get('/api/raiz', (req, res) => {
const a = Number(req.query.a);
if (isNaN(a)) {
return res.status(400).json({ error: 'Parámetros inválidos' });

}
res.json({ operacion: 'raiz', a, resultado: ecoCalculadora.raiz(a) });
});

// Endpoint POTENCIA
app.get('/api/potencia', (req, res) => {
const a = Number(req.query.a);
const b = Number(req.query.b);
if (isNaN(a) || isNaN(b)) {
return res.status(400).json({ error: 'Parámetros inválidos' });

}
res.json({ operacion: 'potencia', a, b, resultado: ecoCalculadora.potencia(a,
b) });
});


// Endpoint RESTAR
app.get('/api/restar', (req, res) => {
const a = Number(req.query.a);
const b = Number(req.query.b);
if (isNaN(a) || isNaN(b)) return res.status(400).json({ error:
'Parámetros inválidos' });
res.json({ operacion: 'resta', a, b, resultado:
ecoCalculadora.restar(a, b) });
});

// Endpoint MULTIPLICAR
app.get('/api/multiplicar', (req, res) => {
const a = Number(req.query.a);
const b = Number(req.query.b);
if (isNaN(a) || isNaN(b)) return res.status(400).json({ error:
'Parámetros inválidos' });
res.json({ operacion: 'multiplicación', a, b, resultado:
ecoCalculadora.multiplicar(a, b) });
});

// Endpoint DIVIDIR
app.get('/api/dividir', (req, res) => {

const a = Number(req.query.a);
const b = Number(req.query.b);
if (isNaN(a) || isNaN(b)) return res.status(400).json({ error:
'Parámetros inválidos' });
if (b === 0) return res.status(400).json({ error: 'No se puede dividirpor cero' });
res.json({ operacion: 'división', a, b, resultado:
ecoCalculadora.dividir(a, b) });
});

// Endpoint PORCENTAJE
app.get('/api/porcentaje', (req, res) => {
const total = Number(req.query.total);
const porcentaje = Number(req.query.porcentaje);
if (isNaN(total) || isNaN(porcentaje)) return res.status(400).json({
error: 'Parámetros inválidos' });
res.json({
operacion: 'porcentaje',
total,
porcentaje,
resultado: ecoCalculadora.calcularPorcentaje(total, porcentaje)
});
});

// Endpoint SALUDAR
app.get('/api/saludar', (req, res) => {
const nombre = req.query.nombre || 'Visitante';

res.json({
operacion: 'saludo',
nombre,
resultado: ecoCalculadora.saludar(nombre)
});
});

app.listen(PUERTO, () => {
console.log(`Servidor EcoCalc corriendo en 
    http://localhost:${PUERTO}`);
});