import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SearchResultsProvider } from './provider/SearchResultsProvider';

ReactDOM.render(
  <SearchResultsProvider>
    <App />
  </SearchResultsProvider>,
  document.getElementById('root')
);

