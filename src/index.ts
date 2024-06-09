// Accessor decorator
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return null;
  }
}

let person = new Person("mosh", "hamedani");
console.log(person.fullName); // Output: MOSH HAMEDANI
