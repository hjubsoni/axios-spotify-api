import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Search, Home, Plus } from 'react-feather';
import TokenContext from '../context/token';
import Spinner from './Spinner';
import * as ROUTES from '../constants/routes';
import useAxios from '../hooks/use-axios';

export default function Header() {
  const [playlist, setPlaylist] = useState(null);
  const token = useContext(TokenContext);
  const { response, error, loading } = useAxios({
    method: 'get',
    url: 'https://api.spotify.com/v1/playlists/48sHE0nZIXRuvre0zhypbD',
    token
  });

  console.log(response);

  // useEffect(() => {
  //   if (!token) return;
  //   const getSearchItems = async () => {
  //     const response = await axios({
  //       method: 'get',
  //       url: 'https://api.spotify.com/v1/playlists/48sHE0nZIXRuvre0zhypbD',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     const { data } = response;
  //     setPlaylist(data);
  //   };
  //   getSearchItems();
  // }, [token]);
  if (!playlist) return <Spinner />;
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
        <button type="button" className="flex items-center gap-4">
          <Plus />
          <span>Create Playlist</span>
        </button>
        <hr />
        <Link to={ROUTES.DASHBOARD} className="overflow-hidden whitespace-nowrap  text-ellipsis">
          <span className="text-sm">{playlist.name}</span>
        </Link>
      </nav>
    </header>
  );
}
