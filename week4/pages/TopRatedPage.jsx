// TopRatedPage.js
import React from 'react';// eslint-disable-line no-unused-vars
import MoviePosterList from '../components/MoviePosterList';

const TopRatedPage = () => {
  return (
    <div>
      <MoviePosterList category="top_rated" />
    </div>
  );
}

export default TopRatedPage;
