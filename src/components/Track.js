import React from 'react';
import PropTypes from 'prop-types';

export default function Track({ tracks, id }) {
  const filterTracksById = tracks.filter((track) => track.id === id);
  return (
    <div>
      {filterTracksById.map((track) => (
        <h2 key={track.id} className="text-4xl underline">
          {track.name}
        </h2>
      ))}
    </div>
  );
}

Track.propTypes = {
  tracks: PropTypes.array,
  id: PropTypes.string
};
