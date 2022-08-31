import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import './Compartilhe.css'
import { useUsuario } from '../../reducers/usuarioReducer';

export const Compartilhe = () => {
  const navigate = useNavigate();
  const [pessoaAdicional, setPessoaAdicional] = useState("")
  const [ state, dispatch] = useUsuario();
  const { nomesAdicionais, valorAdicional } = state;

  const adicionarPessoa = () => {
    dispatch({
      type: 'ADICIONA_PESSOA',
      payload: pessoaAdicional,
    });
    setPessoaAdicional("");
  }

  const removerPessoa = (id) => {
    dispatch({
      type: 'REMOVE_PESSOA',
      payload: id,
    });
  }

  const irParaDetalhes = (userName) => {
    navigate(`/pago/${userName}`);
  }

  return (
    <div className="Compartilhe">
        <div className="Adicionar">
          <span>Adicionar: </span>
          <input type="text" placeholder="Nome" 
            value={pessoaAdicional}
            onChange={(e) => setPessoaAdicional(e.target.value)}
          />
          <button onClick={() => adicionarPessoa()}>Adicionar</button>
        </div>

        <div>
          <p>Valor adicional ao plano: <strong>R$ {valorAdicional},00</strong></p>
          <p>Quantidade de usuários: <strong>{nomesAdicionais.length}</strong></p>
          <ul>
            {nomesAdicionais.map((adicional) => (
            <li key={adicional.id}>
              <span>◆ {adicional.nome}</span> 
              <button onClick={() => irParaDetalhes(adicional.nome.toLowerCase())} >Detalhes</button>
              <button onClick={() => removerPessoa(adicional.id)}>x</button>
            </li>
            ))}
          </ul>
        </div>
      </div>
  );
}
