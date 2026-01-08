const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

function parseArray(input) {
  return input
    .split(',')
    .map(s => s.trim())
    .filter(s => s !== '')
    .map(s => {
      const num = Number(s);
      return isNaN(num) ? null : num;
    })
    .filter(n => n !== null);
}

async function main() {
  console.log('\n=== Algorithm Processor (Console Mode) ===\n');
  let numberInput;
  while (true) {
    numberInput = await ask('Enter a number: ');
    const num = Number(numberInput);
    if (!isNaN(num)) {
      var number = num;
      break;

    }
    console.log('Invalid number. Please try again.');
  }

  const name = await ask('Enter a name: ');

  const arrayStr = await ask('Enter numbers (3,6,7 like this): ');
  const array = parseArray(arrayStr);

  console.log('\n---  Results ---');

  if (number > 7) {
    console.log('Hello');
  }
    else {
  console.log('Invalid number. Please try again.')
  }

  if (name === 'John') {
    console.log('Hello, John');
  } else {
    console.log('There is no such name');
  }

  const multiples = array.filter(n => n % 3 === 0);
  if (multiples.length > 0) {
    console.log('Multiples of 3:', multiples);
  } else {
    console.log('Multiples of 3: (none)');
  }

  console.log('\n Done!');
  rl.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});