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
  pastActivities,
  showBin,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  const [currentLikeFilter, setCurrentLikeFilter] = useState(true);

  const eachSortOfLikeOnce = [
    ...new Set(pastActivities.map(status => status.likedActivity)),
  ];

  const likedTags = [...eachSortOfLikeOnce];

  return (
    <Picture>
      <Header handleResetPage={handleResetPage}>Get Inspired</Header>
      <Main>
        <StyledCategoryButton>
          {likedTags.map((type, index) => {
            return (
              <CategoryButton
                key={index}
                onClick={() => handleOnClickFilter(type)}
                active={type === currentLikeFilter}
              >
                {type === true ? 'Liked' : 'Not Liked'}
              </CategoryButton>
            );
          })}
        </StyledCategoryButton>
        <ListStyle role="list" title="list of past activities">
          {pastActivities
            .filter(
              pastActivity => pastActivity.likedActivity === currentLikeFilter
            )
            .map(pastActivity => (
              <li key={pastActivity.id}>
                <ActivityCard
                  activity={pastActivity.activity}
                  nameOfSelectedCategory={pastActivity.category}
                  nameOfSelectedFriend={pastActivity.friend}
                  nameOfSelectedActivity={pastActivity.activity}
                  photo={pastActivity.photo}
                  showBin={showBin}
                  handleResetPage={handleResetPage}
                />
              </li>
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

  function handleOnClickFilter(type) {
    setCurrentLikeFilter(type);
  }
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
