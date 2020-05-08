import React from 'react';

function Pokemon({ id, image, zoom, catchPokemon }) {
  const size = 50;

  const style = {
    width: size,
    height: size,
    backgroundImage: `url(${image})`,
  };
  return (
    <>
      {parseInt(zoom) >= 7 ? (
        <div
          className='pokemon'
          style={style}
          onClick={() => catchPokemon(id)}
        ></div>
      ) : (
        // <div className='marker'></div>
        <div></div>
      )}
    </>
  );
}

export default Pokemon;
