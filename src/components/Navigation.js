import styled from 'styled-components';
import { MainNavButton } from './Button';

export default function Navigation({ children }) {
  return (
    <Footer>
      <MainNavButton>{children}</MainNavButton>
    </Footer>
  );
}

const Footer = styled.footer`
  background: #f0e7da;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 60px;
  box-shadow: inset 0px 10px 20px rgba(255, 255, 255, 0.5);
`;
