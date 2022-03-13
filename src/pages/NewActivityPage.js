import Form from '../components/Form';
import Header from '../components/Header';
import styled from 'styled-components';

export default function NewActivityPage({ onAddActivity }) {
  return (
    <>
      <WrapperApp>
        <Header title="new activity" />

        <Bottom>
          <Form onAddActivity={onAddActivity} />
        </Bottom>
      </WrapperApp>
    </>
  );
}

const WrapperApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr auto;
`;

const Bottom = styled.div`
  background: white;
  width: 100%;
`;
