import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { Provider } from 'react-apollo';

import App from './App';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('/graphql')
});

const store = createStore(
  combineReducers({
    apollo: client.reducer()
  }),
  applyMiddleware(client.middleware())
);

ReactDOM.render(
  <Provider store={store} client={client}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
