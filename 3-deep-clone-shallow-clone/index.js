// Khác nhau giữa sallow copy - deep copy
const profile = {
  age: 10,
  name: {
    full_name: 'Peter',
    last_name: 'John',
  },
};

// Shallow copy
const profileShallowClone = profile;

// profileShallowClone.age = 25;
// console.log(profile);
// console.log('===================');
// console.log(profileShallowClone);

// Destructuring
const profileShallowClone1 = { ...profile };
// profileShallowClone1.age = 25;
// profileShallowClone1.name.full_name = 'New John';
// console.log(profile);
// console.log('===================');
// console.log(profileShallowClone1);

// Deep copy

// 1. Dùng cloneDeep của thư viện lodash
// 2. Dùng JSON Object Literals
//      + Nhược điểm của JSON là khi data chứa kí tự /n /t Date Function

const profileDeepClone = JSON.parse(JSON.stringify(profile));
profileDeepClone.age = 25;
profileDeepClone.name.full_name = 'New John';
console.log(profile);
console.log('===================');
console.log(profileDeepClone);
