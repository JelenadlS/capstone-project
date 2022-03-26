import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { MainNavButton } from './Button';

import friendIcon from '../images/friendIcon.svg';
import allActivitiesIcon from '../images/allActivitiesIcon.svg';

export default function Navigation({
  children,
  setCurrentFilter,
  setSearchInput,
}) {
  function handleResetPage() {
    setCurrentFilter('all');
    setSearchInput('');
  }
  return (
    <StyledNavigation area-label="StyledNavigation">
      <StyledNavLinkFriends to="/" onClick={handleResetPage}>
        <img width="40" height="20" alt="friendsHomeIcon" src={friendIcon} />
        <StyledDescription>friends</StyledDescription>
      </StyledNavLinkFriends>
      <StyledNewButton onClick={handleResetPage}>{children}</StyledNewButton>
      <StyledNavLinkActivities to="/allactivities" onClick={handleResetPage}>
        <img width="40" height="30" alt="searchIcon" src={allActivitiesIcon} />
        <StyledDescription>activities</StyledDescription>
      </StyledNavLinkActivities>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  background: #f0e7da;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 60px;
  box-shadow: inset 0px 10px 20px rgba(255, 255, 255, 0.5);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
`;

const StyledNavLinkFriends = styled(NavLink)`
  grid-column-start: 2;
  align-self: center;
  padding-top: 8px;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:active {
    transform: translateY(-8px);
  }
`;

const StyledNewButton = styled(MainNavButton)`
  grid-column-start: 4;
`;

const StyledNavLinkActivities = styled(NavLink)`
  grid-column-start: 6;
  align-self: center;
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
