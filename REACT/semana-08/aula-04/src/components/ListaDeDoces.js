import Doce from "./Doce";

export default function ListaDeDoces({ listaDeDoces }) {
  return (
    <>
      <h3>Lista de Doces</h3>
      {listaDeDoces.map((doce) => (
        <Doce doce={doce} />
      ))}
    </>
  );
}

ListaDeDoces.defaultProps = {
  listaDeDoces: []
}
