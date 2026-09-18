const cores = ['red', 'green', 'blue'];
const $botao = $('#botaoCor');
let indice = 0;

$botao.on('click', function() {
    $('body').css('background-color', cores[indice]);
    indice = (indice + 1) % cores.length;
});