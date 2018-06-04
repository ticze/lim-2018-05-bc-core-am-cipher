window.cipher = {
  encode : (offset, string) => { 
    let displacementValue = parseInt(offset);
    let textResult = '';
    for(let i = 0; i < string.length ; i++) {
      const asciiNum = string.toUpperCase().charCodeAt(i);
      if(asciiNum === 32) {
        textResult += ' ';
      } else if(asciiNum >= 48 && asciiNum <= 57 ) {
        const formulaNumber = (asciiNum - 48 + displacementValue) %10 +48;// formula para cifrar numeros (%10 = cantidad de numeros desde 0 a 9)
        textResult += String.fromCharCode(formulaNumber);
      } else {
        const formulaLetters = (asciiNum - 65 + displacementValue) %26 +65;
        textResult += String.fromCharCode(formulaLetters);
      }
    }
    return textResult;  
  },
  
  decode : (offset, string) => {
    let displacementValue = parseInt(offset);
    let textResult = '';
    for(let i=0; i < string.length ; i++) {
      const asciiNum = string.toUpperCase().charCodeAt(i);
      if(asciiNum === 32) {
        textResult += ' ';
      } else if(asciiNum>=48 && asciiNum <= 57 ) {
        const formulaNumber = (asciiNum + 48 + displacementValue) %10 +48;// formula  para decifrar numeros
        textResult += String.fromCharCode(formulaNumber);
      } else {
        const formulaLetters = (asciiNum + 65 - displacementValue) %26 +65;
        textResult += String.fromCharCode(formulaLetters);
      }
    }
    return textResult;
  } ,

  createCipherWithOffset: (offset) => {
    return {
      encode: (string) => {
        return cipher.encode(offset, string)
      },
      decode: (string) => {
        return cipher.decode(offset, string)
      }
    }
  }
};