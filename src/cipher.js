window.cipher = {
  encode : (offset , string) => { 
    let valorDesplazamiento = parseInt(offset)
    let textoResultado ='';
    for(let i=0; i < string.length ; i++){
      const asciiNum = string.toUpperCase().charCodeAt(i);
      if( asciiNum === 32){
        textoResultado += ' ';
      } else {
        const formula = (asciiNum - 65 + valorDesplazamiento)%26+65 ;
        textoResultado += String.fromCharCode(formula);
      }
    }
    return textoResultado;  
  },
  decode : (offset,string) => {
    let valorDesplazamiento = parseInt(offset)
    let textoResultado ='';
    for(let i=0; i < string.length ; i++){
      const asciiNum = string.toUpperCase().charCodeAt(i);
      if( asciiNum === 32){
        textoResultado += ' ';
      } else {
        const formula = (asciiNum + 65 - valorDesplazamiento)%26+65 ;
        textoResultado += String.fromCharCode(formula);
      }
    }
    return textoResultado;
  },
  createCipherWithOffset : (offset) => {
    return{
      encode: (string) => {
        return cipher.encode(offset,string)
      },
      decode: (string) => {
        return cipher.decode( offset,string)
      }
    }
  }
};