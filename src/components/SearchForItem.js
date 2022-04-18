/* eslint-disable camelcase */
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';

export default function SearchForItem({ tracks }) {
  const [inputValue, setInputValue] = useState('');

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
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="search">Search tracks</label>
        <input
          type="search"
          id="search"
          onInput={debouncedInputHandler}
          className="border-2 rounded-lg px-2 ml-2"
        />
      </div>

      <div className="flex flex-col gap-4">
        {inputValue
          ? filteredTracks.map((track) => {
              const { id, name, artists, duration_ms, album } = track;
              const seconds = ((duration_ms % 60000) / 1000).toFixed(0);
              const minutes = Math.floor(duration_ms / 60000);

              return (
                <article className="border-2 border-black w-full p-4 " key={id}>
                  <Link to={`/track/${id}`} className="flex">
                    <div>
                      <img src={album.images[2].url} alt="" />
                    </div>
                    <div className="ml-2">
                      <h5>{name}</h5>
                      <div className="flex mt-2 gap-1">
                        {artists.length > 1 ? (
                          artists.map((artist) => <p>{artist.name}</p>)
                        ) : (
                          <p>{artists[0].name}</p>
                        )}
                      </div>
                    </div>
                    <div className="ml-auto flex items-center">
                      <span>
                        {seconds === 60
                          ? `${minutes + 1}:00`
                          : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })
          : null}
      </div>
      <div />
    </div>
  );
}

SearchForItem.propTypes = {
  tracks: PropTypes.array
};
