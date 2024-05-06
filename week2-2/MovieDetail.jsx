// MovieDetail.js


import React from 'react';
import PropTypes from 'prop-types'; 

const propTypes = {
  overview: PropTypes.string.isRequired, 
};

const MovieDetail = ({overview }) => {
  return (
    <div className="movie-detail">
      <div className="movie-detail-content">
        <p>{overview}</p>
      </div>
    </div>
  );
};

MovieDetail.propTypes = propTypes;

export default MovieDetail;
