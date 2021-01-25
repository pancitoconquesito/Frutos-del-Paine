//clase
class ParPrecio{
    constructor(cantidad,precio){
        this.cantidad=cantidad;
        this.precio=precio;
    }
};
class Producto {
    constructor(nombre, precios,disclaimer,dirImagen) {
      this.nombre = nombre;
      this.precios = precios.slice();
      this.disclaimer = disclaimer;
      this.dirImagen = dirImagen;
    }
};

//funcion crear avisos
function crearAvisos(colProducto){
    //obtener cont .all
    const contALL = document.querySelector('.all');
    //crear fragmento
    var fragment = document.createDocumentFragment();
    for(productoActual of colProducto){
        //cont
        let contNew = document.createElement('DIV');
        contNew.setAttribute("class","cont");

        //img
        let imgCont = document.createElement('DIV');
        imgCont.setAttribute("class","imgcont"); 
        let newImg = document.createElement('IMG');
        newImg.setAttribute("src","img/"+productoActual.dirImagen);
        newImg.setAttribute("alt","foto de " + productoActual.nombre);
        newImg.setAttribute("title",productoActual.nombre);
        //add
        imgCont.appendChild(newImg);
        contNew.appendChild(imgCont);

        //contp
        let contP = document.createElement('DIV');
        contP.setAttribute("class","contp");
        let newH3 = document.createElement('H3');
        newH3.textContent=productoActual.nombre;
        //add h3
        contP.appendChild(newH3);
        for(precioActual of productoActual.precios){
            let newP = document.createElement('P');
            newP.textContent=precioActual.cantidad + " KILO --- $" +precioActual.precio;
            //add p
            contP.appendChild(newP);
        }
        contNew.appendChild(contP);

        //disclaimer
        let newDis = document.createElement('DIV');
        newDis.setAttribute("class","disclaimer");
        let newPDis = document.createElement('P');
        newPDis.textContent=productoActual.disclaimer;
        //add
        newDis.appendChild(newPDis);
        contNew.appendChild(newDis);
        
        //add all a fragmento
        fragment.appendChild(contNew);
        
    }
    //add a pagina
    contALL.appendChild(fragment);
}
//get pagina
const tipo = document.querySelector('.titulo');
if(tipo.innerHTML == 'Frutos secos y Semillas'){
    console.log('BIEN');
}else   console.log('MAL');
//agregar productos
let colProducto =[];
switch(tipo.innerHTML){
    case "Conservas en Vidrio":{
        colProducto = [
            
        ];
        break;
    }
    case "Frutos secos y Semillas":{
        colProducto = [
            new Producto("pan",[new ParPrecio("1/2","1.000"),new ParPrecio("1","2.000")],"este es un disclaimer","pan.png"),
            new Producto("pan2",[new ParPrecio("1/2","1.000"),new ParPrecio("1","2.000"),new ParPrecio("2","4.000")],null,"pan.png")
        ];
        break;
    }
    case "Legumbres":{
        colProducto = [
            
        ];
        break;
    }
    case "Miel y Manjar":{
        colProducto = [
            
        ];
        break;
    }
    case "Harinas":{
        colProducto = [
            
        ];
        break;
    }
    case "Paltas y Huevos":{
        colProducto = [
            
        ];
        break;
    }
};

//llamar a funcion y crear avisos
crearAvisos(colProducto);
