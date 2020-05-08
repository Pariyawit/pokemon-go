import React, { useState, useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

function Pokemon({ pokemon, zoom, catchPokemon }) {
  const { setPokeball } = useContext(PokemonContext);
  const size = 50;
  const { id, image } = pokemon;
  const [status, setStatus] = useState();
  const style = {
    width: size,
    height: size,
    backgroundImage: `url(${image})`,
  };

  const handleClick = () => {
    setPokeball(pokemon);
    setStatus('pokeball');
    setTimeout(() => {
      catchPokemon(id);
    }, 1000);
  };

  return (
    <>
      {status === 'pokeball' ? (
        <div className='pokeball'>
          <img src='/pokeball.png'></img>
        </div>
      ) : status !== 'caught' && parseInt(zoom) >= 7 ? (
        <div className='pokemon' style={style} onClick={handleClick}></div>
      ) : (
        // <div className='marker'></div>
        <div></div>
      )}
    </>
  );
}

export default Pokemon;
