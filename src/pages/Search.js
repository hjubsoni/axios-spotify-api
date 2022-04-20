import React, { useContext } from 'react';
import TokenContext from '../context/token';
import SearchForItem from '../components/SearchForItem';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import useAxios from '../hooks/use-axios';

export default function Search() {
  const token = useContext(TokenContext);

  const { response, error } = useAxios({
    method: 'get',
    url: 'https://api.spotify.com/v1/search?q=Sanah&type=track&market=PL&limit=15&offset=5',
    token
  });

  if (!response || error) return <Spinner />;
  const { tracks } = response;
  return (
    <div className="flex h-full">
      <Header />
      <SearchForItem tracks={tracks.items} />
    </div>
  );
}
