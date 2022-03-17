import styled from 'styled-components';

export default function Header({ children }) {
  return (
    <StyledHeader>
      <StyledTitle>{children}</StyledTitle>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: #f0e7da;
  padding: 10px;
  text-transform: uppercase;
  color: rgba(71, 39, 35, 0.72);
  position: sticky;
  top: 0px;
  z-index: 2;
  height: 60px;
  overflow: hidden;
`;

const StyledTitle = styled.h1`
  margin-left: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
