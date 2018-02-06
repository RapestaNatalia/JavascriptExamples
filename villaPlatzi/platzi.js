var vp=document.getElementById("villaplatzi");
var papel= vp.getContext("2d");


/*VACA*/
var vaca={
  url:"vaca.png",
  cargarOk:false
}
var cantidad= aleatorio(10,30);
vaca.imagen= new Image();
vaca.imagen.src=vaca.url;

vaca.imagen.addEventListener("load",cargarVaca);

function cargarVaca(){
  vaca.cargarOk=true;
  vacasFixPos();
  dibujar();

}
/*FONDO*/

var fondo={
  url:"tile.png",
  cargarOk:false
}
fondo.imagen= new Image();
fondo.imagen.src=fondo.url;


fondo.imagen.addEventListener("load",cargarFondo);

function cargarFondo(){
  fondo.cargarOk=true;
  dibujar();
}

/*CERDO*/

var cerdo={
  url:"cerdo.png",
  cargarOk:false
}
cerdo.imagen= new Image();
cerdo.imagen.src=cerdo.url;


cerdo.imagen.addEventListener("load",cargarCerdo);

function cargarCerdo(){

  cerdo.cargarOk=true;
  dibujar(x,y);
}

/*POLLO

var pollo={
  url:"pollo.png",
  cargarOk:false
}
pollo.imagen= new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);

function cargarPollo(){
  pollo.cargarOk=true;
  dibujar();
}*/
var array=[];
function vacasFixPos(){


for(v=0;v<cantidad;v++){
var x1=aleatorio(0,7);
var y1=aleatorio(0,7);
x1=x1*60;
y1=y1*60;
array.push({"x1":x1,"y1":y1});
}

}
function dibujar(x,y){
  console.log(cantidad);
  if(fondo.cargarOk==true){
    papel.drawImage(fondo.imagen,0,0);
  }
  if(cerdo.cargarOk==true && x && y){

      papel.drawImage(cerdo.imagen,x,y);
    }

  if(vaca.cargarOk==true){
    for(var i=0;i<array.length;i++){
      var pos=array[i];
      papel.drawImage(vaca.imagen,pos.x1,pos.y1);
    }
    }

  /*  if(pollo.cargarOk==true){
      for(v=0;v<cantidad;v++){
        var x=aleatorio(0,5);
        var y=aleatorio(0,5);
        var x=x*80;
        var y=y*80;
        papel.drawImage(pollo.imagen,x,y);
      }
    }*/
  }



  function aleatorio(min,max){
    var resultado;
    resultado= Math.floor(Math.random()*(max-min+1))+min;
    return resultado;
  }
