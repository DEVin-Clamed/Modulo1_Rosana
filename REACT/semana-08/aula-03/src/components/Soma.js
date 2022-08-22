import PropTypes from 'prop-types';

export default function Soma({ numero1, numero2}) {
  const resultado = numero1 + numero2;
  return <p>A soma dos números é {resultado}</p>
}

Soma.propTypes = {
  numero1: PropTypes.number,
  numero2: PropTypes.number,
}

Soma.defaultProps = {
  numero1: 0,
  numero2: 0,
}
