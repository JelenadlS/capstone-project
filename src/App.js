import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { nanoid } from 'nanoid';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import ErrorFallback from './components/ErrorFallBack';
import MyActivitiesPage from './pages/MyActivitiesPage.js';
import ActivityOverviewPage from './pages/ActivityOverviewPage.js';
import styled from 'styled-components';

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
        <Routes>
          <Route
            path="/"
            element={
              <MyActivitiesPage
                activities={activities}
                hasError={hasError}
                setActivities={setActivities}
                onAddActivity={onAddActivity}
              />
            }
          />
          <Route
            path="/about"
            element={<ActivityOverviewPage activities={activities} />}
          />
        </Routes>
      </WrapperApp>
    </ErrorBoundary>
  );

  function onAddActivity({ activity, friend }) {
    setHasError(false);
    const id = nanoid();
    setActivities([...activities, { activity, friend, id }]);
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
`;
