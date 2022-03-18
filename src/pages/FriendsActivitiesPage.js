import { NavLink, useParams, useNavigate } from 'react-router-dom';
import List from '../components/List';
import Button from '../components/Button';
import Header from '../components/Header';
import newicon from '../images/new.svg';
import gobackicon from '../images/goback.svg';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';

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
      <PageWrapper>
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
        <Bottom>
          <NavLink to="/newactivity">
            <Button
              borderRadius="40%"
              boxShadow="0px 0px 20px rgba(0, 0, 0, 0.15)"
            >
              <img src={newicon} alt="new" />
            </Button>
          </NavLink>
        </Bottom>
      </PageWrapper>
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

//-----------------------------------------------------------------------
const ArrowbackButton = styled.button`
  border: none;
  background: transparent;
  position: fixed;
  top: 5px;
  left: 2px;
`;

const Main = styled.main`
  overflow-y: auto;
`;
const Bottom = styled.div`
  background: #f0e7da;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
`;
