import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header({ id }) {
  return (
    <h2>
      <Link to={`playlist/${id}`}>Playlist</Link>
    </h2>
  );
}

Header.propTypes = {
  id: PropTypes.string
};
