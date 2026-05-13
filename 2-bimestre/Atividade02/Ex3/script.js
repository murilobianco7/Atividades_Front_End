document.getElementById("btnCalcular").addEventListener("click", function () {

    let nome = document.getElementById("nome").value;
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let resultado = document.getElementById("resultado");

    if (nome === "" || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultado.innerHTML = "preencha todos os campos corretamente";
        resultado.style.color = "black";
        return;
    }
    let media = (n1 + n2 + n3) / 3;
    media = media.toFixed(2);

    if (media >= 7) {
        resultado.innerHTML = nome + " aprovado! Media: " + media;
        resultado.style.color = "blue";
    }
    else if (media >= 4 && media < 7) {
        let falta = (10 - media).toFixed(2);
        resultado.innerHTML = nome + " em exame. Falta " + falta + " para 10. Media: " + media;
        resultado.style.color = "green";
    }
    else {
        resultado.innerHTML = nome + " reprovado. Media: " + media;
        resultado.style.color = "red";
    }
});