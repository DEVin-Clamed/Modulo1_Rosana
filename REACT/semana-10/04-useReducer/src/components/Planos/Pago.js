import { useState } from 'react';
import "./Planos.css";

import offline from "../../assets/offline.png";
import anuncios from "../../assets/anuncios.png";
import troque from "../../assets/troque.png";
import oQueQuiser from "../../assets/oquequiser.png";

import { useUsuario } from "../../contexts/usuarioContext";
import { useMusicas } from "../../contexts/musicasContext";

import { BemVindo, Funcionalidade, Musica } from "../../components";

import { useUsuarioReducer } from '../../reducers/usuariolReducer';

export const Pago = () => {
  const { alteraTipoDePlano } = useUsuario();
  const { musicas } = useMusicas();

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

    // limpar o input
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

  const funcionalidades = [
    {
      id: 1,
      imgSrc: offline,
      titulo: "Modo offline",
      descricao: "Ouça música onde estiver",
    },
    {
      id: 2,
      imgSrc: anuncios,
      titulo: "Ouça músicas sem anúncios",
      descricao: "Curta música, sem parar.",
    },
    {
      id: 3,
      imgSrc: oQueQuiser,
      titulo: "Ouça o que quiser",
      descricao: "Mesmo no celular ou tablet",
    },
    {
      id: 4,
      imgSrc: troque,
      titulo: "Troque de música o quanto quiser.",
      descricao: "Pule quando quiser.",
    },
  ];

  return (
    <div className="Pago">
      <BemVindo />
      <p>
        Agora você tem acesso as <strong>melhores funcionalidades</strong>!!!
      </p>
      <ul>
        {funcionalidades.map((funcionalidade) => (
          <Funcionalidade
            key={funcionalidade.id}
            funcionalidade={funcionalidade}
          />
        ))}
      </ul>

      <p>
        Compartilhe seu plano com <strong>amigos e familiares!!!</strong>
      </p>
      <p className="CustoAdicional">Custo adicional de R$ 5,00 por pessoa</p>

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

      <h3>Músicas</h3>
      {musicas.map((musica) => (
        <Musica key={musica.id} musica={musica} />
      ))}

      <div className="Cancele">
        <p> Cancele quando quiser.</p>
        <button onClick={() => alteraTipoDePlano("free")}>Cancele</button>
      </div>
    </div>
  );
};
