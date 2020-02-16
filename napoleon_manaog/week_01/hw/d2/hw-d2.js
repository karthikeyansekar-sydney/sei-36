// The calculator
/*
  Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
*/
function squareNumber (num) {
  console.log(`The result of squaring the number ${num} is ${num*num}`);
  return num*num;
}

/*
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5."
*/
function halfNumber(num) {
  console.log(`Half of ${num} is ${num/2}`);
  return (num/2);
}

/*
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
*/
function percentOf(num1, num2) {
  const result = ((num1/num2) * 100).toFixed(2);
  console.log(`${num1} is ${result}% of ${num2}`);
  return result;
}


/*
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
*/
function areaOfCircle(radius) {
  const pi = Math.PI;
  const roundedArea = (pi*radius*radius).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${roundedArea}`);
  return roundedArea;
}

/*
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
1. Take half of the number and store the result.
2. Square the result of #1 and store that result.
3. Calculate the area of a circle with the result of #2 as the radius.
4. Calculate what percentage that area is of the squared result (#3).
*/
function calculate(num) {
  const hf = halfNumber(num);
  console.log(hf);
  const sq = squareNumber(hf);
  const areaC = areaOfCircle(hf);
  return percentOf(sq,areaC);

}

// The Calculator
console.log('************ The Calculator ***********');
calculate(5);
console.log('***************************************');
