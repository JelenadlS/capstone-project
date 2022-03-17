import { Link, NavLink, useParams, useNavigate } from 'react-router-dom';
import List from '../components/List';
import Button from '../components/Button';
import newicon from '../images/new.svg';
import gobackicon from '../images/goback.svg';
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
  const navigate = useNavigate();

  return (
    <>
      <WrapperApp>
        <Title>
          <Arrowback to="/">
            <img src={gobackicon} alt="go back" />
          </Arrowback>
          <HeaderText>{selectedFriendsActivity[0].friend}</HeaderText>
        </Title>
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
      </WrapperApp>
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

const WrapperApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr auto;
`;

const Title = styled.header`
  background: #f0e7da;
  padding: 10px;
  text-align: left;
  text-transform: uppercase;
  color: rgba(71, 39, 35, 0.72);
  position: sticky;
  top: 0px;
  z-index: 2;
  height: 60px;
  overflow: hidden;
`;

const Arrowback = styled(Link)`
  border: none;
  background: transparent;
  position: fixed;
  top: 5px;
  left: 2px;
`;

const HeaderText = styled.h1`
  margin-left: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Main = styled.main`
  overflow-y: auto;
`;
const Bottom = styled.div`
  background: #f0e7da;
  text-align: center;
  width: 100%;
`;
