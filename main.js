// Importamos la librería readline para poder leer la entrada del usuario
const readline = require("readline").createInterface({
  input: process.stdin, // Entrada
  output: process.stdout, // Salida
});

/**
 * @name input
 * Función que se encarga de pedir un texto con un mensaje al usuario
 * @param {String} message
 * @returns {Promise<String>} La respuesta del usuario
 */
const input = (message) => {
  return new Promise((resolve) => {
    readline.question(message, (answer) => {
      readline.close(); // Cerrar la interfaz después de recibir la entrada
      resolve(answer);
    });
  });
};

/**
 * Función principal que se encarga de pedir datos y mostrar un mensaje
 */
const main = async () => {
  try {
    let data = await input("Por favor, ingresa el número: 😊 ");
    data = parseInt(data); // Realizar la conversión a número
    console.log(`¡Hola! Gracias por ingresar esto: 🎉: ${data}`);
  } catch (error) {
    console.error("Error: ", error);
  }
};

// Ejecutamos la función principal
main();

// Exportamos la función input por si necesitas usarla en otro archivo
module.exports = input;
