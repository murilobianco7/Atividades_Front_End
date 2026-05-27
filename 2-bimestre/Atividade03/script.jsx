const { useState } = React;
const palavra = "REACT";

function App() {

  const [letra, setLetra] = useState("");
  const [acertos, setAcertos] = useState([]);
  const [tentativas, setTentativas] = useState(6);

  function verificar() {
    
    const maiuscula = letra.toUpperCase();
    if (!maiuscula) return;
    if (palavra.includes(maiuscula)) {
      if (!acertos.includes(maiuscula)) {
        setAcertos([...acertos, maiuscula]);
      }
    } else {
      setTentativas(tentativas - 1);
    }
    setLetra("");
  }
  const venceu = palavra
    .split("")
    .every((l) => acertos.includes(l));

  return (
    <div className="container">
      <h1>TERMO</h1>
      <div className="linha">
        {
          palavra.split("").map((l, index) => (
            <div className="quadrado" key={index}>
              {acertos.includes(l) ? l : "_"}
            </div>
          ))
        }

      </div>

      {
        !venceu && tentativas > 0 && (
          <div>
            <input
              maxLength="1"
              value={letra}
              onChange={(e) => setLetra(e.target.value)}
            />
            <button onClick={verificar}>
              Enviar
            </button>
          </div>
        )
      }
      <h2>Tentativas: {tentativas}</h2>
      {
        venceu && <h2>Você venceu!</h2>
      }
      {
        tentativas === 0 && (
          <h2>Você perdeu! Palavra: {palavra}</h2>
        )
      }
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
