// NowPlayingPage.js
import React from 'react';// eslint-disable-line no-unused-vars
import MoviePosterList from '../components/MoviePosterList';

const NowPlayingPage = () => {
  return (
    <div>
      <MoviePosterList category="now_playing" />
    </div>
  );
}

export default NowPlayingPage;
