import { useState } from 'react';
import styled from 'styled-components';

import FilterTags from '../components/FilterTags';
import { StyledEmptyMessage } from '../components/GeneralStyling';
import Header from '../components/Header';
import List from '../components/List';
import Main from '../components/Main';
import Searchbar from '../components/Searchbar';

import useStore from '../hooks/useStore.js';

export default function GetInspiredPage({
  activitiesArchived,
  filteredSearchActivitiesArchived,
}) {
  const [currentLikeFilter, setCurrentLikeFilter] = useState(true);

  const searchInput = useStore(state => state.searchInput);
  const resetPage = useStore(state => state.resetPage);

  const likedActivities = activitiesArchived.filter(
    activity => activity.isLiked === true
  );
  const filteredLikedSearchActivitiesArchived =
    filteredSearchActivitiesArchived.filter(
      activity => activity.isLiked === true
    );

  const notLikedActivities = activitiesArchived.filter(
    activity => activity.isLiked === false
  );

  const filteredNotLikedSearchActivitiesArchived =
    filteredSearchActivitiesArchived.filter(
      activity => activity.isLiked === false
    );

  return (
    <>
      <Header hiddenGroup="hidden">Get Inspired</Header>
      <Main aria-label="past activities page - get inspired">
        <StyledCategoryButton aria-label="choose to see liked or not liked activities">
          <CategoryButton
            onClick={event => resetPage(event, setCurrentLikeFilter(true))}
            active={true === currentLikeFilter}
          >
            Liked
          </CategoryButton>
          <CategoryButton
            onClick={event => resetPage(event, setCurrentLikeFilter(false))}
            active={false === currentLikeFilter}
          >
            Not Liked
          </CategoryButton>
        </StyledCategoryButton>

        {((currentLikeFilter && likedActivities?.length) ||
          (!currentLikeFilter && notLikedActivities?.length)) > 0 ? (
          <>
            <Searchbar searchInput={searchInput} />
            <FilterTags
              activities={
                currentLikeFilter ? likedActivities : notLikedActivities
              }
            />
            <List
              activities={
                currentLikeFilter ? likedActivities : notLikedActivities
              }
              filteredSearchActivities={
                currentLikeFilter
                  ? filteredLikedSearchActivitiesArchived
                  : filteredNotLikedSearchActivitiesArchived
              }
            />
          </>
        ) : (
          <StyledEmptyMessage data-testid="emptylist">
            {(currentLikeFilter && likedActivities?.length) === 0 &&
              'You did not enter any activity yet which you liked.'}
            {(!currentLikeFilter && notLikedActivities?.length) === 0 &&
              'You did not enter any activity yet which you did not like.'}
          </StyledEmptyMessage>
        )}
      </Main>
    </>
  );
}

const StyledCategoryButton = styled.section`
  text-align: center;
`;
const CategoryButton = styled.button`
  gap: 5px;
  margin: 10px;
  width: fit-content;
  background: ${props => (props.active ? '#92dec5' : 'transparent')};
  color: ${props => (props.active ? 'rgba(71, 39, 35, 0.72)' : '#92dec5')};
  border: 1px solid #92dec5;
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 16px;
  white-space: nowrap;
`;
