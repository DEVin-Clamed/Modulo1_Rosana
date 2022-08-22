import './App.css';
import ListaDeDoces from './components/ListaDeDoces';
import MamaeCompraDoces from './components/MamaeCompraDoces';
import Post from './components/Post/Post'

export default function App({ isLoading }) {

  if(isLoading === true) {
    return <p>Carregando...</p>
  }

  const docesEmCasa = [
    { nome: 'bala de uva', id: 1 },
    { nome: 'babaloo de uva', id: 59 },
    { nome: 'chocolate', id: 3 },
    { nome: 'biscoitinho', id: 4 },
  ];

  const posts = [
    { 
      imagemDoPerfil:"https://avatars.githubusercontent.com/u/45580434?v=4",
      nomeDoAutor:"Rosana Rezende",
      dataDoPost:"Hoje",
      fotoDoPost:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCPFEg8fqj0yZXopiY0TOFwt9wJV-r76qWQ&usqp=CAU",
      descricaoDoPost:"Simplesmente a melhor <3",
      curtidoPor:"Cleiton",
      numeroDeCurtidas: 10,
    },
    { 
      imagemDoPerfil:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOAtwsWWuWW9CofG1mvk5foD37NCYTEnTQqjyScFTKiV5prWBsq9uVQQxA3-nd6Femn4&usqp=CAU",
      nomeDoAutor:"Zé Carioca",
      dataDoPost:"2 semanas",
      fotoDoPost:"https://outraspalavras.net/wp-content/uploads/2019/07/58409574_428224841326816_2971744278422620843_n.jpg",
      descricaoDoPost:"Curtindo com minha galera",
      curtidoPor:"Rosana",
      numeroDeCurtidas: 10,
    }
  ]

  return (
    <>
      <h1>Aula 04</h1>
      <p>A aplicação carregou!</p>

      <MamaeCompraDoces listaDeDoces={docesEmCasa}/>

      <ListaDeDoces listaDeDoces={docesEmCasa}/>

      {/* Lista de Postes */}
      {posts.map(post => (
        <Post 
          imagemDoPerfil={post.imagemDoPerfil}
          nomeDoAutor={post.nomeDoAutor}
          dataDoPost={post.dataDoPost}
          fotoDoPost={post.fotoDoPost}
          descricaoDoPost={post.descricaoDoPost}
          curtidoPor={post.curtidoPor}
          numeroDeCurtidas={post.numeroDeCurtidas}
        />
      ))}
    </>
  );
}
