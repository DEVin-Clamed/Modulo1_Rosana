import { useNavigate } from 'react-router-dom'
import "./styles.css";
import { useUsuario } from "../contexts/usuarioContext";
import { BemVindo } from "../components";

export const Gratuito = () => {
  const { alteraTipoDePlano } = useUsuario();
  const navigate = useNavigate();

  const mudarParaPremium = () => {
    alteraTipoDePlano("premium");
    navigate("/pago");
  }

  return (
    <div>
      <BemVindo />
      <p className="TipoDePlano">Você está usando o plano gratuito.</p>
      <h3 className="Assine">Assine o plano Premium</h3>
      <p>Curta músicas sem anúncios, ouça no modo offline e muito mais.</p>
      <p> Cancele quando quiser.</p>
      <p className="Valor">
        <span>R$ 0,00</span> por 3 meses de Premium
      </p>
      <button
        className="BotaoAssine"
        onClick={mudarParaPremium}
      >
        APROVEITE 3 MESES GRÁTIS
      </button>
    </div>
  );
};
