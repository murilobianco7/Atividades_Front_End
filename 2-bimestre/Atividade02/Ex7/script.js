function validarCartao(){
    let numero = document.getElementById("cartao").value;

    numero = numero.replace(/\s/g, "");
    if(numero.length < 13 || numero.length > 16){
        alert("Cartão inválido");
        return;
    }
    let soma = 0;
    let dobro = false;
    for(let i = numero.length - 1; i >= 0; i--){
        let digito = parseInt(numero[i]);
        if(dobro){
            digito = digito * 2;
            if(digito > 9){
                digito = digito - 9;
            }
        }
        soma = soma + digito;

        dobro = !dobro;
    }
    let valido = false;
    if(soma % 10 == 0){
        valido = true;
    }
    let bandeira = "Desconhecida";

    if(numero.startsWith("4")){
        bandeira = "Visa";
    }
    if(numero.startsWith("5")){
        bandeira = "MasterCard";
    }
    let setor = "Financeiro";
    let banco = "Banco Não Identificado";
    if(numero.startsWith("4")){
        banco = "Banco Visa";
    }
    if(numero.startsWith("5")){
        banco = "Banco Master";
    }
    if(valido){
        document.getElementById("status").innerHTML = "Status: Válido";
    }
    else{
        document.getElementById("status").innerHTML = "Status: Inválido";
    }
    document.getElementById("bandeira").innerHTML = "Bandeira: " + bandeira;
    document.getElementById("setor").innerHTML = "Setor: " + setor;
    document.getElementById("banco").innerHTML = "Banco: " + banco;
}