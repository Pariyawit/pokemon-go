import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import PokedexItem from '../components/PokedexItem';

function Pokedex() {
  const { pokemons } = useContext(PokemonContext);
  const list = pokemons.map((pokemon) => (
    <PokedexItem key={pokemon.id} pokemon={pokemon} />
  ));

  const catched = pokemons.reduce(
    (total, p) => (p.isCatch ? total + 1 : total),
    0
  );

  return (
    <div className='container container--red'>
      <div className='catch-count'>{`${catched}/${pokemons.length}`}</div>
      <div className='pokedex grid'>{list}</div>
    </div>
  );
}

export default Pokedex;
