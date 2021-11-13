
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
    let servicioElegido = parseInt(prompt('Ingrese la decoración: \n1. nailart\n2. ilustracion\n3. glitter\n4. cromado\n5. encapsulado.\n\n o 6. para terminar'));
    while (servicioElegido != 6){
        let cantidad=parseInt(prompt('En cuántas uñas de UNA mano quiere la decoración. Elija de 1 a 5'));
        switch (servicioElegido) {
            case 1://"nailart"               
                sumador +=nailartsimple.precioXCant(cantidad);
                break;
            case 2://"ilustracion"
                sumador +=ilustracion.precioXCant(cantidad);
                break;
            case 3://"glitter"
                sumador +=glitter.precioXCant(cantidad);
                break;
            case 4://"cromado"
                sumador +=cromado.precioXCant(cantidad);
                break;        
            case 5://"encapsulado"
                sumador +=encapsulado.precioXCant(cantidad);
                break;
        }
        servicioElegido = parseInt(prompt(`Ingrese la decoración: \n1. nailart\n2. ilustracion\n3. glitter\n4. cromado\n5. encapsulado.\n\n o 6. para terminar`));
    }
    return sumador;
}

