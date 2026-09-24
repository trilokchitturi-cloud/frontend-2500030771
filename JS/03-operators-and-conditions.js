console.log('=== Operators and Control Statements ===');

let a = 10;
let b = 3;

console.log('Addition =', a + b);
console.log('Subtraction =', a - b);
console.log('Multiplication =', a * b);
console.log('Division =', a / b);
console.log('Remainder =', a % b);
console.log('Exponent =', a ** b);

console.log('a == b ->', a == b);
console.log('a === b ->', a === b);
console.log('a > b ->', a > b);
console.log('a >= b ->', a >= b);

console.log('Logical AND =>', a > 5 && b < 5);
console.log('Logical OR =>', a < 5 || b > 2);
console.log('Logical NOT =>', !(a === b));

let x = 10;
x += 5;
x *= 2;
console.log('Updated x =', x);

let marks = 75;
if (marks >= 80) {
  console.log('Grade A');
} else if (marks >= 60) {
  console.log('Grade B');
} else {
  console.log('Grade C');
}

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  default:
    dayName = 'Other day';
}

console.log('Day name =', dayName);

for (let i = 1; i <= 5; i++) {
  console.log('Loop count =', i);
}

let count = 1;
while (count <= 3) {
  console.log('While loop value =', count);
  count++;
}

let num = 1;
do {
  console.log('Do while loop value =', num);
  num++;
} while (num <= 2);
