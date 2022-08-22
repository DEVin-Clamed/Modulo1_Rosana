export default function Table({ title, description, columns, data }) {
  return (
    <table style={ { width: '300px' }}>
      <caption style={ { textAlign: 'left' }}>
        <h2>{title}</h2>
        <p>{description}</p> 
      </caption>

      <thead>
        {/* sem props */}
        {/* <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Idade</th>
        </tr> */}

        <tr>
          {columns.map(({ name, prop }) => (
            <th key={prop}>{name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {/* sem props */}
        {/* <tr>
          <td>João</td>
          <td>Silva</td>
          <td>20</td>
        </tr>

        <tr>
          <td>Maria</td>
          <td>Souza</td>
          <td>25</td>
        </tr>

        <tr>
          <td>Pedro</td>
          <td>Oliveira</td>
          <td>30</td>
        </tr> */}

        {/* // vai retornar os dados de cada linha */}
        {data.map(row => { 
          return (
          <tr key={row.id}>

            {/* vai inserir o conteúdo da linha na posição correta da tabela */}
            {columns.map(({ prop }) => {
              return (
              <td key={prop}>{row[prop]}</td>
            )})}

          </tr>
        )})}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={columns.length} style={ { textAlign: 'right' }}>
            <strong>Total de alunos:</strong> {data.length}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}
