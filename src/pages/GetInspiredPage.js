import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ActivityCard from '../components/ActivityCard';
import FilterTags from '../components/FilterTags';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';
import Searchbar from '../components/Searchbar';

import newIcon from '../images/newIcon.svg';

export default function GetInspiredPage({
  activitiesArchived,
  showBin,
  handleResetPage,
  handleResetPageAndShowArrow,
  onFilter,
  searchInput,
  setSearchInput,
  setCurrentFilter,
  currentFilter,
  filteredSearchActivitiesArchived,
}) {
  const [currentLikeFilter, setCurrentLikeFilter] = useState(true);

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

        {currentLikeFilter === true &&
          (likedActivities.length > 0 ? (
            <>
              <Searchbar
                setSearchInput={setSearchInput}
                setCurrentFilter={setCurrentFilter}
                searchInput={searchInput}
              />
              <FilterTags
                activities={likedActivities}
                currentFilter={currentFilter}
                onFilter={onFilter}
                setSearchInput={setSearchInput}
              />
              {filteredLikedSearchActivitiesArchived.length > 0 ? (
                <ListStyle
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
                      <ActivityCard
                        nameOfSelectedCategory={activity.category}
                        nameOfSelectedFriend={activity.friend}
                        nameOfSelectedActivity={activity.activity}
                        photo={activity.photo}
                        showBin={showBin}
                        handleResetPage={handleResetPage}
                      />
                    </li>
                  ))}
                </ListStyle>
              ) : (
                <EmptyList>There is no activity with this name.</EmptyList>
              )}
            </>
          ) : (
            <EmptyList data-testid="emptylist">
              You did not enter any activity yet which you liked.
            </EmptyList>
          ))}

        {currentLikeFilter === false &&
          (notLikedActivities.length > 0 ? (
            <>
              <Searchbar
                setSearchInput={setSearchInput}
                setCurrentFilter={setCurrentFilter}
                searchInput={searchInput}
              />
              <FilterTags
                activities={notLikedActivities}
                currentFilter={currentFilter}
                onFilter={onFilter}
                setSearchInput={setSearchInput}
              />
              {filteredNotLikedSearchActivitiesArchived.length > 0 ? (
                <ListStyle
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
                        showBin={showBin}
                        handleResetPage={handleResetPage}
                      />
                    </li>
                  ))}
                </ListStyle>
              ) : (
                <EmptyList>There is no activity with this name.</EmptyList>
              )}
            </>
          ) : (
            <EmptyList data-testid="emptylist">
              You did not enter any activity yet which you did not like.
            </EmptyList>
          ))}
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
  background: ${props => (props.active ? '#92dec5' : 'transparent')};
  color: ${props => (props.active ? 'rgba(71, 39, 35, 0.72)' : '#92dec5')};
  border: 1px solid #92dec5;
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
