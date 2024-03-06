import React, { useState } from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';

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
            <input type="text" value={pokemonName} onChange={e => setPokemonName(e.target.value)} />
            <button onClick={handleGetPokemonAbility}>Get Pokemon Ability</button>
            {error && <p>{error}</p>}
            {pokemonData && (
                <div>
                    <h2>{pokemonData.name}</h2>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    <p>Experience: {pokemonData.base_experience}</p>
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
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
