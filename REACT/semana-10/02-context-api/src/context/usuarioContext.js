import { createContext, useState } from "react";

const UsuarioContext = createContext();

// Irá abraçar os componentes que irão compartilhar os dados
const UsuarioProvider = ({ children }) => {
  const [tipoDePlano, setTipoDePlano] = useState("free");

  return (
    <UsuarioContext.Provider
      value={{
        // podemos usar valores estáticos
        nome: "Rosana Rezende",

        // e também podemos valores dinâmicos (estados)
        tipoDePlano,
        alteraTipoDePlano: (tipoDePlano) => {
          setTipoDePlano(tipoDePlano);
        },
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioContext, UsuarioProvider };
