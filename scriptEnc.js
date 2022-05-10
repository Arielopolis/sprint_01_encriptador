const inputTexto = document.querySelector(".ingtext");
const mensaje = document.querySelector(".resenc");
copiar = document.getElementById('botonCopText');
copiar.style.display = 'none';  


function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    document.getElementById("muneco").style.visibility = "hidden";
    document.getElementById("ningunMens").style.visibility = "hidden";
    document.getElementById("ingreseText").style.visibility = "hidden";
    copiar.style.display = '';
    return stringParaEncriptar;

}

function btndesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function desencriptar(stringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][1])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    document.getElementById("muneco").style.visibility = "hidden";
    document.getElementById("ningunMens").style.visibility = "hidden";
    document.getElementById("ingreseText").style.visibility = "hidden";
    return stringParaEncriptar;

}

function copiartexto(){
    var contenido = document.querySelector('.resenc');
    
    contenido.select();
    document.execCommand('copy');

    alert("copiado");
    document.querySelector('.resenc').value = "";
    document.querySelector(".ingtext").value = "";
    document.querySelector(".ingtext").focus();
}
