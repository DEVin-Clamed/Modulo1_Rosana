import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { UsuarioProvider } from './contexts/usuarioContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
);
