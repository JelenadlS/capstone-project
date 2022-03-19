import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import FriendCard from '../components/FriendCard';
import Navigation from '../components/Navigation';
import newicon from '../images/new.svg';
import Picture from '../components/Picture';
import Main from '../components/Main';

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
      <Picture>
        <Header>my friends</Header>
        <Main>
          {activities.length > 0 ? (
            <>
              {activitiesWithoutFriend.length > 0 && (
                <StyledLink to="/I still need to plan...">
                  <NameStyling>
                    Things I still need to plan with someone:
                  </NameStyling>
                  <NumStyling>#{activitiesWithoutFriend.length}</NumStyling>
                </StyledLink>
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
            <EmptyList data-testid="emptylist">
              unfortunately you did not enter any activity yet. Start now and
              fill your list with amazing activities!
            </EmptyList>
          )}
        </Main>
        <Navigation>
          <Link to="newactivity">
            <img src={newicon} alt="new" />
          </Link>
        </Navigation>
      </Picture>
    </>
  );
}

const StyledLink = styled(Link)`
  color: rgba(71, 39, 35, 0.72);
  text-decoration: none;
  padding: 20px 18px 10px 10px;
  display: grid;
  grid-template-columns: auto auto;
  border-bottom: 2px solid rgba(71, 39, 35, 0.3);
`;

const NameStyling = styled.p`
  font-weight: bold;
  display: grid;
  grid-template-columns: auto auto;
`;

const NumStyling = styled.span`
  justify-self: end;
  align-self: center;
`;

const ListStyle = styled.ul`
  list-style-type: none;
  color: rgba(71, 39, 35, 0.72);

  li {
    padding: 5px;
  }
`;

const EmptyList = styled.p`
  color: rgba(71, 39, 35, 0.72);
  padding: 10px;
`;
