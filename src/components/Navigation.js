import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { MainNavButton } from './Button';

import useStore from '../hooks/useStore.js';

import groupIcon from '../images/groupIcon.svg';
import allActivitiesIcon from '../images/allActivitiesIcon.svg';
import friendIcon from '../images/friendIcon.svg';
import inspireIcon from '../images/inspireIcon.svg';
import newIcon from '../images/newIcon.svg';

export default function Navigation({ hidden }) {
  const handleResetPage = useStore(state => state.handleResetPage);
  const handleResetPageAndShowArrow = useStore(
    state => state.handleResetPageAndShowArrow
  );

  return (
    <StyledNavigation aria-label="navigation">
      <StyledNavLink
        aria-label="all non friend and friend related activities"
        to="/"
        onClick={handleResetPage}
      >
        <figure>
          <StyledIcon
            width="40"
            height="20"
            alt="overview of friends"
            src={friendIcon}
          />
          <figcaption>friends</figcaption>
        </figure>
      </StyledNavLink>
      <StyledNavLink
        aria-label="all group related activities"
        to="/mygroups"
        onClick={handleResetPage}
      >
        <figure>
          <StyledIcon
            width="40"
            height="20"
            alt="overview of friends"
            src={groupIcon}
          />
          <figcaption>groups</figcaption>
        </figure>
      </StyledNavLink>
      <MainNavButton
        type="button"
        aria-label="create a new activity"
        hidden={hidden}
        onClick={handleResetPage}
      >
        <NavLink to="/newactivity">
          <img width="45" height="45" src={newIcon} alt="add an activity" />
        </NavLink>
      </MainNavButton>
      {hidden && <div />}
      <StyledNavLink
        aria-label="all activities"
        to="/allactivities"
        onClick={handleResetPageAndShowArrow}
      >
        <figure>
          <img
            width="40"
            height="30"
            alt="all activities"
            src={allActivitiesIcon}
          />
          <figcaption>activities</figcaption>
        </figure>
      </StyledNavLink>
      <StyledNavLink
        aria-label="all activities you already did"
        to="/getinspired"
        onClick={handleResetPageAndShowArrow}
      >
        <figure>
          <img
            width="40"
            height="30"
            alt="all past activities"
            src={inspireIcon}
          />
          <figcaption>inspiration</figcaption>
        </figure>
      </StyledNavLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  width: 100%;
  max-width: 500px;
  background: #f0e7da;
  position: fixed;
  bottom: 0;
  height: 60px;
  box-shadow: inset 0px 10px 20px rgba(255, 255, 255, 0.5);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  place-items: center;
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:active {
    transform: translateY(-8px);
  }

  figcaption {
    line-height: 1;
    font-size: 10px;
    color: rgba(71, 39, 35, 0.72);
  }
`;

const StyledIcon = styled.img`
  margin-top: 8px;
`;
