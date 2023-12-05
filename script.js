const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#form')
const pResultado = document.querySelector('#resultado')

// btn.addEventListener('submit', btnOnclick); //Usa dos argumentos nombreEvento y codigo javascript a llamar.

// function btnOnclick() {
//     const sumaInputs = input1.value + input2.value;
//     pResultado.innerText = "Resultado: " + sumaInputs;
// }

form.addEventListener('submit', SumInputValue); //Usa dos argumentos nombreEvento y codigo javascript a llamar.

function SumInputValue(event) {
    //event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;
}
