import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-hp5gblnf30vxlg8h.us.auth0.com"
    clientId="GhIE7fheZZrHqAEnYb7sFaZNBw7K7byP"
    authorizationParams={{ redirect_uri: window.location.origin }}>
    <App />
  </Auth0Provider>
);

