import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { MainNavButton } from './Button';

import allActivitiesIcon from '../images/allActivitiesIcon.svg';
import inspireIcon from '../images/inspireIcon.svg';

export default function Navigation({
  children,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  return (
    <StyledNavigation area-label="StyledNavigation">
      <StyledNavLinkActivities
        to="/allactivities"
        onClick={handleResetPageAndShowArrow}
      >
        <img width="40" height="30" alt="searchIcon" src={allActivitiesIcon} />{' '}
        <StyledDescription>activities</StyledDescription>
      </StyledNavLinkActivities>

      <StyledNewButton onClick={handleResetPage}>{children}</StyledNewButton>
      <StyledNavLinkInspire to="/" onClick={handleResetPage}>
        <img width="40" height="30" alt="inspireIcon" src={inspireIcon} />
        <StyledDescription>inspiration</StyledDescription>
      </StyledNavLinkInspire>
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

const StyledNewButton = styled(MainNavButton)`
  grid-column-start: 4;
`;

const StyledNavLinkActivities = styled(NavLink)`
  grid-column-start: 2;
  align-self: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:active {
    transform: translateY(-8px);
  }
`;

const StyledNavLinkInspire = styled(NavLink)`
  grid-column-start: 6;
  align-self: center;
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: column;

  &:active {
    transform: translateY(-8px);
  }
  img {
    padding-left: 8px;
  }
`;

const StyledDescription = styled.p`
  font-size: 10px;
  color: rgba(71, 39, 35, 0.72);
  text-align: center;
`;
