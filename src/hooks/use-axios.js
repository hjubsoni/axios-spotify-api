/* eslint-disable object-shorthand */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAxios({ method, url, token }) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios({
          method: method,
          url: url,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        setResponse(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [method, token, url]);

  return {
    response,
    error,
    loading
  };
}
