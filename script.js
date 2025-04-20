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
    "IMG_20250418_230547.jpg"
];

// Carrega corações e fotos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    gerarCorações();
    carregarFotos();
});

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
    const galeria = document.getElementById("galeria");
    fotos.forEach(foto => {
        const img = document.createElement("img");
        img.src = "fotos/" + foto;
        img.classList.add("foto");
        galeria.appendChild(img);

        // Adiciona evento para abrir no modal
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });
}

function explodirCoracoes() {
    for (let i = 0; i < 50; i++) {
        const estrela = document.createElement
