import "./Planos.css";

import offline from "../../assets/offline.png";
import anuncios from "../../assets/anuncios.png";
import troque from "../../assets/troque.png";
import oQueQuiser from "../../assets/oquequiser.png";

import { UsuarioContext } from "../../context/usuarioContext";
import { MusicasContext } from '../../context/musicasContext';

import { BemVindo, Funcionalidade, Musica } from "../../components";

export const Pago = () => {
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
    <UsuarioContext.Consumer>
      {(value) => (
        <div className="Pago">
          <BemVindo />
          <p>
            Agora você tem acesso as <strong>melhores funcionalidades</strong>
            !!!
          </p>
          <ul>
            {funcionalidades.map((funcionalidade) => (
              <Funcionalidade
                key={funcionalidade.id}
                funcionalidade={funcionalidade}
              />
            ))}
          </ul>

          <MusicasContext.Consumer>
              {value => (
                <>
                  <h3>Músicas</h3>
                  {value.musicas.map(musica => (
                    <Musica key={musica.id} musica={musica} />
                  ))}
                </>
              )}
          </MusicasContext.Consumer>


          <div className="Cancele">
            <p> Cancele quando quiser.</p>
            <button onClick={() => value.alteraTipoDePlano("free")}>Cancele</button>
          </div>
        </div>
      )}
    </UsuarioContext.Consumer>
  );
};
