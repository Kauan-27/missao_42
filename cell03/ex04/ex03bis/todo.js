function salvarCookies() {
    const tarefas = [];

    // Iteração simplificada pelos elementos filhos no jQuery
    $("#ft_list div").each(function () {
        tarefas.push($(this).text());
    });

    document.cookie = "todo=" + JSON.stringify(tarefas) + ";path=/;max-age=31536000";
}

function carregarCookies() {
    const cookies = document.cookie.split("; ");
    const cookieTodo = cookies.find(row => row.startsWith("todo="));

    if (cookieTodo) {
        const tarefas = JSON.parse(cookieTodo.split("=")[1]);

        tarefas.reverse().forEach(texto => {
            // Criando, definindo texto e evento encadeados em jQuery
            const $divTarefa = $("<div>").text(texto).on('click', function () {
                if (confirm("Deseja remover esta tarefa?")) {
                    $(this).remove();
                    salvarCookies();
                }
            });

            $("#ft_list").prepend($divTarefa);
        });
    }
}

// Garante a execução após a leitura completa do DOM
$(document).ready(function () {
    carregarCookies();

    $("#btnTarefa").on('click', function () {
        let novaTarefa = prompt("Digite uma tarefa:")?.trim();

        if (!novaTarefa) {
            return;
        }

        const $divTarefa = $("<div>").text(novaTarefa).on('click', function () {
            if (confirm("Deseja remover esta tarefa?")) {
                $(this).remove();
                salvarCookies();
            }
        });

        $("#ft_list").prepend($divTarefa);
        salvarCookies();
    });
});