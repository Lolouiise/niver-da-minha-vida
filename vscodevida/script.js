let currentIndex = 0;
let fotos = [
    "IMG-20240324-WA0001.jpg",
    "IMG-20240517-WA0004.jpg",
    "IMG-20250418_231621.jpg",
    "IMG-20240601-WA0007.jpg",
    "IMG-20240607-WA0035.jpg",
    "IMG-20240611-WA0023.jpg",
    "IMG-20240628-WA0017.jpg",
    "IMG-20240810-WA0060.jpg",
    "IMG-20241015-WA0009.jpg",
    "IMG-20241019-WA0003.jpg",
    "IMG-20241020-WA0011.jpg",
    "IMG-20241202-WA0013.jpg",
    "IMG_20250418_230449.jpg",
    "IMG_20250418_230547.jpg",
];

function startSite() {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.main-content').classList.remove('hidden');
    gerarCorações();
    carregarFotos();
    mostrarSlide(currentIndex); // mostra o primeiro slide fixo
}

function gerarCorações() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDelay = (Math.random() * 5) + "s";
        heartsContainer.appendChild(heart);
    }
}

function carregarFotos() {
    const slider = document.getElementById("slider");
    fotos.forEach((foto, index) => {
        const img = document.createElement("img");
        img.src = "fotos/" + foto;
        img.classList.add("slide");
        img.style.display = "none";
        slider.appendChild(img);
    });
}

function mostrarSlide(index) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function proximoSlide() {
    currentIndex = (currentIndex + 1) % fotos.length;
    mostrarSlide(currentIndex);
}

function slideAnterior() {
    currentIndex = (currentIndex - 1 + fotos.length) % fotos.length;
    mostrarSlide(currentIndex);
}

function explodirCoracoes() {
    for (let i = 0; i < 50; i++) {
        const estrela = document.createElement("div");
        estrela.className = "heart";
        estrela.style.left = Math.random() * 100 + "vw";
        estrela.style.top = Math.random() * 100 + "vh";
        estrela.style.position = "absolute";
        document.body.appendChild(estrela);
        setTimeout(() => estrela.remove(), 8000);
    }
}
