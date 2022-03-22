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

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function App() {
  const [hasError, setHasError] = useState(false);
  const [activities, setActivities] = useState(
    (!hasError && loadFromLocal('activities')) || []
  );
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [photo, setPhoto] = useState('');

  console.log(photo);

  useEffect(() => {
    saveToLocal('activities', activities);
  }, [activities]);

  console.log(activities);

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
                image={image}
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
              />
            }
          />
          <Route
            path="/newactivity"
            element={
              <NewActivityPage
                onAddActivity={onAddActivity}
                setImage={setImage}
                uploadImage={uploadImage}
                photo={photo}
              />
            }
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
  }) {
    setActivities(
      activities.map(act =>
        act.id === id
          ? { ...act, id, activity, category, friend, notes, date, location }
          : act
      )
    );
  }

  function uploadImage() {
    const data = new FormData();
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`;
    data.append('file', image);
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
      // .then(uploadImage)
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
