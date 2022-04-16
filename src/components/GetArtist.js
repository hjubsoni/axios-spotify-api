import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import TokenContext from '../context/token';

export default function GetArtis() {
  const [artist, setArtist] = useState(null);
  const token = useContext(TokenContext);

  useEffect(() => {
    const getArtist = async () => {
      const response = await axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/artists/0TMvoNR0AIJV138mHY6jdE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const { data } = response;
      setArtist(await data);
    };
    getArtist();
  }, [token]);
  if (!artist) return <div>Loading...</div>;
  const { id, name, followers, images } = artist;
  return (
    <div>
      {images.map((img) => {
        const { url } = img;
        return <img src={url} alt="sanah" />;
      })}
    </div>
  );
}
