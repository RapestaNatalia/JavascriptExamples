1)Abrir node.js cmd
2)cd en carpeta dónde estamos
3)Ya está instalado express en el proyecto, se hizo con el comando:
  npm install express -g
4)Ejecutar node servidor.js en consola
5)Luego en navegador 127.0.0.1/8989
6)También probar 127.0.0.1/8989/cursos

Para entender porque 5 y 6 retornan esos valores, ir a servidor.js y observar las líneas 4 y 5.
Dependiendo que es lo que se llama en navegador, son las funciones que se ejecutan:
aplicacion.get("/",inicio);
aplicacion.get("/cursos",cursos);

Nota:
Siempre que se cambie algo de servidor.js hay que volver a ejecutar node servidor.js en consola.