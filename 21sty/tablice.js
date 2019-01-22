let arr = [6, 3, 7, 12, 8];

arr.push(5);
console.log(arr);

arr.unshift(9)
console.log(arr);

arr.sort(function(a, b){return a-b});
console.log(arr);