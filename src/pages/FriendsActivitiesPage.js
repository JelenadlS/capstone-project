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
  setSearchInput,
  showBin,
  handleResetPage,
  handleResetPageAndShowArrow,
  resetPage,
}) {
  const { friendsName } = useParams();
  const selectedFriendsActivities = activitiesNotArchived.filter(
    activity => activity.friend === friendsName
  );
  const navigate = useNavigate();

  console.log(activities);
  console.log(selectedFriendsActivities);
  return (
    <Picture>
      <Header handleResetPage={handleResetPage}>
        {selectedFriendsActivities[0].friend}
        <ArrowBackButton onClick={event => resetPage(event, navigate('/'))}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <FilterTags
          selectedFriendsActivity={selectedFriendsActivities}
          currentFilter={currentFilter}
          onFilter={onFilter}
          setSearchInput={setSearchInput}
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
    if (!activities.activity || activities.length === 0) {
      navigate('/');
    } else {
      navigate(`/${selectedFriendsActivities.friend}`);
    }
  }
}
