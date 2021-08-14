import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
    domain="dev-kqrep13d.us.auth0.com"
    clientId="MqSNQu1MITvYlHJXIjlHJVODSwgxiR7H"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
