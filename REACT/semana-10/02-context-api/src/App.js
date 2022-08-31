import "./App.css";

import { Cabecalho, Gratuito, Pago } from "./components";

import { UsuarioContext } from "./context/usuarioContext";
import { MusicasProvider } from "./context/musicasContext";

function App() {
  return (
    <UsuarioContext.Consumer>
      {(value) => (
        <div className="App">
          <Cabecalho />
          {value.tipoDePlano === "free" ? (
            <Gratuito />
          ) : (
            <MusicasProvider>
              <Pago />
            </MusicasProvider>
          )}
        </div>
      )}
    </UsuarioContext.Consumer>
  );
}

export default App;
