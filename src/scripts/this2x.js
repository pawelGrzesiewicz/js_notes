'use strict';

function magic(xd) {
    console.log(this, xd);
}

magic(1);
magic.call({age:42}, 2);
magic.call({name: 'Janusz'}, 3);
magic.apply({city: 'Krakow'}, [5]);

const magic2 = magic.bind({elo: 666});
magic2(4);


class Click {
    constructor(selector) {
        this.selector = selector;
        this.counter = 0;
    }

    click () {
        const tagRef = document.querySelector(this.selector);
        tagRef.addEventListener('click', (event) => {
            event.preventDefault();
            this.counter++;
            console.log(this.counter);
        });
    }
}

// const tag = new Click('[type="submit"]');
// tag.click();
// console.log(tag.selector);

String.prototype.capitalize = function () {
    return this[0].toLowerCase() + this.slice(1);
}

'ala ma kota'.capitalize()