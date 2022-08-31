import './BemVindo.css'

import { useUsuario } from '../../contexts/usuarioContext'

export const BemVindo = () => {
  const { nome } = useUsuario()

  return <h2 className="BemVindo">Boas Vindas ao Clamedfy <span>{nome}</span></h2>
}
