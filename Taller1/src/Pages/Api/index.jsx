import React from 'react';
import { useEffect, useState } from 'react';

const generarNumeroAleatorio = function() {
  return Math.floor(Math.random() * 150) + 1;
};    
const pokemonId = generarNumeroAleatorio();

const mayusculaPrimerLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

let URL = 'https://pokeapi.co/api/v2/pokemon/';


function Pokemon() {

    const handleReload = () => {
        window.location.reload(); // Esta línea recarga la página
      };
    const [pokemon, setPokemon] = useState('');
    const [imagePokemon, setImagePokemon] = useState('');
    const [weightPokemon, setWeightPokemon] = useState('');

    useEffect (()=>{
        
        const fecthPokemon = async () => {
        try {
            const response = await fetch (URL + pokemonId);
            const data = await response.json();
            setPokemon(data.name);
            setWeightPokemon(data.weight);
            setImagePokemon(data.sprites.front_default);
        } catch (error) {
            console.error(error);
        }
        }
        fecthPokemon();

    }, []);
  
    return (
        <div className='mt-5 mb-5'>
        <h1 className='text-[40px]'>Random Pokemon</h1>
        {pokemon && <h3 className='text-[30px]'>Nombre: {mayusculaPrimerLetra(pokemon)}</h3>}
        {imagePokemon && ( <img className='mx-auto' src={imagePokemon} alt='random cat' width={250} height={250} />)}
        {weightPokemon && <h3>Peso: {weightPokemon} Kg</h3>}
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
        onClick={handleReload}
        >
            Recargar Página
        </button>
        </div>
    )
}

export default Pokemon
