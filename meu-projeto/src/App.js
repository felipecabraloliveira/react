//import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Felipe Cabral'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(7, 3)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
