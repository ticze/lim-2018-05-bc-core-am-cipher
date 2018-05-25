var numeros = document.getElementById("Desplazamiento");

numeros.addEventListener("input", function(event){
  var valordelinput = event.target.value; 
  // valordelinput = convertiranumero(valordelinput);
  document.getElementById("numero1").innerHTML = valordelinput;
  cipher.encode(valordelinput)
//console.log(valordelinput)
})

var textocifrar = document.getElementById("texto");

textocifrar.addEventListener("input",function(event){
  var valortexto = event.target.value;
  document.getElementById("resultado").innerHTML = valortexto
 })
 
var codificar = document.getElementById("Cifrar");

codificar.addEventListener("click",function(event){
   console.log("funciono:)!") ;
   //var valorcifrado = (valortexto - 65 + valordelinput) %26 +a65  
   //console.log(valorcifrado)
})