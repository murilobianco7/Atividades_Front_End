function validarCPF() {
    let cpf = document.getElementById("cpf").value;
    cpf = cpf.replace(/\D/g, "");

    let resultado = document.getElementById("resultado");
    if (cpf.length !== 11) {
        resultado.innerHTML = "cpf invalido";
        resultado.style.color = "red";
        return;
    }
    if (/^(\d)\1+$/.test(cpf)) {
        resultado.innerHTML = "cpf invalido";
        resultado.style.color = "red";
        return;
    }
    let soma = 0;
    let resto;

    for (let i = 0; i < 9; i++) {
        soma += cpf[i] * (10 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;

    if (resto != cpf[9]) {
        resultado.innerHTML = "cpf invalido";
        resultado.style.color = "red";
        return;
    }
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;

    if (resto != cpf[10]) {
        resultado.innerHTML = "cpf invalido";
        resultado.style.color = "red";
        return;
    }
    resultado.innerHTML = "cpf valido";
    resultado.style.color = "green";
}