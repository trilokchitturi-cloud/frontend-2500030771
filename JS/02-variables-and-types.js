console.log('=== Variables and Data Types ===');

var age = 25;
let score = 10;
const pi = 3.14159;

console.log('age =', age);
console.log('score =', score);
console.log('pi =', pi);

score = 20;
console.log('updated score =', score);

// Primitive data types
let name = 'Ravi';
let totalMarks = 85;
let isStudent = true;
let result = null;
let value;
let bigNumber = 12345678901234567890n;
let uniqueId = Symbol('id');

console.log(typeof name, name);
console.log(typeof totalMarks, totalMarks);
console.log(typeof isStudent, isStudent);
console.log(typeof result, result);
console.log(typeof value, value);
console.log(typeof bigNumber, bigNumber);
console.log(typeof uniqueId, uniqueId);

const student = {
  name: 'Rahul',
  age: 21,
  course: 'JavaScript'
};

console.log('student object =', student);
console.log('student name =', student.name);
