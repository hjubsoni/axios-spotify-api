import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, Plus } from 'react-feather';
import TokenContext from '../context/token';
import Spinner from './Spinner';
import * as ROUTES from '../constants/routes';
import useAxios from '../hooks/use-axios';

export default function Header() {
  const token = useContext(TokenContext);
  const { response, error } = useAxios({
    method: 'get',
    url: 'https://api.spotify.com/v1/playlists/48sHE0nZIXRuvre0zhypbD',
    token
  });

  if (error || !response) return <Spinner />;
  return (
    <header className="w-1/6 p-4  flex flex-col h-screen sticky top-0">
      <nav className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Link to={ROUTES.DASHBOARD} className="flex items-center gap-4">
            <Home />
            <span>Home</span>
          </Link>
          <Link to={ROUTES.SEARCH} className="flex items-center gap-4">
            <Search />
            <span>Search</span>
          </Link>
        </div>
        <button type="button">
          <Link to="/" className="flex items-center gap-4">
            <Plus />
            <span>Create Playlist</span>
          </Link>
        </button>
        <hr />
        <Link
          to={`/playlist/${response.id}`}
          className="overflow-hidden whitespace-nowrap  text-ellipsis"
        >
          <span className="text-sm">{response.name}</span>
        </Link>
      </nav>
    </header>
  );
}
