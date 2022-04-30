//import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Maria"
  return (
    <div className="App">
      < Frase />
      < Frase />
      < SayMyName nome="Felipe" />
      < SayMyName nome="Augusto" />
      < SayMyName nome={nome} />
      < Pessoa nome="Felipe Cabral" idade="27" profissao="Analista de Sistemas" foto="https://via.placeholder.com/150" />
      < List />

    </div>
  );
}

export default App;
