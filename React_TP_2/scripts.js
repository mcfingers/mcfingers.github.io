var sumar = (a, b) => parseInt(a) + parseInt(b)
var restar = (a, b) => parseInt(a) - parseInt(b)
var multiplicar = (a, b) => parseInt(a) * parseInt(b)
var dividir = (a, b) => parseInt(a) / parseInt(b)

var operacion = (op) => {
	var a = document.getElementById('valor1').value
	var b = document.getElementById('valor2').value
	var resultado = document.getElementById('resultado')
	
	if (op == 1) {
		isNaN(sumar(a,b)) ? resultado.innerHTML = 'Error. Ingrese sólo números' : resultado.innerHTML = sumar(a,b)
	} else if (op == 2) {
		isNaN(restar(a,b)) ? resultado.innerHTML = 'Error. Ingrese sólo números' : resultado.innerHTML = restar(a,b)
	} else if (op == 3) {
		isNaN(multiplicar(a,b)) ? resultado.innerHTML = 'Error. Ingrese sólo números' : resultado.innerHTML = multiplicar(a,b)
	}  else if (op == 4) {
		isNaN(dividir(a,b)) ? resultado.innerHTML = 'Error. Ingrese sólo números' : resultado.innerHTML = dividir(a,b)
	}  else if (op == 5) {
		document.getElementById('valor1').value = 0
		document.getElementById('valor2').value = 0
		document.getElementById('resultado').innerHTML = '0'
	}
}