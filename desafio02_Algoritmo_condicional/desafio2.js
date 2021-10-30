const diametro=parseFloat(prompt("Diámetro de la rueda"));
const grosor= parseFloat(prompt("¿Grosor de la rueda"));

if (diametro > 1.4){
    alert("La rueda es para un vehículo grande");
    if (grosor < 0.4){
        alert("El grosor para esta rueda es inferior al recomendado");
    }
}
else if(diametro <= 1.4 && diametro > 0.8){
    alert("La rueda es para un vehículo mediano");
    if (grosor < 0.25){
        alert("El grosor para esta rueda es inferior al recomendado");
    }
}
else {
    alert("La rueda es para un vehículo pequeño");
}
