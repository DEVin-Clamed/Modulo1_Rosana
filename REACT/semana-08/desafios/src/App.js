import './App.css';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Table 
        title="Lista de alunos"
        description="Lista com dados pessoais dos alunos do curso de React"
        columns={[
          {
            name: 'Nome',
            prop: 'name'
          },
          {
            name: 'Sobrenome',
            prop: 'lastName'
          },
          {
            name: 'Idade',
            prop: 'age'
          }
        ]}
        data={[
          {
            name: 'João',
            lastName: 'Silva',
            age: 20,
            id: 1
          },
          {
            name: 'Maria',
            lastName: 'Souza',
            age: 25,
            id: 2
          },
          {
            name: 'Pedro',
            lastName: 'Oliveira',
            age: 30,
            id: 3
          }
        ]}
      />
    </div>
  );
}

export default App;
