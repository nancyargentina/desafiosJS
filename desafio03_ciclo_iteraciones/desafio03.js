//Calculo los divisores del número ingresado
let numero =parseInt(prompt("ingrese un número"));
let divisores=""
for (let i=1; i<=numero;i++){
    if (!(numero % i)){ //resto 0 es divisor pero flag 0 es falso, entonces !0 es verdadero
        divisores += i+",";
        alert(divisores);
    };
}
alert(`Divisores de ${numero}: ${divisores}`);