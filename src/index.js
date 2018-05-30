let numeros = document.getElementById("Desplazamiento");//obteniendo el desplaamiento 
let textocifrar = document.getElementById("texto");//obteniendo el texto

let codificar = document.getElementById("Cifrar");
//dando evento al boton para codificar
codificar.addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("resultado").innerHTML= cipher.encode(numeros.value,textocifrar.value);
});
 
let decodificar = document.getElementById("Descifrar");
//dando evento al boton para decodificar 
decodificar.addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("resultado").innerHTML = cipher.decode(numeros.value,textocifrar.value);
});