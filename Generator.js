function* generator() {
  console.log("Start");
  yield 1;
  yield 2;
  yield 3;
  console.log("Finish");
}

let iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
