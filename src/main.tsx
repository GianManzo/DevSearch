import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

// styles
import { Global } from './Styles-global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
);
