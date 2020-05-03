import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { centroidsData } from '../data/centroidsData';

const POKEMONS = gql`
  {
    pokemons(first: 151) {
      id
      name
      image
      maxHP
    }
  }
`;

const PokemonContext = React.createContext();

function PokemonContextProvider(props) {
  const [pokemons, setPokemons] = useState([]);
  const [center, setCenter] = useState({
    lat: 20,
    lng: 0,
  });
  const [zoom, setZoom] = useState(1);
  const { loading, error, data } = useQuery(POKEMONS);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  let locations = centroidsData;

  const catchPokemon = (id) => {
    console.log(id);
    const updaetPokemons = pokemons.map((p) => {
      if (p.id === id) {
        console.log(p);
        return {
          ...p,
          isCatch: true,
        };
      }
      return p;
    });
    setPokemons(updaetPokemons);
  };

  const location = () => {
    const index = Math.floor(Math.random() * locations.length);
    const l = {
      lat: locations[index].LAT,
      lng: locations[index].LONG,
    };
    locations.splice(index, 1);
    return l;
  };

  useEffect(() => {
    if (data) {
      const updatePokemon = data.pokemons.map((p) => ({
        ...p,
        isCatch: false,
        location: location(),
      }));
      setPokemons(updatePokemon);
    }
  }, [data]);

  const context = { pokemons, zoom, setZoom, center, setCenter, catchPokemon };
  return (
    <PokemonContext.Provider value={context}>
      {props.children}
    </PokemonContext.Provider>
  );
}

export { PokemonContextProvider, PokemonContext };
