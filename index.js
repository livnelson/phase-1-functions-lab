const headquarters = 42;

function  distanceFromHqInBlocks(location) {
    return Math.abs(location - headquarters)   
}

function distanceFromHqInFeet(location) {
    return Math.abs(location - headquarters) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        let price = 0;
        return price;
    } else if (distanceTravelledInFeet(start, destination) < 2000) {
        let price = ((distanceTravelledInFeet(start, destination) - 400) * .02);
        return price;
    } else if (distanceTravelledInFeet(start, destination) < 2500) {
        let price = 25;
        return price;
    } else if (distanceTravelledInFeet(start, destination,) > 2500) {
        return 'cannot travel that far';
    }
}