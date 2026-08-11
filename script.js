// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Essa mensagem aparece para vocês quando abrirem o 'Inspecionar Elemento'
    console.log("Site carregado! Lembrem-se de atualizar as fotos e textos do dia.");

    // Exemplo: Função para alertar se uma imagem estiver sem o atributo 'alt'
    const imagens = document.querySelectorAll('img');
    
    imagens.forEach(img => {
        if (!img.getAttribute('alt')) {
            console.warn(`Atenção: Uma imagem está sem texto alternativo (alt). Caminho: ${img.src}`);
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const btnAumentar = document.getElementById('btn-aumentar');
    const btnDiminuir = document.getElementById('btn-diminuir');
    const btnResetar = document.getElementById('btn-resetar');

    // Define o tamanho inicial em porcentagem
    let tamanhoFonte = 100;

    if (btnAumentar) {
        btnAumentar.addEventListener('click', function() {
            if (tamanhoFonte < 150) { // Limite máximo de 150%
                tamanhoFonte += 10;
                document.body.style.fontSize = tamanhoFonte + '%';
            }
        });
    }

    if (btnDiminuir) {
        btnDiminuir.addEventListener('click', function() {
            if (tamanhoFonte > 80) { // Limite mínimo de 80%
                tamanhoFonte -= 10;
                document.body.style.fontSize = tamanhoFonte + '%';
            }
        });
    }

    if (btnResetar) {
        btnResetar.addEventListener('click', function() {
            tamanhoFonte = 100;
            document.body.style.fontSize = '100%';
        });
    }
});