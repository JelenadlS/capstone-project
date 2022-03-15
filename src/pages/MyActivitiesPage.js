import List from '../components/List';
import Button from '../components/Button';
import Header from '../components/Header';
import styled from 'styled-components';
import newicon from '../images/new.svg';
import { NavLink } from 'react-router-dom';

export default function MyActivitiesPage({
  activities,
  hasError,
  setActivities,
  handleShowDetails,
}) {
  return (
    <>
      <WrapperApp>
        <Header title="my activities" />
        <Main>
          <List
            activities={activities}
            errorMessage={hasError}
            onDeleteActivity={onDeleteActivity}
            handleShowDetails={handleShowDetails}
          />
        </Main>
        <Bottom>
          <NavLink to="newactivity">
            <Button
              borderRadius="40%"
              boxShadow="0px 0px 20px rgba(0, 0, 0, 0.30)"
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
