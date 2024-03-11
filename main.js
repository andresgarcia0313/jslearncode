console.log("Bienvenidos");
const readline = require("readline").createInterface({
  //importamos la libreria readline para poder leer la entrada del usuario
  input: process.stdin, //entrada
  output: process.stdout, //salida
});
/**
 * @name input
 * Función que se encarga de pedir un texto con un mensaje al usuario
 * @param {String} message
 * @returns
 */
const input = (message) => {
  return new Promise((resolve) => {
    readline.question(message, resolve);
  });
};
/**
 * Función principal que se encarga de pedir datos y mostrar un mensaje
 */
const main = async () => {
  let data = await input("Por favor, ingresa el número: 😊 ");
  //realizar la conversión a numero
  data=parseInt(data);
  console.log(`¡Hola! Gracias por ingresar esto: 🎉: ${data}`);
};

main(); //Ejecutamos la función principal
