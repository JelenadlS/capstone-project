import DescriptionOfApp from '../components/DescriptionOfApp';
import FriendCard from '../components/FriendCard';
import { StyledList } from '../components/GeneralStyling';
import Header from '../components/Header';
import Main from '../components/Main';

export default function MyGroupsPage({ activities }) {
  const activitiesWithGroup = activities.filter(
    activity => activity.group !== ''
  );

  const groupsOnlyOnceWithoutDetails = [
    ...new Set(activitiesWithGroup.map(activity => activity?.group)),
  ];

  const sortedGroupList = groupsOnlyOnceWithoutDetails.sort(function (a, b) {
    const firstFriend = a.toLowerCase();
    const secondFriend = b.toLowerCase();

    if (firstFriend < secondFriend) return -1;
    if (firstFriend > secondFriend) return 1;
    return 0;
  });

  return (
    <>
      <Header hiddenFriend="hidden">my groups</Header>
      <Main>
        {activitiesWithGroup.length > 0 ? (
          <StyledList role="list" title="list of groups">
            {sortedGroupList.map((group, index) => {
              const sumOfActivitiesEachGroup = activities.filter(
                activity => activity.group === group
              ).length;
              return (
                <li key={index}>
                  <FriendCard
                    name={group}
                    sumOfActivitiesEach={sumOfActivitiesEachGroup}
                  />
                </li>
              );
            })}
          </StyledList>
        ) : (
          <DescriptionOfApp group={activitiesWithGroup.length === 0} />
        )}
      </Main>
    </>
  );
}
