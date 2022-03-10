import styled from 'styled-components';
import List from './components/List';
import Form from './components/Form';
import { useEffect, useState } from 'react';

export default function App() {
  const [activities, setActivities] = useState(
    loadFromLocal('activities') ?? []
  );
  const [hasError, setHasError] = useState(
    // loadFromLocal('activities') === true ? true : false
    false
  );

  function onAddActivity({ activity, friend }) {
    setActivities([...activities, { activity, friend }]);
    localStorage.setItem(activities, JSON.stringify(activities));
  }

  useEffect(() => {
    saveToLocal('activities', activities);
  }, [activities]);

  return (
    <>
      <WrapperApp>
        <Title>
          <h1>my activities</h1>
        </Title>
        <Main>
          <List activities={activities} hasError={hasError} />
        </Main>
        <Bottom>
          <Form onAddActivity={onAddActivity} />
        </Bottom>
      </WrapperApp>
    </>
  );

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      setHasError(true);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
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
`;

const Main = styled.main`
  overflow-y: auto;
`;

const Bottom = styled.div`
  background: white;
  width: 100%;
`;
