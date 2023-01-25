import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import CoffeeProvider from './context/CoffeeContext';

const Root = () => {
  return (
      <BrowserRouter>
      <CoffeeProvider>
        <App />
      </CoffeeProvider>
      </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
