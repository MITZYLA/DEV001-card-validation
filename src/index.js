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
btnPay.addEventListener('click', () => {stnPay.style.display ="block"; });
btnPay2.addEventListener('click', () => {stnPay.style.display ="block"; });
btnPay3.addEventListener('click', () => {stnPay.style.display ="block"; });

// quí se especificó cada boton de question, 1y2;
question.addEventListener('click', () => {card.style.display='block';});
question2.addEventListener('click', () => {card2.style.display='block';});