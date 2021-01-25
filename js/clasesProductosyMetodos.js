//clase
class ParPrecio{
    constructor(cantidad,precio){
        this.cantidad=cantidad;
        this.precio=precio;
    }
};
class Producto {
    constructor(nombre, precios,disclaimer) {
      this.nombre = nombre;
      this.precios = precios.slice();
      this.disclaimer = disclaimer;
    }
};


const colProducto = [
    new Producto("pan",[new ParPrecio("1/2","1.000"),new ParPrecio("1","2.000")],"este es un disclaimer")
];

console.log(colProducto);


//export { cube, foo, graph };
//import { cube, foo, graph } from 'my-module';
