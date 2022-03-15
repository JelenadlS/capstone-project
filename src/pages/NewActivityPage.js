import Header from '../components/Header';
import Form from '../components/Form';
import styled from 'styled-components';

export default function NewActivityPage({ onAddActivity }) {
  return (
    <>
      <WrapperApp>
        <Header textAlign="left" title="new activity" link="y" />
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

const WrapperApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr auto;
`;

const Main = styled.div`
  background: white;
  width: 100%;
`;
