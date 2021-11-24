
function mostrarMenuPrincipal(){
    let selector=document.getElementById("servicio");
    servBaseDisponibles.forEach(element => {
        let opcion=document.createElement("option");
        opcion.innerHTML=element.mostrarTituloDeServicio();
        opcion.setAttribute("value",element.id);
        selector.appendChild(opcion);
    });
}
function mostrarMenuAdicionales(){
    //retorna un string con el MENÚ a mostrar para elegir el servicio adicional
   
    let padre=document.getElementById("formulario");    //nodo Formulario donde ingresaré el bloque
    servAdicionalDisponibles.forEach(element => {       //por cada servicio adicional, creo bloque
        let unDiv=document.createElement("div");
        unDiv.setAttribute("class","row g-3 mb-3" );
        unDiv.innerHTML=`<p>${element.mostrarTituloDeServicio()}:</p>
        <div class="form-check-inline adicionales">
            <input class="form-check-input" type="radio" name="option${element.id}" id="option${element.id}" value="0" checked>
            <label for="option${element.id}"class="col-auto form-check-label">0 uñas</label>
            <input class="form-check-input" type="radio" name="option${element.id}" id="option${element.id}" value="1">
            <label for="option${element.id}"class="col-auto form-check-label">1 uña</label>
            <input class="form-check-input" type="radio" name="option${element.id}" id="option${element.id}" value="2">
            <label for="option${element.id}"class="col-auto form-check-label">2 uñas</label>
            <input class="form-check-input" type="radio" name="option${element.id}" id="option${element.id}" value="3">
            <label for="option${element.id}"class="col-auto form-check-label">3 uñas</label>
            <input class="form-check-input" type="radio" name="option${element.id}" id="option${element.id}" value="4">
            <label for="option${element.id}"class="col-auto form-check-label">4 uñas</label>
            <input class="form-check-input" type="radio" name="option${element.id}" id="option${element.id}" value="5">
            <label for="option${element.id}"class="col-auto form-check-label">5 uñas</label>
        </div>`;
        let predecesor=document.querySelector('.botones');  //busco posicion dentro del form. Antes de los botones
        padre.insertBefore(unDiv,predecesor);               //inserto en el Form antes de los botones
    });
}

function precioBase(unIdServicio){
    //determino el precio base de acuerdo al servicio elegido
   let serv=servBaseDisponibles.find(servBase=>servBase.id==unIdServicio);
   return serv.precio;
}

function agregarServicioBase(unID){
    //guardo en la lista el servicio base elegido por el usuario
    let eleccion=servBaseDisponibles.find(serv=>(unID==serv.id));
    listaServicioUsuario.push(new servicioElegidos(eleccion.id,eleccion.nombre, eleccion.precio, eleccion.precio));
}
function agregarServiciosAdicionales(){
    //sumo todos los cargos extras por los servicios que incluya
    let sumador=0;
 
    servAdicionalDisponibles.forEach(adicional => {                    //por cada objeto servicioAdicional
        let cantidad=0;
        let radios=document.getElementsByName(`option${adicional.id}`);//todos sus radiobutton (x ejemplo: todos los name=opcion1)
        radios.forEach(element => {
            if (element.checked){cantidad=parseInt(element.value);}//cantidad de uñas elegida
        });
        if (cantidad!=0){
            sumador+= adicional.precioXCant(cantidad);   //sumo el precio del servicio
            listaServicioUsuario.push(new servicioElegidos(adicional.id,adicional.nombre, adicional.precioUnitario, adicional.precioXCant(cantidad)));//guardo lo elegido
        }
        
    });   
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
function calcularPrecio(){
    let total=0;
    let padre=document.getElementById("servicio");
    let servicioElegido=padre.options[padre.selectedIndex].value;
    agregarServicioBase(servicioElegido);
    total+= precioBase(servicioElegido)+ agregarServiciosAdicionales();

    alert (`${mostrarServiciosElegidos()}\nEl precio Final estimado es: $${total}`);
}