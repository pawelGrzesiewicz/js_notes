// speed, maxSpeed, engine, brand
// speedUp, slowDown, startEngine, stopEngine


// factory function

function Auto(brand, maxSpeed) {
    this.speed = 0;
    this.maxSpeed =  maxSpeed;
    this.brand = brand;
    this.engine =  false;
}



Auto.prototype.startEngine = function () {
    if (!this.engine){
        this.engine = true;
        console.log('Silnik Odpalony!')
    } else {
        console.log('Silnik juz był odpalony')
    }
}

Auto.prototype.stopEngine = function () {
    if (this.speed === 0){
        this.engine = false;
        console.log('Silnik Zgaszony')
    } else {
        console.log('Zatrzymaj furę wpierw.')
    }
}

Auto.prototype.speedUp = function (amount) {
    if (this.engine) {
        this.speed = Math.min(this.speed + amount, this.maxSpeed);
        console.log(`jedziesz z prędkością ${this.speed}`)
    } else {
        console.log('odpal silnik ziomuś')
        // if (car.speed + amount <= car.maxSpeed) {
        //     car.speed += amount;
        // } else {
        //     car.speed = car.maxSpeed
        // }
    }
}

Auto.prototype.slowDown = function (amount) {
    this.speed = Math.max(this.speed - amount, 0);
    console.log(`jedziesz z prędkością ${this.speed}`)
}

const  bmw = new Auto('bmw', 160);
const  toyota = new Auto('toyota', 198);

bmw.speedUp(100);
bmw.startEngine();
bmw.speedUp(50);
bmw.speedUp(100);
bmw.speedUp(100);
bmw.stopEngine();
bmw.slowDown(100);
bmw.slowDown(100);
bmw.stopEngine();
