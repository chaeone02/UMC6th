import React from 'react'; // eslint-disable-line no-unused-vars
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DetailPageContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${props => props.backgroundImage}) no-repeat center center/cover;
    opacity: 0.5;
    filter: blur(1px);
    z-index: 0;
  }
`;

//z-index로 상위 레이어로 빼기
const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0);
  padding: 40px;
  display: flex;
  gap: 40px;
  box-sizing: border-box;
`;

const Poster = styled.img`
  max-width: 300px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px; /* 상세 설명 영역의 최대 너비를 제한 */
  gap: 20px;
`;

const Title = styled.h1`
  margin: 0 0 10px;
`;

const Rating = styled.p`
  margin: 0 0 10px;
`;

const ReleaseDate = styled.p`
  margin: 0 0 10px;
`;

const Overview = styled.p`
  margin: 0;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px; /* 별 사이의 간격 설정 */
`;

const Star = styled.span`
  font-size: 20px; /* 별 이모티콘의 크기 설정 */
`;



const MovieDetailPage = () => {
  const { title } = useParams(); // URL에서 동적으로 변경되는 매개변수(영화제목)를 추출
  const location = useLocation(); // 현재 위치의 정보 저장
  const navigate = useNavigate(); // 페이지 이동 처리
  const { overview, vote_average, release_date, poster_path } = location.state || {}; 
  // 이전 페이지에서 전달된 상태 추출( 이 경우, 이전 페이지에서 넘겨준 movie 객체 의미)

  const backgroundImage = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const ratingStars = Math.floor(vote_average); // 평점을 내림하여 별 이모티콘 개수 계산


  const handleContainerClick = () => {
    navigate(-1); // 화면 어느 곳이나 클릭하면 이전 페이지로 이동
    
  };

  return (
    <DetailPageContainer backgroundImage={backgroundImage} onClick={handleContainerClick}>
      <ContentContainer>
        <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        <InfoContainer>
          <Title>{title}</Title>
          <StarsContainer>
            {/* 평점을 별 이모티콘으로 표시 */}
            Rating  :
            {Array.from({ length: ratingStars }, (_, index) => (
              <Star key={index}>⭐️</Star>
            ))}
          </StarsContainer>
          <ReleaseDate>Release Date: {release_date}</ReleaseDate>
          <Overview>{overview ? overview : 'There is no overview information in the TMDB API.'}</Overview>
        </InfoContainer>
      </ContentContainer>
    </DetailPageContainer>
  );
};

export default MovieDetailPage;
