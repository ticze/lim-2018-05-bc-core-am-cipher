let numbers = document.getElementById("Desplazamiento");// obteniendo el desplaamiento 
let  encryptText = document.getElementById("texto");// obteniendo el texto

let btnEncode = document.getElementById("Cifrar");
// dando evento al boton para codificar
btnEncode.addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("resultado").innerHTML = cipher.encode(numbers.value, encryptText.value);
});
 
let btnDecode = document.getElementById("Descifrar");
// dando evento al boton para decodificar 
btnDecode.addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("resultado").innerHTML = cipher.decode(numbers.value, encryptText.value);
});