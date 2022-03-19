import styled from 'styled-components';
import backgroundpicture from '../images/background.svg';

const Picture = styled.div`
  height: 100vh;
  background-color: none;
  background-image: url(${backgroundpicture});
  background-size: cover;
`;

export default Picture;
