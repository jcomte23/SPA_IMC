const weight = 12
const height = 12

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

result.textContent = `Tu IMC es ${imc.toFixed(2)} - ${message}`;