window.cipher = {
  encode : (offset , string) => { 
    var valorDesplazamiento = parseInt(offset)
    var textoResultado ='';
    for(var i=0; i < string.length ; i++){
      var asciiNum = string.toUpperCase().charCodeAt(i);
      if( asciiNum === 32){
        textoResultado += ' ';
      } else {
        var formula = (asciiNum - 65 + valorDesplazamiento)%26+65 ;
        textoResultado += String.fromCharCode(formula);
      }
    }
    return textoResultado;  
  },
  decode : (offset,string) => {debugger
    var valorDesplazamiento = parseInt(offset)
    var textoResultado ='';
    for(var i=0; i < string.length ; i++){
      var asciiNum = string.toUpperCase().charCodeAt(i);
      if( asciiNum === 32){
        textoResultado += ' ';
      } else {
        var formula = (asciiNum + 65 - valorDesplazamiento)%26+65 ;
        textoResultado += String.fromCharCode(formula);
      }
    }
    return textoResultado;
  }  
};