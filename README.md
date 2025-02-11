# Java Script

## 📌 Base Info (Podstawowe informacje)

JavaScript to **język skryptowy**, który działa zarówno w **przeglądarkach internetowych**, jak i na **serwerach** (dzięki środowisku Node.js). Jest to **język interpretowany**, co oznacza, że jego kod jest wykonywany **linia po linii** bez wcześniejszej kompilacji.

### Cechy JavaScript:
- **Interpretowany**: JavaScript jest interpretowany, a jego kod wykonywany jest w czasie rzeczywistym. Dodatkowo, wykorzystuje **just-in-time compilation (JIT)**, co oznacza, że kod jest kompilowany w locie do języka maszynowego, co może poprawić wydajność.
- **Asynchroniczność**: Choć JavaScript jest **językiem synchronicznym**, pozwala na obsługę operacji asynchronicznych, takich jak np. **setTimeout()**, **setInterval()**, **fetch()** (z obiektami typu **Promise**), oraz nowsze mechanizmy jak **async/await**.
- **Jednowątkowy (single-threaded)**: JavaScript jest językiem działającym w jednym wątku. Oznacza to, że wykonywanie kodu odbywa się w jednej kolejności (instrukcja po instrukcji), jednak z wykorzystaniem asynchronicznych funkcji może efektywnie obsługiwać operacje równoległe (np. pobieranie danych z sieci, oczekiwanie na odpowiedź, itp.).

### Mechanizmy asynchroniczności:
JavaScript oferuje kilka metod do obsługi asynchronicznych operacji, które pomagają w zarządzaniu kodem wykonywanym poza głównym wątkiem (np. oczekiwanie na odpowiedzi serwera):

- **setTimeout()** – Umożliwia opóźnienie wykonania funkcji o określony czas.
- **setInterval()** – Umożliwia wykonywanie funkcji w określonych odstępach czasu.
- **fetch()** – Wykorzystuje obiekt `Promise` do asynchronicznych żądań HTTP.
- **Promise** – Obiekt pozwalający na łatwiejsze zarządzanie asynchronicznymi operacjami.
- **async/await** – Nowoczesny sposób obsługi asynchronicznych funkcji, sprawiający, że kod jest bardziej czytelny i przypomina kod synchroniczny.

---

## 📌 Variables (zmienne)

| **Różnice**         | **var**              | **let**            | **const**          |
|---------------------|----------------------|--------------------|--------------------|
| **redeclaration**   | ✅ (quirks mode)     | ❌                 | ❌                 |
| **re-assignment**   | ✅                   | ✅                 | ❌                 |
| **hoisting**        | ✅                   | ✅ (TDZ)           | ✅ (TDZ)           |
| **scope**           | function             | block              | block              |

---

### Temporal Dead Zone:
**TDZ** to okres w kodzie, w którym zmienna zadeklarowana za pomocą `let` lub `const` nie jest jeszcze zainicjowana, ale już jest dostępna w zakresie (scope).
~~~
console.log(myVar); // Błąd: ReferenceError: Cannot access 'myVar' before initialization
let myVar = 5; // Inicjalizacja zmiennej

console.log(myVar); // undefined, ponieważ 'var' nie ma TDZ
var myVar = 5;
~~~

### Hoisting i zakres zmiennych:
**Hoisting** to mechanizm w JavaScript, w którym deklaracje zmiennych i funkcji są przenoszone na górę swojego zakresu przed wykonaniem kodu.
~~~ 
var - dostępna w całej funkcji
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // działa
}

let - zakres blokowy
function testLet() {
    if (true) {
        let y = 20;
    }
    console.log(y); // Błąd! Poza zakresem
}
~~~

### Strict Mode vs Quirks Mode
**Tryb ścisły (Strict Mode)** to tryb w JavaScript, który wprowadza surowsze zasady, pomagając wykrywać błędy i unikając niebezpiecznych praktyk, np. zabrania używania niezadeklarowanych zmiennych.

**Tryb dziwaczny (Quirks Mode)** to tryb, w którym przeglądarki stosują starsze, niestandardowe zasady interpretacji kodu, zapewniając kompatybilność z przestarzałymi stronami internetowymi. Włącza się go, gdy nie ma poprawnej deklaracji DOCTYPE.

---

## Obejcts (obiekty)



### Objects Destructuring (destrukturycajcja obiektów)

Dzięki destrukuryzacji obiektów możemy wyciągnąć konkretne właściwości obiektu i przypisać je do zmiennych.

~~~
const person = { name: "Jan", age: 32, city: "Warszawa" };

// Zwykłe przypisanie wartości
const name = person.name;

// Destrukturyzacja obiektu
const { name: personName, age, ageToDay = 65, city: PersonCity = "Wrocław" } = person;

console.log(personName);  // "Jan" (przypisanie wartości 'name' do zmiennej 'personName')
console.log(age);         // 32 (przypisanie wartości 'age' do zmiennej 'age')
console.log(ageToDay);    // 65 (domyślna wartość 65, ponieważ 'ageToDay' nie istnieje w obiekcie)
console.log(PersonCity);  // "Warszawa" (przypisanie wartości 'city' do zmiennej 'PersonCity')
~~~
**Destrukuryzacja zagnieżdżonych obiektów**
~~~
const person = {
  name: "Anna",
  address: {
    city: "Kraków",
    postalCode: "30-001"
  }
};

// Destrukturyzacja obiektu
const { name, address: { city, postalCode } } = person;

console.log(name);        // "Anna"
console.log(city);        // "Kraków"
console.log(postalCode);  // "30-001"
~~~

---

## 📌 Functions (funkcje)

### Hoisting w funkcjach:

W przypadku funkcji, hoisting działa inaczej w zależności od sposobu deklaracji funkcji. Istnieją różne rodzaje funkcji w JavaScript:

1. **Funkcje nazwane** - Hoisting przenosi całą deklarację funkcji na górę zakresu.
2. **Funkcje anonimowe (wyrażenia funkcyjne)** - Hoisting dotyczy tylko zmiennej, do której przypisano funkcję, a nie samej funkcji.

#### Funkcje nazwane (function declarations):
Funkcja zadeklarowana w sposób tradycyjny jest przenoszona na górę zakresu, co oznacza, że można jej używać przed jej zadeklarowaniem.

~~~
function testFunction() {
    console.log('Hello from function!');
}

testFunction(); // Działa! Funkcja jest przeniesiona na górę
~~~

#### Funkcje anonimowe (function expressions):
Funkcja przypisana do zmiennej działa inaczej. Zmienna jest poddana hoistingowi, ale sama funkcja nie jest dostępna przed jej przypisaniem.

~~~
testFunction(); // Błąd: TypeError: testFunction is not a function

var testFunction = function() {
    console.log('Hello from function!');
};
~~~

### Funkcje strzałkowe (Arrow Functions):
Funkcje strzałkowe są przypisane do zmiennej, co oznacza, że również nie są dostępne przed ich inicjalizacją (podobnie jak inne wyrażenia funkcyjne).

~~~
testFunction(); // Błąd: TypeError: testFunction is not a function

var testFunction = () => {
    console.log('Hello from arrow function!');
};
~~~

---


## Logic

### AND (`&&`)

| x  | y  | AND (`&&`) |
|----|----|------------|
| 1  | 1  | 1          |
| 1  | 0  | 0          |
| 0  | 1  | 0          |
| 0  | 0  | 0          |

### OR (`||`)

| x  | y  | OR (`‖`)  |
|----|----|------------|
| 1  | 1  | 1          |
| 1  | 0  | 1          |
| 0  | 1  | 1          |
| 0  | 0  | 0          |

[Prawa de Morgana](https://pl.wikipedia.org/wiki/Prawa_De_Morgana)

---


## Interfaces

1. GUI - graphical user interface
2. CLI - command line interface
3. API - aplications 