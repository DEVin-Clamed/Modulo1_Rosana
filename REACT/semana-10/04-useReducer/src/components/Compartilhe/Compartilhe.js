import { useState } from 'react';
import './Compartilhe.css'
import { useUsuarioReducer } from '../../reducers/usuariolReducer';

export const Compartilhe = () => {
  const [pessoaAdicional, setPessoaAdicional] = useState("")

    // // ===== sem useReducer
  // const [nomesAdicionais, setNomesAdicionais] = useState([
  //   { 
  //     id: 1,
  //     nome: "Cleiton",
  //   }
  // ]);
  // const [valorAdicional, setValorAdicional] = useState(5)


  // // ===== com useReducer
  const [ state, dispatch] = useUsuarioReducer();
  const { nomesAdicionais, valorAdicional } = state;

   // // sem useReducer
  // const adicionarPessoa = () => {
  //   setNomesAdicionais([
  //     ...nomesAdicionais,
  //     {
  //       id: nomesAdicionais.length + 1,
  //       nome: pessoaAdicional,
  //     },
  //   ]);
  //   setValorAdicional(valorAdicional + 5);

  //   // limpar o input
  //   setPessoaAdicional("");
  // }


  // // com useReducer
  const adicionarPessoa = () => {
    dispatch({
      type: 'ADICIONA_PESSOA',
      payload: pessoaAdicional,
    });
    setPessoaAdicional("");
  }

  // // // sem useReducer
  // const removerPessoa = (id) => {
  //   setNomesAdicionais(nomesAdicionais.filter((adicional) => adicional.id !== id));
  //   setValorAdicional(valorAdicional - 5);
  // }


  // com useReducer
  const removerPessoa = (id) => {
    dispatch({
      type: 'REMOVE_PESSOA',
      payload: id,
    });
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
              <button onClick={() => removerPessoa(adicional.id)}>x</button>
            </li>
            ))}
          </ul>
        </div>
      </div>
  );
}
