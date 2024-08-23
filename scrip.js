const textArea = document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"

}

function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
console.table(matrizCodigo) //Solo es para comprobar que la variable esta correcta
   stringEncriptada = stringEncriptada.toLowerCase() //convertirlas en minúsculas

   for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
      
    }

   }

   return stringEncriptada

}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
  

}


   function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
console.table(matrizCodigo) //Solo es para comprobar que la variable esta correcta
   stringDesencriptada = stringDesencriptada.toLowerCase()

   for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
      
    }

   }

   return stringDesencriptada


}

function btnCopiar() {
    const textoDesencriptado = desencriptar(textArea.value);  // Función desencriptar con el valor de textArea
    mensaje.value = textoDesencriptado;  // Asigna el valor desencriptado 
    textArea.value = "";  // Limpia el textArea después de copiar
}
