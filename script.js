document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const mainContent = document.querySelector("main");
    const aside = document.querySelector("aside");

    title.textContent = "Belajar Javascript Dasar - Interaksi Pertama! 🤍";
    title.addEventListener("click", () => {
        nav.classList.toggle("show-nav");
    });

  // === Elemen paragraf pertama di artikel pertama yang diperbarui saat terjadi klik ===
    const targetParagraph = document.querySelector("article:first-of-type > p");

    document.querySelector("article:first-of-type").addEventListener("click", () => {
        targetParagraph.textContent = 
            "HTML semantik itu penting karena membuat struktur halaman web jadi lebih jelas dan rapi. Daripada semua elemen cuma pakai <div> yang bikin orang bingung, elemen semantik seperti <header>, <nav>, atau <article> membantu browser, mesin pencari, dan pembaca memahami bagian-bagian halaman dengan lebih mudah. Hal ini juga bikin website lebih ramah untuk aksesibilitas dan lebih gampang diperbaiki kalau ada yang salah. Selain itu, penggunaan HTML semantik membuat kode terlihat lebih profesional dan tertata. Singkatnya, HTML semantik membantu halaman web jadi lebih teratur, mudah dipahami, dan nyaman digunakan.";
    });

    document.addEventListener("keydown", (event) => {
        if(event.key === "d") {
            document.body.classList.toggle("dark");
        }
    });

    let count = 0;
    mainContent.addEventListener("click", () => {
        count++;
        aside.textContent = 'Kamu klik konten ini sebanyak ${count} kali';
    })
})

    // === saat tombol F ditekan Ukuran font navbar akan berubah ===
    document.addEventListener("keydown", (event) => {
        if (event.key === "f" || event.key === "F") {
            const navList = document.querySelector("nav ul");
            navList.style.fontSize =
            navList.style.fontSize === "26px" ? "18px" : "26px";
        }
    });

    // === setiap scroll 200px Background halaman akan berubah ===
    let lastScrollChange = 0;
    const colors = ["#a43aa0ff", "#9d749bff", "#bd19b3ff", "#c05ef4ff", "#cd4deaff"];
    let colorIndex = 0;

    window.addEventListener("scroll", () => {
        if (window.scrollY - lastScrollChange >= 200) {
            colorIndex = (colorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[colorIndex];
            lastScrollChange = window.scrollY;
        }
    });
// ===