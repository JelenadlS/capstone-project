import styled from 'styled-components';

import backgroundPicture from '../images/backgroundPicture.svg';

const Main = styled.main`
  overflow-y: auto;

  background-image: url(${backgroundPicture});
  background-size: cover;
  width: 100%;

  background-position: 30% 100%;
  @media (max-width: 425px) {
    background-image: url(${backgroundPicture});
    background-size: cover;
    background-position: 40% 50%;
  }
`;

export default Main;
