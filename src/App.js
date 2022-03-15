import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { nanoid } from 'nanoid';
import { Routes, Route } from 'react-router-dom';
import ErrorFallback from './components/ErrorFallBack';
import MyActivitiesPage from './pages/MyActivitiesPage.js';
import ActivityOverviewPage from './pages/ActivityOverviewPage.js';
import NewActivityPage from './pages/NewActivityPage.js';
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
                onAddActivity={onAddActivity}
              />
            }
          />
          {activities.map(activity => (
            <Route
              key={activity.id}
              path={`${activity.id}`}
              element={
                <ActivityOverviewPage
                  key={activity.id}
                  activity={activity.activity}
                  friend={activity.friend}
                  notes={activity.notes}
                  date={activity.date}
                  location={activity.location}
                />
              }
            />
          ))}
          <Route
            path="newactivity"
            element={
              <NewActivityPage
                setActivities={setActivities}
                onAddActivity={onAddActivity}
              />
            }
          />
        </Routes>
      </WrapperApp>
    </ErrorBoundary>
  );

  function onAddActivity({ activity, friend, notes, date, location }) {
    setHasError(false);
    const id = nanoid();
    setActivities([
      ...activities,
      { activity, friend, id, notes, date, location },
    ]);
    navigate('/');
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
