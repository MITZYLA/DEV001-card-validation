import validator from './validator.js';

console.log(validator);


//estos son los botones de paqgo de cada tratamiento;
const btnPay = document.getElementById("btn-pay");
const btnPay2 = document.getElementById("btn-pay2")
const btnPay3 = document.getElementById("btn-pay3")

//aqui use question2 y card2 para llamar al id desde html;
const stnPay = document.getElementById("stn-pay");
const question = document.getElementById("question");
const question2 = document.getElementById("question2");
const card = document.getElementById('card')
const card2 = document.getElementById('card2')

//para que aparezcan objetos o funciones ocultas;
btnPay.addEventListener('click', () => { stnPay.style.display = "block"; });
btnPay2.addEventListener('click', () => { stnPay.style.display = "block"; });
btnPay3.addEventListener('click', () => { stnPay.style.display = "block"; });

// quí se especificó cada boton de question, 1y2;
question.addEventListener('click', () => { card.style.display = 'block'; });
question2.addEventListener('click', () => { card2.style.display = 'block'; });

//declaro constante validar
const validar = document.getElementById("validacion");
//le asigno el evento clic al boton y cuando se cliquee el boton se ejecuta la funcion especificada
validar.addEventListener("click", function (event) {
    //let inputvalue, lo use para que no permita quedar el input en blanco
    let inputvalue= document.getElementById("cardNumber").value
    if(inputvalue==""){
        alert("ingrese un número");
        document.location.reload();
    }
    else{
    
    //evitamos redireccion de la pagina
    event.preventDefault();
    //declaro la constante creditCardNumber y extraigo el imput del id cardNumber
    const creditCardNumber = document.getElementById("cardNumber");
    //verifico la validez de la tarjeta extrayendo el value
    if (validator.isValid(creditCardNumber.value)) {
        //aca enmascaro los caracteres
        const creditCardMask = validator.maskify(creditCardNumber.value)
        //aca se muestra el mensaje en caso de ser valida la tarjeta
        //me sugirió reescribir y cambiar las "" y el + por $, ' y {}
        alert("Tu tarjeta+{creditCardMask}es valida para realizar la compra")
    } else {
        //en caso de no ser valida la tarjeta muestra alert "tarjeta no valida"
        alert("Tarjeta no valida")
    }
}
})
