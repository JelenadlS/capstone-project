import styled from 'styled-components';
import List from './components/List';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallBack';

export default function App() {
  const [hasError, setHasError] = useState(false);

  const [activities, setActivities] = useState(
    (!hasError && loadFromLocal('activities')) || []
  );

  function onAddActivity({ activity, friend }) {
    setHasError(false);
    setActivities([...activities, { activity, friend }]);
  }

  function onDeleteActivity({ activityId }) {
    const index = activities.findIndex(t => t.id === activityId);
    setActivities([
      ...activities.slice(0, index),
      ...activities.slice(index + 1),
    ]);
    setActivities(activities.filter(activity => activity.id !== activityId));
  }

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
            DeleteActivity={onDeleteActivity}
          />
        </Main>
        <Bottom>
          <Form AddActivity={onAddActivity} />
        </Bottom>
      </WrapperApp>
    </ErrorBoundary>
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
