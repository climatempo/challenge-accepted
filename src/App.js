import 'antd/dist/antd.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
