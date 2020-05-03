import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import PokedexItem from '../components/PokedexItem';

function Pokedex() {
  const { pokemons } = useContext(PokemonContext);
  const list = pokemons.map((pokemon) => (
    <PokedexItem key={pokemon.id} pokemon={pokemon} />
  ));
  return (
    <div class='container'>
      <div className='pokedex'>{list}</div>
    </div>
  );
}

export default Pokedex;
