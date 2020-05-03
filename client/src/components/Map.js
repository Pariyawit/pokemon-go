import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Pokemon from './Pokemon';
import { centroidsData } from '../data/centroidsData';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map({ pokemons }) {
  const MAP_KEY = process.env.REACT_APP_MAP_KEY;
  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  const [zoom, setZoom] = useState(1);

  const handleChange = (e) => {
    console.log(e.zoom);
    setZoom(e.zoom);
  };

  const pokemons_list = pokemons.map((p, index) => {
    const lat = centroidsData[index].LAT;
    const lng = centroidsData[index].LONG;
    return (
      <Pokemon key={p.id} lat={lat} lng={lng} image={p.image} zoom={zoom} />
    );
  });
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        onChange={handleChange}
      >
        {pokemons_list}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
