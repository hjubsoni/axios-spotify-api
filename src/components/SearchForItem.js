import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import TokenContext from '../context/token';

export default function SearchForItem() {
  const [search, setSearch] = useState(null);
  const token = useContext(TokenContext);

  useEffect(() => {
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
      setSearch(tracks.items);
    };
    getSearchItems();
  }, [token]);

  const handleSearch = async (e) => {
    const { value } = e.target;
    setSearch(search.filter((track) => track.name.toLowerCase().includes(value.toLowerCase())));
  };
  console.log(search);
  if (!search) return <h2>Loading tracks...</h2>;
  return (
    <div>
      <div>
        <label htmlFor="search">Search tracks</label>
        <input type="search" id="search" onInput={handleSearch} />
      </div>
      <div>
        {search.map((track) => {
          const { name, type, artists } = track;
          return <div>{name}</div>;
        })}
      </div>
    </div>
  );
}
