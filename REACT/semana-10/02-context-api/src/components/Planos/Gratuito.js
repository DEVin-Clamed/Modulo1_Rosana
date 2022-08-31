import "./Planos.css";
import { UsuarioContext } from "../../context/usuarioContext";
// import { MusicasContext } from '../../context/musicasContext';
import { BemVindo } from "../../components";

export const Gratuito = () => {
  return (
    <UsuarioContext.Consumer>
      {(value) => (
        <>
          <BemVindo />
          <p className="TipoDePlano">Você está usando o plano gratuito.</p>
          <h3 className="Assine">Assine o plano Premium</h3>
          <p>Curta músicas sem anúncios, ouça no modo offline e muito mais.</p>
          <p> Cancele quando quiser.</p>
          <p className="Valor">
            <span>R$ 0,00</span> por 3 meses de Premium
          </p>

          {/* Quebra a aplicação porque não está "abraçado" pelo MusicasProvider */}
          {/* <MusicasContext.Consumer>
              {musicasValue => (
                <div>
                  <h3>Músicas</h3>
                  {musicasValue.musicas.map(musica => (
                    <p key={musica.id}>{musica.nome} - {musica.artista}</p>
                  ))}
                </div>
              )}
          </MusicasContext.Consumer> */}

          <button
            className="BotaoAssine"
            onClick={() => value.alteraTipoDePlano("premium")}
          >
            APROVEITE 3 MESES GRÁTIS
          </button>
        </>
      )}
    </UsuarioContext.Consumer>
  );
};
