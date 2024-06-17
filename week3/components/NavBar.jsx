import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #162049;
  color: #ffffff;
  height: 50px;
`;

const Logo = styled.div`
  font-size: 20px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-left: 20px;
  transition: transform 0.1s ease;
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    cursor: pointer;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: none;
  }
  &.active {
    color: #FFD700;
  }
`;

const LogoLink = styled(NavLink)`
  color: #ffffff; /* 항상 하얀색으로 유지 */
  text-decoration: none;
`;

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Nav>
      <Logo>
        <LogoLink exact to="/">UMC Movie</LogoLink>
      </Logo>
      <Menu>
        <MenuItem>
          <button
            onClick={handleLoginLogout}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFD700',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            {isLoggedIn ? '로그인' : '로그아웃'}
          </button>
        </MenuItem>
        <MenuItem><StyledNavLink to="/popular" activeClassName="active">Popular</StyledNavLink></MenuItem>
        <MenuItem><StyledNavLink to="/nowplaying" activeClassName="active">Now Playing</StyledNavLink></MenuItem>
        <MenuItem><StyledNavLink to="/toprated" activeClassName="active">Top Rated</StyledNavLink></MenuItem>
        <MenuItem><StyledNavLink to="/upcoming" activeClassName="active">Upcoming</StyledNavLink></MenuItem>
      </Menu>
    </Nav>
  );
}

export default NavBar;
