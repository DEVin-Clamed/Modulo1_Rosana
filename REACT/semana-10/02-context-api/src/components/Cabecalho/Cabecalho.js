import logo from "../../assets/clamedfy.png";
import "./Cabecalho.css";

import { UsuarioContext } from "../../context/usuarioContext";

export const Cabecalho = () => {
  return (
    <UsuarioContext.Consumer>
      {value => (
        <header>
          <img src={logo} alt="Clamedfy" />
          <h1>{value.nome}</h1>
        </header>
      )}
    </UsuarioContext.Consumer>
  );
};
