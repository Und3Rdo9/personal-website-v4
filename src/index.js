import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { GRAPHCMS_API } from './config';

import registerServiceWorker from './registerServiceWorker';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: GRAPHCMS_API });

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));
registerServiceWorker();
