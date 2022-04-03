import DescriptionOfApp from '../components/DescriptionOfApp';
import FriendCard from '../components/FriendCard';
import { StyledList } from '../components/GeneralStyling';
import Header from '../components/Header';
import Main from '../components/Main';

export default function MyFriendsPage({ activities }) {
  const activitiesWithFriendsName = activities.filter(
    activity => activity.friend !== 'I still need to plan...'
  );

  const activitiesWithoutFriend = activities.filter(
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
      <Main aria-label="my friends page content">
        {activitiesWithoutFriend.length > 0 ||
        friendsOnlyOnceWithoutDetails.length > 0 ? (
          <>
            {activitiesWithoutFriend.length > 0 && (
              <FriendCard
                name="I still need to plan..."
                sumOfActivitiesEach={activitiesWithoutFriend.length}
              />
            )}
            <StyledList role="list" title="list of friends">
              {sortedFriendsList.map((friend, index) => {
                const sumOfActivitiesEachFriend = activities.filter(
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
