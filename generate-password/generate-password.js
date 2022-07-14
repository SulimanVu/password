function generatePassword(length,str,num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newPassword = '';
  const digits = '0123456789';
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
  let all = [alphabet, digits, symbols];

  if(num){
  for (let q = 0; q < num; q++) {
    for (let i = 0; i < length; i++){
      if(str == 'easy'){
          newPassword += alphabet[Math.floor(Math.random()*alphabet.length)]
      }else if(str == 'medium'){
            let medAll = Math.floor(Math.random()*2)
            if(all[medAll] == alphabet){
              newPassword += alphabet[Math.floor(Math.random()*alphabet.length)]
            }else{
              newPassword += digits[Math.floor(Math.random()*digits.length)]
            }
      }else if(str == 'hight'){
            let medAll = Math.floor(Math.random()*3)
            if(all[medAll] == alphabet){
              newPassword  += alphabet[Math.floor(Math.random()*alphabet.length)]
            }else if(all[medAll] == digits){
              newPassword  += digits[Math.floor(Math.random()*digits.length)]
            }else{
              newPassword += symbols[Math.floor(Math.random()*symbols.length)]
            }
        }
      }newPassword =newPassword + '\n' 
    }return newPassword
  }else{
    for (let i = 0; i < length; i++){
      if(str == 'easy'){
          newPassword += alphabet[Math.floor(Math.random()*alphabet.length)]
      }else if(str == 'medium'){
            let medAll = Math.floor(Math.random()*2)
            if(all[medAll] == alphabet){
              newPassword += alphabet[Math.floor(Math.random()*alphabet.length)]
            }else{
              newPassword += digits[Math.floor(Math.random()*digits.length)]
            }
      }else if(str == 'hight'){
            let medAll = Math.floor(Math.random()*3)
            if(all[medAll] == alphabet){
              newPassword  += alphabet[Math.floor(Math.random()*alphabet.length)]
            }else if(all[medAll] == digits){
              newPassword  += digits[Math.floor(Math.random()*digits.length)]
            }else{
              newPassword += symbols[Math.floor(Math.random()*symbols.length)]
            }
        }
      }return newPassword
  }
}

console.log(generatePassword(4, 'easy', 5))


//   function passes(num){
//     for (let i = 0; i < num; i++) {
//       console.log(generatePassword(3, 'hight'))
//     }
//   }

//  passes(5)



// if(newPassword.length == num){
//   newPassword += '\n'
// }
