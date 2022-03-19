import { NavLink, useParams, useNavigate } from 'react-router-dom';
import List from '../components/List';
import Button from '../components/Button';
import Header from '../components/Header';
import newicon from '../images/new.svg';
import gobackicon from '../images/goback.svg';

import Footer from '../components/Footer';
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
        <Footer>
          <NavLink to="/newactivity">
            <Button
              borderRadius="40%"
              boxShadow="0px 0px 20px rgba(0, 0, 0, 0.15)"
            >
              <img src={newicon} alt="new" />
            </Button>
          </NavLink>
        </Footer>
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
