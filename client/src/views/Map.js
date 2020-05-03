import React, { useState, useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import Pokemon from '../components/Pokemon';

import { PokemonContext } from '../context/PokemonContext';

function Map() {
  const MAP_KEY = process.env.REACT_APP_MAP_KEY;
  const { pokemons, zoom, setZoom, center, setCenter } = useContext(
    PokemonContext
  );

  const handleChange = (e) => {
    console.log(e);
    setZoom(e.zoom);
    setCenter(e.center);
  };

  const pokemons_list = pokemons.map((p, index) => {
    return (
      <Pokemon
        key={p.id}
        lat={p.location.lat}
        lng={p.location.lng}
        image={p.image}
        zoom={zoom}
      />
    );
  });
  return (
    <div style={{ height: 'calc(100vh - 50px)', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_KEY }}
        center={center}
        zoom={zoom}
        onChange={handleChange}
      >
        {pokemons_list}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
