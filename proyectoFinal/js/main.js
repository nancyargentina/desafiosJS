/*------------------------Comienzo MAIN------------------------ */
//manejo inicial de variables para almacenar los precios
const servBaseDisponibles=[ new servicioBase(1,"Esculpidas",2000),new servicioBase(2,"Semipermanente",900),new servicioBase(3,"Postizas",1000)];
const servAdicionalDisponibles= [new ServicioAdicional(1,"Nailart simple",250,500),
                                        new ServicioAdicional(2,"Ilustración de personaje",1000,5000),
                                        new ServicioAdicional(3,"Full glitter",250,400),
                                        new ServicioAdicional(4,"Cromado",350,700),
                                        new ServicioAdicional(5,"Encapsulados",350,650)];

let listaServicioUsuario=[];
let servicioElegido = parseInt(prompt(elegirMenuPrincipal()));
agregarServicioBase(servicioElegido);
let total= precioBase(servicioElegido) + agregarServiciosAdicionales();

alert (`${mostrarServiciosElegidos()}\nEl precio Final estimado es: $${total}`);