import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FilterTags from '../components/FilterTags';
import Header from '../components/Header';
import List from '../components/List';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';
import Searchbar from '../components/Searchbar';

import newIcon from '../images/newIcon.svg';

export default function AllActivitiesPage({
  activities,
  currentFilter,
  onFilter,
  filteredSearchActivities,
  //-------------------------------
  // setCurrentFilter,
  // activeSearch,
  // setActiveSearch,
  // activeFilter,
  // setActiveFilter,
  // onShowFilter,
  // onShowSearch,
  //-------------------------------
  setSearchInput,
  searchInput,
  setCurrentFilter,
}) {
  // const filteredSearchActivities = activities.filter(activity => {
  //   if (searchInput === '') {
  //     return activity;
  //   } else {
  //     return activity.activity.toLowerCase().includes(searchInput);
  //   }
  // });

  const [active, setActive] = useState('all');
  //-------------------------------
  // useEffect(() => {
  //   setActiveSearch(true);
  //   setCurrentFilter('all');
  // }, [activities]);
  //-------------------------------

  return (
    <Picture>
      <Header>all activities</Header>
      <Main>
        <Searchbar
          setSearchInput={setSearchInput}
          setActive={setActive}
          setCurrentFilter={setCurrentFilter}
          // onShowSearch={onShowSearch}
          // setActiveFilter={setActiveFilter}
        ></Searchbar>
        <FilterTags
          activities={activities}
          currentFilter={currentFilter}
          onFilter={onFilter}
          setActive={setActive}
          active={active}
          setSearchInput={setSearchInput}
          //onShowFilter={onShowFilter}
        />
        {filteredSearchActivities.length > 0 ? (
          <List
            activities={activities}
            currentFilter={currentFilter}
            searchInput={searchInput}
            filteredSearchActivities={filteredSearchActivities}
            // activeSearch={activeSearch}
            // activeFilter={activeFilter}
          />
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

const EmptyList = styled.p`
  color: rgba(71, 39, 35, 0.72);
  padding: 10px;
  text-align: center;
`;
