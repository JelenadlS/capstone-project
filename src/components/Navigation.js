import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { MainNavButton } from './Button';

import useStore from '../hooks/useStore.js';

import groupIcon from '../images/groupIcon.svg';
import allActivitiesIcon from '../images/allActivitiesIcon.svg';
import friendIcon from '../images/friendIcon.svg';
import inspireIcon from '../images/inspireIcon.svg';

export default function Navigation({ children, hidden }) {
  const handleResetPage = useStore(state => state.handleResetPage);
  const handleResetPageAndShowArrow = useStore(
    state => state.handleResetPageAndShowArrow
  );

  return (
    <StyledNavigation aria-label="navigation">
      <StyledNavLinkFriends
        aria-label="all non friend and friend related activities"
        to="/"
        onClick={handleResetPage}
      >
        <img width="40" height="20" alt="friendsHomeIcon" src={friendIcon} />
        <StyledDescription>friends</StyledDescription>
      </StyledNavLinkFriends>
      <StyledNavLinkGroup
        aria-label="all group related activities"
        to="/mygroups"
        onClick={handleResetPage}
      >
        <img width="40" height="20" alt="addAFriendIcon" src={groupIcon} />
        <StyledDescription>groups</StyledDescription>
      </StyledNavLinkGroup>
      <StyledNewButton
        aria-label="create a new activity"
        hidden={hidden}
        onClick={handleResetPage}
      >
        {children}
      </StyledNewButton>
      <StyledNavLinkActivities
        aria-label="all activities"
        to="/allactivities"
        onClick={handleResetPageAndShowArrow}
      >
        <img
          width="40"
          height="30"
          alt="allActivitiesIcon"
          src={allActivitiesIcon}
        />
        <StyledDescription>activities</StyledDescription>
      </StyledNavLinkActivities>
      <StyledNavLinkInspire
        aria-label="all activities you already did"
        to="/getinspired"
        onClick={handleResetPageAndShowArrow}
      >
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
  grid-template-columns: repeat(5, 1fr 2fr) 1fr;
  justify-items: center;
`;

const StyledNewButton = styled(MainNavButton)`
  grid-column-start: 6;
`;

const StyledNavLinkActivities = styled(NavLink)`
  grid-column-start: 8;
  align-self: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:active {
    transform: translateY(-8px);
  }
`;

const StyledNavLinkInspire = styled(NavLink)`
  grid-column-start: 10;
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

const StyledNavLinkFriends = styled(NavLink)`
  grid-column-start: 2;
  align-self: center;
  padding-top: 8px;
  padding-right: 8px;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:active {
    transform: translateY(-8px);
  }
`;

const StyledNavLinkGroup = styled(NavLink)`
  grid-column-start: 4;
  align-self: center;
  padding-top: 8px;
  padding-right: 8px;
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
