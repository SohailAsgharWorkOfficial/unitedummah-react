import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommunityEventsStats from './Components/CommunityEventsStats';
import Home from './Components/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <Home />
        <CommunityEventsStats />
  </React.StrictMode>
);
