import './Funcionalidade.css'

export const Funcionalidade = ({ funcionalidade }) => {
  return (
    <li className="Funcionalidade">
      <div className="Imagem">
        <img src={funcionalidade.imgSrc} alt={funcionalidade.titulo} />
      </div>
      <div className="Descricao">
        <h4>{funcionalidade.titulo}</h4>
        <p>{funcionalidade.descricao}</p>
      </div>
    </li>
  );
};
