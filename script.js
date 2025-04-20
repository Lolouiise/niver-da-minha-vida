function startSite() {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.main-content').classList.remove('hidden');
    gerarCorações();
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
