import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

import Main from '../components/Main';
import MappedPlaceholderPictures from '../components/MappedPlaceholderPictures.js';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import newIcon from '../images/newIcon.svg';
import nextIcon from '../images/nextIcon.svg';

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
            <WrapperCard>
              {!pastActivity.photo > 0 ? (
                <StyledImage
                  width="30"
                  height="30"
                  alt={`placeholder picture ${pastActivity.category}`}
                  src={MappedPlaceholderPictures[pastActivity.category]}
                />
              ) : (
                <StyledImage
                  width="30"
                  height="30"
                  alt={`uploaded picture ${pastActivity.photo}`}
                  src={pastActivity.photo}
                />
              )}
              {showBin ? (
                <CardSubGrid>
                  <LinkStyling
                    to={`/${pastActivity.friend}/${pastActivity.activity}`}
                  >
                    <strong>{pastActivity.activity}</strong>
                  </LinkStyling>
                </CardSubGrid>
              ) : (
                <CardSubGrid>
                  <LinkStyling
                    to={`/${pastActivity.friend}/${pastActivity.activity}`}
                    onClick={handleResetPage}
                  >
                    <strong>{pastActivity.activity}</strong>
                  </LinkStyling>
                  <StyledArrow>
                    <img src={nextIcon} alt="next page" />
                  </StyledArrow>
                </CardSubGrid>
              )}
            </WrapperCard>
            {/* <ActivityCard
              activity={pastActivity.activity}
              nameOfSelectedCategory={pastActivity.category}
              nameOfSelectedFriend={pastActivity.friend}
              nameOfSelectedActivity={pastActivity.activity}
              photo={pastActivity.photo}
              showBin={showBin}
              handleResetPage={handleResetPage}
            /> */}
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

const WrapperCard = styled.section`
  border-bottom: 1px solid rgba(71, 39, 35, 0.4);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  overflow: hidden;
`;

const CardSubGrid = styled.span`
  display: grid;
  grid-template-columns: 1fr auto;
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
  align-self: center;
`;
