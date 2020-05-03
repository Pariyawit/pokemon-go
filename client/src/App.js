import React, { useState, useEffect } from 'react';
import './App.scss';

import Map from './components/Map';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const POKEMONS = gql`
  {
    pokemons(first: 100) {
      id
      name
      image
      maxHP
    }
  }
`;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const { loading, error, data } = useQuery(POKEMONS);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  useEffect(() => {
    if (data) setPokemons(data.pokemons);
  }, [data]);
  return (
    <div className='App'>
      <Map pokemons={pokemons} />
    </div>
  );
}

export default App;
