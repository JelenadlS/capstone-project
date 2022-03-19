import { NavLink, useParams, useNavigate } from 'react-router-dom';
import List from '../components/List';
import Header from '../components/Header';
import newicon from '../images/new.svg';
import gobackicon from '../images/goback.svg';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';
import Main from '../components/Main';
import { ArrowbackButton } from '../components/Button';

export default function FriendsActivitiesPage({
  hasError,
  setActivities,
  activities,
}) {
  const { friendsName } = useParams();
  const selectedFriendsActivity = activities.filter(
    activity => activity.friend === friendsName
  );
  const navigate = useNavigate();

  return (
    <>
      <Picture>
        <Header>
          {selectedFriendsActivity[0].friend}
          <ArrowbackButton onClick={() => navigate('/')}>
            <img src={gobackicon} alt="go back" />
          </ArrowbackButton>
        </Header>
        <Main>
          <List
            activitiesOfSelectedFriend={selectedFriendsActivity}
            errorMessage={hasError}
            onDeleteActivity={onDeleteActivity}
          />
        </Main>
        <Navigation>
          <NavLink to="/newactivity">
            <img src={newicon} alt="new" />
          </NavLink>
        </Navigation>
      </Picture>
    </>
  );

  function onDeleteActivity(thisActivityId) {
    setActivities(
      activities.filter(activity => activity.id !== thisActivityId)
    );
    if (
      !selectedFriendsActivity.activity ||
      selectedFriendsActivity.length === 0
    ) {
      navigate('/');
    } else {
      navigate(`/${selectedFriendsActivity.friend}`);
    }
  }
}
