const fs = require("fs"); // Requerir File System paquete de node.js para acceder a la función writeFile y crear un archivo.
const colors = require('colors'); // Agrega colores a la terminal
const crearArchivo = async (base = 5, listar = false, hasta = 10) => { // async transforma esta funcion en una funcion asincrona (Una funcion que retorna una promesa).
  try {
    //Almacenan datos
    let salida = ""; 
    let consola = "";

    // Creamos la tabla
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`; // Datos sin estilos para crear el archivo.txt
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`; // Datos con estilos para mostrar por consola
    }
    //Mostramos la tabla por consola
    if (listar) {
      console.log(colors.brightGreen("---------------------"));
      console.log(colors.brightYellow("Tabla del: "), colors.brightGreen(base));
      console.log(colors.brightGreen("---------------------"));
      console.log(consola);
    }
    //Creamos el archivo.txt con writeFileSync. Recibe la ruta donde deseamos guardar el archivo seguido de su nombre y recibe los datos de salida
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); 
    
    return `tabla-${base}.txt`; // Return arroja el then de esta funcion asincrona donde la llamemos.
  } catch (err) {
    throw err; // throw arroja el reject de esta funcion asincrona donde la llamemos.
  }
};

//Exportar una funcion con node
module.exports = {
  //module es un objeto global en node. Vamos a exportar un objeto
  crearArchivo, // Si una propiedad del objeto apunta hacia una variable con el mismo nombre, esto es redundante asi que solo dejamos el nombre de la variable.
};

//NOTA: Crear archivo con writeFile (Asincrona). Recibe 'nombreArchivo', contenido del archivo, callback que mostrara el error o un mensaje de exito.
//  fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
//     if(err) throw err;
//     console.log('Archivo tabla-5.txt Creado Correctamente');
//  }  )
