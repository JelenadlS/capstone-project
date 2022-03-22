import { useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowBackButton } from '../components/Button';
import Header from '../components/Header';
import List from '../components/List';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import goBackIcon from '../images/goBackIcon.svg';
import newIcon from '../images/newIcon.svg';

export default function FriendsActivitiesPage({
  hasError,
  setActivities,
  activities,
}) {
  const { friendsName } = useParams();
  const selectedFriendsActivity = activities.filter(
    activity => activity.friend === friendsName
  );
  const [currentFilter, setCurrentFilter] = useState('all');
  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  const eachExistingCategoryOnce = [
    ...new Set(selectedFriendsActivity.map(activity => activity.category)),
  ];

  const categoryTagsAndAll = ['all', ...eachExistingCategoryOnce].sort();

  function onFilter(category) {
    setCurrentFilter(category);
    setActive(!active);
  }

  return (
    <Picture>
      <Header>
        {selectedFriendsActivity[0].friend}
        <ArrowBackButton onClick={() => navigate('/')}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <ScrollCategories>
          {categoryTagsAndAll.map((category, index) => {
            return (
              <CategoryButton
                key={index}
                onClick={() => onFilter(category)}
                active={active}
              >
                {category}
              </CategoryButton>
            );
          })}
        </ScrollCategories>
        <List
          activitiesOfSelectedFriend={selectedFriendsActivity}
          errorMessage={hasError}
          onDeleteActivity={onDeleteActivity}
          currentFilter={currentFilter}
          selectedFriendsActivity={selectedFriendsActivity}
        />
      </Main>
      <Navigation>
        <NavLink to="/newactivity">
          <img src={newIcon} alt="new" />
        </NavLink>
      </Navigation>
    </Picture>
  );

  function onDeleteActivity(thisActivityId) {
    setActivities(
      activities.filter(activity => activity.id !== thisActivityId)
    );
    if (
      !selectedFriendsActivity.activity ||
      selectedFriendsActivity.length === 0
    ) {
      navigate('/');
    } else {
      navigate(`/${selectedFriendsActivity.friend}`);
    }
  }
}
const ScrollCategories = styled.div`
  display: flex;
  overflow-x: auto;
`;
const CategoryButton = styled.button`
  gap: 5px;
  margin: 10px;
  width: fit-content;
  background: ${props =>
    props.active ? 'rgba(71, 39, 35, 0.72)' : 'transparent'};
  color: rgba(71, 39, 35, 0.72);
  border: 2px solid rgba(71, 39, 35, 0.42);
  border-radius: 20px;
  padding: 3px 10px;
  font-size: 16px;
  white-space: nowrap;

  /* &:active {
    color: white;
    background: rgba(71, 39, 35, 0.72);
  } */
`;
