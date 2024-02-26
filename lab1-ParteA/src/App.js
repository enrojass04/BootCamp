import './App.css';
import Profile from './componentes/Profile';
import players from './data/players';

function App() {

    return (
      <div className='App'>
        <div className='contenedor-ptincipal'>
          <h1 className='titulo'>Jugadores de la NBA 🏀</h1>
          {players.map((player) => (
            <Profile
              id = {player.id}
              name={player.name}
              country={player.country}
              team={player.team}
              age={player.age}
              description={player.description}
            />
          ))}
        </div>
      </div>
    );
    
}

export default App;
