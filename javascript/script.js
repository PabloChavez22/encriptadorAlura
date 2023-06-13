/*alert("Bienvenid@");*/

var btn_encriptar = document.querySelector(".encriptar");
var btn_desencriptar = document.querySelector(".desencriptar");
var btn_copiar = document.querySelector(".copiar");

btn_encriptar.onclick = empieza1;
btn_desencriptar.onclick = empieza2;
btn_copiar.onclick = copiando;

var res = document.querySelector(".si_hay_texto");
var foto = document.querySelector(".imagen_der");
var info = document.querySelector(".titulo_sin_mensaje");
var parrafo = document.querySelector(".texto_sin_mensaje");

var arreglo = [];
var ar1 = [[/a/gim,/e/gim,/i/gim,/o/gim,/u/gim,/aimes/gim],['ai','enter','imes','ober','ufat','ai']];/*aca puse aimes a ai.error corregido*/
var ar2 = [[/ai/gim,/enter/gim,/imes/gim,/ober/gim,/ufat/gim],['a','e','i','o','u']];

function empieza1() {
    probando();
    arreglo = ar1;
    encr1();
    document.querySelector(".titulo_mensaje").textContent = "Mensaje Encriptado :";
}

function empieza2() {
    probando();
    arreglo = ar2;
    encr1();
    document.querySelector(".titulo_mensaje").textContent = "Mensaje Desencriptado :";
}

function encr1() {
    var frase = document.getElementById("texto").value.toLowerCase();

    var textEncriptado = frase.replace(arreglo[0][0],arreglo[1][0]);
    textEncriptado = textEncriptado.replace(arreglo[0][1],arreglo[1][1]);
    textEncriptado = textEncriptado.replace(arreglo[0][2],arreglo[1][2]);
    textEncriptado = textEncriptado.replace(arreglo[0][3],arreglo[1][3]);
    textEncriptado = textEncriptado.replace(arreglo[0][4],arreglo[1][4]);
    textEncriptado = textEncriptado.replace(arreglo[0][5],arreglo[1][5]);

    document.getElementById("resultado").innerHTML = textEncriptado;
}

function copiando(){
    var copyText = document.getElementById("resultado");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value)
      .then(() => {
        //alert("Copiado al portapapeles");
        document.getElementById("texto").value = "";
        exito();
        mostrarAlerta();
      })
      .catch(() => {
        //alert("something went wrong");
        excepcion();
        mostrarAlerta();
      });
}

function ocultar(){
    foto.classList.add("ocultar");
    info.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
function mostrar(){
    foto.classList.remove("ocultar");
    info.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");
}

function probando() {
    var value = document.getElementById('texto').value;
        if (value === '') {
            aviso();
            mostrarAviso();
            res.classList.add("ocultar");
            mostrar();
        }else{
            ocultar();
            res.classList.remove("ocultar");
        }
}

//cartelitos
var divAlerta = document.getElementById('alerta');

function exito(){
    divAlerta.textContent = "Copiado al portapapeles!";
    divAlerta.classList.add('alert-success');
}

function excepcion() {
    divAlerta.textContent = "Se ha producido un error al copiar al portapaples";
    divAlerta.classList.add('alert-danger');
}

function mostrarAlerta() {
    divAlerta.classList.remove('ocultar');
    divAlerta.classList.add('visible');
    setTimeout(ocultarAlerta, 1500);
}

function ocultarAlerta() {
    divAlerta.innerText = '';
    divAlerta.classList.remove('alert-success', 'alert-danger','visible');
    divAlerta.classList.add('ocultar');
}

//---aviso vacio ---
cuadro_vacio = document.getElementById('alerta_vacio');
function aviso() {
    cuadro_vacio.textContent = "Cuadro vacio";
    //cuadro_vacio.classList.add('alert-error');
}

function mostrarAviso() {
    cuadro_vacio.classList.remove('ocultar');
    cuadro_vacio.classList.add('alert-error');
    setTimeout(ocultarAviso,1500);
}

function ocultarAviso(){
    cuadro_vacio.innerText = '';
    cuadro_vacio.classList.remove('alert-error');
    cuadro_vacio.classList.add('ocultar');
}

//---titulo variable---