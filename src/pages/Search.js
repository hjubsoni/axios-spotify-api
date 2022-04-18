import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import TokenContext from '../context/token';
import SearchForItem from '../components/SearchForItem';
import Spinner from '../components/Spinner';
import Header from '../components/Header';

export default function Search() {
  const [tracksList, setTracksList] = useState(null);
  const token = useContext(TokenContext);

  useEffect(() => {
    if (!token) return;
    const getSearchItems = async () => {
      const response = await axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/search?q=Sanah&type=track&market=PL&limit=15&offset=5',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const { data } = response;
      const { tracks } = data;
      setTracksList(await tracks.items);
    };
    getSearchItems();
  }, [token]);

  if (!tracksList) return;
  return (
    <div className="flex h-full">
      <Header />
      <SearchForItem tracks={tracksList} />
    </div>
  );
}
