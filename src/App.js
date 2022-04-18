import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TokenContext from './context/token';
import useToken from './hooks/use-token';
import Dashboard from './pages/Dashboard';
import * as ROUTES from './constants/routes';
import Tracks from './pages/Tracks';
import Playlist from './pages/Playlist';
import Search from './pages/Search';

function App() {
  const { token } = useToken();

  return (
    <TokenContext.Provider value={token}>
      <Router>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route path={ROUTES.TRACKS} element={<Tracks />} />
          <Route path={ROUTES.PLAYLIST} element={<Playlist />} />
        </Routes>
      </Router>
    </TokenContext.Provider>
  );
}

export default App;


// pages to build: home, playlist:id, track:id, search, 
// api calls: searchparams, getPlaylist, addItemToPlaylist, getArtist, deletePlaylistItem,
// http methods: get, post, delete, put(maybe: modyfing playlist details, or replace items.)
