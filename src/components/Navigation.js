import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { MainNavButton } from './Button';

import homeIcon from '../images/homeIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Navigation({ children }) {
  return (
    <Footer>
      <StyledNavLinkHome to="/">
        <img width="50" height="50" alt="homeIcon" src={homeIcon} />
      </StyledNavLinkHome>
      <StyledNewButton>{children}</StyledNewButton>
      <StyledNavLinkSearch to="/">
        <img width="50" height="50" alt="searchIcon" src={searchIcon} />
      </StyledNavLinkSearch>
    </Footer>
  );
}

const Footer = styled.footer`
  background: #f0e7da;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 60px;
  box-shadow: inset 0px 10px 20px rgba(255, 255, 255, 0.5);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const StyledNavLinkHome = styled(NavLink)`
  grid-column-start: 2;
  padding-top: 3px;
  border-radius: 10px;

  &:active {
    transform: translateY(-8px);
  }
`;

const StyledNewButton = styled(MainNavButton)`
  grid-column-start: 4;
`;

const StyledNavLinkSearch = styled(NavLink)`
  grid-column-start: 6;
  padding-top: 5px;

  &:active {
    transform: translateY(-8px);
  }
`;
