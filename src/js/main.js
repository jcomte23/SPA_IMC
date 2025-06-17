const weight = document.getElementById("weight")
const height = document.getElementById("height")
const btnExecute = document.getElementById("btn-execute")
const result = document.getElementById("result")


btnExecute.addEventListener('click', function () {

    const imc = weight.value / (height.value * height.value)

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

    result.textContent="tu tienes un imc de "+ Math.round(imc) +" por lo tanto esta en: "+ message
})

