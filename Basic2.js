let x = 20;

if (x === "20") console.log("yess");
else console.log("No");

// == means its check the value
// === its checks the type

const arr = [1, 2, 2, 5, 4, 5, 5 , 28 , 20 , 66 , 65];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

let even = arr.filter((e) => e % 2 == 0);
console.log(even)


