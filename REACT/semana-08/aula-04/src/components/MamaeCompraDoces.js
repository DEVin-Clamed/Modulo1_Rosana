export default function MamaeCompraDoces({ listaDeDoces = [] }) {
  return (
    <>
      <h3>Mamãe comprou doces?</h3>
      {listaDeDoces.length >=1 ? (
        <p>Sim!</p>
      ) : (
        <p>Não!</p>
      )}
      {/* {listaDeDoces.length >= 1 ? (
        <p>Sim, ainda temos {listaDeDoces.length} doces em casa!</p>
      ) : (
        <>
          <p>Acabaram os doces!</p>
          <p>Urgente: pedir mais pra mamãe!</p>
        </>
      )} */}
    </>
  );
}
