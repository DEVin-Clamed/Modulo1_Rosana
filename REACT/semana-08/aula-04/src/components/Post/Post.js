import './Post.css'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

export default function Post({
  imagemDoPerfil,
  nomeDoAutor,
  dataDoPost,
  fotoDoPost,
  descricaoDoPost,
  curtidoPor,
  numeroDeCurtidas,
}){
  return (
    <div className="Post">

      <PostHeader imagemDoPerfil={imagemDoPerfil} nomeDoAutor={nomeDoAutor} dataDoPost={dataDoPost} />

      <p>{descricaoDoPost}</p>
      <img src={fotoDoPost} alt="foto do post" className="FotoDoPost" />

      <PostFooter curtidoPor={curtidoPor} numeroDeCurtidas={numeroDeCurtidas} />
    </div>
  )
}
