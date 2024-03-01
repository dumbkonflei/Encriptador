const campo_texto = document.querySelector("#texto-encriptador");
const campo_mensaje = document.querySelector("#campo-mensaje");
var regex = /^[a-z \n]+$/;
const matriz_code = [
  ["e", "enter"],
  ["a", "ai"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];
function btnEncriptar() {
  if (campo_texto.value === "" || campo_texto.length === 0) {
    alert("El mensaje esta vacio");
  } else {
    if (regex.test(campo_texto.value)) {
      const texto = Encriptar(campo_texto.value);
      return (campo_mensaje.value = texto);
    } else {
      return alert("No se permiten Mayusculas o caracteres especiales");
    }
  }
}
function btnDesencriptar() {
  if (campo_texto.value === "" || campo_texto.length === 0) {
    alert("El mensaje esta vacio");
  } else {
    if (regex.test(campo_texto.value)) {
      const texto = Desencriptar(campo_texto.value);
      return (campo_mensaje.value = texto);
    } else {
      return alert("No se permiten Mayusculas o caracteres especiales");
    }
  }
}

function Encriptar(fraseEncriptada) {
  for (let i = 0; i < matriz_code.length; i++) {
    if (fraseEncriptada.includes(matriz_code[i][0])) {
      fraseEncriptada = fraseEncriptada.replaceAll(
        matriz_code[i][0],
        matriz_code[i][1]
      );
    }
  }
  return fraseEncriptada;
}
function Desencriptar(fraseEncriptada) {
  matriz_code.reverse();
  for (let i = 0; i < matriz_code.length; i++) {
    if (fraseEncriptada.includes(matriz_code[i][1])) {
      fraseEncriptada = fraseEncriptada.replaceAll(
        matriz_code[i][1],
        matriz_code[i][0]
      );
    }
  }
  return fraseEncriptada;
}
function copiar() {
  if (campo_mensaje.value === "") {
    alert("No hay mensaje que copiar");
  } else {
    return (
      navigator.clipboard.writeText(campo_mensaje.value) &&
      alert("Mensaje Copiado")
    );
  }
}
limpiarCaja = () => (document.getElementById("texto-encriptador").value = "");
limpiarTexto = () =>(document.getElementById("campo-mensaje").value ="");