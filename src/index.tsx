import React from 'react';
import ReactDOM from 'react-dom/client';
import './presentation/styles/global.css';
import { Dashboard } from './presentation/pages/dashboard';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

root.render(
   <React.StrictMode>
      <Dashboard />
   </React.StrictMode>
);
