import List from '../components/List';
import Form from '../components/Form';
import styled from 'styled-components';

export default function MyActivitiesPage({
  activities,
  hasError,
  setActivities,
  onAddActivity,
}) {
  return (
    <>
      <WrapperApp>
        <Title>
          <h1>my activities</h1>
        </Title>
        <Main>
          <List
            activities={activities}
            errorMessage={hasError}
            onDeleteActivity={onDeleteActivity}
          />
        </Main>
        <Bottom>
          <Form onAddActivity={onAddActivity} />
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

const Title = styled.header`
  background: #f0e7da;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(71, 39, 35, 0.72);
  position: sticky;
  top: 0px;
  z-index: 2;
  height: 60px;
`;

const Main = styled.main`
  overflow-y: auto;
`;
const Bottom = styled.div`
  background: white;
  width: 100%;
`;
