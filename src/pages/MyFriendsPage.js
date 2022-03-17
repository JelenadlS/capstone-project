import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import FriendCard from '../components/FriendCard';
import newicon from '../images/new.svg';
import styled from 'styled-components';

export default function MyFriendsPage({ activities }) {
  const friends = activities.map(item => {
    return item.friend;
  });

  const friendOnlyOnce = friends.filter((friend, index) => {
    return friends.indexOf(friend) === index;
  });

  const withoutFriend = friendOnlyOnce.find(
    friend => friend === 'I still need to plan...'
  );
  const onlyFriendsWithName = friendOnlyOnce.filter(
    friend => friend !== withoutFriend
  );
  const sortedFriends = onlyFriendsWithName.sort(function (a, b) {
    const firstFriend = a.toLowerCase();
    const secondFriend = b.toLowerCase();
    if (firstFriend < secondFriend) return -1;
    if (firstFriend > secondFriend) return 1;
    return 0;
  });

  const updatedFriendList = [withoutFriend, ...sortedFriends];

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
              {updatedFriendList.map(friend => (
                <li key={friend}>
                  <FriendCard friend={friend} allFriends={friends} />
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

const Bottom = styled.div`
  background: #f0e7da;
  text-align: center;
  width: 100%;
`;
