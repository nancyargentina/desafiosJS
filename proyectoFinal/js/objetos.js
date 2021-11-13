/*------------------------Clases------------------------*/
class ServicioAdicional{
    // servicios adicionales que aplica por par de uñas(1 uña por mano)
    constructor(unId,unNombre, unPrecioU, unPrecioFull){
        this.id=unId;
        this.nombre= unNombre;
        this.precioUnitario=unPrecioU;
        this.precioFull=unPrecioFull;
    }
    precioXCant(cantidad){  //calcula el precio del adicional dependiendo en cuantos pares de uñas se aplicaría
        if (cantidad==5){
            return(this.precioFull);
        }
        return(this.precioUnitario * cantidad);
    }
}