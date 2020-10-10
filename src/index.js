import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// настройки плагина
import './i18n';

ReactDOM.render (
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
