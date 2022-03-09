import styled from 'styled-components';
import List from './components/List';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
  const [activities, setActivities] = useState([]);

  function onAddActivity({ activity, friend }) {
    setActivities([...activities, { activity, friend }]);
  }

  return (
    <>
      <Wrapper>
        <Title>
          <h1>my activities</h1>
        </Title>
        <Main>
          <List activities={activities} />
        </Main>
        <Bottom>
          <Form onAddActivity={onAddActivity} />
        </Bottom>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
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
`;

const Main = styled.main`
  overflow-y: auto;
`;

const Bottom = styled.div`
  background: white;
  width: 100%;
`;
