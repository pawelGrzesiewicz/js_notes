// function sum (a, b) {
//     return a + b;
// }
//
// const result = sum(1, 2);
// // console.log(result);
// // console.log(sum(1, 2));
//
// function greeting (name) {
//     return 'Ceść,' + name;
// }

// console.log(greeting("Janusz"));

// function getDayName(day) {
//     switch (day) {
//         case 0:
//             return "niedziela"
//         case 1:
//             return "poniedziałek"
//         case 2:
//             return "wtorek"
//         case 3:
//             return "środa"
//         case 4:
//             return "czwartek"
//         case 5:
//             return "piatek"
//         case 6:
//             return "sobota"
//     }
// }
// console.log(getDayName(1));


// function drawDigits (quantity) {
//     const temp = [];
//
//     while (temp.length < quantity) {
//         const digit = Math.floor(Math.random() * 48 + 1);
//         if (!temp.includes(digit)) {
//             temp.push(digit)
//         }
//     }
//     return temp;
// }
//
// console.log(drawDigits(8));

// fn, do zwracania intersection 2 tablic
//algorytm postępowania

//1.Stwórz finkcje, która przyjmuje  2 parametry
//2.Stwórz pustą tablicę, do zapisywania powtarzających sie elementów
//3.Przeiteruj po pierwszej tablicy

// function intersection (arr1, arr2) {
//     let result = [];
//
//     for (const item of arr1) {
//         if (arr2.includes(item)) {
//             result.push(item)
//         }
//     }
//     return result;
//
// }
//
// console.log(intersection([1,2,3], [2,3,4,5]));




// myLord - Witaj mój Panie!, Co jeszcze mogę dla Ciebie zrobić,
// Pięknie dzisiaj wyglądasz!

// 1. Stwórz funkcje, która nie ma args
// 2. Stworz tablice z tekstami i przypis do zmiennej
// 3. Zwróc losowy tekst zależny od indeksu z tablicy

function myLord() {
    const sentences = ['Witaj mój Panie!',' Co jeszcze mogę dla Ciebie zrobić', 'Pięknie dzisiaj wyglądasz!'];
    return sentences[Math.round(Math.random() * (sentences.length - 1))];
}

console.log(myLord())