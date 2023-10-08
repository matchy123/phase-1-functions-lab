// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let block = 42 
    return Math.abs(someValue - block);
    }
    // console.log(distanceFromHqInBlocks(43));
    // console.log(distanceFromHqInBlocks(50));
    // console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(somevalue){
    let block = 42;
    return somevalue = Math.abs((somevalue - block)* 264);

}
// console.log(distanceFromHqInFeet(43));
// console.log(distanceFromHqInFeet(50));
// console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(startValue, destinationValue){
    //let block = 42
    return Math.abs((destinationValue - startValue) * 264);
}
// console.log(distanceTravelledInFeet(43, 48));
// console.log(distanceTravelledInFeet(50, 60));
// console.log(distanceTravelledInFeet(34, 28));

function calculatesFarePrice(start, destination){
    let cost = 0;
    let distance = Math.abs((destination - start)* 264);
    let charges = (2/100);
    
    if(distance <= 400){
        return cost = 0;
    }
    else if(distance >= 400 && distance <= 2000){
        return cost = (distance - 400) * charges;
    }
    else if(distance >= 2000 && distance <= 2500){
        return cost = 25;
    }
    else{
        return cost = "cannot travel that far";
    }

}
// console.log(calculatesFarePrice(43, 44));
// console.log(calculatesFarePrice(34, 32));
// console.log(calculatesFarePrice(50, 58));
// console.log(calculatesFarePrice(34, 24));