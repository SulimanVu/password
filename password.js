function generatePassword(length , lvl, value) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newPassword = '';
  const digits = '0123456789';
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
  if(value > 1){
    for(let i = 0; i < length; i++) {
        
          let manyPass = '';
        for (let j = 0; j < value; j++) {
            if(lvl == 'easy'){
              const randomSymbol = alphabet[Math.floor(Math.random()*52)]
              manyPass += randomSymbol
            }else if(lvl == 'medium'){
              const randomSymbol = alphabet[Math.floor(Math.random()*52)] + digits[Math.floor(Math.random()*10)]
              newPassword += randomSymbol;
            }else if(lvl == 'hard'){
              const randomSymbol = alphabet[Math.floor(Math.random()*52)] + digits[Math.floor(Math.random()*10)] + symbols[Math.floor(Math.random()*28)]
              newPassword += randomSymbol;
            }
          }

      console.log(`${manyPass}\n`)
        }
        }else{
          let onePass = '';
          for (let g = 0; g < length; g++) {
            const randomSymbol = alphabet[Math.floor(Math.random()*52)]
            onePass += randomSymbol
          }
        }

  // for(let i = 0; i < length; i++) {
  //   //const randomSymbol = alphabet[0]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
  //     let manyPass = '';
  //   for (let j = 0; j < value; j++) {
  //       if(lvl == 'easy'){
  //         const randomSymbol = alphabet[Math.floor(Math.random()*52)]
  //         manyPass += randomSymbol
  //       }else if(lvl == 'medium'){
  //         const randomSymbol = alphabet[Math.floor(Math.random()*52)] + digits[Math.floor(Math.random()*10)]
  //         newPassword += randomSymbol;
  //       }else if(lvl == 'hard'){
  //         const randomSymbol = alphabet[Math.floor(Math.random()*52)] + digits[Math.floor(Math.random()*10)] + symbols[Math.floor(Math.random()*28)]
  //         newPassword += randomSymbol;
  //       }
  //     }
  //     console.log(`${manyPass}\n`)
  // }

  
}

    generatePassword(3, 'easy')