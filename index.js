function scuberGreetingForFeet(someValue){
  let greeting;
  if (someValue <= 400) {
    greeting = `This one is on me!`;
  }
  else if (someValue <= 2000) {
      greeting = `That will be twenty bucks.`;
    }
    else 
      if (someValue <= 2500) {
        greeting = `I will gladly take your thirty bucks.`
      }
      else
        if (someValue > 2500) {
          greeting = `No can do.`
        }
  
  return greeting;
}

function ternaryCheckCity(city){
  let greeting;
  if (city === `NYC`) {
    greeting = `Ok, sounds good.`;
  }
  else
    if (city !== `NYC`) {
      greeting = `No go.`;
    }
  return greeting;
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case `generous`: 
     tip = `Thank you so much.`;
    break;
    case `not as generous`: 
     tip =`Thank you.`;
    break;
    default: tip = `Bye.`
  }
  return tip;
}