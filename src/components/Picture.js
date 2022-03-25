import styled from 'styled-components';

import backgroundPicture from '../images/backgroundPicture.svg';

const Picture = styled.div`
  background-image: url(${backgroundPicture});
  background-size: cover;

  background-position: 30% 100%;
  @media (max-width: 425px) {
    background-image: url(${backgroundPicture});
    background-size: cover;
    background-position: 40% 50%;
  }
`;

export default Picture;
