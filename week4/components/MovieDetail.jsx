// MovieDetail.js
import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DetailContainer = styled.div`
  color: #ffffff;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const MovieDetail = ({ overview }) => {
  return (
    <DetailContainer>
      <p>{overview}</p>
    </DetailContainer>
  );
};

MovieDetail.propTypes = {
  overview: PropTypes.string.isRequired,
};

export default MovieDetail;
