import { useEffect, useCallback } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import FilterTags from '../components/FilterTags';

import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import goBackIcon from '../images/goBackIcon.svg';
import newIcon from '../images/newIcon.svg';

export default function FriendsActivitiesPage({
  hasError,
  activities,
  handleSelectedFriendsActivities,
  onDeleteActivity,
}) {
  const { friendsName } = useParams();

  const filteredSelectedFriendsActivities = activities.filter(
    activity => activity.friend === friendsName
  );

  useEffect(() => {
    handleSelectedFriendsActivities(filteredSelectedFriendsActivities);
  }, [friendsName]);

  const navigate = useNavigate();

  return (
    <Picture>
      <Header>
        {filteredSelectedFriendsActivities[0].friend}
        <ArrowBackButton onClick={() => navigate('/')}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <FilterTags
          selectedFriendsActivity={filteredSelectedFriendsActivities}
          errorMessage={hasError}
          onDeleteActivity={onDeleteActivity}
        />
      </Main>
      <Navigation>
        <NavLink to="/newactivity">
          <img src={newIcon} alt="new" />
        </NavLink>
      </Navigation>
    </Picture>
  );
}
