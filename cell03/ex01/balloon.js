const cores = ['red', 'green', 'blue']
const balao = document.getElementById('balao');

let indice = 0;

	balao.addEventListener('click', function() {
	balao.style.width = (largura + 50) + 'px';
	balao.style.height = (altura + 50) + 'px';
	
	
	balao.style.backgroundColor = cores [indice]
	indice = (indice + 1) % cores.lenght;
});
