import { useReducer } from 'react';

// é o estado inicial
const initialState = {
  nomesAdicionais:[
    { 
      id: 1,
      nome: "Cleiton",
    }
  ],
  valorAdicional: 5,
}

// recebe o estado atual e uma ação
const reducer = (state, action) => {
  switch (action.type) {
    // e devolve um novo estado para cada tipo de ação

    case 'ADICIONA_PESSOA':
      return {
        // copia o estado, senão ele sobreescreve o estado inicial
        ...state,

        // e realiza as alterações
        nomesAdicionais:[
          ...state.nomesAdicionais,
          {
            id: state.nomesAdicionais.length + 1,
            nome: action.payload,
          },
        ],
        valorAdicional: state.valorAdicional + 5,
      };

    case 'REMOVE_PESSOA':
      return {
        // copia o estado
        ...state,

        // e realiza as alterações
        nomesAdicionais: state.nomesAdicionais.filter((adicional) => adicional.id !== action.payload),
        valorAdicional: state.valorAdicional - 5,
      };
    
    default:
      return state;
  }
}

export const useUsuario = () => {
  return useReducer(reducer, initialState)
}
