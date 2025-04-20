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

function startSite() {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.main-content').classList.remove('hidden');
    gerarCorações();
    carregarFotos();
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
    const galeria = document.getElementById("galeria");
    fotos.forEach(foto => {
        const img = document.createElement("img");
        img.src = "fotos/" + foto;
        img.classList.add("foto");
        galeria.appendChild(img);
    });
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
// Seleciona todas as imagens da galeria
const imagens = document.querySelectorAll('.galeria img');

// Cria a estrutura do modal
const modal = document.createElement('div');
modal.classList.add('modal');
const modalImg = document.createElement('img');
modalImg.classList.add('modal-content');
const span = document.createElement('span');
span.classList.add('close');
span.innerHTML = '&times;';  // Ícone de fechar

// Adiciona o conteúdo do modal à página
modal.appendChild(modalImg);
modal.appendChild(span);
document.body.appendChild(modal);

// Abre o modal com a imagem clicada
imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = imagem.src;
    });
});

// Fecha o modal quando clicar no "x"
span.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal se o usuário clicar fora da imagem
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
