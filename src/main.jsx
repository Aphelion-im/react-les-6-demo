import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import LanguageContextProvider from './context/LanguageContext';
import AuthContextProvider from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
