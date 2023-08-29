let bilanganArray = [];

// Mengisi array dengan 100 bilangan acak antara 1 dan 50
for (let i = 0; i < 100; i++) {
  let bilanganAcak = Math.floor(Math.random() * 50) + 1;
  bilanganArray.push(bilanganAcak);
}

console.log("Array bilangan acak:", bilanganArray);

let arrayGenap = [];
let arrayGanjil = [];

// Memecah array menjadi dua array berdasarkan indeks (genap dan ganjil)
for (let i = 0; i < bilanganArray.length; i++) {
  if (i % 2 === 0) {
    arrayGenap.push(bilanganArray[i]);
  } else {
    arrayGanjil.push(bilanganArray[i]);
  }
}

console.log("Array pada index genap:", arrayGenap);
console.log("Array pada index ganjil:", arrayGanjil);

// Mendapatkan nilai Min, Max, Total, dan Rata-rata untuk array genap
let minGenap = arrayGenap[0];
let maxGenap = arrayGenap[0];
let totalGenap = 0;

for (let i = 0; i < arrayGenap.length; i++) {
  if (arrayGenap[i] < minGenap) {
    minGenap = arrayGenap[i];
  }
  if (arrayGenap[i] > maxGenap) {
    maxGenap = arrayGenap[i];
  }
  totalGenap += arrayGenap[i];
}

let rataRataGenap = totalGenap / arrayGenap.length;

// Mendapatkan nilai Min, Max, Total, dan Rata-rata untuk array ganjil
let minGanjil = arrayGanjil[0];
let maxGanjil = arrayGanjil[0];
let totalGanjil = 0;

for (let i = 0; i < arrayGanjil.length; i++) {
  if (arrayGanjil[i] < minGanjil) {
    minGanjil = arrayGanjil[i];
  }
  if (arrayGanjil[i] > maxGanjil) {
    maxGanjil = arrayGanjil[i];
  }
  totalGanjil += arrayGanjil[i];
}

let rataRataGanjil = totalGanjil / arrayGanjil.length;

console.log("Min array genap:", minGenap);
console.log("Max array genap:", maxGenap);
console.log("Total array genap:", totalGenap);
console.log("Rata-rata array genap:", rataRataGenap);

console.log("Min array ganjil:", minGanjil);
console.log("Max array ganjil:", maxGanjil);
console.log("Total array ganjil:", totalGanjil);
console.log("Rata-rata array ganjil:", rataRataGanjil);

// Membandingkan nilai antara array genap dan ganjil
let hasilPerbandingan = [];

if (minGenap > minGanjil) {
  hasilPerbandingan.push("Min lebih besar array genap");
} else if (minGenap < minGanjil) {
  hasilPerbandingan.push("Min lebih besar array ganjil");
} else {
  hasilPerbandingan.push(
    "Min memiliki nilai sama antara array genap dan ganjil"
  );
}

if (maxGenap > maxGanjil) {
  hasilPerbandingan.push("Max lebih besar array genap");
} else if (maxGenap < maxGanjil) {
  hasilPerbandingan.push("Max lebih besar array ganjil");
} else {
  hasilPerbandingan.push(
    "Max memiliki nilai sama antara array genap dan ganjil"
  );
}

if (totalGenap === totalGanjil) {
  hasilPerbandingan.push(
    "Total memiliki nilai sama antara array genap dan ganjil"
  );
} else {
  hasilPerbandingan.push("Total berbeda antara array genap dan ganjil");
}

if (rataRataGenap > rataRataGanjil) {
  hasilPerbandingan.push("Rata-rata lebih besar array genap");
} else if (rataRataGenap < rataRataGanjil) {
  hasilPerbandingan.push("Rata-rata lebih besar array ganjil");
} else {
  hasilPerbandingan.push(
    "Rata-rata memiliki nilai sama antara array genap dan ganjil"
  );
}

console.log("Hasil perbandingan:", hasilPerbandingan);
