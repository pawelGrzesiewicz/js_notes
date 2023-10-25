// speed, maxSpeed, engine, brand
// speedUp, slowDown, startEngine, stopEngine


// factory function

function auto(brand, maxSpeed) {
    return {
        speed: 0,
        maxSpeed, //short object notation
        brand,
        engine: false
    }
}


function startEngine(car) {
    if (!car.engine){
        car.engine = true;
        console.log('Silnik Odpalony!')
    } else {
        console.log('Silnik juz był odpalony')
    }
}

function stopEngine(car) {
    if (car.speed === 0){
        car.engine = false;
        console.log('Silnik Zgaszony')
    } else {
        console.log('Zatrzymaj furę wpierw.')
    }
}

function speedUp(car, amount) {
    if (car.engine) {
        car.speed = Math.min(car.speed + amount, car.maxSpeed);
        console.log(`jedziesz z prędkością ${car.speed}`)
    } else {
        console.log('odpal silnik ziomuś')
        // if (car.speed + amount <= car.maxSpeed) {
        //     car.speed += amount;
        // } else {
        //     car.speed = car.maxSpeed
        // }
    }
}

function slowDown(car, amount) {
        car.speed = Math.max(car.speed - amount, 0);
        console.log(`jedziesz z prędkością ${car.speed}`)
    }

const  bmw = auto('bmw', 160);
const  toyota = auto('toyota', 198);

speedUp(bmw, 100);
startEngine(bmw);
speedUp(bmw, 50);
speedUp(bmw, 100);
speedUp(bmw, 100);
stopEngine(bmw);
slowDown(bmw, 100);
slowDown(bmw, 100);
stopEngine(bmw);
