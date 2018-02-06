 var teclas={
   UP:38,
   DOWN:40,
   LEFT:37,
   RIGHT:39
 };

document.addEventListener("keydown",dibujarTeclado);

var x=150;
var y=150;


function dibujarTeclado(evento){
var colorcito="blue";
var movimiento=10;
switch (evento.keyCode) {
  case teclas.DOWN:
    dibujar(x,y+movimiento);
    y=y+movimiento;
    break;
  case teclas.UP:
    dibujar(x,y-movimiento);
    y=y-movimiento;
  break;
  case teclas.LEFT:
    dibujar(x-movimiento,y);
    x=x-movimiento;
  break;
  case teclas.RIGHT:
    dibujar(x+movimiento,y);
    x=x+movimiento;
  break;
  default:
    console.log("otra tecla");
  break;
}
}
