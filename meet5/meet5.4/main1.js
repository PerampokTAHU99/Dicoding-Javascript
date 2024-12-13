/*
Rekursi adalah teknik sebuah fungsi memanggil dirinya sendiri sehingga operasi dalam fungsi tersebut terus berulang sampai mencapai kondisi tertentu untuk ia keluar dari perulangannya.
 */


//contoh 1
function generateArray(n) {
    const result = [];
    for (let counter = 0; counter <= n; counter += 1) {
      result.push(counter);
    }
    return result;
  }
  
  console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

  //menjadi
  //contoh 2

  function generateArrayNew(n) {
    if (n < 0) {
      return [];
    }
  
    return [...generateArrayNew(n - 1), n];
  }
  
  console.log(generateArrayNew(5)); // Output: [0, 1, 2, 3, 4, 5]

  /*
  Pada contoh di atas, fungsi generateArray memanggil dirinya sendiri dengan argumen yang dikurangi satu dan operasi dalam fungsi tersebut terus berjalan hingga argumen n bernilai kurang dari 0. Perhatikan bahwa dalam fungsi ini tidak ada sama sekali proses mengubah data, tetapi hanya ada expression yang menghasilkan nilai baru pada setiap iterasi pemanggilan fungsinya.
   */