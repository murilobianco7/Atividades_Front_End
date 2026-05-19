function calcular(){
    let pacote = Number(document.getElementById("pacote").value);
    let pessoas = Number(document.getElementById("pessoas").value);
    let custoBruto = pacote * pessoas;
    let taxa = custoBruto * 0.10;
    let total = custoBruto + taxa;
    let desconto = 0;
    if(pessoas > 100){
        desconto = total * 0.05;
        total = total - desconto;
    }
    document.getElementById("resultado").innerHTML = `

        <p>Custo bruto: R$ ${custoBruto.toFixed(2)}</p>
        <p>Taxa de serviço: R$ ${taxa.toFixed(2)}</p>
        <p>Desconto: R$ ${desconto.toFixed(2)}</p>
        <p>Total final: R$ ${total.toFixed(2)}</p>

    `;
}