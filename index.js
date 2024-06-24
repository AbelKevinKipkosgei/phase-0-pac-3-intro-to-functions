// Follow along with the examples here
function sayHello() {
  console.log("Hello!");
}
function sayHelloGuadalupe() {
  console.log("Hello, Guadalupe!");
}
function sayHelloToLiz() {
  console.log("Hello, Liz!");
}
function sayHelloToSamip() {
  console.log("Hello, Samip!");
}
function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}
function add(num1, num2) {
  return num1 + num2;
}

sayHello();
sayHelloGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
console.log(say("Hello", "Abel.K"));
console.log(add(4, 43));
