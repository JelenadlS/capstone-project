import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/Header';
import List from '../components/List';
import Button from '../components/Button';
import newicon from '../images/new.svg';
import styled from 'styled-components';

export default function MyActivitiesPage({
  hasError,
  setActivities,
  activities,
}) {
  const { name } = useParams();
  const selectedFriendsActivity = activities.filter(
    activity => activity.friend === name
  );
  const noFriendsActivity = activities.filter(
    activity => activity.friend === ''
  );

  return (
    <>
      <WrapperApp>
        <Header title="my activities" link="y" />
        <Main>
          <List
            activitiesOfSelectedFriend={selectedFriendsActivity}
            noFriendsActivity={noFriendsActivity}
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
      </WrapperApp>
    </>
  );

  function onDeleteActivity(thisActivityId) {
    setActivities(
      activities.filter(activity => activity.id !== thisActivityId)
    );
  }
}

const WrapperApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr auto;
`;

const Main = styled.main`
  overflow-y: auto;
`;
const Bottom = styled.div`
  background: #f0e7da;
  text-align: center;
  width: 100%;
`;
