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
  setCurrentFilter,
}) {
  const [searchInput, setSearchInput] = useState('');
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeFilter, setActiveFilter] = useState(true);

  const filteredSearchActivities = activities.filter(activity => {
    if (searchInput === '') {
      return activity;
    } else {
      return activity.activity.toLowerCase().includes(searchInput);
    }
  });

  useEffect(() => {
    setActiveSearch(false);
    setCurrentFilter('all');
  }, [activities]);

  function onShowFilter() {
    setActiveFilter(true);
    setActiveSearch(false);
  }

  function onShowSearch() {
    setActiveSearch(true);
    setActiveFilter(false);
    setCurrentFilter('all');
  }
  console.log(activeFilter);
  console.log(activeSearch);
  return (
    <Picture>
      <Header>all activities</Header>
      <Main>
        <Searchbar
          activities={activities}
          setSearchInput={setSearchInput}
          onShowSearch={onShowSearch}
          setActiveFilter={setActiveFilter}
        ></Searchbar>
        <FilterTags
          activities={activities}
          currentFilter={currentFilter}
          onFilter={onFilter}
          onShowFilter={onShowFilter}
        />
        {filteredSearchActivities.length > 0 ? (
          <List
            activities={activities}
            currentFilter={currentFilter}
            searchInput={searchInput}
            filteredSearchActivities={filteredSearchActivities}
            activeSearch={activeSearch}
            activeFilter={activeFilter}
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
