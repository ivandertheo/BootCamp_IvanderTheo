/* 
  Author: zikrimansyursyah
  
  Case : tugas anda adalah mencari kombinasi unik dari sebuah huruf pada string

  Example Input: xyz

  Expected Output: ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"]

  Notes: 
  - tampikan expected output dengan console.log()
*/

function cariKataKombinasi(string){ // kofigurasi parameter sesuai kebutuhan anda
  // masukan logika disini
  const hasil = [];
  
  function permute(arr, m = []) {
    if (arr.length === 0) {
      hasil.push(m.join(''));
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  }
  
  const uniquePermutations = [...new Set(hasil)];
  permute(string.split(''));
  
  return [...new Set(hasil)]; // kembalikan hasil logika disini
}

// TEST CASE
console.log(cariKataKombinasi('abc'))
console.log(cariKataKombinasi('zzz'))
console.log(cariKataKombinasi('wow'))
console.log(cariKataKombinasi('cool'))