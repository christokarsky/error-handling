//errors with try, throw, and catch

try {
    throw "Here's an error!"
} catch (thrownError){
    console.log(`Uh oh! ${thrownError}`)
}

// = Uh oh! Here's an error!

function getCarColor(car) {
    try {
      if (!car){
        throw `Color unknown`
      } else {
        return car.color
      }
    } catch (errorThrown){
      return errorThrown
    }
  }
  
  let car = { make: "Ford", model: "Mustang", color: "Bullet Grey" };
  
  console.log(getCarColor(undefined))

  // = Color unknown

  console.log(getCarCOlor(car));

  // = Bullet Grey
