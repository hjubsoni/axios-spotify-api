import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TokenContext from './context/token';
import useToken from './hooks/use-token';
import * as ROUTES from './constants/routes';
import Spinner from './components/Spinner';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Search = lazy(() => import('./pages/Search'));
const Tracks = lazy(() => import('./pages/Tracks'));
const Playlists = lazy(() => import('./pages/Playlists'));

function App() {
  const { token } = useToken();

  return (
    <TokenContext.Provider value={token}>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.SEARCH} element={<Search />} />
            <Route path={ROUTES.TRACKS} element={<Tracks />} />
            <Route path={ROUTES.PLAYLISTS} element={<Playlists />} />
          </Routes>
        </Suspense>
      </Router>
    </TokenContext.Provider>
  );
}

export default App;

// pages to build: home, playlist:id, track:id, search,
// api calls: searchparams, getPlaylist, addItemToPlaylist, getArtist, deletePlaylistItem,
// http methods: get, post, delete, put(maybe: modyfing playlist details, or replace items.)
