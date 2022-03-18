import { Link } from 'react-router-dom';
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
      <Header>my friends</Header>
      <WrapperApp>
        <Main>
          {activities.length > 0 ? (
            <ListStyle role="list" title="list of friends">
              {updatedFriendList.map((friend, index) => (
                <li key={index}>
                  <FriendCard friend={friend} allFriends={friends} />
                </li>
              ))}
            </ListStyle>
          ) : (
            <ListStyle data-testid="emptylist" role="list">
              <li>
                unfortunately you did not enter any activity yet. Start now and
                fill your list with amazing activities!
              </li>
            </ListStyle>
          )}
        </Main>
        <Bottom>
          <Link to="newactivity">
            <Button
              borderRadius="40%"
              boxShadow="0px 0px 20px rgba(0, 0, 0, 0.15)"
            >
              <img src={newicon} alt="new" />
            </Button>
          </Link>
        </Bottom>
      </WrapperApp>
    </>
  );
}

const WrapperApp = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
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
  position: fixed;
  bottom: 0;
`;
