import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import * as ROUTES from '../constants/routes';

export default function SearchForItem({ tracks }) {
  const [inputValue, setInputValue] = useState('');
  const { id } = useParams();
  console.log(id);
  let filteredTracks = tracks;

  if (inputValue !== '') {
    filteredTracks = tracks.filter((track) =>
      track.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const debouncedInputHandler = useMemo(() => debounce(handleInput, 300), []);

  return (
    <div>
      <div>
        <label htmlFor="search">Search tracks</label>
        <input type="search" id="search" onInput={debouncedInputHandler} />
      </div>
      <div>
        {filteredTracks.map((track) => {
          const { id } = track;
          return (
            <div key={id}>
              <Link to={`${ROUTES.TRACKS}/${id}`}>
                <h4>{track.name}</h4>
              </Link>
            </div>
          );
        })}
      </div>
      <div />
    </div>
  );
}

SearchForItem.propTypes = {
  tracks: PropTypes.array
};
