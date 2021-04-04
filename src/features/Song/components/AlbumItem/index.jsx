import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  const { name, thumbnailUrl } = album;
  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={thumbnailUrl} alt="" />
      </div>
      <h4 className="album__name">{name}</h4>
    </div>
  );
}

export default Album;
