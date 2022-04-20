import React, { useContext } from 'react';
import TokenContext from '../context/token';
import useAxios from '../hooks/use-axios';
import Spinner from './Spinner';

export default function GetArtis() {
  const token = useContext(TokenContext);

  const { response, error } = useAxios({
    method: 'get',
    url: 'https://api.spotify.com/v1/artists/0TMvoNR0AIJV138mHY6jdE',
    token
  });
  if (!response || error) return <Spinner />;
  return <div>hello</div>;
}
