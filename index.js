// index.js

// Fungsi untuk penjumlahan
function tambah(a, b) {
    return a + b;
}

// Fungsi untuk pengurangan
function kurang(a, b) {
    return a - b;
}

// Fungsi untuk perkalian
function kali(a, b) {
    return a * b;
}

// Fungsi untuk pembagian
function bagi(a, b) {
    if (b === 0) {
        throw new Error('Tidak bisa membagi dengan 0');
    }
    return a / b;
}

module.exports = {
    tambah,
    kurang,
    kali,
    bagi
};
