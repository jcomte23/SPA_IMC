const weight = prompt("ingrese tu peso")
const height = prompt("ingrese tu altura en metros")

const imc = weight / (height * height)

let message

if (imc < 18.5) {
    message = 'Bajo peso';
} else if (imc < 24.9) {
    message = 'Peso normal';
} else if (imc < 29.9) {
    message = 'Sobrepeso';
} else {
    message = 'Obesidad';
}