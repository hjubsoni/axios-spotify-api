import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TokenContext from './context/token';
import useToken from './hooks/use-token';
import Dashboard from './pages/Dashboard';
import * as ROUTES from './constants/routes';
import Tracks from './pages/Tracks';
import Playlist from './pages/Playlist';

function App() {
  const { token } = useToken();

  return (
    <TokenContext.Provider value={token}>
      <Router>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.TRACKS} element={<Tracks />} />
          <Route path={ROUTES.PLAYLIST} element={<Playlist />} />
        </Routes>
      </Router>
    </TokenContext.Provider>
  );
}

export default App;

// dashboard with 10 search query params, each link to the track with uniqe id, info about artist + most popular
// sannah songs.

// my playlist with random playlist from my account.

// album with few api calls to get 3 or 4 sanah albums.

// liked songs
