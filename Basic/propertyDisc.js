const user = {
  name: "John",
  age: 30,
};

const descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor);
descriptor.writable = false;
console.log(descriptor);

user.name = "Pete"; // Error: Cannot assign to read only property 'name'

console.log(user.name); // John
