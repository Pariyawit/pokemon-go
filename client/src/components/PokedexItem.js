import React from 'react';

function PokedexItem({ pokemon }) {
  const img_style = {
    backgroundImage: `url(${pokemon.image})`,
  };
  return (
    <>
      {pokemon.isCatch ? (
        <div className='pokedex__item'>
          <div className='pokedex__content'>
            <div className='pokedex__image' style={img_style}></div>
            <div>{pokemon.name}</div>
          </div>
        </div>
      ) : (
        <div className='pokedex__item pokedex__item--notfound'>
          <p>?</p>
        </div>
      )}
    </>
  );
}

export default PokedexItem;
