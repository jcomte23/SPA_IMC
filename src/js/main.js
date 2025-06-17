const weight = document.getElementById("weight").value
const height = document.getElementById("height").value
const btnExecute = document.getElementById("btn-execute")
const result = document.getElementById("result")


btnExecute.addEventListener('click', function () {
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

    result.textContent = `estas con ${message} y tu imc es de ${Math.round(imc) }`
})






