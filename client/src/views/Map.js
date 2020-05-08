import React, { useState, useContext, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Pokemon from '../components/Pokemon';
import Message from '../components/Message';

import { PokemonContext } from '../context/PokemonContext';

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT,
      style: maps.ZoomControlStyle.SMALL,
    },
    fullscreenControl: false,
    minZoom: 2,
    maxZoom: 7,
  };
}

function scanArea(pokemons, nw, se) {
  console.log({ pokemons, nw, se });
  let cnt = pokemons.reduce((total, p) => {
    if (
      p.isCatch != true &&
      p.location.lat >= se.lat &&
      p.location.lat <= nw.lat &&
      p.location.lng <= se.lng &&
      p.location.lng >= nw.lng
    ) {
      return total + 1;
    }
    return total;
  }, 0);
  return cnt;
}

function Map() {
  const MAP_KEY = process.env.REACT_APP_MAP_KEY;
  const [status, setStatus] = useState('idle');
  const [count, setCount] = useState(0);
  const [nw, setNW] = useState();
  const [se, setSE] = useState();
  const {
    pokemons,
    zoom,
    setZoom,
    center,
    setCenter,
    catchPokemon,
  } = useContext(PokemonContext);

  const handleChange = (e) => {
    console.log(e);
    setZoom(e.zoom);
    setCenter(e.center);
    setNW(e.bounds.nw);
    setSE(e.bounds.se);
    setCount(scanArea(pokemons, e.bounds.nw, e.bounds.se));
  };

  useEffect(() => {
    setCount(scanArea(pokemons, nw, se));
  }, [pokemons]);

  const pokemons_list = pokemons
    .filter((p) => !p.isCatch)
    .map((p, index) => {
      return (
        <Pokemon
          key={p.id}
          id={p.id}
          lat={p.location.lat}
          lng={p.location.lng}
          image={p.image}
          zoom={zoom}
          catchPokemon={catchPokemon}
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
        options={createMapOptions}
        onZoomAnimationStart={() => setStatus('zooming')}
        onZoomAnimationEnd={() => setStatus('idle')}
      >
        {status === 'idle' && pokemons_list}
      </GoogleMapReact>
      <Message>Spotted {count} pokemons. Zoom to catch</Message>
    </div>
  );
}

export default Map;
