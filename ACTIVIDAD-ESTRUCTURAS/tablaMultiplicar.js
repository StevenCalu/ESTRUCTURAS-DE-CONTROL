

function TablaMultiplicacion() {
  const numero = prompt("Escribe un número para mostrar su tabla de multiplicar:");

 let mensaje = `<h2>Tabla del ${numero}</h2>`;
  for (let i = 1; i <= 12; i++) {
    mensaje += `<p>${numero} x ${i} = ${numero * i}</p>`;
  }

  document.getElementById("resultado").innerHTML = mensaje;
}
