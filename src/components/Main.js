import styled from 'styled-components';

import backgroundPicture from '../images/backgroundPicture.webp';

const Main = styled.main`
  overflow-y: auto;
  background-image: url(${backgroundPicture});
  background-size: cover;
  width: 100%;
  background-position: 35% 100%;
`;

export default Main;
