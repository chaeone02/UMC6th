// PopularPage.js
import React from 'react';// eslint-disable-line no-unused-vars
import MoviePosterList from '../components/MoviePosterList';

const PopularPage = () => {
  return (
    <div>
      <MoviePosterList category="popular" />
    </div>
  );
}

export default PopularPage;
