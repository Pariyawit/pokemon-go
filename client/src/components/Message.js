import React, { useEffect } from 'react';

const factor = (bounds) => {
  if (bounds.nw && bounds.se) {
    const dx = bounds.nw.lat - bounds.se.lat;
    const dy = bounds.nw.lng - bounds.se.lng;
    return Math.sqrt(dx * dx + dy * dy) / 2;
  }
  return 999;
};

function Message({ zoom, count, distance, bounds, pokeball, status }) {
  const f = factor(bounds);
  let alert = '...';
  if (distance <= f * 2) alert = '!';
  if (distance <= f) alert = '!!';
  if (distance <= f / 2) alert = '!!!';

  if (count >= 1) alert = 'Wild Pokemon Appeared!';

  return (
    <div className='message'>
      {pokeball ? (
        <p className='message__text'>
          Gotcha!
          <br />
          {pokeball.name.toUpperCase()} was caught!
        </p>
      ) : zoom < 7 ? (
        <p className='message__text'>
          {count} pokemon(s) in this area
          <br />
          Look closer to encounter
        </p>
      ) : (
        <p className='message__text'>
          {alert}
          <br />
          {/* {distance} */}
        </p>
      )}
    </div>
  );
}

export default Message;
