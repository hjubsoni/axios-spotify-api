import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useToken() {
  const [token, setToken] = useState(null);
  const clientId = '';
  const clientSecret = '';
  const url = 'https://accounts.spotify.com/api/token';

  useEffect(() => {
    const getToken = async () => {
      const response = await axios({
        method: 'post',
        url: `${url}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`
        },
        data: 'grant_type=client_credentials'
      });

      const { data } = response;
      setToken(await data.access_token);
    };
    getToken();
  }, []);
  return { token };
}
