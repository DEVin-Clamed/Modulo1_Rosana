export default function PostHeader({
  imagemDoPerfil,
  nomeDoAutor,
  dataDoPost,
}) {
  return (
    <div className="Header">
      <div className="InformacoesPessoais">
        <img
          src={imagemDoPerfil}
          alt="imagem do perfil"
          className="ImagemDoPerfil"
        />
        <div>
          <h3 className="NomeDoAutor">{nomeDoAutor}</h3>
          <p className="DataDoPost">{dataDoPost}</p>
        </div>
      </div>
      <img
        src="https://img.icons8.com/material-rounded/24/000000/menu-2.png"
        alt="menu"
        className="Menu"
      />
    </div>
  );
}
