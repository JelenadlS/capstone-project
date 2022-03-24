import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import newIcon from '../images/newIcon.svg';

export default function SearchPage({ activities }) {
  return (
    <Picture>
      <Header>search activities</Header>
      <Main>
        <ul>
          {activities.map((activiy, index) => {
            return <li key={activiy.id}>{activiy.activity}</li>;
          })}
        </ul>
      </Main>
      <Navigation>
        <Link to="newactivity">
          <img src={newIcon} alt="new" />
        </Link>
      </Navigation>
    </Picture>
  );
}
