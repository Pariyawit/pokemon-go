import React from 'react';

function PokedexItem({ pokemon }) {
  const img_style = {
    backgroundImage: `url(${pokemon.image})`,
  };
  console.log(pokemon);
  return (
    <>
      {pokemon.status == 'caught' ? (
        <div className='pokedex__item'>
          <div className='pokedex__content'>
            <div className='pokedex__image' style={img_style}></div>
            <p className='pokedex__title'>{pokemon.name}</p>
          </div>
        </div>
      ) : (
        <div className='pokedex__item pokedex__item--notfound'>
          <p>{pokemon.number}</p>
        </div>
      )}
    </>
  );
}

export default PokedexItem;
