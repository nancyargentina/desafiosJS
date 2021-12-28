$("input[name='servicio']").on("change",function(){
   let seleccionado = $("input:radio[name=servicio]:checked").val();
   let valor= $(`label.btn.boton.btn-primary[for=${seleccionado}]`)
   $("h3").html(`Seleccionado:${valor.html()}`);

    $("h3").fadeIn().delay(200).fadeOut();
}
)

//$("h3").fadeIn();

