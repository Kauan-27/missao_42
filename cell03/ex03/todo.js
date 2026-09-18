const lista = document.querySelector("#ft_list");

function salvarCookies() {
    const tarefas = [];
    const divs = lista.querySelectorAll("div");
    
    divs.forEach(div => {
        tarefas.push(div.textContent);
    });

    document.cookie = "todo=" + JSON.stringify(tarefas) + ";path=/;max-age=31536000";
}

function carregarCookies() {
    const cookies = document.cookie.split("; ");
    const cookieTodo = cookies.find(row => row.startsWith("todo="));

    if (cookieTodo) {
        const tarefas = JSON.parse(cookieTodo.split("=")[1]);

        tarefas.reverse().forEach(texto => {
            const divTarefa = document.createElement("div");
            divTarefa.textContent = texto;

            divTarefa.addEventListener('click', function () {
                if (confirm("Deseja remover esta tarefa?")) {
                    divTarefa.remove();
                    salvarCookies();
                }
            });

            lista.prepend(divTarefa);
        });
    }
}

carregarCookies();

document.querySelector("#btnTarefa").addEventListener('click', function () {
    let novaTarefa = prompt("Digite uma tarefa:")?.trim();

    if (novaTarefa === "" || novaTarefa === null) {
        return;
    }

    const divTarefa = document.createElement("div");
    divTarefa.textContent = novaTarefa;

    divTarefa.addEventListener('click', function () {
        if (confirm("Deseja remover esta tarefa?")) {
            divTarefa.remove();
            salvarCookies();
        }
    });

    lista.prepend(divTarefa);
    salvarCookies();
});