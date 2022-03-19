import styled from 'styled-components';
import backgroundpicture from '../images/background.svg';

const Picture = styled.div`
  background-image: url(${backgroundpicture});
  background-size: cover;
  @media (max-width: 425px) {
    background-image: url(${backgroundpicture});
    background-size: cover;
    background-position: 40% 50%;
  }
`;

export default Picture;
