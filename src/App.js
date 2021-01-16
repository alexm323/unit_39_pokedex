
import Pokedex from './Pokedex'
import pokemon from './pokemon'
import './App.css';
import './Pokedex.css';
import './Pokecard.css';

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
