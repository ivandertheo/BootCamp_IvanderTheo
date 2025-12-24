/* 
  Author: zikrimansyursyah
  
  Case : Tugas anda adalah mencari index suatu elemen dalam array, wajib menggunakan metode binary search 

  metode binary search bekerja dengan membagi array menjadi dua bagian dan memeriksa elemen tengah, kemudian mempersempit pencarian berdasarkan hasil perbandingan. Implementasikan pencarian ini dalam bentuk rekursif
  perlu diingat metode binary search wajib dilakukan sorting terlebih dahulu

  Example Input: [3, 8, 1, 9, 4, 6, 4, 2, 8, 4, 1, 6, 2, 3, 7, 3]
  Example search input: 6
  Example Output: 
  - Indeks elemen 6 adalah :  11
  - Indeks elemen 8 adalah :  13
  - Indeks elemen 3 adalah :  5 
  - Indeks elemen 4 adalah :  7 

  Notes: 
  - dilarang menggunakan array prototype seperti .find() .sort() .findIndex() dll
  - tampikan expected output dengan console.log()
*/

function binarySearchRecursive(array, target, left, right) {
  if (left > right) {
    return NaN;
  }

  const mid = Math.floor((left + right) / 2);

  if (array[mid] === target) {
    if (mid === 0 || array[mid - 1] !== target) {
      return mid; 
    }
    return binarySearchRecursive(array, target, left, mid - 1);
  } else if (array[mid] < target) {
    return binarySearchRecursive(array, target, mid + 1, right);
  } else {
    return binarySearchRecursive(array, target, left, mid - 1);
  }
}

function cariValueIndeks(array, target) { // kofigurasi parameter sesuai kebutuhan anda
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length - i - 1; j++){
        if(array[j] > array[j+1]){
            const temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
  }
  return binarySearchRecursive(array, target, 0, array.length - 1);
}

// CASE VALUE
const array = [3, 8, 1, 9, 4, 6, 4, 2, 8, 4, 1, 6, 2, 3, 7, 3];

// TEST CASE 
console.log('Indeks elemen 6 adalah : ', cariValueIndeks(array, 6));
console.log('Indeks elemen 8 adalah : ', cariValueIndeks(array, 8));
console.log('Indeks elemen 3 adalah : ', cariValueIndeks(array, 3));
console.log('Indeks elemen 4 adalah : ', cariValueIndeks(array, 4));