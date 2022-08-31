import { Link } from "react-router-dom";

export const NaoEncontrado = () => {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <p>
      <Link to="/">Voltar para Home</Link>
      </p>
    </div>
  );
}
