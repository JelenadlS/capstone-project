import { NavLink, useParams, useNavigate } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import FilterTags from '../components/FilterTags';

import Header from '../components/Header';
import List from '../components/List';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import goBackIcon from '../images/goBackIcon.svg';
import newIcon from '../images/newIcon.svg';

export default function FriendsActivitiesPage({
  hasError,
  activities,
  activitiesNotArchived,
  setActivities,
  currentFilter,
  onFilter,
  filteredSearchActivities,

  showBin,
  handleResetPage,
  handleResetPageAndShowArrow,
  resetPage,
}) {
  const { friendsName } = useParams();
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
          currentFilter={currentFilter}
          onFilter={onFilter}
        />
        <List
          errorMessage={hasError}
          onDeleteActivity={onDeleteActivity}
          currentFilter={currentFilter}
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
