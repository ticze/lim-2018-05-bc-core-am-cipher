var numeros = document.getElementById("Desplazamiento");
var textocifrar = document.getElementById("texto");

var codificar = document.getElementById("Cifrar");
codificar.addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("resultado").innerHTML= cipher.encode(numeros.value,textocifrar.value);
});
 
var decodificar = document.getElementById("Descifrar");
decodificar.addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("resultado").innerHTML = cipher.decode(numeros.value,textocifrar.value);
});