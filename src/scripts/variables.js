// Redeklaracja zmiennych
// Deklaracja zmiennej to stowrzenie jej za pomocą np. let x

// var x1 = 42;
// var x1 = 666;
//
// let x2 = 42;
// let x2 = 666; //nie można re-deklarować, błąd
//
// const x3 = 42;
// const x3 = 666; //nie można re-deklarować, błąd

//Reinicjalizacja
// Przypisanie nowej wartości do istniejącej zmiennej np. x = 42;

// var x1 = 42;
// x1 = 666;
//
// let x1 = 42;
// x2 = 666;
//
// const x1 = 42;
// x3 = 666; // const nie można re-inicjalizować

// Hoisting
// Przenoszenie deklaracji zmiennych, deklaracji funkcji nazwanych, deklaracji klas
//na górę aktualnie przetwarzanego zasięgu. TDZ - temporary dead zone (tymczasowa strefa śmierci)

// function doSmthAwesome() {
//     var z1;
//     console.log(z1);
//     z1 = 42;
// }
//
// doSmthAwesome()

// Scope -zasięg
// Widoczność, dostępność identifikatorów (nazwy zmiennych, funkcji i klas)
// - global - wszędzie jest cos dostępne
// - local - dostępne tylko w aktualnym zasięgu
// - function scope - tworzony przez ciało funkcji
// - block scope - tworzone przez block, dowolna para 2 klamerek {}

// function doSmth () {
//     var x1 = 42;
//     let x2 = 42;
//     const x3 = 42;
// }

// console.log(x1, x2, x3) są niedostępne w aktualnym csope, bo są zadeklarowane wewnątrz funkcji

// if (true) {
//     var x1 = 42;
//     let x2 = 42;
//     const x3 = 42;
// }
//
// console.log(x1, x2, x3);

// let x = 42;

// function doSmthMagic() {
//     x = 666; // kiedy nie ma deklaracji zmiennej to szuka w zasięku otaczającym / wyżej
//     //let x = 666; kiedy jest deklaracja, to jest tworzona nowa zmienna, a wyżej nie jest uzywana
//     console.log(x);
// }
// doSmthMagic();
// console.log(x);
//
// for (let i = 0; i < 10; i++) {
//     setTimeout(function (){
//         console.log(i);
//     }, 0)
// }