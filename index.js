import * as R from 'ramda'

const x = (a,b) => {
    return a+b
}

//added pull request number 1
//ok comment expanded!

const hh = (x,y) => {
    return R.add(x,y) + R.subtract(x,y) + R.multiply(x,y) + R.divide(x,y)
}
const uu = hh(1,2)
uu

console.log(x(1,2))

function add (a,b) {
    return a+b
}

const y = x(1,2)
y

const g = add(45,56)
g

function hello(a,b) {

}


const addition = function(a,b) {
    return a+b
};

const z = addition(2,3)
z

const tester = (tester2) => {
    return tester2 * 2
};

const yy = tester(78)
yy


//Functional FizzBuzz version 1

console.log(
  Array.apply(null, {length: 100}).map(function(val, index) {
    index++;
    if (index % 15 == 0){return "FizzBuzz";}
    if (index % 3 == 0){return "Fizz";}
    if (index % 5 == 0){return "Buzz";}
    return index;
  }).join('\n')
);

const functionalFizzBuzz = n => {

  return Array.from(
    { length: n },
    (_, idx) =>
      [[15, "fizzbuzz"], [5, "buzz"], [3, "fizz"]].find(
        val => (idx + 1) % val[0] === 0
      ) || idx + 1
  ).reduce((acc, el) => (acc += (el[1] || el) + "\n"), "");

};

const final = functionalFizzBuzz(15);
final