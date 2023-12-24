import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const Root = createRoot(document.getElementById('root'));
Root.render(<App />);