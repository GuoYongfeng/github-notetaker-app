import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes/index.jsx';

require('bootstrap/dist/css/bootstrap.css');

let root = document.getElementById('app');

ReactDOM.render(
  <Router routes={routes} />, root
);
