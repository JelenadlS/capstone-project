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

  const navigate = useNavigate();

  const eachExistingCategoryOnce = [
    ...new Set(selectedFriendsActivity.map(activity => activity.category)),
  ];

  const categoryTagsAndAll = ['all', ...eachExistingCategoryOnce].sort();
  console.log(categoryTagsAndAll);
  return (
    <Picture>
      <Header>
        {selectedFriendsActivity[0].friend}
        <ArrowBackButton onClick={() => navigate('/')}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <ListStyle role="list" title="list of activities">
          {categoryTagsAndAll.map((category, index) => {
            return <li key={index}>{category}</li>;
          })}
        </ListStyle>
        <List
          activitiesOfSelectedFriend={selectedFriendsActivity}
          errorMessage={hasError}
          onDeleteActivity={onDeleteActivity}
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

const ListStyle = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  margin: 10px;
  overflow-x: auto;
  height: 35px;

  li {
    background: transparent;
    border: 2px solid rgba(71, 39, 35, 0.42);
    border-radius: 20px;
    padding: 5px;
    font-size: 16px;
    white-space: nowrap;
  }
`;
