import React, { useState, useEffect } from 'react';

const PokemonContext = React.createContext();

function PokemonContextProvider(props) {
  const context = {};
  return (
    <PokemonContext.Provider value={context}>
      {props.children}
    </PokemonContext.Provider>
  );
}

export { PokemonContextProvider, PokemonContext };
