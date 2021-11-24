function elegirMenuPrincipal(){
//retorna un string con el menú Inicial de servicios disponibles
    let menu="Elija el servicio que desee:\n";
    servBaseDisponibles.forEach(element => {
        menu+=(element.mostrarTituloDeServicio());
    });
    return menu;  
}
/*function mostrarMenuPrincipal(){
    let selector=document.getElementById("servicio");
    servBaseDisponibles.forEach(element => {
        let opcion=document.createElement("option");
        opcion.innerHTML=element.mostrarTituloDeServicio();
        opcion.setAttribute("value",element.id);
        selector.appendChild(opcion);
    });
}*/
function mostrarMenuAdicionales(){
    //retorna un string con el MENÚ a mostrar para elegir el servicio adicional
    let menu="Indica qué quiere de decoración:\n";
    servAdicionalDisponibles.forEach(element => {
        menu+=(element.mostrarTituloDeServicio());
    });
    menu+=("6. Nada");
    return menu;
    
}

function precioBase(unIdServicio){
    //determino el precio base de acuerdo al servicio elegido
   let serv=servBaseDisponibles.find(servBase=>servBase.id==unIdServicio);
   return serv.precio;
}

function validarDedos(unValor){
    //Valida que se elija un número de 1 a 5 (uñas)
    if (unValor <1 || unValor >5){
        return 0;
    }
    return unValor;
}
 function elegirCantidad(){
    //Elijo la cantidad de uñas por mano que quiere con decoración. 
    //Como antes eligió que quería servicio adicional, es obligatorio elegir de 1 a 5 uñas
    let dedos=0;
    do {
        dedos=parseInt(prompt('En cuántas uñas de UNA mano quiere la decoración. Elija de 1 a 5'));
    } while (validarDedos(dedos)==0);
    return dedos;  
}

function agregarServicioBase(unID){
    //guardo en la lista el servicio base elegido por el usuario
    let eleccion=servBaseDisponibles.find(serv=>(unID==serv.id));
    listaServicioUsuario.push(new servicioElegidos(eleccion.id,eleccion.nombre, eleccion.precio, eleccion.precio));
}
function agregarServiciosAdicionales(){
    //sumo todos los cargos extras por los servicios que incluya
    let sumador=0;
    let servicioElegido = parseInt(prompt(mostrarMenuAdicionales()));
    
    while (servicioElegido != 6){
        let cantidad=elegirCantidad();       
        let adicional=servAdicionalDisponibles.find(serv=>(servicioElegido==serv.id));  //elijo el objeto servicioAdicional
        sumador+= adicional.precioXCant(cantidad);                                      //sumo el precio del servicio
        listaServicioUsuario.push(new servicioElegidos(adicional.id,adicional.nombre, adicional.precioUnitario, adicional.precioXCant(cantidad)));//guardo lo elegido
        servicioElegido = parseInt(prompt(mostrarMenuAdicionales()));
    }
    return sumador;
}
function mostrarServiciosElegidos(){
    //retorna un string con todos servicios que seleccionó el usuario:
    let result="Los servicios elegidos son:\n";
    listaServicioUsuario.forEach(element => {
        result+=(element.mostarServicio());
    });
    return result;
}
/*function calcularPrecio(){
    let total=0;
    let padre=document.getElementById("servicio");
    let servicioElegido=padre.options[padre.selectedIndex].value;
    agregarServicioBase(servicioElegido);
    total+= precioBase(servicioElegido)+ agregarServiciosAdicionales();

    alert (`${mostrarServiciosElegidos()}\nEl precio Final estimado es: $${total}`);
}*/