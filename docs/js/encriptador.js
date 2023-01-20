function encriptar() {
  var texto = document.getElementById("cod").value;
  var aux = validar(texto);
  if (aux) {
    console.log("El texto original es:", texto);

    var encriptacion = texto
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    console.log("El texto encriptado es:", encriptacion);
    limpiar_pantalla_selectivo();
    mostrar_rdo(encriptacion);
  } else {
    swal(
      "Ha ocurrido un error.",
      "No se cumplen alguna de las condiciones, pudiendo ser que haya: \n -Mayúsculas\n-Acentos\n-Números",
      "error"
    );
  }
}

function desencriptar() {
  var texto = document.getElementById("cod").value;
  var aux = validar(texto);
  if (aux) {
    console.log("El texto encriptado es:", texto);

    var desencriptacion = texto
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    console.log("El texto desencriptado es:", desencriptacion);
    limpiar_pantalla_selectivo();
    mostrar_rdo(desencriptacion);
  } else {
    swal(
      "Ha ocurrido un error.",
      "No se cumplen alguna de las condiciones, pudiendo ser que haya: \n -Mayúsculas\n-Acentos\n-Números",
      "error"
    );
  }
}

function limpiar_pantalla_selectivo() {
  var limpieza = ``;
  document.getElementById("cod").value = "Ingrese el texto aquí";
  document.getElementById("tercer-col").innerHTML = limpieza;
}

function mostrar_rdo(texto) {
  document.getElementById(
    "tercer-col"
  ).innerHTML = `<p class="resultado" id="resultado"> ${texto} </p>`;
  agregar_boton_copiar();
}

function validar(texto) {
  var auxiliar;
  for (let i = 0; i < texto.length; i++) {
    /*valido:
    -1ero que NO sea un numero o que sea un espacio
    -2do me fijo que sea si o si minuscula poniendo el &&
    -3ro pregunto que NO tenga acentos
    */
    if (
      (isNaN(texto[i]) || texto[i] == " ") &&
      texto[i] === texto[i].toLowerCase() &&
      texto[i] != "á" &&
      texto[i] != "é" &&
      texto[i] != "í" &&
      texto[i] != "ó" &&
      texto[i] != "ú"
    ) {
      console.log(texto[i]);
      console.log(texto[i] != "á");
      auxiliar = 1;
    } else {
      return 0;
    }
  }
  return auxiliar;
}

function agregar_boton_copiar() {
  document.getElementById(
    "tercer-col"
  ).innerHTML += `  <input type="button" class="copiar" value="Copiar" id="copiar" onclick="copiar()"/>`;
}

function copiar() {
  var auxiliar = document.createElement("input");
  auxiliar.setAttribute(
    "value",
    document.getElementById("resultado").innerHTML
  );
  document.body.appendChild(auxiliar);
  auxiliar.select();
  document.execCommand("copy");
  document.body.removeChild(auxiliar);
  console.log(auxiliar);
}
