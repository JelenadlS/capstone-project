import { useNavigate } from 'react-router-dom';
import gobackicon from '../images/goback.svg';
import Form from '../components/Form';
import Header from '../components/Header';
import styled from 'styled-components';

export default function NewActivityPage({ onAddActivity }) {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        new activity
        <Arrowback onClick={() => navigate(-1)}>
          <img src={gobackicon} alt="go back" />
        </Arrowback>
      </Header>
      <WrapperApp>
        <Main>
          <Form
            title="add activities"
            buttonName={'Add'}
            preloadedValues={null}
            handleActivity={onAddActivity}
          />
        </Main>
      </WrapperApp>
    </>
  );
}

const Arrowback = styled.button`
  border: none;
  background: transparent;
  position: fixed;
  top: 5px;
  left: 2px;
`;

const WrapperApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Main = styled.div`
  background: white;
  width: 100%;
`;
