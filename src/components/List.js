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

  // activeSearch,
  // activeFilter,
}) {
  return (
    <ListStyle role="list" title="list of activities" searchInput={searchInput}>
      {
        (searchInput?.length > 0
          ? filteredSearchActivities
          : (selectedFriendsActivity?.length > 0
              ? selectedFriendsActivity
              : activities
            ).filter(
              activity =>
                activity.category.includes(currentFilter) ||
                currentFilter === 'all'
            )
        ).map(activity => (
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
            {/* <WrapperCard>
              <LinkStyling to={`/${activity.friend}/${activity.activity}`}>
                <strong>{activity.activity}</strong>
                <StyledArrow>
                  <img src={nextIcon} alt="next page" />
                </StyledArrow>
              </LinkStyling>
            </WrapperCard> */}
          </li>
        ))
        // : (selectedFriendsActivity?.length > 0
        //     ? selectedFriendsActivity
        //     : activities
        //   )
        //     .filter(
        //       activity =>
        //         activity.category.includes(currentFilter) ||
        //         currentFilter === 'all'
        //     )
        //     .map(activity => (
        //       <li key={activity.id}>
        //         <ActivityCard
        //           onDeleteActivity={() => onDeleteActivity(activity.id)}
        //           activity={activity.activity}
        //           id={activity.id}
        //           nameOfSelectedFriend={activity.friend}
        //           nameOfSelectedActivity={activity.activity}
        //           nameOfSelectedCategory={activity.category}
        //           errorMessage={errorMessage}
        //           photo={activity.photo}
        //         />
        //       </li>
        //     ))
      }
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
