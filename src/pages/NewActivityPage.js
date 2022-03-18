import { useNavigate } from 'react-router-dom';
import gobackicon from '../images/goback.svg';
import Form from '../components/Form';
import Header from '../components/Header';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';

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
      <PageWrapper>
        <Main>
          <Form
            title="add activities"
            buttonName={'Add'}
            preloadedValues={null}
            handleActivity={onAddActivity}
          />
        </Main>
        <footer>footer</footer>
      </PageWrapper>
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

const Main = styled.div`
  background: white;
  width: 100%;
`;
