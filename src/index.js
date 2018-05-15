import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './components/App';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { GRAPHCMS_API } from './config';

import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({ uri: GRAPHCMS_API });

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));
registerServiceWorker();
