import "./App.css";

import { useUsuario } from "./contexts/usuarioContext";
import { MusicasProvider } from "./contexts/musicasContext";

import { Cabecalho, Gratuito, Pago } from "./components";

function App() {
  const { tipoDePlano } = useUsuario();

  return (
    <div className="App">
      <Cabecalho />
      {tipoDePlano === "free" ? (
        <Gratuito />
      ) : (
        <MusicasProvider>
          <Pago />
        </MusicasProvider>
      )}
    </div>
  );
}

export default App;
