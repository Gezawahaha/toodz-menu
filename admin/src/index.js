import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { MenuContextProvider } from './context/menuContext/MenuContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
