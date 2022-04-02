import styled from 'styled-components';

import DescriptionOfApp from '../components/DescriptionOfApp';
import FriendCard from '../components/FriendCard';
import {
  StyledList,
  StyledArrow,
  LinkStyling,
} from '../components/GeneralStyling';
import Header from '../components/Header';
import Main from '../components/Main';

import nextIcon from '../images/nextIcon.svg';

export default function MyFriendsPage({ activitiesNotArchived }) {
  const activitiesWithFriendsName = activitiesNotArchived.filter(
    activity => activity.friend !== 'I still need to plan...'
  );

  const activitiesWithoutFriend = activitiesNotArchived.filter(
    activity =>
      activity.friend === 'I still need to plan...' && activity.group === ''
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
      <Header hiddenGroup="hidden">my friends</Header>
      <Main>
        {activitiesWithoutFriend.length > 0 ||
        friendsOnlyOnceWithoutDetails.length > 0 ? (
          <>
            {activitiesWithoutFriend.length > 0 && (
              <StyledLink to="/I still need to plan...">
                <NameStyling>
                  Activities I still need to plan with someone:
                </NameStyling>
                <NumStyling>
                  #{activitiesWithoutFriend.length}
                  <StyledArrow>
                    <img src={nextIcon} alt="next page" />
                  </StyledArrow>
                </NumStyling>
              </StyledLink>
            )}
            <StyledList role="list" title="list of friends">
              {sortedFriendsList.map((friend, index) => {
                const sumOfActivitiesEachFriend = activitiesNotArchived.filter(
                  activity => activity.friend === friend
                ).length;
                return (
                  <li key={index}>
                    <FriendCard
                      name={friend}
                      sumOfActivitiesEach={sumOfActivitiesEachFriend}
                    />
                  </li>
                );
              })}
            </StyledList>
          </>
        ) : (
          <DescriptionOfApp />
        )}
      </Main>
    </>
  );
}

const StyledLink = styled(LinkStyling)`
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
