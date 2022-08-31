import { useReducer } from 'react';

const initialState = {
  nomesAdicionais:[
    { 
      id: 1,
      nome: "Cleiton",
    }
  ],
  valorAdicional: 5,
}

const reducer = (state, action) => {
  const { nomesAdicionais, valorAdicional} = state;
  const { type, payload } = action;

  switch (type) {
    // e devolve um novo estado para cada tipo de ação

    case 'ADICIONA_PESSOA':
      return {
        // copia o estado, senão ele sobreescreve o estado inicial
        ...state,

        // e realiza as alterações
        nomesAdicionais:[
          ...nomesAdicionais,
          {
            id: nomesAdicionais.length + 1,
            nome: payload,
          },
        ],
        valorAdicional: valorAdicional + 5,
      };

    case 'REMOVE_PESSOA':
      return {
        // copia o estado
        ...state,

        // e realiza as alterações
        nomesAdicionais: nomesAdicionais.filter((adicional) => adicional.id !== payload),
        valorAdicional: valorAdicional - 5,
      };
    
    default:
      return state;
  }
}

export const useUsuarioReducer = () => {
  return useReducer(reducer, initialState)
}

