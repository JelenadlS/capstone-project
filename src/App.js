import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { nanoid } from 'nanoid';
//import { Routes, Route, useRouteMatch, useParams } from 'react-router-dom';
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
  const [selectedActivity, setSelectedActivity] = useState(null);

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
                handleShowDetails={handleShowDetails}
              />
            }
          />

          <Route
            path="/details/:id"
            element={
              <ActivityOverviewPage
                selectedActivity={selectedActivity}
                // activity={selectedActivity?.activity}
                // friend={selectedActivity?.friend}
                // notes={selectedActivity?.notes}
                // date={selectedActivity?.date}
                // location={selectedActivity?.location}
                // id={selectedActivity?.id}
              />
            }
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

          <Route path="/editactivity/:id" element={<EditActivityPage />} />
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

  function handleShowDetails(id) {
    console.log(id);
    console.log(activities.filter(activity => id === activity.id));
    setSelectedActivity(activities.filter(activity => id === activity.id));
    console.log(selectedActivity);
    navigate(`/details/${id}`);
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
