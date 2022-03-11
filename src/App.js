import styled from 'styled-components';
import List from './components/List';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallBack';
import { nanoid } from 'nanoid';

export default function App() {
  const [hasError, setHasError] = useState(false);
  const [activities, setActivities] = useState(
    (!hasError && loadFromLocal('activities')) || []
  );

  useEffect(() => {
    saveToLocal('activities', activities);
  }, [activities]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <WrapperApp>
        <Title>
          <h1>my activities</h1>
        </Title>
        <Main>
          <List
            activities={activities}
            errorMessage={hasError}
            onDeleteActivity={onDeleteActivity}
          />
        </Main>
        <Bottom>
          <Form onAddActivity={onAddActivity} />
        </Bottom>
      </WrapperApp>
    </ErrorBoundary>
  );

  function onAddActivity({ activity, friend }) {
    setHasError(false);
    const id = nanoid();
    setActivities([...activities, { activity, friend, id }]);
  }

  function onDeleteActivity(thisActivityId) {
    setActivities(
      activities.filter(activity => activity.id !== thisActivityId)
    );
  }

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
