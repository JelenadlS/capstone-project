import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import newIcon from '../images/newIcon.svg';

export default function GetInspiredPage({
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  return (
    <Picture>
      <Header handleResetPage={handleResetPage}>Get Inspired</Header>
      <Main></Main>
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
