import React from 'react';

function Pokemon({ id, image, maxHP, name, zoom, catchPokemon }) {
  const size = 10 * zoom;
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
