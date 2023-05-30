/*function encriptar(){
    var texto = document.getElementById("ingrese-texto").value;

    var textoEncriptado = texto
    .replace("a","ai")
    .replace("e","enter")
    .replace("i","imes")
    .replace("o","ober")
    .replace("u","ufat")

    if(document.getElementById("ingrese-texto").value.length != 0){
        document.getElementById("mensaje").value=textoEncriptado;
    }else{
        alert("¡Usted No ha Ingresado ningun Mensaje!")
    }
}

function desencriptar(){
    var texto = document.getElementById("ingrese-texto").value;

    var textoDesencriptado = texto
    .replace("ai","a")
    .replace("enter","e")
    .replace("imes","i")
    .replace("ober","o")
    .replace("ufat","u")

    if(document.getElementById("ingrese-texto").value.length != 0){
        document.getElementById("mensaje").value=textoDesencriptado;
    }else{
        alert("¡Usted No ha Ingresado ningun Mensaje!")
    }
}*/

const mensaje=document.querySelector(".mensaje")

function botonEncriptar(){

    if(document.getElementById("ingrese-texto").value.length !=0){
        var mensajeEncriptado= encriptar(document.getElementById("ingrese-texto").value); 
        mensaje.value=mensajeEncriptado;
        mensaje.style.backgroundImage="none";
        var borrador=document.getElementById("no-encontrado");
        borrador.textContent="";
        var borrador2=document.getElementById("parrafo");
        borrador2.textContent="";
        var botonCopiar = document.getElementById("botonCopiar");
        botonCopiar.style.display = 'inline-block';
    }else{
        alert("Usted No Ha Ingresado Nungún Mensaje.");
    }
}

function encriptar(encriptado){
    var llaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    encriptado=encriptado.toLowerCase();

    for(var i=0; i<llaves.length; i++){
        if(encriptado.includes(llaves[i][0])){
            encriptado=encriptado.replaceAll(llaves[i][0], llaves[i][1]);
        }
    }
    return encriptado

}

function botonDesencriptar(){

    if(document.getElementById("ingrese-texto").value.length !=0){
        var mensajedesencriptado= desencriptar(document.getElementById("ingrese-texto").value);
        mensaje.value=mensajedesencriptado;
        mensaje.style.backgroundImage="none";
        var borrador=document.getElementById("no-encontrado");
        borrador.textContent="";
        var borrador2=document.getElementById("parrafo");
        borrador2.textContent="";
        var botonCopiar = document.getElementById("botonCopiar");
        botonCopiar.style.display = 'inline-block';

          
    }else{
        alert("Usted No Ha Ingresado Nungún Mensaje.");
    }

}

function desencriptar(desencriptado){
    var llaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    desencriptado=desencriptado.toLowerCase();

    for(var i=0; i<llaves.length; i++){
        if(desencriptado.includes(llaves[i][1])){
            desencriptado=desencriptado.replaceAll(llaves[i][1], llaves[i][0]);
        }
    }
    return desencriptado

}

/*-------------*/ 
  
function botonCopiar() {

    var content = document.getElementById('mensaje');
    
    content.select();
    document.execCommand('copy');

    alert("El Mensaje ha Sido Copiado");
}

// Muestra el elemento de "cargando"
window.addEventListener('load', function() {
    var mensajeBienvenida = document.getElementById('mensajeBienvenida');
    mensajeBienvenida.classList.remove('oculto');
  
    setTimeout(function() {
      mensajeBienvenida.classList.add('oculto');
    }, 2700); //tiempo para que muestre el mensaje
  });  
  
  
  
  
  

