// code doesn't work because I don't know what's in his ./getUserSync file
var getUserSync = require('./getUserSync');

console.log('starting user1');
var user1 = getUserSync('123');
console.log('user', user1);

console.log('starting user2');
var user2 = getUserSync('321');
console.log('user2', user2);

var sum = 1 + 2;
console.log('The sum is ' + sum);
