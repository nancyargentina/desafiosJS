/*------------------------Clases------------------------*/
class servicioBase{
    constructor(unId,unNombre,unPrecio){
        this.id = unId;
        this.nombre = unNombre;
        this.precio = unPrecio;
    }
    mostrarTituloDeServicio(){
        return(`${this.id}. ${this.nombre}\n`);
    }
}
class ServicioAdicional{
    // servicios adicionales que aplica por par de uñas(1 uña por mano)
    constructor(unId,unNombre, unPrecioU, unPrecioFull){
        this.id = unId;
        this.nombre = unNombre;
        this.precioUnitario = unPrecioU;
        this.precioFull = unPrecioFull;
    }
    precioXCant(cantidad){  //calcula el precio del adicional dependiendo en cuantos pares de uñas se aplicaría
        if (cantidad == 5){
            return(this.precioFull);
        }
        return(this.precioUnitario * cantidad);
    }
    mostrarTituloDeServicio(){
        return(`${this.id}. ${this.nombre}\n`);
    }
}
class servicioElegidos{
    // servicios elegidos por el usuario tanto base como adicionales
    constructor(unId,unNombre, unPrecioI, unPrecioTotal){
        this.id = unId;
        this.nombre = unNombre;
        this.precioInicial = unPrecioI;
        this.precioTotal = unPrecioTotal;
    }
    mostarServicio(){
        //return(`${this.nombre} =>   precio inicial: $${this.precioInicial}   precio Total: $${this.precioTotal}\n`);
        return(`<tr><td>${this.nombre}</td>
                    <td>$ ${this.precioInicial}</td>
                    <td>$ ${this.precioTotal}</td></tr>`)
    }
}