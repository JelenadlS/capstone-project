import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Main from '../components/Main';
import MappedPlaceholderPictures from '../components/MappedPlaceholderPictures.js';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';
import Searchbar from '../components/Searchbar';

import newIcon from '../images/newIcon.svg';
import nextIcon from '../images/nextIcon.svg';

export default function AllActivitiesPage({ activities }) {
  const [searchInput, setSearchInput] = useState('');

  const searchInputHandler = dataInput => {
    const lowerCase = dataInput.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const filteredActivities = activities.filter(activity => {
    if (searchInput === '') {
      return activity;
    } else {
      return activity.activity.toLowerCase().includes(searchInput);
    }
  });

  return (
    <Picture>
      <Header>all activities</Header>
      <Main>
        <Searchbar
          activities={activities}
          searchInputHandler={searchInputHandler}
        ></Searchbar>
        {filteredActivities.length > 0 ? (
          <div>
            {filteredActivities.map(activity => {
              return (
                <ListStyle key={activity.id} searchInput={searchInput}>
                  <li>
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
                      <LinkStyling
                        to={`/${activity.friend}/${activity.activity}`}
                      >
                        <strong>{activity.activity}</strong>
                      </LinkStyling>
                      <StyledArrow>
                        <img src={nextIcon} alt="next page" />
                      </StyledArrow>
                    </WrapperCard>
                  </li>
                </ListStyle>
              );
            })}
          </div>
        ) : (
          <EmptyList data-testid="emptylist">
            There is no activity with this name.
          </EmptyList>
        )}
      </Main>
      <Navigation>
        <Link to="/newactivity">
          <img src={newIcon} alt="new" />
        </Link>
      </Navigation>
    </Picture>
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

const EmptyList = styled.p`
  color: rgba(71, 39, 35, 0.72);
  padding: 10px;
  text-align: center;
`;
