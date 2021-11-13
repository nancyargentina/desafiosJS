/*------------------------Comienzo MAIN------------------------ */
//manejo inicial de variables para almacenar los precios
const esculpidas= 2000;
const semi= 900;
const nailartsimple=new ServicioAdicional(1,"Nailart simple",250,500);
const ilustracion=new ServicioAdicional(2,"Ilustración de personaje",1000,5000);
const glitter=new ServicioAdicional(3,"Full glitter",250,400);
const cromado=new ServicioAdicional(4,"Cromado",350,700);
const encapsulado=new ServicioAdicional(5,"Encapsulados",350,650);

let servicioMain = prompt("Ingrese el servicio que quiere. esculpida o semipermanente").toLowerCase();
let total= precioBase() + agregarServicios();
alert (`El precio estimado en las 10 uñas es: $${total}`);