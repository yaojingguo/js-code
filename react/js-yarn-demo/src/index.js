import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import ClientMonitor from 'skywalking-client-js';
// Report collected data to `http:// + window.location.host + /browser/perfData` in default
ClientMonitor.register({
  collector: 'http://127.0.0.1:8080',
  service: 'test-ui',
  pagePath: '/topics',
  serviceVersion: 'v1.0.0',
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
