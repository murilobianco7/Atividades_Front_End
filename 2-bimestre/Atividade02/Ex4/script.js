document.getElementById("calcular").addEventListener("click", function () {

    let valor = Number(document.getElementById("valor").value);
    let bandeira = document.getElementById("bandeira").value;
    let parcelas = Number(document.getElementById("parcelas").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(valor) || valor <= 0 || isNaN(parcelas) || parcelas <= 0 || bandeira === "") {
        resultado.innerHTML = "Preencha todos os campos corretamente";
        resultado.style.color = "black";
        return;
    }

    let taxaBandeira = 0;
    switch (bandeira) {
        case "visa":
            taxaBandeira = 0.02;
            break;
        case "master":
            taxaBandeira = 0.0185;
            break;
        case "elo":
            taxaBandeira = 0.03;
            break;
    }

    let valorTaxa = valor * taxaBandeira;
    let juros = valor * (0.0035 * parcelas);
    let taxaMensal = 12.50 * parcelas;
    let total = valor + valorTaxa + juros + taxaMensal;
    let valorParcela = total / parcelas;

    resultado.innerHTML =
        "Taxa da bandeira: R$ " + valorTaxa.toFixed(2) + "<br>" +
        "Juros: R$ " + juros.toFixed(2) + "<br>" +
        "Taxa mensal: R$ " + taxaMensal.toFixed(2) + "<br>" +
        "Valor por parcela: R$ " + valorParcela.toFixed(2);

    resultado.style.color = "blue";

});