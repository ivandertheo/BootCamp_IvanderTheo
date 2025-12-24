/* 
  Author: zikrimansyursyah
  
  Case : anda diminta untuk membuat fungsi yang dapat menghitung total pendapatan, produk terlaris, dan rata-rata harga produk

  Example Input: (data pada variabel transactions)

  Expected Output: 
  - Total Pendapatan:  5500000
  - Produk Terlaris : Baju
  - Rata-rata Harga Produk : 175000

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .reduce() .filter() dll
  - tampikan expected output dengan console.log()
*/

function totalPendapatan(transactions) { // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  let saldo = 0;
  transactions.forEach(element => {
    saldo += element.jumlah * element.harga
  })
  return saldo// kembalikan hasil logika disini
}

function produkTerlaris(transactions) { // kofigurasi parameter sesuai kebutuhan anda
 // masukan logika disini
  let produk = {
    "Baju": 0,
    "Celana": 0,
    "Sepatu": 0,
    "Topi": 0
  }

  transactions.forEach(element => {
    produk[element.produk] += element.jumlah;
  })

  let max = 0;
  let produkTerlaris = "";
  for (let key in produk) {
    if (produk[key] > max) {
      max = produk[key];
      produkTerlaris = key;
    }
  }
 return produkTerlaris; // kembalikan hasil logika disini
}

function rataRataHarga(transactions,targetBulan) { // kofigurasi parameter sesuai kebutuhan anda
  /// masukan logika disini
  const bulanMap = {
    Januari: "01",
    Februari: "02",
    Maret: "03",
    April: "04",
    Mei: "05",
    Juni: "06",
    Juli: "07",
    Agustus: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Desember: "12",
  };
  let ratarataSaldo = 0;
  let totalBulan = 0;

  const targetKodeBulan = bulanMap[targetBulan];
  if (!targetKodeBulan) {
    return 0
  } else {
        transactions.forEach(element => {
        if (element.tanggal.split("-")[1] === bulanMap[targetBulan]) {
        ratarataSaldo += element.harga;
        totalBulan++;
        }
    })
  }
  
  return ratarataSaldo/totalBulan // kembalikan hasil logika disini
}

// CASE VALUE
const transactions = [
  { tanggal: "2023-01-05", produk: "Baju", jumlah: 5, harga: 150000 },
  { tanggal: "2023-01-10", produk: "Celana", jumlah: 3, harga: 200000 },
  { tanggal: "2023-02-15", produk: "Baju", jumlah: 2, harga: 150000 },
  { tanggal: "2023-03-20", produk: "Sepatu", jumlah: 4, harga: 300000 },
  { tanggal: "2023-03-22", produk: "Topi", jumlah: 6, harga: 50000 },
  { tanggal: "2023-04-10", produk: "Celana", jumlah: 2, harga: 200000 },
  { tanggal: "2023-04-15", produk: "Baju", jumlah: 3, harga: 150000 },
  { tanggal: "2023-05-05", produk: "Sepatu", jumlah: 1, harga: 300000 },
  { tanggal: "2023-05-10", produk: "Topi", jumlah: 4, harga: 50000 },
  { tanggal: "2023-06-15", produk: "Celana", jumlah: 5, harga: 200000 }
];

// TEST CASE
console.log("Total Saldo Akhir :", totalPendapatan(transactions));
console.log("Transaksi Terbanyak :", produkTerlaris(transactions));
console.log("Total Transaksi Januari :", rataRataHarga(transactions, "Januari"));