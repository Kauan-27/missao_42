const cores = ['red', 'green', 'blue']
const balao = document.getElementById('balao');
const estilo = window.getComputedStyle(balao);

let indice = 0;
let largura = parseInt(estilo.width);
let altura = parseInt(estilo.height);

	balao.addEventListener('click', function() {

	indice = (indice + 1) % cores.length;
	balao.style.backgroundColor = cores[indice];
	
		largura += 10;
		balao.style.width = largura + 'px';

		altura += 10;
		balao.style.height = altura + 'px';

		if (largura >= 420) {
			balao.style.width = '200px';
			balao.style.height = '200px';
			largura = 200;
			altura = 200;
		}

})

balao.addEventListener('mouseleave', function() {

		indice = (indice - 1) % cores.length;
	
		if (indice < 0) {
			indice = 2;	
		}

		balao.style.backgroundColor = cores[indice];

		largura -= 5;
		balao.style.width = largura + 'px';

		altura -= 5;
		balao.style.height = altura + 'px';
		
})
;
