const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');
const colors = require('colors'); // Agrega colores a la terminal


console.clear(); // Limpia la consola antes de ejecutar nuestro programa.
console.log("yards: ", argv); //Imprime el objeto con los argumentos de la línea de comandos pasados

//Ejecuta la aplicacion
crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(colors.brightGreen('Se creó el archivo: '), colors.brightYellow(nombreArchivo)))
  .catch((err) => console.log(err));
