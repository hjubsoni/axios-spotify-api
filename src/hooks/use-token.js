import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useToken() {
  const [token, setToken] = useState(null);
  const clientId = '6ce3aa87d98746d8bc88c380b7a71b26';
  const clientSecret = '9d05d90335ae4fc4ab9059d04eb30e32';
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
      setToken(data.access_token);
    };
    getToken();
  }, []);
  return { token };
}
