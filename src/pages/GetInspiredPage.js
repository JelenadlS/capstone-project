import { useState } from 'react';
import styled from 'styled-components';

import ActivityCard from '../components/ActivityCard';
import FilterTags from '../components/FilterTags';
import { StyledList, StyledEmptyMessage } from '../components/GeneralStyling';
import Header from '../components/Header';
import Main from '../components/Main';
import Searchbar from '../components/Searchbar';

import useStore from '../hooks/useStore.js';

export default function GetInspiredPage({
  activitiesArchived,
  filteredSearchActivitiesArchived,
}) {
  const [currentLikeFilter, setCurrentLikeFilter] = useState(true);

  const searchInput = useStore(state => state.searchInput);
  const currentFilter = useStore(state => state.currentFilter);
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
      <Main>
        <StyledCategoryButton>
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

        {currentLikeFilter === true &&
          (likedActivities.length > 0 ? (
            <>
              <Searchbar />
              <FilterTags activities={likedActivities} />
              {filteredLikedSearchActivitiesArchived.length > 0 ? (
                <StyledList
                  role="list"
                  title="list of past activities"
                  searchInput={searchInput}
                >
                  {(searchInput?.length > 0
                    ? filteredLikedSearchActivitiesArchived
                    : likedActivities.filter(
                        activity =>
                          activity.category.includes(currentFilter) ||
                          currentFilter === 'all'
                      )
                  ).map(activity => (
                    <li key={activity.id}>
                      <ActivityCard activityDetails={activity} />
                    </li>
                  ))}
                </StyledList>
              ) : (
                <StyledEmptyMessage>
                  There is no activity with this name.
                </StyledEmptyMessage>
              )}
            </>
          ) : (
            <StyledEmptyMessage data-testid="emptylist">
              You did not enter any activity yet which you liked.
            </StyledEmptyMessage>
          ))}

        {currentLikeFilter === false &&
          (notLikedActivities.length > 0 ? (
            <>
              <Searchbar searchInput={searchInput} />
              <FilterTags activities={notLikedActivities} />
              {filteredNotLikedSearchActivitiesArchived.length > 0 ? (
                <StyledList
                  role="list"
                  title="list of past activities"
                  searchInput={searchInput}
                >
                  {(searchInput?.length > 0
                    ? filteredNotLikedSearchActivitiesArchived
                    : notLikedActivities.filter(
                        activity =>
                          activity.category.includes(currentFilter) ||
                          currentFilter === 'all'
                      )
                  ).map(activity => (
                    <li key={activity.id}>
                      <ActivityCard
                        nameOfSelectedCategory={activity.category}
                        nameOfSelectedFriend={activity.friend}
                        nameOfSelectedActivity={activity.activity}
                        photo={activity.photo}
                      />
                    </li>
                  ))}
                </StyledList>
              ) : (
                <StyledEmptyMessage>
                  There is no activity with this name.
                </StyledEmptyMessage>
              )}
            </>
          ) : (
            <StyledEmptyMessage data-testid="emptylist">
              You did not enter any activity yet which you did not like.
            </StyledEmptyMessage>
          ))}
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
