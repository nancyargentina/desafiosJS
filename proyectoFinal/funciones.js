function esEsculpida(unServicio){
    return (servicioMain=="esculpida")
}
function precioBase(unServicio){
    //determino el precio base de acuerdo al servicio elegido
    if (esEsculpida(unServicio)){
        return esculpidas;
    }
    else {
        return semi;
    }
}
function agregarServicios(){
    //sumo todos los cargos extras por los servicios que incluya
    let sumador=0;
    let servicioElegido = prompt('Ingrese la decoración: nailart, ilustracion, glitter, cromado, encapsulado. o "fin" para terminar').toLowerCase();
    while (servicioElegido != "fin"){
        switch (servicioElegido) {
            case "nailart":
                sumador +=nailartsimple;
                break;
            case "ilustracion":
                sumador +=ilustracion;
                break;
            case "glitter":
                sumador +=glitter;
                break;
            case "cromado":
                sumador +=cromado;
                break;        
            case "encapsulado":
                sumador +=encapsulado;
                break;
        }
        servicioElegido = prompt("Ingrese el decoraciones: nailart, ilustracion, glitter, cromado, encapsulado. O deje en blanco").toLowerCase();
    }
    return sumador;
}
//manejo inicial de variables para almacenar los precios
const esculpidas= 1500;
const semi= 800;
const nailartsimple=250; //todas las uñas;
const ilustracion=400;//1;
const glitter=200;//full mano;
const cromado=400;
const encapsulado=350;

let servicioMain = prompt("Ingrese el servicio que quiere. esculpida o semipermanente").toLowerCase();
let total= precioBase() + agregarServicios();
alert (`El precio estimado en las 10 uñas es: $${total}`);
