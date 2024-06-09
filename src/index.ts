// Decorators
// Class decorator

// function Component(constructor: Function) {
//   console.log("Component Decorator called");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDOM = () => {
//     console.log("Inserting the component in the DOM");
//   };
// }

// @Component
// class ProfileComponent {}

// Parameterized Decorator

// function Component(value: number){
//     return (constructor: Function) => {
//         console.log('Component decorator called')
//     }
// }

// Decorator Composition
// function Pipe(constructor: Function){
//     console.log('Pipe decorator called');
//     constructor.prototype.pipe = true;
// }

// Methods Decorator
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}
class Person {
  @Log
  say(message: string) {
    console.log("Person says " + message);
  }
}

let person = new Person();
person.say("Hello");
