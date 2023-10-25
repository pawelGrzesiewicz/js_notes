// speed, maxSpeed, engine, brand
// speedUp, slowDown, startEngine, stopEngine

// factory function

class Auto {
    constructor(brand, maxSpeed) {
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.brand = brand;
        this.engine = false;
    }

    startEngine() {
        if (!this.engine) {
            this.engine = true;
            console.log('Silnik odpalony!');
        } else {
            console.log('Silnik już był odpalony');
        }
    }

    stopEngine() {
        if (this.speed === 0) {
            this.engine = false;
            console.log('Silnik zgaszony')
        } else {
            console.log('Zatrzymaj furę wpierw.')
        }
    }

    speedUp(amount) {
        if (this.engine) {
            this.speed = Math.min(this.speed + amount, this.maxSpeed);
            console.log(`jedziesz z prędkością ${this.speed}`)
        } else {
            console.log('odpal silnik ziomuś');
        }
    }

    slowDown(amount) {
        this.speed = Math.max(this.speed - amount, 0);
        console.log(`jedziesz z prędkością ${this.speed}`);
    }
}


class Van extends Auto {
    constructor(brand, maxSpeed, seats) {
        super(brand, maxSpeed);
        this.seats = seats;
    }
}


const bmw = new Van('bmw', 160);
const toyota = new Auto('toyota', 198);

bmw.speedUp(100);
bmw.startEngine();
bmw.speedUp(50);
bmw.speedUp(100);
bmw.speedUp(100);
bmw.stopEngine();
bmw.slowDown(100);
bmw.slowDown(100);
bmw.stopEngine();