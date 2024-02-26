import React, {useState} from 'react';
import './App.css';
import Perfil from './componentes/Perfil';
import players from './Data/players';
import Contador from './componentes/Contador';

function App() {

  return (
    <div className="App">
     <div className ='contenedor-principal'>
      <h1 className='title'>Mis Jugadores de la NBA 🏀 favoritos son</h1>
      {players.map((player) => (
          <Perfil
            id = {player.id}
            name={player.name}
            country={player.country}
            team={player.team}
            age={player.age}
            description={player.description}
            twitter= {player.twitter}
            ig= {player.ig}
          />
        ))}
     </div>
    </div>
  );
}

export default App;