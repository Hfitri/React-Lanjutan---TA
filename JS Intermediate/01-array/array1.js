/// soal 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
    let reverseArr = [];
    let reverseNumber = '';
    for (let i = arr.length; i--;) {
        reverseNumber += arr[i];
        reverseArr.push(arr[i])
    }
    return reverseArr;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log('Soal 1');
console.log(arr, ", ", newArr);
console.log(arr2, ", ", newArr2);


// Expected Result
// [1, 2, 3], [3, 2, 1]
// [8, 1, 5, 7], [7, 5, 1, 8]

/// soal 2

const arr1 = [1, 3, 4, 1, 2, 8];
const Arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(ArrayOfNumber) {
    let total = 0;
    let value = 0;
    let average = total/ArrayOfNumber.length;

    for (let i = 0; i < ArrayOfNumber.length; i++){
        total += ArrayOfNumber[i];
        average = total/ArrayOfNumber.length;
    } for (let j = 0; j < ArrayOfNumber.length; j++){
        if (ArrayOfNumber[j] > average){
            value++
        } 
    }return value 
}

    getAverage (arr1)

    console.log('Soal 2');
    console.log(getAverage(arr1));
    console.log(getAverage(Arr2))

// Expected Result
// 2 // Ada 2 bilangan yang melebihi nilai rata-rata yaitu 4 & 8
// 3 // Ada 3 bilangan yang melebihi nilai rata-rata yaitu 6, 7, dan 8

// soal 3
const Arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(Arr, num) { 
    let tempArr = [];
    for (let i = 0; i < Arr.length; i++) {
        let number = Arr[i];
        for (let j = 0; j < number.length; j++) {
            tempArr.push(number[j]);
        }}

    for (let k = 0; k < tempArr.length; k++) {
        if (tempArr[k] === num) {
            var found = true;
            var index = k;
        }}

    if (found) {
        return index;
    } else {
        return 'null';
    }}

    console.log('Soal 3');
    console.log(searchInArray(Arr, 3));
    console.log(searchInArray(Arr, 2));
    console.log(searchInArray(Arr, 4));
    console.log(searchInArray(Arr, 8));
    