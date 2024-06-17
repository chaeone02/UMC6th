// Footer.js
import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #162049; 
  color: #ffffff;
  position: fixed;
  padding: 10px;
  bottom: 0;
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FooterText = styled.p`
  margin: 0;
  padding-right:20px;
  font-size:14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Copyright © 2024 Lee ChaeWon  _ All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
