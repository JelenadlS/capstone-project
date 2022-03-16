import { NavLink, Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import newicon from '../images/new.svg';
import styled from 'styled-components';

export default function MyFriendsPage({ activities }) {
  return (
    <>
      <WrapperApp>
        <Header title="my friends" />
        <Main>
          <ListStyle role="list" title="list of friends">
            <li>To do</li>
            {activities.map(activity => (
              <li key={activity.id}>
                <strong>{activity.friend}</strong>
              </li>
            ))}
          </ListStyle>
        </Main>
        <Bottom>
          <NavLink to="newactivity">
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
}

const WrapperApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr auto;
`;

const Main = styled.main`
  overflow-y: auto;
`;

const ListStyle = styled.ul`
  list-style-type: none;
  color: rgba(71, 39, 35, 0.72);

  li {
    padding: 5px;
  }
`;

const WrapperCard = styled.section`
  color: rgba(71, 39, 35, 0.72);
  border-bottom: 0.5px solid rgba(71, 39, 35, 0.72);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  overflow: hidden;
`;

const LinkStyling = styled(Link)`
  padding: 8px 8px 0;
  font-size: 18px;
  color: rgba(71, 39, 35, 0.72);
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Bottom = styled.div`
  background: #f0e7da;
  text-align: center;
  width: 100%;
`;
