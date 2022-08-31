import { useState } from 'react'
import "./App.css";
import { Cabecalho, Gratuito, Pago } from "./components";

function App() {
  const [tipoDePlano, setTipoDePlano] = useState("free");
  const nomeDoUsuario = "Rosana Rezende";

  return (
    <div className="App">
      <Cabecalho nome={nomeDoUsuario} />
      {tipoDePlano === "free" ? (
        <Gratuito 
          alteraTipoDePlano={setTipoDePlano} 
          nome={nomeDoUsuario} 
        />
      ) : (
        <Pago 
          alteraTipoDePlano={setTipoDePlano} 
          nome={nomeDoUsuario} 
        />
      )}
    </div>
  );
}

export default App;
