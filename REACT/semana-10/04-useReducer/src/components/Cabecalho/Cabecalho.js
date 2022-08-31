import logo from '../../assets/clamedfy.png'
import './Cabecalho.css'
import { useUsuario } from '../../contexts/usuarioContext'

export const Cabecalho = () => {
  const { nome } = useUsuario()

  return (
    <header>
      <img src={logo} alt="Clamedfy" />
      <h1>{nome}</h1>
    </header>
  )
}
