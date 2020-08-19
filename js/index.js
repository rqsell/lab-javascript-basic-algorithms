// Iteration 1: Names and Input
let hacker1 = 'Matteus'
console.log("The driver's name is " + hacker1)
let hacker2 = "Rebecca"
console.log( " The driver's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length> hacker2.length){
    console.log(`the driver has ${hacker2.length} characters` )
  }
  else if (hacker1.length> hacker2.length){
    console.log(`the driver has ${hacker1.length} characters`) 
  }
  else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters`)
  };
  let result1 = " "
  for (let i=0; i< hacker1.length; i++) {
    result1 += hacker1.charAt(i) + ' '
  } 
  result1 = result1.toUpperCase();
  console.log(result1);
  
  let result2 = " "
  for (let i=hacker2.length-1; i >= 0; i--) { 
          result2 += hacker2.charAt(i)
  }
  console.log(result2);

// Iteration 3: Loops
for(i=0; i<hacker1.length;i++){
    if(hacker1 == hacker2){
      console.log('What?! You both have the same name?')
      break;
    } else if(hacker1[i]<hacker2[i]){
      console.log("The driver's name goes first.")
      break;
    } else if(hacker2[i]<hacker1[i]){
      console.log("Yo, the navigator goes first definitely.")
      break;
    }
  } 
  