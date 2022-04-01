import { MainNavButtonSmall } from '../components/Button';
import FriendCard from '../components/FriendCard';
import {
  StyledList,
  StyledAdd,
  StyledIntro,
  StyledEmptyMessageFGPage,
} from '../components/GeneralStyling';
import Header from '../components/Header';
import Main from '../components/Main';

import addAGroupIcon from '../images/addAGroupIcon.svg';
import allActivitiesIcon from '../images/allActivitiesIcon.svg';
import friendIcon from '../images/friendIcon.svg';
import groupIcon from '../images/groupIcon.svg';
import inspireIcon from '../images/inspireIcon.svg';
import newIcon from '../images/newIcon.svg';

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
                    group={group}
                    sumOfActivitiesEachGroup={sumOfActivitiesEachGroup}
                  />
                </li>
              );
            })}
          </StyledList>
        ) : (
          <StyledEmptyMessageFGPage data-testid="emptylist">
            <StyledIntro>
              Hi there! 👋 <br />
              There are no group activities entered yet.
              <br />
              <strong>Get Started!</strong>
            </StyledIntro>
            <img
              width="40"
              height="20"
              alt="friendsHomeIcon"
              src={friendIcon}
            />
            <p>
              <strong>Activities planned with and without friends</strong>
              <br />
              As soon as you add activities, a list with an overview of your
              friends you planned activities with will appear.
            </p>
            <img width="40" height="20" alt="friendsHomeIcon" src={groupIcon} />
            <p>
              <strong>Activities planned with a group</strong> <br />
              Here you can find a list of all groups with their individual
              activities you added.
            </p>
            <StyledAdd>
              <img
                width="40"
                height="20"
                alt="friendsHomeIcon"
                src={addAGroupIcon}
              />
            </StyledAdd>
            <p>
              <strong>Add a group!</strong> <br />
              Before you can add groups to an activity, you need to add them.
            </p>

            <MainNavButtonSmall>
              <img width="40" height="27" src={newIcon} alt="new" />
            </MainNavButtonSmall>
            <p>
              <strong>Add an activity!</strong> <br />
              Are you done and added a friend and or a group? <br />
              Click on this button in the navigation and add an activity!
            </p>
            <img
              width="40"
              height="30"
              alt="friendsHomeIcon"
              src={allActivitiesIcon}
            />
            <p>
              <strong>Looking for an activity?</strong> <br />
              Here you can search and filter all activities indpendent of
              friends or groups.
            </p>
            <img
              width="40"
              height="30"
              alt="friendsHomeIcon"
              src={inspireIcon}
            />
            <p>
              <strong>Get inspired!</strong>
              <br />
              As soon as you did an activity, you can mark it as liked or not
              liked in the overview. Whenever you are looking for an amazing
              activity you can be inspired by your old ones you liked.
            </p>
          </StyledEmptyMessageFGPage>
        )}
      </Main>
    </>
  );
}
