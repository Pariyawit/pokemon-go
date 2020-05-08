import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import PokedexItem from '../components/PokedexItem';

function Pokedex() {
  const { pokemons } = useContext(PokemonContext);
  const list = pokemons.map((pokemon) => (
    <PokedexItem key={pokemon.id} pokemon={pokemon} />
  ));
  return (
    <div className='container container--red'>
      <div className='pokedex grid'>{list}</div>
    </div>
  );
}

export default Pokedex;
