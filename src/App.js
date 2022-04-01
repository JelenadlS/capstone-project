import axios from 'axios';

import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ErrorFallback from './components/ErrorFallBack';
import Navigation from './components/Navigation';

import useStore from './hooks/useStore.js';

import ActivityOverviewPage from './pages/ActivityOverviewPage.js';
import AddFriendPage from './pages/AddFriendPage.js';
import AddGroupPage from './pages/AddGroupPage.js';
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
  const activities = useStore(state => state.activities);
  const searchInput = useStore(state => state.searchInput);
  const showSave = useStore(state => state.showSave);
  const setActivities = useStore(state => state.setActivities);
  const setPhoto = useStore(state => state.setPhoto);

  const navigate = useNavigate();

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
            element={<MyFriendsPage activities={activitiesNotArchived} />}
          />
          <Route
            path="/mygroups"
            element={<MyGroupsPage activities={activitiesNotArchived} />}
          />
          <Route
            path="/:friendsName"
            element={
              <FriendsActivitiesPage
                activitiesNotArchived={activitiesNotArchived}
                filteredSearchActivities={filteredSearchActivities}
              />
            }
          />
          <Route
            path="/:friendsName/:activityName"
            element={
              <ActivityOverviewPage onSetPastActivity={onSetPastActivity} />
            }
          />
          <Route
            path="/:friendsName/:activityName/:id/editactivity"
            element={
              <EditActivityPage
                activities={activitiesNotArchived}
                uploadImage={uploadImage}
              />
            }
          />
          <Route
            path="/newactivity"
            element={
              <NewActivityPage
                onAddActivity={onAddActivity}
                uploadImage={uploadImage}
              />
            }
          />
          <Route
            path="/allactivities"
            element={
              <AllActivitiesPage
                activities={activitiesNotArchived}
                filteredSearchActivities={filteredSearchActivities}
              />
            }
          />
          <Route
            path="/getinspired"
            element={
              <GetInspiredPage
                activitiesArchived={activitiesArchived}
                filteredSearchActivitiesArchived={
                  filteredSearchActivitiesArchived
                }
              />
            }
          />
          <Route path="/addfriend" element={<AddFriendPage />} />
          <Route path="/addgroup" element={<AddGroupPage />} />
        </Routes>
        <Navigation hidden={showSave && 'hidden'} />
      </WrapperApp>
    </ErrorBoundary>
  );

  function onAddActivity({
    id,
    activity,
    category,
    group,
    friend,
    notes,
    date,
    location,
    photo,
  }) {
    setActivities([
      ...activities,
      {
        activity,
        category,
        group,
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
}

const WrapperApp = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
`;
