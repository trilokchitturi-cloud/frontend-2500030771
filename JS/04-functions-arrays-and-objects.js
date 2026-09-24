console.log('=== Functions, Arrays, and Objects ===');

function greet(name) {
  return `Hello ${name}!`;
}

console.log(greet('Suneetha'));

const add = function (a, b) {
  return a + b;
};

console.log('Function expression result =', add(10, 20));

const multiply = (a, b) => a * b;
console.log('Arrow function result =', multiply(4, 5));

const fruits = ['apple', 'banana', 'orange'];
fruits.push('mango');
fruits.unshift('grape');
console.log('Fruits array =', fruits);
console.log('First fruit =', fruits[0]);
console.log('Does banana exist? =', fruits.includes('banana'));
console.log('Index of orange =', fruits.indexOf('orange'));

const numbers = [1, 2, 3, 4];
console.log('numbers slice =', numbers.slice(1, 3));
console.log('joined numbers =', numbers.join('-'));

const student = {
  name: 'Rahul',
  age: 20,
  course: 'JavaScript',
  address: {
    city: 'Vijayawada',
    state: 'Andhra Pradesh'
  },
  greet() {
    console.log('Hello from student method');
  }
};

console.log('Student name =', student.name);
console.log('City =', student.address.city);
student.greet();

const { name, age, course } = student;
console.log('Destructured values =', name, age, course);
