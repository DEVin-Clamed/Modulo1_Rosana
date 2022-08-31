import { Link } from 'react-router-dom'
import './Cabecalho.css'
import logo from '../../assets/clamedfy.png'
import { useUsuario } from '../../contexts/usuarioContext'

export const Cabecalho = () => {
  const { nome } = useUsuario()

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Clamedfy" />
      </Link>
      <h1>{nome}</h1>
    </header>
  )
}
