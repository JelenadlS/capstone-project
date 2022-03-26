import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import friendIcon from '../images/friendIcon.svg';

export default function Header({ children, handleResetPage }) {
  return (
    <StyledHeader>
      <StyledTitle>{children}</StyledTitle>
      <StyledNavLinkFriends to="/" onClick={handleResetPage}>
        <img width="40" height="20" alt="friendsHomeIcon" src={friendIcon} />
        <StyledDescription>friends</StyledDescription>
      </StyledNavLinkFriends>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: #f0e7da;
  padding: 10px;
  position: sticky;
  top: 0px;
  z-index: 1;
  height: 48px;
  overflow: hidden;
  text-align: center;
`;

const StyledTitle = styled.h1`
  margin-left: 50px;
  margin-right: 50px;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledNavLinkFriends = styled(NavLink)`
  position: fixed;
  top: 2px;
  right: 2px;
  align-self: center;
  padding-top: 8px;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:active {
    transform: translateY(-8px);
  }
`;

const StyledDescription = styled.p`
  font-size: 10px;
  color: rgba(71, 39, 35, 0.72);
  text-align: center;
`;
