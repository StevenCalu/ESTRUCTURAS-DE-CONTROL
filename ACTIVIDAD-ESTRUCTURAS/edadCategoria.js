
function clasificarEdad() {
  let edad = prompt("Ingresa tu edad:");
  let mensaje = "";

  if (!edad && edad !== 0) {
    mensaje = "Entrada no válida. Por favor ingresa un número.";
  } else if (edad < 0) {
    mensaje = "Edad no válida";
  } else if (edad <= 12) {
    mensaje = "Niño";
  } else if (edad <= 17) {
    mensaje = "Adolescente";
  } else if (edad <= 59) {
    mensaje = "Adulto";
  } else {
    mensaje = "Adulto mayor";
  }

  document.getElementById("resultado").innerHTML = `<p>${mensaje}</p>`;
}
