var textoEncriptar = document.getElementById("texto");
var textoEncriptado = document.getElementById("resultado");

var textoDesencriptar = document.getElementById("texto");
var textoDesencriptado = document.getElementById("resultado");

var image = document.getElementById("image");
var mensaje = document.getElementById("mensaje");
var mensaje2 = document.getElementById("mensaje2");


function display() {
    image.style.display = "none";
    mensaje.style.display = "none";
    mensaje2.style.display = "none";
}


function encriptar() {
    var texto = textoEncriptar.value;
    var minusculas = texto.toLowerCase();
    var resultado = "";
    var letras = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }

    for (var i = 0; i < minusculas.length; i++) {
        var letra = minusculas[i];
        if (letras[letra]) {
            resultado += letras[letra];
        } else {
            resultado += letra;
        }
    }
    textoEncriptado.value = resultado;
    if (textoEncriptado?.value == "") {
        image.style.display = "block";
        mensaje.style.display = "block";
        mensaje2.style.display = "block";
    } else {
        display();
        document.getElementById("resultado").style.display = "block";
        document.getElementById("copiar").style.display = "block";
    }
}

function desencriptar() {
    var texto = textoDesencriptar.value;
    var resultado = "";
        resultado = texto.replace(/ai/g, "a");
        resultado = resultado.replace(/enter/g, "e");
        resultado = resultado.replace(/imes/g, "i");
        resultado = resultado.replace(/ober/g, "o");
        resultado = resultado.replace(/ufat/g, "u");

    textoDesencriptado.value = resultado;
    console.log(resultado);

    if (textoDesencriptado?.value == "") {
        image.style.display = "block";
        mensaje.style.display = "block";
        mensaje2.style.display = "block";
    } else {
        display();
        document.getElementById("resultado").style.display = "block";
    }
}



var botonEncriptar = document.getElementById("encriptar");
botonEncriptar.addEventListener("click", encriptar);

var botonDesencriptar = document.getElementById("desencriptar");
botonDesencriptar.addEventListener("click", desencriptar);





function copiar() {
    var texto = textoEncriptado.value;

    var aux = document.createElement("input");
    aux.setAttribute("value", texto);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    textoEncriptado.value = "";
    image.style.display = "block";
    mensaje.style.display = "block";
    mensaje2.style.display = "block";

    textoEncriptar.value = "";

    alert("Texto copiado");

}
