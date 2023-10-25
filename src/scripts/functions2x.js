// function expression -> przypisanie deklaracji fn do zmiennej
const doSmth = () => {};
const doSmth1 = function (){};
const doSmth2 = function name(){}; // nie rób tak, bo Paweł będzie zły

// wariancje zapisu

// parametry
const x = () => {}
const x1 = a => {} // tak nie rób, bo niezgodne z guideline
const x2 = (a, b) => {}

// ciało funkcji

const x3 = () => {}
const x4 = () => 42 // implicit return (niejawne)

//funkcja max, która zwraca najwiekszy podany argument




// przyjmij obiekt z imieniem i wiekiem i zwróć nowy obiekt, w którym będzie
// jeszcze klucz active

// const changeStatus = ({name, age}) => ({name, age, status: 'active'});
const changeStatus = (person) => ({...person, status: 'active'});

const user = {name: "Janusz", age: 34}
console.log(changeStatus(user));
// {name: "Janusz", age: 34, status: active}