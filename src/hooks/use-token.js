import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useToken() {
  const [token, setToken] = useState(null);
  const clientId = '71c9527c3e3e41728eee1a391b6df6d4';
  const clientSecret = '67305a6d5ed148f48c8443297448c9c6';
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
