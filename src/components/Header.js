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
  z-index: 1;
  height: 48px;
  overflow: hidden;
  font-size: 14px;
  text-align: center;
`;

const StyledTitle = styled.h1`
  margin-left: 45px;
  margin-right: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
