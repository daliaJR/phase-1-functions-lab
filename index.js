// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    if(pickup > 42)
     return pickup - 42;
     else
     return 42 - pickup ;
}

function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * 264;

}

function distanceTravelledInFeet(start, destination){
    let distanceInFeet =  0;
    if(start<destination){
         distanceInFeet = destination -start;
         return distanceInFeet * 264;
    }
    else {
        distanceInFeet =  start - destination;
         return distanceInFeet * 264;
    }

}

function calculatesFarePrice(start, destination){
    let distanceFeet = distanceTravelledInFeet(start, destination);
    // let afterReduce = distanceFeet - 400;
    let price = 0;
    if(distanceFeet <= 400){
        return price;
    }
    else if(distanceFeet > 400 && distanceFeet < 2000){
        price = ((distanceFeet - 400)*2)/100;
        console.log(price);
        return price ;
    }
    else if(distanceFeet > 2000 && distanceFeet < 2500){
        price = 25;
       return price;
    }
    else if(distanceFeet >= 2500){
        return "cannot travel that far";
    }


    
}

calculatesFarePrice(34,32);