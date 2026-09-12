// Mengambil elemen tombol dari HTML
const btnBack = document.getElementById('btnBack');

// Memberikan fungsi klik pada tombol kembali
btnBack.addEventListener('click', () => {
    // Contoh aksi: memunculkan pesan pop-up saat diklik
    alert('Anda akan diarahkan kembali ke Halaman Beranda!');
    
    // Jika ingin redirect ke halaman lain, hapus tanda komentar di bawah ini:
    // window.location.href = "index.html"; 
});
