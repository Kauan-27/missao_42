const cores = ['red', 'green', 'blue']
const botao = document.getElementById('botaoCor');
let indice = 0

	botao.addEventListener('click', function() {
	document.body.style.backgroundColor = cores[indice];
	indice = (indice + 1) % cores.length;
});
