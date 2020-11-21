'use strict';

/*
 *	Apellido, Nombre.
 * Podes usar o empezar algo nuevo para codear.
 */

// Discos:
let aDiscos = [];
	aDiscos['Nombre'];
	aDiscos['Autor'];
	aDiscos['Codigo Numerico'];
	aDiscos['Pista']['Duracion'];

// Disco precargado de ejemplo:
aDiscos[0] = {
	Nombre: 'El lado oscuro de la Programación',
	'Autor / Banda': 'Los Programadores Anónimos',
	'Código': 1,
	Pistas: [{
			Nombre: 'Esa cajita loca llamada variablecita',
			'Duración': 200,
		},
		{
			Nombre: 'Nunca quise ser un NaN',
			'Duración': 180,
		},
		{
			Nombre: 'No quiero programar',
			'Duración': 90,
		},
		{
			Nombre: 'Bajo presión',
			'Duración': 240,
		},
		{
			Nombre: 'La odisea de las variables privadas',
			'Duración': 120,
		},
		{
			Nombre: 'Sr. Programador',
			'Duración': 720,
		},
	],
};

// Disco precargado de ejemplo:
aDiscos[1] = {
	Nombre: 'Programador se hace',
	'Autor / Banda': 'Los Programadores Anónimos',
	'Código': 2,
	Pistas: [{
			Nombre: 'No quiero practicar',
			'Duración': 90,
		},
		{
			Nombre: 'Clases virtuales offline',
			'Duración': 210,
		},
		{
			Nombre: 'Y la plata dónde está?',
			'Duración': 180,
		},
		{
			Nombre: 'forEach usuario nefasto',
			'Duración': 60,
		},
		{
			Nombre: 'Tengo que validar?',
			'Duración': 120,
		},
		{
			Nombre: '#FAFAFA',
			'Duración': 30,
		},
	],
};

// Función Cargar:
function Cargar() {
	// Cositas:
}

// Función Mostrar:
function Mostrar() {
	// Variable para ir armando la cadena:
	let html = '';

	// Cositas:

	// Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
	document.getElementById('info').innerHTML = html; // <--- ahí es acá
}

// Todas las funciones que necesites: