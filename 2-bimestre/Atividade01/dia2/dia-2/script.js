let etapa = 1;

function proximoGrupo() {

    if (etapa === 1) {

        document.getElementById("grupoA").innerHTML = `
            <h2>Grupo D</h2>
            <h3>Selecoes</h3>
            <ul>
                <li>Estados Unidos</li>
                <li>Paraguai</li>
                <li>Australia</li>
                <li>Turquia</li>
            </ul>

            <details>
                <h3>Saiba Mais</h3>
                <p>EUA jogam em casa, vantagem historica.</p>
                <p>Australia enfrenta selecoes sul-americanas com frequencia.</p>
            </details>
        `;

        document.getElementById("grupoB").innerHTML = `
            <h2>Grupo E</h2>
            <h3>Selecoes</h3>
            <ul>
                <li>Alemanha</li>
                <li>Equador</li>
                <li>Costa do Marfim</li>
                <li>Curacao</li>
            </ul>

            <details>
                <h3>Saiba Mais</h3>
                <p>Alemanha costuma dominar fases de grupos.</p>
                <p>Equador e Costa do Marfim tem estilos fisicos parecidos.</p>
            </details>
        `;

        document.getElementById("grupoC").innerHTML = `
            <h2>Grupo F</h2>
            <h3>Selecoes</h3>
            <ul>
                <li>Holanda</li>
                <li>Japao</li>
                <li>Tunisia</li>
                <li>Suecia</li>
            </ul>

            <details>
                <h3>Saiba Mais</h3>
                <p>Holanda e Japao ja tiveram confrontos equilibrados.</p>
                <p>Suecia tem tradicao em Copas do Mundo.</p>
            </details>
        `;

        etapa = 2;
    }
}
function add() {

    let container = document.getElementById("Cards");

    let novoCard = `
        <div class="card" style="width: 22rem; margin: 10px;" aria-hidden="true">
            <img src="img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paqueta">

            <div class="card-body">
                <h5 class="card-title">
                    <span class="card-title">Lucas Paqueta</span>
                    <span class="badge text-bg-secondary">8,8</span>
                </h5>

                <p class="card-text">
                    <span><strong>Nascimento:</strong> 27/08/1997 (28 anos)</span><br>
                    <span><strong>Altura:</strong> 1,80 m</span><br>
                    <span><strong>Posicao:</strong> Meio-campista</span><br>
                </p>
            </div>
        </div>
    `;

    container.innerHTML += novoCard;
}