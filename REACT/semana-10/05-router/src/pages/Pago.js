import { useNavigate } from 'react-router-dom'
import "./styles.css";

import offline from "../assets/offline.png";
import anuncios from "../assets/anuncios.png";
import troque from "../assets/troque.png";
import oQueQuiser from "../assets/oquequiser.png";

import { useUsuario } from "../contexts/usuarioContext";
import { useMusicas } from "../contexts/musicasContext";

import { BemVindo, Funcionalidade, Compartilhe, Musica } from "../components";

export const Pago = () => {
  const { alteraTipoDePlano } = useUsuario();
  const { musicas } = useMusicas();
  const navigate = useNavigate();

  const funcionalidades = [
    {
      id: 1,
      imgSrc: offline,
      titulo: "Modo offline",
      descricao: "Ouça música onde estiver",
    },
    {
      id: 2,
      imgSrc: anuncios,
      titulo: "Ouça músicas sem anúncios",
      descricao: "Curta música, sem parar.",
    },
    {
      id: 3,
      imgSrc: oQueQuiser,
      titulo: "Ouça o que quiser",
      descricao: "Mesmo no celular ou tablet",
    },
    {
      id: 4,
      imgSrc: troque,
      titulo: "Troque de música o quanto quiser.",
      descricao: "Pule quando quiser.",
    },
  ];

  const mudarParaGratuito = () => {
    alteraTipoDePlano("free");
    navigate("/gratuito");
  }

  return (
    <div className="Pago">
      <BemVindo />
      <p>
        Agora você tem acesso as <strong>melhores funcionalidades</strong>!!!
      </p>
      <ul>
        {funcionalidades.map((funcionalidade) => (
          <Funcionalidade
            key={funcionalidade.id}
            funcionalidade={funcionalidade}
          />
        ))}
      </ul>

      <p>
        Compartilhe seu plano com <strong>amigos e familiares!!!</strong>
      </p>
      <p className="CustoAdicional">Custo adicional de R$ 5,00 por pessoa</p>
      <Compartilhe /> 

      <h3>Músicas</h3>
      {musicas.map((musica) => (
        <Musica key={musica.id} musica={musica} />
      ))}   

      <div className="Cancele">
        <p> Cancele quando quiser.</p>
        <button onClick={mudarParaGratuito}>Cancele</button>
      </div>
    </div>
  );
};
