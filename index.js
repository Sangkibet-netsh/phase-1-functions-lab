// Code your solution in this file!
function distanceFromHqInBlocks(someValue)
{
    const myDist = 42
    return someValue-myDist
}
// console.log(distanceFromHqInBlocks(50))

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const myDist=  42;
    if(someValue>myDist){
        return someValue-myDist;
    }
    else{
        return 50-myDist;
    }
}
function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue);
    const myDist=  42;
    if(someValue>myDist){
        return (someValue-myDist)*264;
    }
    else{
         return 8*264;
    }
}
function distanceTravelledInFeet(start, destination){
  return  Math.abs((destination-start)*264);

}
function calculatesFarePrice(start, destination){
  const distanceTravelled=destination-start;
  const feetTravelled = Math.abs(distanceTravelled)*264;
  if(feetTravelled<400){
      return 0;
  }
  else if(feetTravelled<2000){
      return ((feetTravelled)-400 )* 0.02;
  }
  else if(feetTravelled<2500){
      return 25;
  }
else if(feetTravelled>2500){
    return "Cannot travel that far"
}
}