import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import useStore from '../hooks/useStore.js';

import addAFriendIcon from '../images/addAFriendIcon.svg';
import addAGroupIcon from '../images/addAGroupIcon.svg';

export default function Header({ children, hiddenFriend, hiddenGroup }) {
  const handleResetPage = useStore(state => state.handleResetPage);

  return (
    <StyledHeader aria-label="header">
      <StyledTitle>{children}</StyledTitle>
      <StyledNavLinkAddFriend
        aria-label="add a friend"
        to="/addfriend"
        onClick={handleResetPage}
      >
        <img
          width="40"
          height="20"
          alt="addAFriendIcon"
          src={addAFriendIcon}
          hidden={hiddenFriend}
        />
        <StyledDescription hidden={hiddenFriend}>add</StyledDescription>
      </StyledNavLinkAddFriend>
      <StyledNavLinkAddFriend aria-label="add a group" to="/addgroup">
        <img
          width="40"
          height="20"
          alt="addAFriendIcon"
          src={addAGroupIcon}
          hidden={hiddenGroup}
        />
        <StyledDescription hidden={hiddenGroup}>add</StyledDescription>
      </StyledNavLinkAddFriend>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  background: #f0e7da;
  padding: 10px;
  position: sticky;
  top: 0px;
  z-index: 1;
  height: 55px;
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

const StyledNavLinkAddFriend = styled(NavLink)`
  position: absolute;
  top: 2px;
  right: 2px;
  align-self: center;
  padding-top: 8px;
  padding-right: 8px;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:active {
    transform: translateY(+8px);
  }
`;

const StyledDescription = styled.p`
  font-size: 10px;
  color: rgba(71, 39, 35, 0.72);
  text-align: center;
`;
