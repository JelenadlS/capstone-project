import axios from 'axios';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ErrorFallback from './components/ErrorFallBack';

import ActivityOverviewPage from './pages/ActivityOverviewPage.js';
import EditActivityPage from './pages/EditActivityPage.js';
import FriendsActivitiesPage from './pages/FriendsActivitiesPage.js';
import MyFriendsPage from './pages/MyFriendsPage';
import NewActivityPage from './pages/NewActivityPage.js';
import AllActivitiesPage from './pages/AllActivitiesPage.js';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function App() {
  const [hasError, setHasError] = useState(false);
  const [activities, setActivities] = useState(
    (!hasError && loadFromLocal('activities')) || []
  );
  const navigate = useNavigate();
  const [photo, setPhoto] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');

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
                currentFilter={currentFilter}
                onFilter={onFilter}
              />
            }
          />
          <Route
            path="/:friendsName/:activityName"
            element={<ActivityOverviewPage activities={activities} />}
          />
          <Route
            path="/:friendsName/:activityName/:id/editactivity"
            element={
              <EditActivityPage
                activities={activities}
                onEditActivity={onEditActivity}
                uploadImage={uploadImage}
                photo={photo}
                setPhoto={setPhoto}
              />
            }
          />
          <Route
            path="/newactivity"
            element={
              <NewActivityPage
                onAddActivity={onAddActivity}
                uploadImage={uploadImage}
                photo={photo}
                setPhoto={setPhoto}
              />
            }
          />
          <Route
            path="/allactivities"
            element={<AllActivitiesPage activities={activities} />}
          />
        </Routes>
      </WrapperApp>
    </ErrorBoundary>
  );

  function onAddActivity({
    id,
    activity,
    category,
    friend,
    notes,
    date,
    location,
    photo,
  }) {
    setHasError(false);
    setActivities([
      ...activities,
      { activity, category, friend, id, notes, date, location, photo },
    ]);
    navigate('/');
  }

  function onEditActivity({
    id,
    activity,
    category,
    friend,
    notes,
    date,
    location,
    photo,
  }) {
    setActivities(
      activities.map(act =>
        act.id === id
          ? {
              ...act,
              id,
              activity,
              category,
              friend,
              notes,
              date,
              location,
              photo,
            }
          : act
      )
    );
  }

  function onFilter(category) {
    setCurrentFilter(category);
  }

  function uploadImage(e) {
    const data = new FormData();
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`;
    data.append('file', e.target.files[0]);
    data.append('upload_preset', PRESET);

    axios
      .post(url, data, {
        headers: {
          'Content-type': 'multipart/data',
        },
      })
      .then(response => {
        setPhoto(response.data.url);
      })
      .catch(error => console.log(error));
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
