import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

import App from './shedule-app/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();