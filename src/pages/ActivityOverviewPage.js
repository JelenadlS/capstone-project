import gobackicon from '../images/goback.svg';
import Button from '../components/Button';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function ActivityOverviewPage({ activity, friend, id }) {
  return (
    <>
      <Title>
        <Arrowback to="/">
          <Button background="transparent" justifySelf="start">
            <img src={gobackicon} alt="delete" />
          </Button>
        </Arrowback>
        <HeaderText>{activity}</HeaderText>
      </Title>
      <WrapperCard>
        <p>{activity}</p>
        <p>mit: {friend}</p>
      </WrapperCard>
    </>
  );
}

const Title = styled.header`
  background: #f0e7da;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(71, 39, 35, 0.72);
  position: sticky;
  top: 0px;
  z-index: 2;
  height: 60px;
  overflow: hidden;
`;

const Arrowback = styled(NavLink)`
  position: fixed;
  top: -5px;
  left: -2px;
`;

const HeaderText = styled.h1`
  margin-left: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const WrapperCard = styled.section`
  color: rgba(71, 39, 35, 0.72);
  margin: 20px;
  font-size: 25px;
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 15px;
`;
