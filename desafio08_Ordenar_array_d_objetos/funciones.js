//-----------CLASES-----------
class libro{
    constructor(atitle,aauthor,apage,avol,agen){
        this.titulo=atitle;
        this.autor=aauthor;
        this.paginas=apage;
        this.tomos=avol;
        this.genero=agen;
    }
    mostrarContenido(){
        return(`Título:${this.titulo}, Autor: ${this.autor}, Pág: ${this.paginas}, Tomos:${this.tomos}, Género: ${this.genero}\n`);
    }
}
//-----------FUNCIONES-----------
function ordenarPorString(unArray,unCriterio){
    //ORDENA por titulo, autor, genero
    unArray.sort((a,b)=>{
        a=a[unCriterio].toLowerCase();
        b=b[unCriterio].toLowerCase();
        if (a<b){return -1};
        if (a>b){return 1};
        return 0;
    });
}
function ordenarPorNumero(unArray,unCriterio){
    //ORDENA por cantidad de páginas o cantidad de volúmenes
    unArray.sort((a,b)=>{return (a[unCriterio]-b[unCriterio])});
}

function ordenarLibros(unArray,unCriterio){
    if(unCriterio=="paginas"||unCriterio=="tomos") {
         ordenarPorNumero(unArray,unCriterio);  
    }
    else{
        ordenarPorString(unArray,unCriterio);
    }
}
/*--------------------------MAIN--------------------------*/
let colDeLibros=[new libro("La guerra de los mundos","H.G.Wells",139,1,"novela"),
                new libro("Rosaura a las diez","Marco Denevi",251,1,"novela"),
                new libro("2001 Una odisea espacial","Arthur C. Clarke",203,1,"ciencia ficción"),
                new libro("Dune","Frank Herbert",478,2,"ciencia ficción")]

let criterio= prompt(`COLECCIÓN DE LIBROS\n --------------------------\nIngrese un criterio de ordenación para los libros:\n titulo\n autor\n paginas\n tomos\n genero\n `);
ordenarLibros(colDeLibros,criterio);
let resultado="";
for (const unLibro of colDeLibros) {
    resultado+=unLibro.mostrarContenido();
}
alert(`Libros ordenados por ${criterio}:\n${resultado}`);
