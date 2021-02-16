"use strict";

let num = 50;

// while
/* while (num <= 55) {
    console.log(num);
    num++;
} */

// do-while
do {
    console.log(num);
    num++;
}
while (num < 55);

// for
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

// Callback function
function learnJS(lang, callback) {
    console.log(`i'am learn ${lang}`);
    callback();
}
    // Функция переданная здесь, является анономной
learnJS('JavaScript', function() {
    console.log('i learn JS!');
});

// OBJECTS 020 {key: "value"}
const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    // create a method that works inside the object
    makeTest: function() {
        console.log("Testing app!");
    }
};

// running method makeTest
options.makeTest();

// destructuring the object -> we divide into smaller parts
const {border, bg} = options.colors;
console.log(border);

// the number of properties in the object -old method
// console.log(Object.keys(options).length);

// console.log(options.name);
// delete options.name;
// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Property ${i} matters ${options[key][i]}`);
            // the number of properties in the object
            counter++;
        }
    } else {
        console.log(`Property ${key} matters ${options[key]} `);
        // the number of properties in the object
        counter++;
    }
}
console.log(counter);

// ARRAYS
const arr = [1, 2, 3, 5, 8, 9];

// how to sort numeric array
/* arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
} */

/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

// using forEach with callback function for iteration over all array elements
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr}`);
});

// remove element at the end of the array
// arr.pop();
// add an element at the end of the array
// arr.push(10);

// iteration over all array elements
/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

// using for / of to iterate over an array
for (let value of arr) {
    console.log(value);
}

// using split, sort and join
const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));

// SPREAD OPERATOR
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 3,
    b: 6,
    c: {
        d: 9,
        e: 7
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 11;

console.log(newNumbers);
console.log(numbers);

// How to using method object assign
const add = {
    f: 5,
    s: 9
};

// shallow copy of an object
console.log(Object.assign(numbers, add));

// Copyng old array with slice method
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "newtext";
console.log(newArray);
console.log(oldArray);

// New method for shallow copy of an object
const video = ["youtube", "vimeo", "tiktok"],
      blogs = ["wordpress", "linkin", "blogger"],
      internet = [...video, ...blogs, "the", "jkr"];

console.log(internet);

/* // Using spread operator
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const numm = [2, 5, 8];

log(...numm); */

/* // Another method for shallow copy of an object
const aarray = ["a", "d"];
const newAarray = [...aarray];

console.log(newAarray);
 */



