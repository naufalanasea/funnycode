// Program "Singing Calculator"

// Fungsi untuk menambahkan dua angka
function tambah(angka1, angka2) {
    return angka1 + angka2;
}

// Fungsi untuk mengalikan dua angka
function kali(angka1, angka2) {
    return angka1 * angka2;
}

// Fungsi untuk menyanyikan hasil operasi matematika
function nyanyi(operasi, angka1, angka2) {
    let hasil;
    if (operasi === '+') {
        hasil = tambah(angka1, angka2);
        console.log(`Hasil penjumlahan ${angka1} dan ${angka2} adalah ${hasil}! La la la~`);
    } else if (operasi === '*') {
        hasil = kali(angka1, angka2);
        console.log(`Hasil perkalian ${angka1} dan ${angka2} adalah ${hasil}! Tra la la~`);
    } else {
        console.log("Operasi tidak valid. Mohon masukkan '+' untuk penjumlahan atau '*' untuk perkalian.");
    }
}

// Memanggil fungsi nyanyi dengan operasi penjumlahan
nyanyi('+', 5, 3);

// Memanggil fungsi nyanyi dengan operasi perkalian
nyanyi('*', 4, 6);

// Memanggil fungsi nyanyi dengan operasi tidak valid
nyanyi('-', 2, 2);
