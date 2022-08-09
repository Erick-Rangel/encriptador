var textoEncriptar = document.getElementById("texto");
var textoEncriptado = document.getElementById("resultado");

var textoDesencriptar = document.getElementById("texto");
var textoDesencriptado = document.getElementById("resultado");

var image = document.getElementById("image");
var mensaje = document.getElementById("mensaje");
var mensaje2 = document.getElementById("mensaje2");
console.log(mensaje)

function display(){
    image.style.display = "none";
    mensaje.style.display = "none";
    mensaje2.style.display = "none";
}


function encriptar() {
    var texto = textoEncriptar.value;
    var minusculas = texto.toLowerCase();
    var resultado = "";
    for (var i = 0; i < minusculas.length; i++) {
        var letra = minusculas.charAt(i);
        var codigo = letra.charCodeAt(0);
        codigo = codigo + 1;
        letra = String.fromCharCode(codigo);
        resultado = resultado + letra;
    }
    textoEncriptado.value = resultado;
    if(textoEncriptado?.value == ""){
        image.style.display = "block";
        mensaje.style.display = "block";
        mensaje2.style.display = "none";
    } else {
        display();
        document.getElementById("resultado").style.display = "block";
    }

}


function desencriptar() {
    var texto = textoDesencriptar.value;
    var resultado = "";
    for (var i = 0; i < texto.length; i++) {
        var letra = texto.charAt(i);
        var codigo = letra.charCodeAt(0);
        codigo = codigo - 1;
        letra = String.fromCharCode(codigo);
        resultado = resultado + letra;
    }
    textoDesencriptado.value = resultado;
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

    
    alert("Texto copiado");

}
