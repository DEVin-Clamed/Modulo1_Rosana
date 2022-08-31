import { useParams } from 'react-router-dom'
export const Usuario = () => {
  const params = useParams()
  return (
    <div>
      <h2>UserName: {params.userName}</h2>
    </div>
  );
}
