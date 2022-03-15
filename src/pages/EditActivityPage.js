import Header from '../components/Header';
import Form from '../components/Form';
import Button from '../components/Button';
import gobackicon from '../images/goback.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function EditActivityPage(
  id,
  activity,
  onEditActivity,
  toEditActivity
) {
  console.log(id);
  return (
    <>
      <WrapperApp>
        <Title>
          <Arrowback to={`/${id}`}>
            <Button background="transparent" justifySelf="start">
              <img src={gobackicon} alt="go back" />
            </Button>
          </Arrowback>
          <HeaderText>Edit activity</HeaderText>
        </Title>
        <Main>
          <Form
          // onEditActivity={onEditActivity}
          // toeditActivity={toEditActivity}
          />
        </Main>
      </WrapperApp>
    </>
  );
}
const WrapperApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr auto;
`;

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

const Main = styled.div`
  background: white;
  width: 100%;
`;
