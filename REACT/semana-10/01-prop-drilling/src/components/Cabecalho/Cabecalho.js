import './Cabecalho.css'
import logo from '../../assets/clamedfy.png'

export const Cabecalho = ({ nome }) => {

  return (
    <header>
      <img src={logo} alt="Clamedfy" />
      <h1>{nome}</h1>
    </header>
  )
}
