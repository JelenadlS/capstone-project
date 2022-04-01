import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MainNavButtonSmall } from '../components/Button';
import FriendCard from '../components/FriendCard';
import {
  StyledList,
  StyledArrow,
  StyledAdd,
  StyledIntro,
  StyledEmptyMessageFGPage,
} from '../components/GeneralStyling';
import Header from '../components/Header';
import Main from '../components/Main';

import addAFriendIcon from '../images/addAFriendIcon.svg';
import allActivitiesIcon from '../images/allActivitiesIcon.svg';
import friendIcon from '../images/friendIcon.svg';
import groupIcon from '../images/groupIcon.svg';
import inspireIcon from '../images/inspireIcon.svg';
import newIcon from '../images/newIcon.svg';
import nextIcon from '../images/nextIcon.svg';

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
            </StyledList>
          </>
        ) : (
          <StyledEmptyMessageFGPage data-testid="emptylist">
            <StyledIntro>
              Hi there! 👋 <br />
              There are no activities entered yet.
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
                src={addAFriendIcon}
              />
            </StyledAdd>
            <p>
              <strong>Add a friend!</strong> <br />
              Before you can add friends to an activity, you need to add them.
            </p>

            <MainNavButtonSmall>
              <img width="40" height="27" src={newIcon} alt="new" />
            </MainNavButtonSmall>
            <p>
              <strong>Add an activity!</strong> <br />
              Are you done and added a friend? <br />
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
