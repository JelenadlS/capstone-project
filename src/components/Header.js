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
      <span hidden={hiddenFriend ? hiddenGroup : hiddenFriend}>
        <StyledNavLink
          aria-label={`${hiddenFriend ? 'add a group' : 'add a friend'} `}
          to={`${hiddenFriend ? '/addgroup' : '/addfriend'} `}
          onClick={handleResetPage}
        >
          <figure>
            <img
              width="40"
              height="20"
              alt={`${hiddenFriend ? 'addAGroupIcon' : 'addAFriendIcon'} `}
              src={hiddenFriend ? addAGroupIcon : addAFriendIcon}
            />
            <figcaption>add</figcaption>
          </figure>
        </StyledNavLink>
      </span>
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

const StyledNavLink = styled(NavLink)`
  position: absolute;
  top: 10px;
  right: 10px;
  align-self: center;
  text-decoration: none;

  &:active {
    transform: translateY(+8px);
  }

  figcaption {
    line-height: 1;
    font-size: 10px;
    color: rgba(71, 39, 35, 0.72);
  }
`;
