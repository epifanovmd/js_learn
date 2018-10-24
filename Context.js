// Контекст выполнения

// глобальный контекст выполнения
var hello = "Hello";

var user = function() {
  // контекст выполнения функции
  var name = "John Smith";

  var getName = function() {
    // контекст выполнения функции
    return name;
  };

  var sayHello = function() {
    // контекст выполнения функции
    console.log(hello + ", " + getName());
  };

  sayHello();
};
// user();  //Hello, John Smith

//
//Функции call(), apply() и bind() в JavaScript
//

// Создадим простой объект, чтобы использовать его в качестве контекста
var context = { foo: "bar" };

// Функция, которая возвращает свойство «foo» контекста «this»
function returnFoo() {
  return this.foo;
}

// Свойства не существует в текущей области видимости, поэтому undefined
console.log(returnFoo()); // => undefined

// Но если мы свяжем эту функцию с контекстом
var bound = returnFoo.bind(context);

// Свойство теперь в области видимости
console.log("Bind - " + bound()); // => "bar"

//
// Так работает Function.prototype.bind.
// Так как returnFoo — это функция, она наследует прототип Function.prototype
//

// Существует несколько способов связывания функции с контекстом
// Call и apply позволяют вам вызывать функцию с нужным контекстом
console.log("Call - " + returnFoo.call(context)); // => bar
console.log("Apply - ", returnFoo.apply(context)); // => bar

// Так же можно вложить функцию в объект
context.returnFoo = returnFoo;
console.log("Функция вложена в объект - " + context.returnFoo()); // => bar

//
// Использование bind() для заимствования методов
//
var users = {
  data: [{ name: "John Smith" }, { name: "Ellen Simons" }],

  showFirst: function(event) {
    console.log(this.data[0].name);
  }
};

var cars = {
  data: [{ name: `Mitzubisi Lancer` }, { name: `Chevrolet Impala` }]
};

cars.showFirst = users.showFirst.bind(cars);
cars.showFirst();

//
// Использование bind() при каррировании
//

// Определим функцию от трех переменных
function greet(gender, age, name) {
  // if a male, use Mr., else use Ms.
  var salutation = gender === "male" ? "Mr. " : "Ms. ";

  if (age > 25) {
    console.log("Hello, " + salutation + name + ".");
  } else {
    console.log("Hey, " + name + ".");
  }
}

// C помощью bind() мы можем получать функции от меньшего числа переменных
var greetAnAdultMale = greet.bind(null, "male", 45);
greetAnAdultMale("John Hartlove"); // "Hello, Mr. John Hartlove."

var greetAYoungster = greet.bind(null, "", 16);
greetAYoungster("Alex"); // "Hey, Alex."
