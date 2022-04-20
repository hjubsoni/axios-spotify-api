import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/use-axios';
import TokenContext from '../context/token';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import Playlist from '../components/Playlist';

export default function Playlists() {
  const token = useContext(TokenContext);

  const { id } = useParams();

  const { response, loading } = useAxios({
    method: 'get',
    url: 'https://api.spotify.com/v1/playlists/48sHE0nZIXRuvre0zhypbD/tracks',
    token
  });
  if (loading || !response) return <Spinner />;

  return (
    <div className="flex">
      <Header id={id} />
      <Playlist playlist={response} />
    </div>
  );
}
