// 1. Apa itu synchronous?
// merupakan suatu kejadian yang terjadi pada waktu bersamaan serta dapat diprediksikan hasil akhir dari syntax yang digunakan.

// 2. Apa itu asynchronous?
// merupakan perintah yang dilakukan secara bersamaan namun terikat pada perintah waktu yang dibuat sehingga selalu menghasilkan hasil yang relatif
    
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// kita bisa menggunakan asynchronous pada browser manapun

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// akan menghasilkan first log 1-5 dan second log 6 dengan second log 6 muncul setelah perintah console log dieksekusi

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// terdapat perbedaan dalam console log di bawah, console log pertama tidak menggunakan perintah set time out untuk menunda eksekusi console log tersebut
// sedangkan console log kedua menggunakan perintah set time out untuk menunda eksekusinya selama beberapa waktu yg sudah ditentukan

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama

    for (var i = 1; i <= 5; i++){
      console.log('first log: ', i); // 01 - pertama
      setTimeout(() => console.log('second log: ', i), 100); // 02 - kedua
    }

    // hasil pembaruan
    for (let i = 1; i <= 5; i++){
      setTimeout(() => console.log('second log: ', i), 100);
    }
    