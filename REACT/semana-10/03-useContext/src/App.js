import "./App.css";
import { Cabecalho, Gratuito, Pago } from "./components";

import { useUsuario } from "./contexts/usuarioContext";
import { MusicasProvider } from "./contexts/musicasContext";

export default function App() {
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
