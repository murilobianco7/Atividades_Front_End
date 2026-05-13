let input = document.getElementById("nome");
let botao = document.getElementById("adicionar");
let lista = document.getElementById("lista");

botao.addEventListener("click", function () {

    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = nome;

    let containerBotoes = document.createElement("div");
    containerBotoes.classList.add("botoes");

    let concluir = document.createElement("button");
    concluir.textContent = "Concluir";

    concluir.addEventListener("click", function () {
        span.classList.toggle("riscado");
    });
    let editar = document.createElement("button");
    editar.textContent = "Editar";

    editar.addEventListener("click", function () {
        let novoNome = prompt("Novo nome:", span.textContent);
        if (novoNome !== null && novoNome.trim() !== "") {
            span.textContent = novoNome.trim();
        }
    });

    let excluir = document.createElement("button");
    excluir.textContent = "Excluir";

    excluir.addEventListener("click", function () {
        li.remove();
    });
    containerBotoes.appendChild(concluir);
    containerBotoes.appendChild(editar);
    containerBotoes.appendChild(excluir);

    li.appendChild(span);
    li.appendChild(containerBotoes);

    lista.appendChild(li);
    input.value = "";
});