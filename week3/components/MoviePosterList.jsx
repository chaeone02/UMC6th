// MoviePosterList.js
import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import MoviePoster from './MoviePoster';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  width: 100%;
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &::before {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255);
    border-top-color: #000;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const MoviePosterList = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // 데이터 요청 전 로딩 상태를 true로 설정
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=dcaf563750cead425cac5dfcd58dee07`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false); // 데이터 요청 후 로딩 상태를 false로 설정
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <div>
      {loading ? ( // 로딩 중일 때 스피너를 표시
        <Spinner />
      ) : ( // 로딩이 끝나면 영화 포스터를 표시
        <ListContainer>
          {movies.map(movie => (
            <MoviePoster key={movie.id} movie={movie} />
          ))}
        </ListContainer>
      )}
    </div>
  );
};

MoviePosterList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default MoviePosterList;
