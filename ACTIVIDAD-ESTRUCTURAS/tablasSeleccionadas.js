function TablasParesImpares() {
  const tipo = prompt("¿Quieres ver las tablas de multiplicar de números 'pares' o 'impares'?");
  let mensaje = "";

  if (tipo === "pares") {
    mensaje += "<h2>Tablas de multiplicar de números pares:</h2>";
    for (let i = 2; i <= 10; i += 2) {
      mensaje += `<h3>Tabla del ${i}:</h3>`;
      for (let j = 1; j <= 10; j++) {
        mensaje += `${i} x ${j} = ${i * j}<br>`;
      }
      mensaje += "<br>";
    }
  } else if (tipo === "impares") {
    mensaje += "<h2>Tablas de multiplicar de números impares:</h2>";
    for (let i = 1; i <= 19; i += 2) {
      mensaje += `<h3>Tabla del ${i}:</h3>`;
      for (let j = 1; j <= 10; j++) {
        mensaje += `${i} x ${j} = ${i * j}<br>`;
      }
      mensaje += "<br>";
    }
  } else {
    mensaje = "<p>Opción no válida. Por favor, ingresa 'pares' o 'impares'.</p>";
  }

  document.getElementById("resultado").innerHTML = mensaje;
}
