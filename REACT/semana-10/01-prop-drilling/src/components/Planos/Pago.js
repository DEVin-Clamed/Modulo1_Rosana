import "./Planos.css";

import offline from "../../assets/offline.png";
import anuncios from "../../assets/anuncios.png";
import troque from "../../assets/troque.png";
import oQueQuiser from "../../assets/oquequiser.png";

import { BemVindo, Funcionalidade} from '../../components'

export const Pago = ({ alteraTipoDePlano, nome }) => {
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

  return (
    <div className="Pago">
      <BemVindo nome={nome}/>
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

      <div className="Cancele">
        <p> Cancele quando quiser.</p>
        <button onClick={() => alteraTipoDePlano("free")}>Cancele</button>
      </div>
    </div>
  );
};
