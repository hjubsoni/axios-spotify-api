import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TokenContext from '../context/token';
import Header from '../components/Header';

export default function Playlist() {
  const [userSavedTracks, setUserSavedTracks] = useState(null);
  const token = useContext(TokenContext);

  const { id } = useParams();

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
      console.log(data);
    };
    getSearchItems();
  }, [token]);

  return <Header id={id} />;
}
