import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ActivityCard from '../components/ActivityCard';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import newIcon from '../images/newIcon.svg';

export default function GetInspiredPage({
  activitiesArchived,
  showBin,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  const [currentLikeFilter, setCurrentLikeFilter] = useState(true);

  const likedActivities = activitiesArchived.filter(
    activity => activity.isLiked === true
  );

  const notLikedActivities = activitiesArchived.filter(
    activity => activity.isLiked === false
  );

  return (
    <Picture>
      <Header handleResetPage={handleResetPage}>Get Inspired</Header>
      <Main>
        <StyledCategoryButton>
          <CategoryButton
            onClick={() => setCurrentLikeFilter(true)}
            active={true === currentLikeFilter}
          >
            Liked
          </CategoryButton>
          <CategoryButton
            onClick={() => setCurrentLikeFilter(false)}
            active={false === currentLikeFilter}
          >
            Not Liked
          </CategoryButton>
        </StyledCategoryButton>
        <ListStyle role="list" title="list of past activities">
          {currentLikeFilter === true &&
            (likedActivities.length > 0 ? (
              likedActivities.map(activity => (
                <li key={activity.id}>
                  <ActivityCard
                    activity={activity.activity}
                    nameOfSelectedCategory={activity.category}
                    nameOfSelectedFriend={activity.friend}
                    nameOfSelectedActivity={activity.activity}
                    photo={activity.photo}
                    showBin={showBin}
                    handleResetPage={handleResetPage}
                  />
                </li>
              ))
            ) : (
              <EmptyList>
                You did not enter any activity yet which you liked.
              </EmptyList>
            ))}
          {currentLikeFilter === false &&
            (notLikedActivities.length > 0 ? (
              notLikedActivities.map(activity => (
                <li key={activity.id}>
                  <ActivityCard
                    activity={activity.activity}
                    nameOfSelectedCategory={activity.category}
                    nameOfSelectedFriend={activity.friend}
                    nameOfSelectedActivity={activity.activity}
                    photo={activity.photo}
                    showBin={showBin}
                    handleResetPage={handleResetPage}
                  />
                </li>
              ))
            ) : (
              <EmptyList>
                You did not enter any activity yet which you did not like.
              </EmptyList>
            ))}
        </ListStyle>
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

const StyledCategoryButton = styled.section`
  text-align: center;
`;
const CategoryButton = styled.button`
  gap: 5px;
  margin: 10px;
  width: fit-content;
  background: ${props =>
    props.active ? 'rgba(71, 39, 35, 0.72)' : 'transparent'};
  color: ${props => (props.active ? '#f0e7da' : 'rgba(71, 39, 35, 0.72)')};
  border: 2px solid rgba(71, 39, 35, 0.42);
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 16px;
  white-space: nowrap;
`;

const ListStyle = styled.ul`
  list-style-type: none;

  li {
    padding: 5px;
  }
`;

const EmptyList = styled.p`
  padding: 10px;
  text-align: center;
`;
