let x = 1; // This infers that x is a number.

let y; // This infers that y can be anything.

let firstName = 'Brendon'; // This infers that firstName is a string.

let lastName: string = 'Rofe'; // This explicitly states that lastName is a string.

let num1 = 100; // This infers that num1 is a number

let num2: number = 200; // This explicitly states that num2 is a number.

function addNumbers (n1: number, n2: number, n3: number) {
  let result = n1 + n2 + n3;
  let msg = `Sum = ${result}`;
  alert(msg);
}

addNumbers(num1, num2, 7);