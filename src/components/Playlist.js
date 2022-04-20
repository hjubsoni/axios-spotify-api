/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Playlist({ playlist }) {
  const { items } = playlist;

  return (
    <div className="w-full flex flex-col gap-4">
      {items.map((item) => {
        const { added_at, track } = item;
        const { duration_ms, artists, name, album } = track;
        const seconds = ((duration_ms % 60000) / 1000).toFixed(0);
        const minutes = Math.floor(duration_ms / 60000);
        return (
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img src={album.images[2].url} alt="hello" />
            </div>
            <div className="">
              <h4>{name}</h4>
              <div className="flex gap-2">
                {artists.length > 0 ? (
                  artists.map((artist) => <Link to="/">{artist.name}</Link>)
                ) : (
                  <Link to="/">{artists[0].name}</Link>
                )}
              </div>
            </div>
            <div>
              <Link to="/">{album.name}</Link>
            </div>
            <div>
              <span>{added_at.slice(0, 10)}</span>
            </div>
            <div>
              <span>
                {seconds === 60
                  ? `${minutes + 1}:00`
                  : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Playlist.propTypes = {
  playlist: PropTypes.object
};
