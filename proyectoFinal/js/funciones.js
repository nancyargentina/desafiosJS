function armarMenuPrincipal(){
    //Arma botones con las opciones principales de servicios
    let selector = document.getElementById("servicio");

    servBaseDisponibles.forEach(element => {
        let opcion = document.createElement("input");
        opcion.type = "radio";
        opcion.setAttribute("class","btn-check");
        opcion.setAttribute("name","servicio");
        opcion.id = element.id;
        opcion.addEventListener("change",mostrarMenuAdicionales);
        selector.appendChild(opcion);
        opcion = document.createElement("label");
        opcion.setAttribute("class","btn boton btn-primary");
        opcion.innerHTML = element.mostrarTituloDeServicio();
        opcion.setAttribute("for",element.id);
        selector.appendChild(opcion);
    });
}

function armarMenuAdicionales(){
    //MENÚ de opciones para elegir el servicio adicional
    let padre = document.getElementById("formulario");    //nodo Formulario donde ingresaré el bloque
    let predecesor = document.querySelector('.botones');  //busco posicion dentro del form. Antes de los botones
    let titulo = document.createElement("p");             // tag de subtítulo de las opciones con sus atributos

    titulo.innerHTML = "DECORACIONES ADICIONALES:";
    titulo.setAttribute("class","fw-bolder");
    titulo.style = "display:none";
    padre.insertBefore(titulo,predecesor); 

    servAdicionalDisponibles.forEach(element => {       //por cada servicio adicional, creo grupo de opciones
        let unDiv = document.createElement("div");
        
        unDiv.setAttribute("class","input-group row g-3 mb-3");
        unDiv.innerHTML = `<label for="option${element.id}" 
        class="input-group-text col-auto col-form-label fw-bolder text-light bg-dark">${element.mostrarTituloDeServicio()}:</label>
            <select class="form-select form-select-sm col-auto" name="option${element.id}" id="option${element.id}">
            <option selected value="0">Sin ${element.nombre}</option>
            <option value="1">En 1 uña</option>
            <option value="2">En 2 uñas</option>
            <option value="3">En 3 uñas</option>
            <option value="4">En 4 uñas</option>
            <option value="5">En 5 uñas</option>
        </select>`;
        unDiv.style = "display:none";        
        padre.insertBefore(unDiv,predecesor);               //inserto en el Form antes de los botones
    });
}

function mostrarMenuAdicionales(e){
    //cuando se elige un servicio se muestran los servicios adicionales
    let padre = document.getElementById("formulario");
    let todosNodosAdicionales=padre.querySelectorAll(".input-group");

    padre.querySelector("p").style = "display:''";
    todosNodosAdicionales.forEach(unInput => {
        unInput.style = "display:''";
    });
}

function precioBase(unIdServicio){
    //determino el precio base de acuerdo al servicio elegido
   let serv = servBaseDisponibles.find(servBase => servBase.id == unIdServicio);
   return serv.precio;
}

function agregarServicioBase(unID){
    //guardo en la lista el servicio base elegido por el usuario
    let eleccion = servBaseDisponibles.find(serv => (unID == serv.id));
    listaServicioUsuario.push(new servicioElegidos(eleccion.id,eleccion.nombre, eleccion.precio, eleccion.precio));
}

function agregarServiciosAdicionales(){
    //sumo todos los cargos extras por los servicios que incluya
    let sumador = 0;
 
    servAdicionalDisponibles.forEach(adicional => {                    //por cada objeto servicioAdicional
        let cantidad = 0;
        let opcionesValidas = document.getElementById(`option${adicional.id}`);//todos sus option (x ejemplo: todos los name=opcion1)
         cantidad=parseInt(opcionesValidas.options[opcionesValidas.selectedIndex].value); //cantidad de uñas elegida
        if (cantidad != 0){
            sumador += adicional.precioXCant(cantidad);   //sumo el precio del servicio
            listaServicioUsuario.push(new servicioElegidos(adicional.id, adicional.nombre, adicional.precioUnitario, adicional.precioXCant(cantidad)));//guardo lo elegido
        }        
    });   
    return sumador;
}

function mostrarServiciosElegidos(){
    //retorna un string con todos servicios que seleccionó el usuario:
    let result =`<tr><th>Servicio</th><th>Precio Unitario</th><th>Precio total</th></tr>`;
    listaServicioUsuario.forEach(element => {
        result += (element.mostarServicio());
    });
    return result;
}

function mostrarResultado(untotal){
    let padre=document.getElementById("resultado");
    try{
        let  hijoAnterior = document.getElementById("tablaResultado");
        padre.removeChild(hijoAnterior);
    }catch(e){
        console.log(e)
    }
    let tabla = document.createElement("table");
    tabla.setAttribute("class","table table-dark");
    tabla.setAttribute("id","tablaResultado");
    tabla.innerHTML = (`${mostrarServiciosElegidos()}
                <tr class="table-active"><th colspan="2">El precio Final estimado es:</th><th>$${untotal}</th></tr>`);
    padre.appendChild(tabla);
    padre.style = "display:''";
}

function calcularPrecio(e){
    e.preventDefault();
    let total = 0;
    let nodoContenedor = document.getElementById("servicio");
    let todasLasOpciones = nodoContenedor.querySelectorAll("input");

    listaServicioUsuario=[];
    todasLasOpciones.forEach(element => {
        if (element.checked){servicioElegido= element.id}
        }
    );
    agregarServicioBase(servicioElegido);
    total += precioBase(servicioElegido) + agregarServiciosAdicionales();
    mostrarResultado(total);
}

function borrarSelecciones(){
    listaServicioUsuario=[];
    let padre = document.getElementById("resultado");
    padre.style = "display:none";
    try{
        let  hijoAnterior = document.getElementById("tablaResultado");
        padre.removeChild(hijoAnterior);
    }catch(e){
        console.log(e)
    }
}