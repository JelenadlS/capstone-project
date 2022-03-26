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
  setActivities,
  currentFilter,
  onFilter,
  filteredSearchActivities,
  setSearchInput,
  setCurrentFilter,
  showBin,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  const { friendsName } = useParams();
  const selectedFriendsActivities = activities.filter(
    activity => activity.friend === friendsName
  );
  const navigate = useNavigate();

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

  function resetPage(event) {
    event.preventDefault();
    setCurrentFilter('all');
    setSearchInput('');
  }

  function onDeleteActivity(thisActivityId) {
    setActivities(
      activities.filter(activity => activity.id !== thisActivityId)
    );
    if (
      !selectedFriendsActivities.activity ||
      selectedFriendsActivities.length === 0
    ) {
      navigate('/');
    } else {
      navigate(`/${selectedFriendsActivities.friend}`);
    }
  }
}
