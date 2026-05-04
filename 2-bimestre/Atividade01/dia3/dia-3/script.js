function mostrarImagem() {
    const img = document.createElement("img");
    img.src = "img/Tabela_Jogos.png";
    img.alt = "Tabela de Jogos";

    document.body.appendChild(img);
}

function revelar() {
    document.getElementById("imagem-jogador").src = "img/_vinicius_junior.png";
    document.getElementById("Nome").innerText = "Vinicius José Paixão de Oliveira Junior";
    document.getElementById("Data_Nas").innerText = "12/07/2000 (25 anos)";
    document.getElementById("Altura").innerText = "1,76 m";
    document.getElementById("Posicao").innerText = "Ponta-esquerda / Atacante";
    document.getElementById("Rank").innerText = "9,5";
}