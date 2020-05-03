import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonContextProvider } from './context/PokemonContext';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
