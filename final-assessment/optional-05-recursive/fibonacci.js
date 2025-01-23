/**
 * Fungsi untuk menghasilkan bilangan Fibonacci ke-n menggunakan rekursi.
 */
function fibonacci(n) {
    if (n === 0) {
      return 0; // Basis rekursi untuk elemen ke-0
    }
    if (n === 1) {
      return 1; // Basis rekursi untuk elemen ke-1
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Rekursi: menjumlahkan dua elemen sebelumnya
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;
  