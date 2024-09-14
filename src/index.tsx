import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Redux Provider
import store from './store'; // Redux store
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import './index.css'; // Global styles
import App from './App'; // Main App component

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') // Mount to the root element in public/index.html
);
