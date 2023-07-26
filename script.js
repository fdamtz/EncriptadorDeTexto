function encriptar() {
  const texto = document.getElementById("texto").value;
  const tituloMensaje = document.getElementById("titulo-mensaje");
  const parrafo = document.getElementById("parrafo");
  const muñeca = document.getElementById("muñeca");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeca.src = "./img/encriptado.png";
  } else {
    muñeca.src = "./img/muñeca.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  const texto = document.getElementById("texto").value;
  const tituloMensaje = document.getElementById("titulo-mensaje");
  const parrafo = document.getElementById("parrafo");
  const muñeca = document.getElementById("muñeca");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeca.src = "./img/desencriptado.png";
  } else {
    muñeca.src = "./img/muñeca.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }


}