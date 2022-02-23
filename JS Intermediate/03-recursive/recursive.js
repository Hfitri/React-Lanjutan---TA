// SOAL 1
// Kalian diminta untuk membuat sebuah fungsi sumOfArray dimana ia akan menghitung total 
// dari sebuah array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

// fungsi harus ditulis menggunakan recursive
// memiliki 1 parameter:
// arr [Array] => array of number yang nanti kita akan cari jumlahnya
// return value [Number] => nilai kembalian berupa sebuah Number


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arrOfNum) {
    let arrNew = 0;

    for (let i = 0; i < arrOfNum.length; i++){
        arrNew += arrOfNum[i];
    }
    return arrNew;
 }
console.log('SOAL 1');
console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// EXPECTED RESULT
// 15
// 36



// SOAL 2
// pastikan bahwa array yang kalian gunakan pada soal-01 dan soal-02 itu identik atau sama
// cari nilai rata-rata menggunakan fungsi yang sudah kalian buat pada soal-01
// buat sebuah funsi yang mana memiliki 2 parameter
// arr [Array] => array of number
// avg [Number] => nilai rata-rata
// fungsi pada soal-2 akan melakukan checking terhadap tiap-tiap nilai apakah ia melebihi nilai rata-rata atau tidak
// langkah terakhir adalah mengembalikan jumlah dari nilai yang melebihi nilai rata-rata

const avg1 = [1, 2, 3, 4, 5];
const avg2 = [0, 3, 1, 10, 22];

 

 const totalAboveAvg1 = countAboveAvg(arr1, avg1);
 const totalAboveAvg2 = countAboveAvg(arr2, avg2);
 
 console.log(totalAboveAvg1);
 console.log(totalAboveAvg2);

// Expected Result
// 2 // Ada 3 elemen yang melebihi atau sama dengan nilai rata-rata yaitu 4 dan 5
// 2 // Ada 3 elemen yang melebihi atau sama dengan nilai rata-rata yaitu 10 dan 22


// SOAL 3
// fungsi harus ditulis menggunakan recursive
// memiliki 2 parameter:
// arr [Array] => array of number yang nanti akan kita cari value-nya
// num [Number] => angka yang hendak kita cari
// return value:
// apabila kita tidak menemukan angka tersebut maka kita akan mengembalikan "angka tidak ditemukan"
// apabila kita menemukan angka tersebut maka kita akan mengembalikan "angka ditemukan pada index: $INDEX"



// searchInArray(arr, 6);
// searchInArray(arr, 1);
// searchInArray(arr, 8);


 
