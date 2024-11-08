//throwing Error
const price = 100;
const paid = 80;

if (paid < price) {
  throw new Error('Pembayaran kurang');
}


//Catching Error

/*
Try-Catch
Try-catch merupakan cara yang dimiliki JavaScript untuk menangani error. Try-catch memiliki dua blok utama yaitu try dan catch. Try merupakan blok kode yang akan menangani error, sedangkan catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try.
 */

try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
  }


/*
Finally
Finally adalah blok kode yang berada di akhir try-catch. Bilamana catch dieksekusi hanya ketika ada error di dalam blok try, blok yang ada di finally akan selalu dieksekusi

Ketika dijalankan, akan tampil di terminal/console yang mencetak tulisan “Ini try block“ dan “Ini finally block”. Dengan menggunakan finally, ia tidak peduli apakah blok try memiliki error atau tidak. 

output :
Ini try block
Ini catch block
Ini finally block
 */

try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }

