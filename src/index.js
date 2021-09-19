import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OfflineApp from './OfflineApp';
import { BrowserRouter } from 'react-router-dom';

const isOffline = true;

const app = (
  <BrowserRouter>{isOffline ? <OfflineApp /> : <App />}</BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById('root')
);
