import React from 'react';

function Pokemon({ id, image, maxHP, name, zoom }) {
  const size = 20 * zoom;
  const style = {
    maxWidth: size,
  };
  return (
    <div className='pokemon'>
      <img src={image} style={style} />
    </div>
  );
}

export default Pokemon;
