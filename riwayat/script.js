// === FITUR DARK MODE ===
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.documentElement;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    bodyElement.setAttribute('data-theme', currentTheme);
    updateToggleIcon(currentTheme);
}

themeToggleBtn.addEventListener('click', () => {
    let theme = bodyElement.getAttribute('data-theme');
    if (theme === 'dark') {
        bodyElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        updateToggleIcon('light');
    } else {
        bodyElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateToggleIcon('dark');
    }
});

function updateToggleIcon(theme) {
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
        icon.style.color = '#f1c40f';
    } else {
        icon.className = 'fa-solid fa-moon';
        icon.style.color = '';
    }
}

// === DATA SIMULASI RIWAYAT LOG ===
const dummyData = [
    { waktu: "15:05:00", koordinat: "-7.8421, 112.0134", kecepatan: "45 Km/jam", status: "Bergerak" },
    { waktu: "14:58:12", koordinat: "-7.8435, 112.0110", kecepatan: "52 Km/jam", status: "Bergerak" },
    { waktu: "14:40:00", koordinat: "-7.8460, 112.0085", kecepatan: "0 Km/jam", status: "Berhenti" },
    { waktu: "14:35:15", koordinat: "-7.8492, 112.0050", kecepatan: "38 Km/jam", status: "Bergerak" },
    { waktu: "14:20:30", koordinat: "-7.8510, 112.0012", kecepatan: "60 Km/jam", status: "Bergerak" }
];

const tableBody = document.getElementById('history-log');
const btnTampilkan = document.getElementById('btn-tampilkan');

function renderHistoryData() {
    tableBody.innerHTML = ""; 
    
    dummyData.forEach(item => {
        const row = document.createElement('tr');
        const statusColor = item.status === "Bergerak" ? "var(--primary-color)" : "var(--text-muted)";

        row.innerHTML = `
            <td>${item.waktu}</td>
            <td style="font-family: monospace;">${item.koordinat}</td>
            <td>${item.kecepatan}</td>
            <td style="color: ${statusColor}; font-weight: 600;">${item.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Muat data awal otomatis
renderHistoryData();

// Simulasi Loading saat tombol ditekan
btnTampilkan.addEventListener('click', () => {
    tableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 2rem;">Memuat data GPS...</td></tr>`;
    setTimeout(() => {
        renderHistoryData();
    }, 600);
});
