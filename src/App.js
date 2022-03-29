import axios from 'axios';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ErrorFallback from './components/ErrorFallBack';

import ActivityOverviewPage from './pages/ActivityOverviewPage.js';
import AddFriendPage from './pages/AddFriendPage.js';
import EditActivityPage from './pages/EditActivityPage.js';
import FriendsActivitiesPage from './pages/FriendsActivitiesPage.js';
import GetInspiredPage from './pages/GetInspiredPage.js';
import MyFriendsPage from './pages/MyFriendsPage';
import MyGroupsPage from './pages/MyGroupsPage';
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
  const [addedFriend, setAddedFriend] = useState(
    (!hasError && loadFromLocal('addedFriend')) || []
  );

  const navigate = useNavigate();

  useEffect(() => {
    saveToLocal('activities', activities);
    saveToLocal('addedFriend', addedFriend);
  }, [activities, addedFriend]);

  const activitiesNotArchived = activities.filter(
    activity => activity.isArchived === false
  );

  const activitiesArchived = activities.filter(
    activity => activity.isArchived === true
  );

  const filteredSearchActivities = activitiesNotArchived.filter(activity => {
    if (searchInput === '') {
      return activity;
    } else {
      return activity.activity
        .toLowerCase()
        .includes(searchInput.toLowerCase().trim());
    }
  });

  const filteredSearchActivitiesArchived = activitiesArchived.filter(
    activity => {
      if (searchInput === '') {
        return activity;
      } else {
        return activity.activity
          .toLowerCase()
          .includes(searchInput.toLowerCase().trim());
      }
    }
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <WrapperApp>
        <Routes>
          <Route
            path="/"
            element={
              <MyFriendsPage
                activities={activitiesNotArchived}
                handleResetPage={handleResetPage}
                handleResetPageAndShowArrow={handleResetPageAndShowArrow}
              />
            }
          />
          <Route
            path="/mygroups"
            element={
              <MyGroupsPage
                activities={activitiesNotArchived}
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
                activitiesNotArchived={activitiesNotArchived}
                setActivities={setActivities}
                currentFilter={currentFilter}
                onFilter={onFilter}
                filteredSearchActivities={filteredSearchActivities}
                setSearchInput={setSearchInput}
                showBin={showBin}
                handleResetPage={handleResetPage}
                handleResetPageAndShowArrow={handleResetPageAndShowArrow}
                resetPage={resetPage}
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
                onSetPastActivity={onSetPastActivity}
                setActivities={setActivities}
              />
            }
          />
          <Route
            path="/:friendsName/:activityName/:id/editactivity"
            element={
              <EditActivityPage
                activities={activitiesNotArchived}
                onEditActivity={onEditActivity}
                uploadImage={uploadImage}
                photo={photo}
                setPhoto={setPhoto}
                handleResetPage={handleResetPage}
                handleResetPageAndShowArrow={handleResetPageAndShowArrow}
                addedFriend={addedFriend}
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
                addedFriend={addedFriend}
              />
            }
          />
          <Route
            path="/allactivities"
            element={
              <AllActivitiesPage
                activities={activitiesNotArchived}
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
          <Route
            path="/getinspired"
            element={
              <GetInspiredPage
                activitiesArchived={activitiesArchived}
                handleResetPage={handleResetPage}
                handleResetPageAndShowArrow={handleResetPageAndShowArrow}
                onFilter={onFilter}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setCurrentFilter={setCurrentFilter}
                currentFilter={currentFilter}
                filteredSearchActivitiesArchived={
                  filteredSearchActivitiesArchived
                }
                resetPage={resetPage}
              />
            }
          />
          <Route
            path="/addfriend"
            element={
              <AddFriendPage
                addedFriend={addedFriend}
                setAddedFriend={setAddedFriend}
                // onAddedFriend={onAddedFriend}
                handleResetPage={handleResetPage}
                handleResetPageAndShowArrow={handleResetPageAndShowArrow}
              />
            }
          />
        </Routes>
      </WrapperApp>
    </ErrorBoundary>
  );

  // function onAddedFriend({ id, newFriend }) {
  //   setHasError(false);
  //   setAddedFriend([...addedFriend, { id, newFriend }]);
  // }

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
      {
        activity,
        category,
        friend,
        id,
        notes,
        date,
        location,
        photo,
        isArchived: false,
      },
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

  function onSetPastActivity(thisActivityId, isLiked) {
    if (isLiked === 'true') {
      setActivities(
        activities.map(activity => {
          if (activity.id === thisActivityId) {
            return { ...activity, isArchived: true, isLiked: true };
          } else {
            return activity;
          }
        })
      );
    } else {
      setActivities(
        activities.map(activity => {
          if (activity.id === thisActivityId) {
            return { ...activity, isArchived: true, isLiked: false };
          } else {
            return activity;
          }
        })
      );
    }
    navigate('/');
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

  function resetPage(event) {
    event.preventDefault();
    setCurrentFilter('all');
    setSearchInput('');
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
        setPhoto(response.data.url.replace('http://', 'https://'));
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
