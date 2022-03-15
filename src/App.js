import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router-dom';
import ErrorFallback from './components/ErrorFallBack';
import MyActivitiesPage from './pages/MyActivitiesPage.js';
import ActivityOverviewPage from './pages/ActivityOverviewPage.js';
import NewActivityPage from './pages/NewActivityPage.js';
import EditActivityPage from './pages/EditActivityPage.js';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [hasError, setHasError] = useState(false);
  const [activities, setActivities] = useState(
    (!hasError && loadFromLocal('activities')) || []
  );
  const navigate = useNavigate();

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
              />
            }
          />
          <Route
            path="/details/:id"
            element={<ActivityOverviewPage activities={activities} />}
          />
          <Route
            path="/newactivity"
            element={
              <NewActivityPage
                setActivities={setActivities}
                onAddActivity={onAddActivity}
              />
            }
          />
          <Route
            path="/editactivity/:id"
            element={
              <EditActivityPage
                activities={activities}
                onEditActivity={onEditActivity}
              />
            }
          />
        </Routes>
      </WrapperApp>
    </ErrorBoundary>
  );

  function onAddActivity({ id, activity, friend, notes, date, location }) {
    setHasError(false);
    setActivities([
      ...activities,
      { activity, friend, id, notes, date, location },
    ]);
    navigate('/');
  }

  function onEditActivity({ id, activity, friend, notes, date, location }) {
    setActivities(
      activities.map(act =>
        act.id === id
          ? { ...act, id, activity, friend, notes, date, location }
          : act
      )
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
`;
