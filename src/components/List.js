import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';
import MappedPlaceholderPictures from './MappedPlaceholderPictures.js';

import nextIcon from '../images/nextIcon.svg';

export default function List({
  selectedFriendsActivity,
  errorMessage,
  onDeleteActivity,
  currentFilter,
  activities,
  searchInput,
  filteredSearchActivities,
  activeSearch,
  activeFilter,
}) {
  console.log(activeFilter);
  console.log(activeSearch);
  return (
    <ListStyle role="list" title="list of activities" searchInput={searchInput}>
      {activeFilter &&
        (selectedFriendsActivity?.length > 0
          ? selectedFriendsActivity
          : activities
        )
          .filter(
            activity =>
              activity.category.includes(currentFilter) ||
              currentFilter === 'all'
          )
          .map(activity => (
            <li key={activity.id}>
              <ActivityCard
                onDeleteActivity={() => onDeleteActivity(activity.id)}
                activity={activity.activity}
                id={activity.id}
                nameOfSelectedFriend={activity.friend}
                nameOfSelectedActivity={activity.activity}
                nameOfSelectedCategory={activity.category}
                errorMessage={errorMessage}
                photo={activity.photo}
              />
            </li>
          ))}
      {activeSearch &&
        filteredSearchActivities.map(activity => {
          return (
            <li key={activity.id}>
              <WrapperCard>
                {!activity.photo > 0 ? (
                  <StyledImage
                    width="30"
                    height="30"
                    alt={`placeholder picture ${activity.category}`}
                    src={MappedPlaceholderPictures[activity.category]}
                  />
                ) : (
                  <StyledImage
                    width="30"
                    height="30"
                    alt={`uploaded picture ${activity.photo}`}
                    src={activity.photo}
                  />
                )}
                <LinkStyling to={`/${activity.friend}/${activity.activity}`}>
                  <strong>{activity.activity}</strong>
                </LinkStyling>
                <StyledArrow>
                  <img src={nextIcon} alt="next page" />
                </StyledArrow>
              </WrapperCard>
            </li>
          );
        })}
    </ListStyle>
  );
}

const ListStyle = styled.ul`
  list-style-type: none;

  li {
    padding: 5px;
  }
`;

const WrapperCard = styled.section`
  border-bottom: 1px solid rgba(71, 39, 35, 0.4);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  overflow: hidden;
`;

const LinkStyling = styled(Link)`
  padding: 8px 8px 5px;
  color: rgba(71, 39, 35, 0.72);
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StyledImage = styled.img`
  border-radius: 50px;
`;

const StyledArrow = styled.span`
  margin-left: 5px;
`;
