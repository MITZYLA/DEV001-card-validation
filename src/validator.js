const validator = {
// Luhn check
isValid(creditCardNumber) {
    let numSum = 0;
    let value;
    //iteramos en base a la cantidad de numeros de la tarjeta (16)
    for (let i = 0; i < creditCardNumber.length; i++) {
      //en este if el residuo entre la posision y el 2 debe ser igual a 0
      if (i % 2 == 1) {
        //en caso de que el if anterior sea verdadero duplicamos el numero 
        value = 2 * creditCardNumber[i];
        //si al duplicar el numero es mayor o igual a 10 se se divide en 10  (con math.floor extraemos el entero)  y se suma el residuo(value%10) 
        if (value >= 10) {
          value = (Math.floor(value / 10) + value % 10);
        }
        //pasa a numero el string
      } else {
        value = Number(creditCardNumber[i]);

      }
      //aca se guarda en la variable numsun (la suma delos digitos)
      numSum = numSum + value;

    }
    //aqui validamos si la suma de los digitos dividido 10 tiene un residuo cero
    return (numSum % 10 == 0);
  },


maskify(creditCardNumber) {
    let arr = creditCardNumber.split('');
    let string = '';

    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 4) {
        string = string + '#';
      } else {
        string = string + arr[i];
      }
    }
    return string;
  }
}

export default validator;
