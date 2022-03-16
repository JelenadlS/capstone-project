import { NavLink, Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import newicon from '../images/new.svg';
import styled from 'styled-components';

export default function MyFriendsPage({ activities }) {
  const friends = activities.map(function (item) {
    return item.friend;
  });

  const friendOnlyOnce = friends.filter((friend, index) => {
    return friends.indexOf(friend) === index && friend !== '';
  });

  return (
    <>
      <WrapperApp>
        <Header title="my friends" />
        <Main>
          {!activities || activities.length === 0 ? (
            <ListStyle role="list">
              <li>
                unfortunately you did not enter any activity yet. Start now and
                fill your list with amazing activities!
              </li>
            </ListStyle>
          ) : (
            <ListStyle role="list" title="list of friends">
              <li>those with my friends:</li>
              {friendOnlyOnce.map(friend => (
                <li key={friend}>
                  <LinkStyling to={`/friend/${friend}`}>
                    <strong>{friend}</strong>
                    <strong>{friend.length}</strong>
                  </LinkStyling>
                </li>
              ))}
            </ListStyle>
          )}
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

const ItemStyle = styled.li`
  margin-left: 8px;
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
