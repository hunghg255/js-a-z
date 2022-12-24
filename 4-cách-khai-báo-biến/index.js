// Các cách khai báo biến và scope trong javascript

// Cách khai báo biến: var, let, const (constant)

var count = 1;
count = 2;
// console.log('count', count);

let show = true;
show = false;
// console.log('show', show);

const PI = Math.PI;
// PI = 4.14;
// console.log('PI', PI);

// Scope: Phạm vi truy cập

// 1. Block scope: let, const
{
  let john = 'Peter';
  var hi = 'Hello';
}
// console.log(john);
// console.log(hi);

// 2. Function scope: var, let, const

function func() {
  var varFunc = 2;
}
// console.log(varFunc);

// 3. Global scope: var, let, const

// Hoisting: var, Function

console.log(Hello);
goodBye();

let Hello = 'Hello';
const goodBye = () => {
  console.log('Bye');
};
