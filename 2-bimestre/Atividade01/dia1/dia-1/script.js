function mostrarTabela() {
    if (document.getElementById("tabela")) return;

    const imagem = document.createElement("img");

    imagem.src = "Tabela_Jogos.png";
    imagem.id = "tabela";

    document.body.appendChild(imagem);
}
function revelar() {

    const img = document.querySelector(".card-img-top");
    img.src = "img/_vinicius_junior.png";

    document.getElementById("Nome").textContent = "Vinicius jose Paixao de Oliveira junior";
    document.getElementById("Rank").textContent = "9,5";
    document.getElementById("Data_Nas").textContent = "12/07/2000 (25 anos)";
    document.getElementById("Alutra").textContent = "1,76 m";

    document.querySelector('[id="Posicao "]').textContent = "Ponta-esquerda / Atacante";

    const elementos = document.querySelectorAll(".placeholder");

    elementos.forEach(el => {
    el.classList.remove("placeholder");
    el.classList.add("card-text");
    });
}