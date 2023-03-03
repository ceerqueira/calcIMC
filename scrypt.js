const resultado = document .querySelector ( '#resultado')
const altura = document.querySelector ('#altura')
const peso = document.querySelector ('#peso')

const calcIMC = () => {
    if(altura.value != '' && peso.value != ''){
        const imc= (peso.value / (altura.value * altura.value)).toFixed(2)
        let classificacion = ''

        if(imc < 18.5){
            classificacion = 'abaixo do peso'
        }else if(imc < 25){
            classificacion = 'peso normal'
        }else if(imc < 30){
            classificacion = 'acima do peso'
        }else if(imc < 35){
            classificacion = 'obesidade Grau I'
        }else if(imc < 41){
            classificacion = 'obesidade Grau II'
        }else{
            classificacion = 'obesidade Grau III'
        }
        resultado.innerHTML = `IMC: ${imc} (${classificacion})`
    }else{
        resultado.innerHTML = 'Prencha os campos'
    }
}