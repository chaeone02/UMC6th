//movieposter.jsx
import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import MovieDetail from './MovieDetail';
import styled from 'styled-components';

const PosterContainer = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
`;

const PosterImage = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
`;

const Title = styled.h2`
  color: #ffffff;
  margin: 0;
`;

const Rating = styled.p`
  color: #ffffff;
  margin: 0;
`;

const OverviewContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  padding: 20px;
  opacity: ${props => (props.isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const MoviePoster = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <PosterContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <PosterImage src={imageUrl} alt={movie.title} />
      <InfoContainer>
        <Title>{movie.title}</Title>
        <Rating>{movie.vote_average}</Rating>
      </InfoContainer>
      <OverviewContainer isHovered={isHovered}>
        {isHovered && <MovieDetail overview={movie.overview} />}
      </OverviewContainer>
    </PosterContainer>
  );
};

MoviePoster.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MoviePoster;
