// Objetivo - Quando clicarmos no botao temos que mostrar a imagem de fundo correspondente

//pegar o elemento html dos botoes
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// identificar o click no botao
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desmarcarBotao();
        selecionarBotaoCarrossel(botao);
        esconderImagemAtiva();
        trocarImagem(indice);
    })
});
        //aparecer imagem de fundo referente ao botao clicado
function trocarImagem(indice) {
    imagens[indice].classList.add('ativa');
}
        //esconder a imagem ativa de fundo anterior
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}
        // marcar o botao clicado como selecionado
function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}
        // desmarcar o botao selecionado
function desmarcarBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
