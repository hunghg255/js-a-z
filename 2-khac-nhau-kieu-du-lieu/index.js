// Sự khác nhau primitive types, reference types
// Primitive types - Kiểu dữ liệu nguyên thuỷ
let count = 2;
let countClone = count;
countClone = "hello";

// console.log('count:', count);
// console.log('countClone:', countClone)

console.log("=====")
// Reference types - Kiểu dữ liệu tham chiếu
let userInfo = {
  name: "John"
}

let userInfoClone = userInfo;
userInfoClone.name = "Peter";

console.log('userInfo:', userInfo);
console.log('userInfoClone:', userInfoClone)
