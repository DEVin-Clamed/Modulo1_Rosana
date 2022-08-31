import { createContext } from 'react'

const MusicasContext = createContext()

const MusicasProvider = ({ children }) => {
  return (
    <MusicasContext.Provider value={{
      musicas: [
        {
          id: 1,
          nome: 'Música 1',
          artista: 'Artista 1',
        },
        {
          id: 2,
          nome: 'Música 2',
          artista: 'Artista 2',
        },
      ]
    }}>
      {children}
    </MusicasContext.Provider>
  )
}

export { MusicasContext, MusicasProvider }
