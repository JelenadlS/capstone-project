import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import FriendCard from '../components/FriendCard';
import newicon from '../images/new.svg';
import styled from 'styled-components';

export default function MyFriendsPage({ activities }) {
  const activitiesWithFriendsName = activities.filter(
    activity => activity.friend !== 'I still need to plan...'
  );

  const activitiesWithoutFriend = activities.filter(
    activity => activity.friend === 'I still need to plan...'
  );

  const friendsOnlyOnceWithoutDetails = [
    ...new Set(activitiesWithFriendsName.map(activity => activity.friend)),
  ];

  const sortedFriendsList = friendsOnlyOnceWithoutDetails.sort(function (a, b) {
    const firstFriend = a.toLowerCase();
    const secondFriend = b.toLowerCase();
    if (firstFriend < secondFriend) return -1;
    if (firstFriend > secondFriend) return 1;
    return 0;
  });

  return (
    <>
      <Header>my friends</Header>
      <WrapperApp>
        <Main>
          {activities.length > 0 ? (
            <>
              {activitiesWithoutFriend.length > 0 && (
                <Link to="/I still need to plan...">
                  Things I still have planned: {activitiesWithoutFriend.length}
                </Link>
              )}
              <ListStyle role="list" title="list of friends">
                {sortedFriendsList.map((friend, index) => {
                  const sumOfActivitiesEachFriend = activities.filter(
                    activity => activity.friend === friend
                  ).length;
                  return (
                    <li key={index}>
                      <FriendCard
                        friend={friend}
                        sumOfActivitiesEachFriend={sumOfActivitiesEachFriend}
                      />
                    </li>
                  );
                })}
              </ListStyle>
            </>
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
