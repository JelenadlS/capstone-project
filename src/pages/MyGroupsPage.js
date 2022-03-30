import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FriendCard from '../components/FriendCard';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import newIcon from '../images/newIcon.svg';

export default function MyGroupsPage({
  activities,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
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
    <Picture>
      <Header hiddenFriend="hidden" handleResetPage={handleResetPage}>
        my groups
      </Header>
      <Main>
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
      </Main>
      <Navigation
        handleResetPage={handleResetPage}
        handleResetPageAndShowArrow={handleResetPageAndShowArrow}
      >
        <Link to="/newactivity">
          <img src={newIcon} alt="new" />
        </Link>
      </Navigation>
    </Picture>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  color: rgba(71, 39, 35, 0.72);

  li {
    padding: 5px;
  }
`;
