import { NavLink, useParams, useNavigate } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import FilterTags from '../components/FilterTags';

import Header from '../components/Header';
import List from '../components/List';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import useStore from '../hooks/useStore.js';

import goBackIcon from '../images/goBackIcon.svg';
import newIcon from '../images/newIcon.svg';

export default function FriendsActivitiesPage({
  activitiesNotArchived,

  onFilter,
  filteredSearchActivities,
  showBin,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  const { friendsName } = useParams();
  const resetPage = useStore(state => state.resetPage);
  const activities = useStore(state => state.activities);
  const setActivities = useStore(state => state.setActivities);
  const selectedFriendsActivities = activitiesNotArchived.filter(
    activity =>
      (activity?.group ? activity.group : activity.friend) === friendsName
  );
  const navigate = useNavigate();

  return (
    <Picture>
      <Header hiddenGroup="hidden">
        {selectedFriendsActivities[0]?.group
          ? selectedFriendsActivities[0]?.group
          : selectedFriendsActivities[0]?.friend}
        <ArrowBackButton onClick={event => resetPage(event, navigate('/'))}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <FilterTags
          activities={selectedFriendsActivities}
          onFilter={onFilter}
        />
        <List
          onDeleteActivity={onDeleteActivity}
          selectedFriendsActivity={selectedFriendsActivities}
          filteredSearchActivities={filteredSearchActivities}
          showBin={showBin}
        />
      </Main>
      <Navigation
        handleResetPage={handleResetPage}
        handleResetPageAndShowArrow={handleResetPageAndShowArrow}
      >
        <NavLink to="/newactivity">
          <img src={newIcon} alt="new" />
        </NavLink>
      </Navigation>
    </Picture>
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
