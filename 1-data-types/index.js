// 1. Primitive type: Dữ liệu kiểu nguyên thuỷ
// Vùng nhớ: stack memory
// null
let nullValue = null;
console.log(typeof nullValue)
// undefined
let undefinedValue = undefined;

// boolean:
let isShow = true;

// number
let num = 2;

// bigint
let bigI = 9007199254740991n;

// string
let str = "John"

// symbol: ES2015
let sym = Symbol('foo');

// 2. Reference type: Dữ liệu kiểu tham chiếu
// Vùng nhớ: Heap memory
// {[key]: value }
// object
let john = {name: "John", age: 20 }

// array
let count = [1,2,3]

// function
function funcHello(){
  console.log("Hello")
}

// date
// Map
// Set

