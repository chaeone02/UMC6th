// NotFoundPage.js
import React from 'react'; // eslint-disable-line no-unused-vars
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  background-color: #2a3668; 
  color: white;  
  height: 100vh;  
  display: flex;  // 요소들을 가로로 배치
  flex-direction: column;  // 세로로 정렬
  justify-content: center;  // 내용을 세로 가운데 정렬
  align-items: center;  // 내용을 가로 가운데 정렬
`;

const Title = styled.h1`
  font-size: 3rem; 
  margin-bottom: 0px;  // 아래 여백
`;

const Button = styled.button`
  background-color: white; 
  color: #2a3668;  
  border: none; 
  padding:10px;  // 내부 여백
  border-radius: 15px; 
  cursor: pointer;  // 커서를 손가락 모양으로 변경
  font-size: 0.9rem;  // 글자 크기
`;

const NotFoundPage = () => {
    let nav=useNavigate();
  const handleClick = () => {
    nav('/')  // 홈으로 이동
  };

  return (
    <Container>
      <Title>Oops!</Title>
      <h1>404 Not Found..</h1>
      <br></br><br></br>
      <Button onClick={handleClick}>Go Home</Button>
    </Container>
  );
};

export default NotFoundPage;

//<Button onClick={handleClick}>Go Home</Button>