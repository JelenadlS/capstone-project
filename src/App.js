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

  const [photo, setPhoto] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [showBin, setShowBin] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    saveToLocal('activities', activities);
  }, [activities]);

  const filteredSearchActivities = activities.filter(activity => {
    if (searchInput === '') {
      return activity;
    } else {
      return activity.activity.toLowerCase().includes(searchInput);
    }
  });

  console.log(searchInput);
  console.log(setSearchInput);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <WrapperApp>
        <Routes>
          <Route
            path="/"
            element={
              <MyFriendsPage
                activities={activities}
                handleResetPage={handleResetPage}
                handleResetPageAndShowArrow={handleResetPageAndShowArrow}
              />
            }
          />
          <Route
            path="/:friendsName"
            element={
              <FriendsActivitiesPage
                hasError={hasError}
                activities={activities}
                setActivities={setActivities}
                currentFilter={currentFilter}
                onFilter={onFilter}
                filteredSearchActivities={filteredSearchActivities}
                setSearchInput={setSearchInput}
                setCurrentFilter={setCurrentFilter}
                showBin={showBin}
                handleResetPage={handleResetPage}
                handleResetPageAndShowArrow={handleResetPageAndShowArrow}
              />
            }
          />
          <Route
            path="/:friendsName/:activityName"
            element={
              <ActivityOverviewPage
                activities={activities}
                handleResetPage={handleResetPage}
                handleResetPageAndShowArrow={handleResetPageAndShowArrow}
              />
            }
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
                handleResetPage={handleResetPage}
                handleResetPageAndShowArrow={handleResetPageAndShowArrow}
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
                handleResetPage={handleResetPage}
                handleResetPageAndShowArrow={handleResetPageAndShowArrow}
              />
            }
          />
          <Route
            path="/allactivities"
            element={
              <AllActivitiesPage
                activities={activities}
                currentFilter={currentFilter}
                onFilter={onFilter}
                setCurrentFilter={setCurrentFilter}
                filteredSearchActivities={filteredSearchActivities}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setShowBin={setShowBin}
                handleResetPage={handleResetPage}
                handleResetPageAndShowArrow={handleResetPageAndShowArrow}
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

  function handleResetPage() {
    setCurrentFilter('all');
    setSearchInput('');
    setShowBin(true);
  }

  function handleResetPageAndShowArrow() {
    setCurrentFilter('all');
    setSearchInput('');
    setShowBin(false);
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
