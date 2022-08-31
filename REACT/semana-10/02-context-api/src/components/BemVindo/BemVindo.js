import "./BemVindo.css";

import { UsuarioContext } from "../../context/usuarioContext";

export const BemVindo = () => {
  return (
    <UsuarioContext.Consumer>
      {(value) => (
        <h2 className="BemVindo">
          Boas Vindas ao Clamedfy <span>{value.nome}</span>
        </h2>
      )}
    </UsuarioContext.Consumer>
  );
};
