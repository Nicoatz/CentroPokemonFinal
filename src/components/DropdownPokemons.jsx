// DropdownPokemons.js
import React, { useEffect, useState } from 'react';

const DropdownPokemons = ({ onSelect }) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let URL = "https://pokeapi.co/api/v2/pokemon/";

            for (let i = 1; i <= 151; i++) {
                try {
                    const response = await fetch(URL + i);
                    const data = await response.json();

                    setPokemons((prevPokemon) => [...prevPokemon, data]);
                } catch (error) {
                    console.error('Error fetching data for Pokemon', i, ':', error);
                }
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {pokemons.map((pokemon, index) => {
                const pokemonNumber = (index + 1).toString().padStart(3, '0');
                const capitalizedPokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                return (
                    <option key={index} value={`#${pokemonNumber} - ${capitalizedPokemonName}`}>
                        {`#${pokemonNumber} - ${capitalizedPokemonName}`}
                    </option>
                );
            })}
        </>
    );
};

export default DropdownPokemons;
