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