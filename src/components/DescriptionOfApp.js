import styled from 'styled-components';

import { MainNavButtonSmall } from '../components/Button';

import addAFriendIcon from '../images/addAFriendIcon.svg';
import addAGroupIcon from '../images/addAGroupIcon.svg';
import allActivitiesIcon from '../images/allActivitiesIcon.svg';
import friendIcon from '../images/friendIcon.svg';
import groupIcon from '../images/groupIcon.svg';
import inspireIcon from '../images/inspireIcon.svg';
import newIcon from '../images/newIcon.svg';

export default function DescriptionOfApp({ group }) {
  return (
    <StyledEmptyMessageFGPage data-testid="description of app">
      <StyledIntro>
        Hi there! 👋 <br />
        There are no {group ? 'group' : ''} activities entered yet.
        <br />
        <strong>Get Started!</strong>
      </StyledIntro>
      <img width="40" height="20" alt="overview of friends" src={friendIcon} />
      <p>
        <strong>Activities planned with and without friends</strong>
        <br />
        As soon as you add activities, a list with an overview of your friends
        you planned activities with will appear.
      </p>
      <img width="40" height="20" alt="overview of groups" src={groupIcon} />
      <p>
        <strong>Activities planned with a group</strong> <br />
        Here you can find a list of all groups with their individual activities
        you added.
      </p>
      <StyledAdd>
        <img
          width="40"
          height="20"
          alt="friendsHomeIcon"
          src={group ? addAGroupIcon : addAFriendIcon}
        />
      </StyledAdd>
      <p>
        <strong>Add a {group ? 'group' : 'friend'} !</strong> <br />
        Before you can add {group ? 'groups' : 'friends'} to an activity, you
        need to add them.
      </p>

      <MainNavButtonSmall>
        <img width="40" height="27" src={newIcon} alt="new" />
      </MainNavButtonSmall>
      <p>
        <strong>Add an activity!</strong> <br />
        Are you done and added a {group ? 'group' : 'friend'} ? <br />
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
        Here you can search and filter all activities indpendent of friends or
        groups.
      </p>
      <img width="40" height="30" alt="friendsHomeIcon" src={inspireIcon} />
      <p>
        <strong>Get inspired!</strong>
        <br />
        As soon as you did an activity, you can mark it as liked or not liked in
        the overview. Whenever you are looking for an amazing activity you can
        be inspired by your old ones you liked.
      </p>
    </StyledEmptyMessageFGPage>
  );
}

const StyledEmptyMessageFGPage = styled.section`
  display: grid;
  grid-template-rows: repeat(7, auto);
  grid-template-columns: repeat(2, auto);
  padding: 10px;
  gap: 10px;
  font-size: 14px;
  align-items: center;
`;

const StyledIntro = styled.p`
  grid-column: 1 / span 2;
  text-align: center;
  font-size: 16px;
`;
const StyledAdd = styled.div`
  display: flex;
  flex-direction: column;
`;
