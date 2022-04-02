import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { StyledArrow } from '../components/GeneralStyling';

import nextIcon from '../images/nextIcon.svg';

export default function FriendCard({ name, sumOfActivitiesEach }) {
  return (
    <WrapperCard>
      <LinkStyling to={`/${name}`}>
        <NameStyling aria-label={`${name}`}>
          <strong>{name}</strong>
        </NameStyling>
        <NumStyling aria-label={`number of activities: ${sumOfActivitiesEach}`}>
          #{sumOfActivitiesEach}
          <StyledArrow>
            <img src={nextIcon} alt="next page" />
          </StyledArrow>
        </NumStyling>
      </LinkStyling>
    </WrapperCard>
  );
}

const WrapperCard = styled.section`
  border-bottom: 1px solid rgba(71, 39, 35, 0.4);
  padding: 5px;
`;

const LinkStyling = styled(Link)`
  padding: 8px 8px 0;
  color: rgba(71, 39, 35, 0.72);
  text-decoration: none;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto auto;
`;

const NameStyling = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const NumStyling = styled.p`
  justify-self: end;
`;
