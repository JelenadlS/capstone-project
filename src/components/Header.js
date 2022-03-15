import { Link } from 'react-router-dom';
import gobackicon from '../images/goback.svg';
import styled from 'styled-components';

export default function Header({ title, link, textAlign }) {
  if (link || link === 'y') {
    return (
      <Title textAlign={textAlign}>
        <Arrowback to="/">
          <img src={gobackicon} alt="go back" />
        </Arrowback>
        <HeaderText>{title}</HeaderText>
      </Title>
    );
  }
  return (
    <Title>
      <h1>{title}</h1>
    </Title>
  );
}

const Title = styled.header`
  background: #f0e7da;
  padding: 10px;
  text-transform: uppercase;
  text-align: ${props => props.textAlign || 'center'};
  color: rgba(71, 39, 35, 0.72);
  position: sticky;
  top: 0px;
  z-index: 2;
  height: 60px;
  overflow: hidden;
`;

const Arrowback = styled(Link)`
  position: fixed;
  top: 5px;
  left: 2px;
`;

const HeaderText = styled.h1`
  margin-left: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
