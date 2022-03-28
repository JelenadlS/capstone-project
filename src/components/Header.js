import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header({ children, handleResetPage }) {
  return (
    <StyledHeader>
      <StyledTitle>{children}</StyledTitle>
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
