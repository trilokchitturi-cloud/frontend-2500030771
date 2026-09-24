console.log('=== Advanced JavaScript Concepts ===');

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved successfully');
    }, 500);
  });
}

getData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

async function loadData() {
  const result = await getData();
  console.log('Async/Await result =', result);
}

loadData();

const user = {
  name: 'John',
  age: 25,
  city: 'Hyderabad'
};

const jsonText = JSON.stringify(user);
console.log('JSON string =', jsonText);

const parsedUser = JSON.parse(jsonText);
console.log('Parsed object =', parsedUser);

try {
  console.log('Trying to divide by zero');
  const value = 10 / 0;
  console.log('Result =', value);
} catch (error) {
  console.error('Error caught:', error.message);
} finally {
  console.log('Finally block executed');
}
