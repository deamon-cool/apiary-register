import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/stateful/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);