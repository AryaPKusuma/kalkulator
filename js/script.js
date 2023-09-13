const angkaInput = document.getElementById('angka');
const hitungButton = document.getElementById('hitungButton');
const hasilSpan = document.getElementById('hasil');
const sisiSpan = document.getElementById('sisi');

const inputKeliling = document.getElementById('angkaKeliling');
const hitungKelilingButton = document.getElementById('hitungKelilingButton');
const hasilKelilingSpan = document.getElementById('hasilKeliling');
const sisiKelilingSpan = document.getElementById('sisiKeliling');

hitungButton.addEventListener('click', function() {
    const angka = parseInt(angkaInput.value, 10);
    const sisi = angka;
    

    if (!isNaN(angka) && angka >= 0) {
        const hasil = angka * angka;
        sisiSpan.textContent = `L = ${sisi} x ${sisi}`;
        hasilSpan.textContent = `L = ${hasil}`;
    } else {
        alert('Masukkan angka yang valid.');
    }
});


hitungKelilingButton.addEventListener('click', function() {
    const angka = parseInt(inputKeliling.value, 10);
    const sisi = angka;
    

    if (!isNaN(angka) && angka >= 0) {
        const hasil = angka * 4;
        sisiKelilingSpan.textContent = `K = ${sisi} + ${sisi} + ${sisi} + ${sisi}`;
        hasilKelilingSpan.textContent = `K = ${hasil}`;
    } else {
        alert('Masukkan angka yang valid.');
    }
});