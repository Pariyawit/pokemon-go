import React from 'react';

function Pokemon({ id, image, maxHP, name, zoom }) {
  const size = 10 * zoom;
  const style = {
    width: size,
    height: size,
    backgroundImage: `url(${image})`,
  };
  const img_style = {
    backgroundImage: image,
  };
  return (
    <>
      {parseInt(zoom) >= 9 ? (
        <div className='pokemon' style={style}></div>
      ) : (
        <div className='marker'></div>
      )}
    </>
  );
}

export default Pokemon;
