import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAxios({ method, url, token }) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // const [state, setState] = useState({ response: null, error: null });

  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;
      try {
        const result = await axios({
          method,
          url,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        setResponse(await result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [method, token, url]);

  return {
    response,
    error
  };
}
