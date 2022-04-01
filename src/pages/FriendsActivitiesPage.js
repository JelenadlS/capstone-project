import { NavLink, useParams, useNavigate } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import FilterTags from '../components/FilterTags';

import Header from '../components/Header';
import List from '../components/List';
import Main from '../components/Main';
import Navigation from '../components/Navigation';

import useStore from '../hooks/useStore.js';

import goBackIcon from '../images/goBackIcon.svg';
import newIcon from '../images/newIcon.svg';

export default function FriendsActivitiesPage({
  activitiesNotArchived,
  filteredSearchActivities,
}) {
  const navigate = useNavigate();

  const { friendsName } = useParams();

  const activities = useStore(state => state.activities);
  const setActivities = useStore(state => state.setActivities);
  const resetPage = useStore(state => state.resetPage);

  const selectedFriendsActivities = activitiesNotArchived.filter(
    activity =>
      (activity?.group ? activity.group : activity.friend) === friendsName
  );

  return (
    <>
      <Header hiddenGroup="hidden">
        {selectedFriendsActivities[0]?.group
          ? selectedFriendsActivities[0]?.group
          : selectedFriendsActivities[0]?.friend}
        <ArrowBackButton onClick={event => resetPage(event, navigate('/'))}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <FilterTags activities={selectedFriendsActivities} />
        <List
          onDeleteActivity={onDeleteActivity}
          selectedFriendsActivity={selectedFriendsActivities}
          filteredSearchActivities={filteredSearchActivities}
        />
      </Main>
      <Navigation>
        <NavLink to="/newactivity">
          <img src={newIcon} alt="new" />
        </NavLink>
      </Navigation>
    </>
  );

  function onDeleteActivity(thisActivityId) {
    setActivities(
      activities.filter(activity => activity.id !== thisActivityId)
    );
    if (selectedFriendsActivities.length <= 1) {
      navigate('/');
    } else {
      navigate(`/${selectedFriendsActivities[0].friend}`);
    }
  }
}
