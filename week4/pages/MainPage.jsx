// MainPage.js
import React from 'react'; // eslint-disable-line no-unused-vars
import Banner from '../components/Banner';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const UpperSection = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const LowerSection = styled.div`
  background-color: #2a3668;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  height: 55vh;
`;

const TextContainer = styled.div`
  margin-bottom: 20px;
  margin-top:30px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 5px;
  border-radius: 10px;
  width: 300px;
`;

const Icon = styled.span`
  margin-left: 10px;
  font-size: 20px;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <UpperSection>
        <Banner text="환영합니다!" style={{ color: 'white' }} />
      </UpperSection>
      <LowerSection>
        <TextContainer>
          <h2>Find your movies !</h2>
        </TextContainer>
        <InputContainer>
          <Input type="text" placeholder="영화 제목을 입력하세요..." />
          <Icon role="img" aria-label="Search">
            🔍
          </Icon>
        </InputContainer>
      </LowerSection>
    </MainContainer>
  );
};

export default MainPage;
