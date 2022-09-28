import validator from './validator.js';

console.log(validator);


// const btnYes = document.getElementById("btn-debito");
// const btnYes = document.getElementById("btn-tarjeta de credito"); 
// const btnYes = document.getElementById("btn-transferencia");
const btnPay = document.getElementById("btn-pay");
const stnPay = document.getElementById("stn-pay")


  stnPay.style.display =
    "none";
btnPay.addEventListener('click', () => {    
    stnPay.style.display =
    "block";   
    });