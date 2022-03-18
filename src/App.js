import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ErrorFallback from './components/ErrorFallBack';

import backgroundpicture from './images/background.svg';

import ActivityOverviewPage from './pages/ActivityOverviewPage.js';
import EditActivityPage from './pages/EditActivityPage.js';
import FriendsActivitiesPage from './pages/FriendsActivitiesPage.js';
import MyFriendsPage from './pages/MyFriendsPage';
import NewActivityPage from './pages/NewActivityPage.js';

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
          <Route path="/" element={<MyFriendsPage activities={activities} />} />
          <Route
            path="/:friendsName"
            element={
              <FriendsActivitiesPage
                activities={activities}
                hasError={hasError}
                setActivities={setActivities}
              />
            }
          />
          <Route
            path="/:friendsName/:id"
            element={<ActivityOverviewPage activities={activities} />}
          />
          <Route
            path="/newactivity"
            element={<NewActivityPage onAddActivity={onAddActivity} />}
          />
          <Route
            path="/:friendsName/details/:id/editactivity"
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
  background-image: url(${backgroundpicture});
`;
