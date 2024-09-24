import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Stars from './stars.jsx';
import Stars1 from './Stars1.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Stars maxRatings={5}></Stars> */}

    {/* <Stars1 /> */}
  </StrictMode>
);
