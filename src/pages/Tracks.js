import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TokenContext from '../context/token';
import Spinner from '../components/Spinner';
import Track from '../components/Track';

export default function Tracks() {
  const [tracksList, setTracksList] = useState(null);
  const token = useContext(TokenContext);

  const { id } = useParams();
  useEffect(() => {
    if (!token) return;
    const getSearchItems = async () => {
      const response = await axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/search?q=Sanah&type=track&market=PL&limit=10&offset=5',
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

  if (!tracksList) return <Spinner />;
  return <Track id={id} tracks={tracksList} />;
}
