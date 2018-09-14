var x = 1; // This infers that x is a number.
var y; // This infers that y can be anything.
var firstName = 'Brendon'; // This infers that firstName is a string.
var lastName = 'Rofe'; // This explicitly states that lastName is a string.
var num1 = 100; // This infers that num1 is a number
var num2 = 200; // This explicitly states that num2 is a number.
function addNumbers(n1, n2, n3) {
    var result = n1 + n2 + n3;
    var msg = "Sum = " + result;
    alert(msg);
}
addNumbers(num1, num2, 7);
