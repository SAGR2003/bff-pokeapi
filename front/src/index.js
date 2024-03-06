import React, { useState } from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import './index.css';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

const GetPokemonAbility = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);

    const handleGetPokemonAbility = async () => {
        try {
            const response = await axios.post('http://localhost:3001/get-pokemon', { pokemonName });
            const pokemonData = response.data;
            setPokemonData(pokemonData);
        } catch (error) {
            console.error('Error fetching Pokemon ability data:', error);
            setError('Error fetching Pokemon ability data. Please try again.');
        }
    };

    return (
        <div>
            <div className="input-container">
                <label htmlFor="pokemon-name">Pokemon Name:</label>
                <input id="pokemon-name" type="text" value={pokemonName}
                       onChange={e => setPokemonName(e.target.value)}/>
                <button onClick={handleGetPokemonAbility}>Get Pokemon Ability</button>
            </div>
            {error && <p>{error}</p>}
            {pokemonData && (
                <div className="pokemon-data">
                    <h2>{pokemonData.name} (ID: {pokemonData.id})</h2>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                    <p>Experience: {pokemonData.base_experience}</p>
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
                    <h3>Abilities:</h3>
                    <ul>
                        {pokemonData.abilities.map((ability, index) => (
                            <li key={index}>{ability.ability.name}</li>
                        ))}
                    </ul>
                    <h3>Stats:</h3>
                    <ul>
                        {pokemonData.stats.map((stat, index) => (
                            <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                        ))}
                    </ul>
                    <h3>Moves:</h3>
                    <ul>
                        {pokemonData.moves.map((move, index) => (
                            <li key={index}>{move.move.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
root.render(
    <React.StrictMode>
        <GetPokemonAbility />
    </React.StrictMode>
);
