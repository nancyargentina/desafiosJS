function esDivisible(dividendo, divisor){
    return (!(dividendo%divisor))     // si resto es 0, es divisor. Entonces niego para responder True a "esDivisible".
}

function esPrimo(numero){
    for (i=2;i<numero; i++){    
        if (esDivisible(numero,i) ){ //si esDivisible retorna True para algun numero, entonces no es primo 
            return false;
            break;
        }
    }
    return true;    //Si numero es 1 o salió del for sin break,entonces es primo
}
 
let unNumero=parseInt(prompt("Ingrese un NÚMERO para ver si es Primo"));
 if (esPrimo(unNumero)){
     alert(`${unNumero} es un número primo`)
 }
 else {
    alert(`${unNumero} no es un número primo`)
 }