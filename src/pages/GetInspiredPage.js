import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ActivityCard from '../components/ActivityCard';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import newIcon from '../images/newIcon.svg';

export default function GetInspiredPage({
  pastActivities,
  showBin,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  console.log(pastActivities);
  return (
    <Picture>
      <Header handleResetPage={handleResetPage}>Get Inspired</Header>
      <Main>
        {pastActivities.map(pastActivity => (
          <li key={pastActivity.id}>
            <ActivityCard
              activity={pastActivity.activity}
              nameOfSelectedCategory={pastActivity.category}
              nameOfSelectedFriend={pastActivity.friend}
              nameOfSelectedActivity={pastActivity.activity}
              photo={pastActivity.photo}
              showBin={showBin}
              handleResetPage={handleResetPage}
            />
          </li>
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
