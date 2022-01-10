const { describe } = require("yargs");

const argv = require("yargs")
  .option("b", { //Establecemos un comando 'b' y creamos un objeto de configuracion para el.
    alias: "base", // 'b' es la bandera de 'base'
    type: "number", // 'b' es tipo number.
    demandOption: true, // Hacemos obligatorio recibir un argumento 'base' o 'b'
    describe: "Es la base de la tabla de multiplicar" //Descripcion del comando cuando se ejecute --help
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false, //por default es false, no necesita validarse ya que en caso de existir solo puede ser true.
    describe: "Muestra la tabla en consola"
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10, //por default es 10 (normal)
    describe: "Numero hasta donde quieres la tabla"
  })
  .check((argv, options) => { // Check verifica que se cumplan ciertas condiciones en los argumentos proporcionados.
    if (isNaN(argv.b)) { // Si base no es un numero.
      throw "La base tiene que ser un número";
    }
    if (isNaN(argv.h)) { // Si hasta no es un numero.
      throw "El numero hasta donde quieres la tabla debe ser un numero";
    }
    return true; //Si es un numero se ejecuta la aplicación.
  })
  .argv; // argv retorna un objeto con los argumentos de la línea de comandos pasados ​​cuando se lanzó el proceso de nuestra aplicación (node app '?').

module.exports = argv;
